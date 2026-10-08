<script lang="ts">
	import { getPosts, getContacts } from './data.remote';
	import { formatViews } from '$lib/views';

	let posts = $state<any[]>([]);
	let contacts = $state<any[]>([]);
	let loaded = $state(false);

	const totalViews = $derived(posts.reduce((sum, post) => sum + (post.views ?? 0), 0));

	$effect(() => {
		Promise.all([getPosts(), getContacts()]).then(([p, c]) => {
			posts = p;
			contacts = c;
			loaded = true;
		});
	});
</script>

<div class="flex items-center justify-between border-2 border-stark-white bg-true-black px-5 py-3">
	<h1 class="text-sm font-black tracking-[0.24em] uppercase">Command dashboard</h1>
	<p class="hidden text-xs font-bold tracking-[0.18em] text-stark-white/50 uppercase sm:block">
		System overview
	</p>
</div>

{#if loaded}
	<div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
		<a
			href="/admin/posts"
			class="group flex items-center justify-between border-2 border-stark-white bg-true-black p-8 transition-colors duration-150 hover:bg-stark-white"
		>
			<span class="flex flex-col gap-2">
				<span class="text-5xl font-black text-stark-white transition-colors duration-150 group-hover:text-true-black">
					{formatViews(totalViews)}
				</span>
				<span class="text-xs font-bold tracking-[0.2em] text-stark-white/60 uppercase transition-colors duration-150 group-hover:text-true-black/70">
					Total views
				</span>
			</span>
			<span class="text-2xl font-black text-stark-white transition-colors duration-150 group-hover:text-true-black">
				→
			</span>
		</a>
		<a
			href="/admin/posts"
			class="group flex items-center justify-between border-2 border-stark-white bg-true-black p-8 transition-colors duration-150 hover:bg-stark-white"
		>
			<span class="flex flex-col gap-2">
				<span class="text-5xl font-black text-stark-white transition-colors duration-150 group-hover:text-true-black">
					{posts.length}
				</span>
				<span class="text-xs font-bold tracking-[0.2em] text-stark-white/60 uppercase transition-colors duration-150 group-hover:text-true-black/70">
					Blog posts
				</span>
			</span>
			<span class="text-2xl font-black text-stark-white transition-colors duration-150 group-hover:text-true-black">
				→
			</span>
		</a>
		<a
			href="/admin/contacts"
			class="group flex items-center justify-between border-2 border-stark-white bg-true-black p-8 transition-colors duration-150 hover:bg-stark-white"
		>
			<span class="flex flex-col gap-2">
				<span class="text-5xl font-black text-stark-white transition-colors duration-150 group-hover:text-true-black">
					{contacts.length}
				</span>
				<span class="text-xs font-bold tracking-[0.2em] text-stark-white/60 uppercase transition-colors duration-150 group-hover:text-true-black/70">
					Contact submissions
				</span>
			</span>
			<span class="text-2xl font-black text-stark-white transition-colors duration-150 group-hover:text-true-black">
				→
			</span>
		</a>
	</div>

	<div class="mt-14 flex flex-col gap-4">
		<h2 class="text-sm font-black tracking-[0.24em] uppercase">Quick actions</h2>
		<div class="flex flex-wrap gap-3">
			<a
				href="/admin/posts/new"
				class="border-2 border-stark-white bg-stark-white px-5 py-3 text-sm font-bold tracking-[0.16em] text-true-black uppercase transition-colors duration-150 hover:bg-true-black hover:text-stark-white"
			>
				+ New blog post
			</a>
			<a
				href="/admin/contacts"
				class="border-2 border-stark-white bg-true-black px-5 py-3 text-sm font-bold tracking-[0.16em] text-stark-white uppercase transition-colors duration-150 hover:bg-stark-white hover:text-true-black"
			>
				View messages
			</a>
			<a
				href="/admin/analytics"
				class="border-2 border-stark-white bg-true-black px-5 py-3 text-sm font-bold tracking-[0.16em] text-stark-white uppercase transition-colors duration-150 hover:bg-stark-white hover:text-true-black"
			>
				Reads vs rereads
			</a>
		</div>
	</div>
{/if}

<style>
	@reference 'tailwindcss';
</style>