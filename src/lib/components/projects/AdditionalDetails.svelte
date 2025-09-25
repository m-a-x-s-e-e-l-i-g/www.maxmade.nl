<script lang="ts">
	export let heading: string = 'Additional Details';
	export let cards: Array<{ title: string; body: string }>= [];
</script>

<section class="mb-12">
	<h2 class="mb-6 text-2xl font-bold">{heading}</h2>
	<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each cards as card}
			<div class="rounded-lg border border-gray-800 bg-black p-6">
				<h3 class="mb-2 text-lg font-semibold">{card.title}</h3>
				<p class="text-gray-400">{card.body}</p>
			</div>
		{/each}
	</div>
</section>
