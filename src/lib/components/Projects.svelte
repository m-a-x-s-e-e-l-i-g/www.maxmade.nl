<script lang="ts">
	// Your GitHub projects data
	const projects = [
		{
			name: "pkfr-nl",
			description: "An overview of jams, open gyms, and community links for freerunners in the Netherlands.",
			technologies: ["Svelte"],
			topics: ["community", "netherlands", "parkour", "freerunning"],
			stars: 1,
			license: "GPL-3.0",
			url: "https://github.com/m-a-x-s-e-e-l-i-g/pkfr-nl",
			featured: true,
			category: "Community"
		},
		{
			name: "current-moon-phase-3d",
			description: "The current moon phase rendered in 3D using Three.js.",
			technologies: ["Svelte", "Three.js"],
			topics: ["threejs", "space", "moon", "3d", "lunar"],
			stars: 1,
			license: "GPL-3.0",
			url: "https://github.com/m-a-x-s-e-e-l-i-g/current-moon-phase-3d",
			featured: true,
			category: "Visualization"
		},
		{
			name: "project-infinitisphere",
			description: "A Free Golf Balls QR Code Generator built with Svelte.",
			technologies: ["Svelte"],
			topics: ["qrcode", "svelte", "qrcode-generator", "golf"],
			stars: 0,
			license: "MIT",
			url: "https://github.com/m-a-x-s-e-e-l-i-g/project-infinitisphere",
			featured: true,
			category: "Tools"
		},
		{
			name: "MediaNav-to-Evolution-Upgrade",
			description: "Upgrade your Renault / Dacia MediaNav software to MediaNav Evolution.",
			technologies: ["Shell"],
			topics: ["renault", "dacia", "medianav"],
			stars: 13,
			license: "GPL-3.0",
			url: "https://github.com/m-a-x-s-e-e-l-i-g/MediaNav-to-Evolution-Upgrade",
			featured: true,
			category: "Automotive"
		},
		{
			name: "very-ssh",
			description: "A minimal, fast GUI for quickly launching SSH sessions from your ~/.ssh/config.",
			technologies: ["Python"],
			topics: ["ssh", "keychain", "ssh-config"],
			stars: 2,
			license: "MIT",
			url: "https://github.com/m-a-x-s-e-e-l-i-g/very-ssh",
			featured: true,
			category: "Development Tools"
		},
		{
			name: "LGU-file-tools",
			description: "Convert LGU firmware update package files used by Dacia & Renault MediaNav systems.",
			technologies: ["Python"],
			topics: ["converter", "renault", "dacia", "lgu", "medianav"],
			stars: 5,
			license: "MIT",
			url: "https://github.com/m-a-x-s-e-e-l-i-g/LGU-file-tools",
			featured: false,
			category: "Automotive"
		},
		{
			name: "SSHKeychain",
			description: "Command Palette Extension to quickly launch SSH sessions.",
			technologies: ["C#"],
			topics: ["ssh", "visual-studio"],
			stars: 1,
			license: "MIT",
			url: "https://github.com/m-a-x-s-e-e-l-i-g/SSHKeychain",
			featured: false,
			category: "Development Tools"
		},
		{
			name: "bluetube-youtube-tv-for-windows",
			description: "An UNOFFICIAL YouTube client to make YouTube TV available on Windows.",
			technologies: ["C#", "WinUI3"],
			topics: ["youtube", "uwp", "smart-tv", "tv", "winui3"],
			stars: 0,
			license: "MIT",
			url: "https://github.com/m-a-x-s-e-e-l-i-g/bluetube-youtube-tv-for-windows",
			featured: false,
			category: "Applications"
		},
		{
			name: "renault-radio-code-generator",
			description: "Renault / Dacia radio code generator.",
			technologies: ["HTML", "JavaScript"],
			topics: ["radio", "generator", "renault", "dacia"],
			stars: 7,
			license: "MIT",
			url: "https://github.com/m-a-x-s-e-e-l-i-g/renault-radio-code-generator",
			featured: false,
			category: "Automotive"
		},
		{
			name: "common-email-domain-typos",
			description: "List of common email domain typos and their suggested correction.",
			technologies: ["Shell"],
			topics: ["list", "spellcheck", "email", "domains", "autocorrect"],
			stars: 2,
			license: "GPL-3.0",
			url: "https://github.com/m-a-x-s-e-e-l-i-g/common-email-domain-typos",
			featured: false,
			category: "Data"
		}
	];

	let selectedCategory = $state<string>("All");
	let showAllProjects = $state(false);

	const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];
	
	const featuredProjects = $derived(projects.filter(p => p.featured));
	const filteredProjects = $derived(selectedCategory === "All" 
		? projects 
		: projects.filter(p => p.category === selectedCategory));
	const displayedProjects = $derived(showAllProjects ? filteredProjects : featuredProjects);

	function getTechColor(tech: string): string {
		const colors: { [key: string]: string } = {
			'Svelte': 'bg-orange-500',
			'JavaScript': 'bg-yellow-500',
			'TypeScript': 'bg-blue-500',
			'Python': 'bg-green-500',
			'C#': 'bg-purple-500',
			'HTML': 'bg-orange-600',
			'Shell': 'bg-gray-500',
			'Three.js': 'bg-black',
			'WinUI3': 'bg-blue-600'
		};
		return colors[tech] || 'bg-gray-600';
	}
