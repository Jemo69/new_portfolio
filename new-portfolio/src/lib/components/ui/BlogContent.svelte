<script lang="ts">
	import { Marked } from 'marked';
	import { markedHighlight } from 'marked-highlight';
	import hljs from 'highlight.js/lib/core';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';
	import xml from 'highlight.js/lib/languages/xml';
	import css from 'highlight.js/lib/languages/css';
	import bash from 'highlight.js/lib/languages/bash';
	import json from 'highlight.js/lib/languages/json';
	import python from 'highlight.js/lib/languages/python';
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('js', javascript);
	hljs.registerLanguage('typescript', typescript);
	hljs.registerLanguage('ts', typescript);
	hljs.registerLanguage('html', xml);
	hljs.registerLanguage('xml', xml);
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('bash', bash);
	hljs.registerLanguage('sh', bash);
	hljs.registerLanguage('json', json);
	hljs.registerLanguage('python', python);
	hljs.registerLanguage('py', python);

	const parser = new Marked(
		markedHighlight({
			emptyLangClass: 'hljs',
			langPrefix: 'hljs language-',
			highlight(code, lang) {
				if (lang && hljs.getLanguage(lang)) {
					return hljs.highlight(code, { language: lang }).value;
				}

				return hljs.highlightAuto(code).value;
			}
		})
	);

	interface Props {
		content: string;
		class?: string;
	}

	let { content, class: className = '' }: Props = $props();

	let htmlContent = $derived(parser.parse(content));
</script>

<div class="prose prose-blog max-w-none overflow-x-hidden {className}">
	{@html htmlContent}
</div>

