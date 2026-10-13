<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { projects } from '$lib/data/projects';
	const categories = [...new Set(projects.map((project) => project.category))];
</script>

<Seo
	title="Projects by Max Seelig | MAXmade"
	description="Explore Max Seelig's web applications, open-source software, developer tools, and client work, including MediaNav MAXmade, JUMPFLIX, Chronophoto, and VeryFire."
/>

<main class="min-h-screen bg-black px-4 pt-28 pb-20 text-white sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<nav aria-label="Breadcrumb" class="mb-10 text-sm text-gray-400">
			<a href="/" class="transition-colors hover:text-white">MAXmade</a>
			<span aria-hidden="true" class="mx-3">/</span>
			<span aria-current="page">Projects</span>
		</nav>
		<header class="mb-16 max-w-3xl">
			<h1 class="mb-6 text-4xl font-bold sm:text-6xl">Ideas, made real.</h1>
			<p class="text-lg leading-relaxed text-gray-300 sm:text-xl">
				I'm Max Seelig, a web developer and creator from Bergen op Zoom, the Netherlands. These are
				my web applications, open-source software, developer tools, and client projects.
			</p>
		</header>
		<nav aria-label="Project categories" class="mb-12 flex flex-wrap gap-x-6 gap-y-3 text-gray-400">
			{#each categories as category (category)}
				<a
					href={`#${category.toLowerCase().replace(/[^a-z]+/g, '-')}`}
					class="py-2 underline decoration-gray-700 underline-offset-8 hover:text-white"
					>{category}</a
				>
			{/each}
		</nav>
		{#each categories as category (category)}
			<section
				id={category.toLowerCase().replace(/[^a-z]+/g, '-')}
				class="mb-16 scroll-mt-24"
				aria-label={category}
			>
				<h2 class="mb-4 text-2xl font-semibold">{category}</h2>
				<ul class="divide-y divide-gray-800 border-t border-gray-800">
					{#each projects.filter((project) => project.category === category) as project (project.name)}
						<li class="grid gap-3 py-7 md:grid-cols-[1fr_2fr] md:gap-10">
							<h3 class="text-xl font-semibold">
								<a
									href={project.projectPage ?? project.liveUrl ?? project.githubUrl}
									class="decoration-gray-600 underline-offset-4 hover:underline"
									>{project.displayName ?? project.name}</a
								>
							</h3>
							<div>
								<p class="max-w-prose leading-relaxed text-gray-300">{project.description}</p>
								<p class="mt-3 text-sm text-gray-500">{project.technologies.join(' · ')}</p>
								<div class="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-400">
									{#if project.liveUrl}<a href={project.liveUrl} class="py-1 hover:text-white"
											>Visit website ↗</a
										>{/if}
									{#if project.githubUrl}<a href={project.githubUrl} class="py-1 hover:text-white"
											>Source code ↗</a
										>{/if}
								</div>
							</div>
						</li>
					{/each}
				</ul>
			</section>
		{/each}
		<a href="/#contact" class="text-gray-300 underline underline-offset-4 hover:text-white"
			>Get in touch with Max</a
		>
	</div>
</main>
