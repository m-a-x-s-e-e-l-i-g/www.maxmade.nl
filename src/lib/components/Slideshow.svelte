<!--
Slideshow.svelte usage:

```svelte
<script lang="ts">
  import Slideshow from '$lib/components/Slideshow.svelte';
  const screenshots = [
    { src: '/images/projects/screenshot-moonphase-dogecoin.png', alt: 'Moon Phase 3D Screenshot (Doge mode)' },
    { src: '/images/projects/screenshot-moonphase.png', alt: 'Moon Phase 3D Screenshot' }
  ];
</script>

<Slideshow images={screenshots} intervalMs={1500} />
```
-->
<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { fade } from 'svelte/transition';
  export let images: { src: string; alt: string }[];
  export let intervalMs: number = 1500;
  let currentIndex = 0;
  let interval: ReturnType<typeof setInterval>;
  onMount(() => {
    interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
    }, intervalMs);
  });
  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<section class="mx-auto max-w-4xl pt-8 relative h-[400px] overflow-hidden mb-12">
  {#each images as image, i}
    <img
      src={image.src}
      alt={image.alt}
      class="w-full rounded-lg shadow-lg border border-gray-800 mb-12 object-cover absolute left-0 top-0 transition-opacity duration-400"
      style="height: 100%; opacity: {i === currentIndex ? 1 : 0}; z-index: {i === currentIndex ? 2 : 1}; pointer-events: none;"
      in:fade={{ duration: 400 }} out:fade={{ duration: 400 }}
    />
  {/each}
</section>
