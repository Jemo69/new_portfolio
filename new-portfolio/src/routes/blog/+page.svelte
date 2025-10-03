<script>
	import { getBlog } from './data.remote';
	import BlogCard from '$lib/component/BlogCard/BlogCard.svelte';

	const BlogPosts = getBlog();
</script>

<svelte:head>
	<title>Jemo blog</title>
</svelte:head>
<div class="h-screen">
	{#await BlogPosts}
		<p class="text-2xl font-extrabold text-accent-500">the post are loading</p>
	{:then posts}
		{#if posts.length > 0}
			<main class="grid grid-cols-3 gap-4">
				{#each posts as post}
					<BlogCard blog={post}></BlogCard>
				{/each}
			</main>
		{:else}
			<p class="">No blog posts found</p>
		{/if}
	{:catch error}
		<p class="text-2xl font-extrabold text-red-500">An error has occured</p>
	{/await}
</div>
