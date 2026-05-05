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
		'px-6 py-3 font-semibold uppercase tracking-widest transition-all duration-150 cursor-pointer active:translate-y-0 active:shadow-none hover:-translate-y-0.5';
	const variants = {
		primary: 'bg-stark-white text-true-black hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.4)]',
		secondary:
			'bg-transparent border-2 border-stark-white text-stark-white hover:bg-stark-white hover:text-black'
	} as const;
</script>

<button
	{onclick}
	class="{baseClasses} {variants[variant as keyof typeof variants]} {className}"
	{type}
>
	<span>{@render children?.()}</span>
</button>
