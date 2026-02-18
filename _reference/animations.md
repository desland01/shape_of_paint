# Animations & Interactions — whiteoakpainting.com

> Analyzed: 2026-02-18

## Animation Library

**Webflow Interactions 2.0 (IX2)** — built into Webflow runtime. Config attributes:
- `data-animation="default"`
- `data-duration="400"`
- `data-easing="ease"`
- `data-easing2="ease"`

## Complexity Level: **Low-Medium**

The site uses subtle, tasteful animations. Nothing flashy — consistent with the luxury/editorial aesthetic.

## Scroll-Triggered Animations

| Element | Animation | Timing | Easing |
|---------|-----------|--------|--------|
| Section headings | Fade in + slide up | 400-600ms | ease |
| Body text blocks | Fade in + slide up | 400-600ms, 100-200ms delay after heading | ease |
| Images | Fade in + slight scale (1.02 → 1.0) | 600-800ms | ease-out |
| CTA buttons | Fade in + slide up | 400ms, delayed after parent | ease |
| Decorative icons | Fade in | 400-600ms | ease |
| Service cards | Staggered fade in + slide up | 400ms each, 150ms stagger | ease |
| Portfolio gallery items | Staggered fade in | 300ms each, 100ms stagger | ease |

## Hover States

| Element | Hover Effect |
|---------|-------------|
| CTA Buttons | Background darkens slightly (#E8E4DE → #D4CFC7), smooth 200ms transition |
| Nav links | Subtle opacity change or underline |
| Gallery images | Slight scale up (1.0 → 1.03) with overflow hidden on container |
| Instagram grid images | Slight scale (1.0 → 1.05) with overflow hidden |
| Footer links | Color shift or underline |
| Lightbox trigger | Cursor change + subtle overlay |

## Page Transitions

- None observed (standard page loads, no SPA transitions)

## Carousel/Slider

- **Testimonial carousel**: Webflow native slider
  - Slide transition: horizontal slide, ~400ms, ease
  - Auto-play: likely enabled (common Webflow default)
  - Controls: Left/right arrow buttons
  - No dots/pagination visible

## Micro-Interactions

| Interaction | Behavior |
|-------------|----------|
| Hamburger menu open | Menu icon transforms to X, nav panel slides in from right, 300-400ms |
| Hamburger menu close | Reverse of open animation |
| Newsletter form focus | Input border color change or highlight |
| Newsletter submit | Form replaced with "Thank you!" success message (fade transition) |
| Lightbox open | Image scales up into centered overlay with dark backdrop, 300ms |
| Lightbox close | Reverse, backdrop fades out |
| Scroll indicator | None observed |

## Parallax Effects

- None observed. The design relies on whitespace and photography rather than parallax.

## Reduced Motion Recommendation

The original site does NOT appear to respect `prefers-reduced-motion`. Our template should:
- Wrap all animations in `prefers-reduced-motion` checks
- Use `motion-safe:` prefix for Tailwind or Framer Motion's `useReducedMotion` hook

## Implementation Notes

For the cloned template, **Framer Motion** is the recommended replacement for Webflow IX2:
- `AnimatePresence` + `motion.div` for scroll reveals
- `useInView` hook from `framer-motion` for scroll-triggered animations
- `whileHover` for hover states
- Custom carousel with `motion.div` + `AnimatePresence` for testimonials
- All animations should be subtle and match the luxury editorial feel
