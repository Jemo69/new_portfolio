<script lang="ts">
	import { skills, projects } from '$lib/list.svelte.ts';
</script>

<svelte:head>
	<title>Jeremy Nwachukwu - Portfolio</title>
</svelte:head>

<main
	class="mx-auto w-[95dvw] max-w-screen bg-gradient-to-br from-gray-900 via-background-950 to-gray-900 p-4 text-text-50 md:p-8"
>
	<!-- Hero Section -->
	<section id="home" class="flex min-h-[80vh] items-center justify-center py-24 sm:py-32">
		<div class="max-w-3xl text-center">
			<div
				class="mx-auto mb-10 h-48 w-48 rounded-full bg-gradient-to-br from-primary-600 to-red-700 shadow-2xl"
			>
				<!-- Placeholder for profile picture -->
			</div>
			<h1 class="text-5xl font-bold tracking-tight text-primary-500 sm:text-7xl">Hello There.</h1>
			<p class="mt-6 text-xl leading-8 text-gray-300">
				I'm <span class="font-semibold text-white">Jeremy (aka Jemo)</span>, a Nigerian computer
				science student. My main focus is using programming to solve problems and build amazing
				things for the web.
			</p>
			<div class="mt-10 flex items-center justify-center gap-x-6">
				<a
					href="#projects"
					class="rounded-md bg-primary-600 px-4 py-3 text-base font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
					>View My Work</a
				>
				<a
					href="#skills"
					class="text-base leading-6 font-semibold text-white transition-transform hover:scale-105"
					>See my skills <span aria-hidden="true">→</span></a
				>
			</div>
		</div>
	</section>

	<!-- Skills Section -->
	<section id="skills" class="py-24 sm:py-32">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-4xl font-bold tracking-tight text-primary-500 sm:text-5xl">
				My Technical Skills
			</h2>
			<p class="mt-6 text-lg leading-8 text-gray-400">
				A look at the technologies I enjoy working with.
			</p>
		</div>
		<div class="mt-16 flex flex-wrap justify-center gap-4">
			{#each skills as skill}
				<span
					class="rounded-full bg-gray-800 px-5 py-3 text-base font-semibold text-gray-300 shadow-md transition-transform hover:scale-110 hover:bg-primary-600"
				>
					{skill}
				</span>
			{/each}
		</div>
	</section>

	<!-- Projects Section -->
	<section id="projects" class="py-24 sm:py-32">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-4xl font-bold tracking-tight text-primary-500 sm:text-5xl">
				Featured Projects
			</h2>
			<p class="mt-6 text-lg leading-8 text-gray-400">
				Here are some of the projects I'm proud of.
			</p>
		</div>
		<div class="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
			{#each projects as project (project.id)}
				<div
					class="rounded-xl bg-gray-800/50 p-8 shadow-xl ring-1 ring-white/10 transition-transform hover:scale-105"
				>
					<h3 class="text-xl leading-7 font-semibold tracking-tight text-white">
						{project.name}
					</h3>
					<p class="mt-2 text-sm font-semibold text-primary-400">{project.stack}</p>
					<p class="mt-5 text-base leading-7 text-gray-300">{project.description}</p>
					<div class="mt-6">
						<a
							href={project.link}
							class="rounded-md bg-red-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-red-600"
						>
							More Details
						</a>
					</div>
				</div>
			{/each}
		</div>
	</section>
</main>

<style>
	@reference 'tailwindcss';
</style>

