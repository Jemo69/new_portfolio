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

<div class="flex items-center justify-between border-2 border-stark-white bg-true-black px-5 py-3">
	<h1 class="text-sm font-black tracking-[0.24em] uppercase">New post</h1>
	<p class="hidden text-xs font-bold tracking-[0.18em] text-stark-white/50 uppercase sm:block">
		Compose
	</p>
</div>

<form onsubmit={handleSubmit} class="mt-10 flex max-w-3xl flex-col gap-6">
	{#if error}
		<p class="border-2 border-stark-white bg-true-black px-4 py-3 text-sm font-bold text-stark-white uppercase">
			{error}
		</p>
	{/if}

	<div class="flex flex-col gap-2">
		<label for="title" class="text-xs font-bold tracking-[0.16em] text-stark-white/75 uppercase">
			Title
		</label>
		<input
			id="title"
			type="text"
			value={title}
			oninput={onTitleInput}
			required
			class="w-full rounded-[10px] border-2 border-stark-white/40 bg-true-black px-4 py-3 text-base text-stark-white placeholder:text-gray-500 transition-colors duration-150 focus:border-stark-white focus:outline-none"
			placeholder="Post title"
		/>
	</div>

	<div class="flex flex-col gap-2">
		<label for="slug" class="text-xs font-bold tracking-[0.16em] text-stark-white/75 uppercase">
			Slug <span class="font-normal normal-case text-stark-white/50">(URL path)</span>
		</label>
		<input
			id="slug"
			type="text"
			value={slug}
			oninput={onSlugInput}
			required
			class="w-full rounded-[10px] border-2 border-stark-white/40 bg-true-black px-4 py-3 font-mono text-sm text-stark-white placeholder:text-gray-500 transition-colors duration-150 focus:border-stark-white focus:outline-none"
			placeholder="my-post-title"
		/>
	</div>

	<div class="flex flex-col gap-2">
		<label for="content" class="text-xs font-bold tracking-[0.16em] text-stark-white/75 uppercase">
			Content <span class="font-normal normal-case text-stark-white/50">(Markdown)</span>
		</label>
		<textarea
			id="content"
			value={content}
			oninput={(e) => (content = (e.target as HTMLTextAreaElement).value)}
			required
			rows="18"
			class="w-full resize-y rounded-[10px] border-2 border-stark-white/40 bg-true-black px-4 py-3 font-mono text-sm leading-relaxed text-stark-white placeholder:text-gray-500 transition-colors duration-150 focus:border-stark-white focus:outline-none"
			placeholder="Write your post content in markdown..."
		></textarea>
	</div>

	<div class="flex items-center gap-3">
		<button
			type="submit"
			disabled={submitting}
			class="cursor-pointer border-2 border-stark-white bg-stark-white px-6 py-3 text-sm font-bold tracking-[0.16em] text-true-black uppercase transition-colors duration-150 hover:bg-true-black hover:text-stark-white disabled:opacity-50"
		>
			{submitting ? 'Publishing...' : 'Publish'}
		</button>
		<a
			href="/admin/posts"
			class="border-2 border-stark-white bg-true-black px-6 py-3 text-sm font-bold tracking-[0.16em] text-stark-white uppercase transition-colors duration-150 hover:bg-stark-white hover:text-true-black"
		>
			Cancel
		</a>
	</div>
</form>

<style>
	@reference 'tailwindcss';
</style>