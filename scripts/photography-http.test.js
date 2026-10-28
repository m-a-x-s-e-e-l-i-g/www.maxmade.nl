import assert from 'node:assert/strict';
import { test } from 'node:test';
import sharp from 'sharp';

const base = process.env.PHOTO_BASE_URL ?? 'http://127.0.0.1:5180';

for (const slug of ['parkour', 'favorites']) {
	test(`${slug} is server-rendered with photos and no private sync metadata`, async () => {
		const response = await fetch(`${base}/photography/${slug}`);
		assert.equal(response.status, 200);
		const html = await response.text();
		assert.ok(html.includes('class="photograph'));
		assert.doesNotMatch(
			html,
			/sourceId|catalogId|access_token|refresh_token|clientSecret|lr\.adobe\.io/
		);
		const src = html.match(/src="(\/photography\/media\/[a-f0-9]{64}\.webp)"/)[1];
		const image = await fetch(base + src);
		assert.equal(image.status, 200);
		assert.match(image.headers.get('content-type'), /^image\/webp/);
		const metadata = await sharp(Buffer.from(await image.arrayBuffer())).metadata();
		assert.equal(metadata.format, 'webp');
		assert.equal(metadata.exif, undefined);
	});
}

for (const path of [
	'/.lightroom-proof/credentials.dpapi',
	'/.photography-cache/manifest.json',
	'/photography/not-an-allowed-album',
	`/photography/media/${'0'.repeat(64)}.webp`
]) {
	test(`${path} cannot expose unpublished data`, async () => {
		assert.equal((await fetch(base + path)).status, 404);
	});
}
