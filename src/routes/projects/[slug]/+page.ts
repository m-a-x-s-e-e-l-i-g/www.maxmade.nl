import { projects } from '$lib/data/projects.js';
import { redirect } from '@sveltejs/kit';

export function load({ params }) {
	// For now, redirect to main projects section since we don't have all individual pages yet
	throw redirect(302, '/#projects');
}
