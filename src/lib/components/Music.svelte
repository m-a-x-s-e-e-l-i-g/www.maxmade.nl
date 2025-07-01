<script lang="ts">
	// Sample beats data - you'll want to replace with actual tracks
	const beats = [
		{
			title: "Neural Pathways",
			year: "2024",
			description: "A hypnotic journey through electronic landscapes",
			audioSrc: "/audio/neural-pathways.mp3", // placeholder
			waveform: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjYwIiB2aWV3Qm94PSIwIDAgMzAwIDYwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHg9IjAiIHk9IjIwIiB3aWR0aD0iMiIgaGVpZ2h0PSIyMCIgZmlsbD0iIzk5OTk5OSIvPjwvc3ZnPg=="
		},
		{
			title: "MAXmade.2020",
			year: "2020", 
			description: "Beat & Production showcasing FL Studio mastery",
			audioSrc: "/audio/maxmade-2020.mp3", // placeholder
			waveform: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjYwIiB2aWV3Qm94PSIwIDAgMzAwIDYwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHg9IjAiIHk9IjE1IiB3aWR0aD0iMiIgaGVpZ2h0PSIzMCIgZmlsbD0iIzk5OTk5OSIvPjwvc3ZnPg=="
		},
		{
			title: "Visual Data Flood",
			year: "2023",
			description: "Torrential beats that flood your senses",
			audioSrc: "/audio/visual-data-flood.mp3", // placeholder
			waveform: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjYwIiB2aWV3Qm94PSIwIDAgMzAwIDYwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHg9IjAiIHk9IjI1IiB3aWR0aD0iMiIgaGVpZ2h0PSIxMCIgZmlsbD0iIzk5OTk5OSIvPjwvc3ZnPg=="
		}
	];

	let currentlyPlaying = $state<string | null>(null);
	let audioElements: { [key: string]: HTMLAudioElement } = {};
	let playProgress = $state<{ [key: string]: number }>({});

	function togglePlay(trackTitle: string) {
		if (currentlyPlaying === trackTitle) {
			// Pause current track
			if (audioElements[trackTitle]) {
				audioElements[trackTitle].pause();
			}
			currentlyPlaying = null;
		} else {
			// Pause any currently playing track
			if (currentlyPlaying && audioElements[currentlyPlaying]) {
				audioElements[currentlyPlaying].pause();
			}
			
			// Play new track (simulated for now)
			currentlyPlaying = trackTitle;
			
			// Simulate audio playback with progress
			simulatePlayback(trackTitle);
		}
	}

	function simulatePlayback(trackTitle: string) {
		let progress = 0;
		const interval = setInterval(() => {
			if (currentlyPlaying !== trackTitle) {
				clearInterval(interval);
				return;
			}
			
			progress += 0.5;
			playProgress[trackTitle] = progress;
			
			if (progress >= 100) {
				clearInterval(interval);
				currentlyPlaying = null;
				playProgress[trackTitle] = 0;
			}
		}, 100);
	}
</script>

