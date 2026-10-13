<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import ProjectHeader from '$lib/components/projects/ProjectHeader.svelte';
	import ProjectOverview from '$lib/components/projects/ProjectOverview.svelte';

	type PillColor = 'orange' | 'blue' | 'emerald' | 'pink' | 'green' | 'gray';
	const repositoryUrl = 'https://github.com/m-a-x-s-e-e-l-i-g/MediaNav-to-Evolution-Upgrade';
	const imageBase = '/images/projects/medianav';
	const tags: Array<{ label: string; color: PillColor }> = [
		{ label: 'Renault & Dacia', color: 'gray' },
		{ label: 'Firmware & applications', color: 'blue' },
		{ label: 'Windows CE', color: 'gray' }
	];
	const overviewDescription =
		'MediaNav MAXmade gives the original Renault and Dacia MediaNav a new chapter. What began as an upgrade guide has grown into a complete system-software and application update: Evolution software on the existing hardware, a redesigned dark interface, and ongoing work on Bluetooth, media playback, navigation, and everyday reliability.';
	const highlights = [
		'Complete USB update containing system software and applications',
		'Dark Home, Radio, Media, and Phone interfaces with familiar control positions',
		'Bluetooth audio and connection improvements',
		'USB playback, resume, playlist, and metadata improvements',
		'Navigation corruption fix included in the update'
	];
	const stack: Array<{ label: string; color: PillColor }> = [
		{ label: 'Windows CE', color: 'gray' },
		{ label: 'MIPS', color: 'blue' },
		{ label: 'Python tooling', color: 'green' },
		{ label: 'LGU packaging', color: 'gray' },
		{ label: 'Reverse engineering', color: 'orange' }
	];
	const status = [
		'Active development',
		'First-generation MediaNav',
		'Source and tooling on GitHub'
	];
	const screens = [
		{
			name: 'home',
			title: 'Home',
			caption: 'A quieter dashboard with recognizable shortcuts and the original control positions.'
		},
		{
			name: 'radio',
			title: 'Radio',
			caption: 'Stations, presets, and tuning controls brought into the same dark visual language.'
		},
		{
			name: 'media',
			title: 'Media',
			caption: 'Track information and playback controls with a consistent, uncluttered layout.'
		},
		{
			name: 'phone',
			title: 'Phone',
			caption:
				'A clear keypad and call controls, designed to feel at home alongside the other screens.'
		}
	];
	const development = [
		{
			title: 'Understand the system',
			body: 'Reverse engineering and address-linked source exports document how the original applications, Bluetooth stack, updater, and platform work.'
		},
		{
			title: 'Improve the daily drive',
			body: 'Interface work and targeted application patches focus on the things you use every day: music, phone connections, touch controls, and navigation.'
		},
		{
			title: 'Build the whole update',
			body: 'Reproducible tooling assembles complete LGU packages, with manifests, checksums, and verification fixtures that keep earlier work included.'
		}
	];
</script>

<Seo
	title="MediaNav MAXmade - Firmware & Application Update | MAXmade"
	description="A complete firmware and application update for first-generation Renault and Dacia MediaNav systems. Explore the dark interface, screenshots, and ongoing development."
	image={`${imageBase}/home-after.jpg`}
	imageAlt="MediaNav MAXmade dark Home interface preview"
	largeImage
/>

