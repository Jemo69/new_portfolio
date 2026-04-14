<script lang="ts">
	import { page } from '$app/stores';
	import { iso } from 'zod';
	import Button from './Button.svelte';

	const navItems = [
		{ label: 'Home', href: '/' },
		{ label: 'Blog', href: '/blog' },
		{ label: 'About', href: '/about' },
		{ label: 'Contact', href: '/contact' }
	];
	let isOpen = $state(false);
</script>

<nav class="w-full border-b-2 border-stark-white bg-true-black px-6 py-4">
	<div class="mx-auto flex max-w-7xl items-center justify-between">
		<!-- Logo Plaque -->
		<a href="/" class="border-2 border-stark-white bg-onyx px-4 py-2 no-underline hover:bg-stark-white group transition-colors">
			<span class="text-xl font-black tracking-widest text-stark-white uppercase group-hover:text-true-black transition-colors">
				Jeremy<span class="text-gray-400 group-hover:text-true-black/60">Portfolio</span>
			</span>
		</a>

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
			<Button onclick={() => (isOpen = !isOpen)} variant="secondary" class="relative z-50">
				{isOpen ? 'Close' : 'Menu'}
			</Button>
			{#if isOpen}
				<div
					class="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-true-black p-6"
				>
					{#each navItems as item}
						{@const isActive = $page.url.pathname === item.href}
						<a
							href={item.href}
							onclick={() => (isOpen = false)}
							class="w-full rounded-sm border-2 px-8 py-4 text-center text-xl font-black tracking-widest uppercase transition-colors duration-200
                            {isActive
								? 'border-stark-white bg-stark-white text-true-black'
								: 'border-transparent bg-transparent text-stark-white hover:border-stark-white hover:bg-onyx'}"
						>
							{item.label}
						</a>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</nav>
