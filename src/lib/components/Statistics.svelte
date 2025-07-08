<script lang="ts">
	import { onMount } from 'svelte';

	// Static data based on scraped information
	const stats = [
		{
			platform: 'GitHub',
			icon: '🐙',
			metrics: [
				{ label: 'Total Contributions', value: '5,284' },
				{ label: 'Total Stars Earned', value: '35' },
				{ label: 'Commits (2025)', value: '257' },
				{ label: 'Pull Requests', value: '54' }
			],
			color: 'from-gray-600 to-gray-800',
			link: 'https://github.com/m-a-x-s-e-e-l-i-g'
		},
		{
			platform: 'Xbox Gaming',
			icon: '🎮',
			metrics: [
				{ label: 'Gamerscore', value: '11,430' },
				{ label: 'Games Played', value: '30+' }
			],
			color: 'from-green-600 to-green-800',
			link: 'https://xboxgamertag.com/search/Snurkpop'
		},
		{
			platform: 'Trakt.tv',
			icon: '📺',
			metrics: [
				{ label: 'Shows', value: '141d 10h 24m' },
				{ label: 'Episodes', value: '5,602' },
				{ label: 'Movies', value: '137d 20h 55m' },
				{ label: 'Films', value: '1,689' }
			],
			color: 'from-red-600 to-red-800',
			link: 'https://trakt.tv/users/garlfed'
		},
		{
			platform: 'Observation.org',
			icon: '🦋',
			metrics: [
				{ label: 'Observations', value: '998' },
				{ label: 'Species', value: '414' },
				{ label: 'Member since', value: '2024-06-15' },
				{ label: 'Favorite', value: 'Plants' }
			],
			color: 'from-green-500 to-blue-600',
			link: 'https://observation.org/users/987548/'
		}
	];

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<section id="statistics" class="py-20 bg-gray-900">
	<div class="container mx-auto px-6">
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-bold mb-6">
				Statistics & Data
			</h2>
			<p class="text-xl text-gray-300 max-w-3xl mx-auto">
				I love tracking and analyzing my digital footprint. Here's a snapshot of my activities across various platforms.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			{#each stats as stat, index}
				<div 
					class="group relative overflow-hidden rounded-2xl bg-gradient-to-br {stat.color} p-1 hover:scale-105 transition-all duration-300 {mounted ? 'animate-fade-in-up' : 'opacity-0'}"
					style="animation-delay: {index * 150}ms"
				>
					<div class="h-full rounded-xl bg-gray-900/90 p-6 backdrop-blur-sm">
						<div class="flex items-center justify-between mb-4">
							<div class="text-3xl">{stat.icon}</div>
							<a 
								href={stat.link} 
								target="_blank" 
								rel="noopener noreferrer"
								class="text-gray-400 hover:text-white transition-colors"
								aria-label="Visit {stat.platform}"
							>
								<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clip-rule="evenodd" />
									<path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clip-rule="evenodd" />
								</svg>
							</a>
						</div>
						
						<h3 class="text-lg font-semibold text-white mb-4">{stat.platform}</h3>
						
						<div class="space-y-3">
							{#each stat.metrics as metric}
								<div class="flex justify-between items-center">
									<span class="text-gray-300 text-sm">{metric.label}</span>
									<span class="text-white font-semibold">{metric.value}</span>
								</div>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>

		<div class="mt-16 text-center">
			<p class="text-gray-400 max-w-2xl mx-auto">
				These statistics are just a glimpse into my digital activities. In the future, I plan to create a separate project to aggregate and visualize all my data in real-time.
			</p>
		</div>
	</div>
</section>

<style>
	@keyframes fade-in-up {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-fade-in-up {
		animation: fade-in-up 0.8s ease-out forwards;
	}
</style>
