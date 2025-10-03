<script lang="ts">
	import { page } from '$app/stores';
</script>

<nav class="navbar liquid-glass elevation-4">
	<a href="/" class="logo">JEMO</a>
	<ul class="links">
		<li>
			<a href="/about" class:active={String($page.url.pathname) === '/about'}>About</a>
		</li>
		<li>
			<a href="/blog" class:active={$page.url.pathname.startsWith('/blog')}>Blog</a>
		</li>
		<li>
			<a href="/contact" class:active={String($page.url.pathname) === '/contact'}>Contact</a>
		</li>
	</ul>
</nav>

<style>
	.navbar {
		position: sticky;
		top: 0;
		z-index: 10;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem 2rem; /* 16px 32px */
	}

	.logo {
		font-size: 1.75rem; /* 28px */
		font-weight: 700;
		color: var(--color-text-accent);
        text-decoration: none;
	}

	.links {
		display: flex;
		align-items: center;
		gap: 2rem; /* 32px */
        list-style: none;
        padding: 0;
        margin: 0;
	}

	.links a {
		padding: 0.5rem 0; /* 8px 0 */
		font-weight: 600;
		text-transform: uppercase;
		text-decoration: none;
		color: var(--color-text-muted);
		transition: color 0.2s var(--transition-standard);
        border-bottom: 2px solid transparent;
	}

	.links a:hover {
		color: var(--color-text-main);
	}

    .links a.active {
        color: var(--color-text-main);
        border-bottom-color: var(--color-brand-accent);
    }
</style>