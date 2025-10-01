<script lang="ts">
	import Footer from '$lib/component/Footer/Footer.svelte';
	import Card from '$lib/component/Card/Card.svelte';
	import Button from '$lib/component/Button/Button.svelte';
	import BlogCard from '$lib/component/BlogCard/BlogCard.svelte';

	const fakePost = {
		title: 'My First Blog Post',
		excerpt: 'This is a short excerpt of my very first blog post. I hope you like it!',
		slug: 'my-first-blog-post'
	};
</script>

<main class="bg-background-950 p-4 text-text-50 md:p-8">
	<h1 class="mb-8 text-4xl font-bold">Component Library</h1>

	<section class="mb-8 bg-background-950">
		<h2 class="mb-4 text-2xl font-bold">Card</h2>
		<Card>This is a card component.</Card>
	</section>

	<section class="mb-8">
		<h2 class="mb-4 text-2xl font-bold">Button</h2>
		<Button>Click Me</Button>
	</section>

	<section class="mb-8">
		<h2 class="mb-4 text-2xl font-bold">Blog Card</h2>
		<div class="max-w-md">
			<BlogCard post={fakePost} />
		</div>
	</section>
</main>

<style>
	@reference "tailwindcss";
</style>
