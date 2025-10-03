<script lang="ts">
	import Button from '$lib/component/Button/Button.svelte';
	import { experiences } from '$lib/list.svelte';
</script>

<svelte:head>
	<title>About Me - Jeremy</title>
</svelte:head>

<div class="bg-background-950 p-8 font-sans text-text-500">
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
				<Button variant="secondary">View Resume</Button>
				<Button variant="primary">Contact Me</Button>
			</div>
		</div>
	</header>

	<main class="grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr]">
		<!-- LEFT COLUMN -->
		<div class="flex flex-col gap-8">
			<section class="rounded-2xl bg-background-900 p-8 shadow-md">
				<h2 class="mt-0 mb-6 text-2xl font-semibold">My Story & Philosophy</h2>
				<p class="leading-relaxed text-gray-50">
					A personal narrative about my journey into software engineering and my design philosophy,
					emphasizing my core principles and approach to creating user-centered products. I believe
					that great design is not just about aesthetics, but about solving real-world problems and
					making technology accessible and enjoyable for everyone. My approach is rooted in empathy,
					collaboration, and a relentless pursuit of simplicity.
				</p>
			</section>

			<section class="rounded-2xl bg-background-900 p-8 shadow-md">
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
			<section class="rounded-2xl bg-background-900 p-8 shadow-md">
				<h2 class="mt-0 mb-6 text-2xl font-semibold">Tools & Software</h2>
				<div class="flex flex-wrap gap-3">
					<span class="rounded-full bg-background-800 px-4 py-2 text-sm font-medium text-text-200"
						>Figma</span
					>
					<span class="rounded-full bg-background-800 px-4 py-2 text-sm font-medium text-text-200"
						>Sketch</span
					>
					<span class="rounded-full bg-background-800 px-4 py-2 text-sm font-medium text-text-200"
						>Adobe XD</span
					>
					<span class="rounded-full bg-background-800 px-4 py-2 text-sm font-medium text-text-200"
						>InVision</span
					>
					<span class="rounded-full bg-background-800 px-4 py-2 text-sm font-medium text-text-200"
						>Principle</span
					>
					<span class="rounded-full bg-background-800 px-4 py-2 text-sm font-medium text-text-200"
						>Jira</span
					>
				</div>
			</section>

			<section class="rounded-2xl bg-background-900 p-8 shadow-md">
				<h2 class="mt-0 mb-6 text-2xl font-semibold">Skills</h2>
				<div class="grid grid-cols-2 gap-3">
					<div
						class="flex flex-col items-center gap-3 rounded-xl bg-background-800 p-4 text-center"
					>
						<div class="text-secondary-200">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle
									cx="9"
									cy="7"
									r="4"
								/><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg
							>
						</div>
						<span>User Research</span>
					</div>
					<div
						class="flex flex-col items-center gap-3 rounded-xl bg-background-800 p-4 text-center"
					>
						<div class="text-secondary-200">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72" /><path
									d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"
								/></svg
							>
						</div>
						<span>Interaction Design</span>
					</div>
					<div
						class="flex flex-col items-center gap-3 rounded-xl bg-background-800 p-4 text-center"
					>
						<div class="text-secondary-200">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								><circle cx="12" cy="12" r="3" /><path
									d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
								/><path
									d="M22 12c-2.25 6-6.75 9-10 9s-7.75-3-10-9c2.25-6 6.75-9 10-9s7.75 3 10 9z"
								/></svg
							>
						</div>
						<span>Visual Design</span>
					</div>
					<div
						class="flex flex-col items-center gap-3 rounded-xl bg-background-800 p-4 text-center"
					>
						<div class="text-secondary-200">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><path d="M3 9h18" /><path
									d="M9 21V9"
								/></svg
							>
						</div>
						<span>Prototyping</span>
					</div>
				</div>
			</section>

			<section class="rounded-2xl bg-background-900 p-8 shadow-md">
				<h2 class="mt-0 mb-6 text-2xl font-semibold">A Little More About Me</h2>
				<div class="mb-4 grid grid-cols-2 gap-4">
					<div class="aspect-square w-full rounded-xl bg-gray-200"></div>
					<div class="aspect-square w-full rounded-xl bg-gray-200"></div>
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
