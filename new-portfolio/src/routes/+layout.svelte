<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/ui/Navbar.svelte';
	import Footer from '$lib/component/Footer/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/logo.ico" />
</svelte:head>

<div class="flex min-h-screen flex-col bg-onyx text-stark-white">
	<Navbar />
	<main class="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 sm:py-16">
		{@render children?.()}
	</main>
	<Footer />
</div>

<style>
	@reference 'tailwindcss';
</style>