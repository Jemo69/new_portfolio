/**
 * View tracking helpers.
 *
 * The server has no way to tell a fresh visit from a refresh, so the browser
 * decides first: a view is only reported when this device has not already
 * claimed this post inside the dedupe window.
 *
 * Each token is `{ sid, at }` — the `sid` is a stable per-browser session id
 * embedded in the token's own data, which is what lets the server tell a first
 * read apart from a reread.
 */

/** How long one view stays "already counted". A refresh inside it is the same view. */
export const VIEW_TTL = 5 * 60 * 1000;

const TOKEN_KEY = 'jv.tokens';
const SESSION_KEY = 'jv.session';

export type ViewToken = { sid: string; at: number };
type TokenMap = Record<string, ViewToken>;

function randomId(): string {
	try {
		if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID();
	} catch {
		// fall through
	}
	return `s_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 12)}`;
}

let fallbackSid: string | null = null;

/**
 * Stable id for this browser. Reused across visits so a returning reader is
 * recognised as the same session rather than a brand new one.
 */
export function getSessionId(): string {
	if (typeof localStorage === 'undefined') return (fallbackSid ??= randomId());
	try {
		const existing = localStorage.getItem(SESSION_KEY);
		if (existing) return existing;
		const sid = randomId();
		localStorage.setItem(SESSION_KEY, sid);
		return sid;
	} catch {
		// Storage unavailable (private mode / quota) — stay consistent within
		// this page load instead of minting a new id on every call.
		return (fallbackSid ??= randomId());
	}
}

function read(): TokenMap {
	if (typeof localStorage === 'undefined') return {};
	try {
		const parsed: unknown = JSON.parse(localStorage.getItem(TOKEN_KEY) ?? '{}');
		if (typeof parsed !== 'object' || parsed === null) return {};
		return parsed as TokenMap;
	} catch {
		return {};
	}
}

function write(map: TokenMap): void {
	try {
		localStorage.setItem(TOKEN_KEY, JSON.stringify(map));
	} catch {
		// Storage unavailable. The view still counts, it just will not be
		// deduped on the next load.
	}
}

/**
 * Claims the view for `slug`: returns true when this visit is new enough to be
 * counted, and records a token carrying the session id. Expired tokens are
 * pruned on the way so the key can never grow without bound.
 */
export function claimView(slug: string, ttl: number = VIEW_TTL): boolean {
	const now = Date.now();
	const sid = getSessionId();
	const map = read();

	for (const [key, token] of Object.entries(map)) {
		if (!token || typeof token.at !== 'number' || now - token.at > ttl) delete map[key];
	}

	const token = map[slug];
	if (token && now - token.at <= ttl) return false;

	map[slug] = { sid, at: now };
	write(map);
	return true;
}

/** Thousands-separated view count, e.g. 12345 -> "12,345". */
export function formatViews(views: number | null | undefined): string {
	return (views ?? 0).toLocaleString('en-US');
}