<style>
	:global(.prose-blog) {
		font-size: 1rem;
		max-width: 72ch;
		margin-inline: auto;
	}

	@media (min-width: 768px) {
		:global(.prose-blog) {
			font-size: 1.125rem;
		}
	}

	:global(.prose-blog h1),
	:global(.prose-blog h2),
	:global(.prose-blog h3),
	:global(.prose-blog h4),
	:global(.prose-blog h5),
	:global(.prose-blog h6) {
		font-weight: 800;
		letter-spacing: -0.02em;
		line-height: 1.05;
		color: #ffffff;
		text-wrap: balance;
	}

	:global(.prose-blog h1) {
		font-size: 2.1rem;
		margin-top: 2.4rem;
		margin-bottom: 1rem;
	}

	:global(.prose-blog h2) {
		font-size: 1.7rem;
		margin-top: 2.25rem;
		margin-bottom: 0.85rem;
	}

	:global(.prose-blog h3) {
		font-size: 1.3rem;
		margin-top: 1.9rem;
		margin-bottom: 0.65rem;
	}

	@media (min-width: 768px) {
		:global(.prose-blog h1) {
			font-size: 3.2rem;
		}

		:global(.prose-blog h2) {
			font-size: 2.35rem;
		}
	}

	:global(.prose-blog) p,
	:global(.prose-blog) li {
		color: rgba(255, 255, 255, 0.9);
		line-height: 1.9;
	}

	:global(.prose-blog) p {
		margin-bottom: 1.5rem;
	}

	:global(.prose-blog) strong {
		font-weight: 700;
		color: #ffffff;
	}

	:global(.prose-blog) a {
		color: #ffffff;
		text-decoration: underline;
		text-underline-offset: 3px;
		font-weight: 600;
		transition: color 0.2s;
	}

	:global(.prose-blog) a:hover {
		color: rgba(255, 255, 255, 0.65);
	}

	:global(.prose-blog :not(pre) > code) {
		background-color: rgba(255, 255, 255, 0.08);
		border: 1px solid rgba(255, 255, 255, 0.25);
		padding: 0.18rem 0.45rem;
		border-radius: 0.4rem;
		font-weight: 600;
		font-size: 0.9em;
		color: #ffffff;
	}

	:global(.prose-blog pre) {
		position: relative;
		background: #000000;
		border: 2px solid rgba(255, 255, 255, 0.25);
		border-radius: 10px;
		padding: 1.35rem 1.45rem;
		overflow-x: auto;
		font-size: 0.95rem;
		line-height: 1.75;
		margin: 2rem 0;
	}

	:global(.prose-blog pre code) {
		background: transparent;
		border: 0;
		padding: 0;
		border-radius: 0;
		font-size: inherit;
		font-weight: 500;
		color: #ffffff;
		white-space: pre;
	}

	:global(.prose-blog blockquote) {
		margin: 2rem 0;
		padding: 1.15rem 1.3rem;
		border: 2px solid rgba(255, 255, 255, 0.3);
		border-radius: 10px;
		background: rgba(255, 255, 255, 0.04);
		color: rgba(255, 255, 255, 0.9);
	}

	:global(.prose-blog blockquote p:last-child) {
		margin-bottom: 0;
	}

	:global(.prose-blog hr) {
		border-color: rgba(255, 255, 255, 0.2);
		border-width: 1px;
		margin: 3rem 0;
	}

	:global(.prose-blog ul),
	:global(.prose-blog ol) {
		padding-left: 1.5rem;
		margin-bottom: 1.5rem;
	}

	:global(.prose-blog li) {
		margin-bottom: 0.5rem;
	}

	:global(.prose-blog table) {
		border: 2px solid rgba(255, 255, 255, 0.25);
		display: block;
		overflow-x: auto;
		width: 100%;
		border-collapse: collapse;
		margin: 2rem 0;
		border-radius: 10px;
	}

	:global(.prose-blog th),
	:global(.prose-blog td) {
		border: 1px solid rgba(255, 255, 255, 0.15);
		padding: 0.75rem 0.9rem;
		color: rgba(255, 255, 255, 0.9);
	}

	:global(.prose-blog th) {
		background-color: rgba(255, 255, 255, 0.08);
		font-weight: 800;
		letter-spacing: 0.01em;
		text-align: left;
		color: #ffffff;
	}

	:global(.prose-blog .hljs-comment),
	:global(.prose-blog .hljs-quote) {
		color: #9ca3af;
		font-style: italic;
	}

	:global(.prose-blog .hljs-keyword),
	:global(.prose-blog .hljs-selector-tag),
	:global(.prose-blog .hljs-subst) {
		color: #fdb035;
	}

	:global(.prose-blog .hljs-number),
	:global(.prose-blog .hljs-literal),
	:global(.prose-blog .hljs-variable),
	:global(.prose-blog .hljs-template-variable),
	:global(.prose-blog .hljs-tag .hljs-attr) {
		color: #fdb035;
	}

	:global(.prose-blog .hljs-string),
	:global(.prose-blog .hljs-doctag) {
		color: #fca5a5;
	}

	:global(.prose-blog .hljs-title),
	:global(.prose-blog .hljs-section),
	:global(.prose-blog .hljs-selector-id) {
		color: #ffffff;
	}

	:global(.prose-blog .hljs-type),
	:global(.prose-blog .hljs-class .hljs-title) {
		color: #d1d5db;
	}

	:global(.prose-blog .hljs-tag),
	:global(.prose-blog .hljs-name),
	:global(.prose-blog .hljs-attribute) {
		color: #f3f4f6;
	}

	:global(.prose-blog .hljs-regexp),
	:global(.prose-blog .hljs-link) {
		color: #cbd5e1;
	}

	:global(.prose-blog .hljs-built_in),
	:global(.prose-blog .hljs-builtin-name) {
		color: #e5e7eb;
	}

	:global(.prose-blog .hljs-meta) {
		color: #9ca3af;
	}

	:global(.prose-blog .hljs-emphasis) {
		font-style: italic;
	}

	:global(.prose-blog .hljs-strong) {
		font-weight: 700;
	}
</style>