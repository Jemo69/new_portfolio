<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import { experiences, tools, designSkills } from '$lib/list.svelte';
	import { DownloadResume } from '../contact/data.remote';
	import { reveal } from '$lib/actions/reveal';
	import SEO from '$lib/components/SEO.svelte';

	let downloading = $state(false);
	let downloadError = $state<string | null>(null);
	async function handleDownload() {
		downloading = true;
		downloadError = null;

		const result = await DownloadResume();

		downloading = false;
		if (!result.ok) {
			downloadError = result.error ?? 'Download failed';
			return;
		}

		// Convert Uint8Array to Blob and trigger browser download
		const blob = new Blob([result.data], { type: result.mimeType });
		const url = URL.createObjectURL(blob);

		const a = document.createElement('a');
		a.href = url;
		a.download = result.filename; // already resolved on the server
		document.body.appendChild(a);
		a.click();
		a.remove();

		URL.revokeObjectURL(url);
	}
</script>

<SEO
	title="ABOUT // JEMO CORE"
	description="Learn about Jeremy Nwachukwu, the engineer behind JEMO CORE and the Jeremy Portfolio. Expertise in software development and tactical digital experiences."
	canonical="https://new-portfolio-ten-amber.vercel.app/about"
/>

<div class="flex flex-col gap-16 font-sans">
	<!-- HERO SECTION -->
	<header use:reveal class="flex flex-col items-center gap-8 md:flex-row">
		<div
			class="h-40 w-40 flex-shrink-0 border-4 border-stark-white bg-onyx grayscale transition-all hover:grayscale-0"
		>
			<img
				src="https://8331whtezt.ufs.sh/f/KXoBapOHo7mg5ot2RXyDyEuRVm8kGiJwPQ6vNaUAhordHSTM"
				alt="Jeremy"
				class="h-full w-full object-cover"
			/>
		</div>
		<div class="text-center md:text-left">
			<h1 class="mb-4 text-4xl font-black uppercase tracking-tighter sm:text-6xl">
				Hi, I'm Jeremy.
			</h1>
			<p class="mb-8 max-w-xl text-lg font-bold text-gray-400 uppercase sm:text-xl">
				Software Engineer focused on creating <span class="text-stark-white"
					>tactical digital experiences.</span
				>
			</p>
			<div class="flex justify-center gap-4 md:justify-start">
				<Button onclick={handleDownload} variant="secondary">
					{downloading ? 'TRANSMITTING...' : 'DOWNLOAD RESUME'}
				</Button>
			</div>
			{#if downloadError}
				<p class="mt-4 text-xs font-bold text-red-500 uppercase">{downloadError}</p>
			{/if}
		</div>
	</header>

	<main class="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_1fr]">
		<!-- LEFT COLUMN -->
		<div class="flex flex-col gap-12">
			<section use:reveal={{ delay: 100 }} class="border-l-2 border-stark-white pl-6 sm:pl-8">
				<h2 class="mb-6 text-2xl font-black uppercase tracking-widest">Story & Philosophy</h2>
				<p class="leading-relaxed text-gray-300">
					A personal narrative about my journey into software engineering and my design philosophy,
					emphasizing my core principles and approach to creating user-centered products. I believe
					that great design is not just about aesthetics, but about solving real-world problems and
					making technology accessible and enjoyable for everyone. My approach is rooted in empathy,
					collaboration, and a relentless pursuit of simplicity.
				</p>
			</section>

			<section use:reveal={{ delay: 200 }} class="border-l-2 border-stark-white pl-6 sm:pl-8">
				<h2 class="mb-6 text-2xl font-black uppercase tracking-widest">Field Experience</h2>
				<div class="flex flex-col gap-8">
					{#each experiences as experience}
						<div class="relative">
							<span class="mb-1 block text-xs font-black tracking-widest text-gray-500 uppercase"
								>{experience.timeline}</span
							>
							<h3 class="mb-2 text-xl font-bold uppercase">{experience.title}</h3>
							<p class="leading-relaxed text-gray-400">
								{experience.description}
							</p>
						</div>
					{/each}
				</div>
			</section>
		</div>

		<!-- RIGHT COLUMN -->
		<aside class="flex flex-col gap-12">
			<section use:reveal={{ delay: 300 }} class="border-2 border-stark-white bg-onyx p-6">
				<h2 class="mb-6 text-xl font-black uppercase tracking-widest">Technical Tools</h2>
				<div class="flex flex-wrap gap-2">
					{#each tools as tool}
						<span class="border border-gray-600 px-3 py-1 text-xs font-bold uppercase text-gray-400">
							{tool}
						</span>
					{/each}
				</div>
			</section>

			<section class="border-2 border-stark-white bg-onyx p-6">
				<h2 class="mb-6 text-xl font-black uppercase tracking-widest">Core Skills</h2>
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
					{#each designSkills as skill}
						<div class="flex flex-col gap-2 border border-gray-700 p-4">
							<div class="text-stark-white">
								{@html skill.icon}
							</div>
							<span class="text-xs font-bold uppercase">{skill.name}</span>
						</div>
					{/each}
				</div>
			</section>

			<section class="border-2 border-stark-white bg-onyx p-6">
				<h2 class="mb-6 text-xl font-black uppercase tracking-widest">Visual Data</h2>
				<div class="mb-6 grid grid-cols-2 gap-4">
					<div class="aspect-square border border-gray-700">
						<img
							src="https://8331whtezt.ufs.sh/f/KXoBapOHo7mg5KZJGLyDyEuRVm8kGiJwPQ6vNaUAhordHSTM"
							alt=""
							class="h-full w-full object-cover grayscale transition-all hover:grayscale-0"
						/>
					</div>
					<div class="aspect-square border border-gray-700">
						<img
							src="https://8331whtezt.ufs.sh/f/KXoBapOHo7mgRRf9PvaNCdjpzBuK7vHeO4FDo5b1GXgw8Q2c"
							class="h-full w-full object-cover grayscale transition-all hover:grayscale-0"
							alt=""
						/>
					</div>
				</div>
				<p class="text-sm leading-relaxed text-gray-400">
					When I'm not coding, you can find me helping in the church or playing super smash bros or
					pokemon I believe that creativity thrives on diverse experiences.
				</p>
			</section>
		</aside>
	</main>
</div>

<style>
	@reference 'tailwindcss';
</style>
