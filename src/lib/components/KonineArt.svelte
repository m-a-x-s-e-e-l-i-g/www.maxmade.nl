<script lang="ts">
	import { Image } from '@unpic/svelte';
</script>

<style>
	.carrot-background {
		background-image: url('images/konine/carrot-tile.png');
		background-repeat: repeat;
	}
</style>

<section id="konine-art" class="py-20 bg-black carrot-background relative">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
		<!-- Section header -->
		<div class="text-center mb-16">
			<h2 class="text-4xl sm:text-5xl font-bold text-white mb-4">
				🐰 Konine Art 🐇
			</h2>
			<div class="w-24 h-1 bg-white mx-auto mb-6"></div>
			<p class="text-xl text-gray-400 max-w-3xl mx-auto">
				The bounciest rabbit in the world! Canvas artworks featuring expressive rabbit drawings.
			</p>
		</div>

		<!-- Featured artwork showcase -->
		<div class="mb-16">
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Featured artwork 1 -->
				<div class="group cursor-pointer transform transition-transform duration-300 hover:scale-105">
					<div class="relative overflow-hidden rounded-lg shadow-2xl">
						<Image 
							src="images/konine/15.jpg"
							alt="Konijn Artwork 15 - Canvas 24x30cm"
							layout="constrained"
							width={400}
							height={500}
							loading="lazy"
							class="w-full h-auto transition-transform duration-300 group-hover:scale-110"
						/>
						<div class="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
					</div>
					<div class="mt-4 text-center">
						<p class="text-white font-medium">Canvas 24x30cm</p>
						<p class="text-gray-400 text-sm">Frameless Anti-Reflective Glass</p>
					</div>
				</div>

				<!-- Featured artwork 2 -->
				<div class="group cursor-pointer transform transition-transform duration-300 hover:scale-105">
					<div class="relative overflow-hidden rounded-lg shadow-2xl">
						<Image 
							src="images/konine/10.jpg"
							alt="Konijn Artwork 10 - Canvas 24x30cm"
							layout="constrained"
							width={400}
							height={500}
							loading="lazy"
							class="w-full h-auto transition-transform duration-300 group-hover:scale-110"
						/>
						<div class="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
					</div>
					<div class="mt-4 text-center">
						<p class="text-white font-medium">Canvas 24x30cm</p>
						<p class="text-gray-400 text-sm">Frameless Anti-Reflective Glass</p>
					</div>
				</div>

				<!-- Featured artwork 3 -->
				<div class="group cursor-pointer transform transition-transform duration-300 hover:scale-105">
					<div class="relative overflow-hidden rounded-lg shadow-2xl">
						<Image 
							src="images/konine/17.jpg"
							alt="Konijn Artwork 17 - Canvas 24x30cm"
							layout="constrained"
							width={400}
							height={500}
							loading="lazy"
							class="w-full h-auto transition-transform duration-300 group-hover:scale-110"
						/>
						<div class="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
					</div>
					<div class="mt-4 text-center">
						<p class="text-white font-medium">Canvas 24x30cm</p>
						<p class="text-gray-400 text-sm">Frameless Anti-Reflective Glass</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Call to action -->
		<div class="text-center">
			<div class="bg-gray-900 rounded-lg p-8 max-w-2xl mx-auto">
				<h3 class="text-2xl font-bold text-white mb-4">
					Explore More Rabbit Art
				</h3>
				<p class="text-gray-400 mb-6">
					Discover my complete collection of expressive rabbit drawings on canvas. Each piece captures the unique character and bounce of these amazing creatures.
				</p>
				<a 
					href="https://www.konine.art" 
					target="_blank" 
					rel="noopener noreferrer"
					class="inline-flex items-center px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-300"
				>
					Visit Konine.Art
					<svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
					</svg>
				</a>
			</div>
		</div>
	</div>
</section>
