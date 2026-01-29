<script lang="ts">
	import { page } from '$app/stores';
</script>

<nav class="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-onyx border-b-2 border-stark-white">
	<a href="/" class="text-3xl font-black tracking-tighter text-stark-white no-underline">JEMO</a>
	<ul class="flex items-center gap-8 list-none p-0 m-0">
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
