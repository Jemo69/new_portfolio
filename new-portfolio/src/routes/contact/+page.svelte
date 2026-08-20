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
	title="Contact"
	description="Reach out for product design, frontend engineering, and collaboration. Open for new projects."
	canonical="https://new-portfolio-ten-amber.vercel.app/contact"
/>

<div class="py-6">
	<div class="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
		<div use:reveal class="flex flex-col gap-6 lg:pt-4">
			<div class="inline-flex items-center gap-3 self-start border-2 border-stark-white bg-true-black px-4 py-2">
				<span class="h-2 w-2 bg-stark-white"></span>
				<span class="text-xs font-black tracking-[0.24em] text-stark-white uppercase">
					Open for projects
				</span>
			</div>
			<h1 class="max-w-xl text-4xl font-black leading-[0.98] tracking-[-0.02em] sm:text-6xl">
				Establish comms
			</h1>
			<p class="max-w-lg text-lg leading-8 text-stark-white/80">
				Open to new builds, redesigns, and collaborations. Tell me what you're working on
				and I'll get back to you.
			</p>
			<div class="flex flex-col items-start gap-4">
				<Button onclick={handleDownload} variant="secondary">
					{downloading ? 'Preparing resume...' : 'Download resume'}
				</Button>
				{#if downloadError}
					<p class="text-sm font-semibold text-stark-white">{downloadError}</p>
				{/if}
			</div>
		</div>

		<div
			use:reveal
			class="border-2 border-stark-white bg-true-black p-6 sm:p-8"
		>
			<div class="mb-8 flex items-center justify-between gap-4 border-b-2 border-stark-white/25 pb-5">
				<h2 class="text-2xl font-black tracking-[0.08em] uppercase">
					Start the conversation
				</h2>
				<span class="hidden text-[10px] font-bold tracking-[0.2em] text-stark-white/50 uppercase sm:block">
					Response style: direct
				</span>
			</div>

			<form {...postContact} class="flex flex-col gap-6">
				<div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
					<div class="flex flex-col gap-2">
						<label for="name" class="text-xs font-bold tracking-[0.16em] text-stark-white/75 uppercase">
							Your name
						</label>
						<input
							id="name"
							name="name"
							type="text"
							placeholder="Jeremy Nwachukwu"
							required
							class="w-full rounded-[10px] border-2 border-stark-white/40 bg-onyx px-4 py-3 text-base text-stark-white placeholder:text-gray-500 transition-colors duration-150 focus:border-stark-white focus:bg-true-black focus:outline-none"
						/>
					</div>
					<div class="flex flex-col gap-2">
						<label for="email" class="text-xs font-bold tracking-[0.16em] text-stark-white/75 uppercase">
							Email
						</label>
						<input
							id="email"
							name="email"
							type="email"
							placeholder="you@company.com"
							required
							class="w-full rounded-[10px] border-2 border-stark-white/40 bg-onyx px-4 py-3 text-base text-stark-white placeholder:text-gray-500 transition-colors duration-150 focus:border-stark-white focus:bg-true-black focus:outline-none"
						/>
					</div>
				</div>

				<div class="flex flex-col gap-2">
					<label for="message" class="text-xs font-bold tracking-[0.16em] text-stark-white/75 uppercase">
						Project details
					</label>
					<textarea
						id="message"
						name="message"
						placeholder="Tell me what you are building, what needs improvement, and your timeline."
						required
						rows="7"
						class="min-h-[180px] w-full rounded-[10px] border-2 border-stark-white/40 bg-onyx px-4 py-3 text-base leading-7 text-stark-white placeholder:text-gray-500 transition-colors duration-150 focus:border-stark-white focus:bg-true-black focus:outline-none"
					></textarea>
				</div>

				<div class="flex flex-col gap-4 border-t-2 border-stark-white/25 pt-6 sm:flex-row sm:items-center sm:justify-between">
					<p class="max-w-md text-sm leading-6 text-stark-white/60">
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