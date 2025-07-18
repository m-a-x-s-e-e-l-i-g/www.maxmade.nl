<script lang="ts">
import { goto } from '$app/navigation';
import Slideshow from '$lib/components/Slideshow.svelte';

const screenshots = [
  {
	src: '/images/projects/screenshot-moonphase-dogecoin.png',
	alt: 'Moon Phase 3D Screenshot (Doge mode)'
  },
  {
	src: '/images/projects/screenshot-moonphase.png',
	alt: 'Moon Phase 3D Screenshot'
  }
];
</script>

<svelte:head>
	<title>Moon Phase 3D - Real-time Lunar Visualization | MAXmade</title>
	<meta
		name="description"
		content="A beautiful 3D visualization of the current moon phase using Three.js and real astronomical data."
	/>
	<meta property="og:title" content="Moon Phase 3D - Real-time Lunar Visualization" />
	<meta
		property="og:description"
		content="Interactive 3D moon phase visualization built with Three.js"
	/>
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
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 19l-7-7 7-7"
					/>
				</svg>
				Back to Projects
			</button>

			<div class="flex items-start justify-between">
				<div class="flex-1">
					<h1 class="mb-2 text-4xl font-bold">Moon Phase 3D</h1>
					<p class="mb-4 text-xl text-gray-400">Real-time 3D Lunar Phase Visualization</p>

					<div class="mb-6 flex flex-wrap gap-2">
						<span class="rounded-full bg-orange-500 px-3 py-1 text-sm font-medium text-white"
							>Svelte</span
						>
						<span
							class="rounded-full border border-gray-600 bg-black px-3 py-1 text-sm font-medium text-white"
							>Three.js</span
						>
						<span class="rounded-full bg-blue-500 px-3 py-1 text-sm font-medium text-white"
							>3D Graphics</span
						>
						<span class="rounded-full bg-purple-500 px-3 py-1 text-sm font-medium text-white"
							>Astronomy</span
						>
					</div>
				</div>

				<div class="ml-6 flex gap-3">
					<a
						href="https://moon-phase.netlify.app/"
						target="_blank"
						rel="noopener noreferrer"
						class="rounded-lg bg-white px-6 py-3 font-semibold text-black transition-colors hover:bg-gray-200"
					>
						Visit Website
					</a>
					<a
						href="https://github.com/m-a-x-s-e-e-l-i-g/current-moon-phase-3d"
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
					Moon Phase 3D is an interactive visualization that displays the current phase of the moon
					in real-time using Three.js 3D graphics. The application calculates the exact lunar phase
					based on astronomical data and renders a realistic 3D representation of how the moon
					appears from Earth.
				</p>

				<div class="grid gap-8 md:grid-cols-2">
					<div>
						<h3 class="mb-4 text-lg font-semibold text-white">Key Features</h3>
						<ul class="space-y-2 text-gray-300">
							<li class="flex items-center">
								<svg class="mr-3 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"
									/>
								</svg>
								Real-time lunar phase calculation
							</li>
							<li class="flex items-center">
								<svg class="mr-3 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"
									/>
								</svg>
								Interactive 3D moon model
							</li>
							<li class="flex items-center">
								<svg class="mr-3 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"
									/>
								</svg>
								Accurate shadow rendering
							</li>
							<li class="flex items-center">
								<svg class="mr-3 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"
									/>
								</svg>
								Responsive design
							</li>
							<li class="flex items-center">
								<svg class="mr-3 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"
									/>
								</svg>
								Astronomical accuracy
							</li>
							<li class="flex items-center">
								<svg class="mr-3 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"
									/>
								</svg>
								Doge mode with flying Dogecoin!
							</li>
						</ul>
					</div>

					<div>
						<h3 class="mb-4 text-lg font-semibold text-white">Technical Details</h3>
						<div class="space-y-4">
							<div>
								<h4 class="mb-2 font-medium text-white">Technologies Used</h4>
								<div class="flex flex-wrap gap-2">
									<span class="rounded bg-orange-500 px-3 py-1 text-white">Svelte</span>
									<span class="rounded border border-gray-600 bg-black px-3 py-1 text-white"
										>Three.js</span
									>
									<span class="rounded bg-blue-500 px-3 py-1 text-white">WebGL</span>
									<span class="rounded bg-purple-500 px-3 py-1 text-white">JavaScript</span>
								</div>
							</div>

							<div>
								<h4 class="mb-2 font-medium text-white">Key Concepts</h4>
								<ul class="space-y-1 text-sm text-gray-300">
									<li>• Lunar phase calculations</li>
									<li>• 3D sphere geometry</li>
									<li>• Dynamic lighting effects</li>
									<li>• Real-time rendering</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<h2 class="text-2xl font-bold mb-6">Preview</h2>
		<Slideshow images={screenshots} intervalMs={1500} />

		<!-- Technical Implementation -->
		<section class="mb-12">
			<h2 class="mb-6 text-2xl font-bold">How It Works</h2>
			<div class="grid gap-6 md:grid-cols-3">
				<div class="rounded-lg border border-gray-800 bg-black p-6">
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500">
						<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
							/>
						</svg>
					</div>
					<h3 class="mb-2 text-lg font-semibold">Phase Calculation</h3>
					<p class="text-gray-400">
						Uses astronomical algorithms to calculate the current lunar phase based on the moon's
						position relative to Earth and the Sun.
					</p>
				</div>

				<div class="rounded-lg border border-gray-800 bg-black p-6">
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500">
						<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
							/>
						</svg>
					</div>
					<h3 class="mb-2 text-lg font-semibold">3D Rendering</h3>
					<p class="text-gray-400">
						Three.js creates a realistic 3D sphere with proper texturing and lighting to simulate
						the moon's appearance.
					</p>
				</div>

				<div class="rounded-lg border border-gray-800 bg-black p-6">
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500">
						<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
							/>
						</svg>
					</div>
					<h3 class="mb-2 text-lg font-semibold">Dynamic Lighting</h3>
					<p class="text-gray-400">
						Applies directional lighting to create accurate shadows that represent the current lunar
						illumination.
					</p>
				</div>
			</div>
		</section>

		<!-- Project Stats -->
		<section class="mb-12">
			<h2 class="mb-6 text-2xl font-bold">Project Information</h2>
			<div class="rounded-lg border border-gray-800 bg-black p-8">
				<div class="grid gap-8 md:grid-cols-3">
					<div class="text-center">
						<div class="mb-2 text-3xl font-bold text-white">1</div>
						<div class="text-gray-400">GitHub Stars</div>
					</div>
					<div class="text-center">
						<div class="mb-2 text-3xl font-bold text-white">GPL-3.0</div>
						<div class="text-gray-400">Open Source License</div>
					</div>
					<div class="text-center">
						<div class="mb-2 text-3xl font-bold text-white">2024</div>
						<div class="text-gray-400">Development Year</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Use Cases -->
		<section class="mb-12">
			<h2 class="mb-6 text-2xl font-bold">Applications</h2>
			<div class="rounded-lg border border-gray-800 bg-black p-8">
				<div class="grid gap-8 md:grid-cols-2">
					<div>
						<h3 class="mb-4 text-lg font-semibold text-white">Educational</h3>
						<ul class="space-y-2 text-gray-300">
							<li>• Astronomy education and visualization</li>
							<li>• Understanding lunar cycles</li>
							<li>• Interactive learning tool</li>
							<li>• Science project demonstrations</li>
						</ul>
					</div>
					<div>
						<h3 class="mb-4 text-lg font-semibold text-white">Personal Interest</h3>
						<ul class="space-y-2 text-gray-300">
							<li>• Moon phase tracking</li>
							<li>• Astronomical curiosity</li>
							<li>• Photography planning</li>
							<li>• Flying Dogecoin</li>
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
					<div class="mr-3 h-3 w-3 rounded-full bg-blue-500"></div>
					<span class="text-lg font-semibold text-blue-500">Complete & Open Source</span>
				</div>
				<p class="mb-6 text-gray-300">
					This project is complete and available as open source. It demonstrates the integration of
					astronomical calculations with modern web 3D graphics, creating an educational and
					visually appealing tool for moon phase visualization.
				</p>

				<div class="flex gap-4">
					<a
						href="https://github.com/m-a-x-s-e-e-l-i-g/current-moon-phase-3d"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center rounded-lg bg-white px-6 py-3 font-semibold text-black transition-colors hover:bg-gray-200"
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
