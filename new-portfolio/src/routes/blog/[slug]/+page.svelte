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

	<article class="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
		<header class="mb-10 sm:mb-14">
			<div class="mb-5 inline-flex items-center gap-3 rounded-full border border-secondary-300/20 bg-secondary-950/50 px-4 py-2 text-[11px] font-semibold tracking-[0.24em] text-text-500 uppercase">
				<span class="h-2.5 w-2.5 rounded-full bg-primary-500"></span>
				<span>{blogpost.views || 0} views</span>
			</div>
			<h1 class="max-w-4xl text-4xl font-black leading-[0.94] text-text-950 tracking-tight md:text-6xl lg:text-[4.5rem]">
				{blogpost.title}
			</h1>
			<div class="mt-6 h-px w-full max-w-3xl bg-gradient-to-r from-primary-400/70 via-secondary-300/30 to-transparent"></div>
		</header>

		<div class="rounded-[2.2rem] border border-secondary-300/16 bg-background-100/98 px-6 py-8 shadow-[0_28px_80px_-40px_rgba(8,6,45,0.82)] sm:px-10 sm:py-12">
			<BlogContent
				content={blogpost.content}
				class="font-normal leading-relaxed text-text-900 md:text-lg"
			/>
		</div>
	</article>
{:else}
	<div class="flex flex-col items-center justify-center min-h-[50vh]">
		<p class="text-xl font-bold text-red-500">There was an error loading the blog post.</p>
		<a href="/blog" class="mt-4 text-accent-500 hover:underline">Back to Blog</a>
	</div>
{/if}
