<script lang="ts">
	import BlogContent from '$lib/components/ui/BlogContent.svelte';

	interface PostType {
		title: string;
		content: string;
		slug: string;
		views: number;
	}
	let { data } = $props<{
		data: {
			post?: PostType;
		};
	}>();

	const blogpost = $derived(data.post);
</script>

<svelte:head>
	{#if blogpost}
		<title>{blogpost.title}</title>
	{/if}
</svelte:head>

{#if blogpost}
	<article class="max-w-4xl mx-auto p-6">
		<header class="mb-12 border-b-2 border-stark-white pb-6">
			<div class="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-4">
				<div class="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
				<span>Transmission Unit: {blogpost.views || 0}</span>
			</div>
			<h1 class="text-5xl font-black text-stark-white uppercase tracking-tighter leading-none">{blogpost.title}</h1>
		</header>
		
		<BlogContent content={blogpost.content} class="text-lg leading-relaxed text-gray-300 font-medium" />
	</article>
{:else}
	<div class="flex flex-col items-center justify-center min-h-[50vh]">
		<p class="text-xl font-bold text-red-500">There was an error loading the blog post.</p>
		<a href="/blog" class="mt-4 text-accent-500 hover:underline">Back to Blog</a>
	</div>
{/if}

