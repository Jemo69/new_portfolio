<script lang="ts">
	import BlogCard from '$lib/component/BlogCard/BlogCard.svelte';
	
	let { data } = $props<{
		data: {
			posts: any[];
		}
	}>();

	const posts = $derived(data.posts || []);
</script>

<svelte:head>
	<title>Blog // JEMO CORE</title>
</svelte:head>

{#if posts.length > 0}
	<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each posts as post}
			<BlogCard blog={post} />
		{/each}
	</div>
{:else}
	<div class="border-2 border-dashed border-stark-white p-12 text-center bg-true-black">
		<p class="text-xl font-black uppercase tracking-[0.3em] text-stark-white">No Blog Post Found</p>
	</div>
{/if}

