# Mobile UI Specification

A mobile UI spec sheet derived from professional designer guidelines. It contains 16 rules organized into four logical categories, each with concrete pass/fail criteria that can be checked programmatically (via code audit or automated tooling) or visually (via screenshot inspection).

This document is **agent-agnostic**: it works equally well for Gemini, Claude, Codex, Cursor, or human developers reviewing mobile interfaces.

---

## How to Use This Document

1. **Planning agent** reads this spec to understand all 16 mobile UI rules and their pass/fail criteria.
2. **Audit agents** analyze the actual site (screenshots and/or source code) against each rule independently.
3. **Planning agent** compares spec vs. reality to produce a gap analysis -- a list of violations with rule numbers, affected components, and severity.
4. **Fix agents** are dispatched via subagent-driven development to close each gap, referencing the implementation guidance in this document.
5. **Visual verification** confirms fixes by re-auditing against the same pass/fail criteria.

---

## Quick Reference Checklist

| # | Rule | Pass Criteria (one-liner) |
|---|------|--------------------------|
| 1 | Use space to group related elements | 2:1 ratio between-group vs within-group spacing; between-group gaps >= 16px |
| 2 | Be consistent | All sibling items share identical structure, formatting, and labeled units |
| 3 | Ensure similar looking elements function similarly | Non-interactive icons visually distinct from interactive buttons (no shared filled-container styling) |
| 4 | Create a clear visual hierarchy | 3+ distinct text size levels; headline >= 2x body size; solid-fill CTA |
| 5 | Remove unnecessary styles | Full-bleed mobile images have no borders, padding, rounded corners, or shadows |
| 6 | Use colour purposefully | Accent/brand colour used only on interactive elements; headings and icons use neutral tones |
| 7 | Ensure interface elements have 3:1 contrast ratio | All non-text UI elements (icons, controls) >= 3:1 contrast against their background |
| 8 | Ensure text has 4.5:1 contrast | All text <= 18px has >= 4.5:1 contrast ratio; no light-grey metadata on light backgrounds |
| 9 | Don't rely on colour alone as an indicator | Every link/interactive element has a non-colour differentiator (underline, icon, weight change) |
| 10 | Use a single sans serif typeface | Exactly 1 sans-serif font family across all mobile UI text |
| 11 | Use a typeface with taller lowercase letters | Body font has x-height ratio >= 0.52; legible at 14px without zooming |
| 12 | Limit the use of uppercase | `uppercase` confined to short eyebrow labels (1-3 words); no uppercase on multi-word labels or content |
| 13 | Use regular and bold font weights only | Only font-weight 400 and 700 used on text < 24px; no thin/light weights |
| 14 | Avoid pure black text | No `#000000` / `text-black` on light backgrounds; use dark grey (#1A1A2E or similar) |
| 15 | Left align text | All multi-line body text is left-aligned; center alignment only for short single-line elements |
| 16 | Use at least 1.5 line height for body text | All multi-line body text has computed line-height >= 1.5 |

---

## Layout and Spacing

### Rule 1: Use Space to Group Related Elements

**Principle:** Increase whitespace between distinct content groups within a card or section so each group (image, heading/rating, body text, action area) reads as a separate visual unit. Without spacing, content collapses into a single undifferentiated block that feels cluttered and is harder to scan on mobile.

**What to do:**
- Add generous vertical spacing (16-24px) between each logical content group inside a card: image area, title/rating cluster, description paragraph, and action row (button + price)
- Keep related items close together (e.g., title and star rating sit tight as one group with only 4-8px between them)
- Give the description paragraph clear top and bottom margins (12-16px) so it does not touch the rating above or the action row below
- Separate the action area (CTA button + price) from the body text with at least 16px of space so it stands apart as a distinct zone
- Use internal card padding (16-20px horizontal, 16px vertical below the image) so content never touches the card edges

**What NOT to do:**
- Do not stack image, title, rating, description, button, and price with zero or near-zero margins between them
- Do not let the description paragraph butt directly against the star rating row above it -- this makes the two blur together
- Do not place the "Book now" button and price immediately below the last line of description text with no breathing room
- Do not rely solely on font size or weight differences to separate groups -- spacing is the primary grouping mechanism on mobile
- Do not use uniform small spacing (e.g., 4px gaps everywhere) between all elements; vary spacing so that between-group gaps are noticeably larger than within-group gaps

**How to check -- pass/fail:**
- Measure the vertical gap between the bottom of the image and the title text: PASS if >= 12px, FAIL if < 8px
- Measure the vertical gap between the star rating row and the first line of description: PASS if >= 12px, FAIL if < 8px
- Measure the vertical gap between the last line of description and the action row (button/price): PASS if >= 16px, FAIL if < 10px
- The gap between distinct content groups (image-to-header, header-to-body, body-to-actions) must be at least 2x the gap used within a group (e.g., title-to-rating). PASS if ratio >= 2:1, FAIL otherwise
- Internal card padding (left/right) must be >= 16px so text does not crowd the card border

**Implementation guidance:**
- Use a flex-column layout on the card body with `gap` to control inter-group spacing: `flex flex-col gap-4` (16px between groups)
- Within a group (e.g., title + rating), use a tighter gap: `flex flex-col gap-1` or `gap-1.5` (4-6px)
- Card body padding below the image: `p-4` or `px-4 py-4` (16px all sides)
- For the action row, add extra top margin to visually separate it: `mt-4` or `pt-4 border-t border-gray-100` if a subtle divider helps
- Description paragraph spacing: `my-3` (12px top and bottom) or rely on the parent `gap-4`
- Avoid collapsing margins -- use padding or gap utilities instead for predictable spacing
- Example card structure:
  ```html
  <div class="rounded-xl overflow-hidden shadow-md">
    <img ... />                              <!-- full-width image, no padding -->
    <div class="flex flex-col gap-4 p-4">    <!-- 16px padding + 16px gap between groups -->
      <div class="flex flex-col gap-1">      <!-- tight group: title + rating -->
        <h3>Mountain retreat</h3>
        <div>stars</div>
      </div>
      <p>Description text...</p>             <!-- gap-4 separates from group above and below -->
      <div class="flex items-center justify-between"> <!-- action row -->
        <button>Book now</button>
        <span>$299.00/night</span>
      </div>
    </div>
  </div>
  ```

---

### Rule 4: Create a Clear Visual Hierarchy

**Principle:** Present information in order of importance by making important elements more prominent using variations in size, colour, contrast, spacing, position, and depth. A clear hierarchy helps people scan information faster and improves aesthetics by creating order.

**What to do:**
- Use a small, uppercase, letter-spaced eyebrow/label for the category or context (e.g., "INVESTMENT SEMINAR") -- this is the least prominent text element
- Make the primary headline the largest and boldest text on the card, significantly bigger than all other text (at least 2x the body font size)
- Keep supporting body text noticeably smaller and lighter weight than the headline, creating a clear size step-down
- Use a filled, high-contrast CTA button (e.g., solid blue background with white text) so it visually anchors the bottom of the content
- Stack content vertically with generous spacing between hierarchy levels (eyebrow, headline, body, CTA) so each level breathes
- Position the hero image below or behind the text content so it supports rather than competes with the message

**What NOT to do:**
- Do not make the category label and the headline similar in size and weight -- this flattens the hierarchy and nothing stands out
- Do not use an outlined or ghost button for the primary CTA -- it blends in and fails to draw the eye
- Do not crowd text elements together with uniform spacing -- equal gaps between all elements makes everything feel the same priority
- Do not place the image side-by-side with text at the same visual weight, splitting the user's attention between two equally prominent zones
- Do not use similar font sizes across heading, subheading, and body -- when everything is medium-sized, nothing is important

**How to check -- pass/fail:**
- The eyebrow/label text must be at most 12px (0.75rem) with uppercase and letter-spacing >= 0.05em
- The primary headline must be at least 24px (1.5rem) on mobile, creating a minimum 2:1 size ratio against body text
- Body/supporting text must be 14-16px (0.875-1rem) and use a lighter font-weight or muted color compared to the headline
- The CTA button must use a solid background fill (not outlined/ghost) with sufficient contrast (WCAG AA minimum)
- There must be at least 3 distinct text size levels visible in the component (eyebrow < body < headline)
- Vertical spacing between hierarchy tiers should increase proportionally: at least 4px after eyebrow, 12px after headline, 16px before CTA

**Implementation guidance:**
- Eyebrow: `text-xs uppercase tracking-[0.1em] font-medium text-muted-foreground` (or a brand accent color at reduced opacity)
- Headline: `text-2xl md:text-3xl font-bold leading-tight text-foreground` -- this should be the dominant element
- Body text: `text-sm md:text-base font-normal text-muted-foreground leading-relaxed` -- clearly subordinate to the headline
- CTA button: `bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg` -- solid fill, not `variant="outline"`
- Spacing stack: use Tailwind's `space-y` or explicit margins that increase down the hierarchy: `mt-2` after eyebrow, `mt-3` after headline, `mt-6` before CTA
- Card image: place below content with `w-full object-cover rounded-b-lg` or use as a background with a gradient overlay so text always wins
- Test by squinting: if you blur the screen, the headline should be the only text still readable -- if multiple elements compete, the hierarchy is too flat

---

### Rule 5: Remove Unnecessary Styles

**Principle:** Unnecessary visual decorations -- borders, background padding, drop shadows, and extra whitespace around images -- increase cognitive load without conveying information. Strip them to create a simpler, more focused mobile interface.

**What to do:**
- Let hero and full-width images run edge-to-edge with no visible border or inset padding
- Remove decorative borders around image containers that serve no grouping or informational purpose
- Eliminate extra white-space padding between an image and its container edges
- Allow the image itself to be the visual element -- no frames, outlines, or card-style wrappers when the image already fills the section
- Use the back/navigation arrow directly on the image with a subtle overlay rather than placing it in a separate bordered header bar

**What NOT to do:**
- Do not wrap full-bleed images in containers that add visible borders (e.g., `border`, `ring`, `outline`)
- Do not add padding inside an image container that creates a white "frame" effect around the photo (e.g., `p-4` around an `<img>`)
- Do not use rounded corners on full-width mobile images that create visible background gaps in the corners
- Do not add background colors behind images that peek through as a border-like strip
- Do not layer multiple decorative styles (border + shadow + padding + rounded corners) on a single image container

**How to check -- pass/fail:**
- PASS: Full-width images touch the left and right edges of the viewport with 0px gap on mobile (<768px)
- PASS: No `border`, `ring`, `outline`, or `box-shadow` classes exist on full-width image containers at mobile breakpoints
- PASS: Image container has no padding (`p-0`) when the image is meant to be full-bleed
- FAIL: Visible white/colored space between the image edges and the viewport edges
- FAIL: A border or outline is rendered around the image that does not serve as a grouping indicator for adjacent content
- FAIL: The image container has `rounded-*` classes that create corner gaps revealing the background behind the image

**Implementation guidance:**
- For full-bleed image sections on mobile, use `w-full p-0 border-0 rounded-none shadow-none` on the container
- Override card-style defaults: `md:rounded-lg md:border md:shadow-sm` keeps desktop styling while removing it on mobile
- Use negative margins to break out of parent padding when needed: `mx-[-1.5rem] md:mx-0` (matching the parent's `px-6`)
- For image tags inside full-bleed containers: `<img class="w-full h-auto block" />` -- no extra spacing utilities
- If a border is inherited from a shared component (e.g., shadcn Card), override at the mobile level: `class="border-0 md:border"`
- Remove `ring-*` and `outline-*` classes from image wrappers unless they serve an accessibility focus indicator purpose

---

## Consistency and Affordance

### Rule 2: Be Consistent

**Principle:** Similar elements should look and work in a similar way. When a group of items shares the same function (e.g., property details, feature lists, stat rows), every item must use the same visual pattern -- same icon treatment, same label format, same typographic style. Inconsistent formatting forces users to re-learn what each element means.

**What to do:**
- Give every item in a repeated group the same structure: icon + descriptive label (e.g., "2 beds", "1 bath", "1 garage")
- Include units or nouns with every number so meaning is self-evident without relying on icons alone
- Use the same font size, weight, color, and spacing for all sibling items in a row or grid
- Keep icon sizes uniform across all items in the same group
- Apply the same alignment (centered, left-aligned, etc.) to every item in the set

**What NOT to do:**
- Mix labeled and unlabeled items in the same group (e.g., "House" next to bare "2", "1", "1" with no unit)
- Force users to interpret ambiguous numbers by relying solely on icons for context (a bed icon next to "2" requires cognitive effort; "2 beds" does not)
- Use different label formats within the same row (e.g., one item says "House" as a word, while siblings are just digits)
- Vary spacing, font size, or icon scale between sibling items

**How to check -- pass/fail:**
- For every repeating group of items (icon rows, stat bars, feature lists, card metadata), extract the label text of each item. Every item must follow the same pattern: either all have `[number] [unit]` labels or all have standalone text labels. A mix of bare numbers and labeled items is a fail.
- All sibling items in a flex/grid row must share the same CSS classes for font-size, font-weight, color, gap, and icon dimensions. Any deviation is a fail.
- Every numeric value displayed to the user must include a unit or descriptor word (e.g., "2 beds" not "2"). A bare number whose meaning depends on a nearby icon is a fail.

**Implementation guidance:**
- Define a reusable component for grouped metadata items (e.g., `<MetaItem icon={BedIcon} label="2 beds" />`). Never hand-code individual items with ad-hoc markup.
- Use a consistent Tailwind pattern for all items in a row:
  ```html
  <div className="flex items-center gap-6">
    {items.map(item => (
      <div key={item.label} className="flex flex-col items-center gap-1">
        <item.icon className="h-5 w-5 text-primary" />
        <span className="text-sm text-muted-foreground">{item.label}</span>
      </div>
    ))}
  </div>
  ```
- Map data so labels always include units: `{ icon: BedIcon, label: \`${beds} bed${beds !== 1 ? 's' : ''}\` }` -- never pass raw numbers as labels.
- For icon sizing consistency, set icon dimensions via a shared class (e.g., `h-5 w-5`) applied uniformly rather than per-icon overrides.
- Use `gap-*` on the parent flex/grid container instead of per-item margins to guarantee equal spacing between all siblings.

---

### Rule 3: Ensure Similar Looking Elements Function Similarly

**Principle:** Non-interactive elements (icons, badges, labels) must be visually distinct from interactive elements (buttons, links, tappable cards). When decorative or informational icons share the same filled-container styling as CTA buttons, users mistake them for tappable controls and experience confusion or frustration.

**What to do:**
- Use outlined, unfilled, or muted icon styles for non-interactive amenity/feature indicators (e.g. thin line icons on a transparent or very light background)
- Reserve filled, high-contrast, rounded-rectangle styling exclusively for tappable elements like buttons and links
- Make the "Book now" or primary CTA button the only element with a bold filled background and strong color in its row
- Use a clearly different visual weight between informational icons and actionable controls -- icons should feel passive, buttons should feel pressable
- If icons sit in a row (e.g. amenity icons on a listing card), render them as lightweight outlined glyphs with subtle or no background containers

**What NOT to do:**
- Do not give non-interactive icon containers the same filled, rounded-rectangle background treatment as CTA buttons
- Do not use the same color saturation and container shape for both informational icons and interactive buttons (e.g. both appearing as solid-colored pill/rounded-rect shapes)
- Do not place a row of filled icon containers directly above or near a CTA button that uses an identical container style -- users will assume all are tappable
- Do not rely solely on text labels to differentiate interactive from non-interactive elements; the visual container itself must communicate interactivity (or lack thereof)

**How to check -- pass/fail:**
- PASS: Non-interactive icons/badges use `border` or `outline` styling (or no container at all), while CTA buttons use `bg-[color]` filled styling -- the two are visually distinguishable at a glance
- PASS: Comparing the CSS of amenity/feature icon wrappers vs. button elements shows different `background-color`, `border`, and `border-radius` treatments
- FAIL: Non-interactive icon containers and CTA buttons share the same `background-color`, `border-radius`, and `padding` values, making them look identical in shape and weight
- FAIL: A visual side-by-side shows that icon containers could be mistaken for a row of small buttons
- CHECK: Grep for icon wrapper elements near CTA buttons; verify they do NOT share the same utility classes (e.g. both using `bg-primary rounded-lg px-3 py-2`)

**Implementation guidance:**
- For non-interactive amenity/feature icons, use: `text-muted-foreground` with no background, or `bg-muted/50 rounded-md p-2` for a very subtle, low-contrast container
- For CTA buttons, use the full branded style: `bg-cta text-cta-foreground rounded-[9px] border border-cta hover:bg-cta-hover` (the site's standard CTA spec)
- Icon rows should use Lucide or similar outline-style icons at `w-5 h-5` with `text-muted-foreground` or `text-foreground/60` -- no filled backgrounds
- If icon containers are needed for visual grouping, use a transparent or near-transparent background: `bg-foreground/5 rounded-lg p-2` which reads as decorative, not interactive
- Never apply `cursor-pointer`, `hover:` states, or `transition` classes to non-interactive icon containers
- Example pattern for amenity icons: `<div class="flex gap-3"><span class="text-muted-foreground"><CabinIcon class="w-5 h-5" /></span>...</div>`
- Example pattern for CTA button: `<Link class="rounded-[9px] bg-cta text-cta-foreground px-6 py-3 border border-cta hover:bg-cta-hover">Book now</Link>`

---

### Rule 6: Use Colour Purposefully

**Principle:** Reserve accent/brand colours (especially blue) exclusively for interactive elements. When non-interactive text like headings or icons shares the same colour as links and buttons, users perceive those elements as tappable, creating confusion and false affordances.

**What to do:**
- Keep card headings in dark/neutral text colours (black, near-black, or dark grey) so they read as static content
- Apply the accent/brand colour (blue) only to genuinely interactive elements: buttons, text links, and tappable icons
- Use neutral-coloured star icons or a distinct non-link colour (e.g., amber/gold) for ratings so they do not appear clickable
- Ensure the "Book now" button is the single, clear call-to-action element that carries the accent colour on each card
- Maintain a clear visual distinction between "content you read" (neutral tones) and "things you tap" (accent colour)

**What NOT to do:**
- Do not style card headings in the same blue used for links and buttons -- this makes headings look like tappable links
- Do not colour star-rating icons in blue -- this suggests they are interactive (e.g., tappable to filter or rate) when they are purely informational
- Do not use the interactive accent colour on decorative or informational elements just because it "looks nice"
- Do not apply blue to multiple unrelated text elements on the same card, as it dilutes the visual hierarchy and makes the actual CTA button less distinct

**How to check -- pass/fail:**
- Audit every element using the primary accent colour (e.g., `text-blue-*`, `text-primary`, or the brand link colour): each one must be wrapped in an `<a>`, `<button>`, or have an interactive `role` attribute. If a non-interactive element uses the accent colour, it fails.
- Headings (`h1`-`h6`) inside cards must not use the accent/link colour. They should use `text-foreground`, `text-gray-900`, or equivalent dark neutral. Any heading matching the link colour fails.
- Star-rating icons must use a non-link colour (gold/amber/yellow or neutral grey). If they match the accent/link colour, it fails.
- Count the number of distinctly coloured interactive affordances per card: ideally one primary CTA button carries the accent colour. If three or more visually distinct elements share the accent colour on a single card, review for false affordances.

**Implementation guidance:**
- For card headings, use `text-foreground` or `text-gray-900 dark:text-gray-100` -- never `text-primary` or `text-blue-*`
- For star ratings, use `text-amber-400` or `text-yellow-500` for filled stars, and `text-gray-300` for empty stars
- Restrict `text-primary` (or your brand accent colour class) to: `<a>` tags, `<button>` elements, and elements with explicit interactive roles
- For the CTA button, use `bg-primary text-primary-foreground` (or the project's CTA token: `bg-cta text-cta-foreground`) to make it the single dominant accent element
- Consider a Tailwind/ESLint convention: accent colour utilities (`text-primary`, `text-blue-600`) should only appear on components that are semantically interactive
- Example pattern for a card heading:
  ```html
  <!-- Correct: neutral heading -->
  <h3 class="text-lg font-semibold text-foreground">Mountain retreat</h3>

  <!-- Incorrect: heading styled like a link -->
  <h3 class="text-lg font-semibold text-primary">Mountain retreat</h3>
  ```
- Example pattern for star ratings:
  ```html
  <!-- Correct: gold stars for informational rating -->
  <StarIcon class="h-4 w-4 text-amber-400" />

  <!-- Incorrect: blue stars that look tappable -->
  <StarIcon class="h-4 w-4 text-primary" />
  ```

---

## Contrast and Accessibility

### Rule 7: Ensure Interface Elements Have a 3:1 Contrast Ratio

**Principle:** All non-text UI elements (icons, buttons, form fields) must maintain at least a 3:1 contrast ratio against their adjacent background to meet WCAG 2.1 Level AA requirements, ensuring people with vision impairments can perceive interactive controls regardless of what sits behind them.

**What to do:**
- Place interactive icons on a solid, opaque background shape (e.g., a white circle) so contrast is guaranteed regardless of the underlying content
- Use a sufficiently dark icon color (e.g., mid-to-dark grey) against the solid background to achieve at least 3:1 contrast
- Make the solid background area large enough to serve as the full tap target, increasing both visibility and usability
- Example: a left-arrow icon rendered in dark grey on a solid white circular badge, sitting on top of a photo -- the icon is clearly visible no matter what the photo contains

**What NOT to do:**
- Place icons or controls directly on top of photographic or variable-color backgrounds without a contrasting backing shape
- Use semi-transparent or thin icons that blend into the image behind them
- Rely on the photo content being "light enough" or "dark enough" -- photos vary and contrast will be inconsistent

**How to check -- pass/fail:**
- Extract the foreground color of the icon and the background color it sits on; compute the contrast ratio using the WCAG relative luminance formula -- it must be >= 3:1
- If the element sits on a photo or gradient (no solid background), it automatically fails -- variable backgrounds cannot guarantee consistent contrast
- Verify that every interactive icon or control that overlays an image has an explicit opaque background container (circle, pill, rectangle)
- Use a contrast checker tool (e.g., WebAIM Contrast Checker) with the icon color vs. its immediate backing surface color

**Implementation guidance:**
- Wrap overlay icons in a solid background container:
  ```css
  .icon-badge {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #FFFFFF;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  }

  .icon-badge svg {
    color: #4A4A4A; /* dark grey -- 7.2:1 ratio against white */
    width: 20px;
    height: 20px;
  }
  ```
- Tailwind equivalent for the backing circle:
  ```html
  <div class="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md">
    <ArrowLeft class="w-5 h-5 text-gray-700" />
  </div>
  ```
- For icons on image overlays, never use `bg-transparent` or `bg-black/20` -- use fully opaque backgrounds (`bg-white`, `bg-gray-900`) to guarantee the ratio
- The `text-gray-700` Tailwind class (#374151) on `bg-white` (#FFFFFF) yields approximately 10:1 contrast -- well above the 3:1 minimum
- The 48x48px circle also satisfies the 48px minimum touch target requirement, solving two accessibility rules at once
- If a translucent scrim is the desired aesthetic, ensure the scrim itself is opaque enough that the computed contrast of icon-on-scrim still meets 3:1 (test with the darkest/lightest photo that could appear behind it)

---

### Rule 8: Ensure Text Has 4.5:1 Contrast

**Principle:** All text at 18px or smaller must maintain a minimum 4.5:1 contrast ratio against its background to meet WCAG 2.1 Level AA accessibility requirements, ensuring readability for users with vision impairments.

**What to do:**
- Use dark, high-contrast text colors (e.g., near-black or dark gray like `#374151` / `#4B5563`) for all small supporting text such as photo counts, location labels, review counts, and metadata
- Ensure star rating text and numeric review counts are rendered in a color that achieves at least 4.5:1 contrast against the card background
- Apply darker text to all secondary/tertiary information lines on cards, not just headings and body copy
- Treat every piece of readable text as requiring contrast compliance, including captions, badges, and inline metadata

**What NOT to do:**
- Do not use light gray text (e.g., `#9CA3AF`, `#D1D5DB`, or similar low-contrast grays) for small metadata text on white or light card backgrounds
- Do not assume decorative or secondary text is exempt from contrast requirements -- photo counts, location names, and review counts all must pass
- Do not rely on font weight alone to compensate for insufficient color contrast
- Do not use placeholder-style muted colors (like `text-gray-400` or `text-muted-foreground` mapped to light grays) for any text the user is expected to read

**How to check -- pass/fail:**
- Compute the contrast ratio between every text element's color and its immediate background color using the WCAG relative luminance formula
- PASS: All text at 18px (1.125rem) or smaller has a contrast ratio of 4.5:1 or higher
- PASS: All text larger than 18px (or 14px bold) has a contrast ratio of at least 3:1
- FAIL: Any readable text on a card or section has a contrast ratio below 4.5:1 (for normal text) or below 3:1 (for large text)
- Specifically audit: star rating labels, review counts, photo counts, location/address lines, date strings, and any other small metadata text on cards

**Implementation guidance:**
- For body and metadata text on light backgrounds (`bg-white`, `bg-background`, `bg-warm`), use at minimum `text-gray-700` (`#374151`) which provides ~10:1 contrast on white
- Avoid `text-gray-400` (`#9CA3AF`, ~2.9:1 on white) and `text-gray-500` (`#6B7280`, ~4.6:1 on white -- borderline, prefer darker)
- Safe choices for small text on white/light backgrounds: `text-gray-700`, `text-gray-800`, `text-gray-900`, or the project's `text-foreground` / `text-body` tokens
- For muted but accessible secondary text, use `text-gray-600` (`#4B5563`, ~7:1 on white) as the lightest acceptable option
- When text overlays an image, ensure a solid or semi-transparent background behind the text (e.g., `bg-black/60`) to guarantee contrast regardless of image content
- Audit all instances of `text-muted-foreground`, `text-gray-400`, `text-gray-500`, and `opacity-` classes applied to text -- these are the most common sources of contrast failures
- Use browser DevTools accessibility audit or a CI tool like `axe-core` to catch contrast violations automatically

---

### Rule 9: Don't Rely on Colour Alone as an Indicator

**Principle:** Colour must never be the only visual cue that distinguishes interactive elements (links, buttons, status indicators) from static text. At least one additional non-colour cue -- such as an underline, icon, weight change, or border -- must be present so that colour-blind users can perceive the distinction.

**What to do:**
- Underline link text in addition to colouring it (e.g. "(38 reviews)" displayed in blue AND underlined so it is recognisable as a link even in greyscale)
- Pair status colours with icons or labels (e.g. a green checkmark icon alongside a green "Success" label, a red X icon alongside a red "Error" label)
- Use shape, weight, or texture differences alongside colour for interactive affordance (e.g. a filled button vs. an outlined button, not just a red button vs. a grey button)
- Ensure that if all colour were removed (viewed in greyscale), every interactive element would still be visually distinguishable from surrounding static text

**What NOT to do:**
- Style link text with only a colour change and no underline (e.g. "(38 reviews)" rendered in blue but otherwise identical in weight, decoration, and style to the surrounding "5.0" text -- indistinguishable when colour is removed)
- Use colour as the sole differentiator between tappable and non-tappable text within a card or listing
- Rely on red/green colour coding alone for error/success states without accompanying icons or text labels
- Assume users will recognise a blue word as a link purely because it is blue

**How to check -- pass/fail:**
- Convert the rendered UI to greyscale (CSS `filter: grayscale(1)` or a screenshot tool) -- every link and interactive element must still be visually distinguishable from adjacent static text
- Inspect every `<a>` and `<button>` rendered as inline text: it must have at least one non-colour differentiator (`text-decoration: underline`, an adjacent icon SVG/emoji, `font-weight` change, or visible border/outline)
- Search the codebase for inline text links that set colour (`text-blue-*`, `text-primary`, or any colour class) without also applying `underline`, `underline-offset-*`, or including a sibling icon element -- each match is a fail
- Error and success messages must pair their colour with an icon (check, X, alert triangle) or a text label -- colour-only status badges are a fail

**Implementation guidance:**
- For inline text links, always combine colour with underline decoration:
  ```html
  class="text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary"
  ```
  The `decoration-primary/40` gives a subtle underline at rest; `hover:decoration-primary` strengthens it on interaction. The underline is the critical non-colour cue.
- For review/rating links inside cards, apply:
  ```html
  <a href="..." class="text-primary underline underline-offset-2">38 reviews</a>
  ```
  NOT just:
  ```html
  <a href="..." class="text-primary">38 reviews</a>
  ```
- For status indicators (success, error, warning), always pair colour with an icon:
  ```html
  <span class="text-green-600 flex items-center gap-1">
    <CheckIcon class="h-4 w-4" /> Success
  </span>
  ```
- For form validation errors, combine red text colour with an alert icon or a distinct border:
  ```html
  class="text-destructive flex items-center gap-1"
  ```
  with an inline `<AlertCircle />` icon preceding the message.
- To audit existing links, run: `grep -rn 'text-primary\|text-blue' src/ | grep -v 'underline'` and fix every match.

---

## Typography

### Rule 10: Use a Single Sans Serif Typeface

**Principle:** Stick to a single sans serif typeface for mobile UI. Sans serif fonts are the most legible, neutral, and simple choice for interface design, and mixing in decorative or serif typefaces creates visual distraction and reduces readability on small screens.

**What to do:**
- Use one sans serif font family for all UI text (headings, body, labels, buttons)
- Keep headings and body text in the same typeface, differentiating only by weight and size
- Choose a clean, neutral sans serif (e.g., Inter, Proxima Nova, Helvetica Neue, system-ui) that pairs well with photographic content

**What NOT to do:**
- Do not use a serif or decorative typeface for headings while using sans serif for body text
- Do not mix multiple font families across different UI elements on the same screen
- Do not choose typefaces with high personality or ornamental details (ball terminals, high stroke contrast, swashes) for functional UI text

**How to check -- pass/fail:**
- Count the number of distinct font families used across the mobile layout; PASS if there is exactly 1 sans serif family (weight/size variants are fine)
- Inspect every heading (h1-h6) element: PASS if `font-family` resolves to the same sans serif stack as body text
- Check that no element uses a `font-family` containing serif-only fonts (e.g., Georgia, Times New Roman, Playfair Display, Merriweather) unless explicitly exempted for brand logo rendering
- Verify no CSS rule applies a decorative or display typeface to any interactive or content element on mobile viewports (under 768px)

**Implementation guidance:**
- Define one font family in your Tailwind/CSS config and apply it at the `body` or `:root` level so all elements inherit it:
  ```css
  :root {
    --font-sans: 'Inter', ui-sans-serif, system-ui, sans-serif;
  }
  body {
    font-family: var(--font-sans);
  }
  ```
- Do NOT set a separate `font-family` on heading elements; let them inherit from `body`
- Differentiate headings from body text using `font-weight` (e.g., `font-semibold` or `font-bold`) and `font-size` only
- If the project uses a decorative/serif font for brand identity on desktop (e.g., hero headings), consider overriding it to sans serif at mobile breakpoints:
  ```css
  @media (max-width: 767px) {
    h1, h2, h3 {
      font-family: var(--font-sans);
    }
  }
  ```
- In Tailwind v4, set the font in `@theme` and avoid arbitrary `font-[...]` syntax; use the configured utility class (e.g., `font-sans`) consistently
- If a serif or display font must be retained for branding on mobile, limit its use to a single prominent element (e.g., the site logo) and keep all other text in the sans serif family

---

### Rule 11: Use a Typeface with Taller Lowercase Letters

**Principle:** Typefaces with a larger x-height (the ratio of lowercase letter height to cap height) and greater letter spacing are significantly more legible at small sizes on mobile screens. Choosing a high-x-height font improves readability of body text without increasing font size.

**What to do:**
- Select typefaces with a tall x-height for body text (e.g., Inter, Roboto, Source Sans Pro, Noto Sans, IBM Plex Sans)
- Ensure lowercase letters like "a", "e", "o", "x" are visibly tall relative to uppercase letters in the chosen font
- Use fonts with generous default letter spacing so characters do not crowd together at 14-16px body sizes
- Verify body text is comfortable to read in a full paragraph block at mobile body sizes (14-16px)

**What NOT to do:**
- Do not use typefaces with a low x-height for mobile body copy (e.g., League Spartan, Garamond, Didot, Playfair Display for body text)
- Do not assume a font that looks good for headings will also work well for small body text -- display typefaces often have low x-heights
- Do not compensate for a low-x-height font by simply reducing line-height or letter-spacing, as this makes the problem worse

**How to check -- pass/fail:**
- PASS: The body font-family resolves to a typeface with an x-height ratio of approximately 0.52 or higher (Inter is ~0.54, Roboto is ~0.53)
- PASS: At 14px font-size on a 375px viewport, a full paragraph (4+ lines) of body text is legible without zooming
- FAIL: The body font-family uses a typeface with an x-height ratio below 0.48 (League Spartan is ~0.46, Times New Roman is ~0.45)
- FAIL: Lowercase letters appear noticeably short relative to capitals, creating a "small text" appearance even at adequate font sizes
- CHECK: Render the word "x-height" in the body font at 14px and compare lowercase "x" to the capital "H" -- the "x" should be at least half the height of the "H"

**Implementation guidance:**
- Set the body font-family to a high-x-height sans-serif. Recommended choices (all free, all high x-height):
  ```css
  /* Best choice -- Inter has one of the highest x-heights among popular fonts */
  font-family: 'Inter', system-ui, -apple-system, sans-serif;

  /* Other strong options */
  font-family: 'Source Sans Pro', sans-serif;
  font-family: 'IBM Plex Sans', sans-serif;
  font-family: 'Noto Sans', sans-serif;
  ```
- In Tailwind, configure the font stack in `tailwind.config` or CSS variables:
  ```css
  /* In globals.css or your theme layer */
  --font-body: 'Inter', system-ui, -apple-system, sans-serif;
  ```
  ```html
  <p class="font-body text-sm leading-relaxed tracking-normal">...</p>
  ```
- For mobile specifically, pair a high-x-height body font with `text-sm` (14px) or `text-base` (16px), `leading-relaxed` (1.625 line-height), and `tracking-normal` (0 letter-spacing) or `tracking-wide` (0.025em) -- high-x-height fonts rarely need extra spacing but it can help in dense layouts
- Display or decorative typefaces with low x-heights (League Spartan, Playfair Display, etc.) can still be used for large headings (24px+) where x-height matters less -- just keep them out of body copy and small UI labels
- If using a variable font like Inter, load the optical size axis (`opsz`) for automatic small-size optimization:
  ```css
  font-family: 'Inter', sans-serif;
  font-optical-sizing: auto;
  ```

---

### Rule 12: Limit the Use of Uppercase

**Principle:** Uppercase text is harder to read because every word becomes the same rectangular shape, forcing users to read letter-by-letter instead of recognizing word shapes at a glance. Reserve uppercase for very limited decorative uses (e.g., short eyebrow labels) and use title case or sentence case for all other text.

**What to do:**
- Use title case for location strings, place names, and addresses (e.g., "Snowy Peaks, NSW, Australia")
- Use sentence case for descriptive text where only the first word and proper nouns are capitalized
- Capitalize proper nouns (names of people, places, or things) naturally within sentence/title case
- Keep location labels, metadata text, and card subtitles in title or sentence case for quick scanning

**What NOT to do:**
- Do not render location strings in all-caps (e.g., "SNOWY PEAKS, NSW, AUSTRALIA")
- Do not apply `text-transform: uppercase` to multi-word labels, addresses, or any text longer than 2-3 short words
- Do not use uppercase for card metadata, descriptions, or any body-level text
- Do not rely on uppercase for visual hierarchy -- use font weight, size, or color instead

**How to check -- pass/fail:**
- FAIL if any text string longer than 3 words has `text-transform: uppercase` or the Tailwind class `uppercase` applied
- FAIL if location text, addresses, or place-name labels are rendered in all-caps
- FAIL if card subtitle/metadata text uses uppercase styling
- PASS if uppercase is confined only to short eyebrow labels (1-2 words, e.g., "FEATURED") or single-word badges
- PASS if all location strings, addresses, and multi-word labels use title case or sentence case

**Implementation guidance:**
- Remove `uppercase` Tailwind class (or CSS `text-transform: uppercase`) from any element containing location text, addresses, or multi-word descriptive labels
- If uppercase is used for eyebrow labels, limit it to elements with the `uppercase` class that contain at most 2-3 short words and pair it with `text-xs` or `text-[0.625rem]` tracking-wide styling so it reads as a deliberate design accent, not shouted text
- For location/address strings, ensure the raw text content uses proper title case in the source (e.g., `"Snowy Peaks, NSW, Australia"`) rather than applying CSS text-transform
- Prefer `capitalize` (title case via CSS) over `uppercase` when programmatic casing is needed, but only on short headings -- for longer strings, format the source text correctly instead of relying on CSS transforms
- Audit with: search the codebase for the Tailwind `uppercase` class and CSS `text-transform:\s*uppercase` declarations; verify each instance is a short eyebrow/badge, not a multi-word label or content string

---

### Rule 13: Use Regular and Bold Font Weights Only

**Principle:** Limit your interface to two font weights -- regular (400) and bold (700) -- to reduce visual noise, simplify design consistency, and ensure readability at all text sizes on mobile screens.

**What to do:**
- Use **bold** (700) font weight for headings and text that needs emphasis (some typefaces offer semi-bold as an acceptable substitute if bold feels too heavy)
- Use **regular** (400) font weight for all body text, labels, descriptions, metadata, and other smaller text
- Keep the weight palette to just these two values across the entire mobile UI

**What NOT to do:**
- Do not use **thin** (100) or **light** (300) weights for body-sized text or smaller -- thin characters become difficult to read on mobile, even when color contrast is sufficient
- Do not use **semi-bold** (600) as a third weight alongside regular and bold -- it adds unnecessary complexity (pick either semi-bold OR bold, not both)
- Do not mix 3+ font weights across the UI -- it creates visual clutter and makes it harder to apply weights consistently

**How to check -- pass/fail:**
- PASS: Every `font-weight` value in the codebase resolves to exactly 400 (regular/normal) or 700 (bold), with no other numeric weights used on text below 24px
- FAIL: Any instance of `font-weight: 100`, `font-weight: 200`, `font-weight: 300`, or utility classes like `font-thin`, `font-extralight`, `font-light` applied to body-sized text (under 24px)
- FAIL: More than two distinct font-weight values are used across the mobile UI (e.g., 300 + 400 + 600 + 700)
- EDGE CASE: If very thin or very thick (800/900) weights are used exclusively on headings or large display text (24px+), that is acceptable but should be flagged for review

**Implementation guidance:**
- Remove all Tailwind thin/light utilities from body text: delete `font-thin`, `font-extralight`, `font-light` classes on elements with text smaller than 24px
- Use only `font-normal` (400) and `font-bold` (700) as Tailwind weight utilities
- If the typeface's bold is too heavy, substitute `font-semibold` (600) -- but then do not also use `font-bold` alongside it; pick one and stay consistent
- Set the base font weight in your CSS reset or body styles: `font-weight: 400`
- Audit variable fonts: if using a variable font (like Proxima Vara), constrain the `font-weight` range in the `@font-face` declaration or ensure only 400 and 700 are ever referenced in code
- In Tailwind config or globals, consider safeguarding with a comment: `/* Allowed weights: font-normal (400), font-bold (700) only */`
- Grep check: `grep -rn "font-thin\|font-extralight\|font-light\|font-\[1\|font-\[2\|font-\[3" src/` should return zero results for body text contexts

---

### Rule 14: Avoid Pure Black Text

**Principle:** Pure black (#000000) text on a white or light background creates excessively high contrast that causes eye strain and reading fatigue. Replacing pure black with a dark grey softens the contrast ratio just enough to improve readability and visual comfort without sacrificing legibility.

**What to do:**
- Use a dark grey (e.g., #1A1A2E, #2D2D2D, or #333333) for primary body text and headings instead of pure black
- Use a medium grey (e.g., #4A4A4A or #6B7280) for secondary text like captions, metadata, dates, and descriptions
- Keep sufficient contrast ratio (at least 4.5:1 for body text, 3:1 for large text) per WCAG AA standards even after softening
- Apply the softer text color consistently across all text elements on the card or page: titles, subtitles, descriptions, metadata, and prices

**What NOT to do:**
- Do not use `#000000` or `rgb(0,0,0)` for any text rendered on white or light-colored backgrounds
- Do not mix pure black headings with grey body text on the same card -- the inconsistency draws attention to the harshness of the black
- Do not assume that maximum contrast (black on white) equals maximum readability -- it does not on backlit screens

**How to check -- pass/fail:**
- FAIL if any text element has `color: #000000`, `color: #000`, `color: rgb(0,0,0)`, `color: rgba(0,0,0,1)`, or Tailwind class `text-black` when rendered on a background lighter than #F0F0F0
- FAIL if Tailwind utility `text-black` is applied to any visible text element (headings, paragraphs, labels, prices, metadata)
- PASS if all text colors resolve to a dark grey with at least one RGB channel value >= 26 (i.e., no channel combination that equals pure 0,0,0)
- PASS if the contrast ratio between the chosen text color and its background is between 4.5:1 and 15:1 (avoiding both the extremes of too-low and maximum-harshness contrast)

**Implementation guidance:**
- Define a design token for primary text color in your CSS custom properties:
  ```css
  :root {
    --text-primary: #1A1A2E;    /* dark navy-grey for headings and body */
    --text-secondary: #4A4A4A;  /* medium grey for captions and metadata */
    --text-muted: #6B7280;      /* lighter grey for timestamps, fine print */
  }
  ```
- In Tailwind v4, map these tokens and use them instead of `text-black`:
  ```css
  @theme {
    --color-text-primary: #1A1A2E;
    --color-text-secondary: #4A4A4A;
    --color-text-muted: #6B7280;
  }
  ```
  Then use `text-text-primary` instead of `text-black` in markup.
- In Tailwind v3, use arbitrary values `text-[#1A1A2E]` or extend your theme config:
  ```js
  colors: {
    'text-primary': '#1A1A2E',
    'text-secondary': '#4A4A4A',
  }
  ```
- For existing projects, do a global find-and-replace:
  - Replace `text-black` with `text-text-primary` (or your equivalent token class)
  - Replace `color: #000` / `color: #000000` in CSS with `color: var(--text-primary)`
- For card UIs (listing cards with image, title, rating, description, price, and CTA button):
  - Title: use `--text-primary` (#1A1A2E)
  - Metadata (location, dates, star count): use `--text-secondary` (#4A4A4A)
  - Description paragraph: use `--text-secondary` (#4A4A4A)
  - Price: use `--text-primary` (#1A1A2E) for emphasis without resorting to pure black

---

### Rule 15: Left Align Text

**Principle:** English is read left-to-right, downward in an F-shaped scanning pattern. Body text must be left-aligned so the eye can find the start of each line at a consistent position. Center alignment forces the reader to hunt for the beginning of every line, increasing cognitive load and reducing readability.

**What to do:**
- Left-align all body/paragraph text, descriptions, and multi-line content blocks
- Left-align bulleted and numbered lists
- Keep the left edge of text blocks flush so every line starts at the same horizontal position
- Ensure description text within cards matches the alignment of the heading and metadata above it (left-aligned heading = left-aligned body)
- Reserve center alignment only for short, single-line elements: section headings, eyebrow labels, CTAs, or standalone one-liners that can be read in a single fixation

**What NOT to do:**
- Do not center-align paragraphs or body text longer than one line -- the ragged left edge makes each line's starting point unpredictable
- Do not center-align description text inside cards when the card heading, ratings, and metadata above it are left-aligned (this creates an inconsistent reading axis)
- Do not center-align bulleted or numbered lists -- the indentation becomes erratic and the list loses its visual structure
- Do not mix center-aligned body text with left-aligned headings in the same content block

**How to check -- pass/fail:**
- PASS: Every `<p>`, `<li>`, `<dd>`, or prose-length `<span>` containing more than ~60 characters (roughly two lines on mobile) has `text-align: left` (or inherits it as the default)
- PASS: Inside any card or content block, body text alignment matches the heading alignment (both left)
- FAIL: Any paragraph or multi-line text block has `text-center` / `text-align: center` applied
- FAIL: A card has a left-aligned title but center-aligned description paragraph beneath it
- Test: Search for `text-center` on elements containing multi-sentence content -- every match is a potential violation

**Implementation guidance:**
- Do not add `text-center` to wrapper elements that contain paragraphs (e.g., card bodies, section descriptions). If the parent has `text-center` for a heading, override the body text with an explicit `text-left` on the paragraph
- For card components: apply `text-left` to the card body container so all child text (title, metadata, description, lists) shares a consistent left edge
- For section layouts where the heading is centered but a description follows: use `text-center` on the heading element itself, then `text-left` on the description `<p>` below it
- Tailwind pattern for a typical card:
  ```html
  <div className="text-left">
    <h3>Card Title</h3>
    <p className="text-sm text-muted-foreground">Description paragraph...</p>
  </div>
  ```
- Tailwind pattern for a section with centered heading but left-aligned body:
  ```html
  <h2 className="text-center">Section Heading</h2>
  <p className="text-left max-w-prose mx-auto">Longer description text...</p>
  ```
- Grep audit command: `grep -rn "text-center" src/components/ src/app/` -- review every match to confirm it is only applied to short headings, eyebrows, CTAs, or single-line elements, never to paragraphs or multi-line content

---

### Rule 16: Use at Least 1.5 Line Height for Body Text

**Principle:** Line height (leading) is the vertical distance between two lines of text. Generous line height prevents users from re-reading the same line and makes body text feel comfortable and readable, especially on small mobile screens where line lengths are shorter and eyes fatigue faster.

**What to do:**
- Set line height to at least 1.5 (150%) for all body/paragraph text
- Keep line height between 1.5 and 2.0 for long-form body content (descriptions, paragraphs, card text)
- Apply generous line height to any multi-line text block -- card descriptions, product details, article body, form helper text

**What NOT to do:**
- Do not use a line height of 1.0 (100%) for body text -- this makes lines touch or nearly touch, creating a dense, cramped block of text that is difficult to parse
- Do not assume the browser default line height (typically ~1.2) is sufficient for body text -- it is still too tight for comfortable mobile reading

**How to check -- pass/fail:**
- PASS: All `<p>`, `<span>`, `<li>`, and general body text elements have a computed `line-height` of >= 1.5 (or >= 150%, or >= 1.5em relative to their font size)
- PASS: Card descriptions, product text, and any multi-line content blocks use line-height >= 1.5
- FAIL: Any body text has a computed line-height of less than 1.5 (e.g., 1.0, 1.1, 1.2, or a fixed pixel value that results in less than 150% of the font size)
- FAIL: Line-height is only applied to some body text but not consistently across all paragraph-level content
- Note: Headings, labels, and single-line UI elements (buttons, nav items) are exempt -- this rule targets multi-line body/paragraph text specifically

**Implementation guidance:**
- In Tailwind CSS, use `leading-relaxed` (1.625) or `leading-loose` (2.0) on body text. The class `leading-normal` (1.5) is the minimum acceptable value
- Avoid `leading-none` (1.0), `leading-tight` (1.25), or `leading-snug` (1.375) on any multi-line body text
- Set a global baseline in your CSS: `body { line-height: 1.5; }` or in Tailwind's base layer to ensure all text defaults to at least 1.5
- For Tailwind v4 with CSS variables: `--line-height-body: 1.5;` in your design tokens
- In raw CSS: `p, li, dd, blockquote { line-height: 1.5; }` as a baseline reset
- For longer paragraphs or smaller font sizes (14px and below), consider increasing to 1.6-1.75 for even better readability
- Example Tailwind on a card description: `<p class="text-sm leading-relaxed text-gray-600">...</p>`
