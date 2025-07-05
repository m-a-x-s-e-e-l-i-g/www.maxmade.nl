<script lang="ts">
	import {
		LinkedInIcon,
		InstagramIcon,
		GitHubIcon,
		EmailIcon,
		FacebookIcon,
		TelegramIcon,
		XboxIcon
	} from './icons';

	const socialLinks = [
		{
			name: 'LinkedIn',
			url: 'https://linkedin.com/in/maxse',
			description: 'Nothing interesting here',
			badge: 'https://img.shields.io/badge/maxse-%231E77B5.svg?&logo=linkedin&logoColor=white',
			iconComponent: LinkedInIcon
		},
		{
			name: 'Facebook',
			url: 'https://www.facebook.com/maxse',
			description: 'Everything I post on IG ends up here',
			badge: 'https://img.shields.io/badge/maxse-%232E87FB.svg?&logo=facebook&logoColor=white',
			iconComponent: FacebookIcon
		},
		{
			name: 'Instagram',
			url: 'https://instagram.com/the.maxest',
			description: 'Parkour / main account',
			badge:
				'https://img.shields.io/badge/the.maxest-%23000000.svg?&logo=instagram&logoColor=white',
			iconComponent: InstagramIcon
		},
		{
			name: 'Instagram',
			url: 'https://instagram.com/maxseelig_photography',
			description: 'Photography portfolio',
			badge:
				'https://img.shields.io/badge/maxseelig_photography-%23000000.svg?&logo=instagram&logoColor=white',
			iconComponent: InstagramIcon
		},
		{
			name: 'Instagram',
			url: 'https://instagram.com/the.konijn',
			description: 'Konijn art',
			badge:
				'https://img.shields.io/badge/the.konijn-%23000000.svg?&logo=instagram&logoColor=white',
			iconComponent: InstagramIcon
		},
		{
			name: 'Telegram',
			url: 'https://t.me/m01xx',
			description: 'Contact me here!',
			badge: 'https://img.shields.io/badge/m01xx-%232CA5E0.svg?&logo=telegram&logoColor=white',
			iconComponent: TelegramIcon
		},
		{
			name: 'Xbox',
			url: 'https://account.xbox.com/Profile?Gamertag=Snurkpop',
			description: 'Get snurkt m8',
			badge: 'https://img.shields.io/badge/Snurkpop-%23107C10.svg?logo=Xbox&logoColor=white',
			iconComponent: XboxIcon
		},
		{
			name: 'GitHub',
			url: 'https://github.com/m-a-x-s-e-e-l-i-g',
			description: 'Code repositories',
			badge:
				'https://img.shields.io/badge/m--a--x--s--e--e--l--i--g-%23181717.svg?&logo=github&logoColor=white',
			iconComponent: GitHubIcon
		}
	];
</script>

<section id="contact" class="bg-gray-900 py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Section header -->
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-4xl font-bold text-white sm:text-5xl">Connect with me</h2>
			<div class="mx-auto mb-6 h-1 w-24 bg-white"></div>
			<p class="mx-auto max-w-3xl text-xl text-gray-400">Find me across the digital universe 🌌</p>
		</div>

		<div class="mx-auto max-w-4xl">
			<!-- Email section -->
			<div class="mb-12 text-center">
				<a
					href="mailto:max@maxmade.nl"
					class="group inline-flex items-center text-2xl font-semibold text-white transition-colors hover:text-gray-300"
				>
					<div
						class="mr-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gray-800 transition-colors group-hover:bg-gray-700"
					>
						<EmailIcon size={32} className="text-white" />
					</div>
					<div class="text-left">
						<div class="text-white">max@maxmade.nl</div>
						<div class="text-sm text-gray-400">Drop me a message</div>
					</div>
				</a>
			</div>

			<!-- Social links grid -->
			<div class="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each socialLinks as social}
					<a
						href={social.url}
						target="_blank"
						rel="noopener noreferrer"
						class="group transform rounded-xl border border-gray-800 bg-black p-6 transition-all duration-300 hover:scale-105 hover:border-gray-600"
					>
						<div class="mb-4 flex items-center">
							{#if social.iconComponent}
								<div
									class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-800 transition-colors group-hover:bg-gray-700"
								>
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
								class="mx-auto transition-opacity hover:opacity-80"
							/>
						{/if}
					</a>
				{/each}
			</div>

			<!-- ASCII Art Section -->
			<div class="text-center">
				<div
					class="rounded-xl border border-gray-700 bg-gradient-to-br from-gray-800 to-black p-12"
				>
					<div class="text-center">
						<h4 class="mb-4 font-mono text-3xl font-bold text-white">/\/\/-\&gt;&lt;</h4>
						<p class="text-gray-400">Let's do something interesting together! 🚀</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
