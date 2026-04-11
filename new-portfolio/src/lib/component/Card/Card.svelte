<script lang="ts">
	let { children } = $props();
</script>

<div class="bg-onyx border-2 border-stark-white p-6 m-2 transition-all duration-200 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
	{@render children?.()}
</div>
