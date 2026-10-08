<script lang="ts">
	import { getAnalytics } from '../data.remote';
	import { formatViews } from '$lib/views';

	let posts = $state<any[]>([]);
	let totals = $state({ views: 0, reads: 0, rereads: 0, uniqueReaders: 0 });
	let loaded = $state(false);

	$effect(() => {
		getAnalytics().then((r) => {
			posts = r.posts;
			totals = r.totals;
			loaded = true;
		});
	});

	const share = (views: number, rereads: number) =>
		views > 0 ? Math.round((rereads / views) * 100) : 0;

	const stats = $derived([
		{ label: 'Views', value: formatViews(totals.views), note: 'All reads and rereads' },
		{ label: 'Reads', value: formatViews(totals.reads), note: 'First time on a post' },
		{ label: 'Rereads', value: formatViews(totals.rereads), note: 'Came back for more' },
		{ label: 'Readers', value: formatViews(totals.uniqueReaders), note: 'Distinct sessions' }
	]);
</script>

<div class="flex items-center justify-between border-2 border-stark-white bg-true-black px-5 py-3">
	<h1 class="text-sm font-black tracking-[0.24em] uppercase">Analytics</h1>
	<p class="hidden text-xs font-bold tracking-[0.18em] text-stark-white/50 uppercase sm:block">
		Reads vs rereads
	</p>
</div>

{#if loaded}
	<div class="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
		{#each stats as stat}
			<div class="flex flex-col gap-2 border-2 border-stark-white bg-true-black p-6">
				<span class="text-4xl font-black tracking-tight text-stark-white sm:text-5xl">
					{stat.value}
				</span>
				<span class="text-xs font-bold tracking-[0.2em] text-stark-white/60 uppercase">
					{stat.label}
				</span>
				<span class="text-[10px] font-bold tracking-[0.14em] text-stark-white/35 uppercase">
					{stat.note}
				</span>
			</div>
		{/each}
	</div>

	{#if posts.length > 0}
		<div class="mt-10 overflow-x-auto border-2 border-stark-white">
			<table class="w-full text-sm">
				<thead>
					<tr
						class="border-b-2 border-stark-white bg-true-black text-left text-xs font-bold tracking-[0.16em] text-stark-white uppercase"
					>
						<th class="px-5 py-4">Post</th>
						<th class="px-5 py-4 text-right">Views</th>
						<th class="px-5 py-4 text-right">Reads</th>
						<th class="px-5 py-4 text-right">Rereads</th>
						<th class="hidden px-5 py-4 md:table-cell">Reread share</th>
					</tr>
				</thead>
				<tbody>
					{#each posts as post}
						{@const pct = share(post.views, post.rereads)}
						<tr class="border-b border-stark-white/15 last:border-b-0 hover:bg-true-black">
							<td class="max-w-[16rem] px-5 py-4">
								<a
									href="/blog/{post.slug}"
									class="block truncate font-bold text-stark-white transition-colors duration-150 hover:text-stark-white/60"
								>
									{post.title}
								</a>
							</td>
							<td class="px-5 py-4 text-right text-stark-white/70">{formatViews(post.views)}</td>
							<td class="px-5 py-4 text-right text-stark-white/70">{formatViews(post.reads)}</td>
							<td class="px-5 py-4 text-right text-stark-white/70">{formatViews(post.rereads)}</td>
							<td class="hidden px-5 py-4 md:table-cell">
								<div class="flex items-center gap-3">
									<div class="h-2.5 w-24 border border-stark-white/40 bg-true-black">
										<div class="h-full bg-stark-white" style="width: {pct}%"></div>
									</div>
									<span class="text-xs font-bold tracking-[0.14em] text-stark-white/50">
										{pct}%
									</span>
								</div>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>

		<p class="mt-4 max-w-3xl text-xs leading-6 text-stark-white/50">
			A <span class="text-stark-white/80">read</span> is a session's first visit to a post; a
			<span class="text-stark-white/80">reread</span> is any visit after that, counted at most once
			every five minutes. Reads plus rereads equals views.
		</p>
	{:else}
		<div class="mt-10 border-2 border-dashed border-stark-white/40 p-16 text-center">
			<p class="text-sm font-bold tracking-[0.24em] text-stark-white uppercase">
				No posts yet
			</p>
		</div>
	{/if}
{/if}

<style>
	@reference 'tailwindcss';
</style>
