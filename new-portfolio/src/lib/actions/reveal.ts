export function reveal(node: HTMLElement, options: { threshold?: number; delay?: number } = {}) {
	const threshold = options.threshold ?? 0.1;
	const delay = options.delay ?? 0;

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setTimeout(() => {
						node.classList.add('reveal-visible');
					}, delay);
					observer.unobserve(node);
				}
			});
		},
		{ threshold }
	);

	node.classList.add('reveal-hidden');
	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
