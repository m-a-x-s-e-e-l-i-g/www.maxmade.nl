export default async function handler() {
	if (process.env.LIGHTROOM_SYNC_ENABLED !== 'true') return new Response('Sync not enabled');
	const secret = process.env.LIGHTROOM_SYNC_SECRET;
	if (!secret || secret.length < 32)
		throw new Error('Configure LIGHTROOM_SYNC_SECRET before enabling photography sync.');
	const origin = new URL(process.env.URL ?? 'https://www.maxmade.nl');
	if (origin.protocol !== 'https:') throw new Error('The gallery sync endpoint requires HTTPS.');
	const response = await fetch(new URL('/.netlify/functions/lightroom-sync-background', origin), {
		method: 'POST',
		redirect: 'manual',
		signal: AbortSignal.timeout(20_000),
		headers: { authorization: `Bearer ${secret}` }
	});
	if (!response.ok) throw new Error(`Gallery sync dispatch failed (HTTP ${response.status}).`);
	return new Response('Gallery sync queued');
}
export const config = { schedule: '*/15 * * * *' };
