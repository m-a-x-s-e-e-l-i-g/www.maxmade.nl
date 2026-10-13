import { canonicalUrl, publicPaths } from '$lib/seo';

export const prerender = true;

export function GET() {
	const urls = publicPaths().map((path) => {
		const url = canonicalUrl(path)
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&apos;');
		return '  <url><loc>' + url + '</loc></url>';
	});
	const xml = [
		'<?xml version="1.0" encoding="UTF-8"?>',
		'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
		...urls,
		'</urlset>'
	].join('\n');
	return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
