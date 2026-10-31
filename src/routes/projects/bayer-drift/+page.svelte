<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import ProjectHeader from '$lib/components/projects/ProjectHeader.svelte';
	import ProjectOverview from '$lib/components/projects/ProjectOverview.svelte';

	type PillColor = 'orange' | 'blue' | 'emerald' | 'pink' | 'green' | 'gray';
	const repositoryUrl = 'https://github.com/m-a-x-s-e-e-l-i-g/bayer-drift';
	const websiteUrl = 'https://bayer-drift.netlify.app/';
	const imageBase = '/images/projects/bayer-drift';
	const tags: Array<{ label: string; color: PillColor }> = [
		{ label: 'Photography', color: 'gray' },
		{ label: 'Canon EOS M', color: 'gray' },
		{ label: 'Magic Lantern', color: 'blue' }
	];
	const overviewDescription =
		'Bayer Drift is my creative Magic Lantern module for the original Canon EOS M. It shifts the registration of the sensor’s colour samples in small repeating tiles, creating false colour, beaded edges and patterned interference. Take a photograph with the normal shutter button: the effect is saved directly in the Canon CR2 RAW file.';
	const highlights = [
		'Rearranges original 14-bit samples within their own Bayer colour planes',
		'Subtle, Crunchy and Overdrive presets, plus manual controls',
		'Dots, horizontal and vertical patterns with adjustable texture size',
		'Shuffle a recipe and keep it until you change it',
		'Normal shutter, autofocus, Canon RAW saving, review and playback',
		'Effect state and recipe remembered after restart'
	];
	const stack: Array<{ label: string; color: PillColor }> = [
		{ label: 'C', color: 'blue' },
		{ label: 'Magic Lantern', color: 'gray' },
		{ label: 'ARM', color: 'gray' }
	];
	const status = [
		'Public release & open source',
		'GPL-2.0-or-later',
		'Developed and tested on the original Canon EOS M'
	];
	const examples = [
		{
			id: 'city',
			title: 'City blocks, drifting',
			alt: 'City blocks with repeating colour interference, photographed with Bayer Drift on the EOS M',
			detailAlt:
				'Enlarged detail of the city photograph showing repeating coloured edges and interference',
			caption: 'Repeating colour patterns break up the buildings and fine edges.',
			width: 720,
			height: 481
		},
		{
			id: 'bark',
			title: 'A little rough around the edges',
			alt: 'Tree bark broken into repeating colour blocks and bright fringes by Bayer Drift',
			detailAlt: 'Enlarged detail of the bark photograph showing beaded edges and coloured blocks',
			caption: 'Natural texture picks up coloured fringes and beaded detail.',
			width: 481,
			height: 720
		},
		{
			id: 'wall',
			title: 'Interference in the mortar',
			alt: 'Brick wall with fine repeating colour patterns around the mortar, photographed with Bayer Drift',
			detailAlt: 'Enlarged detail of the brick wall photograph showing fine coloured interference',
			caption: 'Brickwork reveals the small repeating patterns around lines and edges.',
			width: 720,
			height: 481
		}
	];
</script>

<Seo
	title="Bayer Drift - Canon EOS M Bayer Glitch Photography | MAXmade"
	description="Make the sensor glitch on purpose with Bayer Drift, Max Seelig’s Magic Lantern module for the original Canon EOS M. Explore real photographs with the effect saved in Canon CR2 RAW."
	image={`${imageBase}/city-small.webp`}
	imageAlt="City blocks with repeating colour interference, photographed with Bayer Drift on the Canon EOS M"
	largeImage
/>

