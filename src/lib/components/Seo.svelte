<script lang="ts">
	import { page } from '$app/state';
	import { SITE_NAME, SITE_URL, canonicalUrl, structuredData, jsonLdScript } from '$lib/seo';

	let {
		title,
		description,
		image = '/favicon.png',
		imageAlt = 'MAXmade logo',
		largeImage = false
	}: {
		title: string;
		description: string;
		image?: string;
		imageAlt?: string;
		largeImage?: boolean;
	} = $props();
	const canonical = $derived(canonicalUrl(page.url.pathname));
	const imageUrl = $derived(new URL(image, SITE_URL).href);
	const jsonLd = $derived(
		jsonLdScript(structuredData(page.url.pathname, title, description, imageUrl))
	);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="author" content="Max Seelig" />
	<link rel="canonical" href={canonical} />
	<meta name="robots" content="index, follow, max-image-preview:large" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={SITE_NAME} />
	<meta property="og:locale" content="en_GB" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={imageUrl} />
	<meta property="og:image:alt" content={imageAlt} />
	<meta name="twitter:card" content={largeImage ? 'summary_large_image' : 'summary'} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />
	<meta name="twitter:image:alt" content={imageAlt} />
	<!-- The script wrapper is fixed and jsonLdScript escapes HTML inside every data value. -->
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html jsonLd}
</svelte:head>
