<script lang="ts">
	import { LinkedInIcon, InstagramIcon, GitHubIcon, EmailIcon } from './icons';
	
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
					<LinkedInIcon size={20} />
				</a>
				<a href="https://www.instagram.com/the.maxest/" target="_blank" rel="noopener noreferrer"
					 class="text-gray-400 hover:text-white transition-colors">
					<span class="sr-only">Instagram</span>
					<InstagramIcon size={20} />
				</a>
				<a href="https://github.com/m-a-x-s-e-e-l-i-g" target="_blank" rel="noopener noreferrer"
					 class="text-gray-400 hover:text-white transition-colors">
					<span class="sr-only">GitHub</span>
					<GitHubIcon size={20} />
				</a>
				<a href="mailto:max@maxmade.nl" class="text-gray-400 hover:text-white transition-colors">
					<span class="sr-only">Email</span>
					<EmailIcon size={20} />
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