<div class="mt-20 min-h-screen bg-gray-900 text-white">
	<ProjectHeader
		title="Bayer Drift"
		subtitle="Make the sensor glitch on purpose. Keep the result in RAW."
		{tags}
		visitUrl={websiteUrl}
		codeUrl={repositoryUrl}
	/>

	<main class="mx-auto max-w-4xl px-4 py-12">
		<section class="mb-12" aria-labelledby="photographs-title">
			<h2 id="photographs-title" class="mb-4 text-2xl font-bold">
				From the sensor to the photograph
			</h2>
			<p class="mb-8 max-w-prose text-lg leading-relaxed text-gray-300">
				These are my photographs from the original EOS M, developed from the camera-processed CR2
				files. Each photograph sits beside a matching 160 × 160 pixel crop, enlarged six times to
				reveal the pattern.
			</p>
			<div class="space-y-10">
				{#each examples as example, index (example.id)}
					<figure>
						<div class="grid items-center gap-4 sm:grid-cols-[3fr_2fr]">
							<img
								src={`${imageBase}/${example.id}-small.webp`}
								alt={example.alt}
								width={example.width}
								height={example.height}
								class="max-h-[34rem] w-full rounded-lg border border-gray-800 object-contain"
								loading={index === 0 ? 'eager' : 'lazy'}
							/>
							<div>
								<img
									src={`${imageBase}/${example.id}-detail.png`}
									alt={example.detailAlt}
									width="960"
									height="960"
									class="w-full rounded-lg border border-gray-800"
									loading="lazy"
								/>
								<p class="mt-2 text-sm text-gray-400">Matching detail · 6× enlargement</p>
							</div>
						</div>
						<figcaption class="mt-4">
							<h3 class="text-lg font-semibold">{example.title}</h3>
							<p class="mt-1 text-sm leading-relaxed text-gray-400">{example.caption}</p>
						</figcaption>
					</figure>
				{/each}
			</div>
			<p class="mt-6 max-w-prose text-sm leading-relaxed text-gray-400">
				Photographs © Max Seelig (MAXmade). Developed with camera white balance; no extra glitch
				filter is added for this showcase. Colours depend on the RAW converter. Capture recipes are
				not attributed to these examples.
			</p>
		</section>

		<ProjectOverview description={overviewDescription} {highlights} {stack} {status} />

		<section class="mb-12" aria-labelledby="shooting-title">
			<h2 id="shooting-title" class="mb-4 text-2xl font-bold">
				Compose normally. Discover the drift.
			</h2>
			<p class="mb-4 max-w-prose text-lg leading-relaxed text-gray-300">
				LiveView stays the normal Canon view. Compose and focus as usual, then judge the effect in
				the captured image. The module rearranges existing sensor samples: it adds no random noise
				and uses no AI image generation.
			</p>
			<p class="max-w-prose leading-relaxed text-gray-400">
				Start with Subtle, Crunchy or Overdrive, or build a Custom recipe. Adjust strength from 1–8,
				choose Dots, Horizontal or Vertical, set a Fine, Medium or Coarse texture, and change the
				phase from 1–4. Shuffle chooses a new recipe that stays fixed until you change it.
			</p>
		</section>

		<section class="mb-12" aria-labelledby="explore-title">
			<h2 id="explore-title" class="mb-4 text-2xl font-bold">Look closer</h2>
			<p class="mb-6 max-w-prose text-lg leading-relaxed text-gray-300">
				Explore the photographs at 2×, 4× or 8× in the project website’s pixel viewer. Choose a spot
				in the overview, then drag the close-up to inspect the developed image pixels.
			</p>
			<a
				href={`${websiteUrl}#closer`}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex rounded-lg bg-white px-6 py-3 font-semibold text-black transition-colors hover:bg-gray-200"
			>
				Explore the photographs
			</a>
		</section>

		<section class="mb-12" aria-labelledby="camera-title">
			<h2 id="camera-title" class="mb-4 text-2xl font-bold">Use Bayer Drift on your camera</h2>
			<p class="mb-4 max-w-prose text-lg leading-relaxed text-gray-300">
				Bayer Drift supports the original Canon EOS M with Canon firmware 2.0.2 and the EOSM.202
				Magic Lantern development build from June 20, 2025 (module API 8). Use A+, Auto ISO, Canon
				RAW, single-shot drive and the native 1× LCD view. Other cameras and builds, movie recording
				and bursts are outside the supported setup.
			</p>
			<p class="mb-6 max-w-prose leading-relaxed text-gray-400">
				Magic Lantern must already be installed. With the camera powered off, copy
				<code>bayer.mo</code> to <code>ML/MODULES</code> on the card. Enable it in the Modules tab, disable
				other MAXmade effects and restart. Open Shoot → Bayer Drift, turn Photo effect ON, choose a recipe,
				close the menu and wait for ON - Ready before taking a photograph. The repository has the full
				installation and troubleshooting instructions.
			</p>
			<div class="flex flex-wrap gap-4">
				<a
					href={`${repositoryUrl}/releases`}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex rounded-lg bg-white px-6 py-3 font-semibold text-black transition-colors hover:bg-gray-200"
				>
					Download Bayer Drift
				</a>
				<a
					href={`${repositoryUrl}#start-shooting`}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex rounded-lg border border-gray-600 px-6 py-3 font-semibold text-gray-300 transition-colors hover:border-gray-500 hover:text-white"
				>
					Read installation guide
				</a>
			</div>
		</section>

		<section aria-labelledby="related-title">
			<h2 id="related-title" class="mb-4 text-2xl font-bold">More experiments with the EOS M</h2>
			<p class="max-w-prose leading-relaxed text-gray-300">
				Bayer Drift grew out of an accidental Bayer-registration effect while I was developing
				<a href="/projects/mirror-worlds" class="text-white underline underline-offset-4"
					>Mirror Worlds</a
				>. Explore that project for mirrored compositions, or
				<a href="/projects/kaleido" class="text-white underline underline-offset-4">Kaleido</a>
				for repeating kaleidoscope patterns.
			</p>
		</section>
	</main>
</div>
