<script lang="ts">
	import { goto } from '$app/navigation';
</script>

<svelte:head>
	<title>VeryFire - Email Verification Tool | MAXmade</title>
	<meta
		name="description"
		content="VeryFire is an email verification service that validates email addresses, checks deliverability, and helps improve email marketing success rates."
	/>
	<meta property="og:title" content="VeryFire - Email Verification Tool" />
	<meta
		property="og:description"
		content="Fire up your deliverability with VeryFire's email verification service"
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
					<h1 class="mb-2 text-4xl font-bold">VeryFire</h1>
					<p class="mb-4 text-xl text-gray-400">Email Verification & Deliverability Service</p>

					<div class="mb-6 flex flex-wrap gap-2">
						<span class="rounded-full bg-blue-500 px-3 py-1 text-sm font-medium text-white"
							>SaaS</span
						>
						<span class="rounded-full bg-green-500 px-3 py-1 text-sm font-medium text-white"
							>Email Marketing</span
						>
						<span class="rounded-full bg-purple-500 px-3 py-1 text-sm font-medium text-white"
							>API</span
						>
						<span class="rounded-full bg-orange-500 px-3 py-1 text-sm font-medium text-white"
							>Web Service</span
						>
					</div>
				</div>

				<div class="ml-6 flex gap-3">
					<a
						href="https://www.veryfire.io"
						target="_blank"
						rel="noopener noreferrer"
						class="rounded-lg bg-white px-6 py-3 font-semibold text-black transition-colors hover:bg-gray-200"
					>
						Visit Website
					</a>
					<a
						href="https://app.veryfire.io"
						target="_blank"
						rel="noopener noreferrer"
						class="rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-black"
					>
						Try App
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
					VeryFire is a comprehensive email verification service designed to help businesses improve
					their email deliverability and marketing success rates. The platform validates email
					addresses for common typos, checks deliverability, and provides blacklist lookups.
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
								Email address validation
							</li>
							<li class="flex items-center">
								<svg class="mr-3 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"
									/>
								</svg>
								Deliverability checking
							</li>
							<li class="flex items-center">
								<svg class="mr-3 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"
									/>
								</svg>
								Typo autocorrection
							</li>
							<li class="flex items-center">
								<svg class="mr-3 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"
									/>
								</svg>
								Blacklist lookup
							</li>
							<li class="flex items-center">
								<svg class="mr-3 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"
									/>
								</svg>
								CSV file processing
							</li>
							<li class="flex items-center">
								<svg class="mr-3 h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
										clip-rule="evenodd"
									/>
								</svg>
								API & enrichment features (coming soon)
							</li>
						</ul>
					</div>

					<div>
						<h3 class="mb-4 text-lg font-semibold text-white">Technologies</h3>
						<div class="flex flex-wrap gap-2">
							<span class="rounded bg-gray-700 px-3 py-1 text-gray-300">Web Application</span>
							<span class="rounded bg-gray-700 px-3 py-1 text-gray-300">API Development</span>
							<span class="rounded bg-gray-700 px-3 py-1 text-gray-300">Email Processing</span>
							<span class="rounded bg-gray-700 px-3 py-1 text-gray-300">SaaS Platform</span>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Use Cases -->
		<section class="mb-12">
			<h2 class="mb-6 text-2xl font-bold">Use Cases</h2>
			<div class="grid gap-6 md:grid-cols-3">
				<div class="rounded-lg border border-gray-800 bg-black p-6">
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500">
						<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
					</div>
					<h3 class="mb-2 text-lg font-semibold">Email Marketing</h3>
					<p class="text-gray-400">
						Improve delivery rates and engagement by cleaning your email lists before campaigns.
					</p>
				</div>

				<div class="rounded-lg border border-gray-800 bg-black p-6">
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-500">
						<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</div>
					<h3 class="mb-2 text-lg font-semibold">List Quality</h3>
					<p class="text-gray-400">
						Maintain high-quality subscriber lists by identifying and removing invalid addresses.
					</p>
				</div>

				<div class="rounded-lg border border-gray-800 bg-black p-6">
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500">
						<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13 10V3L4 14h7v7l9-11h-7z"
							/>
						</svg>
					</div>
					<h3 class="mb-2 text-lg font-semibold">Instant Validation</h3>
					<p class="text-gray-400">
						Get immediate feedback on email validity to prevent bounces and protect sender
						reputation.
					</p>
				</div>
			</div>
		</section>

		<!-- Status -->
		<section>
			<h2 class="mb-6 text-2xl font-bold">Project Status</h2>
			<div class="rounded-lg border border-gray-800 bg-black p-8">
				<div class="mb-4 flex items-center">
					<div class="mr-3 h-3 w-3 rounded-full bg-green-500"></div>
					<span class="text-lg font-semibold text-green-500">Live & Active</span>
				</div>
				<p class="mb-6 text-gray-300">
					VeryFire is currently live and accepting users. The core email verification features are
					fully functional, with additional API and enrichment features in development.
				</p>

				<div class="flex gap-4">
					<a
						href="https://www.veryfire.io"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center rounded-lg bg-white px-6 py-3 font-semibold text-black transition-colors hover:bg-gray-200"
					>
						Try VeryFire
						<svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
							/>
						</svg>
					</a>
				</div>
			</div>
		</section>
	</main>
</div>
