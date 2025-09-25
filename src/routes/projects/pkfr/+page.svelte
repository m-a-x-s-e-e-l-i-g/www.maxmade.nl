<script lang="ts">
	import Slideshow from '$lib/components/Slideshow.svelte';
	import ProjectHeader from '$lib/components/projects/ProjectHeader.svelte';
	import ProjectOverview from '$lib/components/projects/ProjectOverview.svelte';

	const screenshots = [
		{ src: '/images/projects/screenshot-pkfr-1.png', alt: 'PKFR.nl Screenshot Freerunning' },
		{ src: '/images/projects/screenshot-pkfr-2.png', alt: 'PKFR.nl Screenshot Parkour Spots' },
		{ src: '/images/projects/screenshot-pkfr-3.png', alt: 'PKFR.nl Screenshot Freerun Gyms' },
		{ src: '/images/projects/screenshot-pkfr-4.png', alt: 'PKFR.nl Spot List Screenshot' },
		{ src: '/images/projects/screenshot-pkfr-5.png', alt: 'PKFR.nl Screenshot Jam Events Calendar Freerunning' }
	];

	type PillColor = 'orange' | 'blue' | 'emerald' | 'pink' | 'green' | 'gray';

	const tags: Array<{ label: string; color: PillColor }> = [
		{ label: 'Svelte', color: 'orange' },
		{ label: 'Community', color: 'blue' },
		{ label: 'Netherlands', color: 'green' },
		{ label: 'Parkour', color: 'pink' },
		{ label: 'Freerunning', color: 'pink' }
	];

	const overviewDescription = `PKFR.nl serves as the central hub for the Dutch parkour and freerunning community. The platform brings together all essential information about the sport in the Netherlands, including training locations, events, and community connections, making it easier for practitioners to find places to train and connect with others.`;

	const highlights = [
		'Comprehensive spot database',
		'Open gym schedules',
		'Community connections',
		'Event listings & jams',
		'Gym finder tool',
		'WhatsApp community integration'
	];

	const stack: Array<{ label: string; color: PillColor }> = [
		{ label: 'Svelte', color: 'orange' },
		{ label: 'SvelteKit', color: 'blue' },
		{ label: 'TypeScript', color: 'pink' },
		{ label: 'TailwindCSS', color: 'green' }
	];

	const status = ['Live & Maintained'];
</script>

<svelte:head>
	<title>PKFR.nl - Dutch Parkour Community Hub | MAXmade</title>
	<meta
		name="description"
		content="PKFR.nl is the central hub for the Dutch parkour and freerunning community, featuring spot guides, open gym schedules, and community connections."
	/>
	<meta property="og:title" content="PKFR.nl - Dutch Parkour Community Hub" />
	<meta property="og:description" content="The spot for the Dutch parkour and freerunning scene" />
	<meta property="og:type" content="website" />
</svelte:head>

