import { projects } from '$lib/data/projects';

const SITE_URL = 'https://www.maxmade.nl';

function getStaticRoutes() {
  return ['/'];
}

function getProjectPages() {
  return projects
	.filter((p) => p.projectPage)
	.map((p) => p.projectPage);
}

function buildUrlElement(path) {
  const priority = path === '/' ? '1.0' : '0.7';
  return [
	'    <url>',
	`        <loc>${SITE_URL}${path}</loc>`,
	'        <changefreq>weekly</changefreq>',
	`        <priority>${priority}</priority>`,
	'    </url>'
  ].join('\n');
}

function buildSitemapXml(urlElements) {
  return [
	'<?xml version="1.0" encoding="UTF-8"?>',
	'<urlset',
	'    xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"',
	'    xmlns:xhtml="https://www.w3.org/1999/xhtml"',
	'    xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"',
	'    xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"',
	'    xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"',
	'    xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"',
	'>',
	...urlElements,
	'</urlset>'
  ].join('\n');
}

export async function GET() {
  const urls = [
	...getStaticRoutes(),
	...getProjectPages()
  ];

  const urlElements = urls.map(buildUrlElement);
  const xml = buildSitemapXml(urlElements);

  return new Response(xml, {
	headers: {
	  'Content-Type': 'application/xml'
	}
  });
}