<div class="mt-20 min-h-screen bg-gray-900 text-white">
	<ProjectHeader
		title="MediaNav MAXmade"
		subtitle="A new chapter for your dashboard."
		{tags}
		codeUrl={repositoryUrl}
	/>

	<main class="mx-auto max-w-4xl px-4 py-12">
		<section class="mb-12" aria-labelledby="interface-title">
			<div class="mb-8">
				<p class="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase">
					Same hardware. Fresh interface.
				</p>
				<h2 id="interface-title" class="mt-2 text-2xl font-bold">Meet the MAXmade dashboard</h2>
				<p class="mt-4 max-w-2xl leading-relaxed text-gray-300">
					A cohesive dark design across the screens you use most, with familiar controls where you
					expect them.
				</p>
			</div>
			<div class="grid gap-x-6 gap-y-8 sm:grid-cols-2">
				{#each screens as screen (screen.name)}
					<figure>
						<a
							href={`${imageBase}/${screen.name}-after.jpg`}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`Open the ${screen.title} interface preview at full size`}
							class="block overflow-hidden rounded-lg border border-gray-800 bg-black transition-colors hover:border-gray-500"
						>
							<img
								src={`${imageBase}/${screen.name}-after.jpg`}
								alt={`MediaNav MAXmade ${screen.title} screen with the redesigned dark interface`}
								width="776"
								height="466"
								class="aspect-[776/466] w-full object-contain"
								loading={screen.name === 'home' ? 'eager' : 'lazy'}
							/>
						</a>
						<figcaption class="mt-3">
							<h3 class="text-lg font-semibold">{screen.title}</h3>
							<p class="mt-1 text-sm leading-relaxed text-gray-400">{screen.caption}</p>
						</figcaption>
					</figure>
				{/each}
			</div>
			<p class="mt-6 text-sm leading-relaxed text-gray-400">
				Interface previews rendered from project assets with sample data and approximate fonts.
				These illustrate the design; they are not photographs of a running unit. Select an image to
				view it at full size.
			</p>
			<details class="mt-6 border-y border-gray-800 py-5">
				<summary class="cursor-pointer font-semibold text-gray-300"
					>Compare with the original interface</summary
				>
				<div class="mt-6 grid gap-6 sm:grid-cols-2">
					{#each screens as screen (screen.name)}
						<figure>
							<img
								src={`${imageBase}/${screen.name}-before.jpg`}
								alt={`Original MediaNav ${screen.title} interface before the MAXmade redesign`}
								width="776"
								height="466"
								class="aspect-[776/466] w-full rounded-lg border border-gray-800 object-contain"
								loading="lazy"
							/>
							<figcaption class="mt-2 text-sm text-gray-400">Original {screen.title}</figcaption>
						</figure>
					{/each}
				</div>
			</details>
		</section>

		<ProjectOverview description={overviewDescription} {highlights} {stack} {status} />

		<section class="mb-12" aria-labelledby="development-title">
			<p class="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase">
				Behind the dashboard
			</p>
			<h2 id="development-title" class="mt-2 text-2xl font-bold">
				From upgrade guide to a complete project
			</h2>
			<div class="mt-6 divide-y divide-gray-800 border-y border-gray-800">
				{#each development as item (item.title)}
					<div class="grid gap-3 py-6 sm:grid-cols-[14rem_1fr]">
						<h3 class="text-lg font-semibold">{item.title}</h3>
						<p class="leading-relaxed text-gray-400">{item.body}</p>
					</div>
				{/each}
			</div>
		</section>

		<section
			class="rounded-lg border border-gray-800 bg-black p-6 sm:p-8"
			aria-labelledby="explore-title"
		>
			<p class="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase">
				Built in the open
			</p>
			<h2 id="explore-title" class="mt-2 text-2xl font-bold">Follow the development</h2>
			<p class="mt-4 max-w-2xl leading-relaxed text-gray-300">
				MediaNav MAXmade is actively developed for first-generation Renault and Dacia MediaNav
				hardware. Factory Evolution units and later hardware generations are outside this project's
				scope. GitHub has the current downloads, installation guidance, compatibility notes, and
				known issues.
			</p>
			<div class="mt-6 flex flex-wrap gap-3">
				<a
					href={`${repositoryUrl}/releases/latest`}
					target="_blank"
					rel="noopener noreferrer"
					class="rounded-lg bg-white px-6 py-3 font-semibold text-black transition-colors hover:bg-gray-200"
					>Latest release</a
				>
				<a
					href={repositoryUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="rounded-lg border border-gray-600 px-6 py-3 font-semibold text-gray-300 transition-colors hover:border-gray-400 hover:text-white"
					>Explore the project</a
				>
				<a
					href={`${repositoryUrl}/issues`}
					target="_blank"
					rel="noopener noreferrer"
					class="px-3 py-3 text-gray-400 underline underline-offset-4 hover:text-white"
					>Known issues</a
				>
			</div>
		</section>
	</main>
</div>
