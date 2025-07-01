<script lang="ts">
	import { onMount } from 'svelte';
	
	let heroElement: HTMLElement;
	let scrollY = $state(0);
	
	onMount(() => {
		const handleScroll = () => scrollY = window.scrollY;
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<svelte:window bind:scrollY />

<section bind:this={heroElement} class="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
	<!-- Background video -->
	<video 
		autoplay 
		muted 
		loop 
		playsinline
		class="absolute inset-0 w-full h-full object-cover"
		style="transform: translateY({scrollY * 0.3}px)"
	>
		<source src="/video/hero-background.mp4" type="video/mp4">
		<source src="/video/hero-background.webm" type="video/webm">
	</video>
	
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
		<!-- Main title with glitch effect -->
		<div class="mb-8">
			<h1 class="text-6xl sm:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-4 glitch" data-text="MAX">
				MAX
			</h1>
			<div class="text-2xl sm:text-4xl lg:text-5xl font-light text-gray-300 tracking-wider">
				<span class="inline-block animate-pulse">MADE BY</span>
				<span class="mx-4 text-white font-bold">=/=</span>
				<span class="inline-block">MAXmade</span>
			</div>
		</div>

		<!-- Subtitle -->
		<p class="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
			Full-Stack Development • Photography • Music Production
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
		<div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
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
	.glitch {
		position: relative;
		animation: glitch 2s infinite;
	}
	
	.glitch::before,
	.glitch::after {
		content: attr(data-text);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	
	.glitch::before {
		animation: glitch-1 0.5s infinite;
		color: #ff0000;
		z-index: -1;
	}
	
	.glitch::after {
		animation: glitch-2 0.5s infinite;
		color: #00ffff;
		z-index: -2;
	}
	
	@keyframes glitch {
		0%, 90%, 100% {
			transform: translateX(0);
		}
		10% {
			transform: translateX(-2px);
		}
		20% {
			transform: translateX(2px);
		}
	}
	
	@keyframes glitch-1 {
		0%, 90%, 100% {
			transform: translateX(0);
		}
		10% {
			transform: translateX(2px);
		}
		20% {
			transform: translateX(-2px);
		}
	}
	
	@keyframes glitch-2 {
		0%, 90%, 100% {
			transform: translateX(0);
		}
		10% {
			transform: translateX(-1px);
		}
		20% {
			transform: translateX(1px);
		}
	}
</style>
