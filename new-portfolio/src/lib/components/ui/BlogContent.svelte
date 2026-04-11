<script lang="ts">
	import { marked } from 'marked';

	interface Props {
		content: string;
		class?: string;
	}

	let { content, class: className = '' }: Props = $props();

	let htmlContent = $derived(marked.parse(content));
</script>

<div class="prose prose-invert max-w-none {className}">
	{@html htmlContent}
</div>

<style>
	/* JEMO CORE Prose Overrides */
	:global(.prose) {
		/* Headings - "Loud & Clear" */
		--tw-prose-headings: var(--color-stark-white);
		--tw-prose-body: var(--color-gray-300);
		--tw-prose-bold: var(--color-stark-white);
		--tw-prose-links: var(--color-stark-white);
		--tw-prose-code: var(--color-stark-white);
		--tw-prose-quotes: var(--color-gray-400);
		--tw-prose-quote-borders: var(--color-stark-white);
		--tw-prose-hr: var(--color-stark-white);
		--tw-prose-th-borders: var(--color-stark-white);
		--tw-prose-td-borders: var(--color-gray-600);
	}

	:global(.prose h1),
	:global(.prose h2),
	:global(.prose h3),
	:global(.prose h4),
	:global(.prose h5),
	:global(.prose h6) {
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	:global(.prose strong) {
		font-weight: 700;
		text-transform: uppercase;
	}

	:global(.prose a) {
		border-bottom: 2px solid currentColor;
		text-decoration: none;
		font-weight: 700;
		transition: all 0.2s;
	}

	:global(.prose a:hover) {
		background-color: var(--color-stark-white);
		color: var(--color-true-black);
		padding: 0 4px;
	}

	:global(.prose code) {
		background-color: var(--color-true-black);
		border: 2px solid var(--color-stark-white);
		padding: 2px 6px;
		border-radius: 4px;
		font-weight: 700;
	}

	:global(.prose pre) {
		background-color: var(--color-true-black);
		border: 2px solid var(--color-stark-white);
		padding: 16px;
	}

	:global(.prose blockquote) {
		border-left: 4px solid var(--color-stark-white);
		font-style: italic;
		font-weight: 500;
	}

	:global(.prose hr) {
		border-color: var(--color-stark-white);
		border-width: 2px;
	}

	:global(.prose ul),
	:global(.prose ol) {
		list-style-position: outside;
	}

	:global(.prose table) {
		border: 2px solid var(--color-stark-white);
	}

	:global(.prose th) {
		background-color: var(--color-true-black);
		text-transform: uppercase;
		font-weight: 800;
		letter-spacing: 0.05em;
	}
</style>
