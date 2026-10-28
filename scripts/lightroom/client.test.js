import assert from 'node:assert/strict';
import { test } from 'node:test';
import { adobeUrl, LightroomClient, parseAdobeJson } from './client.js';
import { callbackCode, createAuthorization, REDIRECT_URI, tokens } from './authorize.js';
import { selectAlbum } from './probe.js';
import { saveCredentials, readCredentials } from './secure-store.js';
import { mkdtemp, readFile, rm, rmdir } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const catalogId = 'a'.repeat(32);
const albumId = 'b'.repeat(32);
const assetId = 'c'.repeat(32);
const apiBase = `https://lr.adobe.io/v2/catalogs/${catalogId}/`;
const jsonResponse = (value) => new Response(`while(1){}${JSON.stringify(value)}`);
const clientWith = (fetchImpl) =>
	new LightroomClient({ clientId: 'test-key', accessToken: 'test-secret', fetchImpl });

test('accepts Adobe anti-hijacking JSON prefix and ordinary JSON', () => {
	assert.deepEqual(parseAdobeJson(' \nwhile (1) { } {"resources":[]}'), { resources: [] });
	assert.deepEqual(parseAdobeJson('{"id":"example"}'), { id: 'example' });
	assert.throws(() => parseAdobeJson('while(1){}invalid'), SyntaxError);
	assert.throws(
		() => parseAdobeJson('private-response-fragment'),
		(error) => error instanceof SyntaxError && !error.message.includes('private-response-fragment')
	);
});

test('never sends credentials to off-origin, downgraded or deceptive API links', async () => {
	let calls = 0;
	const client = clientWith(() => calls++);
	for (const url of [
		'https://example.com/v2/catalog',
		'http://lr.adobe.io/v2/catalog',
		'//example.com/v2/catalog',
		'https://lr.adobe.io.example.com/v2/catalog',
		'https://user:password@lr.adobe.io/v2/catalog',
		'https://lr.adobe.io/v2/../other',
		'https://lr.adobe.io/v2/catalog#token'
	]) {
		await assert.rejects(client.request(url), /outside the official/);
	}
	assert.equal(calls, 0);
	assert.equal(adobeUrl('albums', apiBase).href, `${apiBase}albums`);
});

test('follows paged album contents with authenticated GETs and no automatic redirects', async () => {
	const requests = [];
	const client = clientWith((url, options) => {
		requests.push(url.href);
		assert.equal(options.method, 'GET');
		assert.equal(options.redirect, 'manual');
		assert.equal(options.headers.Authorization, 'Bearer test-secret');
		assert.equal(options.headers['X-API-Key'], 'test-key');
		return jsonResponse(
			requests.length === 1
				? {
						base: apiBase,
						resources: [{ id: assetId }],
						links: { next: { href: `albums/${albumId}/assets?captured_before=cursor` } }
					}
				: { resources: [{ id: 'd'.repeat(32) }] }
		);
	});
	assert.equal((await client.albumAssets(catalogId, albumId)).length, 2);
	assert.equal(requests[1], `${apiBase}albums/${albumId}/assets?captured_before=cursor`);
});

test('rejects cross-origin pagination before leaking an authorization header', async () => {
	let calls = 0;
	const client = clientWith(() => {
		calls++;
		return jsonResponse({ resources: [], links: { next: { href: 'https://example.com/v2/' } } });
	});
	await assert.rejects(client.albumAssets(catalogId, albumId), /outside the official/);
	assert.equal(calls, 1);
});

test('does not treat repeated pagination or malformed listings as a complete album', async () => {
	const href = `${apiBase}albums/${albumId}/assets?embed=asset`;
	const looping = clientWith(() => jsonResponse({ resources: [], links: { next: { href } } }));
	await assert.rejects(looping.albumAssets(catalogId, albumId), /pagination/);
	const malformed = clientWith(() => jsonResponse({ unexpected: true }));
	await assert.rejects(malformed.albumAssets(catalogId, albumId), /Unexpected/);
});

test('paginates albums by name_after when full pages do not include a next link', async () => {
	let calls = 0;
	const first = Array.from({ length: 101 }, (_, index) => ({
		id: index.toString(16).padStart(32, '0'),
		payload: { name: index === 100 ? 'Name & last' : `Album ${index}` }
	}));
	const client = clientWith((url) => {
		calls++;
		if (calls === 1) return jsonResponse({ resources: first });
		assert.equal(url.searchParams.get('name_after'), 'Name & last');
		return jsonResponse({ resources: [] });
	});
	assert.equal((await client.albums(catalogId)).length, 101);
	assert.equal(calls, 2);
});

test('reports entitlement failures without exposing Adobe response bodies', async () => {
	const client = clientWith(
		() => new Response('private test-secret account payload', { status: 403 })
	);
	await assert.rejects(client.catalog(), (error) => {
		assert.match(error.message, /403.*entitlement/);
		assert.doesNotMatch(error.message, /test-secret|private/);
		return true;
	});
});

