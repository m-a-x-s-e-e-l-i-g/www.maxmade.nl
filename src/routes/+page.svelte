<script lang="ts">
	import Hero from '../lib/components/Hero.svelte';
	import Projects from '../lib/components/Projects.svelte';
	import Photography from '../lib/components/Photography.svelte';
	import Music from '../lib/components/Music.svelte';
	import Contact from '../lib/components/Contact.svelte';
</script>

<svelte:head>
	<title>MAXmade - Photography & Development by Max</title>
	<meta name="description" content="Full-stack development, photography, and music by Max - creating innovative solutions and capturing life's moments" />
</svelte:head>

<main class="bg-black text-white min-h-screen">
	<Hero />
	<Projects />
	<Photography />
	<Music />
	<Contact />
</main>
