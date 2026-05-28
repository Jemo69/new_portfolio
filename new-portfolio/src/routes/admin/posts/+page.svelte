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

<div class="flex items-center justify-between gap-4 mb-8">
	<h1 class="text-3xl font-black tracking-tight">Blog Posts</h1>
	<a
		href="/admin/posts/new"
		class="rounded-xl bg-amber-500 px-5 py-3 text-sm font-bold text-neutral-950 transition-colors hover:bg-amber-400"
	>
		New post
	</a>
</div>

{#if loaded}
	{#if posts.length > 0}
		<div class="overflow-x-auto rounded-2xl border border-neutral-800">
			<table class="w-full text-sm">
				<thead>
					<tr class="border-b border-neutral-800 bg-neutral-900/50 text-left text-xs font-semibold tracking-wide text-neutral-500 uppercase">
						<th class="px-5 py-4">Title</th>
						<th class="px-5 py-4 hidden sm:table-cell">Slug</th>
						<th class="px-5 py-4 hidden md:table-cell">Views</th>
						<th class="px-5 py-4 hidden md:table-cell">Created</th>
						<th class="px-5 py-4 text-right">Actions</th>
					</tr>
				</thead>
				<tbody>
					{#each posts as post}
						<tr class="border-b border-neutral-800/50 last:border-0">
							<td class="px-5 py-4 font-medium">{post.title}</td>
							<td class="px-5 py-4 text-neutral-500 hidden sm:table-cell">{post.slug}</td>
							<td class="px-5 py-4 text-neutral-500 hidden md:table-cell">{post.views ?? 0}</td>
							<td class="px-5 py-4 text-neutral-500 hidden md:table-cell">
								{post.createdAt ? new Date(post.createdAt).toLocaleDateString() : '—'}
							</td>
							<td class="px-5 py-4 text-right">
								<div class="flex items-center justify-end gap-2">
									<a
										href="/admin/posts/{post.slug}/edit"
										class="rounded-lg border border-neutral-700 px-3 py-1.5 text-xs font-semibold transition-colors hover:bg-neutral-800"
									>
										Edit
									</a>
									<button
										onclick={() => handleDelete(post.slug)}
										disabled={deleting === post.slug}
										class="rounded-lg border border-red-900/50 px-3 py-1.5 text-xs font-semibold text-red-400 transition-colors hover:bg-red-950/40 disabled:opacity-50"
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
		<div class="rounded-2xl border border-dashed border-neutral-800 p-16 text-center">
			<p class="text-lg font-semibold text-neutral-500">No posts yet</p>
			<a
				href="/admin/posts/new"
				class="mt-4 inline-block rounded-xl bg-amber-500 px-5 py-3 text-sm font-bold text-neutral-950 transition-colors hover:bg-amber-400"
			>
				Create your first post
			</a>
		</div>
	{/if}
{/if}

<style>
	@reference 'tailwindcss';
</style>
