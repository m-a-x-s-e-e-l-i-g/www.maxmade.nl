<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import ProjectHeader from '$lib/components/projects/ProjectHeader.svelte';
	import ProjectOverview from '$lib/components/projects/ProjectOverview.svelte';

	type PillColor = 'orange' | 'blue' | 'emerald' | 'pink' | 'green' | 'gray';
	const repositoryUrl = 'https://github.com/m-a-x-s-e-e-l-i-g/mirror-worlds';
	const websiteUrl = 'https://mirror-worlds.netlify.app/';
	const imageBase = '/images/projects/mirror-worlds';
	const tags: Array<{ label: string; color: PillColor }> = [
		{ label: 'Photography', color: 'gray' },
		{ label: 'Canon EOS M', color: 'gray' },
		{ label: 'Magic Lantern', color: 'blue' }
	];
	const overviewDescription =
		'Mirror Worlds turns the original Canon EOS M into a tool for creative reflection photography. Fold a building into impossible architecture, invent a second horizon, or surround a subject with mirrored borders. Compose the effect in LiveView, press the normal shutter button, and keep the result in a Canon CR2 RAW photo.';
	const highlights = [
		'LiveView mirror effects captured directly in Canon CR2 RAW photos',
		'Seven placements: individual edges, opposing sides, or all four edges',
		'44 usable combinations, with border sizes from half to sixth',
		'Normal shutter, autofocus, Auto ISO, camera review, and playback',
		'Effect, placement, and size settings remembered after restart',
		'Interactive browser playground, including your own photos'
	];
	const stack: Array<{ label: string; color: PillColor }> = [
		{ label: 'C', color: 'blue' },
		{ label: 'Magic Lantern', color: 'gray' },
		{ label: 'ARM', color: 'gray' },
		{ label: 'HTML & CSS', color: 'orange' },
		{ label: 'JavaScript', color: 'pink' },
		{ label: 'Python build tooling', color: 'green' }
	];
	const status = [
		'Public release & open source',
		'GPL-2.0-or-later',
		'Tested on the original Canon EOS M'
	];
	const examples = [
		{
			image: 'left-right-quarter',
			title: 'Left + Right · Quarter',
			alt: 'Illustration of a seaside scene with mirrored outer quarters on both sides',
			caption: 'Keep the central half and reflect it into the outer quarters.'
		},
		{
			image: 'bottom-third',
			title: 'Bottom · Third',
			alt: 'Illustration of the bottom third of a seaside scene reflecting the view above it',
			caption: 'Reflect the scene into the bottom third to create a second horizon.'
		},
		{
			image: 'all-edges-third',
			title: 'All edges · Third / Third',
			alt: 'Illustration of mirrored borders and corners surrounding the original center of a seaside scene',
			caption: 'Surround the original center with reflections, including the corners.'
		}
	];
</script>

<Seo
	title="Mirror Worlds - Canon EOS M Mirror Photography | MAXmade"
	description="Creative mirror photography on the original Canon EOS M. Preview reflections in LiveView, capture Canon CR2 RAW photos, and try the interactive Mirror Worlds playground."
	image={`${imageBase}/liveview.webp`}
	imageAlt="On-device EOS M LiveView screenshot showing orange, yellow and black artwork mirrored around the center"
	largeImage
/>

