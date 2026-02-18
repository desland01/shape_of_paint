# Design System — whiteoakpainting.com

> Extracted: 2026-02-18

## Overall Aesthetic

Elegant, editorial, luxury-residential. Clean white backgrounds with warm cream/beige sections. Generous whitespace. Botanical decorative accents (oak leaves, flowers). Photography-forward with professional interior/exterior shots. Feels like a high-end home magazine.

## Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Background Primary | `#FFFFFF` | Main page background |
| Background Warm | `#F5F0EA` | Alternating warm cream sections (hero overlay, some section backgrounds) |
| Background Light | `#F8F6F3` | Subtle warm off-white for cards/overlays |
| Text Primary | `#1A1A1A` | Headings, body text (near-black) |
| Text Secondary | `#6B6B6B` | Subheadings, label text ("WHITE OAK PAINTING" above H1) |
| Text Muted | `#999999` | Small labels, attributions |
| Accent Gold | `#C8A96E` | Logo oak leaf icon, decorative accents |
| Accent Sage | `#A8B09A` | Decorative leaf/feather SVG overlaying hero |
| CTA Background | `#E8E4DE` | CTA buttons (warm light grey) |
| CTA Text | `#1A1A1A` | Button text (dark) |
| CTA Hover | `#D4CFC7` | Button hover state (slightly darker) |
| Border Subtle | `#E5E2DD` | Thin dividers, card borders |
| Footer Background | `#FFFFFF` | Footer on white |
| Footer Text | `#1A1A1A` | Footer text |

## Typography

| Element | Font | Weight | Size (desktop) | Size (mobile) | Style |
|---------|------|--------|----------------|---------------|-------|
| H1 | Montserrat | 300 (Light) | ~48-56px | ~32-36px | Normal, centered |
| H2 | Montserrat | 300 (Light) | ~36-42px | ~28-32px | Normal, centered or left |
| H3 | Montserrat | 400 (Regular) | ~24-28px | ~20-24px | Normal |
| Label/Eyebrow | Montserrat | 500 (Medium) | ~13-14px | ~12-13px | Uppercase, letter-spacing 2-4px |
| Body | Montserrat | 300-400 | ~16-18px | ~15-16px | Normal, line-height 1.6-1.8 |
| Button Text | Montserrat | 500-600 | ~13-14px | ~12-13px | Uppercase, letter-spacing 2-3px |
| Footer Links | Montserrat | 400 | ~14px | ~13px | Normal |
| Quote/Testimonial | Montserrat | 300 (Light) | ~18-20px | ~16px | Italic or normal |
| Attribution | Montserrat | 500 | ~14px | ~13px | Normal, prefixed with "— " |

**Key typography patterns:**
- All caps (uppercase) for labels, eyebrows, button text, and some section headers
- Very light font weight (300) for H1/H2 creates elegant, editorial feel
- Generous line-height (1.6-1.8) for readability
- Letter-spacing on uppercase text (2-4px)

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
| Border Radius (hero overlay) | 24-32px (top corners) | Rounded top on hero content overlay |
| Border Radius (buttons) | 0px | Square/sharp buttons |
| Border Radius (images) | 0px | Sharp-edge images |
| Border Radius (cards) | 0-4px | Minimal rounding |
| Shadow | none or very subtle | Minimal shadow use |
| Divider | 1px solid #E5E2DD | Thin horizontal rules |

## Component Inventory

### 1. Header/Nav
- Logo: Custom oak leaf icon + "WHITE OAK PAINTING" text (all caps, spaced)
- Hamburger menu on mobile (collapses at medium breakpoint)
- Clean, minimal — logo left, hamburger right
- No background color (transparent over page)

### 2. Hero Section
- 3-column photo grid (equal width, no gap or minimal gap)
- Below: rounded-top white overlay card
- Decorative sage leaf/feather SVG centered above company name
- Eyebrow text ("WHITE OAK PAINTING") → H1 → CTA button
- CTA: "SCHEDULE AN ESTIMATE" — uppercase, warm grey background

### 3. Founder Quote Section
- Large italic/light H2 quote with drop-cap style first letter
- Author attribution below ("— Isaac Mumma")
- Decorative botanical accents

### 4. Video Testimonial Section
- Eyebrow + H2 ("From our clients")
- Embedded video player

### 5. Services Cards (x3)
- Image (full-width) + H3 title + body text + CTA link
- Stacked vertically on mobile, 3-column on desktop
- Interior Painting / Exterior Painting / Project Pricing

### 6. Decorative Feature Section
- Eyebrow + H3 + body text + CTA link
- Large image alongside
- Botanical decorative icon

### 7. Portfolio/Gallery Grid
- Eyebrow + H2
- Photo grid with lightbox functionality (click to enlarge)
- 4x2 grid on desktop, stacked on mobile

### 8. Color Consulting Section
- Eyebrow + H3 + body + CTA
- Image alongside
- Botanical decorative icons flanking

### 9. Testimonial Carousel
- Eyebrow + H2 ("What our clients say")
- Sliding carousel with prev/next arrows
- Quote text + attribution ("— Name")
- One testimonial visible at a time

### 10. Contact CTA Section
- H3 + body text + CTA link
- Image alongside
- Botanical decorative icons

### 11. Final CTA Banner
- H2 ("We can't wait to meet you.") + CTA button
- Full-width warm background

### 12. Instagram Grid
- 6 images in a row linking to Instagram

### 13. Newsletter Signup
- H4 + description text
- Email input + Subscribe button
- Success message ("Thank you!")

### 14. Footer
- Logo (image)
- Phone number
- 3 columns: Links, Recommendations, Site Info
- Copyright + designer credit
- Social media icons (Instagram, Facebook, YouTube)

## Decorative Elements

- **Oak leaf icon**: Gold/amber, used in logo and as section dividers
- **Sage feather/leaf**: Muted green, overlays hero and appears as section decoration
- **Botanical flowers**: Various botanical line-art illustrations used as decorative accents between sections
- **Pattern**: Decorative icons always appear in pairs or centered between content blocks
