<script lang="ts">
	// Sample images - you'll want to replace these with your actual images
	const portfolioSections = [
		{
			title: 'Parkour & Movement',
			description: 'Capturing the raw energy and precision of parkour athletes',
			images: [
				{
					src: '/images/parkour-1.jpg',
					alt: 'Matthijs Breunis doing a catpass precision in Deventer',
					caption: 'Matthijs Breunis (aka MatKat) doing a catpass precision in Deventer'
				},
				{
					src: '/images/parkour-2.jpg',
					alt: 'Jasper de Gier precision jump in Amersfoort',
					caption:
						'Locals hate Jasper de Gier for doing these big precision jumps in Amersfoort Q-park'
				},
				{
					src: '/images/parkour-3.jpg',
					alt: 'Silver Moskou precision jump in Amsterdam',
					caption: 'Silver Moskou doing a precision jump in Amsterdam Amstel spot'
				}
			]
		},
		{
			title: 'Urban Exploration',
			description: 'Discovering forgotten places and industrial landscapes',
			images: [
				{
					src: '/images/urban-1.jpg',
					alt: 'Carlo Stokbroeks at derelict train tunnel',
					caption:
						'Carlo Stokbroeks (aka Loos) gazes in awe at the colossal derelict train tunnel, a forgotten titan of engineering'
				},
				{
					src: '/images/urban-2.jpg',
					alt: 'Urban exploration adventure',
					caption:
						'After a grueling two-hour struggle, conquering dense vegetation like intrepid explorers'
				}
			]
		},
		{
			title: 'Landscapes & Architecture',
			description: 'From windmills to churches, capturing Dutch heritage',
			images: [
				{
					src: '/images/landscape-1.jpg',
					alt: 'Regular windmill near Zeewolde',
					caption: 'A regular windmill near Zeewolde'
				},
				{
					src: '/images/landscape-2.jpg',
					alt: 'Lambertus Kerk Wouw',
					caption: 'Lambertus Kerk in Wouw'
				}
			]
		}
	];

	let selectedImage = $state<{ src: string; alt: string; caption: string } | null>(null);
</script>

<section id="portfolio" class="bg-gray-900 py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Section header -->
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-4xl font-bold text-white sm:text-5xl">Portfolio</h2>
			<div class="mx-auto mb-6 h-1 w-24 bg-white"></div>
			<p class="mx-auto max-w-3xl text-xl text-gray-400">
				Plug in to my visual journey - from parkour precision to urban exploration, flooding your
				neural pathways with a torrent of visual data.
			</p>
		</div>

		<!-- Portfolio sections -->
		{#each portfolioSections as section, sectionIndex}
			<div class="mb-20 last:mb-0">
				<div class="mb-8">
					<h3 class="mb-2 text-2xl font-bold text-white sm:text-3xl">
						{section.title}
					</h3>
					<p class="text-gray-400">
						{section.description}
					</p>
				</div>

				<!-- Image grid -->
				<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{#each section.images as image, imageIndex}
						<div class="group relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-800">
							<!-- Placeholder for actual image -->
							<div
								class="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-700 to-gray-800"
							>
								<div class="p-6 text-center">
									<svg
										class="mx-auto mb-4 h-16 w-16 text-gray-500"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
										/>
									</svg>
									<p class="text-sm text-gray-400">{image.alt}</p>
								</div>
							</div>

							<!-- Overlay -->
							<div
								class="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
							>
								<button
									onclick={() => (selectedImage = image)}
									class="scale-90 transform rounded-lg bg-white px-6 py-2 font-semibold text-black transition-transform duration-300 group-hover:scale-100"
								>
									View Full
								</button>
							</div>

							<!-- Caption overlay -->
							<div
								class="absolute right-0 bottom-0 left-0 translate-y-full transform bg-gradient-to-t from-black/80 to-transparent p-4 transition-transform duration-300 group-hover:translate-y-0"
							>
								<p class="text-sm font-medium text-white">
									{image.caption}
								</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/each}

		<!-- Call to action -->
		<div class="mt-16 text-center">
			<p class="mb-6 text-gray-400">Want to see more of my work?</p>
			<a
				href="https://albums.maxmade.nl/"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black"
			>
				Visit Full Gallery
				<svg class="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
					/>
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
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
		onclick={() => (selectedImage = null)}
		role="dialog"
		aria-labelledby="image-modal-title"
		aria-modal="true"
	>
		<div class="max-h-full max-w-4xl">
			<div class="overflow-hidden rounded-lg bg-gray-800">
				<!-- Placeholder for full image -->
				<div
					class="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-gray-700 to-gray-800"
				>
					<div class="p-8 text-center">
						<svg
							class="mx-auto mb-6 h-24 w-24 text-gray-500"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
							/>
						</svg>
						<p class="text-gray-400">{selectedImage.alt}</p>
					</div>
				</div>
				<div class="p-6">
					<p id="image-modal-title" class="font-medium text-white">
						{selectedImage.caption}
					</p>
				</div>
			</div>
		</div>

		<!-- Close button -->
		<button
			onclick={() => (selectedImage = null)}
			class="absolute top-4 right-4 text-white transition-colors hover:text-gray-300"
			aria-label="Close image modal"
		>
			<svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</button>
	</div>
{/if}
