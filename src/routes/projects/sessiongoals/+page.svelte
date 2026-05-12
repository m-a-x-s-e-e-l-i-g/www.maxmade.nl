<script lang="ts">
	import ProjectHeader from '$lib/components/projects/ProjectHeader.svelte';
	import ProjectOverview from '$lib/components/projects/ProjectOverview.svelte';
	import AdditionalDetails from '$lib/components/projects/AdditionalDetails.svelte';

	type PillColor = 'orange' | 'blue' | 'emerald' | 'pink' | 'green' | 'gray';

	const tags: Array<{ label: string; color: PillColor }> = [
		{ label: 'Svelte', color: 'orange' },
		{ label: 'SvelteKit', color: 'blue' },
		{ label: 'TypeScript', color: 'emerald' },
		{ label: 'Supabase', color: 'green' },
		{ label: 'Parkour', color: 'pink' }
	];

	const overviewDescription =
		'SessionGoals is a training companion for parkour and freerunning athletes. Set goals, track your sessions, follow challenge lists, and keep an eye on your favourite spots — all in one place. The app uses Google sign-in via Supabase and integrates with the parkour.spot API for location-based spot discovery.';

	const highlights = [
		'Dashboard with active goals, streaks and recent activity',
		'Goal management with spot linking and status filtering',
		'Session logging with yearly activity heatmap',
		'Curated goal lists — create, share and follow',
		'Spot map powered by parkour.spot API',
		'Public athlete profiles and shared movement library'
	];

	const stack: Array<{ label: string; color: PillColor }> = [
		{ label: 'Svelte 5', color: 'orange' },
		{ label: 'SvelteKit', color: 'blue' },
		{ label: 'TypeScript', color: 'emerald' },
		{ label: 'Supabase', color: 'green' },
		{ label: 'PostgreSQL', color: 'blue' },
		{ label: 'Leaflet', color: 'green' },
		{ label: 'TailwindCSS', color: 'gray' }
	];

	const status = ['Live & Active', 'Open Source — GPL-3.0'];

	const detailCards = [
		{
			title: 'Authentication',
			body: 'Secure Google OAuth sign-in via Supabase SSR. All app routes require authentication; only the login and legal pages are publicly accessible.'
		},
		{
			title: 'Database',
			body: 'PostgreSQL on Supabase with Row Level Security policies. Schema migrations managed via Supabase CLI — covers core schema, auth profile sync and activity type categories.'
		},
		{
			title: 'Spots Integration',
			body: 'Integrates with the parkour.spot API for spot search. A server-side proxy route caches responses and the spots page gracefully degrades when no API key is configured.'
		},
		{
			title: 'Goal System',
			body: 'Athletes create personal training goals tied to spots. Goals are filterable by status and searchable by name, giving a focused overview of what to train next and where.'
		},
		{
			title: 'Activity Tracking',
			body: 'Log parkour, conditioning, or other sessions. A current-streak counter, weekly stats panel and a full-year contribution heatmap visualise training consistency over time.'
		},
		{
			title: 'Lists & Community',
			body: 'Create and publish curated goal lists for others to follow. Browse public athlete profiles and a shared movement library for inspiration and structured challenges.'
		}
	];
</script>

<svelte:head>
	<title>SessionGoals — Parkour Training Companion | MAXmade</title>
	<meta
		name="description"
		content="SessionGoals is a SvelteKit + Supabase training app for parkour and freerunning athletes — set goals, track sessions, follow challenge lists and discover spots."
	/>
	<meta property="og:title" content="SessionGoals — Parkour Training Companion" />
	<meta
		property="og:description"
		content="Train what's next. Plan your session. A goal-tracking and session-logging companion for parkour athletes."
	/>
	<meta property="og:type" content="website" />
</svelte:head>

