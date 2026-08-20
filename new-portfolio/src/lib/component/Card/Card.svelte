<script lang="ts">
	let { children } = $props();
</script>

<div
	class="block border-2 border-stark-white bg-true-black p-6 transition-all duration-150 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[-3px_-3px_0px_0px_rgba(255,255,255,0.35)]"
>
	{@render children?.()}
</div>