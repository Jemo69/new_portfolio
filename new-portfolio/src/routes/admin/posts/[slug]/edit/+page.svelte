<script lang="ts">
	import { getPostBySlug, updatePost } from '../../../data.remote';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	let slug = $derived($page.params.slug ?? '');
	let title = $state('');
	let content = $state('');
	let loaded = $state(false);
	let notFound = $state(false);
	let submitting = $state(false);
	let error = $state<string | null>(null);

	$effect(() => {
		getPostBySlug(slug).then((post) => {
			if (!post || post.title == null || post.content == null) {
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
		<p class="text-lg font-bold text-stark-white">Post not found</p>
		<a
			href="/admin/posts"
			class="mt-4 text-sm font-bold tracking-[0.16em] uppercase underline underline-offset-4 hover:text-stark-white/60"
			>Back to posts</a
		>
	</div>
{:else if loaded}
	<div class="flex items-center justify-between border-2 border-stark-white bg-true-black px-5 py-3">
		<h1 class="text-sm font-black tracking-[0.24em] uppercase">Edit post</h1>
		<p class="hidden text-xs font-bold tracking-[0.18em] text-stark-white/50 uppercase sm:block">
			Slug: {slug}
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
				bind:value={title}
				required
				class="w-full rounded-[10px] border-2 border-stark-white/40 bg-true-black px-4 py-3 text-base text-stark-white placeholder:text-gray-500 transition-colors duration-150 focus:border-stark-white focus:outline-none"
			/>
		</div>

		<div class="flex flex-col gap-2">
			<div class="flex items-center gap-2">
				<span class="h-2 w-2 bg-stark-white"></span>
				<p class="text-xs font-bold tracking-[0.16em] text-stark-white/75 uppercase">
					Slug: {slug}
				</p>
			</div>
		</div>

		<div class="flex flex-col gap-2">
			<label for="content" class="text-xs font-bold tracking-[0.16em] text-stark-white/75 uppercase">
				Content <span class="font-normal normal-case text-stark-white/50">(Markdown)</span>
			</label>
			<textarea
				id="content"
				bind:value={content}
				required
				rows="18"
				class="w-full resize-y rounded-[10px] border-2 border-stark-white/40 bg-true-black px-4 py-3 font-mono text-sm leading-relaxed text-stark-white placeholder:text-gray-500 transition-colors duration-150 focus:border-stark-white focus:outline-none"
			></textarea>
		</div>

		<div class="flex items-center gap-3">
			<button
				type="submit"
				disabled={submitting}
				class="cursor-pointer border-2 border-stark-white bg-stark-white px-6 py-3 text-sm font-bold tracking-[0.16em] text-true-black uppercase transition-colors duration-150 hover:bg-true-black hover:text-stark-white disabled:opacity-50"
			>
				{submitting ? 'Saving...' : 'Save changes'}
			</button>
			<a
				href="/admin/posts"
				class="border-2 border-stark-white bg-true-black px-6 py-3 text-sm font-bold tracking-[0.16em] text-stark-white uppercase transition-colors duration-150 hover:bg-stark-white hover:text-true-black"
			>
				Cancel
			</a>
		</div>
	</form>
{/if}

<style>
	@reference 'tailwindcss';
</style>