<script lang="ts">
	import Button from '$lib/component/Button/Button.svelte';
	import { postContact, DownloadResume } from './data.remote';

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
	<title>Contact Jeremy</title>
</svelte:head>

<div class="container mx-auto flex h-screen items-center p-4">
	<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
		<div class="flex flex-col justify-center">
			<h1 class="mb-4 text-4xl font-bold" style="color: var(--color-secondary-200);">
				Let's Connect
			</h1>
			<p class="mb-6 text-lg" style="color: var(--color-text-muted);">
				I'm always open to new opportunities and collaborations.
			</p>
			<Button onclick={handleDownload}>{downloading ? 'downloading' : 'Download my Resume'}</Button>
		</div>

		<div
			class=" elevation-2 w-full rounded-2xl p-6"
			style="background-color: var(--color-surface-1);"
		>
			<h2 class="mb-6 text-center text-3xl font-bold" style="color: var(--color-text-main);">
				Get in Touch
			</h2>
			<form {...postContact} class="flex flex-col">
				<div class="mb-4 grid grid-cols-1 gap-6 md:grid-cols-2">
					<div class="flex flex-col">
						<label
							for="name"
							class="mb-2 text-sm font-medium"
							style="color: var(--color-text-muted);">Name</label
						>
						<input
							id="name"
							name="name"
							type="text"
							placeholder="John Doe"
							required
							class="text-on-surface placeholder:text-surface-variant squircle h-12 w-full rounded-xl p-4 focus:ring-2 focus:ring-accent-400 focus:outline-none"
							style="background-color: var(--color-surface-2); color: var(--color-text-main);"
						/>
					</div>
					<div class="flex flex-col">
						<label
							for="email"
							class="mb-2 text-sm font-medium"
							style="color: var(--color-text-muted);">Email</label
						>
						<input
							id="email"
							name="email"
							type="email"
							placeholder="example@example.com"
							required
							class="text-on-surface placeholder:text-surface-variant squircle h-12 w-full rounded-xl p-4 focus:ring-2 focus:ring-accent-400 focus:outline-none"
							style="background-color: var(--color-surface-2); color: var(--color-text-main);"
						/>
					</div>
				</div>

				<div class="mb-6 flex flex-col">
					<label
						for="message"
						class="mb-2 text-sm font-medium"
						style="color: var(--color-text-muted);">Message</label
					>
					<textarea
						id="message"
						name="message"
						placeholder="Type your message here..."
						required
						class="text-on-surface placeholder:text-surface-variant squircle min-h-[150px] w-full resize-y rounded-xl p-6 focus:ring-2 focus:ring-accent-400 focus:outline-none"
						style="background-color: var(--color-surface-2); color: var(--color-text-main);"
					></textarea>
				</div>

				<Button type="submit">Submit</Button>
			</form>
		</div>
	</div>
</div>
