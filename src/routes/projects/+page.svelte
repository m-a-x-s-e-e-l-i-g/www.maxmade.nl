<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	
	// Redirect to main page with projects section
	onMount(() => {
		goto('/#projects');
	});
</script>

<svelte:head>
	<title>Projects - MAXmade</title>
	<meta name="description" content="Browse all projects by Max Seelig" />
</svelte:head>
