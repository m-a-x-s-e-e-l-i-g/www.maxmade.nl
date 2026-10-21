<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import ProjectHeader from '$lib/components/projects/ProjectHeader.svelte';
	import ProjectOverview from '$lib/components/projects/ProjectOverview.svelte';

	type PillColor = 'orange' | 'blue' | 'emerald' | 'pink' | 'green' | 'gray';
	const repositoryUrl = 'https://github.com/m-a-x-s-e-e-l-i-g/kaleido';
	const websiteUrl = 'https://kaleido-eosm.netlify.app/';
	const imageBase = '/images/projects/kaleido';
	const tags: Array<{ label: string; color: PillColor }> = [
		{ label: 'Photography', color: 'gray' },
		{ label: 'Canon EOS M', color: 'gray' },
		{ label: 'Magic Lantern', color: 'blue' }
	];
	const overviewDescription =
		'Kaleido turns one wedge of the scene into a repeating kaleidoscope pattern on the original Canon EOS M. Choose 4, 6 or 12 segments, rotate the pattern through a full 360°, and move its center to find a new composition. See the effect in LiveView, then use the normal shutter to capture it in a native Canon CR2 RAW photo.';
	const highlights = [
		'4, 6 or 12 reflected segments from a single scene',
		'Full 360° rotation and a movable pattern center',
		'LiveView preview and native Canon CR2 RAW capture',
		'Normal Canon shutter workflow with autofocus and Auto ISO',
		'Effect and geometry settings remembered after restart',
		'Browser playground with your own photos and PNG export'
	];
	const stack: Array<{ label: string; color: PillColor }> = [
		{ label: 'C', color: 'blue' },
		{ label: 'Magic Lantern', color: 'gray' },
		{ label: 'ARM', color: 'gray' },
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
			image: 'kaleido-liveview-self-portrait.webp',
			title: 'A familiar face, repeated',
			alt: 'Photographer and Canon lenses repeated around the kaleidoscope center in EOS M LiveView',
			caption: 'Turn a self-portrait into a pattern of faces, lenses and reflections.'
		},
		{
			image: 'kaleido-liveview-screen.webp',
			title: 'A screen within a screen',
			alt: 'A television screen reflected into a rectangular kaleidoscope frame in EOS M LiveView',
			caption: 'Find unexpected geometry in familiar objects and everyday scenes.'
		},
		{
			image: 'kaleido-liveview.webp',
			title: 'The pattern, on the camera',
			alt: 'Kaleidoscope pattern in EOS M LiveView with Canon exposure information and framing grid',
			caption: 'Compose with the effect visible alongside the camera’s exposure information.'
		}
	];
</script>

<Seo
	title="Kaleido - Canon EOS M Kaleidoscope Photography | MAXmade"
	description="Turn the ordinary around with Kaleido for the original Canon EOS M. Compose 4, 6 or 12 kaleidoscope segments in LiveView, capture Canon CR2 RAW, and try the browser playground."
	image={`${imageBase}/kaleido-liveview-stonework.webp`}
	imageAlt="Stonework reflected into a kaleidoscope pattern on the original Canon EOS M LiveView screen"
	largeImage
/>

<div class="mt-20 min-h-screen bg-gray-900 text-white">
	<ProjectHeader
		title="Kaleido"
		subtitle="Turn the ordinary around."
		{tags}
		visitUrl={websiteUrl}
		codeUrl={repositoryUrl}
	/>

	<main class="mx-auto max-w-4xl px-4 py-12">
		<section class="mb-12" aria-labelledby="preview-title">
			<h2 id="preview-title" class="mb-6 text-2xl font-bold">One scene. A new symmetry.</h2>
			<figure>
				<img
					src={`${imageBase}/kaleido-liveview-stonework.webp`}
					alt="Stonework reflected into a kaleidoscope pattern on the original Canon EOS M LiveView screen"
					width="720"
					height="480"
					class="w-full rounded-lg border border-gray-800"
				/>
				<figcaption class="mt-3 text-sm leading-relaxed text-gray-400">
					An actual EOS M LiveView screen capture by MAXmade, with camera overlays intact. All
					camera images on this page are uncropped screen captures, not exported CR2 photos.
				</figcaption>
			</figure>
		</section>

		<ProjectOverview description={overviewDescription} {highlights} {stack} {status} />

		<section class="mb-12" aria-labelledby="examples-title">
			<h2 id="examples-title" class="mb-6 text-2xl font-bold">From the EOS M</h2>
			<div class="grid gap-x-6 gap-y-8 sm:grid-cols-2">
				{#each examples as example (example.image)}
					<figure>
						<img
							src={`${imageBase}/${example.image}`}
							alt={example.alt}
							width="720"
							height="480"
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
		</section>

		<section class="mb-12" aria-labelledby="playground-title">
			<h2 id="playground-title" class="mb-4 text-2xl font-bold">
				Find your pattern in the browser
			</h2>
			<p class="mb-4 max-w-prose text-lg leading-relaxed text-gray-300">
				Try the interactive playground to explore segments, rotation and center before picking up
				the camera. Choose your own photo, compare it with the original, and save a PNG. Your photos
				stay in your browser.
			</p>
			<p class="mb-6 max-w-prose leading-relaxed text-gray-400">
				The playground illustrates the geometry in RGB. Its default scene is AI-generated; it does
				not emulate the camera sensor or demonstrate RAW output. The camera module uses no AI.
			</p>
			<a
				href={websiteUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex rounded-lg bg-white px-6 py-3 font-semibold text-black transition-colors hover:bg-gray-200"
			>
				Try the playground
			</a>
		</section>

		<section class="mb-12" aria-labelledby="camera-title">
			<h2 id="camera-title" class="mb-4 text-2xl font-bold">Use Kaleido on your camera</h2>
			<p class="mb-4 max-w-prose text-lg leading-relaxed text-gray-300">
				Kaleido is a standalone Magic Lantern module for the original Canon EOS M with Canon
				firmware 2.0.2 and the Magic Lantern dev build from June 20, 2025 (ed3e7c0). It supports
				single-shot Canon RAW photography. Other cameras and builds, video and bursts are outside
				its supported workflow.
			</p>
			<p class="mb-6 max-w-prose leading-relaxed text-gray-400">
				It has its own Shoot menu and saved preferences. Enable one MAXmade effect module at a time,
				then fully restart the camera. The repository includes downloads, the supported camera setup
				and troubleshooting instructions.
			</p>
			<div class="flex flex-wrap gap-4">
				<a
					href={`${repositoryUrl}/releases`}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex rounded-lg bg-white px-6 py-3 font-semibold text-black transition-colors hover:bg-gray-200"
				>
					Download Kaleido
				</a>
				<a
					href={`${repositoryUrl}/blob/main/docs/installation.md`}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex rounded-lg border border-gray-600 px-6 py-3 font-semibold text-gray-300 transition-colors hover:border-gray-500 hover:text-white"
				>
					Read installation guide
				</a>
			</div>
		</section>

		<section aria-labelledby="related-title">
			<h2 id="related-title" class="mb-4 text-2xl font-bold">More ways to reflect</h2>
			<p class="max-w-prose leading-relaxed text-gray-300">
				Kaleido derives from
				<a href="/projects/mirror-worlds" class="text-white underline underline-offset-4">
					Mirror Worlds</a
				>, my EOS M module for simple reflections and mirrored borders. Explore both to find the
				effect that fits your photograph.
			</p>
		</section>
	</main>
</div>
