import { SITE_URL } from '$lib/seo';

export const prerender = true;

export function GET() {
	return new Response(
		[
			'User-agent: *',
			'Allow: /',
			'',
			'# ChatGPT Search discovery. Training crawlers retain the default policy above.',
			'User-agent: OAI-SearchBot',
			'Allow: /',
			'',
			`Sitemap: ${SITE_URL}/sitemap.xml`,
			''
		].join('\n'),
		{ headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
	);
}
