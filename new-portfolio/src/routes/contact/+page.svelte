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
	title="CONTACT // JEMO CORE"
	description="Establish communications with Jeremy Nwachukwu (JEMO CORE). Reach out for tactical collaborations, software engineering projects, or inquiries about the Jeremy Portfolio."
	canonical="https://new-portfolio-ten-amber.vercel.app/contact"
/>

<div class="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center gap-12 py-12">
	<div class="grid w-full grid-cols-1 gap-12 lg:grid-cols-2">
		<div
			use:reveal
			class="flex flex-col justify-center border-l-2 border-stark-white pl-6 sm:pl-8"
		>
			<h1 class="mb-6 text-4xl font-black uppercase tracking-tighter sm:text-6xl">
				Establish <br /> Comms.
			</h1>
			<p class="mb-8 max-w-md text-lg font-bold text-gray-400 uppercase">
				I'm always open to new opportunities and <span class="text-stark-white"
					>tactical collaborations.</span
				>
			</p>
			<div class="flex flex-col items-start gap-4">
				<Button onclick={handleDownload} variant="secondary">
					{downloading ? 'TRANSMITTING...' : 'DOWNLOAD RESUME'}
				</Button>
				{#if downloadError}
					<p class="text-xs font-bold text-red-500 uppercase">{downloadError}</p>
				{/if}
			</div>
		</div>

		<div use:reveal={{ delay: 200 }} class="border-2 border-stark-white bg-onyx p-8">
			<h2 class="mb-8 text-2xl font-black uppercase tracking-widest">Inquiry Form</h2>
			<form {...postContact} class="flex flex-col gap-6">
				<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
					<div class="flex flex-col gap-2">
						<label for="name" class="text-xs font-black tracking-widest text-gray-500 uppercase"
							>Operator Name</label
						>
						<input
							id="name"
							name="name"
							type="text"
							placeholder="John Doe"
							required
							class="border-2 border-gray-700 bg-true-black p-4 text-sm font-bold text-stark-white uppercase focus:border-stark-white focus:outline-none"
						/>
					</div>
					<div class="flex flex-col gap-2">
						<label for="email" class="text-xs font-black tracking-widest text-gray-500 uppercase"
							>Signal Address</label
						>
						<input
							id="email"
							name="email"
							type="email"
							placeholder="example@example.com"
							required
							class="border-2 border-gray-700 bg-true-black p-4 text-sm font-bold text-stark-white uppercase focus:border-stark-white focus:outline-none"
						/>
					</div>
				</div>

				<div class="flex flex-col gap-2">
					<label for="message" class="text-xs font-black tracking-widest text-gray-500 uppercase"
						>Transmission Content</label
					>
					<textarea
						id="message"
						name="message"
						placeholder="Type your message here..."
						required
						class="min-h-[150px] border-2 border-gray-700 bg-true-black p-4 text-sm font-bold text-stark-white uppercase focus:border-stark-white focus:outline-none"
					></textarea>
				</div>

				<Button type="submit" class="w-full">Initiate Send</Button>
			</form>
		</div>
	</div>
</div>

<style>
	@reference 'tailwindcss';
</style>
