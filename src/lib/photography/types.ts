export type PhotoVariant = { file: string; width: number; height: number };
export type Photograph = {
	id: string;
	caption: string;
	width: number;
	height: number;
	variants: PhotoVariant[];
};
export type PhotoAlbum = {
	slug: string;
	title: string;
	description: string;
	coverId: string | null;
	photos: Photograph[];
};
export type GallerySnapshot = { version: 1; syncedAt: string; albums: PhotoAlbum[] };
export type StoredGallerySnapshot = Omit<GallerySnapshot, 'albums'> & {
	albums: (PhotoAlbum & { sourceId: string })[];
};
