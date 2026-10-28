import { openStorage } from '../../../services/photography/storage.mjs';
import configuredAlbums from '../../../services/photography/albums.json';
import type { GallerySnapshot } from '$lib/photography/types';

export async function gallerySnapshot(): Promise<GallerySnapshot | null> {
	const snapshot = await openStorage().getManifest();
	if (!snapshot || snapshot.version !== 1 || !Array.isArray(snapshot.albums)) return null;
	return {
		...snapshot,
		albums: snapshot.albums
			.filter((album) =>
				configuredAlbums.some(
					(config) => config.slug === album.slug && config.id === album.sourceId
				)
			)
			.map((stored) => ({
				slug: stored.slug,
				title: stored.title,
				description: stored.description,
				coverId: stored.coverId,
				photos: stored.photos
			}))
	};
}

export async function publishedImage(file: string) {
	if (!/^[a-f0-9]{64}\.webp$/.test(file)) return null;
	const snapshot = await gallerySnapshot();
	const published = snapshot?.albums.some((album) =>
		album.photos.some((photo) => photo.variants.some((variant) => variant.file === file))
	);
	return published ? openStorage().getImage(file) : null;
}
