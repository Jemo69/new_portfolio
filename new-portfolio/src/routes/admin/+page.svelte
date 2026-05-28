<script lang="ts">
	import { getPosts, getContacts } from './data.remote';

	let posts = $state<any[]>([]);
	let contacts = $state<any[]>([]);
	let loaded = $state(false);

	$effect(() => {
		Promise.all([getPosts(), getContacts()]).then(([p, c]) => {
			posts = p;
			contacts = c;
			loaded = true;
		});
	});
</script>

<h1 class="mb-10 text-3xl font-black tracking-tight">Dashboard</h1>

{#if loaded}
	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
		<a
			href="/admin/posts"
			class="group rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 transition-colors hover:border-neutral-700"
		>
			<p class="text-5xl font-black text-amber-500">{posts.length}</p>
			<p class="mt-3 text-sm font-semibold tracking-wide text-neutral-400 uppercase">Blog posts</p>
			<p class="mt-1 text-xs text-neutral-600">Manage and publish posts</p>
		</a>
		<a
			href="/admin/contacts"
			class="group rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 transition-colors hover:border-neutral-700"
		>
			<p class="text-5xl font-black text-amber-500">{contacts.length}</p>
			<p class="mt-3 text-sm font-semibold tracking-wide text-neutral-400 uppercase">Contact submissions</p>
			<p class="mt-1 text-xs text-neutral-600">View messages from visitors</p>
		</a>
	</div>

	<div class="mt-12">
		<h2 class="mb-4 text-lg font-bold">Quick actions</h2>
		<div class="flex flex-wrap gap-3">
			<a
				href="/admin/posts/new"
				class="rounded-xl bg-amber-500 px-5 py-3 text-sm font-bold text-neutral-950 transition-colors hover:bg-amber-400"
			>
				New blog post
			</a>
			<a
				href="/admin/contacts"
				class="rounded-xl border border-neutral-700 px-5 py-3 text-sm font-semibold transition-colors hover:bg-neutral-800"
			>
				View messages
			</a>
		</div>
	</div>
{/if}

<style>
	@reference 'tailwindcss';
</style>
