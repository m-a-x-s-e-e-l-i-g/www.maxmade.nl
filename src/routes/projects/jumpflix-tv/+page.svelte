<script lang="ts">
	import { goto } from '$app/navigation';
	import Slideshow from '$lib/components/Slideshow.svelte';

	const screenshots = [
		{ src: '/images/projects/jumpflix-screenshot-parkour.webp', alt: 'JUMPFLIX PARKOUR TV Home' },
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
	<!-- Header -->
	<header class="border-b border-gray-800 bg-black">
		<div class="mx-auto max-w-4xl px-4 py-6">
			<button
				onclick={() => goto('/#projects')}
				class="mb-4 inline-flex items-center text-gray-400 transition-colors hover:text-white"
			>
				<svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
				</svg>
				Back to Projects
			</button>

			<div class="flex items-start justify-between">
				<div class="flex-1">
					<h1 class="mb-2 text-4xl font-bold">JUMPFLIX • Curated Parkour & Freerunning</h1>
					<p class="mb-4 text-xl text-gray-400">Open‑source, community‑driven catalog of feature films, documentaries and long‑form playlists. Official embeds, legitimate links.</p>

					<div class="mb-6 flex flex-wrap gap-2">
						<span class="rounded-full bg-orange-500 px-3 py-1 text-sm font-medium text-white">Svelte</span>
						<span class="rounded-full bg-blue-500 px-3 py-1 text-sm font-medium text-white">SvelteKit</span>
						<span class="rounded-full bg-emerald-600 px-3 py-1 text-sm font-medium text-white">TypeScript</span>
						<span class="rounded-full bg-pink-600 px-3 py-1 text-sm font-medium text-white">Parkour</span>
					</div>
				</div>

				<div class="ml-6 flex gap-3">
					<a
						href="https://www.jumpflix.tv"
						target="_blank"
						rel="noopener noreferrer"
						class="rounded-lg bg-white px-6 py-3 font-semibold text-black transition-colors hover:bg-gray-200"
					>
						Visit Website
					</a>
					<a
						href="https://github.com/m-a-x-s-e-e-l-i-g/jumpflix.tv"
						target="_blank"
						rel="noopener noreferrer"
						class="rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-black"
					>
						View Code
					</a>
				</div>
			</div>
		</div>
	</header>

	<!-- Content -->
	<main class="mx-auto max-w-4xl px-4 py-12">
		<!-- Project Overview -->
		<section class="mb-12">
			<h2 class="mb-6 text-2xl font-bold">Project Overview</h2>
			<div class="rounded-lg border border-gray-800 bg-black p-8">
				<p class="mb-6 text-lg leading-relaxed text-gray-300">
					JUMPFLIX is a SvelteKit + Tailwind web app that curates the best parkour & freerunning feature films, documentaries and long‑form playlists. It’s not a pirate streaming site: it embeds official YouTube/Vimeo players and links responsibly to legitimate paid providers where appropriate (e.g. STORROR+, Vimeo On Demand, JustWatch). The goal is a fast, elegant discovery hub that honours the culture, people and history of movement.
				</p>

				<div class="grid gap-8 md:grid-cols-2">
					<div>
						<h3 class="mb-4 text-lg font-semibold text-white">Core Highlights</h3>
						<ul class="space-y-2 text-gray-300">
							<li class="flex items-center">
								<svg class="mr-3 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
								</svg>
								Fast search, live filtering and multiple sort modes
							</li>
							<li class="flex items-center">
								<svg class="mr-3 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
								</svg>
								Deterministic shuffle for a stable, organic ordering
							</li>
							<li class="flex items-center">
								<svg class="mr-3 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
								</svg>
								Free vs paid toggle, official embeds and provider deep‑links
							</li>
							<li class="flex items-center">
								<svg class="mr-3 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
								</svg>
								Keyboard navigation and mobile‑friendly overlays
							</li>
						</ul>
					</div>

					<div>
						<h3 class="mb-4 text-lg font-semibold text-white">Technical Stack</h3>
						<div class="mb-6 flex flex-wrap gap-2">
							<span class="rounded bg-orange-500 px-3 py-1 text-white">Svelte</span>
							<span class="rounded bg-blue-500 px-3 py-1 text-white">SvelteKit</span>
							<span class="rounded bg-emerald-600 px-3 py-1 text-white">TypeScript</span>
							<span class="rounded bg-green-500 px-3 py-1 text-white">TailwindCSS</span>
						</div>

						<h3 class="mb-4 text-lg font-semibold text-white">Project Status</h3>
						<div class="space-y-2 text-gray-300">
							<div class="flex items-center">
								<svg class="mr-2 h-4 w-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
								</svg>
								Open Source
							</div>
							<div class="flex items-center">
								<svg class="mr-2 h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
								</svg>
								MIT License
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<h2 class="text-2xl font-bold mb-6">Preview</h2>
		<Slideshow images={screenshots} intervalMs={1500} />

		<!-- Additional Details -->
		<section class="mb-12">
			<h2 class="mb-6 text-2xl font-bold">Additional Details</h2>
			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				<div class="rounded-lg border border-gray-800 bg-black p-6">
					<h3 class="mb-2 text-lg font-semibold">Design</h3>
					<p class="text-gray-400">Minimal chrome, content‑first grid. Works great on mobile and desktop; large targets and high‑contrast visuals keep it usable on TV screens too.</p>
				</div>
				<div class="rounded-lg border border-gray-800 bg-black p-6">
					<h3 class="mb-2 text-lg font-semibold">Performance</h3>
					<p class="text-gray-400">Static, edge‑friendly deploy. Preloading and careful rendering deliver snappy filters, smooth transitions and lightweight embeds.</p>
				</div>
				<div class="rounded-lg border border-gray-800 bg-black p-6">
					<h3 class="mb-2 text-lg font-semibold">Accessibility</h3>
					<p class="text-gray-400">Focus management, Escape to close, reduced motion options and keyboard navigation across the grid and modals.</p>
				</div>
			</div>
		</section>
	</main>
</div>
