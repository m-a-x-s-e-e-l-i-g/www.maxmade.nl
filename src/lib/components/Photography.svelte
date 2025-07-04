<script lang="ts">
	import Gallery from 'svelte-image-gallery';
	import generatedImages from '$lib/generated-images.json';

	// Use the generated images
	const images = generatedImages.images;
	const totalImages = generatedImages.totalCount;

	function handleImageClick(e: any) {
		console.log('Image clicked:', e.detail.src);
	}
</script>

<section id="photography" class="py-20 bg-black">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Section header -->
		<div class="text-center mb-16">
			<h2 class="text-4xl sm:text-5xl font-bold text-white mb-4">
				Photography
			</h2>
			<div class="w-24 h-1 bg-white mx-auto mb-6"></div>
			<p class="text-xl text-gray-400 max-w-3xl mx-auto">
				A chaotic stream of moments captured through my lens.
			</p>
		</div>

		<!-- Gallery -->
		<div class="mb-16">
			{#if images.length > 0}
				<Gallery 
					on:click={handleImageClick}
					gap={15}
					maxColumnWidth={300}
					hover={true}
				>
					{#each images as image}
						<img 
							src={image.src} 
							alt={image.alt}
							loading="lazy"
							class="rounded-lg shadow-lg"
						/>
					{/each}
				</Gallery>
			{:else}
				<div class="text-center py-12">
					<p class="text-gray-400">No images found.</p>
				</div>
			{/if}
		</div>

		<!-- Call to action -->
		<div class="text-center">
			<p class="text-gray-400 mb-6">
				Want to see my complete photography portfolio?
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
