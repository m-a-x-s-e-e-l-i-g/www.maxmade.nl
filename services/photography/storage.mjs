import { getStore } from '@netlify/blobs';
import { mkdir, open, readFile, rename, rm, writeFile, stat } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { randomUUID } from 'node:crypto';

const defaultDirectory = resolve('.photography-cache');
const imageName = /^[a-f0-9]{64}\.webp$/;

export function openStorage({
	directory = defaultDirectory,
	cloud = Boolean(process.env.AWS_LAMBDA_FUNCTION_NAME || process.env.NETLIFY_BLOBS_CONTEXT)
} = {}) {
	const media = cloud ? getStore({ name: 'maxmade-photography', consistency: 'strong' }) : null;
	const privateStore = cloud
		? getStore({ name: 'maxmade-lightroom-private', consistency: 'strong' })
		: null;
	async function readJson(name, store = media) {
		if (store) return store.get(name, { type: 'json' });
		try {
			return JSON.parse(await readFile(join(directory, `${name}.json`), 'utf8'));
		} catch (error) {
			if (error.code === 'ENOENT') return null;
			throw error;
		}
	}
	async function writeJson(name, value, store = media) {
		if (store) return store.setJSON(name, value);
		await mkdir(directory, { recursive: true });
		const temporary = join(directory, `${name}.${randomUUID()}.tmp`);
		try {
			await writeFile(temporary, JSON.stringify(value));
			await rename(temporary, join(directory, `${name}.json`));
		} finally {
			await rm(temporary, { force: true });
		}
	}
	return {
		cloud,
		getManifest: () => readJson('manifest'),
		publishManifest: (manifest) => writeJson('manifest', manifest),
		getIndex: () => readJson('source-index', privateStore),
		putIndex: (index) => writeJson('source-index', index, privateStore),
		getCredentialEnvelope: () => readJson('adobe-credential', privateStore),
		putCredentialEnvelope: (value) => writeJson('adobe-credential', value, privateStore),
		async hasImage(name) {
			if (!imageName.test(name)) return false;
			if (media) return Boolean(await media.getMetadata(`images/${name}`));
			try {
				return (await stat(join(directory, 'images', name))).size > 0;
			} catch (error) {
				if (error.code === 'ENOENT') return false;
				throw error;
			}
		},
		async getImage(name) {
			if (!imageName.test(name)) return null;
			if (media) return media.get(`images/${name}`, { type: 'arrayBuffer' });
			try {
				return new Uint8Array(await readFile(join(directory, 'images', name))).buffer;
			} catch (error) {
				if (error.code === 'ENOENT') return null;
				throw error;
			}
		},
		async putImage(name, bytes) {
			if (!imageName.test(name)) throw new Error('Invalid photography cache filename.');
			if (media) return media.set(`images/${name}`, bytes);
			await mkdir(join(directory, 'images'), { recursive: true });
			await writeFile(join(directory, 'images', name), bytes);
		},
		async acquireLease() {
			const owner = randomUUID();
			const lease = { owner, expiresAt: Date.now() + 20 * 60_000 };
			if (privateStore) {
				let result = await privateStore.setJSON('sync-lock', lease, { onlyIfNew: true });
				if (!result.modified) {
					const previous = await privateStore.getWithMetadata('sync-lock', { type: 'json' });
					if (!previous || previous.data.expiresAt > Date.now()) return null;
					result = await privateStore.setJSON('sync-lock', lease, { onlyIfMatch: previous.etag });
					if (!result.modified) return null;
				}
				return async () => {
					const current = await privateStore.getWithMetadata('sync-lock', { type: 'json' });
					if (current?.data.owner === owner) {
						await privateStore.setJSON(
							'sync-lock',
							{ owner, expiresAt: 0 },
							{ onlyIfMatch: current.etag }
						);
					}
				};
			}
			await mkdir(directory, { recursive: true });
			const path = join(directory, 'sync.lock');
			let lock;
			try {
				lock = await open(path, 'wx');
			} catch (error) {
				if (error.code === 'EEXIST') return null;
				throw error;
			}
			await lock.writeFile(JSON.stringify(lease));
			await lock.close();
			return () => rm(path, { force: true });
		}
	};
}
