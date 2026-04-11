<script lang="ts">
	import Card from '../Card/Card.svelte';
	import Button from '../Button/Button.svelte';

	let { blog } = $props<{
		blog: {
			slug: string;
			title: string;
			content: string;
			views: number;
		};
	}>();
</script>

<Card>
	<article class="flex flex-col gap-6">
		<div class="flex flex-col gap-2">
			<div class="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em]">
				<div class="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
				<span class="text-gray-500">DATA TRANSMISSION:</span>
				<span class="text-stark-white">{blog.views || 0} UNITS</span>
			</div>
			<h2 class="m-0 text-2xl font-black uppercase tracking-tight text-stark-white">
				{blog.title}
			</h2>
		</div>
		
		<a href={`/blog/${blog.slug}`} class="no-underline self-start">
			<Button variant="secondary" class="py-2 text-xs">Access Terminal</Button>
		</a>
	</article>
</Card>
