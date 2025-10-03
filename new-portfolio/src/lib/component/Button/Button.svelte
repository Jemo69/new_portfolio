<script lang="ts">
	let { children, onclick, variant = 'primary' } = $props<{
		children: any;
		onclick?: (event: MouseEvent) => void;
		variant?: 'primary' | 'secondary';
	}>();
</script>

<button {onclick} class="button squircle elevation-1 {variant}">
	<span>{@render children?.()}</span>
</button>

<style>
	.button {
		padding: 0.75rem 1.5rem; /* 12px 24px */
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		transition: transform 0.15s var(--transition-spring), box-shadow 0.15s var(--transition-spring);
		will-change: transform, box-shadow;
        cursor: pointer;
	}

    .button:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow-2);
    }

    .button:active {
        transform: translateY(0px);
        box-shadow: var(--shadow-1);
    }

    /* Variants */
    .primary {
        background-color: var(--color-brand-primary);
        color: var(--color-background-950); /* High contrast for primary action */
    }

    .secondary {
        background-color: var(--color-brand-secondary);
        color: var(--color-text-50);
    }
</style>