<script lang="ts">
	import { skills, projects } from '$lib/list.svelte.ts';
	import Button from '$lib/components/ui/Button.svelte';
	import Modal from '$lib/components/ui/Modal.svelte';
	import { reveal } from '$lib/actions/reveal';

	let showModal = $state(false);
</script>

<svelte:head>
	<title>JEREMY NWACHUKWU // JEMO CORE</title>
</svelte:head>

<!-- Hero Section -->
<section
	use:reveal
	class="mb-24 flex flex-col items-start justify-center border-l-2 border-stark-white py-12 pl-4 sm:border-l-4 sm:pl-8"
>
	<h1
		class="mb-6 text-5xl font-black tracking-tighter text-stark-white uppercase md:text-8xl lg:text-9xl"
	>
		JEREMY<br /> PORTFOLIO
	</h1>
	<p class="mb-10 max-w-2xl text-lg font-bold tracking-wide text-gray-400 uppercase sm:text-xl">
		Tactical Web Development. <br />
		<span class="text-stark-white">Solving problems with absolute contrast.</span>
	</p>
</section>

<!-- Skills Section -->
<section id="skills" use:reveal={{ delay: 100 }} class="mb-24">
	<div class="mb-8 flex items-center gap-4">
		<div class="h-4 w-4 bg-stark-white"></div>
		<h2 class="text-3xl font-black tracking-widest uppercase">Technical Arsenal</h2>
	</div>

	<div class="flex flex-wrap gap-3">
		{#each skills as skill}
			<div
				class="cursor-default border-2 border-stark-white px-4 py-2 text-sm font-bold tracking-wider uppercase transition-colors hover:bg-stark-white hover:text-true-black"
			>
				{skill}
			</div>
		{/each}
	</div>
</section>

<!-- Projects Section -->
<section id="projects" use:reveal={{ delay: 200 }} class="mb-24">
	<div class="mb-8 flex items-center gap-4">
		<div class="h-4 w-4 bg-stark-white"></div>
		<h2 class="text-3xl font-black tracking-widest uppercase">Deployed Operations</h2>
	</div>

	<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each projects as project (project.id)}
			<div
				class="group relative flex flex-col justify-between border-2 border-stark-white bg-onyx p-6 transition-all hover:translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"
			>
				<div>
					<h3 class="mb-2 text-2xl font-black tracking-tight text-stark-white uppercase">
						{project.name}
					</h3>
					<div class="mb-4 text-xs font-bold tracking-widest text-gray-400 uppercase">
						{project.stack}
					</div>
					<p class="mb-6 text-sm leading-relaxed font-medium text-gray-300">
						{project.description}
					</p>
				</div>
				<a href={project.link} target="_blank" class="mt-auto">
					<Button variant="secondary" class="w-full">Access Terminal</Button>
				</a>
			</div>
		{/each}
	</div>
</section>

<!-- Contact Modal -->
<Modal
	open={showModal}
	title="ESTABLISH COMMS?"
	onclose={() => (showModal = false)}
	onconfirm={() => {
		showModal = false;
		window.location.href = 'mailto:hello@jemo.dev';
	}}
>
	<p class="mb-4">You are about to initiate a transmission to Jemo HQ.</p>
	<p class="font-bold">CONFIRM AUTHORIZATION?</p>
</Modal>

<style>
	@reference 'tailwindcss';
</style>
