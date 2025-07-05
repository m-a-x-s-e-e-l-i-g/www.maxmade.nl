<script lang="ts">
	import Hero from '../lib/components/Hero.svelte';
	import About from '../lib/components/About.svelte';
	import Projects from '../lib/components/Projects.svelte';
	import Photography from '../lib/components/Photography.svelte';
	import KonineArt from '../lib/components/KonineArt.svelte';
	import Music from '../lib/components/Music.svelte';
	import Contact from '../lib/components/Contact.svelte';
</script>

<svelte:head>
	<title>MAXmade - Photography & Development by Max</title>
	<meta name="description" content="Full-stack development, photography, rabbit art, and music by Max - creating innovative solutions, capturing life's moments, and drawing expressive rabbits" />
</svelte:head>

<main class="bg-black text-white min-h-screen">
	<Hero />
	<About />
	<Projects />
	<Photography />
	<KonineArt />
	<Music />
	<Contact />
</main>
