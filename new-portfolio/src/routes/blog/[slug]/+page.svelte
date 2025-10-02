<script lang="ts">
	import type { PageData } from './$types';

	let { data } = $props<{ data: PageData }>();
	const blogpost = await data.post;
</script>

<svelte:head>
	<title>{blogpost.title}</title>
</svelte:head>
{#if blogpost}
	<article>
		<h1>{blogpost.title}</h1>
		<div>{@html blogpost.content}</div>
	</article>
{:else}
	<p>there was an error loading the file</p>
{/if}

