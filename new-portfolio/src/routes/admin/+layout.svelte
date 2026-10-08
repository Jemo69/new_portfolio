<script lang="ts">
	import { page } from '$app/stores';

	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col bg-onyx font-sans text-stark-white">
	<header class="flex items-center justify-between border-b-2 border-stark-white px-6 py-4">
		<div class="flex items-center gap-8">
			<a href="/admin" class="block border-2 border-stark-white bg-true-black px-3 py-2 text-sm font-black tracking-[0.18em] uppercase">
				Jeremy Admin
			</a>
			<nav class="hidden items-center gap-1 text-sm sm:flex">
				<a
					href="/admin"
					class="border-2 px-4 py-2 text-xs font-bold tracking-[0.16em] uppercase transition-colors duration-150 {String($page.url.pathname) === '/admin'
						? 'border-stark-white bg-stark-white text-true-black'
						: 'border-transparent text-stark-white hover:border-stark-white'}"
				>
					Dashboard
				</a>
				<a
					href="/admin/posts"
					class="border-2 px-4 py-2 text-xs font-bold tracking-[0.16em] uppercase transition-colors duration-150 {String($page.url.pathname) === '/admin/posts'
						? 'border-stark-white bg-stark-white text-true-black'
						: 'border-transparent text-stark-white hover:border-stark-white'}"
				>
					Posts
				</a>
				<a
					href="/admin/analytics"
					class="border-2 px-4 py-2 text-xs font-bold tracking-[0.16em] uppercase transition-colors duration-150 {String($page.url.pathname) === '/admin/analytics'
						? 'border-stark-white bg-stark-white text-true-black'
						: 'border-transparent text-stark-white hover:border-stark-white'}"
				>
					Analytics
				</a>
				<a
					href="/admin/contacts"
					class="border-2 px-4 py-2 text-xs font-bold tracking-[0.16em] uppercase transition-colors duration-150 {String($page.url.pathname) === '/admin/contacts'
						? 'border-stark-white bg-stark-white text-true-black'
						: 'border-transparent text-stark-white hover:border-stark-white'}"
				>
					Contacts
				</a>
			</nav>
		</div>
		<div class="flex items-center gap-4">
			<a href="/" class="text-xs font-bold tracking-[0.14em] text-stark-white/60 uppercase transition-colors hover:text-stark-white">
				View site
			</a>
			<a
				href="/admin/logout"
				class="border-2 border-stark-white bg-true-black px-4 py-2 text-xs font-bold tracking-[0.14em] text-stark-white uppercase transition-colors duration-150 hover:bg-stark-white hover:text-true-black"
			>
				Logout
			</a>
		</div>
	</header>
	<main class="mx-auto w-full max-w-6xl flex-1 px-6 py-10">
		{@render children?.()}
	</main>
</div>

<style>
	@reference 'tailwindcss';
</style>