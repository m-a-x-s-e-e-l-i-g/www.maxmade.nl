import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createHash, randomBytes } from 'node:crypto';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { resolve, join, sep, basename } from 'node:path';
import sharp from 'sharp';
import { syncGallery, visibleMembers, renderVariants, albumAssetPath } from './sync.mjs';
import { openStorage } from './storage.mjs';
import { sealCredential, unsealCredential, getAuthenticatedClient } from './credentials.mjs';
import { syncAuthorized } from './access.mjs';
import albums from './albums.json' with { type: 'json' };
import publicAlbums from '../../src/lib/photography/albums.json' with { type: 'json' };
import { photoRows } from '../../src/lib/photography/layout.ts';

const id = (value) => value.repeat(32);
const config = [{ id: id('a'), slug: 'parkour', title: 'Parkour', description: 'Movement.' }];
const photo = (value, updated = '1') => ({
	asset: {
		id: id(value),
		subtype: 'image',
		updated,
		payload: {
			caption: '',
			gps: 'private-location',
			importSource: { fileName: 'private-filename' }
		},
		links: {}
	}
});

function fixture() {
	const state = {
		members: [photo('c'), photo('b')],
		downloaded: [],
		locked: false,
		published: null,
		index: {},
		images: new Map(),
		renders: 0
	};
	const client = {
		catalog: async () => ({ id: id('d') }),
		albums: async () => [
			{ id: id('a'), subtype: 'collection', payload: { name: 'Parkour', cover: { id: id('b') } } },
			{ id: id('e'), subtype: 'collection', payload: { name: 'Private album' } }
		],
		resources: async (path) => {
			assert.ok(path.includes(id('a')));
			return state.members;
		},
		sampleJpeg: async (_catalog, asset) => {
			state.downloaded.push(asset);
			return Buffer.from(asset);
		}
	};
	const storage = {
		acquireLease: async () => {
			if (state.locked) return null;
			state.locked = true;
			return async () => {
				state.locked = false;
			};
		},
		getIndex: async () => structuredClone(state.index),
		putIndex: async (index) => {
			state.index = structuredClone(index);
		},
		publishManifest: async (manifest) => {
			state.published = structuredClone(manifest);
		},
		putImage: async (name, data) => {
			state.images.set(name, data);
		},
		hasImage: async (name) => state.images.has(name)
	};
	const render = async (bytes) => {
		state.renders++;
		const file = `${createHash('sha256').update(bytes).digest('hex')}.webp`;
		await storage.putImage(file, bytes);
		return [{ file, width: 640, height: 480 }];
	};
	return {
		state,
		client,
		storage,
		run: () => syncGallery({ client, storage, albums: config, render })
	};
}

test('publishes only selected albums, in source order, with the source cover and no private metadata', async () => {
	const { state, run } = fixture();
	const result = await run();
	assert.equal(result.photoCount, 2);
	assert.deepEqual(
		state.published.albums[0].photos.map((item) => item.id),
		[id('c'), id('b')]
	);
	assert.equal(state.published.albums[0].coverId, id('b'));
	assert.equal(state.published.albums.length, 1);
	assert.doesNotMatch(
		JSON.stringify(state.published),
		/private-location|private-filename|Private album/
	);
});

test('unchanged sync reuses images, edits refresh one image and removals disappear from the manifest', async () => {
	const { state, run } = fixture();
	await run();
	assert.equal((await run()).downloaded, 0);
	state.members[0].asset.updated = '2';
	assert.equal((await run()).downloaded, 1);
	state.members = [state.members[1]];
	assert.equal((await run()).downloaded, 0);
	assert.deepEqual(
		state.published.albums[0].photos.map((item) => item.id),
		[id('b')]
	);
});

test('hosted unchanged images reuse the durable cache without per-photo network checks', async () => {
	const { storage, run } = fixture();
	await run();
	storage.cloud = true;
	storage.hasImage = async () => {
		throw new Error('Unexpected network metadata request');
	};
	assert.equal((await run()).downloaded, 0);
});

