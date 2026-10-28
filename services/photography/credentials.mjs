import { createCipheriv, createDecipheriv, randomBytes } from 'node:crypto';
import { LightroomClient } from '../../scripts/lightroom/client.js';

function keyBytes(value) {
	const key = Buffer.from(value ?? '', 'base64');
	if (key.length !== 32) throw new Error('Configure a 32-byte base64 LIGHTROOM_CREDENTIAL_KEY.');
	return key;
}

export function sealCredential(value, key) {
	const iv = randomBytes(12);
	const cipher = createCipheriv('aes-256-gcm', keyBytes(key), iv);
	const data = Buffer.concat([cipher.update(JSON.stringify(value), 'utf8'), cipher.final()]);
	return {
		version: 1,
		iv: iv.toString('base64'),
		tag: cipher.getAuthTag().toString('base64'),
		data: data.toString('base64')
	};
}

export function unsealCredential(value, key) {
	try {
		if (value?.version !== 1) throw new Error();
		const decipher = createDecipheriv(
			'aes-256-gcm',
			keyBytes(key),
			Buffer.from(value.iv, 'base64')
		);
		decipher.setAuthTag(Buffer.from(value.tag, 'base64'));
		return JSON.parse(
			Buffer.concat([
				decipher.update(Buffer.from(value.data, 'base64')),
				decipher.final()
			]).toString('utf8')
		);
	} catch {
		throw new Error('The Adobe credential could not be unlocked.');
	}
}

export function compactCredential(value) {
	return {
		clientId: value.clientId,
		clientSecret: value.clientSecret,
		savedAt: value.savedAt,
		token: {
			access_token: value.token.access_token,
			refresh_token: value.token.refresh_token,
			expires_in: value.token.expires_in
		}
	};
}

export async function getAuthenticatedClient(storage, env = process.env) {
	let credentials;
	if (storage.cloud) {
		const envelope =
			(await storage.getCredentialEnvelope()) ??
			(env.LIGHTROOM_INITIAL_CREDENTIAL ? JSON.parse(env.LIGHTROOM_INITIAL_CREDENTIAL) : null);
		if (!envelope) throw new Error('Configure the encrypted Lightroom credential before syncing.');
		credentials = unsealCredential(envelope, env.LIGHTROOM_CREDENTIAL_KEY);
	} else {
		const { readCredentials } = await import('../../scripts/lightroom/secure-store.js');
		credentials = await readCredentials();
	}
	if (!credentials?.clientId || !credentials.token?.access_token)
		throw new Error('Connect Lightroom before syncing photography.');
	const expiry = Date.parse(credentials.savedAt) + Number(credentials.token.expires_in ?? 0) * 1000;
	if (!Number.isFinite(expiry) || expiry < Date.now() + 20 * 60_000) {
		if (!credentials.token.refresh_token)
			throw new Error('Reconnect Lightroom: no renewable token is available.');
		const response = await fetch('https://ims-na1.adobelogin.com/ims/token/v3', {
			method: 'POST',
			redirect: 'manual',
			signal: AbortSignal.timeout(30_000),
			headers: {
				Authorization: `Basic ${Buffer.from(`${credentials.clientId}:${credentials.clientSecret}`).toString('base64')}`,
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: new URLSearchParams({
				grant_type: 'refresh_token',
				refresh_token: credentials.token.refresh_token
			}).toString()
		});
		if (!response.ok) throw new Error(`Adobe token refresh failed (HTTP ${response.status}).`);
		let token;
		try {
			token = await response.json();
		} catch {
			throw new Error('Adobe returned an invalid refresh response.');
		}
		if (typeof token?.access_token !== 'string')
			throw new Error('Adobe did not return a renewed access token.');
		credentials.token = {
			...token,
			refresh_token: token.refresh_token ?? credentials.token.refresh_token
		};
		credentials.savedAt = new Date().toISOString();
	}
	if (storage.cloud)
		await storage.putCredentialEnvelope(
			sealCredential(compactCredential(credentials), env.LIGHTROOM_CREDENTIAL_KEY)
		);
	else {
		const { saveCredentials } = await import('../../scripts/lightroom/secure-store.js');
		await saveCredentials(credentials);
	}
	return new LightroomClient({
		clientId: credentials.clientId,
		accessToken: credentials.token.access_token
	});
}
