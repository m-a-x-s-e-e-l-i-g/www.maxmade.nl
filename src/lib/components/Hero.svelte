<script lang="ts">
	import { onMount } from 'svelte';
	
	let heroElement: HTMLElement;
	let videoElement: HTMLVideoElement;
	let scrollY = $state(0);
	
	onMount(() => {
		const handleScroll = () => scrollY = window.scrollY;
		window.addEventListener('scroll', handleScroll);
		
		// Handle video playback for mobile devices
		if (videoElement) {
			// Try to play the video
			const playPromise = videoElement.play();
			
			if (playPromise !== undefined) {
				playPromise.catch(() => {
					// Autoplay was prevented, which is expected on mobile
					console.log('Video autoplay was prevented');
				});
			}
			
			// Handle visibility change (when user switches tabs)
			const handleVisibilityChange = () => {
				if (document.hidden) {
					videoElement.pause();
				} else {
					videoElement.play().catch(() => {
						// Ignore errors when trying to play
					});
				}
			};
			
			// Try to play video on user interaction (for mobile)
			const handleUserInteraction = () => {
				if (videoElement.paused) {
					videoElement.play().catch(() => {
						// Ignore errors
					});
				}
			};
			
			// Add event listeners for user interaction
			document.addEventListener('touchstart', handleUserInteraction, { once: true });
			document.addEventListener('click', handleUserInteraction, { once: true });
			document.addEventListener('visibilitychange', handleVisibilityChange);
			
			return () => {
				window.removeEventListener('scroll', handleScroll);
				document.removeEventListener('visibilitychange', handleVisibilityChange);
				document.removeEventListener('touchstart', handleUserInteraction);
				document.removeEventListener('click', handleUserInteraction);
			};
		}
		
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<svelte:window bind:scrollY />

<section bind:this={heroElement} class="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
	<!-- Background video -->
	<video 
		bind:this={videoElement}
		autoplay 
		muted 
		loop 
		playsinline
		controls={false}
		preload="metadata"
		class="absolute inset-0 w-full h-full object-cover"
		style="transform: translateY({scrollY * 0.3}px)"
		oncanplay={(e) => {
			// Force play on mobile devices
			const video = e.target as HTMLVideoElement;
			video.play().catch(() => {
				// If autoplay fails, we'll rely on the fallback background
				console.log('Video autoplay blocked');
			});
		}}
		onloadstart={() => {
			// Hide fallback when video starts loading
			if (videoElement) {
				videoElement.style.opacity = '1';
			}
		}}
	>
		<source src="/video/hero-background.mp4" type="video/mp4">
		<!-- Fallback for very old browsers -->
		Your browser does not support the video tag.
	</video>
	
	<!-- Fallback background for when video fails to load/play -->
	<div 
		class="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-800 via-gray-900 to-black"
		style="transform: translateY({scrollY * 0.3}px); z-index: -1;"
	></div>
	
	<!-- Video overlay with parallax effect -->
	<div 
		class="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-black/50 to-gray-900/70"
		style="transform: translateY({scrollY * 0.5}px)"
	></div>
	
	<!-- Animated background pattern -->
	<div class="absolute inset-0 opacity-10">
		<div class="absolute inset-0" style="background-image: radial-gradient(circle at 20% 80%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #fff 1px, transparent 1px); background-size: 50px 50px;"></div>
	</div>

	<!-- Main content -->
	<div class="relative z-10 text-center px-4 sm:px-6 lg:px-8">
		<!-- Main logo with glitch effect -->
		<div class="mb-8">
			<div class="flex justify-center mb-4">
				<img 
					src="/images/logo-MAXmade.svg" 
					alt="MAXmade" 
					class="h-24 sm:h-32 lg:h-40 w-auto glitch-logo" 
				/>
			</div>
		</div>

		<!-- Subtitle -->
		<p class="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
			Coding • Photography • Music Production • Art • Parkour
		</p>

		<!-- CTA Buttons -->
		<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
			<a 
				href="#projects" 
				class="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
			>
				View Projects
			</a>
			<a 
				href="#photography" 
				class="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
			>
				Photography
			</a>
		</div>

		<!-- Scroll indicator -->
		<div class="absolute -bottom-40 left-1/2 transform -translate-x-1/2">
			<div class="animate-bounce">
				<svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
				</svg>
			</div>
		</div>
	</div>

	<!-- Visual elements -->
	<div class="absolute top-1/4 right-1/4 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
	<div class="absolute bottom-1/4 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
</section>

<style>
	.glitch-logo {
		position: relative;
		animation: logo-glitch 3s infinite;
		filter: drop-shadow(2px 0px 0px #ff0000) drop-shadow(-2px 0px 0px #00ffff);
	}
	
	@keyframes logo-glitch {
		0%, 95%, 100% {
			transform: translateX(0);
			filter: drop-shadow(0px 0px 0px transparent);
		}
		96% {
			transform: translateX(-2px);
			filter: drop-shadow(2px 0px 0px #ff0000) drop-shadow(-2px 0px 0px #00ffff);
		}
		97% {
			transform: translateX(2px);
			filter: drop-shadow(-2px 0px 0px #ff0000) drop-shadow(2px 0px 0px #00ffff);
		}
		98% {
			transform: translateX(-1px);
			filter: drop-shadow(1px 0px 0px #ff0000) drop-shadow(-1px 0px 0px #00ffff);
		}
	}
	
	/* Optimize video performance on mobile */
	@media (max-width: 768px) {
		video {
			/* Reduce video quality impact on mobile */
			transform: translate3d(0, 0, 0);
			backface-visibility: hidden;
		}
	}
	
	/* Disable parallax on mobile for better performance */
	@media (max-width: 768px) and (orientation: portrait) {
		video, .absolute.inset-0.bg-gradient-to-br {
			transform: none !important;
		}
	}
</style>
