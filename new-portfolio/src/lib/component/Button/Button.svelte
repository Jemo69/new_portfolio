<script lang="ts">
	let { children, onclick } = $props<{
		children: any;
		onclick?: (event: MouseEvent) => void;
	}>();
</script>

<button
	{onclick}
	class="rounded border-b-4 border-secondary-500 bg-primary-200 px-4 py-2 font-bold text-primary-600 uppercase transition-all hover:translate-y-px hover:border-secondary-500 hover:bg-secondary-500"
>
	<span>{@render children?.()}</span>
</button>

