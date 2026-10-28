<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import PhotoGallery from '$lib/components/PhotoGallery.svelte';
	import { photoSrc } from '$lib/photography/images';
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
	const cover = $derived(
		data.album.photos.find((photo) => photo.id === data.album.coverId) ?? data.album.photos[0]
	);
</script>

<Seo
	title={`${data.album.title} — Photography by Max Seelig | MAXmade`}
	description={data.album.description}
	image={cover ? photoSrc(cover) : '/favicon.png'}
	imageAlt={`${data.album.title} photograph by Max Seelig`}
	largeImage={Boolean(cover)}
/>
<main class="album-page">
	<header>
		<a class="back" href="/photography">← All albums</a>
		<div class="album-heading">
			<h1>{data.album.title}</h1>
			<p>{data.album.photos.length} photographs</p>
		</div>
		<p class="description">{data.album.description}</p>
	</header>
	{#if data.album.photos.length}<PhotoGallery album={data.album} />{:else}<p class="empty">
			Photographs will appear here when this album is updated.
		</p>{/if}
	<footer>
		<a href="/photography">← All albums</a>{#each data.otherAlbums as other (other.slug)}<a
				href={`/photography/${other.slug}`}>{other.title} <span aria-hidden="true">↗</span></a
			>{/each}
	</footer>
</main>

<style>
	.album-page {
		min-height: 100vh;
		color: oklch(96% 0.005 80);
		background: oklch(13% 0.004 80);
		padding: 7rem clamp(1.25rem, 4vw, 4rem) 2rem;
	}
	header,
	footer {
		max-width: 1440px;
		margin-inline: auto;
	}
	.back {
		display: inline-flex;
		align-items: center;
		min-height: 44px;
		font-size: 0.8rem;
		color: oklch(74% 0.005 80);
	}
	.album-heading {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem 2rem;
		justify-content: space-between;
		align-items: baseline;
		margin-top: 1.5rem;
	}
	h1 {
		font-size: clamp(3.5rem, 8vw, 7rem);
		font-weight: 500;
		letter-spacing: -0.06em;
		line-height: 1.05;
	}
	.album-heading p,
	.description {
		color: oklch(74% 0.005 80);
		font-size: 0.9rem;
	}
	.description {
		margin-block: 1rem 3rem;
	}
	:global(.album-page > .photo-grid) {
		max-width: 1600px;
		margin-inline: auto;
	}
	footer {
		display: flex;
		justify-content: space-between;
		gap: 2rem;
		border-top: 1px solid oklch(31% 0.004 80);
		padding-top: 1.5rem;
		margin-top: 4rem;
		font-size: 0.85rem;
	}
	footer a {
		min-height: 44px;
		display: flex;
		align-items: start;
	}
	.empty {
		padding-block: 4rem;
		color: oklch(74% 0.005 80);
	}
</style>
