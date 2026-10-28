<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { photoSrc, photoSrcset } from '$lib/photography/images';
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
</script>

<Seo
	title="Photography by Max Seelig | MAXmade"
	description="Parkour and personal favourites. Explore photographs by Max Seelig, collected into albums."
/>

<main class="photography-home">
	<header class="intro">
		<p class="eyebrow">Max Seelig / Photography</p>
		<h1>Mostly people<br /><span>jumping things.</span></h1>
		<div class="intro-bottom">
			<p>And a few other favourites.</p>
			<span>Selected albums <span aria-hidden="true">↙</span></span>
		</div>
	</header>
	{#if data.gallery?.albums.length}
		<div class="albums">
			{#each data.gallery.albums as album, index (album.slug)}
				{@const cover = album.photos.find((photo) => photo.id === album.coverId) ?? album.photos[0]}
				<a class="album" class:second={index % 2 === 1} href={`/photography/${album.slug}`}>
					<div class="album-cover">
						{#if cover}<img
								src={photoSrc(cover)}
								srcset={photoSrcset(cover)}
								sizes="(min-width: 900px) 55vw, 100vw"
								width={cover.width}
								height={cover.height}
								alt={`${album.title} album cover`}
								loading={index === 0 ? 'eager' : 'lazy'}
								fetchpriority={index === 0 ? 'high' : 'auto'}
							/>{/if}
						<span class="open-album" aria-hidden="true">↗</span>
					</div>
					<div class="album-label">
						<h2>{album.title}</h2>
						<span>{album.photos.length} photographs</span>
					</div>
					<p>{album.description}</p>
				</a>
			{/each}
		</div>
	{:else}
		<div class="empty">
			<h2>The albums are on their way.</h2>
			<p>In the meantime, you can find more photos on Instagram.</p>
			<a href="https://www.instagram.com/maxseelig_photography/"
				>View photographs on Instagram <span aria-hidden="true">↗</span></a
			>
		</div>
	{/if}
	<footer>
		<span>Photographs by Max Seelig</span><a href="https://www.instagram.com/maxseelig_photography/"
			>More on Instagram <span aria-hidden="true">↗</span></a
		>
	</footer>
</main>

<style>
	.photography-home {
		--ink: oklch(96% 0.005 80);
		--muted: oklch(72% 0.008 80);
		background: oklch(13% 0.004 80);
		color: var(--ink);
		min-height: 100vh;
		padding: 7.5rem clamp(1.25rem, 5vw, 6rem) 2rem;
	}
	.intro,
	.albums,
	footer,
	.empty {
		max-width: 1440px;
		margin-inline: auto;
	}
	.eyebrow {
		color: var(--muted);
		font-size: 0.8rem;
		letter-spacing: 0.15em;
		text-transform: uppercase;
	}
	h1 {
		font-size: clamp(3.2rem, 6vw, 6rem);
		line-height: 0.98;
		font-weight: 500;
		letter-spacing: -0.065em;
		margin-top: 1.5rem;
	}
	h1 span {
		color: var(--muted);
	}
	.intro-bottom {
		display: flex;
		justify-content: space-between;
		align-items: end;
		gap: 2rem;
		padding-block: 2rem 1.75rem;
		border-bottom: 1px solid oklch(31% 0.004 80);
		color: var(--muted);
	}
	.intro-bottom > span {
		white-space: nowrap;
		font-size: 0.85rem;
	}
	.albums {
		display: grid;
		gap: 3rem;
		padding-block: 2rem 6rem;
		align-items: start;
	}
	.album {
		min-width: 0;
		text-decoration: none;
		color: inherit;
	}
	.album-cover {
		position: relative;
		overflow: hidden;
		aspect-ratio: 4/3;
		background: oklch(20% 0.004 80);
	}
	.album-cover img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.4s ease-out;
	}
	.open-album {
		position: absolute;
		right: 1rem;
		bottom: 1rem;
		display: grid;
		place-items: center;
		width: 3rem;
		height: 3rem;
		color: oklch(98% 0.004 80);
		background: oklch(14% 0.004 80 / 0.8);
		font-size: 1.5rem;
	}
	.album-label {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		gap: 1rem;
		margin-top: 1.25rem;
	}
	h2 {
		font-size: clamp(1.75rem, 3vw, 2.5rem);
		font-weight: 500;
		letter-spacing: -0.035em;
	}
	.album-label > span,
	.album > p {
		color: var(--muted);
		font-size: 0.85rem;
	}
	.album > p {
		margin-top: 0.5rem;
	}
	footer {
		display: flex;
		flex-wrap: wrap;
		gap: 1.5rem;
		justify-content: space-between;
		border-top: 1px solid oklch(31% 0.004 80);
		padding-top: 1.5rem;
		font-size: 0.8rem;
		color: var(--muted);
	}
	footer a {
		min-height: 44px;
	}
	.empty {
		padding-block: 4rem 6rem;
	}
	.empty p {
		margin-block: 1rem 2rem;
		color: var(--muted);
	}
	.empty a {
		text-decoration: underline;
		text-underline-offset: 0.3em;
	}
	@media (min-width: 900px) {
		.albums {
			grid-template-columns: 1.15fr 0.85fr;
			gap: 5vw;
		}
		.second {
			margin-top: 6rem;
		}
		.second .album-cover {
			aspect-ratio: 4/5;
		}
	}
	@media (hover: hover) and (prefers-reduced-motion: no-preference) {
		.album:hover img {
			transform: scale(1.025);
		}
	}
	@media (max-width: 520px) {
		.intro-bottom > span {
			display: none;
		}
		.album-label {
			flex-wrap: wrap;
			gap: 0.25rem;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.album-cover img {
			transition: none;
		}
	}
</style>
