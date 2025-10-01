<script lang="ts">
	import Card from '../Card/Card.svelte';
	import Button from '../Button/Button.svelte';

	let { post } = $props<{
		post: {
			title: string;
			excerpt: string;
			slug: string;
		};
	}>();
</script>

<Card>
	<article>
		<h2>{post.title}</h2>
		<p>{post.excerpt}</p>
		<a href={`/blog/${post.slug}`}>
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