<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import { postContact, DownloadResume } from './data.remote';
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
	title="Contact, Money Gazer style"
	description="Reach out for product design, frontend engineering, and collaboration with a cleaner contact experience."
	canonical="https://new-portfolio-ten-amber.vercel.app/contact"
/>

<div class="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center gap-12 py-12">
	<div class="grid w-full grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
		<div use:reveal class="pt-4">
			<div
				class="mb-5 inline-flex items-center gap-3 rounded-full border border-secondary-200 bg-secondary-50/75 px-4 py-2 text-xs font-semibold tracking-[0.22em] text-secondary-700 uppercase"
			>
				<span class="h-2.5 w-2.5 rounded-full bg-primary-500"></span>
				Open for projects
			</div>
			<h1 class="max-w-xl text-4xl leading-[0.95] font-black sm:text-6xl">Establish Comms</h1>
			<p class="mt-6 max-w-lg text-lg leading-8 text-text-700">
				I was open to new opportunities, and I'm excited to work with you. I'm looking forward to
				hearing from you!
			</p>
			<div class="mt-8 flex flex-col items-start gap-4">
				<Button onclick={handleDownload} variant="secondary">
					{downloading ? 'Preparing resume...' : 'Download resume'}
				</Button>
				{#if downloadError}
					<p class="text-sm font-medium text-accent-600">{downloadError}</p>
				{/if}
			</div>
		</div>

		<div
			use:reveal={{ delay: 200 }}
			class="rounded-[2rem] border border-secondary-200/70 bg-background-50 p-6 shadow-[0_28px_70px_-34px_rgba(17,15,36,0.45)] sm:p-8"
		>
			<div class="mb-8 flex items-start justify-between gap-4">
				<div>
					<p class="text-xs font-semibold tracking-[0.22em] text-text-500 uppercase">
						Contact form
					</p>
					<h2 class="mt-2 text-3xl font-black text-text-950">Start the conversation</h2>
				</div>
				<div
					class="rounded-2xl bg-primary-50 px-4 py-3 text-right text-sm leading-5 text-primary-700"
				>
					<p class="font-semibold">Response style</p>
					<p>Clear, direct, practical</p>
				</div>
			</div>

			<form {...postContact} class="flex flex-col gap-6">
				<div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
					<div class="flex flex-col gap-2.5">
						<label for="name" class="text-sm font-semibold text-text-700">Your name</label>
						<input
							id="name"
							name="name"
							type="text"
							placeholder="Jeremy Nwachukwu"
							required
							class="w-full rounded-2xl border border-secondary-200 bg-secondary-50/55 px-4 py-4 text-base text-text-950 placeholder:text-text-500 focus:border-primary-400 focus:bg-background-50 focus:ring-4 focus:ring-primary-100 focus:outline-none"
						/>
					</div>
					<div class="flex flex-col gap-2.5">
						<label for="email" class="text-sm font-semibold text-text-700">Email</label>
						<input
							id="email"
							name="email"
							type="email"
							placeholder="you@company.com"
							required
							class="w-full rounded-2xl border border-secondary-200 bg-secondary-50/55 px-4 py-4 text-base text-text-950 placeholder:text-text-500 focus:border-primary-400 focus:bg-background-50 focus:ring-4 focus:ring-primary-100 focus:outline-none"
						/>
					</div>
				</div>

				<div class="flex flex-col gap-2.5">
					<label for="message" class="text-sm font-semibold text-text-700">Project details</label>
					<textarea
						id="message"
						name="message"
						placeholder="Tell me what you are building, what needs improvement, and your timeline."
						required
						class="min-h-[180px] w-full rounded-3xl border border-secondary-200 bg-secondary-50/55 px-4 py-4 text-base leading-7 text-text-950 placeholder:text-text-500 focus:border-primary-400 focus:bg-background-50 focus:ring-4 focus:ring-primary-100 focus:outline-none"
					></textarea>
				</div>

				<div
					class="flex flex-col gap-4 border-t border-secondary-100 pt-6 sm:flex-row sm:items-center sm:justify-between"
				>
					<p class="max-w-md text-sm leading-6 text-text-600">
						Best for product redesigns, landing pages, frontend engineering, and rapid prototypes.
					</p>
					<Button type="submit" class="w-full sm:w-auto">Send message</Button>
				</div>
			</form>
		</div>
	</div>
</div>

<style>
	@reference 'tailwindcss';
</style>
