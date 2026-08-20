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
	<div class="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4">
		<div class="w-full max-w-lg overflow-hidden rounded-[12px] border-2 border-stark-white bg-onyx shadow-[8px_8px_0px_0px_rgba(255,255,255,0.25)]">
			<div class="border-b-2 border-stark-white bg-true-black px-7 py-7 sm:px-9">
				<h2 class="text-3xl font-black tracking-wide text-stark-white uppercase">
					{title}
				</h2>
			</div>

			<div class="px-7 py-8 sm:px-9">
				<div class="text-base leading-7 text-stark-white">
					{@render children?.()}
				</div>
			</div>

			<div class="flex justify-end gap-3 border-t-2 border-stark-white px-7 py-6 sm:px-9">
				<Button variant="secondary" onclick={onclose}>Cancel</Button>
				<Button variant="primary" onclick={onconfirm}>Confirm</Button>
			</div>
		</div>
	</div>
{/if}