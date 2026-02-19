# Design System — whiteoakpainting.com

> Extracted: 2026-02-18
> Updated: 2026-02-19 (corrected with live computed CSS values via Playwright)

## Overall Aesthetic

Elegant, editorial, luxury-residential. Warm off-white background (#FFFCF8) with generous whitespace. Photography-forward with professional interior/exterior shots. Cool blue-grey CTA buttons with warm salmon/copper hover accents. Botanical decorative accents (oak leaves, flowers). Feels like a high-end home magazine.

## Colors

| Token | Hex | CSS Variable | Usage |
|-------|-----|-------------|-------|
| Background | `#FFFCF8` | `--color-brand--background` | Body/page bg (warm off-white, NOT pure white) |
| Text Primary | `#212121` | `--color-neutral--gray-900` | Headings, body text |
| Text Dark | `#111111` | `--color-neutral--gray-950` | Eyebrow text |
| Brand Primary | `#DBE3E4` | `--color-brand--primary` | CTA button bg, borders (cool blue-grey) |
| Brand Accent | `#D2956F` | `--color-brand--accent` | Warm copper/terracotta accent |
| Brand Secondary | `#C0A487` | `--color-brand--secondary` | Warm tan |
| Brand Clay | `#B3751B` | `--color-brand--clay` | Brown clay |
| Brand Sage | `#A0A48E` | `--color-brand--sage` | Sage green (decorative icons) |
| Link Primary | `#DE967C` | `--color-link--link-primary` | Link hover color (salmon/peach) |
| Brand 2 | `#EDE4D4` | `--color-brand--brand-2` | Warm beige |
| Brand 3 | `#DE967C` | `--color-brand--brand-3` | Same as link primary (salmon) |
| Card/Image Overflow | `#EDE9DB` | — | Service cards, gallery, instagram grid bg (rgb 237,233,219) |
| Gray-800 | `#424242` | `--color-neutral--gray-800` | Text secondary |
| Gray-600 | `#757575` | `--color-neutral--gray-600` | Secondary/muted text |
| Gray-300 | `#E0E0E0` | `--color-neutral--gray-300` | Light borders |
| White | `#FFFFFF` | — | Card backgrounds, hero overlay |
| Newsletter Btn BG | `#212121` | — | Dark button variant background |
| Newsletter Btn Text | `#FAFAFA` | — | Dark button variant text |

## Fonts

The live site uses proprietary/custom fonts hosted on Webflow CDN. These cannot be used directly; Google Font alternatives are noted.

| Role | Font Family | CSS Variable | Fallback | Google Font Alternative |
|------|------------|-------------|----------|------------------------|
| Headings (H1-H3, H5) | Eros Regular | `--font-family--serif` | "Trebuchet MS", sans-serif | Cormorant Garamond |
| H4 | Playfair Display | — | sans-serif | Playfair Display (available on Google Fonts) |
| Body/UI | Proximavara Roman | `--font-family--sans-serif` | Arial, sans-serif | Montserrat or Inter (variable weight 100-900) |
| Footer copyright | Inter | — | sans-serif | Inter (available on Google Fonts) |

**CSS variable declarations:**
```css
--font-family--serif: "Eros Regular", "Trebuchet MS", sans-serif;
--font-family--sans-serif: "Proximavara Roman", Arial, sans-serif;
```

> **Note:** Eros Regular is a proprietary serif face. Cormorant Garamond at weight 400 is the closest freely available match. Proximavara Roman is a variable sans-serif; Montserrat or Inter are suitable replacements.

## Typography Scale (desktop computed)

| Element | Font | Size | Weight | Line-height | Letter-spacing | Notes |
|---------|------|------|--------|-------------|----------------|-------|
| H1 | Eros Regular | 80px (4.8rem) | 400 | 92px (1.15) | normal | Hero heading |
| H2 (quote) | Eros Regular | 32px | 400 | 46.4px (1.45) | 1.5px | Founder quote block |
| H2 (standard) | Eros Regular | 60.8px (3.8rem) | 400 | 72.96px (1.2) | normal | Section headings |
| H3 | Eros Regular | 48px (3rem) | 400 | 60px (1.25) | normal | Feature headings |
| H4 | Playfair Display | 30px (2.4rem) | 400 | 40.5px (1.35) | normal | Newsletter heading |
| H5 | Eros Regular | 36px (1.9rem) | 400 | 52.2px (1.45) | 1px | Footer column headings |
| Body | Proximavara Roman | 18px (1.125rem) | 300 | 27px (1.5) | normal | Paragraphs |
| Eyebrow | Proximavara Roman | 14px | 500 | 32.4px | 1px | uppercase |
| CTA Button | Proximavara Roman | 14px | 600 | 21px | 2px | uppercase |
| Nav Link | Proximavara Roman | 14px (0.875rem) | — | — | — | — |
| Footer Link | Proximavara Roman | 12.8px | 400 | — | 2px | — |
| Footer Copyright | Inter | 14px (0.8rem) | 400 | — | — | — |
| Service CTA Link | Proximavara Roman | 14px | 600 | — | 2px | uppercase, border-bottom 1px |
| Attribution | Eros Regular | 48px | 400 | — | normal | "-- Author Name" style |

**Key typography patterns:**
- Headings use a serif face (Eros Regular) at weight 400 for an editorial feel
- Body and UI use a variable sans-serif (Proximavara Roman) at weight 300 for lightness
- All caps (uppercase) for eyebrows, buttons, service CTA links
- Generous letter-spacing (1-2px) on uppercase text
- H4 uniquely uses Playfair Display (distinct from other headings)

## Button Styles

### Primary CTA
| Property | Value |
|----------|-------|
| Background | `#DBE3E4` |
| Border | 1px solid `#DBE3E4` |
| Border Radius | 9px |
| Padding | 20px 24px |
| Text | uppercase, letter-spacing 2px, font-weight 600, 14px |
| **Hover bg** | `#D2956F` (copper terracotta — `--color-brand--accent`) |
| **Hover text** | `#212121` (dark text stays dark — NOT white) |
| **Hover border** | `1px solid #D2956F` |
| **Hover shadow** | `rgb(192,164,135) 0px 12px 50px -5px` (warm tan glow) |
| **Transition** | `background-color, box-shadow, border-color` 0.4s `cubic-bezier(0.25,0.46,0.45,0.94)` |

### Newsletter Subscribe Button
| Property | Value |
|----------|-------|
| Background | `#212121` |
| Color | `#FAFAFA` |
| Border Radius | 12px |
| Padding | 10px |

### Service CTA Link
| Property | Value |
|----------|-------|
| Style | uppercase, border-bottom 1px solid `#DBE3E4` |
| Padding Bottom | 20px |
| Font | 14px, weight 600, letter-spacing 2px |

## Hover States (extracted from CSS)

| Selector | Property Changes |
|----------|-----------------|
| `.button:hover` | bg: `#D2956F` (copper), color: `#212121` (dark, NOT white), border: `1px solid #D2956F`, box-shadow: `rgb(192,164,135) 0px 12px 50px -5px` |
| `.nav-link:hover` | color: `#DE967D` |
| `.overflow-service:hover` | box-shadow: `rgb(222,150,125) 0px 50px 80px -50px` |
| `.lightbox-link:hover` | box-shadow: `rgb(222,150,125) 0px 50px 80px -50px` (salmon shadow) |
| `.overflow-instagram:hover` | box-shadow: `rgb(222,150,125) 0px 50px 80px -50px` (salmon shadow) |
| `a:hover` | border-bottom-color changes, color changes |
| `.link:hover` | color changes, box-shadow: `rgb(222,150,125) 0px 10px 20px -12px` |
| `.link-portfolio:hover` | opacity: 0.7 |

## Transitions

| Properties | Duration | Easing |
|-----------|----------|--------|
| color | 0.3s | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` |
| background-color + box-shadow + color | 0.4s | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` |
| box-shadow | 0.7s | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` |
| opacity + color | 0.3s | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` |

> **Note:** All transitions use the same easing curve: `cubic-bezier(0.25, 0.46, 0.45, 0.94)` -- a gentle ease-out.

## Shadows

| Context | Value |
|---------|-------|
| Hero overlay | `rgba(0,0,0,0.08) 0px 20px 24px -4px, rgba(0,0,0,0.03) 0px 8px 8px -4px` |
| Hover glow (cards/images) | `rgb(222,150,125) 0px 50px 80px -50px` |
| Button hover glow | `rgb(222,150,125) 0px 12px 50px -5px` |
| Link hover | `rgb(222,150,125) 0px 10px 20px -12px` |

## Spacing & Layout

| Token | Value | Usage |
|-------|-------|-------|
| Section Padding (vertical) | 80-120px desktop / 48-64px mobile | Between major sections |
| Section Max Width | ~1200px | Content container |
| Content Max Width (text) | ~700-800px | Text blocks within sections |
| Grid Gap | 24-40px | Between grid items |
| Card Padding | 32-48px | Inside cards/overlays |
| Component Gap | 16-24px | Between elements within a section |

## Shape & Effects

| Token | Value | Usage |
|-------|-------|-------|
| Border Radius (hero overlay) | 16px (all corners) | Rounded corners on hero content overlay |
| Border Radius (CTA buttons) | 9px | Primary CTA buttons |
| Border Radius (newsletter btn) | 12px | Newsletter subscribe button |
| Border Radius (images) | 0px | Sharp-edge images |
| Border Radius (cards) | 0-4px | Minimal rounding |
| Divider | 1px solid `#E0E0E0` | Thin horizontal rules |

## Hero Overlay

| Property | Value |
|----------|-------|
| Border Radius | 16px (all corners, NOT just top corners) |
| Background | `#FFFFFF` (white) |
| Padding | 48px 32px |
| Max Width | 1056px |
| Box Shadow | `rgba(0,0,0,0.08) 0px 20px 24px -4px, rgba(0,0,0,0.03) 0px 8px 8px -4px` |
| Text Align | center |

## Section Backgrounds

| Section | Background |
|---------|-----------|
| Body/page | `#FFFCF8` |
| Card backgrounds | `#FFFFFF` |
| Image overflow containers | `#EDE9DB` (rgb 237,233,219) |
| Footer | `#FFFCF8` |

## Component Inventory

### 1. Header/Nav
- Logo: Custom oak leaf icon + "WHITE OAK PAINTING" text (all caps, spaced)
- Hamburger menu on mobile (collapses at medium breakpoint)
- Clean, minimal -- logo left, hamburger right
- No background color (transparent over page)
- Nav links: Proximavara Roman, 14px
- Nav hover: color `#DE967D`

### 2. Hero Section
- 3-column photo grid (equal width, no gap or minimal gap)
- Below: white overlay card with 16px border-radius on ALL corners
- Decorative sage leaf/feather SVG centered above company name
- Eyebrow text ("WHITE OAK PAINTING") -> H1 (80px Eros Regular) -> CTA button
- CTA: "SCHEDULE AN ESTIMATE" -- uppercase, `#DBE3E4` background, 9px radius
- Overlay shadow: subtle dual-layer shadow

### 3. Founder Quote Section
- Large H2 quote (Eros Regular, 32px, letter-spacing 1.5px)
- Author attribution below (Eros Regular, 48px)
- Decorative botanical accents

### 4. Video Testimonial Section
- Eyebrow (14px, uppercase, `#111111`) + H2 ("From our clients")
- Embedded video player

### 5. Services Cards (x3)
- Image on `#EDE9DB` background + H3 title + body text + CTA link
- Stacked vertically on mobile, 3-column on desktop
- Hover: salmon box-shadow `rgb(222,150,125) 0px 50px 80px -50px`
- Service CTA link: uppercase, border-bottom 1px solid `#DBE3E4`

### 6. Decorative Feature Section
- Eyebrow + H3 + body text + CTA link
- Large image alongside
- Botanical decorative icon

### 7. Portfolio/Gallery Grid
- Eyebrow + H2
- Photo grid with lightbox functionality (click to enlarge)
- 4x2 grid on desktop, stacked on mobile
- Hover: salmon glow shadow or opacity 0.7

### 8. Color Consulting Section
- Eyebrow + H3 + body + CTA
- Image alongside
- Botanical decorative icons flanking

### 9. Testimonial Carousel
- Eyebrow + H2 ("What our clients say")
- Sliding carousel with prev/next arrows
- Quote text + attribution ("-- Name")
- One testimonial visible at a time

### 10. Contact CTA Section
- H3 + body text + CTA link
- Image alongside
- Botanical decorative icons

### 11. Final CTA Banner
- H2 ("We can't wait to meet you.") + CTA button
- Full-width warm background

### 12. Instagram Grid
- 6 images on `#EDE9DB` background in a row linking to Instagram
- Hover: salmon box-shadow `rgb(222,150,125) 0px 50px 80px -50px`

### 13. Newsletter Signup
- H4 (Playfair Display, 30px) + description text
- Email input + Subscribe button (`#212121` bg, `#FAFAFA` text, 12px radius)
- Success message ("Thank you!")

### 14. Footer
- Logo (image)
- Phone number
- 3 columns with H5 headings (Eros Regular, 36px): Links, Recommendations, Site Info
- Footer links: Proximavara Roman, 12.8px, letter-spacing 2px
- Copyright: Inter, 14px
- Social media icons (Instagram, Facebook, YouTube)
- Background: `#FFFCF8`

## Decorative Elements

- **Oak leaf icon**: Gold/amber (`#C8A96E` area), used in logo and as section dividers
- **Sage feather/leaf**: Muted green (`#A0A48E`), overlays hero and appears as section decoration
- **Botanical flowers**: Various botanical line-art illustrations used as decorative accents between sections
- **Pattern**: Decorative icons always appear in pairs or centered between content blocks
