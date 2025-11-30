<script lang="ts">
	import { page } from '$app/stores';
	import Button from './Button.svelte';

	const navItems = [
		{ label: 'Home', href: '/' },
		{ label: 'Blog', href: '/blog' },
		{ label: 'About', href: '/about' },
		{ label: 'Contact', href: '/contact' }
	];
</script>

<nav class="w-full border-b-2 border-stark-white bg-true-black px-6 py-4">
	<div class="mx-auto flex max-w-7xl items-center justify-between">
		<!-- Logo Plaque -->
		<div class="border-2 border-stark-white bg-onyx px-4 py-2">
			<span class="text-xl font-black tracking-widest text-stark-white uppercase">
				Jeremy<span class="text-gray-400">Portfolio</span>
			</span>
		</div>

		<!-- Navigation Links -->
		<div class="hidden space-x-1 md:flex">
			{#each navItems as item}
				{@const isActive = $page.url.pathname === item.href}
				<a
					href={item.href}
					class="rounded-sm border-2 px-4 py-2 text-sm font-bold tracking-wide uppercase transition-colors duration-200
                    {isActive
						? 'border-stark-white bg-stark-white text-true-black'
						: 'border-transparent bg-transparent text-stark-white hover:border-stark-white hover:bg-onyx'}"
				>
					{item.label}
				</a>
			{/each}
		</div>

		<!-- Mobile Menu Action (Placeholder) -->
		<div class="md:hidden">
			<Button variant="secondary">Menu</Button>
		</div>
	</div>
</nav>
