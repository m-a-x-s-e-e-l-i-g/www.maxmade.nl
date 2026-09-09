<script lang="ts">
	import ProjectHeader from '$lib/components/projects/ProjectHeader.svelte';
	import ProjectOverview from '$lib/components/projects/ProjectOverview.svelte';

	type PillColor = 'orange' | 'blue' | 'emerald' | 'pink' | 'green' | 'gray';

	const repositoryUrl = 'https://github.com/m-a-x-s-e-e-l-i-g/renault-radio-code-generator';
	const liveUrl = 'https://renault-dacia-radio-code-generator.netlify.app/';
	const imageBase = `${repositoryUrl}/raw/main`;

	const tags: Array<{ label: string; color: PillColor }> = [
		{ label: 'HTML', color: 'orange' },
		{ label: 'JavaScript', color: 'blue' },
		{ label: 'Alpine.js', color: 'emerald' },
		{ label: 'Open source', color: 'gray' }
	];

	const overviewDescription =
		'A fast, mobile-first unlock code generator for compatible Renault and Dacia radios. Enter the four-character precode and the four-digit radio code appears immediately, with clear instructions for classic button radios, steering-column controls, and Media Nav touchscreens.';

	const highlights = [
		'Instant four-digit code generation from a supported precode',
		'Separate guidance for classic radios and Media Nav systems',
		'Alternative instructions for steering-column controls',
		'Clear precode discovery and troubleshooting help',
		'Responsive from 320 px mobile screens to large desktops'
	];

	const stack: Array<{ label: string; color: PillColor }> = [
		{ label: 'Semantic HTML', color: 'orange' },
		{ label: 'Modern CSS', color: 'pink' },
		{ label: 'Alpine.js', color: 'emerald' },
		{ label: 'Vanilla JavaScript', color: 'blue' }
	];

	const status = ['Active & Open Source', 'MIT Licensed', 'Private, on-device calculation'];

	const workflow = [
		{
			number: '01',
			title: 'Find the precode',
			body: 'Use the radio shortcut, check the label on the original head unit, or consult the vehicle records for one letter followed by three digits.'
		},
		{
			number: '02',
			title: 'Generate the code',
			body: 'Enter a supported precode such as A123. The four-digit result is calculated immediately in the browser.'
		},
		{
			number: '03',
			title: 'Unlock the radio',
			body: 'Follow the instructions for physical buttons, steering-column controls, or a Media Nav touchscreen to confirm the code.'
		}
	];
</script>

<svelte:head>
	<title>Renault & Dacia Radio Code Generator | MAXmade</title>
	<meta
		name="description"
		content="A free, private Renault and Dacia radio unlock code generator with clear instructions for finding and entering the code."
	/>
	<meta property="og:title" content="Renault & Dacia Radio Code Generator" />
	<meta
		property="og:description"
		content="Generate a compatible Renault or Dacia radio unlock code instantly in your browser."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:image" content={`${imageBase}/social-preview.png`} />
</svelte:head>

<div class="mt-20 min-h-screen bg-gray-900 text-white">
	<ProjectHeader
		title="Renault & Dacia Radio Code Generator"
		subtitle="Back to your music in minutes."
		{tags}
		visitUrl={liveUrl}
		codeUrl={repositoryUrl}
		backHref="/#projects"
	/>

	<main class="mx-auto max-w-4xl px-4 py-12">
		<section class="mb-12 overflow-hidden rounded-lg border border-gray-800 bg-black">
			<img
				src={`${imageBase}/screenshots/desktop-generator.png`}
				alt="Desktop view of the redesigned Renault and Dacia radio code generator"
				class="aspect-[36/25] w-full object-cover object-top"
			/>
			<div
				class="grid gap-4 border-t border-gray-800 p-6 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-8"
			>
				<div class="flex items-center gap-3">
					<span class="h-3 w-3 rotate-45 bg-yellow-400" aria-hidden="true"></span>
					<p class="text-sm font-bold tracking-[0.18em] text-white uppercase">One clear task</p>
				</div>
				<p class="max-w-xl text-sm leading-relaxed text-gray-400">
					The redesign puts the generator first, then keeps every instruction and recovery path on
					the same page.
				</p>
			</div>
		</section>

		<ProjectOverview description={overviewDescription} {highlights} {stack} {status} />

		<section class="mb-16">
			<div class="mb-8 max-w-2xl">
				<p class="text-xs font-semibold tracking-[0.2em] text-yellow-400 uppercase">
					From locked to listening
				</p>
				<h2 class="mt-2 text-2xl font-bold">The complete recovery flow</h2>
				<p class="mt-3 leading-relaxed text-gray-400">
					The interface follows the questions drivers actually have, in the order they need the
					answers.
				</p>
			</div>

			<ol class="divide-y divide-gray-800 border-y border-gray-800">
				{#each workflow as step (step.number)}
					<li class="grid gap-3 py-6 sm:grid-cols-[4rem_13rem_1fr] sm:items-start">
						<span class="text-sm font-bold text-yellow-400">{step.number}</span>
						<h3 class="text-lg font-semibold text-white">{step.title}</h3>
						<p class="leading-relaxed text-gray-400">{step.body}</p>
					</li>
				{/each}
			</ol>
		</section>

		<section class="mb-16 grid gap-8 md:grid-cols-[0.72fr_1.28fr] md:items-center">
			<div
				class="mx-auto w-full max-w-[390px] overflow-hidden rounded-lg border border-gray-800 bg-black"
			>
				<img
					src={`${imageBase}/screenshots/mobile-generator.png`}
					alt="Mobile view of the radio code generator with an example precode and generated code"
					class="w-full object-cover object-top"
					loading="lazy"
				/>
			</div>
			<div>
				<p class="text-xs font-semibold tracking-[0.2em] text-yellow-400 uppercase">
					Built for the dashboard
				</p>
				<h2 class="mt-2 text-2xl font-bold">Useful on the device already in your hand</h2>
				<p class="mt-4 leading-relaxed text-gray-300">
					The generator remains readable and easy to operate on narrow screens, so the precode,
					result, and radio instructions can stay beside you in the car. Large controls, strong
					contrast, and direct language keep the process moving.
				</p>
			</div>
		</section>

		<section class="rounded-lg border border-gray-800 bg-black p-8 sm:p-10">
			<div class="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
				<div>
					<p class="text-xs font-semibold tracking-[0.2em] text-yellow-400 uppercase">
						Private by default
					</p>
					<h2 class="mt-2 text-2xl font-bold">Nothing is uploaded or stored</h2>
					<p class="mt-4 max-w-xl leading-relaxed text-gray-300">
						The code is calculated entirely on the device. There is no account, application
						database, or server request containing the precode. The project is independent and
						intended only for radios you own or are authorised to unlock.
					</p>
				</div>
				<div class="flex flex-col gap-3 sm:min-w-48">
					<a
						href={liveUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="rounded-lg bg-yellow-400 px-5 py-3 text-center font-semibold text-gray-950 transition-colors hover:bg-yellow-300"
					>
						Generate a code
					</a>
					<a
						href={repositoryUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="rounded-lg border border-gray-600 px-5 py-3 text-center font-semibold text-gray-200 transition-colors hover:border-gray-400 hover:text-white"
					>
						View source
					</a>
				</div>
			</div>
		</section>
	</main>
</div>
