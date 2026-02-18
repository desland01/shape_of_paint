---
name: landing-pages
description: Build high-converting landing pages optimized for Google Ads and paid traffic. Use this skill when building landing pages for local service businesses, lead generation pages, Google Ads campaigns, PPC landing pages, home service contractors (painting, HVAC, plumbing, roofing, etc.), or when optimizing pages for conversion rate. Covers message match, Quality Score optimization, mobile-first design, click-to-call, form optimization, and A/B testing strategies.
---

# Landing Page Builder for Google Ads & Local Services

Build landing pages that convert paid traffic into high-quality leads. Optimized for local home service businesses running Google Ads campaigns.

## Core Principle: Message Match

The #1 conversion factor. The landing page MUST deliver exactly what the ad promised.

- Ad says "$79 Drain Cleaning" → Page headline shows "$79 Drain Cleaning"
- Ad says "Free Estimate" → Form CTA says "Get Your Free Estimate"
- Ad mentions "Same Day Service" → Page prominently displays same-day guarantee

## Conversion Benchmarks

| Page Type | Conversion Rate |
|-----------|-----------------|
| Dedicated landing page | 5-15% |
| Homepage (don't use) | 1-3% |
| Click-to-call | 10-15x higher than form |

## Page Structure: The 8-Second Framework

Visitors decide stay-or-leave in 8 seconds. 80% of attention goes to headline.

### Above the Fold (0-3 seconds)

```
┌─────────────────────────────────────────────────────┐
│ [Logo]                    📞 [PHONE]  [STICKY]│
├─────────────────────────────────────────────────────┤
│                                                     │
│  [HEADLINE: Service + Location + Value + Urgency]   │
│  Example: "Premium [Service] in [City]              │
│           – [Key Guarantee] Included"               │
│                                                     │
│  [Trust Badge] ⭐⭐⭐⭐⭐ 4.9 Google (127 reviews)     │
│                                                     │
│  ┌─────────────────┐    ┌──────────────────────┐   │
│  │                 │    │ Get Your Free Quote  │   │
│  │   HERO IMAGE    │    │ Name: [          ]   │   │
│  │   (local work)  │    │ Phone: [         ]   │   │
│  │                 │    │ Email: [         ]   │   │
│  │                 │    │ [GET MY FREE QUOTE]  │   │
│  └─────────────────┘    └──────────────────────┘   │
│                                                     │
│  ✓ Licensed & Insured  ✓ Lifetime Warranty  ✓ Free │
└─────────────────────────────────────────────────────┘
```

### Headline Formula

`[Service Type] + [Location] + [Unique Value] + [Urgency]`

Examples:
- "Expert [Service] in [City] – [Key Guarantee] Included"
- "Premium [Service] Serving [Nearby City] – 10% Off Through [Month]"
- "Trusted [Service Provider] in [City] – Free Estimates Same Day"

### First Scroll (3-10 seconds)

- Problem acknowledgment (2-3 sentences)
- 3 key benefits with icons
- Secondary CTA

### Deep Content (10-30 seconds)

- Detailed service explanation
- Social proof section (testimonials + reviews)
- FAQ accordion (address objections)
- Final CTA repeat

## Critical Elements

### 1. Click-to-Call (Non-negotiable for local services)

```html
<!-- Sticky header phone -->
<a href="tel:+1XXXXXXXXXX" class="click-to-call">
  📞 [PHONE]
</a>

<!-- Large hero phone -->
<a href="tel:+1XXXXXXXXXX" class="hero-phone">
  Call Now: [PHONE]
</a>
```

- Phone number sticky in header (always visible)
- Clickable with `tel:` format for mobile auto-dial
- Large and prominent in hero section
- Consider call tracking (CallRail, etc.) for attribution

### 2. Form Optimization

Minimal fields = higher completion. For contractors:

```
Required:
- Name (first only is fine)
- Phone
- Email

Optional:
- Project type (dropdown)
- Brief description (textarea, optional)
```

**CTA Button Copy That Converts:**
- ✅ "Get My Free Quote"
- ✅ "Schedule My Free Estimate"
- ✅ "Get Your Free Quote Now"
- ❌ "Submit" (27% lower conversion)
- ❌ "Send"

### 3. Local Trust Signals

Homeowners doing local searches are 2x more likely to purchase.

Include:
- "Serving [City], [Nearby City] & Surrounding Areas"
- Service area map
- Local project photos (with neighborhood mentions)
- Reviews citing specific neighborhoods
- License numbers, local certifications

### 4. Social Proof Hierarchy

Layer proof throughout the page:

1. **Aggregate rating** (hero): "⭐⭐⭐⭐⭐ 4.9 on Google (127 reviews)"
2. **Text testimonials** (mid-page): 2-3 with customer photos and names
3. **Video testimonial** (if available): Highest engagement
4. **Trust badges** (footer): BBB A+, manufacturer certifications, insurance

## Page Speed Requirements

1-second delay = up to 20% conversion loss.

Targets:
- Under 3 seconds load time
- Sub-1 second for emergency services
- Compress all images (WebP format)
- Lazy load below-fold images
- Minimize JavaScript
- Mobile-first responsive design

## Service-Specific Pages

Create separate landing pages per service/promotion. Never send all traffic to one page.

For a local service business:
- `/[service-1]/` - Primary service landing page
- `/[service-2]/` - Secondary service landing page
- `/[service-3]/` - Tertiary service landing page
- `/spring-special/` - Seasonal promotion page

Each page optimized for specific keyword intent.

## Quality Score Optimization

Google evaluates landing pages on:

| Factor | How to Optimize |
|--------|-----------------|
| Relevance | Keywords from ad appear in headline + body |
| Usefulness | Clear service info, address objections |
| Navigation | Easy to find info, clear CTAs |
| Mobile | Fully responsive, fast loading |
| Transparency | Business info, contact details, license |

Higher Quality Score = Lower CPC + Better ad position

## A/B Testing Priority

Test one element at a time, 2+ weeks, 95% confidence before rollout.

Order of impact:
1. **Headlines** (biggest impact)
2. **CTA button text**
3. **Form length**
4. **Hero image**
5. **Social proof placement**

## Implementation Checklist

See `references/implementation-checklist.md` for complete build checklist.

## HTML Template

See `assets/landing-page-template.html` for a starter template with all required elements.

## Mobile Requirements

61% of local searches are mobile. Mobile users prefer calling over forms.

- Click-to-call triggers phone call automatically on mobile
- Forms optimized for mobile keyboards
- Touch-friendly buttons (minimum 44x44px tap targets)
- No horizontal scrolling
- Thumb-friendly CTA placement

## Tracking Setup

Essential tracking:
- Google Analytics 4
- Google Ads conversion tracking (forms + calls)
- Call tracking service for phone attribution
- Thank you page for form tracking

## Common Mistakes to Avoid

❌ Using homepage instead of dedicated landing page
❌ Multiple CTAs with different goals
❌ Too many form fields
❌ Slow page load speed
❌ Poor mobile experience
❌ Generic content not matching ad promise
❌ Burying phone number
❌ No social proof
