
<script lang="ts">
  import AutoScrollScreenshot from '$lib/components/AutoScrollScreenshot.svelte';
  import ProjectHeader from '$lib/components/projects/ProjectHeader.svelte';
  import ProjectOverview from '$lib/components/projects/ProjectOverview.svelte';

  type PillColor = 'orange' | 'blue' | 'emerald' | 'pink' | 'green' | 'gray';

  const tags: Array<{ label: string; color: PillColor }> = [
    { label: 'Art', color: 'pink' },
    { label: 'Gallery', color: 'emerald' },
    { label: 'SvelteKit', color: 'orange' }
  ];

  const overviewDescription = 'Konijn Art Gallery is a digital showcase for creative works and artistic expressions, featuring the bounciest rabbit in the world. Explore a playful and vibrant collection of digital and traditional art, all centered around the iconic Konijn character.';

  const highlights = [
    'Playful digital art collection',
    'Konijn character universe',
    'Curated gallery experience'
  ];

  const stack: Array<{ label: string; color: PillColor }> = [
    { label: 'Svelte', color: 'orange' },
    { label: 'SvelteKit', color: 'orange' },
    { label: 'Three.js', color: 'blue' }
  ];

  const status = ['Live & Active'];
</script>

<svelte:head>
  <title>Konijn Art Gallery | MAXmade</title>
  <meta name="description" content="Konijn Art Gallery – Digital art gallery showcasing creative works and artistic expressions. See the bounciest rabbit in the world!" />
  <meta property="og:title" content="Konijn Art Gallery" />
  <meta property="og:description" content="Digital art gallery showcasing creative works and artistic expressions." />
  <meta property="og:type" content="website" />
</svelte:head>

<div class="mt-20 min-h-screen bg-gray-900 text-white">
  <ProjectHeader
    title="Konijn Art Gallery"
    subtitle="The bounciest rabbit in the world!"
    tags={tags}
    visitUrl="https://www.konine.art"
    codeUrl="https://github.com/m-a-x-s-e-e-l-i-g/konijn"
    backHref="/#projects"
  />

  <!-- Content -->
  <main class="mx-auto max-w-4xl px-4 py-12">
    <ProjectOverview description={overviewDescription} highlights={highlights} stack={stack} status={status} />

    <!-- Gallery -->
    <section class="mb-12">
      <h2 class="mb-6 text-2xl font-bold">Gallery</h2>
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        <img src="/images/konine/10.jpg" alt="Konijn Artwork 10" class="rounded-lg shadow-lg" />
        <img src="/images/konine/15.jpg" alt="Konijn Artwork 15" class="rounded-lg shadow-lg" />
        <img src="/images/konine/17.jpg" alt="Konijn Artwork 17" class="rounded-lg shadow-lg" />
      </div>
    </section>

    <h2 class="text-2xl font-bold">Preview</h2>
    <AutoScrollScreenshot
			src="/images/projects/screenshot-konine-art.jpeg"
			alt="konine.art Full Website Screenshot"
			height={400}
			duration={15}
		/>

    <!-- Project Status -->
    <section>
      <h2 class="mb-6 text-2xl font-bold">Project Status</h2>
      <div class="rounded-lg border border-gray-800 bg-black p-8">
        <div class="mb-4 flex items-center">
          <div class="mr-3 h-3 w-3 rounded-full bg-green-500"></div>
          <span class="text-lg font-semibold text-green-500">Live & Active</span>
        </div>
        <p class="mb-6 text-gray-300">
          The Konijn Art Gallery is live and regularly updated with new artwork. Visit the website for the full experience and more creative works!
        </p>
        <div class="flex gap-4">
          <a
            href="https://www.konine.art"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center rounded-lg bg-white px-6 py-3 font-semibold text-black transition-colors hover:bg-gray-200"
          >
            Visit Konijn Art Gallery
            <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a
            href="https://github.com/m-a-x-s-e-e-l-i-g/konijn"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-black"
          >
            View on GitHub
            <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  </main>
</div>
