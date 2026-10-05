<script lang="ts">
	import { skills, projects, currentAge } from '$lib/list.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Modal from '$lib/components/ui/Modal.svelte';
	import { reveal } from '$lib/actions/reveal';
	import SEO from '$lib/components/SEO.svelte';
	import RssLink from '$lib/components/ui/RssLink.svelte';
	import { formatViews } from '$lib/views';

	let { data } = $props<{
		data: {
			blogPosts: any[];
		};
	}>();

	const blogPosts = $derived(data.blogPosts || []);

	let showModal = $state(false);

	const numbered = (n: number) => String(n).padStart(2, '0');
	const ticker = ['SvelteKit', 'TypeScript', 'Python', 'FastAPI', 'UI Engineering', 'React'];
	const age = currentAge();
</script>

<SEO
	title="Jeremy Portfolio"
	description="A {age}-year-old developer and designer building fast, precise tactical digital experiences."
	canonical="https://new-portfolio-ten-amber.vercel.app/"
/>

<div class="flex flex-col">
	<!-- STATUS TICKER -->
	<div class="flex flex-wrap items-stretch border-2 border-b-0 border-stark-white bg-true-black">
		<div class="flex items-center gap-2 border-r-2 border-stark-white/20 px-5 py-3">
			<span class="h-2.5 w-2.5 bg-stark-white"></span>
			<span class="text-[11px] font-bold tracking-[0.2em] text-stark-white uppercase">
				Open for work
			</span>
		</div>
		{#each ticker as item}
			<div class="hidden items-center border-r-2 border-stark-white/20 px-5 py-3 last:border-r-0 sm:flex">
				<span class="text-[11px] font-bold tracking-[0.2em] text-stark-white/60 uppercase">
					{item}
				</span>
			</div>
		{/each}
	</div>

	<!-- HERO -->
	<section class="grid grid-cols-1 gap-10 border-2 border-stark-white bg-true-black p-8 sm:p-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
		<div use:reveal class="flex flex-col gap-8">
			<div class="inline-flex w-fit items-center gap-3 border-2 border-stark-white bg-onyx px-4 py-2">
				<span class="h-2 w-2 bg-stark-white"></span>
				<span class="text-xs font-black tracking-[0.28em] text-stark-white uppercase">
					Protocol v.2026
				</span>
			</div>
			<h1 class="max-w-3xl text-5xl leading-[0.95] font-black tracking-[-0.02em] sm:text-7xl lg:text-[5.5rem]">
				Code, design, ship.
			</h1>
			<p class="max-w-2xl text-lg leading-8 text-stark-white/85 sm:text-xl">
				I'm Ifeanyichukwu Jeremy Nwachukwu — a {age}-year-old developer and designer.
				I build fast, precise interfaces and tools for people who need them to work.
			</p>
			<div class="flex flex-wrap gap-4">
				<Button onclick={() => (showModal = true)}>Start a conversation</Button>
				<a href="#projects">
					<Button variant="secondary">View projects</Button>
				</a>
			</div>
		</div>

		<div
			use:reveal={{ delay: 120 }}
			class="grid grid-cols-2 border-2 border-stark-white bg-onyx"
		>
			<div class="col-span-2 flex flex-col justify-between gap-4 border-b-2 border-stark-white/25 p-6">
				<span class="text-xs font-bold tracking-[0.2em] text-stark-white/50 uppercase">Name</span>
				<span class="text-2xl leading-tight font-black tracking-tight text-stark-white sm:text-3xl">
					Ifeanyichukwu Jeremy Nwachukwu
				</span>
			</div>
			<div class="flex flex-col justify-between gap-6 border-r-2 border-b-2 border-stark-white/25 p-6">
				<span class="text-xs font-bold tracking-[0.2em] text-stark-white/50 uppercase">Role</span>
				<span class="text-xl font-black tracking-tight text-stark-white">Software engineer</span>
			</div>
			<div class="flex flex-col justify-between gap-6 border-b-2 border-stark-white/25 p-6">
				<span class="text-xs font-bold tracking-[0.2em] text-stark-white/50 uppercase">Age</span>
				<span class="text-xl font-black tracking-tight text-stark-white">{age}</span>
			</div>
			<div class="flex flex-col justify-between gap-6 border-r-2 border-stark-white/25 p-6">
				<span class="text-xs font-bold tracking-[0.2em] text-stark-white/50 uppercase">Status</span>
				<span class="flex items-center gap-2 text-xl font-black tracking-tight text-stark-white">
					<span class="h-2.5 w-2.5 bg-stark-white"></span> Open
				</span>
			</div>
			<div class="flex flex-col justify-between gap-6 p-6">
				<span class="text-xs font-bold tracking-[0.2em] text-stark-white/50 uppercase">Focus</span>
				<span class="text-xl font-black tracking-tight text-stark-white">Full stack</span>
			</div>
			<div class="col-span-2 flex items-center justify-between gap-4 p-6">
				<span class="text-xs font-bold tracking-[0.2em] text-stark-white/50 uppercase">Primary stack</span>
				<span class="text-xl font-black tracking-tight text-stark-white">SvelteKit</span>
			</div>
		</div>
	</section>

	<!-- CAPABILITIES -->
	<section use:reveal class="flex flex-col gap-6 border-2 border-t-0 border-stark-white bg-true-black p-8 sm:p-12">
		<div class="flex items-center justify-between border-b-2 border-stark-white/25 pb-4">
			<h2 class="text-sm font-black tracking-[0.24em] uppercase">Capabilities</h2>
			<p class="hidden text-xs font-bold tracking-[0.18em] text-stark-white/50 uppercase sm:block">
				Full stack systems
			</p>
		</div>
		<div class="flex flex-wrap gap-3">
			{#each skills as skill}
				<span
					class="border-2 border-stark-white/35 bg-onyx px-4 py-2 text-xs font-bold tracking-[0.14em] text-stark-white uppercase transition-colors duration-150 hover:border-stark-white hover:bg-stark-white hover:text-true-black"
				>
					{skill}
				</span>
			{/each}
		</div>
		<p class="max-w-2xl text-sm leading-7 text-stark-white/70">
			A focused stack across frontend systems, backend delivery, and rapid prototyping.
		</p>
	</section>

	<!-- PROJECTS (inverted panel for rhythm) -->
	<section id="projects" class="scroll-mt-24 border-2 border-stark-white bg-stark-white p-8 sm:p-12">
		<div class="flex items-center justify-between border-b-2 border-true-black pb-4">
			<h2 class="text-sm font-black tracking-[0.24em] text-true-black uppercase">Projects</h2>
			<p class="hidden text-xs font-bold tracking-[0.18em] text-true-black/50 uppercase sm:block">
				Selected builds
			</p>
		</div>

		<div class="mt-8 flex flex-col gap-6">
			{#each projects as project, i}
				<article
					class="grid grid-cols-1 gap-5 border-2 border-true-black bg-true-black p-6 transition-colors duration-150 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-8 sm:p-7"
				>
					<div class="flex w-12 items-center border-2 border-stark-white/25 bg-onyx px-3 py-2">
						<span class="text-sm font-black tracking-[0.1em] text-stark-white/60">
							{numbered(i + 1)}
						</span>
					</div>

					<div class="flex flex-col gap-3">
						<div class="flex flex-wrap items-center gap-3">
							<h3 class="text-2xl font-black text-stark-white">{project.name}</h3>
							<span
								class="border border-stark-white/30 bg-true-black px-2.5 py-1 text-[10px] font-bold tracking-[0.16em] text-stark-white/60 uppercase"
							>
								{project.stack}
							</span>
						</div>
						<p class="max-w-xl text-sm leading-6 text-stark-white/70">
							{project.description}
						</p>
					</div>

					<div class="flex items-center justify-start sm:justify-end">
						{#if project.link}
							<a href={project.link} target="_blank" rel="noreferrer" class="no-underline">
								<Button variant="secondary" class="px-4 py-2 text-xs">Open project</Button>
							</a>
						{:else}
							<span
								class="border-2 border-stark-white/30 bg-onyx px-4 py-2 text-xs font-bold tracking-[0.16em] text-stark-white/70 uppercase"
							>
								In active iteration
							</span>
						{/if}
					</div>
				</article>
			{/each}
		</div>
	</section>

	<!-- BLOG -->
	<section class="flex flex-col border-2 border-t-0 border-stark-white bg-true-black p-8 sm:p-12">
		<div class="flex flex-wrap items-center justify-between gap-3 border-b-2 border-stark-white/25 pb-4">
			<h2 class="text-sm font-black tracking-[0.24em] uppercase">Transmissions</h2>
			<div class="flex items-center gap-4">
				<p class="hidden text-xs font-bold tracking-[0.18em] text-stark-white/50 uppercase sm:block">
					Latest posts
				</p>
				<RssLink />
			</div>
		</div>

		{#if blogPosts.length > 0}
			<div class="mt-8 flex flex-col border-2 border-stark-white">
				{#each blogPosts as post, i}
					<a
						href={`/blog/${post.slug}`}
						class="blogrow group grid grid-cols-1 gap-3 border-b-2 border-stark-white/20 bg-true-black p-5 no-underline transition-colors duration-150 last:border-b-0 hover:bg-stark-white sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-6 sm:px-7 {i % 2 === 1 ? 'bg-onyx' : 'bg-true-black'}"
					>
						<span class="idx text-xs font-black tracking-[0.1em] text-stark-white/50">
							{numbered(i + 1)}
						</span>
						<h3
							class="text-lg font-bold text-stark-white transition-colors duration-150"
						>
							{post.title}
						</h3>
						<span
							class="views text-[10px] font-bold tracking-[0.18em] text-stark-white/50 uppercase"
						>
							{formatViews(post.views)} views →
						</span>
					</a>
				{/each}
			</div>
		{:else}
			<div class="mt-8 border-2 border-dashed border-stark-white/40 p-12 text-center">
				<p class="text-sm font-bold tracking-[0.24em] text-stark-white uppercase">
					No posts yet
				</p>
			</div>
		{/if}
	</section>
</div>

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
	<p class="font-bold text-stark-white">Continue to email?</p>
</Modal>

<style>
	@reference 'tailwindcss';

	.blogrow:hover h3 {
		color: #000;
	}

	.blogrow:hover .idx,
	.blogrow:hover .views {
		color: rgb(0 0 0 / 0.55);
	}
</style>