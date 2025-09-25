<script lang="ts">
	import Slideshow from '$lib/components/Slideshow.svelte';
	import ProjectHeader from '$lib/components/projects/ProjectHeader.svelte';
	import ProjectOverview from '$lib/components/projects/ProjectOverview.svelte';
	import AdditionalDetails from '$lib/components/projects/AdditionalDetails.svelte';

	const screenshots = [
		{ src: '/images/projects/jumpflix-screenshot-parkour.webp', alt: 'JUMPFLIX PARKOUR TV Home' }
	];

	type PillColor = 'orange' | 'blue' | 'emerald' | 'pink' | 'green' | 'gray';

	const tags: Array<{ label: string; color: PillColor }> = [
		{ label: 'Svelte', color: 'orange' },
		{ label: 'SvelteKit', color: 'blue' },
		{ label: 'TypeScript', color: 'emerald' },
		{ label: 'Parkour', color: 'pink' }
	];

	const overviewDescription =
		"JUMPFLIX is a SvelteKit + Tailwind web app that curates the best parkour & freerunning feature films, documentaries and long‑form playlists. It’s not a pirate streaming site: it embeds official YouTube/Vimeo players and links responsibly to legitimate paid providers where appropriate (e.g. STORROR+, Vimeo On Demand, JustWatch). The goal is a fast, elegant discovery hub that honours the culture, people and history of movement.";

	const highlights = [
		'Fast search, live filtering and multiple sort modes',
		'Deterministic shuffle for a stable, organic ordering',
		'Free vs paid toggle, official embeds and provider deep‑links',
		'Keyboard navigation and mobile‑friendly overlays'
	];

	const stack: Array<{ label: string; color: PillColor }> = [
		{ label: 'Svelte', color: 'orange' },
		{ label: 'SvelteKit', color: 'blue' },
		{ label: 'TypeScript', color: 'emerald' },
		{ label: 'TailwindCSS', color: 'green' }
	];

	const status = ['Open Source', 'CC BY-NC-ND 4.0'];

	const detailCards = [
		{
			title: 'Design',
			body:
				'Minimal chrome, content‑first grid. Works great on mobile and desktop; large targets and high‑contrast visuals keep it usable on TV screens too.'
		},
		{
			title: 'Performance',
			body:
				'Static, edge‑friendly deploy. Preloading and careful rendering deliver snappy filters, smooth transitions and lightweight embeds.'
		},
		{
			title: 'Accessibility',
			body:
				'Focus management, Escape to close, reduced motion options and keyboard navigation across the grid and modals.'
		}
	];
</script>

<svelte:head>
	<title>JUMPFLIX — Curated Parkour & Freerunning TV | MAXmade</title>
	<meta name="description" content="JUMPFLIX is a SvelteKit-powered, open-source catalog that curates parkour & freerunning films, docs and playlists—embedding official YouTube/Vimeo and linking to legitimate paid providers." />
	<meta property="og:title" content="JUMPFLIX — Curated Parkour & Freerunning TV" />
	<meta property="og:description" content="Open-source discovery hub for parkour & freerunning films and playlists. Official embeds, legit links, fast search, and keyboard-friendly UI." />
	<meta property="og:type" content="website" />
</svelte:head>

<div class="mt-20 min-h-screen bg-gray-900 text-white">
	<ProjectHeader
		title="JUMPFLIX • Curated Parkour & Freerunning"
		subtitle="Open‑source, community‑driven catalog of feature films, documentaries and long‑form playlists. Official embeds, legitimate links."
		tags={tags}
		visitUrl="https://www.jumpflix.tv"
		codeUrl="https://github.com/m-a-x-s-e-e-l-i-g/jumpflix.tv"
		backHref="/#projects"
	/>

	<!-- Content -->
	<main class="mx-auto max-w-4xl px-4 py-12">
		<ProjectOverview
			description={overviewDescription}
			highlights={highlights}
			stack={stack}
			status={status}
		/>

		<h2 class="text-2xl font-bold mb-6">Preview</h2>
		<Slideshow images={screenshots} intervalMs={1500} />

		<AdditionalDetails heading="Additional Details" cards={detailCards} />
	</main>
</div>
