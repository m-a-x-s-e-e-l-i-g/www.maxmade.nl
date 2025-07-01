<script lang="ts">
	// Sample images - you'll want to replace these with your actual images
	const portfolioSections = [
		{
			title: "Parkour & Movement",
			description: "Capturing the raw energy and precision of parkour athletes",
			images: [
				{
					src: "/images/parkour-1.jpg",
					alt: "Matthijs Breunis doing a catpass precision in Deventer",
					caption: "Matthijs Breunis (aka MatKat) doing a catpass precision in Deventer"
				},
				{
					src: "/images/parkour-2.jpg", 
					alt: "Jasper de Gier precision jump in Amersfoort",
					caption: "Locals hate Jasper de Gier for doing these big precision jumps in Amersfoort Q-park"
				},
				{
					src: "/images/parkour-3.jpg",
					alt: "Silver Moskou precision jump in Amsterdam",
					caption: "Silver Moskou doing a precision jump in Amsterdam Amstel spot"
				}
			]
		},
		{
			title: "Urban Exploration",
			description: "Discovering forgotten places and industrial landscapes",
			images: [
				{
					src: "/images/urban-1.jpg",
					alt: "Carlo Stokbroeks at derelict train tunnel",
					caption: "Carlo Stokbroeks (aka Loos) gazes in awe at the colossal derelict train tunnel, a forgotten titan of engineering"
				},
				{
					src: "/images/urban-2.jpg",
					alt: "Urban exploration adventure",
					caption: "After a grueling two-hour struggle, conquering dense vegetation like intrepid explorers"
				}
			]
		},
		{
			title: "Landscapes & Architecture", 
			description: "From windmills to churches, capturing Dutch heritage",
			images: [
				{
					src: "/images/landscape-1.jpg",
					alt: "Regular windmill near Zeewolde",
					caption: "A regular windmill near Zeewolde"
				},
				{
					src: "/images/landscape-2.jpg",
					alt: "Lambertus Kerk Wouw",
					caption: "Lambertus Kerk in Wouw"
				}
			]
		}
	];

	let selectedImage = $state<{src: string, alt: string, caption: string} | null>(null);
</script>

<section id="portfolio" class="py-20 bg-gray-900">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Section header -->
		<div class="text-center mb-16">
			<h2 class="text-4xl sm:text-5xl font-bold text-white mb-4">
				Portfolio
			</h2>
			<div class="w-24 h-1 bg-white mx-auto mb-6"></div>
			<p class="text-xl text-gray-400 max-w-3xl mx-auto">
				Plug in to my visual journey - from parkour precision to urban exploration, 
				flooding your neural pathways with a torrent of visual data.
			</p>
		</div>

		<!-- Portfolio sections -->
		{#each portfolioSections as section, sectionIndex}
			<div class="mb-20 last:mb-0">
				<div class="mb-8">
					<h3 class="text-2xl sm:text-3xl font-bold text-white mb-2">
						{section.title}
					</h3>
					<p class="text-gray-400">
						{section.description}
					</p>
				</div>

				<!-- Image grid -->
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{#each section.images as image, imageIndex}
						<div class="group relative overflow-hidden rounded-lg bg-gray-800 aspect-[4/3]">
							<!-- Placeholder for actual image -->
							<div class="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
								<div class="text-center p-6">
									<svg class="w-16 h-16 text-gray-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
									</svg>
									<p class="text-gray-400 text-sm">{image.alt}</p>
								</div>
							</div>
							
							<!-- Overlay -->
							<div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
								<button 
									onclick={() => selectedImage = image}
									class="px-6 py-2 bg-white text-black font-semibold rounded-lg transform scale-90 group-hover:scale-100 transition-transform duration-300"
								>
									View Full
								</button>
							</div>

							<!-- Caption overlay -->
							<div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
								<p class="text-white text-sm font-medium">
									{image.caption}
								</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/each}

		<!-- Call to action -->
		<div class="text-center mt-16">
			<p class="text-gray-400 mb-6">
				Want to see more of my work?
			</p>
			<a 
				href="https://albums.maxmade.nl/" 
				target="_blank" 
				rel="noopener noreferrer"
				class="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300"
			>
				Visit Full Gallery
				<svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
				</svg>
			</a>
		</div>
	</div>
</section>

<!-- Modal for full image view -->
{#if selectedImage}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div 
		class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
		onclick={() => selectedImage = null}
		role="dialog"
		aria-labelledby="image-modal-title"
		aria-modal="true"
	>
		<div class="max-w-4xl max-h-full">
			<div class="bg-gray-800 rounded-lg overflow-hidden">
				<!-- Placeholder for full image -->
				<div class="aspect-[4/3] bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
					<div class="text-center p-8">
						<svg class="w-24 h-24 text-gray-500 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
						</svg>
						<p class="text-gray-400">{selectedImage.alt}</p>
					</div>
				</div>
				<div class="p-6">
					<p id="image-modal-title" class="text-white font-medium">
						{selectedImage.caption}
					</p>
				</div>
			</div>
		</div>
		
		<!-- Close button -->
		<button 
			onclick={() => selectedImage = null}
			class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
			aria-label="Close image modal"
		>
			<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>
	</div>
{/if}