<div class="mt-20 min-h-screen bg-gray-900 text-white">
	<ProjectHeader
		title="Mirror Worlds"
		subtitle="See the reflections live. Keep them in RAW."
		{tags}
		visitUrl={websiteUrl}
		codeUrl={repositoryUrl}
	/>

	<main class="mx-auto max-w-4xl px-4 py-12">
		<section class="mb-12" aria-labelledby="preview-title">
			<h2 id="preview-title" class="mb-6 text-2xl font-bold">A different point of view</h2>
			<figure>
				<img
					src={`${imageBase}/liveview.webp`}
					alt="On-device EOS M LiveView screenshot showing orange, yellow and black artwork mirrored around the center"
					width="720"
					height="480"
					class="w-full rounded-lg border border-gray-800"
				/>
				<figcaption class="mt-3 text-sm leading-relaxed text-gray-400">
					Captured directly on the original Canon EOS M by MAXmade, with camera overlays intact.
				</figcaption>
			</figure>
			<p class="mt-4 text-sm leading-relaxed text-gray-400">
				This is an on-device LiveView screenshot, not an exported CR2 photo. The examples below are
				browser-rendered illustrations using an AI-generated starting scene. Mirror Worlds itself
				uses no AI.
			</p>
		</section>

		<ProjectOverview description={overviewDescription} {highlights} {stack} {status} />

		<section class="mb-12" aria-labelledby="examples-title">
			<h2 id="examples-title" class="mb-6 text-2xl font-bold">One scene. A few other worlds.</h2>
			<div class="grid gap-x-6 gap-y-8 sm:grid-cols-2">
				{#each examples as example (example.image)}
					<figure>
						<img
							src={`${imageBase}/${example.image}.webp`}
							alt={example.alt}
							width="1080"
							height="720"
							class="w-full rounded-lg border border-gray-800"
							loading="lazy"
						/>
						<figcaption class="mt-3">
							<h3 class="text-lg font-semibold">{example.title}</h3>
							<p class="mt-1 text-sm leading-relaxed text-gray-400">{example.caption}</p>
						</figcaption>
					</figure>
				{/each}
			</div>
			<p class="mt-6 max-w-2xl leading-relaxed text-gray-300">
				Try the placements and sizes in the website's interactive playground. You can also choose
				your own photo; it stays in your browser.
			</p>
			<a
				href={`${websiteUrl}#try`}
				target="_blank"
				rel="noopener noreferrer"
				class="mt-6 inline-flex rounded-lg bg-white px-6 py-3 font-semibold text-black transition-colors hover:bg-gray-200"
				>Try a mirror</a
			>
		</section>

		<section class="mb-12" aria-labelledby="camera-title">
			<h2 id="camera-title" class="mb-6 text-2xl font-bold">Made for the original Canon EOS M</h2>
			<p class="mb-6 max-w-2xl leading-relaxed text-gray-300">
				Mirror Worlds is an add-on module for an existing Magic Lantern installation. It was
				developed and tested on the original Canon EOS M; other cameras and other EOS M models have
				not been validated.
			</p>
			<dl class="divide-y divide-gray-800 border-y border-gray-800">
				<div class="grid gap-2 py-4 sm:grid-cols-[12rem_1fr]">
					<dt class="font-semibold">Camera</dt>
					<dd class="text-gray-300">Original Canon EOS M · Canon firmware 2.0.2</dd>
				</div>
				<div class="grid gap-2 py-4 sm:grid-cols-[12rem_1fr]">
					<dt class="font-semibold">Magic Lantern</dt>
					<dd class="text-gray-300">Dev build 2025-06-20 · EOSM.202</dd>
				</div>
				<div class="grid gap-2 py-4 sm:grid-cols-[12rem_1fr]">
					<dt class="font-semibold">Tested shooting setup</dt>
					<dd class="text-gray-300">A+ · Auto ISO · Canon RAW · single-shot drive</dd>
				</div>
				<div class="grid gap-2 py-4 sm:grid-cols-[12rem_1fr]">
					<dt class="font-semibold">LiveView</dt>
					<dd class="text-gray-300">Native 1× view · Global Draw ON</dd>
				</div>
			</dl>
			<p class="mt-6 max-w-2xl text-sm leading-relaxed text-gray-400">
				The supported workflow is single RAW photos. Bursts, video, remote triggers, and long
				exposures are outside its scope. The module saves the mirrored result without a companion
				original; turn the effect off to take ordinary photos.
			</p>
		</section>

		<section
			class="rounded-lg border border-gray-800 bg-black p-6 sm:p-8"
			aria-labelledby="start-title"
		>
			<h2 id="start-title" class="text-2xl font-bold">Choose a fold. Take a photo.</h2>
			<p class="mt-4 max-w-2xl leading-relaxed text-gray-300">
				Download the prebuilt module from GitHub and follow the installation guide for your camera
				setup. Once enabled, choose the edges and sizes under Shoot → Mirror Worlds, close the menu,
				and use the physical shutter. Your last settings return after a restart.
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
					href={`${repositoryUrl}#start-shooting`}
					target="_blank"
					rel="noopener noreferrer"
					class="rounded-lg border border-gray-600 px-6 py-3 font-semibold text-gray-300 transition-colors hover:border-gray-400 hover:text-white"
					>Installation guide</a
				>
			</div>
		</section>
	</main>
</div>
