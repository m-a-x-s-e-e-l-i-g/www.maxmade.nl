<script lang="ts">
	import TagPill from './TagPill.svelte';

	export let description: string;
	export let highlights: string[] = [];
	export let stack: Array<{ label: string; color?: 'orange' | 'blue' | 'emerald' | 'pink' | 'green' | 'gray' }> = [];
	export let status: string[] = [];
	// Optional: named slot "right" for custom right column content
</script>

<section class="mb-12">
	<h2 class="mb-6 text-2xl font-bold">Project Overview</h2>
	<div class="rounded-lg border border-gray-800 bg-black p-8">
		<p class="mb-6 text-lg leading-relaxed text-gray-300">{description}</p>

		<div class="grid gap-8 md:grid-cols-2">
			<div>
				{#if highlights.length}
					<h3 class="mb-4 text-lg font-semibold text-white">Core Highlights</h3>
					<ul class="space-y-2 text-gray-300">
						{#each highlights as item}
							<li class="flex items-center">
								<svg class="mr-3 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
									<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
								</svg>
								{item}
							</li>
						{/each}
					</ul>
				{/if}
			</div>

			<div>
				{#if stack.length}
					<h3 class="mb-4 text-lg font-semibold text-white">Technical Stack</h3>
					<div class="mb-6 flex flex-wrap gap-2">
						{#each stack as t}
							<TagPill label={t.label} color={t.color ?? 'gray'} />
						{/each}
					</div>
				{/if}

				{#if status.length}
					<h3 class="mb-4 text-lg font-semibold text-white">Project Status</h3>
					<div class="space-y-2 text-gray-300">
						{#each status as s, i}
							<div class="flex items-center">
								{#if i === 0}
									<svg class="mr-2 h-4 w-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
								{:else}
									<svg class="mr-2 h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
										<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
									</svg>
								{/if}
								{s}
							</div>
						{/each}
					</div>
				{/if}

				<slot name="right" />
			</div>
		</div>
	</div>
</section>
