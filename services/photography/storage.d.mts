import type { StoredGallerySnapshot } from '../../src/lib/photography/types';
export function openStorage(options?: { directory?: string; cloud?: boolean }): {
	cloud: boolean;
	getManifest(): Promise<StoredGallerySnapshot | null>;
	publishManifest(manifest: StoredGallerySnapshot): Promise<unknown>;
	getImage(name: string): Promise<ArrayBuffer | null>;
};
