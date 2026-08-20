<script lang="ts">
	let {
		children,
		onclick,
		variant = 'primary',
		type,
		class: className = ''
	} = $props<{
		children: any;
		onclick?: any;
		variant?: 'primary' | 'secondary';
		type?: string;
		class?: string;
	}>();

	const baseClasses =
		'cursor-pointer rounded-[10px] px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] transition-all duration-150';
	const variants = {
		primary: 'border-2 border-stark-white bg-stark-white text-true-black hover:bg-true-black hover:text-stark-white',
		secondary: 'border-2 border-stark-white bg-true-black text-stark-white hover:bg-stark-white hover:text-true-black'
	} as const;
</script>

<button
	{onclick}
	class="{baseClasses} {variants[variant as keyof typeof variants]} {className}"
	{type}
>
	<span>{@render children?.()}</span>
</button>