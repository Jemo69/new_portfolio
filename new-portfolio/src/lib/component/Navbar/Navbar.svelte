<script lang="ts">
	import { page } from '$app/stores';
</script>

<nav
	class="flex items-center justify-between border-b-2 border-primary-900 bg-background-800 p-4 md:px-8"
>
	<a href="/" class="text-2xl font-bold text-accent-200">JEMO</a>
	<ul class="flex items-center gap-4 text-text-500 md:gap-8">
		<li>
			<a
				href="/about"
				class="pb-1 font-semibold uppercase {String($page.url.pathname) === '/about'
					? 'border-foreground border-b-2'
					: ''}">About</a
			>
		</li>
		<li>
			<a
				href="/blog"
				class="pb-1 font-semibold uppercase {$page.url.pathname.startsWith('/blog')
					? 'border-foreground border-b-2'
					: ''}">Blog</a
			>
		</li>
		<li>
			<a
				href="/contact"
				class="pb-1 font-semibold uppercase {String($page.url.pathname) === '/contact'
					? 'border-foreground border-b-2'
					: ''}">Contact</a
			>
		</li>
	</ul>
</nav>

<style>
	@reference 'tailwindcss';
</style>

