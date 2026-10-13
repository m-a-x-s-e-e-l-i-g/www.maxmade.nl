<script lang="ts">
	import TagPill from './TagPill.svelte';

	export let title: string;
	export let subtitle: string = '';
	export let tags: Array<{
		label: string;
		color?: 'orange' | 'blue' | 'emerald' | 'pink' | 'green' | 'gray';
	}> = [];
	export let visitUrl: string | null = null;
	export let codeUrl: string | null = null;
	export let backHref: string = '/projects';
</script>

<header class="border-b border-gray-800 bg-black">
	<div class="mx-auto max-w-4xl px-4 py-6">
		<a
			href={backHref}
			class="mb-4 inline-flex items-center text-gray-400 transition-colors hover:text-white"
			aria-label="Back to Projects"
		>
			<svg
				class="mr-2 h-5 w-5"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				aria-hidden="true"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
			</svg>
			Back to Projects
		</a>
		<nav aria-label="Breadcrumb" class="mb-6 text-sm text-gray-400">
			<a href="/" class="hover:text-white">MAXmade</a>
			<span aria-hidden="true" class="mx-2">/</span>
			<a href="/projects" class="hover:text-white">Projects</a>
			<span aria-hidden="true" class="mx-2">/</span>
			<span aria-current="page">{title}</span>
		</nav>

		<div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
			<div class="flex-1">
				<h1 class="mb-2 text-3xl font-bold sm:text-4xl">{title}</h1>
				{#if subtitle}
					<p class="mb-4 text-lg text-gray-400 sm:text-xl">{subtitle}</p>
				{/if}

				{#if tags?.length}
					<div class="mb-6 flex flex-wrap gap-2">
						{#each tags as t}
							<TagPill label={t.label} color={t.color ?? 'gray'} />
						{/each}
					</div>
				{/if}
			</div>

			<div class="flex w-full flex-col gap-3 sm:ml-6 sm:w-auto sm:flex-row">
				{#if visitUrl}
					<a
						href={visitUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="w-full rounded-lg bg-white px-6 py-3 text-center font-semibold text-black transition-colors hover:bg-gray-200 sm:w-auto"
					>
						Visit Website
					</a>
				{/if}
				{#if codeUrl}
					<a
						href={codeUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="w-full rounded-lg border-2 border-white px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-white hover:text-black sm:w-auto"
					>
						View Code
					</a>
				{/if}
			</div>
		</div>
	</div>
</header>
