<script lang="ts">
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
			icon: 'M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z'
		},
		{
			name: 'Instagram',
			url: 'https://www.instagram.com/maxseelig_photography/',
			icon: 'M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.624 5.367 11.99 11.988 11.99s11.987-5.366 11.987-11.99C24.014 5.367 18.647.001 12.017.001zm6.624 18.021c-.415 1.563-1.205 2.353-2.768 2.768-1.344.377-4.543.292-6.044.292-1.501 0-4.7.085-6.044-.292-1.563-.415-2.353-1.205-2.768-2.768-.377-1.344-.292-4.543-.292-6.044 0-1.501-.085-4.7.292-6.044.415-1.563 1.205-2.353 2.768-2.768 1.344-.377 4.543-.292 6.044-.292 1.501 0 4.7-.085 6.044.292 1.563.415 2.353 1.205 2.768 2.768.377 1.344.292 4.543.292 6.044 0 1.501.085 4.7-.292 6.044z'
		},
		{
			name: 'GitHub',
			url: 'https://github.com/m-a-x-s-e-e-l-i-g',
			icon: 'M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z'
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
			<div class="w-24 h-1 bg-white mx-auto mb-6"></div>
			<p class="text-xl text-gray-400 max-w-3xl mx-auto">
				Ready to collaborate? Drop me a message and let's create something amazing together.
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
									<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
										<path fill-rule="evenodd" d={social.icon} clip-rule="evenodd" />
									</svg>
								</div>
								<div>
									<div class="font-medium">{social.name}</div>
									<div class="text-sm text-gray-400">
										{social.name === 'LinkedIn' ? 'Professional network' : 
										 social.name === 'Instagram' ? 'Photography portfolio' : 
										 'Code repositories'}
									</div>
								</div>
							</a>
						{/each}
					</div>
				</div>

				<!-- Visual element -->
				<div class="relative">
					<div class="bg-gradient-to-br from-gray-800 to-black rounded-lg p-8 border border-gray-700">
						<div class="text-center">
							<h4 class="text-xl font-bold text-white mb-4">
								/\/\/-\&gt;&lt;
							</h4>
							<p class="text-gray-400 text-sm leading-relaxed">
								"It's a weird thing to ask someone you barely know to hang above a 10-meter drop 
								merely to pose for a picture, where the intimidating height isn't even visible."
							</p>
							<div class="mt-6 flex justify-center">
								<div class="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-full flex items-center justify-center">
									<svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
