<script lang="ts">
	let mobileMenuOpen = $state(false);
</script>

<nav class="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-16">
			<!-- Logo -->
			<div class="flex-shrink-0">
				<a href="/" class="hover:opacity-80 transition-opacity">
					<img src="/images/logo-MAXmade.svg" alt="MAXmade" class="h-6 w-auto" />
				</a>
			</div>

			<!-- Desktop Navigation -->
			<div class="hidden md:block">
				<div class="ml-10 flex items-baseline space-x-4">
					<a href="#projects" class="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
						Projects
					</a>
					<a href="#photography" class="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
						Photography
					</a>
					<a href="#music" class="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
						Music
					</a>
					<a href="#contact" class="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
						Contact
					</a>
				</div>
			</div>

			<!-- Social Links -->
			<div class="hidden md:flex items-center space-x-4">
				<a href="https://www.linkedin.com/in/maxse/" target="_blank" rel="noopener noreferrer" 
					 class="text-gray-400 hover:text-white transition-colors">
					<span class="sr-only">LinkedIn</span>
					<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
					</svg>
				</a>
				<a href="https://www.instagram.com/maxseelig_photography/" target="_blank" rel="noopener noreferrer"
					 class="text-gray-400 hover:text-white transition-colors">
					<span class="sr-only">Instagram</span>
					<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm5.006 9.021c.002.123.002.246.002.37 0 3.778-2.877 8.138-8.138 8.138-.615 0-1.218-.059-1.797-.173.925.107 1.875-.154 2.618-.77-.865-.016-1.594-.587-1.845-1.371.302.058.614.046.92-.034-.905-.184-1.587-.98-1.587-1.94v-.025c.267.148.572.237.894.247-.53-.355-.878-.96-.878-1.647 0-.363.097-.703.268-1.996 1.982 2.433 4.95 4.033 8.297 4.2-.068-.293-.104-.598-.104-.915 0-2.218 1.797-4.015 4.015-4.015 1.156 0 2.199.488 2.933 1.269.916-.18 1.777-.514 2.554-.975-.3.94-.938 1.729-1.771 2.228.814-.097 1.59-.313 2.311-.632-.539.807-1.22 1.516-2.007 2.083z" clip-rule="evenodd" />
					</svg>
				</a>
				<a href="https://github.com/m-a-x-s-e-e-l-i-g" target="_blank" rel="noopener noreferrer"
					 class="text-gray-400 hover:text-white transition-colors">
					<span class="sr-only">GitHub</span>
					<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd" />
					</svg>
				</a>
				<a href="mailto:max@maxmade.nl" class="text-gray-400 hover:text-white transition-colors">
					<span class="sr-only">Email</span>
					<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
					</svg>
				</a>
			</div>

			<!-- Mobile menu button -->
			<div class="md:hidden">
				<button
					onclick={() => mobileMenuOpen = !mobileMenuOpen}
					class="text-gray-400 hover:text-white p-2"
				>
					<span class="sr-only">Open main menu</span>
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile menu -->
	{#if mobileMenuOpen}
		<div class="md:hidden">
			<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border-t border-gray-800">
				<a href="#projects" class="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
					Projects
				</a>
				<a href="#photography" class="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
					Photography
				</a>
				<a href="#music" class="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
					Music
				</a>
				<a href="#contact" class="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
					Contact
				</a>
				<div class="px-3 py-2 flex space-x-4">
					<a href="https://www.linkedin.com/in/maxse/" target="_blank" rel="noopener noreferrer" 
						 class="text-gray-400 hover:text-white">
						LinkedIn
					</a>
					<a href="https://www.instagram.com/maxseelig_photography/" target="_blank" rel="noopener noreferrer"
						 class="text-gray-400 hover:text-white">
						Instagram
					</a>
					<a href="https://github.com/m-a-x-s-e-e-l-i-g" target="_blank" rel="noopener noreferrer"
						 class="text-gray-400 hover:text-white">
						GitHub
					</a>
					<a href="mailto:max@maxmade.nl" class="text-gray-400 hover:text-white">
						Email
					</a>
				</div>
			</div>
		</div>
	{/if}
</nav>
