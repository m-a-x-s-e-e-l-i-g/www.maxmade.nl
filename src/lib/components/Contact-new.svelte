<script lang="ts">
	import { LinkedInIcon, InstagramIcon, GitHubIcon } from './icons';

	const socialLinks = [
		{
			name: 'LinkedIn',
			url: 'https://linkedin.com/in/maxse',
			description: 'Professional network',
			badge: 'https://img.shields.io/badge/maxse-%231E77B5.svg?&logo=linkedin&logoColor=white',
			iconComponent: LinkedInIcon
		},
		{
			name: 'Facebook',
			url: 'https://www.facebook.com/maxse',
			description: 'Personal updates',
			badge: 'https://img.shields.io/badge/maxse-%232E87FB.svg?&logo=facebook&logoColor=white'
		},
		{
			name: 'Instagram - Main',
			url: 'https://instagram.com/the.maxest',
			description: 'Parkour / main account',
			badge: 'https://img.shields.io/badge/the.maxest-%23000000.svg?&logo=instagram&logoColor=white',
			iconComponent: InstagramIcon
		},
		{
			name: 'Instagram - Photography',
			url: 'https://instagram.com/maxseelig_photography',
			description: 'Photography portfolio',
			badge: 'https://img.shields.io/badge/maxseelig_photography-%23000000.svg?&logo=instagram&logoColor=white'
		},
		{
			name: 'Telegram',
			url: 'https://t.me/m01xx',
			description: 'Direct messaging',
			badge: 'https://img.shields.io/badge/m01xx-%232CA5E0.svg?&logo=telegram&logoColor=white'
		},
		{
			name: 'Xbox',
			url: 'https://account.xbox.com/Profile?Gamertag=Snurkpop',
			description: 'Gaming profile',
			badge: 'https://img.shields.io/badge/Snurkpop-%23107C10.svg?logo=Xbox&logoColor=white'
		},
		{
			name: 'GitHub',
			url: 'https://github.com/m-a-x-s-e-e-l-i-g',
			description: 'Code repositories',
			badge: 'https://img.shields.io/badge/m--a--x--s--e--e--l--i--g-%23181717.svg?&logo=github&logoColor=white',
			iconComponent: GitHubIcon
		}
	];
</script>

<section id="contact" class="py-20 bg-gray-900">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Section header -->
		<div class="text-center mb-16">
			<h2 class="text-4xl sm:text-5xl font-bold text-white mb-4">
				Connect with me
			</h2>
			<div class="w-24 h-1 bg-white mx-auto mb-6"></div>
			<p class="text-xl text-gray-400 max-w-3xl mx-auto">
				Find me across the digital universe 🌌
			</p>
		</div>

		<div class="max-w-4xl mx-auto">
			<!-- Email section -->
			<div class="text-center mb-12">
				<a 
					href="mailto:max@maxmade.nl"
					class="inline-flex items-center text-2xl font-semibold text-white hover:text-gray-300 transition-colors group"
				>
					<div class="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center mr-6 group-hover:bg-gray-700 transition-colors">
						<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v10a2 2 0 002 2z" />
						</svg>
					</div>
					<div class="text-left">
						<div class="text-white">max@maxmade.nl</div>
						<div class="text-sm text-gray-400">Drop me a message</div>
					</div>
				</a>
			</div>

			<!-- Social links grid -->
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
				{#each socialLinks as social}
					<a 
						href={social.url}
						target="_blank"
						rel="noopener noreferrer"
						class="bg-black rounded-xl p-6 border border-gray-800 hover:border-gray-600 transition-all duration-300 transform hover:scale-105 group"
					>
						<div class="flex items-center mb-4">
							{#if social.iconComponent}
								<div class="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mr-4 group-hover:bg-gray-700 transition-colors">
									<social.iconComponent size={24} />
								</div>
							{/if}
							<div>
								<div class="font-semibold text-white">{social.name}</div>
								<div class="text-sm text-gray-400">{social.description}</div>
							</div>
						</div>
						{#if social.badge}
							<img 
								src={social.badge} 
								alt={social.name}
								class="mx-auto hover:opacity-80 transition-opacity"
							/>
						{/if}
					</a>
				{/each}
			</div>

			<!-- ASCII Art Section -->
			<div class="text-center">
				<div class="bg-gradient-to-br from-gray-800 to-black rounded-xl p-12 border border-gray-700">
					<div class="text-center">
						<h4 class="text-3xl font-bold text-white mb-4 font-mono">
							/\/\/-\&gt;&lt;
						</h4>
						<p class="text-gray-400">
							Let's build something amazing together
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
