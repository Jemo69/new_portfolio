export function reveal(node: HTMLElement, options: { threshold?: number; delay?: number } = {}) {
	if (typeof IntersectionObserver === 'undefined') return {};

	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return {};

	const threshold = options.threshold ?? 0.1;
	const delay = options.delay ?? 0;

	let fired = false;

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && !fired) {
					fired = true;
					setTimeout(() => {
						node.classList.add('reveal-visible');
						node.classList.remove('reveal-hidden');
					}, delay);
					observer.unobserve(node);
				}
			});
		},
		{ threshold }
	);

	requestAnimationFrame(() => {
		requestAnimationFrame(() => {
			node.classList.add('reveal-hidden');
			observer.observe(node);
		});
	});

	return {
		destroy() {
			observer.disconnect();
		}
	};
}