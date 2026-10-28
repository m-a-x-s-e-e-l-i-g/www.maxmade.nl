<script lang="ts">
	import { tick } from 'svelte';
	import type { PhotoAlbum } from '$lib/photography/types';
	import { mediaUrl, photoSrc, photoSrcset } from '$lib/photography/images';
	import { photoRows } from '$lib/photography/layout';
	let { album }: { album: PhotoAlbum } = $props();
	let width = $state(1200);
	let selected = $state<number | null>(null);
	let viewer: HTMLDialogElement;
	let pointer: { x: number; y: number } | null = null;
	let imageFailed = $state(false);
	const rows = $derived(photoRows(album.photos, width));
	const current = $derived(selected === null ? null : album.photos[selected]);
	async function openPhoto(index: number, event: MouseEvent) {
		if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
		event.preventDefault();
		selected = index;
		imageFailed = false;
		await tick();
		viewer.showModal();
	}
	function move(direction: number) {
		if (selected === null) return;
		selected = Math.max(0, Math.min(album.photos.length - 1, selected + direction));
		imageFailed = false;
	}
	function closeViewer() {
		viewer.close();
		selected = null;
	}
	function keydown(event: KeyboardEvent) {
		if (selected === null || !viewer?.open) return;
		if (event.key === 'ArrowLeft') {
			event.preventDefault();
			move(-1);
		}
		if (event.key === 'ArrowRight') {
			event.preventDefault();
			move(1);
		}
	}
	function swipeEnd(event: PointerEvent) {
		if (!pointer) return;
		const dx = event.clientX - pointer.x;
		const dy = event.clientY - pointer.y;
		if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.4) move(dx < 0 ? 1 : -1);
		pointer = null;
	}
</script>

