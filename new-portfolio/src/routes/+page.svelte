<script lang="ts">
	import { skills, projects } from '$lib/list.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { getBlog } from './blog/data.remote';
	import Modal from '$lib/components/ui/Modal.svelte';
	import { reveal } from '$lib/actions/reveal';
	import SEO from '$lib/components/SEO.svelte';

	let showModal = $state(false);
	const blogPosts = (await getBlog()).reverse();
</script>

<SEO
	title="Jeremy Portfolio"
	description="A 16 YEAR OLD  WHO IS PASSIONATE ABOUT CODING AND DESIGN "
	canonical="https://new-portfolio-ten-amber.vercel.app/"
/>

<section class="relative overflow-hidden px-6 py-10 sm:px-8 lg:px-12">
	<div
		class="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top_right,_rgba(252,157,3,0.18),_transparent_28%),radial-gradient(circle_at_top_left,_rgba(87,77,179,0.18),_transparent_32%)]"
	></div>

	<section use:reveal class="mb-20 grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
		<div>
			<h1 class="max-w-4xl text-5xl leading-[0.95] font-black sm:text-7xl lg:text-[5.5rem]">
				Jeremy Portfolio
			</h1>

			<p class="mt-6 max-w-2xl text-lg leading-8 text-text-700 sm:text-xl">
				A 16 YEAR OLD WHO IS PASSIONATE ABOUT CODING AND DESIGN
			</p>

			<div class="mt-8 flex flex-wrap gap-4">
				<Button onclick={() => (showModal = true)}>Start a conversation</Button>
				<a href="#projects">
					<Button variant="secondary">View projects</Button>
				</a>
			</div>
		</div>
	</section>

	<section use:reveal={{ delay: 100 }} class="mb-20">
		<div class="mb-6 flex items-end justify-between gap-4">
			<div>
				<p class="text-xs font-semibold tracking-[0.24em] text-text-500 uppercase">Capabilities</p>
				<h2 class="mt-2 text-3xl font-black sm:text-4xl">Technical coverage</h2>
			</div>
			<p class="max-w-xl text-sm leading-6 text-text-600">
				A focused stack across frontend systems, backend delivery, and rapid prototyping.
			</p>
		</div>

		<div class="flex flex-wrap gap-3">
			{#each skills as skill}
				<div
					class="rounded-full border border-secondary-200 bg-background-50 px-4 py-2 text-sm font-semibold tracking-[0.16em] text-text-800 uppercase shadow-[0_10px_24px_-20px_rgba(17,15,36,0.45)]"
				>
					{skill}
				</div>
			{/each}
		</div>
	</section>

	<section id="projects" use:reveal={{ delay: 200 }} class="mb-20">
		<div class="mb-8 flex items-end justify-between gap-4">
			<div>
				<p class="text-xs font-semibold tracking-[0.24em] text-text-500 uppercase">Portfolio</p>
				<h2 class="mt-2 text-3xl font-black sm:text-4xl">Selected projects</h2>
			</div>
			<p class="max-w-xl text-sm leading-6 text-text-600">
				Recent work across automation, product design, and full-stack builds.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
			{#each projects as project}
				<div
					class="group flex h-full flex-col justify-between rounded-[1.75rem] border border-secondary-200/70 bg-background-50 p-6 shadow-[0_24px_60px_-40px_rgba(17,15,36,0.5)] transition-transform duration-300 hover:-translate-y-1"
				>
					<div>
						<div class="mb-5 flex items-center justify-between gap-4">
							<span
								class="rounded-full bg-secondary-50 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-secondary-700 uppercase"
							>
								{project.stack}
							</span>
						</div>

						<h3 class="mb-3 text-2xl font-black text-text-950">{project.name}</h3>
						<p class="mb-6 text-sm leading-7 text-text-700">{project.description}</p>
					</div>

					{#if project.link}
						<a href={project.link} target="_blank" rel="noreferrer" class="mt-auto">
							<Button variant="secondary" class="w-full justify-center">Open project</Button>
						</a>
					{:else}
						<div
							class="mt-auto rounded-full bg-primary-50 px-4 py-3 text-center text-sm font-semibold text-primary-700"
						>
							In active iteration
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</section>
	<section class="mb-20">
		<div class="mb-8 flex items-end justify-between gap-4">
			<div>
				<p class="text-xs font-semibold tracking-[0.24em] text-text-500 uppercase">Blog</p>
				<h2 class="mt-2 text-3xl font-black sm:text-4xl">Latest blog posts</h2>
			</div>
		</div>
		<div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
			{#each blogPosts as post (post.id)}
				<div
					class="group hover flex h-full -translate-y-1 flex-col justify-between rounded-[1.75rem] border border-secondary-200/70 bg-background-50 p-6 shadow-[0_24px_60px_-40px_rgba(17,15,36,0.5)] transition-transform
                    duration-300"
				>
					<a href={`/blog/${post.slug}`}>
						<div>
							<div class="mb-5 flex items-center justify-between gap-4">
								<span
									class="rounded-full bg-secondary-50 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-secondary-700 uppercase"
								>
									{post.title}
								</span>
							</div>
						</div>
					</a>
				</div>
			{/each}
		</div>
	</section>
</section>

<Modal
	open={showModal}
	title="Start a new project?"
	onclose={() => (showModal = false)}
	onconfirm={() => {
		showModal = false;
		window.location.href = 'mailto:jemolife69@gmail.com';
	}}
>
	<p class="mb-3">
		You are about to open a direct line for a new build, redesign, or collaboration.
	</p>
	<p class="font-semibold text-text-900">Continue to email?</p>
</Modal>

<style>
	@reference 'tailwindcss';
</style>
