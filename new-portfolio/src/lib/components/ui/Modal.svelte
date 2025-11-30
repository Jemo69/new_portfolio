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
	<!-- Backdrop -->
	<div
		class="bg-true-black/90 fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
	>
		<!-- Modal Container -->
		<div
			class="border-stark-white bg-onyx w-full max-w-lg overflow-hidden rounded-md border-2 shadow-2xl"
		>
			<!-- Header -->
			<div class="bg-true-black border-stark-white border-b-2 px-6 py-6">
				<h2 class="text-stark-white text-3xl font-black uppercase tracking-tighter">
					{title}
				</h2>
			</div>

			<!-- Body -->
			<div class="px-6 py-8">
				<div class="text-lg text-gray-300">
					{@render children?.()}
				</div>
			</div>

			<!-- Footer -->
			<div class="bg-onyx border-stark-white/20 flex justify-end space-x-4 border-t-2 px-6 py-6">
				<Button variant="secondary" onclick={onclose}>Cancel</Button>
				<Button variant="primary" onclick={onconfirm}>Confirm</Button>
			</div>
		</div>
	</div>
{/if}
