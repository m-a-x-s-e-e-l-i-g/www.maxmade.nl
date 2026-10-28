import { execFile } from 'node:child_process';
import { readFile, writeFile, mkdir } from 'node:fs/promises';

const folder = new URL('../../.lightroom-proof/', import.meta.url);
const storePath = new URL('credentials.dpapi', folder);

function protect(value, decrypt = false) {
	if (process.platform !== 'win32') {
		throw new Error(
			'Local credential storage requires Windows DPAPI. No plaintext token was saved.'
		);
	}
	const script = decrypt
		? 'Add-Type -AssemblyName System.Security; [Text.Encoding]::UTF8.GetString([Security.Cryptography.ProtectedData]::Unprotect([Convert]::FromBase64String([Console]::In.ReadToEnd()), $null, [Security.Cryptography.DataProtectionScope]::CurrentUser))'
		: 'Add-Type -AssemblyName System.Security; [Convert]::ToBase64String([Security.Cryptography.ProtectedData]::Protect([Text.Encoding]::UTF8.GetBytes([Console]::In.ReadToEnd()), $null, [Security.Cryptography.DataProtectionScope]::CurrentUser))';
	return new Promise((resolve, reject) => {
		const child = execFile(
			'powershell.exe',
			['-NoProfile', '-NonInteractive', '-WindowStyle', 'Hidden', '-Command', script],
			{ windowsHide: true, timeout: 15_000, maxBuffer: 1_048_576 },
			(error, stdout) => {
				if (error)
					reject(new Error('Windows could not protect or unlock the local Adobe credential.'));
				else resolve(stdout.trim());
			}
		);
		child.stdin.on('error', () => {});
		child.stdin.end(value);
	});
}

export async function saveCredentials(credentials, path = storePath) {
	const encrypted = await protect(JSON.stringify(credentials));
	await mkdir(folder, { recursive: true });
	await writeFile(path, encrypted, { mode: 0o600 });
}

export async function readCredentials(path = storePath) {
	let encrypted;
	try {
		encrypted = await readFile(path, 'utf8');
	} catch (error) {
		if (error.code === 'ENOENT') return null;
		throw error;
	}
	try {
		return JSON.parse(await protect(encrypted, true));
	} catch {
		throw new Error('The saved Adobe credential could not be unlocked by this Windows user.');
	}
}
