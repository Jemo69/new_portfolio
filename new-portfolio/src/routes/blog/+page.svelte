<script lang="ts">
	import BlogCard from '$lib/component/BlogCard/BlogCard.svelte';
	import SEO from '$lib/components/SEO.svelte';

	let { data } = $props<{
		data: {
			posts: any[];
		};
	}>();

	const posts = $derived(data.posts || []);
	const [featured, ...rest] = $derived(posts.length > 0 ? posts : [undefined, ...[]]);
</script>

<SEO
	title="Blog"
	description="Read the latest insights on tactical web development, Svelte, and engineering challenges from Jeremy Nwachukwu."
	canonical="https://new-portfolio-ten-amber.vercel.app/blog"
/>

<div class="flex flex-col gap-12">
	<div class="flex items-center justify-between border-2 border-stark-white bg-true-black px-5 py-3">
		<h1 class="text-sm font-black tracking-[0.24em] uppercase">Transmissions</h1>
		<p class="hidden text-xs font-bold tracking-[0.18em] text-stark-white/50 uppercase sm:block">
			Field notes & posts
		</p>
	</div>

	{#if posts.length > 0}
		{#if featured}
			<article class="border-2 border-stark-white bg-true-black p-8 sm:p-12">
				<div class="flex flex-col gap-5">
					<div class="flex items-center gap-3 border-b-2 border-stark-white/25 pb-4 text-[11px] font-bold tracking-[0.24em] uppercase">
						<span class="block h-2 w-2 bg-stark-white"></span>
						<span class="text-stark-white/60">Latest transmission</span>
					</div>
					<h2 class="max-w-3xl text-3xl font-black leading-[1.05] tracking-tight uppercase sm:text-5xl">
						{featured.title}
					</h2>
					<p class="max-w-2xl text-base leading-7 text-stark-white/70">
						{featured.content.replace(/[#*`>]/g, '').slice(0, 220)}...
					</p>
					<div class="mt-2">
						<a href={`/blog/${featured.slug}`} class="no-underline">
							<span class="inline-block border-2 border-stark-white bg-onyx px-5 py-3 text-sm font-bold tracking-[0.16em] text-stark-white uppercase transition-colors duration-150 hover:bg-stark-white hover:text-true-black">
								Read the post →
							</span>
						</a>
					</div>
				</div>
			</article>
		{/if}

		{#if rest.length > 0}
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each rest as post}
					<BlogCard blog={post} />
				{/each}
			</div>
		{/if}
	{:else}
		<div class="border-2 border-dashed border-stark-white/40 bg-true-black p-16 text-center">
			<p class="text-sm font-bold tracking-[0.24em] text-stark-white uppercase">
				No posts yet
			</p>
		</div>
	{/if}
</div>