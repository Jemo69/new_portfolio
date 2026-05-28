<script lang="ts">
	import { page } from '$app/stores';

	let { children } = $props();
</script>

<div class="min-h-screen bg-neutral-950 font-sans text-neutral-100">
	<header class="flex items-center justify-between border-b border-neutral-800 px-6 py-4">
		<div class="flex items-center gap-6">
			<a href="/admin" class="text-lg font-bold tracking-tight">JEMO ADMIN</a>
			<nav class="hidden gap-4 text-sm sm:flex">
				<a href="/admin" class="transition-colors hover:text-amber-400">Dashboard</a>
				<a href="/admin/posts" class="transition-colors hover:text-amber-400">Posts</a>
				<a href="/admin/contacts" class="transition-colors hover:text-amber-400">Contacts</a>
			</nav>
		</div>
		<div class="flex items-center gap-4">
			<a href="/" class="text-xs text-neutral-500 transition-colors hover:text-neutral-300">View site</a>
			<a href="/admin/logout" class="rounded-full border border-neutral-700 px-4 py-1.5 text-xs font-semibold transition-colors hover:bg-neutral-800">Logout</a>
		</div>
	</header>
	<main class="mx-auto max-w-6xl px-6 py-10">
		{@render children?.()}
	</main>
</div>

<style>
	@reference 'tailwindcss';
</style>
