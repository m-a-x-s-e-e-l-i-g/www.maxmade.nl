<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Hero from '../lib/components/Hero.svelte';
	import About from '../lib/components/About.svelte';
	import Projects from '../lib/components/Projects.svelte';
	import Photography from '../lib/components/Photography.svelte';
	import KonineArt from '../lib/components/KonineArt.svelte';
	import Music from '../lib/components/Music.svelte';
	import Statistics from '../lib/components/Statistics.svelte';
	import Contact from '../lib/components/Contact.svelte';
</script>

<Seo
	title="Max Seelig | Web Development, Photography & Art | MAXmade"
	description="Max Seelig is a web developer and creator from Bergen op Zoom, the Netherlands. Explore his software projects, photography, rabbit art, music, and parkour."
/>

<main class="min-h-screen bg-black text-white">
	<Hero />
	<About />
	<Projects />
	<Photography />
	<KonineArt />
	<Music />
	<Statistics />
	<Contact />
</main>