test('a failed image preserves the previous public snapshot while retaining complete private cache work', async () => {
	const { state, client, run } = fixture();
	await run();
	const previous = structuredClone(state.published);
	state.members = [photo('c', '2'), photo('b', '2'), photo('f')];
	client.sampleJpeg = async (_catalog, asset) => {
		if (asset === id('f')) throw new Error('Adobe unavailable');
		return Buffer.from(asset + 'edited');
	};
	await assert.rejects(run(), /Adobe unavailable/);
	assert.deepEqual(state.published, previous);
	assert.equal(state.locked, false);
	assert.equal(state.index[id('c')].fingerprint.length, 64);
});

test('a stale Adobe rendition cannot replace the last successful gallery', async () => {
	const { state, run } = fixture();
	await run();
	const previous = structuredClone(state.published);
	state.members[0].asset.updated = '3';
	state.members[0].asset.links['/rels/rendition_type/2048'] = { invalid: true };
	await assert.rejects(run(), /still rendering/);
	assert.deepEqual(state.published, previous);
});

test('confirmed deleted albums disappear, but an inventory failure retains the old snapshot', async () => {
	const { state, client, run } = fixture();
	await run();
	client.albums = async () => [];
	client.json = async () => {
		throw Object.assign(new Error('Deleted'), { status: 404 });
	};
	await run();
	assert.deepEqual(state.published.albums, []);
	client.json = async () => {
		throw Object.assign(new Error('Unavailable'), { status: 503 });
	};
	await assert.rejects(run(), /Unavailable/);
	assert.deepEqual(state.published.albums, []);
});

test('sync lease prevents overlapping refresh-token exchanges as well as image work', async () => {
	const { state, storage } = fixture();
	state.locked = true;
	let authentications = 0;
	const result = await syncGallery({
		storage,
		albums: config,
		getClient: async () => {
			authentications++;
		}
	});
	assert.equal(result.skipped, true);
	assert.equal(authentications, 0);
});

test('stack expansion reads the visible cover only and preserves its album position', async () => {
	const stack = { asset: { subtype: 'stack', payload: { cover: { id: id('f') } } } };
	const calls = [];
	const result = await visibleMembers(
		[photo('b'), stack, photo('c')],
		{
			json: async (path) => {
				calls.push(path);
				return photo('f').asset;
			}
		},
		id('d')
	);
	assert.deepEqual(
		result.map((item) => item.asset.id),
		[id('b'), id('f'), id('c')]
	);
	assert.deepEqual(calls, [`catalogs/${id('d')}/assets/${id('f')}`]);
});

test('Lightroom sort settings map to explicit order and capture-date pagination', () => {
	const capture = new URL(
		albumAssetPath(id('d'), id('a'), 'captureDateAsc'),
		'https://lr.adobe.io/v2/'
	);
	assert.equal(capture.searchParams.get('captured_after'), '-0001-12-31T23:59:59');
	assert.equal(capture.searchParams.has('order_after'), false);
	const custom = new URL(albumAssetPath(id('d'), id('a'), 'customAsc'), 'https://lr.adobe.io/v2/');
	assert.equal(custom.searchParams.get('order_after'), '-');
});

test('rendered web images strip EXIF and retain oriented dimensions', async () => {
	const jpeg = await sharp({
		create: { width: 24, height: 36, channels: 3, background: '#31465a' }
	})
		.withExif({ IFD0: { Artist: 'private-owner' }, IFD3: { GPSLatitudeRef: 'N' } })
		.jpeg()
		.toBuffer();
	const images = new Map();
	const variants = await renderVariants(jpeg, {
		putImage: async (key, bytes) => images.set(key, bytes)
	});
	assert.equal(variants[0].width, 24);
	assert.equal(variants[0].height, 36);
	const metadata = await sharp(images.get(variants[0].file)).metadata();
	assert.equal(metadata.exif, undefined);
	assert.equal(metadata.xmp, undefined);
});

