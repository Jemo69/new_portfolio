<script lang="ts">
	let { children } = $props();
</script>

<div class="m-2 rounded-lg border-2 border-secondary-500 bg-primary-900 p-1 shadow-lg">
	<div class="bg-background/80 p-4">
		<div class="border-y-2 border-dashed border-primary-500 py-4 text-text-500">
			{@render children?.()}
		</div>
	</div>
</div>

