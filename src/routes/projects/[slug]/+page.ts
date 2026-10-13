import { error } from '@sveltejs/kit';

export function load() {
	error(404, 'Project not found');
}
