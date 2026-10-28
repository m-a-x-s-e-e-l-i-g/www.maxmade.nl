import { randomBytes, createHash } from 'node:crypto';
import { mkdir, readFile, writeFile, rm } from 'node:fs/promises';
import { resolve } from 'node:path';
import { setTimeout } from 'node:timers/promises';
import { fileURLToPath } from 'node:url';
import { LightroomClient } from './client.js';
import { localEnvironment, root, runProbe } from './probe.js';
import { saveCredentials } from './secure-store.js';

export const REDIRECT_URI = 'https://localhost:4280/lightroom/callback';
const IMS = 'https://ims-na1.adobelogin.com/ims/';
const SCOPES = 'openid,AdobeID,lr_partner_apis,lr_partner_rendition_apis,offline_access';

export function createAuthorization(clientId) {
	const state = randomBytes(32).toString('base64url');
	const verifier = randomBytes(32).toString('base64url');
	const url = new URL('authorize/v2', IMS);
	url.search = new URLSearchParams({
		client_id: clientId,
		redirect_uri: REDIRECT_URI,
		response_type: 'code',
		scope: SCOPES,
		state,
		code_challenge: createHash('sha256').update(verifier).digest('base64url'),
		code_challenge_method: 'S256'
	}).toString();
	return { state, verifier, url: url.href };
}

export function callbackCode(value, state) {
	const callback = new URL(value.trim());
	if (
		callback.origin + callback.pathname !== REDIRECT_URI ||
		callback.username ||
		callback.password ||
		callback.hash ||
		callback.searchParams.get('state') !== state
	) {
		throw new Error('OAuth callback does not match this local authorization session.');
	}
	if (callback.searchParams.has('error')) throw new Error('Adobe authorization was not granted.');
	const code = callback.searchParams.get('code');
	if (!code) throw new Error('Adobe callback did not contain an authorization code.');
	return code;
}

export async function tokens(clientId, clientSecret, parameters, fetchImpl = fetch) {
	const response = await fetchImpl(new URL('token/v3', IMS), {
		method: 'POST',
		headers: {
			Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: new URLSearchParams(parameters).toString(),
		redirect: 'manual',
		signal: AbortSignal.timeout(30_000)
	});
	if (!response.ok) throw new Error(`Adobe token request failed (HTTP ${response.status}).`);
	let result;
	try {
		result = await response.json();
	} catch {
		throw new Error('Adobe returned an invalid token response.');
	}
	if (typeof result?.access_token !== 'string' || !result.access_token) {
		throw new Error('Adobe did not return a user access token.');
	}
	return result;
}

async function main() {
	const env = await localEnvironment();
	// One-shot local transport from the credential UI; consume it immediately.
	// This avoids retaining the client secret in a plaintext environment file.
	const credentialPath = new URL('.lightroom-proof/credential-input.json', root);
	try {
		const input = JSON.parse(await readFile(credentialPath, 'utf8'));
		env.LIGHTROOM_CLIENT_ID = input.clientId;
		env.LIGHTROOM_CLIENT_SECRET = input.clientSecret;
	} catch (error) {
		if (error.code !== 'ENOENT') throw new Error('Invalid one-shot local credential input.');
	} finally {
		await rm(credentialPath, { force: true });
	}
	if (!env.LIGHTROOM_CLIENT_ID || !env.LIGHTROOM_CLIENT_SECRET) {
		throw new Error('Set LIGHTROOM_CLIENT_ID and LIGHTROOM_CLIENT_SECRET in .env.lightroom.local.');
	}
	const output = new URL('.lightroom-proof/', root);
	const requestPath = new URL('oauth-request.json', output);
	const callbackPath = new URL('oauth-response.txt', output);
	await mkdir(output, { recursive: true });
	await rm(callbackPath, { force: true });
	const authorization = createAuthorization(env.LIGHTROOM_CLIENT_ID);
	await writeFile(
		requestPath,
		JSON.stringify({ url: authorization.url, redirectUri: REDIRECT_URI })
	);
	console.log('Open the authorization URL in .lightroom-proof/oauth-request.json.');
	console.log(
		'Approve Adobe consent yourself. The localhost redirect will show a connection error.'
	);
	console.log(
		'Copy its full address into .lightroom-proof/oauth-response.txt; never paste it into chat.'
	);
	console.log('No HTTPS listener is started, and no certificate warning needs to be bypassed.');
	console.log('Waiting up to 10 minutes. Tokens are saved encrypted for the current Windows user.');
	try {
		let callback;
		const deadline = Date.now() + 600_000;
		while (!callback && Date.now() < deadline) {
			try {
				callback = await readFile(callbackPath, 'utf8');
			} catch (error) {
				if (error.code !== 'ENOENT') throw error;
			}
			if (!callback) await setTimeout(500);
		}
		if (!callback) throw new Error('Local OAuth session expired. Run lightroom:authorize again.');
		const code = callbackCode(callback, authorization.state);
		await rm(callbackPath, { force: true });
		let token = await tokens(env.LIGHTROOM_CLIENT_ID, env.LIGHTROOM_CLIENT_SECRET, {
			grant_type: 'authorization_code',
			code,
			redirect_uri: REDIRECT_URI,
			code_verifier: authorization.verifier
		});
		await saveCredentials({
			clientId: env.LIGHTROOM_CLIENT_ID,
			clientSecret: env.LIGHTROOM_CLIENT_SECRET,
			token,
			savedAt: new Date().toISOString()
		});
		if (token.refresh_token) {
			try {
				const refreshed = await tokens(env.LIGHTROOM_CLIENT_ID, env.LIGHTROOM_CLIENT_SECRET, {
					grant_type: 'refresh_token',
					refresh_token: token.refresh_token
				});
				token = { ...refreshed, refresh_token: refreshed.refresh_token ?? token.refresh_token };
				await saveCredentials({
					clientId: env.LIGHTROOM_CLIENT_ID,
					clientSecret: env.LIGHTROOM_CLIENT_SECRET,
					token,
					savedAt: new Date().toISOString()
				});
				console.log(
					'Immediate refresh-token exchange passed; long-term renewal remains unverified.'
				);
			} catch {
				console.log(
					'Refresh-token exchange failed. Testing one-time access with the original token.'
				);
			}
		} else {
			console.log('No refresh token returned. Unattended access is not proven.');
		}
		await runProbe(
			new LightroomClient({ clientId: env.LIGHTROOM_CLIENT_ID, accessToken: token.access_token }),
			{ firstAlbum: true }
		);
	} finally {
		await rm(callbackPath, { force: true });
		await rm(requestPath, { force: true });
	}
}

if (resolve(process.argv[1] ?? '') === fileURLToPath(import.meta.url)) {
	main().catch((error) => {
		console.error(error.message);
		process.exitCode = 1;
	});
}
