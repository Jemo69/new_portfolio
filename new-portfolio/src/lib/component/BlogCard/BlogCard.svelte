<script lang="ts">
	import Card from '../Card/Card.svelte';
	import Button from '../Button/Button.svelte';

	let { blog } = $props<{
		blog: {
			slug: string;
			title: string;
			content: string; // This is not used in the template, but I'll leave it.
		};
	}>();
</script>

<Card>
	<article class="blog-card-content">
		<h2>{blog.title}</h2>
		<a href={`/blog/${blog.slug}`}>
			<Button>Read More</Button>
		</a>
	</article>
</Card>

<style>
    .blog-card-content {
        display: flex;
        flex-direction: column;
        gap: 1rem; /* 16px */
    }

	h2 {
		margin-top: 0;
		font-size: 1.5rem; /* 24px */
        font-weight: 600;
        color: var(--color-text-main);
        margin-bottom: 0.5rem; /* 8px */
	}

	a {
		text-decoration: none;
        align-self: flex-start; /* Prevent button from stretching */
	}
</style>