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
	<article class="flex h-full flex-col gap-8">
		<div class="flex flex-col gap-3">
			<div class="flex items-center gap-3 border-b-2 border-stark-white/25 pb-3 text-[10px] font-bold tracking-[0.2em] uppercase">
				<span class="block h-2 w-2 bg-stark-white"></span>
				<span class="text-stark-white/60">Data transmission</span>
			</div>
			<h2 class="m-0 text-2xl font-black tracking-tight text-stark-white uppercase">
				{blog.title}
			</h2>
			<p class="line-clamp-3 text-sm leading-6 text-stark-white/65">
				{blog.content.replace(/[#*`>]/g, '').slice(0, 140)}...
			</p>
		</div>

		<div class="mt-auto flex items-center justify-between gap-4 border-t-2 border-stark-white/25 pt-4">
			<span class="text-[10px] font-bold tracking-[0.2em] text-stark-white/50 uppercase">
				{blog.views || 0} views
			</span>
			<a href={`/blog/${blog.slug}`} class="no-underline">
				<Button variant="secondary" class="px-4 py-2 text-xs">Access terminal</Button>
			</a>
		</div>
	</article>
</Card>