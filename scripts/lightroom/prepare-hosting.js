import { randomBytes } from 'node:crypto';
import { mkdir, writeFile } from 'node:fs/promises';
import { readCredentials } from './secure-store.js';
import { sealCredential, compactCredential } from '../../services/photography/credentials.mjs';

const credentials = await readCredentials();
if (!credentials) throw new Error('Connect Lightroom first.');
const key = randomBytes(32).toString('base64');
const values = {
	LIGHTROOM_CREDENTIAL_KEY: key,
	LIGHTROOM_INITIAL_CREDENTIAL: JSON.stringify(sealCredential(compactCredential(credentials), key)),
	LIGHTROOM_SYNC_SECRET: randomBytes(32).toString('base64url'),
	LIGHTROOM_SYNC_ENABLED: 'true'
};
// This local handoff contains secrets. Do not log its values, upload it as a site
// asset, or commit it. Netlify receives them only during explicit deployment setup.
const directory = new URL('../../.lightroom-proof/', import.meta.url);
await mkdir(directory, { recursive: true });
await writeFile(new URL('netlify-environment.json', directory), JSON.stringify(values, null, 2), {
	mode: 0o600,
	flag: 'wx'
});
console.log(
	'Created .lightroom-proof/netlify-environment.json for private Netlify environment setup.'
);
