import { timingSafeEqual } from 'node:crypto';
export function syncAuthorized(request, secret) {
	if (typeof secret !== 'string' || secret.length < 32) return false;
	const supplied = Buffer.from(request.headers.get('authorization') ?? '');
	const expected = Buffer.from(`Bearer ${secret}`);
	return supplied.length === expected.length && timingSafeEqual(supplied, expected);
}
