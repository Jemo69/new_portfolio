<script lang="ts">
	interface Props {
		content: string;
		class?: string;
	}

	let { content, class: className = '' }: Props = $props();
</script>

<div class="prose prose-invert max-w-none {className}">
	{@html content}
</div>

<style>
	/* JEMO CORE Prose Overrides */
	:global(.prose) {
		/* Headings - "Loud & Clear" */
		--tw-prose-headings: theme('colors.stark-white');
		--tw-prose-body: theme('colors.gray.300');
		--tw-prose-bold: theme('colors.stark-white');
		--tw-prose-links: theme('colors.stark-white');
		--tw-prose-code: theme('colors.stark-white');
		--tw-prose-quotes: theme('colors.gray.400');
		--tw-prose-quote-borders: theme('colors.stark-white');
		--tw-prose-hr: theme('colors.stark-white');
		--tw-prose-th-borders: theme('colors.stark-white');
		--tw-prose-td-borders: theme('colors.gray.600');
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
		background-color: theme('colors.stark-white');
		color: theme('colors.true-black');
		padding: 0 4px;
	}

	:global(.prose code) {
		background-color: theme('colors.true-black');
		border: 2px solid theme('colors.stark-white');
		padding: 2px 6px;
		border-radius: 4px;
		font-weight: 700;
	}

	:global(.prose pre) {
		background-color: theme('colors.true-black');
		border: 2px solid theme('colors.stark-white');
		padding: 16px;
	}

	:global(.prose blockquote) {
		border-left: 4px solid theme('colors.stark-white');
		font-style: italic;
		font-weight: 500;
	}

	:global(.prose hr) {
		border-color: theme('colors.stark-white');
		border-width: 2px;
	}

	:global(.prose ul),
	:global(.prose ol) {
		list-style-position: outside;
	}

	:global(.prose table) {
		border: 2px solid theme('colors.stark-white');
	}

	:global(.prose th) {
		background-color: theme('colors.true-black');
		text-transform: uppercase;
		font-weight: 800;
		letter-spacing: 0.05em;
	}
</style>
