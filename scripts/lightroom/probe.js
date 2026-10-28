import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { parseArgs, parseEnv } from 'node:util';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import { LightroomClient } from './client.js';
import { readCredentials } from './secure-store.js';

export const root = new URL('../../', import.meta.url);

export async function localEnvironment() {
	let localEnv = {};
	try {
		localEnv = parseEnv(await readFile(new URL('.env.lightroom.local', root), 'utf8'));
	} catch (error) {
		if (error.code !== 'ENOENT') throw error;
	}
	return { ...localEnv, ...process.env };
}

async function main() {
	const { values } = parseArgs({
		options: { album: { type: 'string' }, help: { type: 'boolean', short: 'h' } }
	});
	if (values.help) {
		console.log(
			'npm run lightroom:probe -- [--album ALBUM_ID]\n' +
				'Lists cloud albums. With --album, reads that album and saves one existing 2048px JPEG locally.\n' +
				'Credentials: .env.lightroom.local. Setup: scripts/lightroom/README.md.'
		);
		return;
	}
	const env = await localEnvironment();
	const saved = await readCredentials();
	const client = new LightroomClient({
		clientId: env.LIGHTROOM_CLIENT_ID || saved?.clientId,
		accessToken: env.LIGHTROOM_ACCESS_TOKEN || saved?.token?.access_token
	});
	await runProbe(client, { albumId: values.album });
}

export async function runProbe(client, { albumId, firstAlbum = false } = {}) {
	const catalog = await client.catalog();
	const albums = await client.albums(catalog.id);
	console.log(`Cloud catalog accessible. Found ${albums.length} albums / album folders.`);
	console.table(
		albums.map((album) => ({
			id: album.id,
			name: String(album.payload?.name ?? '').replace(/\p{Cc}/gu, ''),
			type: album.subtype
		}))
	);
	if (!albumId && !firstAlbum) {
		console.log('Choose one album ID and rerun: npm run lightroom:probe -- --album ALBUM_ID');
		return;
	}
	const album = selectAlbum(albums, albumId);
	if (!album) {
		throw new Error(
			'Choose a photo album from the list (collection or project), not an album folder.'
		);
	}
	const members = await client.albumAssets(catalog.id, album.id);
	const photo = members.find((member) => member.asset?.subtype === 'image');
	if (!photo) throw new Error('This album has no accessible image to test.');
	const jpeg = await client.sampleJpeg(catalog.id, photo.asset.id);
	const output = new URL('.lightroom-proof/', root);
	await mkdir(output, { recursive: true });
	await writeFile(new URL('sample.jpg', output), jpeg);
	await writeFile(
		new URL('result.json', output),
		JSON.stringify(
			{
				checkedAt: new Date().toISOString(),
				catalogId: catalog.id,
				albumId: album.id,
				albumName: album.payload?.name,
				memberCount: members.length,
				sampleAssetId: photo.asset.id,
				sampleRendition: '2048',
				sampleBytes: jpeg.byteLength
			},
			null,
			2
		) + '\n'
	);
	console.log(
		`Album accessible: ${members.length} members; sample saved in ${fileURLToPath(output)}`
	);
	console.log('One-time album access proof passed. Ongoing publishing is not configured.');
}

export function selectAlbum(albums, albumId) {
	const photos = albums.filter((item) => ['collection', 'project'].includes(item.subtype));
	if (albumId) return photos.find((item) => item.id === albumId);
	return photos.find((item) => item.payload?.name?.trim().toLowerCase() === 'parkour') ?? photos[0];
}

if (resolve(process.argv[1] ?? '') === fileURLToPath(import.meta.url)) {
	main().catch((error) => {
		// Never print API response bodies, request headers, tokens or stack traces.
		console.error(error.message);
		process.exitCode = 1;
	});
}
