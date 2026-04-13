<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let isOpen = $state(false);

	function toggleMenu() {
		isOpen = !isOpen;
	}

	function closeMenu() {
		isOpen = false;
	}

	onMount(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				isOpen = false;
			}
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	});
</script>

<nav class="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-onyx border-b-2 border-stark-white">
	<a href="/" class="text-3xl font-black tracking-tighter text-stark-white no-underline">JEMO</a>
	
	<button 
		class="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer"
		onclick={toggleMenu}
		aria-label="Toggle menu"
		aria-expanded={isOpen}
	>
		<span class="w-6 h-0.5 bg-stark-white transition-transform {isOpen ? 'rotate-45 translate-y-2' : ''}"></span>
		<span class="w-6 h-0.5 bg-stark-white transition-opacity {isOpen ? 'opacity-0' : ''}"></span>
		<span class="w-6 h-0.5 bg-stark-white transition-transform {isOpen ? '-rotate-45 -translate-y-2' : ''}"></span>
	</button>

	<ul class="hidden md:flex items-center gap-8 list-none p-0 m-0">
		<li>
			<a href="/about" 
               class="font-bold uppercase tracking-widest no-underline transition-colors hover:text-gray-400 {String($page.url.pathname) === '/about' ? 'text-stark-white border-b-2 border-stark-white' : 'text-gray-500'}">
                About
            </a>
		</li>
		<li>
			<a href="/blog" 
               class="font-bold uppercase tracking-widest no-underline transition-colors hover:text-gray-400 {$page.url.pathname.startsWith('/blog') ? 'text-stark-white border-b-2 border-stark-white' : 'text-gray-500'}">
                Blog
            </a>
		</li>
		<li>
			<a href="/contact" 
               class="font-bold uppercase tracking-widest no-underline transition-colors hover:text-gray-400 {String($page.url.pathname) === '/contact' ? 'text-stark-white border-b-2 border-stark-white' : 'text-gray-500'}">
                Contact
            </a>
		</li>
	</ul>
</nav>

{#if isOpen}
	<div class="md:hidden fixed inset-0 top-[73px] z-40 bg-onyx/95">
		<ul class="flex flex-col items-center gap-8 list-none p-8 pt-12">
			<li>
				<a href="/about" onclick={closeMenu}
                   class="font-bold text-2xl uppercase tracking-widest no-underline transition-colors {String($page.url.pathname) === '/about' ? 'text-stark-white border-b-2 border-stark-white' : 'text-gray-500'}">
                    About
                </a>
			</li>
			<li>
				<a href="/blog" onclick={closeMenu}
                   class="font-bold text-2xl uppercase tracking-widest no-underline transition-colors {$page.url.pathname.startsWith('/blog') ? 'text-stark-white border-b-2 border-stark-white' : 'text-gray-500'}">
                    Blog
                </a>
			</li>
			<li>
				<a href="/contact" onclick={closeMenu}
                   class="font-bold text-2xl uppercase tracking-widest no-underline transition-colors {String($page.url.pathname) === '/contact' ? 'text-stark-white border-b-2 border-stark-white' : 'text-gray-500'}">
                    Contact
                </a>
			</li>
		</ul>
	</div>
{/if}
