<script lang="ts">
	import '../app.css';
	import Navigation from '../lib/components/Navigation.svelte';

	let { children } = $props();
</script>

<div class="bg-black min-h-screen">
	<Navigation />
	{@render children()}
</div>
