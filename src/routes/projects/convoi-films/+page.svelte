<script lang="ts">
	import AutoScrollScreenshot from '$lib/components/AutoScrollScreenshot.svelte';
	import ProjectHeader from '$lib/components/projects/ProjectHeader.svelte';
	import ProjectOverview from '$lib/components/projects/ProjectOverview.svelte';

	type PillColor = 'orange' | 'blue' | 'emerald' | 'pink' | 'green' | 'gray';

	const tags: Array<{ label: string; color: PillColor }> = [
		{ label: 'JavaScript', color: 'orange' },
		{ label: 'PHP', color: 'blue' },
		{ label: 'HTML5', color: 'orange' },
		{ label: 'jQuery', color: 'blue' }
	];

	const overviewDescription =
		"Convoi Films is a professional portfolio website designed for a video production company specializing in creative filmmaking and videography. The platform features a custom content management system that allows the team to showcase their video work, manage projects, and present their creative portfolio to potential clients.";

	const highlights = [
		"Video portfolio showcase",
		'Custom content management',
		'Project categorization',
		'Responsive design',
		'Client testimonials',
		'Contact integration'
	];

	const stack: Array<{ label: string; color: PillColor }> = [
		{ label: 'JavaScript', color: 'gray' },
		{ label: 'PHP', color: 'gray' },
		{ label: 'HTML5', color: 'gray' },
		{ label: 'jQuery', color: 'gray' },
		{ label: 'CMS', color: 'gray' }
	];

	const status = ['Live & Active'];
</script>

<svelte:head>
	<title>Convoi Films Portfolio | MAXmade</title>
	<meta
		name="description"
		content="Professional portfolio website for video production company Convoi Films, featuring a content management system for showcasing video work and projects."
	/>
	<meta property="og:title" content="Convoi Films Portfolio Website" />
	<meta
		property="og:description"
		content="Professional portfolio website for video production company Convoi Films"
	/>
	<meta property="og:type" content="website" />
</svelte:head>

<div class="mt-20 min-h-screen bg-gray-900 text-white">
	<ProjectHeader
		title="Convoi Films"
		subtitle="Professional Video Production Portfolio"
		tags={tags}
		visitUrl="https://www.convoifilms.nl"
		backHref="/#projects"
	/>

	<!-- Content -->
	<main class="mx-auto max-w-4xl px-4 py-12">
		<ProjectOverview description={overviewDescription} highlights={highlights} stack={stack} status={status} />

		<h2 class="text-2xl font-bold">Preview</h2>
		<AutoScrollScreenshot
			src="/images/projects/screenshot-convoifilms.jpeg"
			alt="Convoi Films Full Website Screenshot"
			height={400}
			duration={15}
		/>

		<!-- Services -->
		<section class="mb-12">
			<h2 class="mb-6 text-2xl font-bold">Video Production Services</h2>
			<div class="grid gap-6 md:grid-cols-3">
				<div class="rounded-lg border border-gray-800 bg-black p-6">
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-500">
						<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
							/>
						</svg>
					</div>
					<h3 class="mb-2 text-lg font-semibold">Corporate Videos</h3>
					<p class="text-gray-400">
						Professional corporate video production for businesses looking to showcase their brand
						and services.
					</p>
				</div>

				<div class="rounded-lg border border-gray-800 bg-black p-6">
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500">
						<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V3a1 1 0 011 1v12a1 1 0 01-1 1H8a1 1 0 01-1-1V4h10z"
							/>
						</svg>
					</div>
					<h3 class="mb-2 text-lg font-semibold">Creative Content</h3>
					<p class="text-gray-400">
						Artistic and creative video content for campaigns, social media, and brand storytelling.
					</p>
				</div>

				<div class="rounded-lg border border-gray-800 bg-black p-6">
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500">
						<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V8a1 1 0 011-1h3a1 1 0 001-1V4z"
							/>
						</svg>
					</div>
					<h3 class="mb-2 text-lg font-semibold">Post Production</h3>
					<p class="text-gray-400">
						Complete post-production services including editing, color grading, and motion graphics.
					</p>
				</div>
			</div>
		</section>

		<!-- Project Details -->
		<section class="mb-12">
			<h2 class="mb-6 text-2xl font-bold">Development Approach</h2>
			<div class="rounded-lg border border-gray-800 bg-black p-8">
				<div class="grid gap-8 md:grid-cols-2">
					<div>
						<h3 class="mb-4 text-lg font-semibold text-white">Frontend Development</h3>
						<p class="mb-4 text-gray-300">
							Built with modern web technologies including HTML5, JavaScript, and jQuery to create
							an engaging and interactive user experience. The responsive design ensures optimal
							viewing across all devices.
						</p>
						<ul class="space-y-2 text-gray-400">
							<li>• Interactive video galleries</li>
							<li>• Smooth animations and transitions</li>
							<li>• Mobile-first responsive design</li>
							<li>• Optimized performance</li>
						</ul>
					</div>

					<div>
						<h3 class="mb-4 text-lg font-semibold text-white">Backend & CMS</h3>
						<p class="mb-4 text-gray-300">
							Custom PHP-based content management system allows the Convoi Films team to easily
							manage their portfolio, add new projects, and update content without technical
							knowledge.
						</p>
						<ul class="space-y-2 text-gray-400">
							<li>• Custom PHP CMS</li>
							<li>• Video upload and management</li>
							<li>• Project categorization</li>
							<li>• Client testimonial system</li>
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
					<span class="text-lg font-semibold text-green-500">Live & Active</span>
				</div>
				<p class="mb-6 text-gray-300">
					The Convoi Films portfolio website is live and actively used by the video production
					company to showcase their work and attract new clients. The custom CMS allows for
					continuous content updates and project additions.
				</p>

				<div class="flex gap-4">
					<a
						href="https://www.convoifilms.nl"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center rounded-lg bg-white px-6 py-3 font-semibold text-black transition-colors hover:bg-gray-200"
					>
						Visit Convoi Films
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