<div class="mt-20 min-h-screen bg-gray-900 text-white">
	<ProjectHeader
		title="SessionGoals"
		subtitle="Train what's next. Plan your session."
		{tags}
		visitUrl="https://sessiongoals.com/"
		codeUrl="https://github.com/m-a-x-s-e-e-l-i-g/SessionGoals"
		backHref="/#projects"
	/>

	<!-- Content -->
	<main class="mx-auto max-w-4xl px-4 py-12">
		<ProjectOverview description={overviewDescription} {highlights} {stack} {status} />

		<!-- Feature overview -->
		<section class="mb-12">
			<h2 class="mb-6 text-2xl font-bold">App Sections</h2>
			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				<div class="rounded-lg border border-gray-800 bg-black p-6">
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500">
						<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
							/>
						</svg>
					</div>
					<h3 class="mb-2 text-lg font-semibold">Dashboard</h3>
					<p class="text-gray-400">
						Quick overview of active goals, upcoming sessions, current streak and recent activity.
					</p>
				</div>

				<div class="rounded-lg border border-gray-800 bg-black p-6">
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500">
						<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</div>
					<h3 class="mb-2 text-lg font-semibold">Goals</h3>
					<p class="text-gray-400">
						Create and manage personal training goals. Link goals to spots, filter by status and
						search by name.
					</p>
				</div>

				<div class="rounded-lg border border-gray-800 bg-black p-6">
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-500">
						<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13 10V3L4 14h7v7l9-11h-7z"
							/>
						</svg>
					</div>
					<h3 class="mb-2 text-lg font-semibold">Activity</h3>
					<p class="text-gray-400">
						Log every session — parkour, conditioning or other training. See your streak, weekly
						stats and a full-year heatmap.
					</p>
				</div>

				<div class="rounded-lg border border-gray-800 bg-black p-6">
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500">
						<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
							/>
						</svg>
					</div>
					<h3 class="mb-2 text-lg font-semibold">Lists</h3>
					<p class="text-gray-400">
						Create curated goal lists and share them publicly. Follow lists from other athletes for
						structured challenges.
					</p>
				</div>

				<div class="rounded-lg border border-gray-800 bg-black p-6">
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500">
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
					<h3 class="mb-2 text-lg font-semibold">Spots</h3>
					<p class="text-gray-400">
						Browse training spots on a map and discover new places via the parkour.spot API. Link
						spots directly to goals.
					</p>
				</div>

				<div class="rounded-lg border border-gray-800 bg-black p-6">
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-pink-500">
						<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
							/>
						</svg>
					</div>
					<h3 class="mb-2 text-lg font-semibold">People & Library</h3>
					<p class="text-gray-400">
						Discover other athletes, explore their public profiles, and browse a shared movement
						library for inspiration.
					</p>
				</div>
			</div>
		</section>

		<AdditionalDetails heading="Technical Details" cards={detailCards} />

		<!-- Status section -->
		<section>
			<h2 class="mb-6 text-2xl font-bold">Project Status</h2>
			<div class="rounded-lg border border-gray-800 bg-black p-8">
				<div class="mb-4 flex items-center">
					<div class="mr-3 h-3 w-3 rounded-full bg-green-500"></div>
					<span class="text-lg font-semibold text-green-500">Live & Active</span>
				</div>
				<p class="mb-6 text-gray-300">
					SessionGoals is live and open to users via Google sign-in. Core features — goals, activity
					logging, lists, spots and community profiles — are fully functional.
				</p>
				<div class="flex flex-wrap gap-4">
					<a
						href="https://sessiongoals.com/"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center rounded-lg bg-white px-6 py-3 font-semibold text-black transition-colors hover:bg-gray-200"
					>
						Open SessionGoals
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
						href="https://github.com/m-a-x-s-e-e-l-i-g/SessionGoals"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center rounded-lg border border-gray-600 px-6 py-3 font-semibold text-white transition-colors hover:border-gray-400 hover:bg-gray-800"
					>
						View on GitHub
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
