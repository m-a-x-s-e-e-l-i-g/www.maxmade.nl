<script lang="ts">
	import Hero from '../lib/components/Hero.svelte';
	import Portfolio from '../lib/components/Portfolio.svelte';
	import Music from '../lib/components/Music.svelte';
	import Contact from '../lib/components/Contact.svelte';
</script>

<svelte:head>
	<title>MAXmade - Photography & Music by Max</title>
	<meta name="description" content="Photography and music portfolio by Max - capturing parkour, urban exploration, and creating FL Studio beats" />
</svelte:head>

<main class="bg-black text-white min-h-screen">
	<Hero />
	<Portfolio />
	<Music />
	<Contact />
</main>