<div class="mt-20 min-h-screen bg-gray-900 text-white">
	<ProjectHeader
		title="PKFR.nl"
		subtitle="Nederlandse Parkour & Freerunning Community Hub"
		tags={tags}
		visitUrl="https://www.pkfr.nl"
		codeUrl="https://github.com/m-a-x-s-e-e-l-i-g/pkfr-nl"
		backHref="/#projects"
	/>

	<!-- Content -->
	<main class="mx-auto max-w-4xl px-4 py-12">
		<ProjectOverview description={overviewDescription} highlights={highlights} stack={stack} status={status} />

		<h2 class="text-2xl font-bold mb-6">Preview</h2>
		<Slideshow images={screenshots} intervalMs={1500} />

		<!-- Features Showcase -->
		<section class="mb-12">
			<h2 class="mb-6 text-2xl font-bold">Platform Features</h2>
			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				<div class="rounded-lg border border-gray-800 bg-black p-6">
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-500">
						<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
					</div>
					<h3 class="mb-2 text-lg font-semibold">Training Spots</h3>
					<p class="text-gray-400">
						Comprehensive database of parkour spots across the Netherlands with detailed information
						and photos.
					</p>
				</div>

				<div class="rounded-lg border border-gray-800 bg-black p-6">
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500">
						<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
							/>
						</svg>
					</div>
					<h3 class="mb-2 text-lg font-semibold">Open Gyms</h3>
					<p class="text-gray-400">
						Up-to-date schedules of open gym sessions at parkour gyms throughout the country.
					</p>
				</div>

				<div class="rounded-lg border border-gray-800 bg-black p-6">
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500">
						<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
							/>
						</svg>
					</div>
					<h3 class="mb-2 text-lg font-semibold">Community Hub</h3>
					<p class="text-gray-400">
						Central place for community links, WhatsApp groups, and connecting with other traceurs.
					</p>
				</div>

				<div class="rounded-lg border border-gray-800 bg-black p-6">
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500">
						<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A1.5 1.5 0 013 15.546V6.454a1.5 1.5 0 01.954-1.392l2.49-.664a11.21 11.21 0 016.11 0l2.49.664A1.5 1.5 0 0118 6.454v9.092z"
							/>
						</svg>
					</div>
					<h3 class="mb-2 text-lg font-semibold">Events & Jams</h3>
					<p class="text-gray-400">
						Stay updated on upcoming parkour jams, competitions, and community events.
					</p>
				</div>

				<div class="rounded-lg border border-gray-800 bg-black p-6">
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-500">
						<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					</div>
					<h3 class="mb-2 text-lg font-semibold">Gym Finder</h3>
					<p class="text-gray-400">
						Easily find parkour gyms and training facilities near you with location-based search.
					</p>
				</div>

				<div class="rounded-lg border border-gray-800 bg-black p-6">
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-500">
						<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
							/>
						</svg>
					</div>
					<h3 class="mb-2 text-lg font-semibold">Useful Tools</h3>
					<p class="text-gray-400">
						Collection of helpful utilities and resources for the parkour community.
					</p>
				</div>
			</div>
		</section>

		<!-- Impact & Community -->
		<section class="mb-12">
			<h2 class="mb-6 text-2xl font-bold">Community Impact</h2>
			<div class="rounded-lg border border-gray-800 bg-black p-8">
				<div class="grid gap-8 md:grid-cols-2">
					<div>
						<h3 class="mb-4 text-lg font-semibold text-white">Purpose</h3>
						<p class="leading-relaxed text-gray-300">
							PKFR.nl was created to centralize all parkour and freerunning information in the
							Netherlands. Before this platform, finding training spots, open gym schedules, and
							community connections required checking multiple sources and platforms.
						</p>
					</div>
					<div>
						<h3 class="mb-4 text-lg font-semibold text-white">Community Benefits</h3>
						<ul class="space-y-2 text-gray-300">
							<li>• Easier discovery of training locations</li>
							<li>• Centralized event information</li>
							<li>• Stronger community connections</li>
							<li>• Better accessibility for newcomers</li>
						</ul>
					</div>
				</div>
			</div>
		</section>

		<!-- Status -->
		<section>
			<h2 class="mb-6 text-2xl font-bold">Project Status</h2>
			<div class="rounded-lg border border-gray-800 bg-black p-8">
				<div class="mb-4 flex items-center">
					<div class="mr-3 h-3 w-3 rounded-full bg-green-500"></div>
					<span class="text-lg font-semibold text-green-500">Live & Maintained</span>
				</div>
				<p class="mb-6 text-gray-300">
					PKFR.nl is actively maintained and regularly updated with new spots, events, and community
					information. The platform continues to serve the Dutch parkour community as their central
					information hub.
				</p>

				<div class="flex gap-4">
					<a
						href="https://www.pkfr.nl"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center rounded-lg bg-white px-6 py-3 font-semibold text-black transition-colors hover:bg-gray-200"
					>
						Visit PKFR.nl
						<svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
							/>
						</svg>
					</a>
					<a
						href="https://github.com/m-a-x-s-e-e-l-i-g/pkfr-nl"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-black"
					>
						View Source Code
						<svg class="ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
							<path
								fill-rule="evenodd"
								d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
								clip-rule="evenodd"
							/>
						</svg>
					</a>
				</div>
			</div>
		</section>
	</main>
</div>
