<script lang="ts">
	import { getPostBySlug, updatePost } from '../../../data.remote';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	let slug = $derived($page.params.slug);
	let title = $state('');
	let content = $state('');
	let loaded = $state(false);
	let notFound = $state(false);
	let submitting = $state(false);
	let error = $state<string | null>(null);

	$effect(() => {
		getPostBySlug(slug).then((post) => {
			if (!post) {
				notFound = true;
				return;
			}
			title = post.title;
			content = post.content;
			loaded = true;
		});
	});

	async function handleSubmit(e: Event) {
		e.preventDefault();
		if (!title || !content) return;
		submitting = true;
		error = null;
		try {
			await updatePost({ slug, title, content });
			goto('/admin/posts');
		} catch (err) {
			error = err instanceof Error ? err.message : 'Failed to update post';
			submitting = false;
		}
	}
</script>

{#if notFound}
	<div class="flex flex-col items-center justify-center py-20">
		<p class="text-lg font-semibold text-neutral-500">Post not found</p>
		<a href="/admin/posts" class="mt-4 text-sm text-amber-500 hover:underline">Back to posts</a>
	</div>
{:else if loaded}
	<h1 class="mb-8 text-3xl font-black tracking-tight">Edit Post</h1>

	<form onsubmit={handleSubmit} class="flex flex-col gap-6 max-w-3xl">
		{#if error}
			<p class="rounded-lg bg-red-950/60 px-4 py-3 text-sm font-medium text-red-400">{error}</p>
		{/if}

		<div class="flex flex-col gap-2">
			<label for="title" class="text-sm font-semibold text-neutral-400">Title</label>
			<input
				id="title"
				type="text"
				bind:value={title}
				required
				class="w-full rounded-xl border border-neutral-800 bg-neutral-900/50 px-4 py-3 text-base text-neutral-100 placeholder:text-neutral-600 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none"
			/>
		</div>

		<div class="flex flex-col gap-2">
			<p class="text-sm font-semibold text-neutral-400">
				Slug <span class="text-neutral-600 font-normal">({slug})</span>
			</p>
		</div>

		<div class="flex flex-col gap-2">
			<label for="content" class="text-sm font-semibold text-neutral-400">
				Content <span class="text-neutral-600 font-normal">(Markdown)</span>
			</label>
			<textarea
				id="content"
				bind:value={content}
				required
				rows="18"
				class="w-full rounded-xl border border-neutral-800 bg-neutral-900/50 px-4 py-3 text-base text-neutral-100 placeholder:text-neutral-600 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none font-mono text-sm leading-relaxed resize-vertical"
			></textarea>
		</div>

		<div class="flex items-center gap-3">
			<button
				type="submit"
				disabled={submitting}
				class="rounded-xl bg-amber-500 px-6 py-3 text-sm font-bold text-neutral-950 transition-colors hover:bg-amber-400 disabled:opacity-50"
			>
				{submitting ? 'Saving...' : 'Save changes'}
			</button>
			<a
				href="/admin/posts"
				class="rounded-xl border border-neutral-700 px-6 py-3 text-sm font-semibold transition-colors hover:bg-neutral-800"
			>
				Cancel
			</a>
		</div>
	</form>
{/if}

<style>
	@reference 'tailwindcss';
</style>
