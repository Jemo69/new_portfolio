<script lang="ts">
	import BlogContent from '$lib/components/ui/BlogContent.svelte';
	import SEO from '$lib/components/SEO.svelte';

	interface PostType {
		title: string;
		content: string;
		slug: string;
		views: number;
		createdAt?: Date;
	}
	let { data } = $props<{
		data: {
			post?: PostType;
		};
	}>();

	const blogpost = $derived(data.post);

	const formatDate = (date: any) => {
		if (!date) return undefined;
		try {
			const d = typeof date === 'string' ? date.replace(/^"|"$/g, '') : date;
			const parsed = new Date(d);
			return isNaN(parsed.getTime()) ? undefined : parsed.toISOString();
		} catch (e) {
			return undefined;
		}
	};

	const description = $derived(
		blogpost?.content
			? blogpost.content
					.replace(/[#*`]/g, '')
					.slice(0, 160)
					.trim() + '...'
			: 'Read this blog post by Jeremy Nwachukwu.'
	);

	const jsonLd = $derived(
		blogpost
			? JSON.stringify({
					'@context': 'https://schema.org',
					'@type': 'BlogPosting',
					headline: blogpost.title,
					description: description,
					author: {
						'@type': 'Person',
						name: 'Ifeanyichukwu Jeremy Nwachukwu'
					},
					datePublished: formatDate(blogpost.createdAt),
					url: `https://new-portfolio-ten-amber.vercel.app/blog/${blogpost.slug}`
				})
			: ''
	);

	const postDate = $derived(blogpost?.createdAt ? formatDate(blogpost.createdAt) : undefined);
</script>

{#if blogpost}
	<SEO
		title={blogpost.title}
		{description}
		canonical={`https://new-portfolio-ten-amber.vercel.app/blog/${blogpost.slug}`}
		ogType="article"
		articleData={{
			publishedTime: formatDate(blogpost.createdAt),
			author: 'Ifeanyichukwu Jeremy Nwachukwu'
		}}
		{jsonLd}
	/>

	<article class="mx-auto max-w-5xl px-4 py-6 sm:px-6">
		<header class="mb-12">
			<div class="mb-6 inline-flex items-center gap-3 border-2 border-stark-white bg-true-black px-4 py-2">
				<span class="h-2 w-2 bg-stark-white"></span>
				<span class="text-[11px] font-bold tracking-[0.24em] text-stark-white uppercase">
					Jeremy Nwachukwu // Field notes
				</span>
			</div>
			<h1 class="max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.02em] text-stark-white md:text-6xl lg:text-[4.5rem]">
				{blogpost.title}
			</h1>
			<div class="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-bold tracking-[0.18em] uppercase">
				<span class="text-stark-white/60">{blogpost.views || 0} views</span>
				{#if postDate}
					<span class="text-stark-white/40">
						{new Date(postDate).toLocaleDateString('en-US', {
							year: 'numeric',
							month: 'long',
							day: 'numeric'
						})}
					</span>
				{/if}
				<span class="h-2 w-2 bg-stark-white"></span>
			</div>
		</header>

		<div class="border-2 border-stark-white bg-true-black px-6 py-8 sm:px-10 sm:py-12">
			<BlogContent
				content={blogpost.content}
				class="font-normal leading-relaxed text-stark-white/90 md:text-lg"
			/>
		</div>
	</article>
{:else}
	<div class="flex min-h-[50vh] flex-col items-center justify-center">
		<p class="text-xl font-bold text-stark-white">There was an error loading the post.</p>
		<a href="/blog" class="mt-4 font-bold tracking-[0.16em] text-stark-white uppercase underline underline-offset-4"
			>Back to blog</a
		>
	</div>
{/if}