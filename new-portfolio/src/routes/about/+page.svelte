<script lang="ts">
	import Button from '$lib/component/Button/Button.svelte';
	import { experiences, tools, designSkills } from '$lib/list.svelte';
	import { DownloadResume } from '../contact/data.remote';

	let downloading = false;
	let downloadError: string | null = null;
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

<svelte:head>
	<title>About Me - Jeremy</title>
</svelte:head>

<div class="bg-background-950 text-text-500 p-8 font-sans">
	<!-- HERO SECTION -->
	<header class="mb-22 flex flex-col items-center gap-8 md:flex-row">
		<div class="h-32 w-32 flex-shrink-0 rounded-full bg-gray-200">
			<img
				src="https://8331whtezt.ufs.sh/f/KXoBapOHo7mg5ot2RXyDyEuRVm8kGiJwPQ6vNaUAhordHSTM"
				alt="a picture of me "
				class="h-42 w-32 flex-shrink-0 rounded-full"
			/>
		</div>
		<div class="text-center md:text-left">
			<h1 class="m-0 text-4xl font-bold">Hi, I'm Jeremy.</h1>
			<p class="my-2 mb-6 text-xl text-gray-50">
				Software Engineer focused on creating intuitive digital experiences.
			</p>
			<div class="flex justify-center gap-4 md:justify-start">
				<Button onclick={handleDownload} variant="secondary"
					>{downloading ? 'downloading' : 'Download my Resume'}</Button
				>
			</div>
		</div>
	</header>

	<main class="grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr]">
		<!-- LEFT COLUMN -->
		<div class="flex flex-col gap-8">
			<section class="bg-background-900 rounded-2xl p-8 shadow-md">
				<h2 class="mt-0 mb-6 text-2xl font-semibold">My Story & Philosophy</h2>
				<p class="leading-relaxed text-gray-50">
					A personal narrative about my journey into software engineering and my design philosophy,
					emphasizing my core principles and approach to creating user-centered products. I believe
					that great design is not just about aesthetics, but about solving real-world problems and
					making technology accessible and enjoyable for everyone. My approach is rooted in empathy,
					collaboration, and a relentless pursuit of simplicity.
				</p>
			</section>

			<section class="bg-background-900 rounded-2xl p-8 shadow-md">
				<h2 class="mt-0 mb-6 text-2xl font-semibold">Experience</h2>
				{#each experiences as experience}
					<div class="experience-timeline">
						<div class="experience-item">
							<div class="timeline-dot"></div>
							<div class="timeline-content">
								<span class="mb-1 block text-sm text-gray-50">{experience.timeline}</span>
								<h3 class="m-0 text-lg font-semibold">{experience.title}</h3>
								<p class="mt-2 leading-relaxed text-gray-50">
									{experience.description}
								</p>
							</div>
						</div>
					</div>
				{/each}
			</section>
		</div>

		<!-- RIGHT COLUMN -->
		<aside class="flex flex-col gap-8">
			<section class="bg-background-900 rounded-2xl p-8 shadow-md">
				<h2 class="mt-0 mb-6 text-2xl font-semibold">Tools & Software</h2>
				<div class="flex flex-wrap gap-3">
					{#each tools as tool}
						<span class="bg-background-800 text-text-200 rounded-full px-4 py-2 text-sm font-medium"
							>{tool}</span
						>
					{/each}
				</div>
			</section>

			<section class="bg-background-900 rounded-2xl p-8 shadow-md">
				<h2 class="mt-0 mb-6 text-2xl font-semibold">Skills</h2>
				<div class="grid grid-cols-2 gap-3">
					{#each designSkills as skill}
						<div
							class="bg-background-800 flex flex-col items-center gap-3 rounded-xl p-4 text-center"
						>
							<div class="text-secondary-200">
								{@html skill.icon}
							</div>
							<span>{skill.name}</span>
						</div>
					{/each}
				</div>
			</section>

			<section class="bg-background-900 rounded-2xl p-8 shadow-md">
				<h2 class="mt-0 mb-6 text-2xl font-semibold">A Little More About Me</h2>
				<div class="mb-4 grid grid-cols-2 gap-4">
					<div class="aspect-square w-full rounded-xl bg-gray-200">
						<img
							src="https://8331whtezt.ufs.sh/f/KXoBapOHo7mg5KZJGLyDyEuRVm8kGiJwPQ6vNaUAhordHSTM"
							alt=""
							class="aspect-squares"
						/>
					</div>
					<div class="aspect-square w-full rounded-xl bg-gray-200">
						<img
							src="https://8331whtezt.ufs.sh/f/KXoBapOHo7mgRRf9PvaNCdjpzBuK7vHeO4FDo5b1GXgw8Q2c"
							class="aspect-square"
							alt=""
						/>
					</div>
				</div>
				<p class="leading-relaxed text-gray-200">
					When I'm not coding, you can find me helping in the church or playing super smash bros or
					pokemon I believe that creativity thrives on diverse experiences.
				</p>
			</section>
		</aside>
	</main>
</div>

<style>
	/* Experience Timeline - Requires pseudo-elements not available in Tailwind */
	.experience-timeline {
		position: relative;
		border-left: 2px solid #dee2e6; /* --border-color */
		padding-left: 2rem;
	}
	.experience-item {
		position: relative;
		margin-bottom: 2rem;
	}
	.experience-item:last-child {
		margin-bottom: 0;
	}
	.timeline-dot {
		position: absolute;
		left: -2.5rem;
		top: 4px;
		width: 16px;
		height: 16px;
		border-radius: 9999px;
		background-color: #0d6efd; /* --accent-color */
	}
</style>
