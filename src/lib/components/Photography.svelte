<script lang="ts">
	import Gallery from 'svelte-image-gallery';

	// Sample photography collections - you'll replace these with your actual images
	const photographyCollections = [
		{
			title: "Parkour & Movement",
			description: "Capturing the raw energy and precision of parkour athletes",
			images: [
				{
					src: "/images/parkour/parkour-1-large.jpg",
					thumb: "/images/parkour/parkour-1-thumb.jpg",
					alt: "Matthijs Breunis doing a catpass precision in Deventer",
					caption: "Matthijs Breunis (aka MatKat) doing a catpass precision in Deventer"
				},
				{
					src: "/images/parkour/parkour-2-large.jpg", 
					thumb: "/images/parkour/parkour-2-thumb.jpg",
					alt: "Jasper de Gier precision jump in Amersfoort",
					caption: "Locals hate Jasper de Gier for doing these big precision jumps in Amersfoort Q-park"
				},
				{
					src: "/images/parkour/parkour-3-large.jpg",
					thumb: "/images/parkour/parkour-3-thumb.jpg",
					alt: "Silver Moskou precision jump in Amsterdam",
					caption: "Silver Moskou doing a precision jump in Amsterdam Amstel spot"
				},
				{
					src: "/images/parkour/parkour-4-large.jpg",
					thumb: "/images/parkour/parkour-4-thumb.jpg",
					alt: "Steven Koops precision jump in Bergen op Zoom",
					caption: "Steven Koops doing a precision jump in Bergen op Zoom"
				},
				{
					src: "/images/parkour/parkour-5-large.jpg",
					thumb: "/images/parkour/parkour-5-thumb.jpg",
					alt: "Steven Koops sideflip in Bergen op Zoom",
					caption: "Steven Koops doing a sideflip off a wall in Bergen op Zoom"
				}
			]
		},
		{
			title: "Urban Exploration",
			description: "Discovering forgotten places and industrial landscapes",
			images: [
				{
					src: "/images/urban/urban-1-large.jpg",
					thumb: "/images/urban/urban-1-thumb.jpg",
					alt: "Carlo Stokbroeks at derelict train tunnel",
					caption: "Carlo Stokbroeks (aka Loos) gazes in awe at the colossal derelict train tunnel, a forgotten titan of engineering"
				},
				{
					src: "/images/urban/urban-2-large.jpg",
					thumb: "/images/urban/urban-2-thumb.jpg",
					alt: "Urban exploration adventure",
					caption: "After a grueling two-hour struggle, conquering dense vegetation like intrepid explorers"
				},
				{
					src: "/images/urban/urban-3-large.jpg",
					thumb: "/images/urban/urban-3-thumb.jpg",
					alt: "Industrial architecture",
					caption: "Abandoned industrial spaces tell stories of the past"
				}
			]
		},
		{
			title: "Landscapes & Architecture", 
			description: "From windmills to churches, capturing Dutch heritage",
			images: [
				{
					src: "/images/landscape/landscape-1-large.jpg",
					thumb: "/images/landscape/landscape-1-thumb.jpg",
					alt: "Regular windmill near Zeewolde",
					caption: "A regular windmill near Zeewolde"
				},
				{
					src: "/images/landscape/landscape-2-large.jpg",
					thumb: "/images/landscape/landscape-2-thumb.jpg",
					alt: "Lambertus Kerk Wouw",
					caption: "Lambertus Kerk in Wouw"
				},
				{
					src: "/images/landscape/landscape-3-large.jpg",
					thumb: "/images/landscape/landscape-3-thumb.jpg",
					alt: "Dutch countryside",
					caption: "The timeless beauty of the Dutch countryside"
				}
			]
		}
	];

	let selectedCollection = $state(0);

	// Convert our image format to what svelte-image-gallery expects
	const galleryImages = $derived(photographyCollections[selectedCollection].images.map(img => ({
		src: img.src,
		thumb: img.thumb,
		alt: img.alt,
		title: img.caption
	})));

	function selectCollection(index: number) {
		selectedCollection = index;
	}

	// Create placeholder images info
	const placeholderInfo = {
		total: photographyCollections.reduce((sum, collection) => sum + collection.images.length, 0),
		collections: photographyCollections.length
	};
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
				Plug in to my visual journey - from parkour precision to urban exploration, 
				flooding your neural pathways with a torrent of visual data.
			</p>
		</div>

		<!-- Collection selector -->
		<div class="flex flex-wrap justify-center gap-4 mb-12">
			{#each photographyCollections as collection, index}
				<button
					onclick={() => selectCollection(index)}
					class="px-6 py-3 rounded-lg font-medium transition-all duration-300 transform {selectedCollection === index 
						? 'bg-white text-black scale-105' 
						: 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105'}"
				>
					<div class="text-center">
						<div class="font-semibold">{collection.title}</div>
						<div class="text-xs opacity-75">{collection.images.length} photos</div>
					</div>
				</button>
			{/each}
		</div>

		<!-- Current collection info -->
		<div class="text-center mb-8">
			<h3 class="text-2xl font-bold text-white mb-2">
				{photographyCollections[selectedCollection].title}
			</h3>
			<p class="text-gray-400 max-w-2xl mx-auto">
				{photographyCollections[selectedCollection].description}
			</p>
		</div>

		<!-- Gallery -->
		<div class="mb-16">
			{#if galleryImages.length > 0}
				<!-- Note: Since we don't have actual images yet, we'll show a placeholder gallery interface -->
				<div class="bg-gray-900 rounded-lg p-8 border border-gray-800">
					<div class="text-center mb-8">
						<svg class="w-24 h-24 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
						</svg>
						<h4 class="text-xl font-semibold text-white mb-2">Image Gallery Ready</h4>
						<p class="text-gray-400 mb-6">
							This section will display your {photographyCollections[selectedCollection].title.toLowerCase()} photography
							using the svelte-image-gallery component once you add your images.
						</p>
					</div>

					<!-- Placeholder grid showing what the gallery will look like -->
					<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
						{#each galleryImages as image, index}
							<div class="aspect-square bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center group hover:from-gray-600 hover:to-gray-700 transition-colors cursor-pointer">
								<div class="text-center p-4">
									<svg class="w-8 h-8 text-gray-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
									</svg>
									<p class="text-xs text-gray-500 text-center leading-tight">
										{image.alt}
									</p>
								</div>
							</div>
						{/each}
					</div>

					<!-- Instructions for adding real images -->
					<div class="mt-8 p-6 bg-gray-800 rounded-lg border border-gray-700">
						<h5 class="text-lg font-semibold text-white mb-3">To add your photography:</h5>
						<ol class="text-gray-300 space-y-2 text-sm">
							<li>1. Add your images to the <code class="text-blue-400 bg-gray-900 px-2 py-1 rounded">static/images/</code> directory</li>
							<li>2. Create subdirectories: <code class="text-blue-400 bg-gray-900 px-2 py-1 rounded">parkour/</code>, <code class="text-blue-400 bg-gray-900 px-2 py-1 rounded">urban/</code>, <code class="text-blue-400 bg-gray-900 px-2 py-1 rounded">landscape/</code></li>
							<li>3. Update the image paths in <code class="text-blue-400 bg-gray-900 px-2 py-1 rounded">Photography.svelte</code></li>
							<li>4. The svelte-image-gallery will automatically handle the lightbox and navigation</li>
						</ol>
					</div>
				</div>

				<!-- Uncomment this when you have real images -->
				<!-- 
				<Gallery 
					images={galleryImages}
					showThumbs={true}
					showFullscreenButton={true}
					showImageCount={true}
					allowDownload={false}
					transitionDuration={300}
				/>
				-->
			{:else}
				<div class="text-center py-12">
					<p class="text-gray-400">No images in this collection yet.</p>
				</div>
			{/if}
		</div>

		<!-- Statistics -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
			<div class="text-center">
				<div class="text-3xl font-bold text-white mb-2">{placeholderInfo.total}</div>
				<div class="text-gray-400">Total Photos</div>
			</div>
			<div class="text-center">
				<div class="text-3xl font-bold text-white mb-2">{placeholderInfo.collections}</div>
				<div class="text-gray-400">Collections</div>
			</div>
			<div class="text-center">
				<div class="text-3xl font-bold text-white mb-2">5+</div>
				<div class="text-gray-400">Years Experience</div>
			</div>
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
