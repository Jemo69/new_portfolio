<script lang="ts">
	interface Props {
		title: string;
		description: string;
		canonical?: string;
		ogType?: 'website' | 'article';
		ogImage?: string;
		ogImageAlt?: string;
		twitterCard?: 'summary' | 'summary_large_image';
		articleData?: {
			publishedTime?: string;
			modifiedTime?: string;
			author?: string;
			tags?: string[];
		};
		jsonLd?: string;
	}

	let {
		title,
		description,
		canonical,
		ogType = 'website',
		ogImage = 'https://new-portfolio-ten-amber.vercel.app/logo.ico',
		ogImageAlt = 'JEMO CORE Logo',
		twitterCard = 'summary_large_image',
		articleData,
		jsonLd
	}: Props = $props();

	const siteName = 'JEMO CORE';
	const fullTitle = title.includes(siteName) ? title : `${title} // ${siteName}`;
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	{#if canonical}
		<link rel="canonical" href={canonical} />
	{/if}

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={ogType} />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:alt" content={ogImageAlt} />

	<!-- Twitter -->
	<meta name="twitter:card" content={twitterCard} />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />
	<meta name="twitter:image:alt" content={ogImageAlt} />

	{#if ogType === 'article' && articleData}
		{#if articleData.publishedTime}
			<meta property="article:published_time" content={articleData.publishedTime} />
		{/if}
		{#if articleData.modifiedTime}
			<meta property="article:modified_time" content={articleData.modifiedTime} />
		{/if}
		{#if articleData.author}
			<meta property="article:author" content={articleData.author} />
		{/if}
		{#if articleData.tags}
			{#each articleData.tags as tag}
				<meta property="article:tag" content={tag} />
			{/each}
		{/if}
	{/if}

	{#if jsonLd}
		<script type="application/ld+json">
			{@html jsonLd}
		</script>
	{/if}
</svelte:head>
