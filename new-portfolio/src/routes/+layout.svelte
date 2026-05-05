<script lang="ts">
	import '../app.css';

	import Navbar from '$lib/components/ui/Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/logo.ico" />
</svelte:head>

<div class="min-h-screen font-sans text-text-900">
	<Navbar />
	<main class="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
		{@render children?.()}
	</main>
</div>

<style>
	@reference 'tailwindcss';
</style>
