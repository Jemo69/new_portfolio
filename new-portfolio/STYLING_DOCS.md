
# Styling Documentation: Adaptive Materiality

This document explains the architecture of the styling system, how the core visual effects were created, and how to use the system to create new themed components.

## Core Concepts

The styling is built on two primary concepts:

1.  **CSS Custom Properties (Variables)**: The entire design system (colors, shadows, fonts, etc.) is defined as a set of CSS variables in the `:root` of `app.css`. This makes the theme easily maintainable and consistent.
2.  **Utility Classes**: Simple, reusable classes are used to apply these design variables to components. For example, `.elevation-1` applies the first level of shadow, and `.squircle` applies the squircle shape.

---

## Theming System Breakdown

All theme variables are located in `src/app.css`.

### 1. Color System

The color system uses a semantic approach. Instead of using hardcoded color values, we use variables that describe the color's purpose.

**Key Variables:**
- `var(--color-text-main)`: For primary body text.
- `var(--color-text-muted)`: For secondary or less important text.
- `var(--color-surface-0)` to `var(--color-surface-3)`: Opaque background colors for content layers, increasing in lightness.
- `var(--color-brand-primary)`: The main brand color for primary actions (like buttons).

### 2. Elevation & Shadows

The design system has a 6-level elevation system. Each level has a corresponding shadow variable and a utility class.

**Shadow Variables:**
- `var(--shadow-1)` through `var(--shadow-5)` define the `box-shadow` style for each elevation level.

**Utility Classes:**
- To apply an elevation, simply add the corresponding class to your component: `.elevation-1`, `.elevation-2`, etc.

### 3. Motion & Transitions

Two main transition curves are defined for animations:

- `var(--transition-standard)`: A standard easing curve for predictable UI animations.
- `var(--transition-spring)`: A `cubic-bezier` curve that mimics a "spring-back" or "overshoot" effect, used for tactile micro-interactions (e.g., button presses).

### 4. The Squircle Effect

The squircle shape (a square with continuously rounded corners) is a core part of the visual identity. It is achieved using a responsive SVG `clip-path`.

**How it Works:**
1.  **SVG Definition**: An SVG is embedded at the top of `src/app.html`. This SVG contains a `<clipPath>` element with a specific path that draws the squircle shape.
    - The `clipPathUnits="objectBoundingBox"` attribute is crucial. It makes the shape automatically scale to the size of any element it is applied to.
2.  **CSS Utility Class**: The `.squircle` class in `app.css` applies this shape to an element:
    ```css
    .squircle {
        clip-path: url(#squircleClip);
    }
    ```
    Any element with this class will be masked into a squircle shape.

### 5. The Liquid Glass Effect

This effect is reserved for the "Functional Layer" (like the main `Navbar`) to create a translucent, blurred surface that appears to float above the content.

**How it Works:**

The `.liquid-glass` class in `app.css` combines three properties:

1.  **Semi-Transparent Background**: `background-color: var(--color-surface-4);`
    - The `--color-surface-4` variable is an `rgba()` color with around 70% opacity, allowing content underneath to show through.
2.  **Backdrop Filter**: `backdrop-filter: blur(12px) saturate(150%);`
    - `blur(12px)`: This is the most important part. It blurs any content that is *behind* the element.
    - `saturate(150%)`: This subtly increases the vibrancy of the colors seen through the glass, a key detail from Apple's HIG.
3.  **Vendor Prefix**: `-webkit-backdrop-filter` is included for broader browser compatibility.

---

## How to Use

To create a new themed component, you can combine the utility classes and CSS variables.

**Example: Creating a new themed info box**

```html
<div class="info-box squircle elevation-1">
  <h3>Info</h3>
  <p>This is a new themed component.</p>
</div>

<style>
  .info-box {
    background-color: var(--color-surface-2);
    color: var(--color-text-main);
    padding: 1.5rem;
  }
</style>
```

In this example:
- The `div` will have a squircle shape (`.squircle`).
- It will have the first level of shadow (`.elevation-1`).
- The background and text colors are set using our semantic theme variables.