test('rejects redirect responses rather than forwarding credentials', async () => {
	const client = clientWith(
		() => new Response(null, { status: 302, headers: { Location: 'https://example.com' } })
	);
	await assert.rejects(client.catalog(), /HTTP 302/);
});

test('downloads an existing JPEG and refuses non-image responses', async () => {
	const jpeg = Uint8Array.from([0xff, 0xd8, 0xff, 0xd9]);
	const client = clientWith((url) => {
		assert.equal(url.pathname, `/v2/catalogs/${catalogId}/assets/${assetId}/renditions/2048`);
		return new Response(jpeg);
	});
	assert.deepEqual(await client.sampleJpeg(catalogId, assetId), jpeg);
	const invalid = clientWith(() => new Response('<html>sign in</html>'));
	await assert.rejects(invalid.sampleJpeg(catalogId, assetId), /did not return a JPEG/);
});

test('OAuth authorization uses fresh state, PKCE and the exact registered redirect', () => {
	const first = createAuthorization('test-key');
	const second = createAuthorization('test-key');
	assert.notEqual(first.state, second.state);
	assert.notEqual(first.verifier, second.verifier);
	const url = new URL(first.url);
	assert.equal(url.origin, 'https://ims-na1.adobelogin.com');
	assert.equal(url.searchParams.get('redirect_uri'), REDIRECT_URI);
	assert.equal(url.searchParams.get('code_challenge_method'), 'S256');
	assert.equal(url.searchParams.get('state'), first.state);
	assert.ok(!first.url.includes(first.verifier));
});

test('OAuth code handoff rejects incorrect state, destination and consent errors', () => {
	assert.equal(
		callbackCode(`${REDIRECT_URI}?state=expected&code=private-code`, 'expected'),
		'private-code'
	);
	for (const value of [
		`${REDIRECT_URI}?state=wrong&code=private-code`,
		'https://example.com/lightroom/callback?state=expected&code=private-code',
		`${REDIRECT_URI}?state=expected&error=access_denied`,
		`${REDIRECT_URI}?state=expected`,
		`${REDIRECT_URI}?state=expected&code=private-code#fragment`
	]) {
		assert.throws(
			() => callbackCode(value, 'expected'),
			(error) => {
				assert.doesNotMatch(error.message, /private-code/);
				return true;
			}
		);
	}
});

test('OAuth exchanges codes only with Adobe IMS, without credentials in URLs or errors', async () => {
	const result = await tokens(
		'test-key',
		'client-secret',
		{ grant_type: 'authorization_code', code: 'private-code' },
		(url, options) => {
			assert.equal(url.href, 'https://ims-na1.adobelogin.com/ims/token/v3');
			assert.equal(options.method, 'POST');
			assert.equal(options.redirect, 'manual');
			assert.equal(
				options.headers.Authorization,
				`Basic ${Buffer.from('test-key:client-secret').toString('base64')}`
			);
			assert.equal(new URLSearchParams(options.body).get('code'), 'private-code');
			return new Response(JSON.stringify({ access_token: 'test-token' }));
		}
	);
	assert.equal(result.access_token, 'test-token');
	await assert.rejects(
		tokens('test-key', 'client-secret', {}, () => new Response('private-code', { status: 400 })),
		/HTTP 400/
	);
});

test('selects live Lightroom collection albums and excludes collection folders and smart albums', () => {
	const albums = [
		{ id: 'folder', subtype: 'collection_set', payload: { name: 'Folder' } },
		{ id: 'other', subtype: 'collection', payload: { name: 'Other' } },
		{ id: 'parkour', subtype: 'collection', payload: { name: 'Parkour' } },
		{ id: 'smart', subtype: 'smart', payload: { name: 'Smart' } },
		{ id: 'partner', subtype: 'project', payload: { name: 'Partner' } }
	];
	assert.equal(selectAlbum(albums).id, 'parkour');
	assert.equal(selectAlbum(albums, 'partner').id, 'partner');
	assert.equal(selectAlbum(albums, 'other').id, 'other');
	assert.equal(selectAlbum(albums, 'folder'), undefined);
	assert.equal(selectAlbum(albums, 'smart'), undefined);
});

test(
	'Windows credential store encrypts tokens at rest and can unlock them for the current user',
	{ skip: process.platform !== 'win32' },
	async () => {
		const directory = await mkdtemp(join(tmpdir(), 'maxmade-lightroom-test-'));
		const path = join(directory, 'test.dpapi');
		const credentials = { clientId: 'test-key', token: { access_token: 'private-test-token' } };
		try {
			await saveCredentials(credentials, path);
			assert.ok(!(await readFile(path, 'utf8')).includes('private-test-token'));
			assert.deepEqual(await readCredentials(path), credentials);
		} finally {
			await rm(path, { force: true });
			await rmdir(directory);
		}
	}
);
