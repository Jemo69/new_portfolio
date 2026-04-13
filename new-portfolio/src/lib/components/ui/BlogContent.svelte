<script lang="ts">
	import { marked } from 'marked';

	interface Props {
		content: string;
		class?: string;
	}

	let { content, class: className = '' }: Props = $props();

	let htmlContent = $derived(marked.parse(content));
</script>

<div class="prose prose-invert max-w-none overflow-x-hidden {className}">
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
		font-size: 0.9375rem;
	}

	@media (min-width: 768px) {
		:global(.prose) {
			font-size: 1.125rem;
		}
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
		color: var(--color-stark-white);
	}

	:global(.prose h1) {
		font-size: 2rem;
		margin-top: 2rem;
		margin-bottom: 1rem;
	}

	:global(.prose h2) {
		font-size: 1.5rem;
		margin-top: 1.75rem;
		margin-bottom: 0.75rem;
	}

	@media (min-width: 768px) {
		:global(.prose h1) {
			font-size: 3rem;
		}
		:global(.prose h2) {
			font-size: 2.25rem;
		}
	}

	:global(.prose p) {
		margin-bottom: 1.5rem;
		line-height: 1.8;
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
		border: 1px solid var(--color-stark-white);
		padding: 2px 4px;
		border-radius: 2px;
		font-weight: 700;
		font-size: 0.9em;
	}

	:global(.prose pre) {
		background-color: var(--color-true-black);
		border: 2px solid var(--color-stark-white);
		padding: 16px;
		overflow-x: auto;
		font-size: 0.875rem;
		margin-bottom: 1.5rem;
	}

	:global(.prose blockquote) {
		border-left: 4px solid var(--color-stark-white);
		font-style: italic;
		font-weight: 500;
		padding-left: 1.5rem;
		margin-left: 0;
		margin-right: 0;
	}

	:global(.prose hr) {
		border-color: var(--color-stark-white);
		border-width: 1px;
		margin: 3rem 0;
	}

	:global(.prose ul),
	:global(.prose ol) {
		list-style-position: outside;
		padding-left: 1.5rem;
		margin-bottom: 1.5rem;
	}

	:global(.prose li) {
		margin-bottom: 0.5rem;
	}

	:global(.prose table) {
		border: 2px solid var(--color-stark-white);
		display: block;
		overflow-x: auto;
		width: 100%;
		border-collapse: collapse;
		margin-bottom: 1.5rem;
	}

	:global(.prose th),
	:global(.prose td) {
		border: 1px solid var(--color-gray-600);
		padding: 8px 12px;
	}

	:global(.prose th) {
		background-color: var(--color-true-black);
		text-transform: uppercase;
		font-weight: 800;
		letter-spacing: 0.05em;
		text-align: left;
	}
</style>
