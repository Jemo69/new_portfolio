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
		'inline-flex items-center justify-center px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-sm border-2';

	const variants = {
		primary:
			'bg-true-black text-stark-white border-stark-white hover:bg-onyx hover:border-stark-white focus:ring-stark-white',
		secondary:
			'bg-stark-white text-true-black border-true-black hover:bg-gray-200 hover:border-true-black focus:ring-true-black',
		destructive:
			'bg-stark-white text-true-black border-4 border-true-black hover:bg-red-50 hover:border-red-600 hover:text-red-600 focus:ring-red-600'
	};
</script>

<button {type} class="{baseStyles} {variants[variant]} {className}" {onclick} {disabled}>
	{@render children?.()}
</button>
