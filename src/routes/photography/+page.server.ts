import { gallerySnapshot } from '$lib/server/photography';
import type { PageServerLoad } from './$types';
export const load: PageServerLoad = async () => ({ gallery: await gallerySnapshot() });
