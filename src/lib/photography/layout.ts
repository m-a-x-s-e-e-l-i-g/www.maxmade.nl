import type { Photograph } from './types';

export function photoRows(photos: Photograph[], width: number, gap = 12) {
	const rows: { photos: { photo: Photograph; index: number }[]; height: number; width: number }[] =
		[];
	const available = Math.max(280, width || 1200);
	const target = available < 600 ? available : available < 1000 ? 220 : 280;
	let pending: { photo: Photograph; index: number }[] = [];
	let ratio = 0;
	function finish(last = false) {
		if (!pending.length) return;
		const fitted = (available - gap * (pending.length - 1)) / ratio;
		const height = last && available >= 600 ? Math.min(target, fitted) : fitted;
		rows.push({ photos: pending, height, width: height * ratio + gap * (pending.length - 1) });
		pending = [];
		ratio = 0;
	}
	photos.forEach((photo, index) => {
		pending.push({ photo, index });
		ratio += photo.width / photo.height;
		if (available < 600 || ratio * target + gap * (pending.length - 1) >= available) finish();
	});
	finish(true);
	return rows;
}
