import { openStorage } from '../../services/photography/storage.mjs';
import { getAuthenticatedClient } from '../../services/photography/credentials.mjs';
import { syncGallery } from '../../services/photography/sync.mjs';
import { syncAuthorized } from '../../services/photography/access.mjs';

export default async function handler(request) {
	if (request.method !== 'POST') return new Response('Method not allowed', { status: 405 });
	if (
		process.env.LIGHTROOM_SYNC_ENABLED !== 'true' ||
		!syncAuthorized(request, process.env.LIGHTROOM_SYNC_SECRET)
	)
		return new Response('Not authorized', { status: 403 });
	try {
		const storage = openStorage({ cloud: true });
		const result = await syncGallery({ getClient: () => getAuthenticatedClient(storage), storage });
		console.log('Lightroom gallery sync', JSON.stringify(result));
		return Response.json(result);
	} catch {
		// Keep credentials, private metadata and third-party response bodies out of logs.
		console.error('Lightroom gallery sync failed; previous published snapshot retained.');
		return new Response('Gallery sync failed', { status: 500 });
	}
}

export const config = { background: true };
