<script lang="ts">
	import Card from '../Card/Card.svelte';
	import Button from '../Button/Button.svelte';

	let { blog } = $props<{
		blog: {
			slug: string;
			title: string;
			content: string;
		};
	}>();
</script>

<Card>
	<article>
		<h2>{blog.title}</h2>
		<a href={`/blog/${blog.slug}`}>
			<Button>Read More</Button>
		</a>
	</article>
</Card>

<style>
	h2 {
		margin-top: 0;
		font-size: 1.5rem;
	}
	p {
		margin-bottom: 1.5rem;
	}
	a {
		text-decoration: none;
	}
</style>

