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
</main>

<style>
	@reference "tailwindcss";
</style>
