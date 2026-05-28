<script lang="ts">
	import { createPost } from '../../data.remote';
	import { goto } from '$app/navigation';

	let title = $state('');
	let slug = $state('');
	let content = $state('');
	let slugManuallyEdited = $state(false);
	let submitting = $state(false);
	let error = $state<string | null>(null);

	function toSlug(text: string): string {
		return text
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/^-+|-+$/g, '');
	}

	function onTitleInput(e: Event) {
		const value = (e.target as HTMLInputElement).value;
		title = value;
		if (!slugManuallyEdited) {
			slug = toSlug(value);
		}
	}

	function onSlugInput(e: Event) {
		slugManuallyEdited = true;
		slug = (e.target as HTMLInputElement).value;
	}

	async function handleSubmit(e: Event) {
		e.preventDefault();
		if (!title || !slug || !content) return;
		submitting = true;
		error = null;
		try {
			await createPost({ title, slug, content });
			goto('/admin/posts');
		} catch (err) {
			error = err instanceof Error ? err.message : 'Failed to create post';
			submitting = false;
		}
	}
</script>

<h1 class="mb-8 text-3xl font-black tracking-tight">New Post</h1>

<form onsubmit={handleSubmit} class="flex flex-col gap-6 max-w-3xl">
	{#if error}
		<p class="rounded-lg bg-red-950/60 px-4 py-3 text-sm font-medium text-red-400">{error}</p>
	{/if}

	<div class="flex flex-col gap-2">
		<label for="title" class="text-sm font-semibold text-neutral-400">Title</label>
		<input
			id="title"
			type="text"
			value={title}
			oninput={onTitleInput}
			required
			class="w-full rounded-xl border border-neutral-800 bg-neutral-900/50 px-4 py-3 text-base text-neutral-100 placeholder:text-neutral-600 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none"
			placeholder="Post title"
		/>
	</div>

	<div class="flex flex-col gap-2">
		<label for="slug" class="text-sm font-semibold text-neutral-400">
			Slug <span class="text-neutral-600 font-normal">(URL path)</span>
		</label>
		<input
			id="slug"
			type="text"
			value={slug}
			oninput={onSlugInput}
			required
			class="w-full rounded-xl border border-neutral-800 bg-neutral-900/50 px-4 py-3 text-base text-neutral-100 placeholder:text-neutral-600 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none font-mono text-sm"
			placeholder="my-post-title"
		/>
	</div>

	<div class="flex flex-col gap-2">
		<label for="content" class="text-sm font-semibold text-neutral-400">
			Content <span class="text-neutral-600 font-normal">(Markdown)</span>
		</label>
		<textarea
			id="content"
			value={content}
			oninput={(e) => (content = (e.target as HTMLTextAreaElement).value)}
			required
			rows="18"
			class="w-full rounded-xl border border-neutral-800 bg-neutral-900/50 px-4 py-3 text-base text-neutral-100 placeholder:text-neutral-600 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none font-mono text-sm leading-relaxed resize-vertical"
			placeholder="Write your post content in markdown..."
		></textarea>
	</div>

	<div class="flex items-center gap-3">
		<button
			type="submit"
			disabled={submitting}
			class="rounded-xl bg-amber-500 px-6 py-3 text-sm font-bold text-neutral-950 transition-colors hover:bg-amber-400 disabled:opacity-50"
		>
			{submitting ? 'Publishing...' : 'Publish'}
		</button>
		<a
			href="/admin/posts"
			class="rounded-xl border border-neutral-700 px-6 py-3 text-sm font-semibold transition-colors hover:bg-neutral-800"
		>
			Cancel
		</a>
	</div>
</form>

<style>
	@reference 'tailwindcss';
</style>
