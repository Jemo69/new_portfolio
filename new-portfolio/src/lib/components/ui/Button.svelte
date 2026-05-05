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
		'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-[0.18em] uppercase transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-50 disabled:pointer-events-none disabled:opacity-50';

	const variants = {
		primary:
			'bg-primary-500 text-background-950 hover:bg-primary-400 focus:ring-primary-400 shadow-[0_14px_32px_-18px_var(--primary-500)]',
		secondary:
			'border border-secondary-300/70 bg-background-50 text-text-900 hover:border-secondary-400 hover:bg-secondary-50 focus:ring-secondary-300',
		destructive:
			'border border-accent-300 bg-accent-50 text-accent-700 hover:bg-accent-100 hover:border-accent-400 focus:ring-accent-300'
	};
</script>

<button {type} class="{baseStyles} {variants[variant]} {className}" {onclick} {disabled}>
	{@render children?.()}
</button>
