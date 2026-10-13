import { projects } from '$lib/data/projects';

export const SITE_URL = 'https://www.maxmade.nl';
export const SITE_NAME = 'MAXmade';
export const PERSON_ID = `${SITE_URL}/#max-seelig`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export function canonicalUrl(path: string) {
	const pathname = path.split(/[?#]/)[0].replace(/\/+$/, '') || '/';
	return `${SITE_URL}${pathname}`;
}

export function publicPaths() {
	return [
		...new Set([
			'/',
			'/projects',
			...projects.flatMap((p) => (p.projectPage ? [p.projectPage] : []))
		])
	];
}

export function structuredData(path: string, title: string, description: string, image: string) {
	const url = canonicalUrl(path);
	const project = projects.find((p) => p.projectPage && canonicalUrl(p.projectPage) === url);
	const person = {
		'@type': 'Person',
		'@id': PERSON_ID,
		name: 'Max Seelig',
		url: `${SITE_URL}/`,
		description:
			'Web developer, photographer, artist, music producer, and parkour athlete from Bergen op Zoom, the Netherlands. Creator of MAXmade.',
		homeLocation: { '@type': 'Place', name: 'Bergen op Zoom, Netherlands' },
		knowsAbout: ['Web development', 'Photography', 'Music production', 'Art', 'Parkour'],
		sameAs: [
			'https://github.com/m-a-x-s-e-e-l-i-g',
			'https://www.linkedin.com/in/maxse/',
			'https://www.instagram.com/the.maxest/',
			'https://www.instagram.com/maxseelig_photography/',
			'https://www.instagram.com/the.konijn/'
		]
	};
	const website = {
		'@type': 'WebSite',
		'@id': WEBSITE_ID,
		name: SITE_NAME,
		url: `${SITE_URL}/`,
		inLanguage: 'en',
		publisher: { '@id': PERSON_ID }
	};
	const breadcrumbs = [
		{ '@type': 'ListItem', position: 1, name: SITE_NAME, item: `${SITE_URL}/` },
		...(path !== '/'
			? [{ '@type': 'ListItem', position: 2, name: 'Projects', item: canonicalUrl('/projects') }]
			: []),
		...(project
			? [{ '@type': 'ListItem', position: 3, name: project.displayName ?? project.name, item: url }]
			: [])
	];
	const page = {
		'@type': path === '/' ? 'ProfilePage' : path === '/projects' ? 'CollectionPage' : 'WebPage',
		'@id': `${url}#webpage`,
		url,
		name: title,
		description,
		inLanguage: 'en',
		isPartOf: { '@id': WEBSITE_ID },
		author: { '@id': PERSON_ID },
		primaryImageOfPage: { '@type': 'ImageObject', url: image },
		mainEntity: { '@id': path === '/' ? PERSON_ID : `${url}#${project ? 'project' : 'projects'}` },
		...(path !== '/' ? { breadcrumb: { '@id': `${url}#breadcrumbs` } } : {})
	};
	const graph: Record<string, unknown>[] = [person, website, page];
	if (path !== '/') {
		graph.push({
			'@type': 'BreadcrumbList',
			'@id': `${url}#breadcrumbs`,
			itemListElement: breadcrumbs
		});
	}
	if (project) {
		graph.push({
			'@type': 'CreativeWork',
			'@id': `${url}#project`,
			name: project.displayName ?? project.name,
			description,
			url,
			image,
			author: { '@id': PERSON_ID },
			mainEntityOfPage: { '@id': `${url}#webpage` },
			keywords: [...project.topics, ...project.technologies],
			genre: project.category,
			sameAs: [project.liveUrl, project.githubUrl].filter(Boolean)
		});
	} else if (path === '/projects') {
		const categories = [...new Set(projects.map((project) => project.category))];
		const listedProjects = categories.flatMap((category) =>
			projects.filter((project) => project.category === category)
		);
		graph.push({
			'@type': 'ItemList',
			'@id': `${url}#projects`,
			name: 'Projects by Max Seelig',
			itemListElement: listedProjects.map((p, index) => ({
				'@type': 'ListItem',
				position: index + 1,
				name: p.displayName ?? p.name,
				url: p.projectPage ? canonicalUrl(p.projectPage) : (p.liveUrl ?? p.githubUrl)
			}))
		});
	}
	return { '@context': 'https://schema.org', '@graph': graph };
}

// Prevent content from closing the script element when JSON-LD is embedded in HTML.
export function jsonLdScript(value: unknown) {
	const json = JSON.stringify(value).replace(/</g, '\\u003c');
	return `<script type="application/ld+json">${json}</script>`;
}