<svelte:window onkeydown={keydown} />
<div class="photo-grid" bind:clientWidth={width}>
	{#each rows as row, rowIndex (row.photos[0].photo.id)}
		<div class="photo-row" style:height={`${row.height}px`} style:width={`${row.width}px`}>
			{#each row.photos as { photo, index } (photo.id)}
				<a
					class="photograph"
					href={photoSrc(photo)}
					style:flex={photo.width / photo.height}
					onclick={(event) => openPhoto(index, event)}
					aria-label={`View ${photo.caption || `${album.title}, photograph ${index + 1}`}`}
				>
					<img
						src={mediaUrl(photo.variants[0])}
						srcset={photoSrcset(photo)}
						sizes="(max-width: 599px) calc(100vw - 40px), (max-width: 999px) 50vw, 33vw"
						width={photo.width}
						height={photo.height}
						alt={photo.caption || `${album.title}, photograph ${index + 1}`}
						loading={rowIndex === 0 ? 'eager' : 'lazy'}
						decoding="async"
					/>
					<span class="view-indicator" aria-hidden="true">↗</span>
				</a>
			{/each}
		</div>
	{/each}
</div>

<dialog
	bind:this={viewer}
	class="photo-viewer"
	aria-label={`${album.title} photograph viewer`}
	onclose={() => (selected = null)}
>
	{#if current && selected !== null}
		<div class="viewer-header">
			<span>{album.title}</span><span aria-live="polite"
				>{selected + 1} / {album.photos.length}</span
			><button type="button" onclick={closeViewer} aria-label="Close photograph viewer">✕</button>
		</div>
		<div
			class="viewer-image"
			onpointerdown={(event) => {
				pointer = { x: event.clientX, y: event.clientY };
			}}
			onpointerup={swipeEnd}
			onpointercancel={() => (pointer = null)}
			role="group"
			aria-label="Photograph"
		>
			{#key current.id}<img
					src={photoSrc(current)}
					alt={current.caption || `${album.title}, photograph ${selected + 1}`}
					onerror={() => (imageFailed = true)}
					draggable="false"
				/>{/key}
			{#if imageFailed}<p role="status">
					This photograph couldn’t load. <a href={photoSrc(current)}>Open image</a>
				</p>{/if}
		</div>
		<div class="viewer-footer">
			<button
				type="button"
				onclick={() => move(-1)}
				disabled={selected === 0}
				aria-label="Previous photograph">←</button
			>
			<p>{current.caption || ' '}</p>
			<button
				type="button"
				onclick={() => move(1)}
				disabled={selected === album.photos.length - 1}
				aria-label="Next photograph">→</button
			>
		</div>
	{/if}
</dialog>

<style>
	.photo-grid {
		display: flex;
		flex-direction: column;
		gap: 12px;
		min-width: 0;
		overflow: hidden;
	}
	.photo-row {
		display: flex;
		gap: 12px;
		max-width: 100%;
	}
	.photograph {
		display: block;
		position: relative;
		min-width: 0;
		overflow: hidden;
		background: oklch(20% 0.004 80);
	}
	.photograph img {
		display: block;
		height: 100%;
		width: 100%;
		object-fit: contain;
	}
	.view-indicator {
		position: absolute;
		right: 0.75rem;
		bottom: 0.75rem;
		background: oklch(13% 0.004 80 / 0.8);
		color: oklch(97% 0.005 80);
		width: 2rem;
		height: 2rem;
		display: grid;
		place-items: center;
		opacity: 0;
		transition: opacity 0.2s;
	}
	.photograph:focus-visible .view-indicator {
		opacity: 1;
	}
	.photo-viewer {
		position: fixed;
		inset: 0;
		max-width: none;
		max-height: none;
		width: 100vw;
		height: 100dvh;
		margin: 0;
		padding: max(0.5rem, env(safe-area-inset-top)) max(0.75rem, env(safe-area-inset-right))
			max(0.5rem, env(safe-area-inset-bottom)) max(0.75rem, env(safe-area-inset-left));
		border: 0;
		background: oklch(10% 0.004 80);
		color: oklch(96% 0.005 80);
	}
	.photo-viewer[open] {
		display: grid;
		grid-template-rows: 52px minmax(0, 1fr) minmax(56px, auto);
	}
	.photo-viewer::backdrop {
		background: oklch(10% 0.004 80);
	}
	:global(body:has(.photo-viewer[open])) {
		overflow: hidden;
	}
	.viewer-header,
	.viewer-footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		font-size: 0.85rem;
	}
	.viewer-header > span:first-child {
		flex: 1;
	}
	.viewer-header > span:nth-child(2) {
		color: oklch(72% 0.005 80);
		font-variant-numeric: tabular-nums;
	}
	button {
		display: grid;
		place-items: center;
		width: 48px;
		height: 48px;
		flex-shrink: 0;
		cursor: pointer;
		font-size: 1.4rem;
		border: 1px solid oklch(36% 0.004 80);
	}
	button:hover:not(:disabled) {
		background: oklch(26% 0.004 80);
	}
	button:disabled {
		opacity: 0.3;
		cursor: default;
	}
	.viewer-image {
		position: relative;
		min-height: 0;
		display: grid;
		place-items: center;
		overflow: hidden;
		touch-action: pan-y;
	}
	.viewer-image img {
		width: 100%;
		height: 100%;
		min-height: 0;
		max-height: 100%;
		object-fit: contain;
		user-select: none;
	}
	.viewer-image p {
		position: absolute;
		background: oklch(15% 0.004 80);
		padding: 1rem;
	}
	.viewer-image a {
		text-decoration: underline;
	}
	.viewer-footer p {
		max-width: 70ch;
		text-align: center;
		padding-block: 0.75rem;
		line-height: 1.5;
	}
	@media (min-width: 700px) {
		.photo-viewer {
			padding-inline: 2rem;
		}
	}
	@media (hover: hover) {
		.photograph:hover .view-indicator {
			opacity: 1;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.view-indicator {
			transition: none;
		}
	}
</style>
