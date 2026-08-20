<script lang="ts">
	import { page } from '$app/stores';
	import { afterNavigate } from '$app/navigation';

	const navItems = [
		{ label: 'Home', href: '/' },
		{ label: 'Blog', href: '/blog' },
		{ label: 'About', href: '/about' },
		{ label: 'Contact', href: '/contact' }
	];

	let isOpen = $state(false);

	$effect(() => {
		if (!isOpen) return;
		function onKeydown(e: KeyboardEvent) {
			if (e.key === 'Escape') {
				isOpen = false;
			}
		}
		window.addEventListener('keydown', onKeydown);
		return () => window.removeEventListener('keydown', onKeydown);
	});

	$effect(() => {
		if (!isOpen) return;
		function onResize() {
			if (window.innerWidth >= 768) {
				isOpen = false;
			}
		}
		window.addEventListener('resize', onResize);
		return () => window.removeEventListener('resize', onResize);
	});

	afterNavigate(() => {
		isOpen = false;
	});
</script>

<nav class="sticky top-0 z-50 border-b-2 border-stark-white bg-onyx px-6 py-3">
	<div class="mx-auto flex max-w-7xl items-center justify-between gap-4">
		<a href="/" class="no-underline">
			<span class="block border-2 border-stark-white bg-true-black px-3 py-2 text-sm font-black tracking-[0.14em] text-stark-white uppercase sm:px-4 sm:text-lg sm:tracking-[0.18em]">
				JEREMY<span class="text-stark-white/50">_NWACHUKWU</span>
			</span>
		</a>

		<div class="hidden items-center gap-1 md:flex">
			{#each navItems as item}
				{@const isActive = $page.url.pathname === item.href}
				<a
					href={item.href}
					aria-current={isActive ? 'page' : undefined}
					class="flex items-center justify-center border-2 px-5 py-2 text-sm font-bold tracking-[0.16em] uppercase transition-colors duration-150
					{isActive
						? 'border-stark-white bg-stark-white text-true-black'
						: 'border-transparent bg-transparent text-stark-white hover:border-stark-white hover:bg-true-black'}"
				>
					{item.label}
				</a>
			{/each}
		</div>

		<div class="md:hidden">
			<button
				type="button"
				onclick={() => (isOpen = !isOpen)}
				aria-label={isOpen ? 'Close menu' : 'Open menu'}
				aria-expanded={isOpen}
				aria-controls="mobile-menu"
				class="flex h-11 cursor-pointer items-center gap-2 border-2 border-stark-white bg-true-black px-4 text-stark-white transition-colors hover:bg-stark-white hover:text-true-black"
			>
				<span class="relative block h-3 w-5">
					<span
						class="absolute left-0 block h-0.5 w-5 origin-center bg-current transition-all duration-200 ease-out {isOpen
							? 'top-1/2 -translate-y-1/2 rotate-45'
							: 'top-0'}"
					></span>
					<span
						class="absolute top-1/2 left-0 block h-0.5 w-5 -translate-y-1/2 bg-current transition-all duration-200 ease-out {isOpen
							? 'w-0 opacity-0'
							: 'w-5 opacity-100'}"
					></span>
					<span
						class="absolute left-0 block h-0.5 w-5 origin-center bg-current transition-all duration-200 ease-out {isOpen
							? 'top-1/2 -translate-y-1/2 -rotate-45'
							: 'bottom-0'}"
					></span>
				</span>
				<span class="text-[11px] font-bold tracking-[0.2em] uppercase">
					{isOpen ? 'Close' : 'Menu'}
				</span>
			</button>
		</div>
	</div>
</nav>

{#if isOpen}
	<div
		id="mobile-menu"
		role="dialog"
		aria-modal="true"
		aria-label="Mobile navigation"
		tabindex="-1"
		class="fixed inset-0 z-40 overflow-y-auto border-t-2 border-stark-white bg-onyx md:hidden md:border-0"
		onclick={() => (isOpen = false)}
	>
		<div class="flex min-h-full flex-col items-center justify-center gap-3 px-6 py-20">
			{#each navItems as item, i (item.href)}
				{@const isActive = $page.url.pathname === item.href}
				<a
					href={item.href}
					aria-current={isActive ? 'page' : undefined}
					onclick={(e) => e.stopPropagation()}
					style="animation-delay: {80 + i * 60}ms"
					class="mobile-menu-item w-full max-w-xs border-2 bg-true-black px-6 py-4 text-center text-lg font-bold tracking-[0.18em] uppercase transition-colors duration-150 {isActive
						? 'border-stark-white bg-stark-white text-true-black'
						: 'border-stark-white/40 text-stark-white hover:border-stark-white'}"
				>
					{item.label}
				</a>
			{/each}

			<p
				class="mt-10 text-[10px] font-bold tracking-[0.3em] text-stark-white/50 uppercase"
				style="animation-delay: {80 + navItems.length * 60}ms"
			>
				Tap anywhere to close
			</p>
		</div>
	</div>
{/if}

<style>
	@reference 'tailwindcss';

	:global(.mobile-menu-item) {
		animation: menuItemIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;
	}

	@keyframes menuItemIn {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>