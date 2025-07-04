<script lang="ts">
	import Gallery from 'svelte-image-gallery';
	import { Image } from '@unpic/svelte';
	import generatedImages from '$lib/generated-images.json';
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	// Use the generated images
	const images = generatedImages.images;

	let isModalOpen = false;
	let selectedImage: { src: string; alt: string } | null = null;
	let currentImageIndex = 0;

	function handleImageClick(e: any) {		
		// Find the index of the clicked image
		currentImageIndex = images.findIndex(img => img.src === e.detail.src);
		
		if (currentImageIndex === -1) {
			// If exact match not found, try to find by filename
			const clickedFilename = e.detail.src.split('/').pop();
			currentImageIndex = images.findIndex(img => img.src.includes(clickedFilename));
			
			if (currentImageIndex === -1) {
				currentImageIndex = 0; // final fallback
			}
		}
		
		// Use the clicked image data, but with our fallback alt text
		selectedImage = {
			src: e.detail.src,
			alt: e.detail.alt || images[currentImageIndex]?.alt || 'Photography by MAXmade'
		};
		isModalOpen = true;
	}

	function closeModal() {
		isModalOpen = false;
		selectedImage = null;
		currentImageIndex = 0;
	}

	function goToPrevious() {
		currentImageIndex = currentImageIndex > 0 ? currentImageIndex - 1 : images.length - 1;
		selectedImage = images[currentImageIndex];
	}

	function goToNext() {
		currentImageIndex = currentImageIndex < images.length - 1 ? currentImageIndex + 1 : 0;
		selectedImage = images[currentImageIndex];
	}

	function handleKeydown(e: KeyboardEvent) {
		if (!isModalOpen) return;
		
		e.preventDefault();
		if (e.key === 'Escape') {
			closeModal();
		} else if (e.key === 'ArrowLeft') {
			goToPrevious();
		} else if (e.key === 'ArrowRight') {
			goToNext();
		}
	}

	// Add global keyboard listener only in browser
	onMount(() => {
		if (browser) {
			document.addEventListener('keydown', handleKeydown);
		}
	});

	onDestroy(() => {
		if (browser) {
			document.removeEventListener('keydown', handleKeydown);
		}
	});
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
						<Image 
							src={image.src} 
							alt={image.alt}
							layout="constrained"
							width={300}
							height={200}
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

<!-- Full-size image modal -->
{#if isModalOpen && selectedImage}
	<!-- Modal overlay -->
	<!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
	<div 
		class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
		on:click={closeModal}
		role="dialog"
		aria-modal="true"
		aria-label="Image viewer"
		tabindex="-1"
	>
		<div class="relative w-full h-full flex items-center justify-center">
			<!-- Close button -->
			<button 
				class="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
				on:click={closeModal}
				aria-label="Close modal"
			>
				<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>

			<!-- Previous button -->
			{#if images.length > 1}
				<button 
					class="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75"
					on:click|stopPropagation={goToPrevious}
					aria-label="Previous image"
				>
					<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
					</svg>
				</button>
			{/if}

			<!-- Next button -->
			{#if images.length > 1}
				<button 
					class="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75"
					on:click|stopPropagation={goToNext}
					aria-label="Next image"
				>
					<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
					</svg>
				</button>
			{/if}
			
			<!-- Image container -->
			<div class="flex items-center justify-center w-full h-full">
				<Image 
					src={selectedImage.src}
					alt={selectedImage.alt}
					layout="fullWidth"
					width={1200}
					height={800}
					class="max-w-[calc(100vw-2rem)] max-h-[calc(100vh-2rem)] w-auto h-auto object-contain rounded-lg shadow-2xl"
				/>
			</div>

			<!-- Image counter -->
			{#if images.length > 1}
				<div class="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 text-white bg-black bg-opacity-50 px-3 py-1 rounded-full text-sm">
					{currentImageIndex + 1} / {images.length}
				</div>
			{/if}
		</div>
	</div>
{/if}
