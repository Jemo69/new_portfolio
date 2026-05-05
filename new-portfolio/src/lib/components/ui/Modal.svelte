<script lang="ts">
	import { type Snippet } from 'svelte';
	import Button from './Button.svelte';

	interface Props {
		open: boolean;
		title?: string;
		children?: Snippet;
		onclose?: () => void;
		onconfirm?: () => void;
	}

	let { open, title = 'CONFIRM ACTION?', children, onclose, onconfirm }: Props = $props();
</script>

{#if open}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-background-950/55 p-4 backdrop-blur-md">
		<div
			class="w-full max-w-lg overflow-hidden rounded-3xl border border-secondary-200/70 bg-background-50 shadow-[0_28px_90px_-32px_rgba(17,15,36,0.55)]"
		>
			<div class="border-b border-secondary-100 px-6 py-6 sm:px-8">
				<h2 class="text-3xl font-black tracking-tight text-text-950">
					{title}
				</h2>
			</div>

			<div class="px-6 py-8 sm:px-8">
				<div class="text-base leading-7 text-text-700">
					{@render children?.()}
				</div>
			</div>

			<div class="flex justify-end gap-3 border-t border-secondary-100 bg-secondary-50/60 px-6 py-5 sm:px-8">
				<Button variant="secondary" onclick={onclose}>Cancel</Button>
				<Button variant="primary" onclick={onconfirm}>Confirm</Button>
			</div>
		</div>
	</div>
{/if}
