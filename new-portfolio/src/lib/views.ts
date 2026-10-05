/**
 * View tracking helpers.
 *
 * The server has no way to tell a fresh visit from a refresh, so the
 * browser decides first: a view is only reported when this device has not
 * already been credited for this post inside the dedupe window.
 */

/** How long one view stays "already counted". Refreshing inside this window is the same view. */
export const VIEW_TTL = 30 * 60 * 1000;

const STORAGE_KEY = 'jv.views';

type ViewMap = Record<string, number>;

function read(): ViewMap {
	if (typeof localStorage === 'undefined') return {};
	try {
		const parsed: unknown = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}');
		if (typeof parsed !== 'object' || parsed === null) return {};
		return parsed as ViewMap;
	} catch {
		return {};
	}
}

function write(map: ViewMap): void {
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
	} catch {
		// Storage unavailable (private mode, quota). The view still counts, it just
		// will not be deduped on the next load.
	}
}

/**
 * Claims the view for `slug`: returns true when this visit is new enough to be
 * counted, and records it. Expired entries are pruned on the way so the key can
 * never grow without bound.
 */
export function claimView(slug: string, ttl: number = VIEW_TTL): boolean {
	const now = Date.now();
	const map = read();

	for (const [key, at] of Object.entries(map)) {
		if (now - at > ttl) delete map[key];
	}

	const lastSeen = map[slug];
	if (lastSeen !== undefined && now - lastSeen <= ttl) return false;

	map[slug] = now;
	write(map);
	return true;
}

/** Thousands-separated view count, e.g. 12345 -> "12,345". */
export function formatViews(views: number | null | undefined): string {
	return (views ?? 0).toLocaleString('en-US');
}
