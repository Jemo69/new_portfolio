<script lang="ts">
	let skills = $state([
		'Python',
		'JavaScript',
		'HTML/CSS',
		'React',
		'Svelte',
		'Node.js',
		'FastAPI'
	]);

	let projects = $state([
		{
			id: 1,
			name: 'Project Alarm',
			stack: 'Python, SvelteKit',
			description: 'A smart alarm clock application built to integrate with home automation systems.'
		},
		{
			id: 2,
			name: 'Portfolio Website',
			stack: 'SvelteKit, TailwindCSS',
			description: 'The very website you are looking at, designed to be clean and responsive.'
		},
		{
			id: 3,
			name: 'E-commerce API',
			stack: 'Node.js, Express, MongoDB',
			description: 'A robust backend for an e-commerce platform with JWT authentication.'
		}
	]);
</script>

<svelte:head>
	<title>Jeremy Nwachukwu - Portfolio</title>
</svelte:head>

<main class="mx-auto max-w-7xl bg-gradient-to-br from-gray-900 via-background-950 to-gray-900 p-4 text-text-50 md:p-8">
	<!-- Hero Section -->
	<section id="home" class="flex min-h-[80vh] items-center justify-center py-24 sm:py-32">
		<div class="max-w-3xl text-center">
			<div
				class="mx-auto mb-10 h-48 w-48 rounded-full bg-gradient-to-br from-orange-600 to-red-700 shadow-2xl"
			>
				<!-- Placeholder for profile picture -->
			</div>
			<h1 class="text-5xl font-bold tracking-tight text-orange-500 sm:text-7xl">
				Hello There.
			</h1>
			<p class="mt-6 text-xl leading-8 text-gray-300">
				I'm <span class="font-semibold text-white">Jeremy (aka Jemo)</span>, a Nigerian computer
				science student. My main focus is using programming to solve problems and build amazing
				things for the web.
			</p>
			<div class="mt-10 flex items-center justify-center gap-x-6">
				<a
					href="#projects"
					class="rounded-md bg-orange-600 px-4 py-3 text-base font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
					>View My Work</a
				>
				<a
					href="#skills"
					class="text-base font-semibold leading-6 text-white transition-transform hover:scale-105"
					>See my skills <span aria-hidden="true">→</span></a
				>
			</div>
		</div>
	</section>

	<!-- Skills Section -->
	<section id="skills" class="py-24 sm:py-32">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-4xl font-bold tracking-tight text-orange-500 sm:text-5xl">
				My Technical Skills
			</h2>
			<p class="mt-6 text-lg leading-8 text-gray-400">
				A look at the technologies I enjoy working with.
			</p>
		</div>
		<div class="mt-16 flex flex-wrap justify-center gap-4">
			{#each skills as skill}
				<span
					class="rounded-full bg-gray-800 px-5 py-3 text-base font-semibold text-gray-300 shadow-md transition-transform hover:scale-110 hover:bg-orange-600"
				>
					{skill}
				</span>
			{/each}
		</div>
	</section>

	<!-- Projects Section -->
	<section id="projects" class="py-24 sm:py-32">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-4xl font-bold tracking-tight text-orange-500 sm:text-5xl">
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
					<h3 class="text-xl font-semibold leading-7 tracking-tight text-white">
						{project.name}
					</h3>
					<p class="mt-2 text-sm font-semibold text-orange-400">{project.stack}</p>
					<p class="mt-5 text-base leading-7 text-gray-300">{project.description}</p>
					<div class="mt-6">
						<a
							href={'#'}
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