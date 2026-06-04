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

<nav
	class="sticky top-0 z-50 border-b border-secondary-200/70 bg-background-50/85 px-6 py-4 backdrop-blur-xl"
>
	<div class="mx-auto flex max-w-7xl items-center justify-between gap-4">
		<a
			href="/"
			class="group rounded-full border border-secondary-200 bg-secondary-50/70 px-4 py-2 no-underline transition-colors hover:bg-secondary-100"
		>
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
			<button
				type="button"
				onclick={() => (isOpen = !isOpen)}
				aria-label={isOpen ? 'Close menu' : 'Open menu'}
				aria-expanded={isOpen}
				aria-controls="mobile-menu"
				class="group relative z-50 inline-flex h-10 items-center gap-2 rounded-full border border-secondary-200 bg-secondary-50/70 px-4 text-text-950 backdrop-blur-md transition-all duration-300 hover:border-secondary-300 hover:bg-secondary-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background-50 active:scale-[0.97]"
			>
				<span class="relative block h-3.5 w-5">
					<span
						class="absolute left-0 block h-[1.5px] w-5 origin-center rounded-full bg-current transition-all duration-300 ease-out {isOpen
							? 'top-1/2 -translate-y-1/2 rotate-45'
							: 'top-0'}"
					></span>
					<span
						class="absolute top-1/2 left-0 block h-[1.5px] -translate-y-1/2 rounded-full bg-current transition-all duration-300 ease-out {isOpen
							? 'w-0 opacity-0'
							: 'w-5 opacity-100'}"
					></span>
					<span
						class="absolute left-0 block h-[1.5px] w-5 origin-center rounded-full bg-current transition-all duration-300 ease-out {isOpen
							? 'top-1/2 -translate-y-1/2 -rotate-45'
							: 'bottom-0'}"
					></span>
				</span>
				<span class="text-[11px] font-bold tracking-[0.22em] uppercase">
					{isOpen ? 'Close' : 'Menu'}
				</span>
			</button>
		</div>
	</div>
</nav>

{#if isOpen}
	<!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
	<div
		id="mobile-menu"
		role="dialog"
		aria-modal="true"
		aria-label="Mobile navigation"
		tabindex="-1"
		class="mobile-menu-overlay fixed inset-0 z-40 overflow-y-auto bg-background-950/96 backdrop-blur-2xl md:hidden"
		onclick={() => (isOpen = false)}
	>
		<div
			class="pointer-events-none absolute inset-0 -z-10"
			style="background-image: radial-gradient(circle at 50% 18%, color-mix(in srgb, var(--primary-500) 22%, transparent), transparent 55%), radial-gradient(circle at 85% 95%, color-mix(in srgb, var(--secondary-500) 28%, transparent), transparent 60%);"
		></div>

		<div class="flex min-h-full flex-col items-center justify-center gap-3 px-6 py-24">
			<p
				class="mb-4 animate-[menuFade_0.5s_ease-out_both] text-[10px] font-bold tracking-[0.4em] text-text-700 uppercase"
			>
				Navigate
			</p>
			{#each navItems as item, i (item.href)}
				{@const isActive = $page.url.pathname === item.href}
				<a
					href={item.href}
					aria-current={isActive ? 'page' : undefined}
					style="animation-delay: {80 + i * 70}ms"
					class="mobile-menu-item group relative w-full max-w-xs overflow-hidden rounded-2xl border px-6 py-4 text-center text-lg font-bold tracking-[0.18em] uppercase transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background-950 {isActive
						? 'border-primary-400/70 bg-gradient-to-br from-primary-500/25 via-primary-500/10 to-transparent text-text-950 shadow-[0_18px_40px_-20px_var(--primary-500)]'
						: 'border-secondary-300/15 bg-background-50/[0.04] text-text-700 hover:border-secondary-300/40 hover:bg-background-50/[0.08] hover:text-text-950'}"
				>
					<span
						class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 {isActive
							? 'opacity-100'
							: ''}"
					></span>
					<span class="relative flex items-center justify-center gap-2">
						<span
							class="inline-block h-1.5 w-1.5 rounded-full transition-all duration-300 {isActive
								? 'bg-primary-400 shadow-[0_0_10px_var(--primary-400)]'
								: 'bg-secondary-300/40 group-hover:bg-primary-400/70'}"
						></span>
						{item.label}
					</span>
				</a>
			{/each}

			<div
				class="mt-10 flex animate-[menuFade_0.5s_ease-out_both] items-center gap-2 text-[10px] font-semibold tracking-[0.3em] text-text-700/70 uppercase"
				style="animation-delay: {80 + navItems.length * 70}ms"
			>
				<span class="h-px w-6 bg-secondary-300/30"></span>
				Tap anywhere to close
				<span class="h-px w-6 bg-secondary-300/30"></span>
			</div>
		</div>
	</div>
{/if}

<style>
	@reference 'tailwindcss';

	:global(.mobile-menu-overlay) {
		animation: menuOverlayIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;
	}

	:global(.mobile-menu-item) {
		animation: menuItemIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
	}

	@keyframes menuOverlayIn {
		from {
			opacity: 0;
			backdrop-filter: blur(0px);
		}
		to {
			opacity: 1;
			backdrop-filter: blur(24px);
		}
	}

	@keyframes menuItemIn {
		from {
			opacity: 0;
			transform: translateY(14px) scale(0.96);
		}
		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}

	@keyframes menuFade {
		from {
			opacity: 0;
			transform: translateY(6px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
