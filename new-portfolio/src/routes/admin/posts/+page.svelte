<script lang="ts">
	import { getPosts, deletePost } from '../data.remote';

	let posts = $state<any[]>([]);
	let loaded = $state(false);
	let deleting = $state<string | null>(null);

	$effect(() => {
		getPosts().then((p) => {
			posts = p;
			loaded = true;
		});
	});

	async function handleDelete(slug: string) {
		if (!confirm('Delete this post?')) return;
		deleting = slug;
		await deletePost({ slug });
		posts = posts.filter((p) => p.slug !== slug);
		deleting = null;
	}
</script>

<div class="flex items-center justify-between gap-4 border-2 border-stark-white bg-true-black px-5 py-3">
	<h1 class="text-sm font-black tracking-[0.24em] uppercase">Blog posts</h1>
	<a
		href="/admin/posts/new"
		class="border-2 border-stark-white bg-stark-white px-4 py-2 text-sm font-bold tracking-[0.14em] text-true-black uppercase transition-colors duration-150 hover:bg-true-black hover:text-stark-white"
	>
		+ New post
	</a>
</div>

{#if loaded}
	{#if posts.length > 0}
		<div class="mt-10 overflow-x-auto border-2 border-stark-white">
			<table class="w-full text-sm">
				<thead>
					<tr class="border-b-2 border-stark-white bg-true-black text-left text-xs font-bold tracking-[0.16em] text-stark-white uppercase">
						<th class="px-5 py-4">Title</th>
						<th class="hidden px-5 py-4 sm:table-cell">Slug</th>
						<th class="hidden px-5 py-4 md:table-cell">Views</th>
						<th class="hidden px-5 py-4 md:table-cell">Created</th>
						<th class="px-5 py-4 text-right">Actions</th>
					</tr>
				</thead>
				<tbody>
					{#each posts as post}
						<tr class="border-b border-stark-white/15 last:border-b-0 hover:bg-true-black">
							<td class="px-5 py-4 font-bold text-stark-white">{post.title}</td>
							<td class="hidden px-5 py-4 text-stark-white/50 sm:table-cell">{post.slug}</td>
							<td class="hidden px-5 py-4 text-stark-white/50 md:table-cell">{post.views ?? 0}</td>
							<td class="hidden px-5 py-4 text-stark-white/50 md:table-cell">
								{post.createdAt ? new Date(post.createdAt).toLocaleDateString() : '—'}
							</td>
							<td class="px-5 py-4 text-right">
								<div class="flex items-center justify-end gap-2">
									<a
										href="/admin/posts/{post.slug}/edit"
										class="border-2 border-stark-white bg-onyx px-3 py-1.5 text-xs font-bold tracking-[0.12em] uppercase transition-colors duration-150 hover:bg-stark-white hover:text-true-black"
									>
										Edit
									</a>
									<button
										onclick={() => handleDelete(post.slug)}
										disabled={deleting === post.slug}
										class="cursor-pointer border-2 border-stark-white bg-stark-white px-3 py-1.5 text-xs font-bold tracking-[0.12em] uppercase transition-colors duration-150 hover:bg-true-black hover:text-stark-white disabled:opacity-50"
									>
										{deleting === post.slug ? 'Deleting...' : 'Delete'}
									</button>
								</div>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{:else}
		<div class="mt-10 border-2 border-dashed border-stark-white/40 p-16 text-center">
			<p class="text-sm font-bold tracking-[0.24em] text-stark-white uppercase">
				No posts yet
			</p>
			<a
				href="/admin/posts/new"
				class="mt-6 inline-block border-2 border-stark-white bg-stark-white px-5 py-3 text-sm font-bold tracking-[0.16em] text-true-black uppercase transition-colors duration-150 hover:bg-true-black hover:text-stark-white"
			>
				Create your first post
			</a>
		</div>
	{/if}
{/if}

<style>
	@reference 'tailwindcss';
</style>