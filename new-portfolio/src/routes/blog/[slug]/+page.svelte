<script lang="ts">
	interface PostType {
		title: string;
		content: string;
		slug: string;
	}
	let { data } = $props<{
		data: {
			post?: PostType;
		};
	}>();
	console.log(data.post);
	const blogpost = data.post[0];
</script>

<svelte:head>
	<title>{blogpost.title}</title>
</svelte:head>
{#if blogpost}
	<article>
		<h1 class="p-5 text-3xl font-black text-accent-500">{blogpost.title}</h1>
		<div class="p-5 text-lg text-text-50">{@html blogpost.content}</div>
	</article>
{:else}
	<p>there was an error loading the file</p>
{/if}

