import sharp from 'sharp';
import { createHash } from 'node:crypto';
import configuredAlbums from './albums.json' with { type: 'json' };

const hash = (value) => createHash('sha256').update(value).digest('hex');
const cleanText = (value) =>
	typeof value === 'string'
		? value
				.replace(/\p{Cc}/gu, '')
				.trim()
				.slice(0, 1000)
		: '';

export function albumAssetPath(catalogId, albumId, sort = 'customAsc') {
	const query = new URLSearchParams({ embed: 'asset', limit: '500' });
	if (sort === 'captureDateAsc') query.set('captured_after', '-0001-12-31T23:59:59');
	else if (sort === 'captureDateDesc') query.set('captured_before', '9999-12-31T23:59:59');
	else if (sort === 'customDesc') {
		query.set('order_before', '');
		query.set('captured_before', '9999-12-31T23:59:59');
	} else if (sort === 'customAsc') query.set('order_after', '-');
	else throw new Error('This Lightroom album uses an unsupported sort order.');
	return `catalogs/${catalogId}/albums/${albumId}/assets?${query}`;
}

export async function visibleMembers(members, client, catalogId) {
	const result = [];
	for (const member of members) {
		if (member.asset?.subtype !== 'stack') {
			result.push(member);
			continue;
		}
		const cover = member.asset.payload?.cover?.id;
		if (!/^[a-f0-9]{32}$/i.test(cover ?? ''))
			throw new Error('A Lightroom stack has no accessible cover.');
		const asset = await client.json(`catalogs/${catalogId}/assets/${cover}`);
		if (asset.subtype !== 'image')
			throw new Error('The Lightroom stack cover is not a photograph.');
		result.push({ ...member, asset });
	}
	return result;
}

async function mapLimited(items, mapper) {
	const result = new Array(items.length);
	let cursor = 0;
	let failure;
	await Promise.all(
		Array.from({ length: Math.min(3, items.length) }, async () => {
			while (cursor < items.length && !failure) {
				const index = cursor++;
				try {
					result[index] = await mapper(items[index], index);
				} catch (error) {
					failure = error;
				}
			}
		})
	);
	if (failure) throw failure;
	return result;
}

export async function renderVariants(jpeg, storage) {
	const variants = [];
	for (const width of [640, 1280, 2048]) {
		// Sharp rotates before stripping EXIF, then converts to sRGB. GPS, camera
		// serial numbers, filenames and other private metadata are never published.
		const { data, info } = await sharp(jpeg)
			.rotate()
			.resize({ width, withoutEnlargement: true })
			.toColourspace('srgb')
			.webp({ quality: 85, effort: 4 })
			.toBuffer({ resolveWithObject: true });
		const file = `${hash(data)}.webp`;
		await storage.putImage(file, data);
		if (!variants.some((item) => item.width === info.width))
			variants.push({ file, width: info.width, height: info.height });
	}
	return variants;
}

export async function syncGallery({
	client,
	getClient,
	storage,
	albums = configuredAlbums,
	render = renderVariants,
	onProgress = () => {}
}) {
	if (
		!Array.isArray(albums) ||
		albums.some((album) => !/^[a-f0-9]{32}$/i.test(album.id) || !/^[a-z0-9-]+$/.test(album.slug))
	)
		throw new Error('Invalid photography album allowlist.');
	const release = await storage.acquireLease();
	if (!release) return { skipped: true, reason: 'Sync is already running.' };
	let previous = {};
	const nextIndex = {};
	try {
		previous = (await storage.getIndex()) ?? {};
		client ??= await getClient();
		const catalog = await client.catalog();
		const available = await client.albums(catalog.id);
		const snapshot = { version: 1, syncedAt: new Date().toISOString(), albums: [] };
		let downloaded = 0;
		let reused = 0;
		const started = Date.now();
		for (const config of albums) {
			let source = available.find(
				(album) => album.id === config.id && ['collection', 'project'].includes(album.subtype)
			);
			if (!source) {
				try {
					source = await client.json(`catalogs/${catalog.id}/albums/${config.id}`);
				} catch (error) {
					if (error.status === 404) continue;
					throw error;
				}
				if (!['collection', 'project'].includes(source.subtype))
					throw new Error('Configured photo album has an unsupported type.');
			}
			const rawMembers = await client.resources(
				albumAssetPath(catalog.id, config.id, source.payload?.assetSortOrder)
			);
			const members = await visibleMembers(rawMembers, client, catalog.id);
			const seen = new Set();
			const images = members.filter((member) => {
				if (member.asset?.subtype !== 'image' || seen.has(member.asset.id)) return false;
				seen.add(member.asset.id);
				return true;
			});
			let completed = 0;
			const photos = await mapLimited(images, async (member) => {
				if (Date.now() - started > 13 * 60_000)
					throw new Error('Sync exceeded its time budget; previous gallery retained.');
				const asset = member.asset;
				const fingerprint = hash(
					JSON.stringify({ updated: asset.updated, payload: asset.payload, links: asset.links })
				);
				let cached = nextIndex[asset.id] ?? previous[asset.id];
				if (
					cached?.fingerprint === fingerprint &&
					(await storage.hasImage(cached.variants[0].file))
				)
					reused++;
				else {
					const invalid = asset.links?.['/rels/rendition_type/2048']?.invalid;
					if (invalid === true || invalid === 'true')
						throw new Error(
							'Adobe is still rendering an edited photograph; previous gallery retained.'
						);
					const variants = await render(
						Buffer.from(await client.sampleJpeg(catalog.id, asset.id)),
						storage
					);
					cached = { fingerprint, variants };
					downloaded++;
				}
				nextIndex[asset.id] = cached;
				const largest = cached.variants.at(-1);
				completed++;
				onProgress({
					album: config.slug,
					count: completed,
					total: images.length,
					downloaded,
					reused
				});
				return {
					id: asset.id,
					caption: cleanText(asset.payload?.caption),
					width: largest.width,
					height: largest.height,
					variants: cached.variants
				};
			});
			const coverId =
				source.payload?.cover?.id ?? members.find((item) => item.payload?.cover)?.asset?.id;
			snapshot.albums.push({
				sourceId: config.id,
				slug: config.slug,
				title: cleanText(source.payload?.name) || config.title,
				description: cleanText(source.payload?.description) || config.description,
				coverId: photos.find((photo) => photo.id === coverId)?.id ?? photos[0]?.id ?? null,
				photos
			});
		}
		// Images and every selected album must complete before this single public
		// pointer changes. Partial runs cannot replace the last good gallery.
		await storage.publishManifest(snapshot);
		return {
			skipped: false,
			albumCount: snapshot.albums.length,
			photoCount: snapshot.albums.reduce((sum, album) => sum + album.photos.length, 0),
			downloaded,
			reused
		};
	} finally {
		// Retain fully written private image-cache entries even when a later image
		// fails. They are not public until the manifest above commits successfully.
		try {
			await storage.putIndex({ ...previous, ...nextIndex });
		} finally {
			await release();
		}
	}
}