</script>

<section id="projects" class="py-20 bg-gray-900">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Section header -->
		<div class="text-center mb-16">
			<h2 class="text-4xl sm:text-5xl font-bold text-white mb-4">
				Projects
			</h2>
			<div class="w-24 h-1 bg-white mx-auto mb-6"></div>
			<p class="text-xl text-gray-400 max-w-3xl mx-auto">
				A collection of my open-source projects, tools, and experiments. 
				From automotive solutions to development utilities and creative visualizations.
			</p>
		</div>

		<!-- Category filter -->
		<div class="flex flex-wrap justify-center gap-3 mb-12">
			{#each categories as category}
				<button
					onclick={() => selectedCategory = category}
					class="px-4 py-2 rounded-lg font-medium transition-all duration-300 {selectedCategory === category 
						? 'bg-white text-black' 
						: 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'}"
				>
					{category}
				</button>
			{/each}
		</div>

		<!-- Featured/All toggle -->
		<div class="text-center mb-8">
			<button
				onclick={() => showAllProjects = !showAllProjects}
				class="px-6 py-2 border-2 border-gray-600 text-gray-300 rounded-lg hover:border-white hover:text-white transition-colors"
			>
				{showAllProjects ? 'Show Featured Only' : 'Show All Projects'}
			</button>
		</div>

		<!-- Projects grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each displayedProjects as project}
				<div class="bg-black rounded-lg border border-gray-800 overflow-hidden hover:border-gray-600 transition-colors group">
					<!-- Project header -->
					<div class="p-6">
						<div class="flex items-start justify-between mb-4">
							<div class="flex-1">
								<h3 class="text-xl font-semibold text-white mb-2 group-hover:text-gray-200 transition-colors">
									{project.name}
								</h3>
								<p class="text-gray-400 text-sm leading-relaxed">
									{project.description}
								</p>
							</div>
							{#if project.featured}
								<div class="ml-4">
									<span class="inline-flex items-center px-2 py-1 text-xs font-medium bg-yellow-500/20 text-yellow-400 rounded-full">
										Featured
									</span>
								</div>
							{/if}
						</div>

						<!-- Technologies -->
						<div class="flex flex-wrap gap-2 mb-4">
							{#each project.technologies as tech}
								<span class="inline-flex items-center px-2 py-1 text-xs font-medium text-white rounded-full {getTechColor(tech)}">
									{tech}
								</span>
							{/each}
						</div>

						<!-- Topics -->
						<div class="flex flex-wrap gap-1 mb-4">
							{#each project.topics.slice(0, 4) as topic}
								<span class="inline-block px-2 py-1 text-xs text-gray-400 bg-gray-800 rounded">
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
						<div class="flex items-center justify-between text-sm text-gray-400 mb-4">
							<div class="flex items-center space-x-4">
								{#if project.stars > 0}
									<div class="flex items-center">
										<svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
										</svg>
										{project.stars}
									</div>
								{/if}
								{#if project.license}
									<span class="text-xs">{project.license}</span>
								{/if}
							</div>
							<span class="text-xs bg-gray-800 px-2 py-1 rounded">
								{project.category}
							</span>
						</div>

						<!-- Action buttons -->
						<div class="flex gap-3">
							<a
								href={project.url}
								target="_blank"
								rel="noopener noreferrer"
								class="flex-1 px-4 py-2 bg-white text-black text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors text-center"
							>
								View on GitHub
							</a>
						</div>
					</div>
				</div>
			{/each}
		</div>

		{#if displayedProjects.length === 0}
			<div class="text-center py-12">
				<p class="text-gray-400">No projects found in this category.</p>
			</div>
		{/if}

		<!-- GitHub profile link -->
		<div class="text-center mt-16">
			<p class="text-gray-400 mb-6">
				Want to see more or collaborate on a project?
			</p>
			<a 
				href="https://github.com/m-a-x-s-e-e-l-i-g" 
				target="_blank" 
				rel="noopener noreferrer"
				class="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300"
			>
				Visit My GitHub Profile
				<svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
					<path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd" />
				</svg>
			</a>
		</div>
	</div>
</section>
