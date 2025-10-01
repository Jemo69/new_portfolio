<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/component/Footer/Footer.svelte';
	import Header from '$lib/component/Header/Header.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header></Header>
{@render children?.()}
<Footer />

<style>
	@reference 'tailwindcss';
</style>
