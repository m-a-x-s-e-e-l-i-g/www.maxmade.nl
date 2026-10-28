import { error } from '@sveltejs/kit';
import { gallerySnapshot } from '$lib/server/photography';
import type { PageServerLoad } from './$types';
export const load: PageServerLoad = async ({ params }) => {
	const gallery = await gallerySnapshot();
	const album = gallery?.albums.find((item) => item.slug === params.album);
	if (!album) error(404, 'Album not found');
	return {
		album,
		otherAlbums: gallery!.albums
			.filter((item) => item.slug !== params.album)
			.map(({ slug, title }) => ({ slug, title }))
	};
};
