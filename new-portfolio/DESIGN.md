# DESIGN

The JEMO CORE (encase) design system applied to the JEMO portfolio. Source of truth for all Svelte components, tokens, and pages in this repo.

## Theme

**Name:** Onyx
**Mood:** The Tactical Monolith — binary contrast, hard containment, softened industrial geometry.
**Scene:** A visitor lands on the portfolio from a link in a DM, a GitHub readme, or a Google result. They're on a laptop or phone, daytime or night, skimming for evidence of capability. The site must read as heavy, reliable, and unapologetic at a glance.

**Color strategy:** Drenched. The surface IS the color. Black body, white structure. Color is reserved for content (project imagery, headline moments), never for UI chrome.

### Color palette

Primary colors:

- Onyx (True Black, Component Fill): `#000000` — navbars, sidebars, modals, primary buttons, page body.
- Stark White: `#FFFFFF` — text on black backgrounds; the defining 2-3px borders.

Utility:

- Gray ramp for muted text on black, utility borders, disabled states. Muted body links on black must hold ≥4.5:1 (`#9ca3af`·gray-400 = 7.5:1, `#6b7280`·gray-500 = 4.8:1).

Alias tokens in app.css (`@theme`):

```css
--color-onyx: #000000;
--color-stark-white: #ffffff;
--color-ink: #ffffff;      /* text on black */
--color-muted: #9ca3af;    /* muted text on black */
--color-line: rgba(255, 255, 255, 0.22); /* hairlines on black */
```

## Typography

- **Family:** Montserrat (already loaded via Google Fonts in `src/app.html`), weights 400-800. One family; weight contrast does the hierarchy work.
- **Structural labels** (nav items, button labels, modal headers, section headers): UPPERCASE, BOLD (700-800), `letter-spacing: 0.08em-0.12em`, generally tracked. Sentence-case body copy is never uppercase.
- **Body copy:** sentence case, reserved for descriptions and feedback. Short uppercase labels only (≤4 words).
- **Scale:** display clamp with max ≤ 6rem; strong hierarchy via weight + size (≥1.25 ratio between steps). Negative letter-spacing floor at -0.04em.- `text-wrap: balance` on h1-h3; `text-wrap: pretty` on prose.
- Body line length capped at 65-75ch.

## Layout

- **Containment:** every structural and interactive element carries a high-contrast border. Black components get white borders; white components get black borders. Borders crate information; whitespace alone never separates a component from its surface.
- **Corner radius:** 8-12px on all containers. No pill shapes for large containers. Full-pill (rounded-full) reserved for chips/tags only. No radius ≥16px on cards or sections.
- **Spacing:** tight padding inside containers (8-16px), generous margins outside (section gaps 80-120px). Components are heavy; give them room to breathe.
- **Grid:** 2D grids for card/feed layouts; flex-wrap for chip rows. Responsive grids use `repeat(auto-fit, minmax(280px, 1fr))`.
- **Z-index scale:** semantic only: dropdown 40, sticky 50, modal-backdrop 60, modal 70, toast 80, tooltip 90. Never arbitrary 999/9999.

## Components

### Navigation (the Command Center)

The navbar is a control panel, not a list of links. Black bar, white 1-2px bottom border, brand in its own encased plaque.

- **Brand plaque:** `JEMO` in white, uppercase, heavy weight, boxed with a 1-2px white border + 8-10px padding.
- **Links:** UPPERCASE, BOLD, tracked. Active state = full inversion (white fill, black text) or a solid white underline/plaque. Inactive = white text, gray hover.
- **Mobile menu:** full-screen black overlay panel with a white 1-2px top border; links stacked 2xl uppercase.

### Buttons

- **Primary:** solid black fill + white text + 1-2px white border. Command shape (10px radius).
- **Secondary:** white fill + black text + 1px black border (on white surfaces; on black surfaces invert so it stays visible).
- **Destructive:** white fill + black text + thick (2-3px) black border.
- **Labels:** verb + object, UPPERCASE. "START A PROJECT", "VIEW PROJECTS".

### Cards

- Flat black or white surfaces with 2px contrasting borders (10px radius). Hover: border brightens or block shifts by 2px, no ghost shadow, no scale. No gradient fills, no blur.
- Identical card grids avoided: vary the info inside card surfaces by content, not by decorative treatment.

### Modal / Feedback

- **Modal:** massive black header bar with oversized UPPERCASE title ("CONFIRM ACTION?"), bordered container, sentence-case body text on white surface. Actions: primary black/white-border + secondary white/black-border.
- **Toast:** floating black tiles, white heavy-stroke icons, 2px white border. Looks like a physical sticker applied to the screen.

### Icons

- Filled or heavy-stroke glyphs only. No thin-line icons anywhere. Icon weight must match type weight.

## Motion

- **Micro-interactions:** border color transitions, 2px position shifts, opacity. 120-200ms, ease-out (exponential), no bounce/elastic.
- **Reveals:** content is visible by default; animation only enhances. `@media (prefers-reduced-motion: reduce)` → instant or crossfade. Never gate content behind a class-triggered transition.
- No layout-property animation. No scroll-triggered gradients, blurs, or parallax by default.

## Accessibility

- WCAG AA floor; the black/white pairing exceeds it (~19.5:1) by default.
- Muted text on black: never below `#9ca3af` (4.5:1+). Placeholders hold the same 4.5:1 standard.
- Focus states: visible 2px white outline on black surfaces, black outline on white.
- Uppercase is structural shorthand only; never set sentences in ALL CAPS.
- `prefers-reduced-motion` respected for every animation.