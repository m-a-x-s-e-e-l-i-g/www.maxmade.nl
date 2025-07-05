<script lang="ts">
	import { projects, getTechColor } from '$lib/data/projects.js';

	let selectedCategory = $state<string>('Featured');

	const categories = ['Featured', 'All', ...Array.from(new Set(projects.map((p) => p.category)))];

	const displayedProjects = $derived(() => {
		if (selectedCategory === 'Featured') {
			return projects.filter((p) => p.isFeatured);
		}
		return selectedCategory === 'All'
			? projects
			: projects.filter((p) => p.category === selectedCategory);
	});
</script>

<section id="projects" class="bg-gray-900 py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Section header -->
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-4xl font-bold text-white sm:text-5xl">Projects</h2>
			<div class="mx-auto mb-6 h-1 w-24 bg-white"></div>
			<p class="mx-auto max-w-3xl text-xl text-gray-400">
				A collection of my projects, from live web applications and SaaS platforms to open-source
				tools and community resources. Each project represents a solution to real-world problems.
			</p>
		</div>

		<!-- Category filter -->
		<div class="mb-12 flex flex-wrap justify-center gap-3">
			{#each categories as category}
				<button
					onclick={() => (selectedCategory = category)}
					class="rounded-lg px-4 py-2 font-medium transition-all duration-300 {selectedCategory ===
					category
						? 'bg-white text-black'
						: 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'}"
				>
					{category}
				</button>
			{/each}
		</div>

		<!-- Projects grid -->
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each displayedProjects() as project}
				<div
					class="group overflow-hidden rounded-lg border border-gray-800 bg-black transition-colors hover:border-gray-600"
				>
					<!-- Project header -->
					<div class="p-6">
						<div class="mb-4 flex items-start justify-between">
							<div class="flex-1">
								<div class="mb-2 flex items-center gap-2">
									<h3
										class="text-xl font-semibold text-white transition-colors group-hover:text-gray-200"
									>
										{project.displayName || project.name}
									</h3>
									{#if project.isLive}
										<div class="flex items-center">
											<div class="mr-1 h-2 w-2 rounded-full bg-green-500"></div>
											<span class="text-xs font-medium text-green-500">LIVE</span>
										</div>
									{/if}
									{#if project.isFeatured}
										<div class="rounded bg-yellow-500 px-2 py-1 text-xs font-bold text-black">
											FEATURED
										</div>
									{/if}
								</div>
								<p class="text-sm leading-relaxed text-gray-400">
									{project.description}
								</p>
							</div>
						</div>

						<!-- Technologies -->
						<div class="mb-4 flex flex-wrap gap-2">
							{#each project.technologies as tech}
								<span
									class="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium text-white {getTechColor(
										tech
									)}"
								>
									{tech}
								</span>
							{/each}
						</div>

						<!-- Topics -->
						<div class="mb-4 flex flex-wrap gap-1">
							{#each project.topics.slice(0, 4) as topic}
								<span class="inline-block rounded bg-gray-800 px-2 py-1 text-xs text-gray-400">
									#{topic}
								</span>
							{/each}
							{#if project.topics.length > 4}
								<span class="inline-block px-2 py-1 text-xs text-gray-500">
									+{project.topics.length - 4} more
								</span>
							{/if}
						</div>

						<!-- Stats -->
						<div class="mb-4 flex items-center justify-between text-sm text-gray-400">
							<div class="flex items-center space-x-4">
								{#if project.stars && project.stars > 0}
									<div class="flex items-center">
										<svg class="mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
											<path
												d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
											/>
										</svg>
										{project.stars}
									</div>
								{/if}
								{#if project.license}
									<span class="text-xs">{project.license}</span>
								{/if}
							</div>
							<span class="rounded bg-gray-800 px-2 py-1 text-xs">
								{project.category}
							</span>
						</div>

						<!-- Action buttons -->
						<div class="flex gap-3">
							{#if project.projectPage}
								<a
									href={project.projectPage}
									class="flex-1 rounded-lg bg-white px-4 py-2 text-center text-sm font-medium text-black transition-colors hover:bg-gray-200"
								>
									View Details
								</a>
							{:else if project.liveUrl}
								<a
									href={project.liveUrl}
									target="_blank"
									rel="noopener noreferrer"
									class="flex-1 rounded-lg bg-white px-4 py-2 text-center text-sm font-medium text-black transition-colors hover:bg-gray-200"
								>
									Visit Website
								</a>
							{:else if project.githubUrl}
								<a
									href={project.githubUrl}
									target="_blank"
									rel="noopener noreferrer"
									class="flex-1 rounded-lg bg-white px-4 py-2 text-center text-sm font-medium text-black transition-colors hover:bg-gray-200"
								>
									View on GitHub
								</a>
							{/if}

							{#if project.liveUrl && project.projectPage}
								<a
									href={project.liveUrl}
									target="_blank"
									rel="noopener noreferrer"
									class="rounded-lg border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:border-gray-500 hover:text-white"
									title="Visit live website"
									aria-label="Visit live website"
								>
									<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
										/>
									</svg>
								</a>
							{/if}
						</div>
					</div>
				</div>
			{/each}
		</div>

		{#if displayedProjects().length === 0}
			<div class="py-12 text-center">
				<p class="text-gray-400">No projects found in this category.</p>
			</div>
		{/if}

		<!-- GitHub profile link -->
		<div class="mt-16 text-center">
			<p class="mb-6 text-gray-400">Want to see more or collaborate on a project?</p>
			<a
				href="https://github.com/m-a-x-s-e-e-l-i-g"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black"
			>
				Visit My GitHub Profile
				<svg class="ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
					<path
						fill-rule="evenodd"
						d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
						clip-rule="evenodd"
					/>
				</svg>
			</a>
		</div>
	</div>
</section>
