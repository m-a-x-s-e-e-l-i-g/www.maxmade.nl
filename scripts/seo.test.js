import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { test } from 'node:test';
import photoAlbums from '../src/lib/photography/albums.json' with { type: 'json' };

const base = process.env.SEO_BASE_URL ?? 'http://127.0.0.1:4173';
const origin = 'https://www.maxmade.nl';
const directories = await readdir(new URL('../src/routes/projects/', import.meta.url), {
	withFileTypes: true
});
const paths = [
	'/',
	'/projects',
	'/photography',
	...photoAlbums.map((album) => `/photography/${album.slug}`),
	...directories
		.filter((entry) => entry.isDirectory() && entry.name !== '[slug]')
		.map((entry) => `/projects/${entry.name}`)
];

function metas(html, attribute, name) {
	return [...html.matchAll(/<meta\s+([^>]+)>/g)]
		.filter((match) => match[1].includes(`${attribute}="${name}"`))
		.map((match) => match[1].match(/content="([^"]*)"/)[1]);
}

test('sitemap uses the standard namespace and covers every public page exactly once', async () => {
	const response = await fetch(`${base}/sitemap.xml`);
	assert.equal(response.status, 200);
	assert.match(response.headers.get('content-type'), /(?:application|text)\/xml/);
	const xml = await response.text();
	assert.match(xml, /xmlns="http:\/\/www.sitemaps.org\/schemas\/sitemap\/0.9"/);
	const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
	assert.deepEqual(urls.sort(), paths.map((path) => origin + path).sort());
	assert.equal(new Set(urls).size, urls.length);
});

test('robots allows search crawlers and points to the canonical sitemap', async () => {
	const response = await fetch(`${base}/robots.txt`);
	assert.equal(response.status, 200);
	assert.match(response.headers.get('content-type'), /text\/plain/);
	const robots = await response.text();
	assert.match(robots, /User-agent: \*\s+Allow: \//);
	assert.match(robots, /User-agent: OAI-SearchBot\s+Allow: \//);
	assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
});

for (const path of paths) {
	test(`${path} serves complete metadata, one H1 and connected JSON-LD without JavaScript`, async () => {
		const response = await fetch(`${base}${path}?utm_source=seo-test`, { redirect: 'manual' });
		assert.equal(response.status, 200);
		const html = await response.text();
		assert.equal([...html.matchAll(/<title>/g)].length, 1);
		assert.equal([...html.matchAll(/<h1(?:\s|>)/g)].length, 1);
		const canonical = [...html.matchAll(/<link\s+rel="canonical"\s+href="([^"]*)"/g)];
		assert.deepEqual(
			canonical.map((match) => match[1]),
			[origin + path]
		);
		assert.equal(metas(html, 'name', 'description').length, 1);
		assert.deepEqual(metas(html, 'property', 'og:url'), [origin + path]);
		assert.deepEqual(metas(html, 'property', 'og:title'), metas(html, 'name', 'twitter:title'));
		assert.match(metas(html, 'name', 'robots')[0], /^index, follow/);
		const images = metas(html, 'property', 'og:image');
		assert.equal(images.length, 1);
		assert.match(images[0], /^https:\/\//);
		if (images[0].startsWith(origin)) {
			const imageResponse = await fetch(base + new URL(images[0]).pathname);
			assert.equal(imageResponse.status, 200);
			assert.match(imageResponse.headers.get('content-type'), /^image\//);
		}
		const scripts = [
			...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)
		];
		assert.equal(scripts.length, 1);
		const schema = JSON.parse(scripts[0][1]);
		assert.equal(schema['@context'], 'https://schema.org');
		const graph = schema['@graph'];
		const person = graph.find((item) => item['@type'] === 'Person');
		assert.equal(person.name, 'Max Seelig');
		assert.ok(person.sameAs.includes('https://github.com/m-a-x-s-e-e-l-i-g'));
		const page = graph.find((item) => item['@id'] === `${origin}${path}#webpage`);
		assert.equal(page.url, origin + path);
		assert.ok(graph.some((item) => item['@id'] === page.mainEntity['@id']));
		if (path.startsWith('/projects/')) {
			assert.equal(
				graph.find((item) => item['@type'] === 'CreativeWork').author['@id'],
				person['@id']
			);
			assert.equal(
				graph.find((item) => item['@type'] === 'BreadcrumbList').itemListElement.length,
				3
			);
			assert.match(html, /href="\/projects"/);
		}
	});
}

test('project directory exposes every project page as an ordinary crawlable link', async () => {
	const html = await (await fetch(`${base}/projects`)).text();
	for (const path of paths.filter((path) => path.startsWith('/projects/'))) {
		assert.ok(html.includes(`href="${path}"`), `${path} must be linked`);
	}
	const source = await readFile(new URL('../src/lib/data/projects.ts', import.meta.url), 'utf8');
	const count = [...source.matchAll(/\n\t\tname:/g)].length;
	const graph = JSON.parse(
		html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]
	)['@graph'];
	assert.equal(graph.find((item) => item['@type'] === 'ItemList').itemListElement.length, count);
	assert.equal([...html.matchAll(/<h3(?:\s|>)/g)].length, count);
});

test('unknown projects return 404 rather than redirecting to unrelated content', async () => {
	const response = await fetch(`${base}/projects/this-project-does-not-exist`, {
		redirect: 'manual'
	});
	assert.equal(response.status, 404);
	assert.equal(response.headers.get('location'), null);
});

test('trailing-slash URLs redirect to their canonical path', async () => {
	const response = await fetch(`${base}/projects/very-ssh/`, { redirect: 'manual' });
	assert.equal(response.status, 308);
	assert.equal(new URL(response.headers.get('location'), base).pathname, '/projects/very-ssh');
});
