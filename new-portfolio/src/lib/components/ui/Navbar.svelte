<script lang="ts">
	import { page } from '$app/stores';
	import Button from './Button.svelte';

	const navItems = [
		{ label: 'Home', href: '/' },
		{ label: 'Blog', href: '/blog' },
		{ label: 'About', href: '/about' },
		{ label: 'Contact', href: '/contact' }
	];
	let isOpen = $state(false);
</script>

<nav class="sticky top-0 z-30 border-b border-secondary-200/70 bg-background-50/85 px-6 py-4 backdrop-blur-xl">
	<div class="mx-auto flex max-w-7xl items-center justify-between gap-4">
		<a href="/" class="group rounded-full border border-secondary-200 bg-secondary-50/70 px-4 py-2 no-underline transition-colors hover:bg-secondary-100">
			<span class="text-lg font-black tracking-[0.16em] text-text-950 uppercase">
				Jeremy<span class="text-text-500 group-hover:text-secondary-700"> Portfolio</span>
			</span>
		</a>

		<div class="hidden space-x-1 md:flex">
			{#each navItems as item}
				{@const isActive = $page.url.pathname === item.href}
				<a
					href={item.href}
					class="rounded-full px-4 py-2 text-sm font-semibold tracking-[0.16em] uppercase transition-colors duration-200
                    {isActive
						? 'bg-primary-500 text-background-950'
						: 'text-text-700 hover:bg-secondary-50 hover:text-text-950'}"
				>
					{item.label}
				</a>
			{/each}
		</div>

		<div class="md:hidden">
			<Button onclick={() => (isOpen = !isOpen)} variant="secondary" class="relative z-50">
				{isOpen ? 'Close' : 'Menu'}
			</Button>
			{#if isOpen}
				<div class="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-background-950/92 p-6 backdrop-blur-md">
					{#each navItems as item}
						{@const isActive = $page.url.pathname === item.href}
						<a
							href={item.href}
							onclick={() => (isOpen = false)}
							class="w-full max-w-sm rounded-full px-8 py-4 text-center text-xl font-bold tracking-[0.16em] uppercase transition-colors duration-200
                            {isActive
								? 'bg-primary-500 text-background-950'
								: 'border border-secondary-300/30 text-text-950 hover:bg-secondary-900/20'}"
						>
							{item.label}
						</a>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</nav>
