<script lang="ts">
	import { Image as UnpicImage } from '@unpic/svelte';
	import generatedImages from '$lib/generated-images.json';
	import { onMount, onDestroy } from 'svelte';
	import { browser, dev } from '$app/environment';

	// Use the generated images
	const images = generatedImages.images;

	// Background slideshow: quick, glitchy cycling
	const MAX_BG = 24;
	const bgImages = [...images].sort(() => Math.random() - 0.5).slice(0, MAX_BG);
	let bgIndex = 0;
	let intervalId: any;


	// Start cycling through background images
	onMount(() => {
		if (!browser || bgImages.length === 0) return;
		intervalId = setInterval(() => {
			bgIndex = (bgIndex + 1) % bgImages.length;
		}, 1200); // quick
	});

	onDestroy(() => {
		if (intervalId) clearInterval(intervalId);
	});
</script>


<section id="photography" class="relative bg-black py-20 overflow-hidden">
	<!-- Background slideshow layer (covers entire section) -->
	<div class="pointer-events-none absolute inset-0 z-0">
		{#if bgImages.length > 0}
			{#key bgIndex}
				<div class="absolute inset-0 animate-superZoom" style="filter: url('#svgTripGlitch');">
					<UnpicImage
						src={bgImages[bgIndex].src}
						alt=""
						aria-hidden="true"
						layout="constrained"
						width={1920}
						height={1080}
						loading="eager"
						class="h-full w-full object-cover opacity-65"
						cdn={dev ? undefined : 'netlify'}
					/>
				</div>
			{/key}
		{/if}
		<!-- Readability overlay adapts to background brightness -->
		<div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/85"></div>
	</div>

	<div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Adaptive readability container -->
		<div class="relative mx-auto max-w-4xl overflow-hidden rounded-2xl ring-1 ring-white/10 bg-black/40" style="backdrop-filter: brightness(1.1) blur(3px) saturate(1.1); -webkit-backdrop-filter: brightness(1.1) blur(3px) saturate(1.1);">
			<!-- Glass pane: filtered copy of current background image -->
			{#if bgImages.length > 0}
				<div class="absolute inset-0 z-0 pointer-events-none">
					<UnpicImage
						src={bgImages[bgIndex].src}
						alt=""
						aria-hidden="true"
						layout="constrained"
						width={1920}
						height={1080}
						loading="eager"
						class="absolute inset-0 h-full w-full object-cover opacity-45"
						style="filter: url('#glassPane');"
						cdn={dev ? undefined : 'netlify'}
					/>
					<!-- Subtle color washes for depth -->
					<div class="absolute inset-0" style="mix-blend-mode: overlay; background: radial-gradient(60% 60% at 0% 0%, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.0) 60%);"></div>
					<div class="absolute inset-0" style="mix-blend-mode: soft-light; background: linear-gradient(135deg, rgba(56,189,248,0.28) 0%, rgba(147,51,234,0.18) 40%, rgba(236,72,153,0.14) 100%);"></div>
				</div>
			{/if}
			<!-- Section header -->
			<div class="relative z-10 mb-8 text-center px-6 pt-6 md:px-10 md:pt-10">
				<h2 class="mb-4 text-4xl font-bold text-white sm:text-5xl text-glow">Photography</h2>
				<div class="mx-auto mb-6 h-1 w-24 bg-white/90"></div>
				<p class="mx-auto max-w-3xl text-xl text-white text-glow">A chaotic stream of moments captured through my lens.</p>
			</div>

			<!-- Call to action -->
			<div class="relative z-10 text-center px-6 pb-6 md:px-10 md:pb-10">
				<p class="mb-6 text-white text-glow">Want to see my complete photography portfolio?</p>
				<a
					href="https://albums.maxmade.nl/"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center rounded-lg border-2 border-white/90 px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black shadow-[0_1px_2px_rgba(0,0,0,0.6)]"
				>
					Visit Full Gallery
					<svg class="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
					</svg>
				</a>
			</div>
		</div>
	</div>
</section>
<!-- SVG defs for super glitchy filter -->
<svg class="absolute h-0 w-0" aria-hidden="true">
	<defs>
		<filter id="svgTripGlitch">
			<!-- Animated noise source -->
			<feTurbulence type="fractalNoise" baseFrequency="0.003 0.02" numOctaves="1" seed="2" result="noise">
				<animate attributeName="baseFrequency" values="0.003 0.02;0.008 0.02;0.002 0.03;0.006 0.015;0.003 0.02" dur="3.8s" repeatCount="indefinite"/>
				<animate attributeName="seed" values="1;3;5;7;9;2" dur="6s" repeatCount="indefinite"/>
			</feTurbulence>

			<!-- Displace the source with noise -->
			<feDisplacementMap in="SourceGraphic" in2="noise" scale="16" xChannelSelector="R" yChannelSelector="G" result="displaced">
				<animate attributeName="scale" values="0;14;4;20;0;8;0" dur="4.2s" repeatCount="indefinite"/>
			</feDisplacementMap>

			<!-- Split channels -->
			<feColorMatrix in="displaced" type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="red"/>
			<feColorMatrix in="displaced" type="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="green"/>
			<feColorMatrix in="displaced" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="blue"/>

			<!-- Offset channels differently -->
			<feOffset in="red" dx="-3" dy="0" result="redOffset">
				<animate attributeName="dx" values="-8;0;-3;0;-10;0" dur="2.6s" repeatCount="indefinite"/>
			</feOffset>
			<feOffset in="green" dx="2" dy="0" result="greenOffset">
				<animate attributeName="dx" values="6;0;2;0;4;0" dur="3.1s" repeatCount="indefinite"/>
			</feOffset>
			<feOffset in="blue" dx="1" dy="0" result="blueOffset">
				<animate attributeName="dx" values="4;0;1;0;3;0" dur="2.2s" repeatCount="indefinite"/>
			</feOffset>

			<!-- Blend channels back together -->
			<feBlend in="redOffset" in2="greenOffset" mode="screen" result="rg"/>
			<feBlend in="rg" in2="blueOffset" mode="screen" result="rgb"/>

			<!-- Slight saturation boost -->
			<feColorMatrix in="rgb" type="saturate" values="1.2" result="sat"/>

			<!-- Output -->
			<feComposite in="sat" in2="SourceGraphic" operator="lighter"/>
		</filter>


		<!-- Simplified animated glass pane filter -->
		<filter id="glassPane" x="-10%" y="-10%" width="120%" height="120%" color-interpolation-filters="sRGB">
			<!-- Darken -->
			<feComponentTransfer>
				<feFuncR type="linear" slope="0.9" intercept="0"/>
				<feFuncG type="linear" slope="0.9" intercept="0"/>
				<feFuncB type="linear" slope="0.9" intercept="0"/>
			</feComponentTransfer>
			<feGaussianBlur stdDeviation="0.35"/>
			<feColorMatrix type="saturate" values="1.05"/>
		</filter>
	</defs>
</svg>
<!-- No modal/preview: images are decorative background only -->

<style>
/* Glitchy super-zoom swap */
.animate-superZoom {
	animation: superZoom 260ms cubic-bezier(0.19, 1, 0.22, 1);
	will-change: transform, filter;
}

@keyframes superZoom {
	0% { transform: scale(1.6) skewX(2deg); filter: blur(2px) contrast(120%); }
	45% { transform: scale(1.1) skewX(-1deg); filter: blur(1px) contrast(150%); }
	60% { transform: scale(1.3) skewX(1deg); filter: blur(0.5px) contrast(130%); }
	80% { transform: scale(1.02); }
	100% { transform: scale(1); }
}

/* Subtle text glow for readability */
.text-glow {
  text-shadow: 0 1px 1px rgba(0,0,0,0.9), 0 0 12px rgba(0,0,0,0.35);
}

</style>
