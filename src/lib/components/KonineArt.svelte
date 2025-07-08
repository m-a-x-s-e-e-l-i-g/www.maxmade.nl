<script lang="ts">
	import { Image } from '@unpic/svelte';
	import { base } from '$app/paths';
	import { dev } from '$app/environment';
</script>

<section
	id="konine-art"
	class="carrot-background relative bg-black py-20"
	style="background-image: url({base}/images/konine/carrot-tile.png);"
>
	<div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Section header -->
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-4xl font-bold text-white sm:text-5xl">🐰 Konine Art 🐇</h2>
			<div class="mx-auto mb-6 h-1 w-24 bg-white"></div>
			<p class="mx-auto max-w-3xl text-xl text-gray-400">
				The bounciest rabbit in the world! Canvas artworks featuring expressive rabbit drawings.
			</p>
		</div>

		<!-- Featured artwork showcase -->
		<div class="mb-16">
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				<!-- Featured artwork 1 -->
				<div
					class="group transform cursor-pointer transition-transform duration-300 hover:scale-105"
				>
					<div class="relative overflow-hidden rounded-lg shadow-2xl">
						<Image
							src="images/konine/15.jpg"
							alt="Konijn Artwork 15 - Canvas 24x30cm"
							layout="constrained"
							width={400}
							height={500}
							loading="lazy"
							class="h-auto w-full transition-transform duration-300 group-hover:scale-110"
							cdn={dev ? undefined : "netlify"}
						/>
						<div
							class="bg-opacity-0 group-hover:bg-opacity-20 absolute inset-0 transition-opacity duration-300"
						></div>
					</div>
					<div class="mt-4 text-center">
						<p class="font-medium text-white">Canvas 24x30cm</p>
						<p class="text-sm text-gray-400">Frameless Anti-Reflective Glass</p>
					</div>
				</div>

				<!-- Featured artwork 2 -->
				<div
					class="group transform cursor-pointer transition-transform duration-300 hover:scale-105"
				>
					<div class="relative overflow-hidden rounded-lg shadow-2xl">
						<Image
							src="images/konine/10.jpg"
							alt="Konijn Artwork 10 - Canvas 24x30cm"
							layout="constrained"
							width={400}
							height={500}
							loading="lazy"
							class="h-auto w-full transition-transform duration-300 group-hover:scale-110"
							cdn={dev ? undefined : "netlify"}
						/>
						<div
							class="bg-opacity-0 group-hover:bg-opacity-20 absolute inset-0 transition-opacity duration-300"
						></div>
					</div>
					<div class="mt-4 text-center">
						<p class="font-medium text-white">Canvas 24x30cm</p>
						<p class="text-sm text-gray-400">Frameless Anti-Reflective Glass</p>
					</div>
				</div>

				<!-- Featured artwork 3 -->
				<div
					class="group transform cursor-pointer transition-transform duration-300 hover:scale-105"
				>
					<div class="relative overflow-hidden rounded-lg shadow-2xl">
						<Image
							src="images/konine/17.jpg"
							alt="Konijn Artwork 17 - Canvas 24x30cm"
							layout="constrained"
							width={400}
							height={500}
							loading="lazy"
							class="h-auto w-full transition-transform duration-300 group-hover:scale-110"
							cdn={dev ? undefined : "netlify"}
						/>
						<div
							class="bg-opacity-0 group-hover:bg-opacity-20 absolute inset-0 transition-opacity duration-300"
						></div>
					</div>
					<div class="mt-4 text-center">
						<p class="font-medium text-white">Canvas 24x30cm</p>
						<p class="text-sm text-gray-400">Frameless Anti-Reflective Glass</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Call to action -->
		<div class="text-center">
			<div class="mx-auto max-w-2xl rounded-lg bg-gray-900 p-8" style="border: 1px solid #0d282b;">
				<h3 class="mb-4 text-2xl font-bold text-white">Explore More Rabbit Art</h3>
				<p class="mb-6 text-gray-400">
					Discover my complete collection of expressive rabbit drawings on canvas. Each piece
					captures the unique character and bounce of these amazing creatures.
				</p>
				<div class="flex items-center justify-center gap-4">
					<a
						href="https://www.konine.art"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center rounded-lg bg-white px-8 py-3 font-semibold text-black transition-colors duration-300 hover:bg-gray-200"
					>
						Visit Konine.Art
						<svg class="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
							></path>
						</svg>
					</a>

					<a
						href="https://www.instagram.com/the.konijn"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Follow @the.konijn on Instagram"
						class="inline-flex items-center justify-center rounded-lg bg-gray-800 p-3 text-white transition-colors duration-300 hover:bg-gray-700"
						title="Follow @the.konijn on Instagram"
					>
						<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.carrot-background {
		background-repeat: repeat;
	}
</style>
