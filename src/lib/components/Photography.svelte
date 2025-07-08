<script lang="ts">
	import Gallery from 'svelte-image-gallery';
	import { Image } from '@unpic/svelte';
	import generatedImages from '$lib/generated-images.json';
	import { onMount, onDestroy } from 'svelte';
	import { browser, dev } from '$app/environment';

	// Use the generated images
	const images = generatedImages.images;

	// Track if we're on mobile
	let isMobile = false;

	function checkMobile() {
		if (browser) {
			isMobile = window.innerWidth < 768; // md breakpoint
		}
	}

	let isModalOpen = false;
	let selectedImage: { src: string; alt: string } | null = null;
	let currentImageIndex = 0;

	function handleImageClick(e: any) {
		// Find the index of the clicked image
		currentImageIndex = images.findIndex((img) => img.src === e.detail.src);

		if (currentImageIndex === -1) {
			// If exact match not found, try to find by filename
			const clickedFilename = e.detail.src.split('/').pop();
			currentImageIndex = images.findIndex((img) => img.src.includes(clickedFilename));

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
			checkMobile();
			window.addEventListener('resize', checkMobile);
		}
	});

	onDestroy(() => {
		if (browser) {
			document.removeEventListener('keydown', handleKeydown);
			window.removeEventListener('resize', checkMobile);
		}
	});
</script>

<section id="photography" class="bg-black py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Section header -->
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-4xl font-bold text-white sm:text-5xl">Photography</h2>
			<div class="mx-auto mb-6 h-1 w-24 bg-white"></div>
			<p class="mx-auto max-w-3xl text-xl text-gray-400">
				A chaotic stream of moments captured through my lens.
			</p>
		</div>

		<!-- Gallery -->
		<div class="mb-16">
			{#if images.length > 0}
				{#if isMobile}
					<!-- Mobile: Compact grid layout -->
					<div class="grid grid-cols-5 gap-1 sm:gap-2">
						{#each images as image}
							<!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
							<div
								class="cursor-pointer overflow-hidden rounded transition-opacity hover:opacity-75"
								on:click={() => handleImageClick({ detail: { src: image.src, alt: image.alt } })}
							>
								<Image
									src={image.src}
									alt={image.alt}
									layout="constrained"
									width={150}
									height={150}
									loading="lazy"
									class="w-full h-auto object-contain"
									cdn={dev ? undefined : "netlify"}
								/>
							</div>
						{/each}
					</div>
				{:else}
					<!-- Desktop: Masonry layout -->
					<Gallery on:click={handleImageClick} gap={15} maxColumnWidth={300} hover={true}>
						{#each images as image}
							<Image
								src={image.src}
								alt={image.alt}
								layout="constrained"
								width={300}
								height={300}
								loading="lazy"
								class="rounded-lg shadow-lg"
								cdn={dev ? undefined : "netlify"}
							/>
						{/each}
					</Gallery>
				{/if}
			{:else}
				<div class="py-12 text-center">
					<p class="text-gray-400">No images found.</p>
				</div>
			{/if}
		</div>

		<!-- Call to action -->
		<div class="text-center">
			<p class="mb-6 text-gray-400">Want to see my complete photography portfolio?</p>
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

<!-- Full-size image modal -->
{#if isModalOpen && selectedImage}
	<!-- Modal overlay -->
	<!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
	<div
		class="bg-opacity-90 fixed inset-0 z-50 flex items-center justify-center bg-black p-4"
		on:click={closeModal}
		role="dialog"
		aria-modal="true"
		aria-label="Image viewer"
		tabindex="-1"
	>
		<div class="relative flex h-full w-full items-center justify-center">
			<!-- Close button -->
			<button
				class="absolute top-4 right-4 z-10 text-white transition-colors hover:text-gray-300"
				on:click={closeModal}
				aria-label="Close modal"
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

			<!-- Previous button -->
			{#if images.length > 1}
				<button
					class="bg-opacity-50 hover:bg-opacity-75 absolute top-1/2 left-4 z-10 -translate-y-1/2 rounded-full bg-black p-2 text-white transition-colors hover:text-gray-300"
					on:click|stopPropagation={goToPrevious}
					aria-label="Previous image"
				>
					<svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 19l-7-7 7-7"
						/>
					</svg>
				</button>
			{/if}

			<!-- Next button -->
			{#if images.length > 1}
				<button
					class="bg-opacity-50 hover:bg-opacity-75 absolute top-1/2 right-4 z-10 -translate-y-1/2 rounded-full bg-black p-2 text-white transition-colors hover:text-gray-300"
					on:click|stopPropagation={goToNext}
					aria-label="Next image"
				>
					<svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</button>
			{/if}

			<!-- Image container -->
			<div class="flex h-full w-full items-center justify-center">
				<Image
					src={selectedImage.src}
					alt={selectedImage.alt}
					layout="constrained"
					width={1200}
					height={800}
					class="h-auto max-h-[calc(100vh-2rem)] w-auto max-w-[calc(100vw-2rem)] rounded-lg object-contain shadow-2xl"
					cdn={dev ? undefined : "netlify"}
				/>
			</div>

			<!-- Image counter -->
			{#if images.length > 1}
				<div
					class="bg-opacity-50 absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-black px-3 py-1 text-sm text-white"
				>
					{currentImageIndex + 1} / {images.length}
				</div>
			{/if}
		</div>
	</div>
{/if}
