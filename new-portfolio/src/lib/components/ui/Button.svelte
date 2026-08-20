<script lang="ts">
	import { type Snippet } from 'svelte';

	type Variant = 'primary' | 'secondary' | 'destructive';

	interface Props {
		variant?: Variant;
		class?: string;
		children?: Snippet;
		onclick?: () => void;
		type?: 'button' | 'submit' | 'reset';
		disabled?: boolean;
	}

	let {
		variant = 'primary',
		class: className = '',
		children,
		onclick,
		type = 'button',
		disabled = false
	}: Props = $props();

	const baseStyles =
		'inline-flex cursor-pointer items-center justify-center rounded-[10px] px-6 py-3 text-sm font-bold tracking-[0.16em] uppercase transition-all duration-200 disabled:pointer-events-none disabled:opacity-50';

	const variants = {
		primary: 'border-2 border-stark-white bg-stark-white text-true-black hover:bg-onyx hover:text-stark-white',
		secondary: 'border-2 border-stark-white bg-onyx text-stark-white hover:bg-stark-white hover:text-true-black',
		destructive:
			'border-2 border-stark-white bg-stark-white text-true-black hover:bg-onyx hover:text-stark-white'
	};
</script>

<button {type} class="{baseStyles} {variants[variant]} {className}" {onclick} {disabled}>
	{@render children?.()}
</button>