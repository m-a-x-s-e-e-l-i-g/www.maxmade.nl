<script lang="ts">
	import Slideshow from '$lib/components/Slideshow.svelte';
	import ProjectHeader from '$lib/components/projects/ProjectHeader.svelte';
	import ProjectOverview from '$lib/components/projects/ProjectOverview.svelte';

	const screenshots = [
		{ src: '/images/projects/screenshot-veryfire-1.png', alt: 'VeryFire Website Screenshot 1' },
		{ src: '/images/projects/screenshot-veryfire-2.png', alt: 'VeryFire Website Screenshot 2' },
		{ src: '/images/projects/screenshot-veryfire-3.png', alt: 'VeryFire Platform Screenshot 3' },
		{ src: '/images/projects/screenshot-veryfire-4.png', alt: 'VeryFire Platform Screenshot 4' },
		{ src: '/images/projects/screenshot-veryfire-5.png', alt: 'VeryFire Platform Screenshot 5' }
	];

	type PillColor = 'orange' | 'blue' | 'emerald' | 'pink' | 'green' | 'gray';

	const tags: Array<{ label: string; color: PillColor }> = [
		{ label: 'SaaS', color: 'blue' },
		{ label: 'Email Marketing', color: 'green' },
		{ label: 'API', color: 'pink' },
		{ label: 'Web Service', color: 'orange' }
	];

	const overviewDescription =
		"VeryFire is a comprehensive email verification service designed to help businesses improve their email deliverability and marketing success rates. The platform validates email addresses for common typos, checks deliverability, and provides blacklist lookups.";

	const highlights = [
		'Email address validation',
		'Deliverability checking',
		'Typo autocorrection',
		'Blacklist lookup',
		'CSV file processing',
		'API & enrichment features (coming soon)'
	];

	const stack: Array<{ label: string; color: PillColor }> = [
		{ label: 'Web Application', color: 'gray' },
		{ label: 'API Development', color: 'gray' },
		{ label: 'Email Processing', color: 'gray' },
		{ label: 'SaaS Platform', color: 'gray' }
	];

	const status = ['Live & Active'];
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
	<ProjectHeader
		title="VeryFire"
		subtitle="Email Verification & Deliverability Service"
		tags={tags}
		visitUrl="https://www.veryfire.io"
		codeUrl="https://app.veryfire.io"
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
