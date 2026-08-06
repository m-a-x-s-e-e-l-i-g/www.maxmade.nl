<script lang="ts">
	import ProjectHeader from '$lib/components/projects/ProjectHeader.svelte';
	import ProjectOverview from '$lib/components/projects/ProjectOverview.svelte';

	type PillColor = 'orange' | 'blue' | 'emerald' | 'pink' | 'green' | 'gray';

	const repositoryUrl = 'https://github.com/m-a-x-s-e-e-l-i-g/chronophoto';
	const releasesUrl = `${repositoryUrl}/releases`;
	const imageBase =
		'https://raw.githubusercontent.com/m-a-x-s-e-e-l-i-g/chronophoto/main/docs/images';

	const tags: Array<{ label: string; color: PillColor }> = [
		{ label: 'Python', color: 'green' },
		{ label: 'PySide6', color: 'emerald' },
		{ label: 'OpenCV', color: 'blue' },
		{ label: 'Local processing', color: 'gray' }
	];

	const overviewDescription =
		'Chronophoto turns a short action video into one layered motion photograph. Choose the useful moment, decide which poses belong in the sequence, inspect the composite, and export at full resolution—all without uploading your footage.';

	const highlights = [
		'Video-first workflow with ordered photo-stack support',
		'Range, pose selection, and composite preview in one workspace',
		'Adjustable motion masks, edge feathering, clean plate, and overlap order',
		'Full-resolution PNG, TIFF, and JPEG export',
		'Private processing that keeps source footage on your computer'
	];

	const stack: Array<{ label: string; color: PillColor }> = [
		{ label: 'Python 3.11+', color: 'green' },
		{ label: 'PySide6', color: 'emerald' },
		{ label: 'PyAV', color: 'gray' },
		{ label: 'NumPy', color: 'blue' },
		{ label: 'OpenCV', color: 'blue' },
		{ label: 'Pillow', color: 'pink' }
	];

	const status = ['Active & Open Source', 'MIT Licensed', 'Windows, macOS & Linux'];

	const workflow = [
		{
			number: '01',
			title: 'Bring in the action',
			body: 'Drop a short video anywhere in the window, or open an ordered stack of photographs.'
		},
		{
			number: '02',
			title: 'Frame the movement',
			body: 'Set the in and out points, then keep every selected frame or choose a smaller set of poses.'
		},
		{
			number: '03',
			title: 'Export the photograph',
			body: 'Inspect the result, make a small mask adjustment only when needed, and export at full resolution.'
		}
	];
</script>

<svelte:head>
	<title>Chronophoto - Motion, Held Still | MAXmade</title>
	<meta
		name="description"
		content="Chronophoto turns short action videos into layered motion photographs with a fast, private desktop workflow."
	/>
	<meta property="og:title" content="Chronophoto - Motion, Held Still" />
	<meta
		property="og:description"
		content="Turn a short action video into one layered motion photograph. Video-first, private, and local."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:image" content={`${imageBase}/chronophoto-result.png`} />
</svelte:head>

<div class="mt-20 min-h-screen bg-gray-900 text-white">
	<ProjectHeader
		title="Chronophoto"
		subtitle="Motion, held still."
		{tags}
		codeUrl={repositoryUrl}
		backHref="/#projects"
	/>

	<main class="mx-auto max-w-4xl px-4 py-12">
		<section class="mb-12 overflow-hidden rounded-lg border border-gray-800 bg-black">
			<img
				src={`${imageBase}/chronophoto-result.png`}
				alt="A layered Chronophoto composite showing the full path of an athlete's movement"
				class="aspect-[16/9] w-full object-cover"
			/>
			<div
				class="flex flex-col gap-3 border-t border-gray-800 p-6 sm:flex-row sm:items-end sm:justify-between"
			>
				<div>
					<p class="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase">One movement</p>
					<p class="mt-1 text-xl font-semibold text-white">One photograph</p>
				</div>
				<p class="max-w-md text-sm leading-relaxed text-gray-400">
					A jump becomes an arc. A trick shows its full path. A dance move becomes a readable
					sequence.
				</p>
			</div>
		</section>

		<ProjectOverview description={overviewDescription} {highlights} {stack} {status} />

		<section class="mb-16">
			<div class="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
				<div>
					<p class="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase">The workflow</p>
					<h2 class="mt-2 text-2xl font-bold">Three decisions, then export</h2>
				</div>
				<p class="max-w-sm text-sm leading-relaxed text-gray-400">
					The main path stays short. Technical mask controls remain available when the footage needs
					them.
				</p>
			</div>

			<ol class="divide-y divide-gray-800 border-y border-gray-800">
				{#each workflow as step (step.number)}
					<li class="grid gap-3 py-6 sm:grid-cols-[4rem_13rem_1fr] sm:items-start">
						<span class="text-sm font-semibold text-gray-500">{step.number}</span>
						<h3 class="text-lg font-semibold text-white">{step.title}</h3>
						<p class="leading-relaxed text-gray-400">{step.body}</p>
					</li>
				{/each}
			</ol>
		</section>

		<section class="mb-16">
			<div class="mb-6">
				<p class="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase">
					Desktop workspace
				</p>
				<h2 class="mt-2 text-2xl font-bold">The whole sequence stays in view</h2>
			</div>
			<div class="overflow-hidden rounded-lg border border-gray-800 bg-black">
				<img
					src={`${imageBase}/chronophoto-workspace.png`}
					alt="Chronophoto desktop workspace with source frames, composite preview, timeline, and export controls"
					class="w-full object-cover"
					loading="lazy"
				/>
			</div>
			<p class="mt-4 max-w-2xl text-sm leading-relaxed text-gray-400">
				Source frames, composite, timeline, and export stay together. Pinch or use a two-finger
				scroll to zoom around the pointer, then drag to inspect fine edges.
			</p>
		</section>

		<section class="mb-16 grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-center">
			<div class="overflow-hidden rounded-lg border border-gray-800 bg-black">
				<img
					src={`${imageBase}/chronophoto-mask-inspection.png`}
					alt="Chronophoto mask inspection view showing the pixels selected for the motion composite"
					class="w-full object-cover"
					loading="lazy"
				/>
			</div>
			<div>
				<p class="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase">
					Control when needed
				</p>
				<h2 class="mt-2 text-2xl font-bold">Inspect the edges</h2>
				<p class="mt-4 leading-relaxed text-gray-300">
					Most footage starts with a useful automatic mask. When fine edges, shadows, or overlapping
					poses need attention, the Mask view shows exactly which pixels Chronophoto will keep.
				</p>
			</div>
		</section>

		<section class="rounded-lg border border-gray-800 bg-black p-8 sm:p-10">
			<div class="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
				<div>
					<p class="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase">
						Local by design
					</p>
					<h2 class="mt-2 text-2xl font-bold">Your footage stays on your computer</h2>
					<p class="mt-4 max-w-xl leading-relaxed text-gray-300">
						There is no upload and no cloud render. Download a release for Windows, macOS, or Linux,
						or inspect the complete source on GitHub.
					</p>
				</div>
				<div class="flex flex-col gap-3 sm:min-w-44">
					<a
						href={releasesUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="rounded-lg bg-white px-5 py-3 text-center font-semibold text-black transition-colors hover:bg-gray-200"
					>
						Download
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
