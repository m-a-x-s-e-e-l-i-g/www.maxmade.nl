<script lang="ts">
	import { LinkedInIcon, InstagramIcon, GitHubIcon, EmailIcon } from './icons';

	let mobileMenuOpen = $state(false);
	let navElement: HTMLElement;

	// Close mobile menu when clicking outside
	function handleClickOutside(event: MouseEvent) {
		if (mobileMenuOpen && navElement && !navElement.contains(event.target as Node)) {
			mobileMenuOpen = false;
		}
	}

	// Close mobile menu when clicking on menu items
	function closeMobileMenu() {
		mobileMenuOpen = false;
	}

	// Add/remove event listener when mobile menu state changes
	$effect(() => {
		if (mobileMenuOpen) {
			document.addEventListener('click', handleClickOutside);
		} else {
			document.removeEventListener('click', handleClickOutside);
		}

		// Cleanup on component destroy
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<nav
	bind:this={navElement}
	class="fixed top-0 z-50 w-full border-b border-gray-800 bg-black/90 backdrop-blur-sm"
>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<!-- Logo -->
			<div class="flex-shrink-0">
				<a href="/" class="transition-opacity hover:opacity-80">
					<img src="/images/logo-MAXmade.svg" alt="MAXmade" class="h-6 w-auto" />
				</a>
			</div>

			<!-- Desktop Navigation -->
			<div class="hidden md:block">
				<div class="ml-10 flex items-baseline space-x-4">
					<a
						href="#projects"
						class="px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
					>
						Projects
					</a>
					<a
						href="#photography"
						class="px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
					>
						Photography
					</a>
					<a
						href="#konine-art"
						class="px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
					>
						🐰 Konine Art
					</a>
					<a
						href="#music"
						class="px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
					>
						Music
					</a>
					<a
						href="#statistics"
						class="px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
					>
						Statistics
					</a>
					<a
						href="#contact"
						class="px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
					>
						Contact
					</a>
				</div>
			</div>

			<!-- Social Links -->
			<div class="hidden items-center space-x-4 md:flex">
				<a
					href="https://www.linkedin.com/in/maxse/"
					target="_blank"
					rel="noopener noreferrer"
					class="text-gray-400 transition-colors hover:text-white"
				>
					<span class="sr-only">LinkedIn</span>
					<LinkedInIcon size={20} />
				</a>
				<a
					href="https://www.instagram.com/the.maxest/"
					target="_blank"
					rel="noopener noreferrer"
					class="text-gray-400 transition-colors hover:text-white"
				>
					<span class="sr-only">Instagram</span>
					<InstagramIcon size={20} />
				</a>
				<a
					href="https://github.com/m-a-x-s-e-e-l-i-g"
					target="_blank"
					rel="noopener noreferrer"
					class="text-gray-400 transition-colors hover:text-white"
				>
					<span class="sr-only">GitHub</span>
					<GitHubIcon size={20} />
				</a>
				<a href="mailto:max@maxmade.nl" class="text-gray-400 transition-colors hover:text-white">
					<span class="sr-only">Email</span>
					<EmailIcon size={20} />
				</a>
			</div>

			<!-- Mobile menu button -->
			<div class="md:hidden">
				<button
					onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
					class="p-2 text-gray-400 hover:text-white"
				>
					<span class="sr-only">Open main menu</span>
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile menu -->
	{#if mobileMenuOpen}
		<div class="md:hidden">
			<div class="space-y-1 border-t border-gray-800 bg-black px-2 pt-2 pb-3 sm:px-3">
				<a
					href="#projects"
					class="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
					onclick={closeMobileMenu}
				>
					Projects
				</a>
				<a
					href="#photography"
					class="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
					onclick={closeMobileMenu}
				>
					Photography
				</a>
				<a
					href="#konine-art"
					class="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
					onclick={closeMobileMenu}
				>
					🐰 Konine Art
				</a>
				<a
					href="#music"
					class="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
					onclick={closeMobileMenu}
				>
					Music
				</a>
				<a
					href="#statistics"
					class="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
					onclick={closeMobileMenu}
				>
					📊 Statistics
				</a>
				<a
					href="#contact"
					class="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
					onclick={closeMobileMenu}
				>
					Contact
				</a>
				<div class="flex space-x-4 px-3 py-2">
					<a
						href="https://www.linkedin.com/in/maxse/"
						target="_blank"
						rel="noopener noreferrer"
						class="text-gray-400 hover:text-white"
					>
						LinkedIn
					</a>
					<a
						href="https://www.instagram.com/maxseelig_photography/"
						target="_blank"
						rel="noopener noreferrer"
						class="text-gray-400 hover:text-white"
					>
						Instagram
					</a>
					<a
						href="https://github.com/m-a-x-s-e-e-l-i-g"
						target="_blank"
						rel="noopener noreferrer"
						class="text-gray-400 hover:text-white"
					>
						GitHub
					</a>
					<a href="mailto:max@maxmade.nl" class="text-gray-400 hover:text-white"> Email </a>
				</div>
			</div>
		</div>
	{/if}
</nav>
