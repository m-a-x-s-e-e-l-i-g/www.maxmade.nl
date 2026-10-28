const API_BASE = 'https://lr.adobe.io/v2/';

export function adobeUrl(href, base = API_BASE) {
	const url = new URL(href, base);
	if (
		url.origin !== 'https://lr.adobe.io' ||
		!url.pathname.startsWith('/v2/') ||
		url.username ||
		url.password ||
		url.hash
	) {
		throw new Error('Refusing a Lightroom link outside the official v2 API.');
	}
	return url;
}

export function parseAdobeJson(text) {
	try {
		return JSON.parse(text.replace(/^\s*while\s*\(\s*1\s*\)\s*\{\s*\}\s*/, ''));
	} catch {
		// Native JSON parse errors can include private response fragments.
		throw new SyntaxError('Adobe returned invalid JSON.');
	}
}

function identifier(id) {
	if (!/^[a-f0-9]{32}$/i.test(id ?? '')) throw new Error('Invalid Lightroom resource ID.');
	return id;
}

export class LightroomClient {
	constructor({ clientId, accessToken, fetchImpl = fetch }) {
		if (!clientId || !accessToken) {
			throw new Error(
				'Set LIGHTROOM_CLIENT_ID and LIGHTROOM_ACCESS_TOKEN in .env.lightroom.local. ' +
					'See scripts/lightroom/README.md for Adobe setup.'
			);
		}
		this.clientId = clientId;
		this.accessToken = accessToken;
		this.fetchImpl = fetchImpl;
	}

	async request(href, base) {
		const response = await this.fetchImpl(adobeUrl(href, base), {
			method: 'GET',
			headers: { 'X-API-Key': this.clientId, Authorization: `Bearer ${this.accessToken}` },
			redirect: 'manual',
			signal: AbortSignal.timeout(30_000)
		});
		if (!response.ok) {
			const hints = {
				401: 'The user token is missing, expired or invalid. Obtain a new user access token.',
				403: 'Check Lightroom Services entitlement and the Lightroom partner scopes on this API key.',
				404: 'The resource or current rendition is unavailable.',
				429: 'Adobe rate limited the request. Wait before running the proof again.'
			};
			const error = new Error(
				`Lightroom returned HTTP ${response.status}. ${hints[response.status] ?? 'The request failed.'}`
			);
			error.status = response.status;
			throw error;
		}
		return response;
	}

	async json(href, base) {
		return parseAdobeJson(await (await this.request(href, base)).text());
	}

	async resources(href) {
		const resources = [];
		const seen = new Set();
		let next = adobeUrl(href);
		while (next) {
			if (seen.has(next.href) || seen.size >= 1000) {
				throw new Error(
					'Lightroom pagination did not finish safely; no complete result was produced.'
				);
			}
			seen.add(next.href);
			const page = await this.json(next);
			if (!Array.isArray(page.resources)) throw new Error('Unexpected Lightroom listing response.');
			resources.push(...page.resources);
			const link = page.links?.next?.href;
			next = link ? adobeUrl(link, page.base ?? next) : null;
		}
		return resources;
	}

	async catalog() {
		const catalog = await this.json('catalog');
		identifier(catalog.id);
		return catalog;
	}

	async albums(catalogId) {
		// Albums also support name_after pagination. Follow that cursor when Adobe
		// omits links.next on a full page (the API can exceed limit for tied names).
		const path = `catalogs/${identifier(catalogId)}/albums`;
		let url = adobeUrl(`${path}?limit=100`);
		const albums = new Map();
		const seen = new Set();
		while (url) {
			if (seen.has(url.href) || seen.size >= 1000)
				throw new Error('Album pagination did not finish.');
			seen.add(url.href);
			const page = await this.json(url);
			if (!Array.isArray(page.resources)) throw new Error('Unexpected Lightroom album response.');
			for (const album of page.resources) albums.set(identifier(album.id), album);
			if (page.links?.next?.href) {
				url = adobeUrl(page.links.next.href, page.base ?? url);
			} else if (page.resources.length >= 100) {
				const name = page.resources.at(-1)?.payload?.name;
				if (typeof name !== 'string') throw new Error('Missing Lightroom album pagination cursor.');
				url = adobeUrl(path);
				url.search = new URLSearchParams({ limit: '100', name_after: name }).toString();
			} else {
				url = null;
			}
		}
		return [...albums.values()];
	}

	async albumAssets(catalogId, albumId) {
		return this.resources(
			`catalogs/${identifier(catalogId)}/albums/${identifier(albumId)}/assets?embed=asset`
		);
	}

	async sampleJpeg(catalogId, assetId) {
		// Request an existing edited web rendition only; never upload, edit or
		// generate a new rendition in Adobe during this read-only access proof.
		const response = await this.request(
			`catalogs/${identifier(catalogId)}/assets/${identifier(assetId)}/renditions/2048`
		);
		const bytes = new Uint8Array(await response.arrayBuffer());
		if (bytes[0] !== 0xff || bytes[1] !== 0xd8 || bytes[2] !== 0xff) {
			throw new Error('Adobe did not return a JPEG; no sample was saved.');
		}
		return bytes;
	}
}