<section id="music" class="py-20 bg-black">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Section header -->
		<div class="text-center mb-16">
			<h2 class="text-4xl sm:text-5xl font-bold text-white mb-4">
				Music Production
			</h2>
			<div class="w-24 h-1 bg-white mx-auto mb-6"></div>
			<p class="text-xl text-gray-400 max-w-3xl mx-auto">
				Plug in to my FL Studio beats as I flood your neural pathways with a torrent of musical data.
			</p>
		</div>

		<!-- Production setup showcase -->
		<div class="mb-20">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
				<div>
					<h3 class="text-2xl sm:text-3xl font-bold text-white mb-6">
						My Studio Setup
					</h3>
					<div class="space-y-4 text-gray-300">
						<div class="flex items-center">
							<div class="w-2 h-2 bg-white rounded-full mr-4"></div>
							<span>FL Studio 21 Producer Edition</span>
						</div>
						<div class="flex items-center">
							<div class="w-2 h-2 bg-white rounded-full mr-4"></div>
							<span>Professional Audio Interface</span>
						</div>
						<div class="flex items-center">
							<div class="w-2 h-2 bg-white rounded-full mr-4"></div>
							<span>Studio Monitors & Headphones</span>
						</div>
						<div class="flex items-center">
							<div class="w-2 h-2 bg-white rounded-full mr-4"></div>
							<span>MIDI Controllers & Synthesizers</span>
						</div>
					</div>
					<p class="text-gray-400 mt-6 leading-relaxed">
						Creating immersive soundscapes that complement visual storytelling. 
						Each beat is crafted with precision to enhance the emotional impact of my photography work.
					</p>
				</div>
				
				<!-- Studio visual -->
				<div class="relative">
					<div class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 border border-gray-700">
						<div class="space-y-4">
							<!-- FL Studio interface mockup -->
							<div class="bg-gray-700 rounded p-4">
								<div class="flex items-center justify-between mb-3">
									<div class="text-sm text-gray-300 font-medium">FL Studio 21</div>
									<div class="flex space-x-1">
										<div class="w-3 h-3 bg-green-500 rounded-full"></div>
										<div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
										<div class="w-3 h-3 bg-red-500 rounded-full"></div>
									</div>
								</div>
								<div class="space-y-2">
									<div class="bg-gray-600 h-2 rounded"></div>
									<div class="bg-gray-600 h-2 rounded w-3/4"></div>
									<div class="bg-gray-600 h-2 rounded w-1/2"></div>
								</div>
							</div>
							
							<!-- Audio levels visualization -->
							<div class="flex space-x-1">
								{#each Array(20) as _, i}
									<div 
										class="bg-gradient-to-t from-green-500 to-green-300 w-2 rounded-t transition-all duration-300"
										style="height: {Math.random() * 40 + 10}px"
									></div>
								{/each}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Beats collection -->
		<div class="mb-16">
			<h3 class="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
				Latest Beats
			</h3>
			
			<div class="space-y-6">
				{#each beats as beat}
					<div class="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-colors">
						<div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
							<!-- Track info -->
							<div class="flex-1">
								<div class="flex items-center gap-4 mb-2">
									<h4 class="text-xl font-semibold text-white">
										{beat.title}
									</h4>
									<span class="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded">
										{beat.year}
									</span>
								</div>
								<p class="text-gray-400 mb-4">
									{beat.description}
								</p>
								
								<!-- Waveform visualization -->
								<div class="flex items-center gap-4">
									<button 
										onclick={() => togglePlay(beat.title)}
										class="flex items-center justify-center w-12 h-12 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
										aria-label={currentlyPlaying === beat.title ? 'Pause' : 'Play'} 
									>
										{#if currentlyPlaying === beat.title}
											<!-- Pause icon -->
											<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
												<path d="M5.5 3.5A1.5 1.5 0 017 2h1a1.5 1.5 0 011.5 1.5v13A1.5 1.5 0 018 18H7a1.5 1.5 0 01-1.5-1.5v-13zM12.5 3.5A1.5 1.5 0 0114 2h1a1.5 1.5 0 011.5 1.5v13A1.5 1.5 0 0115 18h-1a1.5 1.5 0 01-1.5-1.5v-13z" />
											</svg>
										{:else}
											<!-- Play icon -->
											<svg class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
												<path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
											</svg>
										{/if}
									</button>
									
									<!-- Waveform -->
									<div class="flex-1 relative">
										<div class="flex items-center h-12 space-x-1">
											{#each Array(50) as _, i}
												<div 
													class="bg-gray-600 w-1 rounded transition-all duration-150"
													style="height: {Math.random() * 40 + 8}px"
													class:bg-white={currentlyPlaying === beat.title && (playProgress[beat.title] || 0) > i * 2}
												></div>
											{/each}
										</div>
										
										<!-- Progress overlay -->
										{#if currentlyPlaying === beat.title}
											<div 
												class="absolute top-0 left-0 h-12 bg-white/10 transition-all duration-100"
												style="width: {playProgress[beat.title] || 0}%"
											></div>
										{/if}
									</div>
									
									<!-- Duration -->
									<span class="text-sm text-gray-400 min-w-[3rem]">
										{#if currentlyPlaying === beat.title}
											{Math.floor((playProgress[beat.title] || 0) * 1.8 / 100)}:{String(Math.floor(((playProgress[beat.title] || 0) * 1.8 / 100) * 60) % 60).padStart(2, '0')}
										{:else}
											3:42
										{/if}
									</span>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Call to action -->
		<div class="text-center">
			<p class="text-gray-400 mb-6">
				Interested in custom music production, development collaboration, or photography?
			</p>
			<a 
				href="#contact" 
				class="inline-flex items-center px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
			>
				Let's Create Together
				<svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
				</svg>
			</a>
		</div>
	</div>
</section>