test('encrypted hosting credentials authenticate their contents and reject tampering', () => {
	const key = randomBytes(32).toString('base64');
	const input = { token: { access_token: 'private-token' } };
	const sealed = sealCredential(input, key);
	assert.ok(!JSON.stringify(sealed).includes('private-token'));
	assert.deepEqual(unsealCredential(sealed, key), input);
	assert.throws(() => unsealCredential({ ...sealed, data: 'AAAA' }, key), /could not be unlocked/);
	assert.throws(
		() => unsealCredential(sealed, randomBytes(32).toString('base64')),
		/could not be unlocked/
	);
});

test('sync endpoint rejects missing, short, or incorrect credentials', () => {
	const secret = 'a'.repeat(40);
	assert.equal(syncAuthorized(new Request('https://example.com'), secret), false);
	assert.equal(
		syncAuthorized(
			new Request('https://example.com', { headers: { authorization: `Bearer ${secret}` } }),
			secret
		),
		true
	);
	assert.equal(
		syncAuthorized(
			new Request('https://example.com', { headers: { authorization: 'Bearer wrong' } }),
			secret
		),
		false
	);
});

test('local cache commits whole snapshots and refuses image path traversal', async () => {
	const directory = await mkdtemp(join(tmpdir(), 'maxmade-gallery-test-'));
	try {
		const storage = openStorage({ directory, cloud: false });
		const release = await storage.acquireLease();
		assert.equal(await storage.acquireLease(), null);
		await release();
		await storage.publishManifest({ version: 1, albums: [] });
		assert.deepEqual(await storage.getManifest(), { version: 1, albums: [] });
		assert.equal(await storage.getImage('../credential.json'), null);
	} finally {
		const path = resolve(directory);
		assert.ok(
			path.startsWith(resolve(tmpdir()) + sep) && basename(path).startsWith('maxmade-gallery-test-')
		);
		await rm(path, { recursive: true, force: true });
	}
});

test('responsive rows preserve Lightroom order and stay inside the viewport', () => {
	const photos = [1.5, 0.7, 1, 2, 0.8, 1.3].map((ratio, i) => ({
		id: String(i),
		width: ratio * 100,
		height: 100
	}));
	for (const width of [320, 390, 768, 1440]) {
		const rows = photoRows(photos, width);
		assert.deepEqual(
			rows.flatMap((row) => row.photos.map(({ photo }) => photo.id)),
			photos.map((photo) => photo.id)
		);
		assert.ok(rows.every((row) => row.width <= width + 0.001 && row.height > 0));
		if (width < 600) assert.ok(rows.every((row) => row.photos.length === 1));
	}
});

test('public album routes match the explicitly selected source albums', () => {
	assert.deepEqual(
		albums.map(({ slug, title }) => ({ slug, title })),
		publicAlbums
	);
});

test('expired hosted credentials rotate before API use and the new refresh token is saved encrypted', async (t) => {
	const key = randomBytes(32).toString('base64');
	const original = {
		clientId: 'client',
		clientSecret: 'secret',
		savedAt: '2000-01-01T00:00:00Z',
		token: { access_token: 'old-access', refresh_token: 'old-refresh', expires_in: 1 }
	};
	let saved;
	const storage = {
		cloud: true,
		getCredentialEnvelope: async () => sealCredential(original, key),
		putCredentialEnvelope: async (envelope) => {
			saved = envelope;
		}
	};
	t.mock.method(globalThis, 'fetch', async (url, options) => {
		assert.equal(url, 'https://ims-na1.adobelogin.com/ims/token/v3');
		assert.equal(options.redirect, 'manual');
		assert.equal(new URLSearchParams(options.body).get('refresh_token'), 'old-refresh');
		return Response.json({
			access_token: 'new-access',
			refresh_token: 'new-refresh',
			expires_in: 86400,
			id_token: 'unused-private-profile'
		});
	});
	const client = await getAuthenticatedClient(storage, {
		LIGHTROOM_CREDENTIAL_KEY: key,
		LIGHTROOM_INITIAL_CREDENTIAL: 'not-used-when-a-stored-credential-exists'
	});
	assert.equal(client.accessToken, 'new-access');
	const decoded = unsealCredential(saved, key);
	assert.equal(decoded.token.refresh_token, 'new-refresh');
	assert.equal(decoded.token.id_token, undefined);
});
