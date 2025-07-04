<script lang="ts">
	import { LinkedInIcon, InstagramIcon, GitHubIcon } from './icons';
	
	let formData = $state({
		email: '',
		phone: '',
		message: ''
	});
	
	let isSubmitting = $state(false);
	let submitStatus = $state<'idle' | 'success' | 'error'>('idle');

	async function handleSubmit(e: Event) {
		e.preventDefault();
		isSubmitting = true;
		
		// Simulate form submission
		setTimeout(() => {
			isSubmitting = false;
			submitStatus = 'success';
			
			// Reset form
			formData = { email: '', phone: '', message: '' };
			
			// Reset status after 3 seconds
			setTimeout(() => {
				submitStatus = 'idle';
			}, 3000);
		}, 1000);
	}

	const socialLinks = [
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/maxse/',
			description: 'Professional network',
			iconComponent: LinkedInIcon
		},
		{
			name: 'Instagram',
			url: 'https://www.instagram.com/maxseelig_photography/',
			description: 'Photography portfolio',
			iconComponent: InstagramIcon
		},
		{
			name: 'GitHub',
			url: 'https://github.com/m-a-x-s-e-e-l-i-g',
			description: 'Code repositories',
			iconComponent: GitHubIcon
		}
	];
</script>

<section id="contact" class="py-20 bg-gray-900">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Section header -->
		<div class="text-center mb-16">
			<h2 class="text-4xl sm:text-5xl font-bold text-white mb-4">
				snd.msg
			</h2>
			<div class="w-24 h-1 bg-white mx-auto mb-6"></div>		<p class="text-xl text-gray-400 max-w-3xl mx-auto">
			Drop me a message.
		</p>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
			<!-- Contact form -->
			<div class="bg-black rounded-lg p-8 border border-gray-800">
				<form onsubmit={handleSubmit} class="space-y-6">
					<!-- Email field -->
					<div>
						<label for="email" class="block text-sm font-medium text-gray-300 mb-2">
							Email *
						</label>
						<input
							type="email"
							id="email"
							bind:value={formData.email}
							required
							class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-white focus:ring-1 focus:ring-white transition-colors"
							placeholder="your@email.com"
						/>
					</div>

					<!-- Phone field -->
					<div>
						<label for="phone" class="block text-sm font-medium text-gray-300 mb-2">
							Phone
						</label>
						<input
							type="tel"
							id="phone"
							bind:value={formData.phone}
							class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-white focus:ring-1 focus:ring-white transition-colors"
							placeholder="(###) ### ####"
						/>
					</div>

					<!-- Message field -->
					<div>
						<label for="message" class="block text-sm font-medium text-gray-300 mb-2">
							Message *
						</label>
						<textarea
							id="message"
							bind:value={formData.message}
							required
							rows="5"
							class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-white focus:ring-1 focus:ring-white transition-colors resize-none"
							placeholder="Tell me about your project or just say hello..."
						></textarea>
					</div>

					<!-- Submit button -->
					<button
						type="submit"
						disabled={isSubmitting}
						class="w-full px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
					>
						{#if isSubmitting}
							<span class="flex items-center justify-center">
								<svg class="animate-spin -ml-1 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24">
									<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
									<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
								</svg>
								Sending...
							</span>
						{:else}
							SEND IT!
						{/if}
					</button>

					<!-- Success/Error messages -->
					{#if submitStatus === 'success'}
						<div class="p-4 bg-green-900/50 border border-green-500 rounded-lg text-green-300 text-center">
							Message sent successfully! I'll get back to you soon.
						</div>
					{:else if submitStatus === 'error'}
						<div class="p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-300 text-center">
							Something went wrong. Please try again or email me directly.
						</div>
					{/if}
				</form>
			</div>

			<!-- Contact info and social -->
			<div class="space-y-8">
				<!-- Direct contact -->
				<div>
					<h3 class="text-2xl font-bold text-white mb-6">
						Connect with me
					</h3>
					<div class="space-y-4">
						<a 
							href="mailto:max@maxmade.nl"
							class="flex items-center text-gray-300 hover:text-white transition-colors group"
						>
							<div class="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mr-4 group-hover:bg-gray-700 transition-colors">
								<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
								</svg>
							</div>
							<div>
								<div class="font-medium">Email</div>
								<div class="text-sm text-gray-400">max@maxmade.nl</div>
							</div>
						</a>
					</div>
				</div>

				<!-- Social links -->
				<div>
					<h4 class="text-lg font-semibold text-white mb-4">
						Follow me 🐇
					</h4>
					<div class="grid grid-cols-1 gap-4">
						{#each socialLinks as social}
							<a 
								href={social.url}
								target="_blank"
								rel="noopener noreferrer"
								class="flex items-center text-gray-300 hover:text-white transition-colors group"
							>
								<div class="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mr-4 group-hover:bg-gray-700 transition-colors">
									<social.iconComponent size={24} />
								</div>
								<div>
									<div class="font-medium">{social.name}</div>
									<div class="text-sm text-gray-400">
										{social.description}
									</div>
								</div>
							</a>
						{/each}
					</div>
				</div>

				<!-- Visual element -->
				<div class="relative">
					<div class="bg-gradient-to-br from-gray-800 to-black rounded-lg p-12 border border-gray-700">
						<div class="text-center">
							<h4 class="text-xl font-bold text-white mb-4">
								/\/\/-\&gt;&lt;
							</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
