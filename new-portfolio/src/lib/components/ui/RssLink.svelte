<script lang="ts">
	interface Props {
		class?: string;
		label?: string;
	}

	let { class: className = '', label = 'RSS' }: Props = $props();
</script>

<!-- data-sveltekit-reload keeps the XML out of the client router so the
     browser renders the feed natively instead of navigating to it. -->
<a
	href="/rss.xml"
	data-sveltekit-reload
	class="inline-flex items-center gap-2 border-2 border-stark-white/35 bg-onyx px-4 py-2 text-xs font-bold tracking-[0.14em] text-stark-white uppercase no-underline transition-colors duration-150 hover:border-stark-white hover:bg-stark-white hover:text-true-black {className}"
>
	<svg viewBox="0 0 24 24" class="h-3.5 w-3.5 shrink-0" fill="currentColor" aria-hidden="true">
		<path
			d="M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1zM6.18 15.64a2.18 2.18 0 1 1-4.36 0 2.18 2.18 0 0 1 4.36 0z"
		/>
	</svg>
	{label}
</a>
