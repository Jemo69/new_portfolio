<script lang="ts">
	let { children } = $props();
</script>

<div class="card rounded-2xl elevation-2">
	{@render children?.()}
</div>

<style>
	.card {
		background-color: var(--color-surface-1);
		padding: 1.5rem; /* 24px */
		margin: 0.5rem; /* 8px */
		transition: transform 0.2s var(--transition-standard), box-shadow 0.2s var(--transition-standard);
	}

	.card:hover {
		transform: translateY(-4px) scale(1.02);
		box-shadow: var(--shadow-3);
	}
</style>
