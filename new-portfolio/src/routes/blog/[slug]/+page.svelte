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
			: 'Read this blog post on JEMO CORE.'
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
						name: 'Jeremy Nwachukwu'
					},
					datePublished: formatDate(blogpost.createdAt),
					url: `https://new-portfolio-ten-amber.vercel.app/blog/${blogpost.slug}`
				})
			: ''
	);
</script>

{#if blogpost}
	<SEO
		title={blogpost.title}
		{description}
		canonical={`https://new-portfolio-ten-amber.vercel.app/blog/${blogpost.slug}`}
		ogType="article"
		articleData={{
			publishedTime: formatDate(blogpost.createdAt),
			author: 'Jeremy Nwachukwu'
		}}
		{jsonLd}
	/>

	<article class="max-w-4xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
		<header class="mb-8 border-b-2 border-stark-white pb-6 sm:mb-12">
			<div
				class="mb-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-gray-500"
			>
				<div class="h-2 w-2 rounded-full bg-green-500"></div>
				<span>Transmission Unit: {blogpost.views || 0}</span>
			</div>
			<h1
				class="text-4xl font-black leading-none text-stark-white uppercase tracking-tighter md:text-6xl lg:text-7xl"
			>
				{blogpost.title}
			</h1>
		</header>

		<BlogContent
			content={blogpost.content}
			class="font-medium leading-relaxed text-gray-300 md:text-lg"
		/>
	</article>
{:else}
	<div class="flex flex-col items-center justify-center min-h-[50vh]">
		<p class="text-xl font-bold text-red-500">There was an error loading the blog post.</p>
		<a href="/blog" class="mt-4 text-accent-500 hover:underline">Back to Blog</a>
	</div>
{/if}
