import { error } from '@sveltejs/kit';
import { publishedImage } from '$lib/server/photography';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params }) => {
	const bytes = await publishedImage(params.file);
	if (!bytes) error(404, 'Photograph not found');
	return new Response(bytes, {
		headers: {
			'Content-Type': 'image/webp',
			'Cache-Control': 'public, max-age=86400',
			'X-Content-Type-Options': 'nosniff'
		}
	});
};
