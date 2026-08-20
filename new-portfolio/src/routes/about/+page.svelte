<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import { experiences, tools, currentAge } from '$lib/list.svelte';
	import { DownloadResume } from '../contact/data.remote';
	import { reveal } from '$lib/actions/reveal';
	import SEO from '$lib/components/SEO.svelte';

	let downloading = $state(false);
	let downloadError = $state<string | null>(null);
	const age = currentAge();
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
	title="ABOUT"
	description="Learn about Ifeanyichukwu Jeremy Nwachukwu, the engineer behind this portfolio. Expertise in software development and tactical digital experiences."
	canonical="https://new-portfolio-ten-amber.vercel.app/about"
/>

<div class="flex flex-col gap-16">
	<!-- HERO SECTION -->
	<header class="grid grid-cols-1 items-center gap-10 lg:grid-cols-[auto_1fr]">
		<div
			class="h-44 w-44 shrink-0 border-2 border-stark-white bg-true-black"
			use:reveal
		>
			<img
				src="https://8331whtezt.ufs.sh/f/KXoBapOHo7mg5ot2RXyDyEuRVm8kGiJwPQ6vNaUAhordHSTM"
				alt="Portrait of Jeremy"
				class="h-full w-full object-cover grayscale transition-all duration-300 hover:grayscale-0"
			/>
		</div>
		<div class="flex flex-col gap-6 text-center lg:text-left">
			<h1 class="text-4xl font-black tracking-[-0.02em] uppercase sm:text-6xl">
				Jeremy Nwachukwu
			</h1>
			<p class="max-w-2xl text-lg font-semibold leading-8 text-stark-white/85 sm:text-xl">
				I'm Ifeanyichukwu — Jeremy, for short — a {age}-year-old software engineer
				building tactical digital experiences. I work across the frontend, the backend,
				and the line between them.
			</p>
			<div class="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
				<Button onclick={handleDownload} variant="secondary">
					{downloading ? 'Transmitting...' : 'Download resume'}
				</Button>
			</div>
			{#if downloadError}
				<p class="font-bold tracking-[0.16em] text-stark-white uppercase">{downloadError}</p>
			{/if}
		</div>
	</header>

	<main class="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_1fr]">
		<!-- LEFT COLUMN -->
		<div class="flex flex-col gap-12">
			<section
				class="border-2 border-stark-white bg-true-black p-6 sm:p-8"
				use:reveal
			>
				<div class="mb-6 flex items-center justify-between border-b-2 border-stark-white/25 pb-4">
					<h2 class="text-sm font-black tracking-[0.24em] uppercase">Story & philosophy</h2>
				</div>
				<p class="max-w-2xl leading-relaxed text-stark-white/80">
					I learned to code by building things I wanted to exist and breaking them until
					they worked. That habit turned into a trade: clean systems, honest interfaces,
					and software that does what it says. I believe great design is about solving
					real problems, not decorating them. My approach is rooted in empathy,
					collaboration, and a relentless pursuit of simplicity.
				</p>
			</section>

			<section class="border-2 border-stark-white bg-true-black p-6 sm:p-8" use:reveal>
				<div class="mb-6 flex items-center justify-between border-b-2 border-stark-white/25 pb-4">
					<h2 class="text-sm font-black tracking-[0.24em] uppercase">Field experience</h2>
				</div>
				<div class="flex flex-col gap-8">
					{#each experiences as experience}
						<div class="flex flex-col gap-2">
							<span class="text-xs font-black tracking-[0.2em] text-stark-white/50 uppercase">
								{experience.timeline}
							</span>
							<h3 class="text-xl font-bold text-stark-white">{experience.title}</h3>
							<p class="max-w-2xl leading-relaxed text-stark-white/75">
								{experience.description}
							</p>
						</div>
					{/each}
				</div>
			</section>
		</div>

		<!-- RIGHT COLUMN -->
		<aside class="flex flex-col gap-12">
			<section class="border-2 border-stark-white bg-true-black p-6 sm:p-8" use:reveal>
				<div class="mb-6 flex items-center justify-between border-b-2 border-stark-white/25 pb-4">
					<h2 class="text-sm font-black tracking-[0.24em] uppercase">Technical tools</h2>
				</div>
				<div class="flex flex-wrap gap-2">
					{#each tools as tool}
						<span
							class="border-2 border-stark-white/30 bg-onyx px-3 py-1 text-xs font-bold tracking-[0.14em] text-stark-white/80 uppercase transition-colors duration-150 hover:border-stark-white hover:text-stark-white"
						>
							{tool}
						</span>
					{/each}
				</div>
			</section>

			<section class="border-2 border-stark-white bg-true-black p-6 sm:p-8">
				<div class="mb-6 flex items-center justify-between border-b-2 border-stark-white/25 pb-4">
					<h2 class="text-sm font-black tracking-[0.24em] uppercase">Visual data</h2>
				</div>
				<div class="mb-6 grid grid-cols-2 gap-4">
					<div class="border-2 border-stark-white/30">
						<img
							src="https://8331whtezt.ufs.sh/f/KXoBapOHo7mg5KZJGLyDyEuRVm8kGiJwPQ6vNaUAhordHSTM"
							alt=""
							class="h-full w-full object-cover grayscale transition-all duration-300 hover:grayscale-0"
						/>
					</div>
					<div class="border-2 border-stark-white/30">
						<img
							src="https://8331whtezt.ufs.sh/f/KXoBapOHo7mgRRf9PvaNCdjpzBuK7vHeO4FDo5b1GXgw8Q2c"
							class="h-full w-full object-cover grayscale transition-all duration-300 hover:grayscale-0"
							alt=""
						/>
					</div>
				</div>
				<p class="text-sm leading-relaxed text-stark-white/65">
					When I'm not coding, you can find me helping at my church or playing Super Smash
					Bros. I believe creativity thrives on diverse experiences.
				</p>
			</section>
		</aside>
	</main>
</div>

<style>
	@reference 'tailwindcss';
</style>