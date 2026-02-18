# Automations & Integrations — whiteoakpainting.com

> Analyzed: 2026-02-18

## Forms

### 1. Estimate Request
- **Provider**: DripJobs
- **URL**: `https://whiteoakpainting.dripjobs.com/appointmentrequests`
- **Behavior**: External link (opens DripJobs hosted form)
- **Alt Provider**: Jobber (`clienthub.getjobber.com`)
- **Fields**: Handled by external platform

### 2. Newsletter Signup (Footer)
- **Provider**: Webflow native form
- **Fields**: Email (single field)
- **Submit behavior**: Form hides, "Thank you! You have successfully joined our subscriber list." message appears
- **Validation**: Email format (HTML5)

## Scheduling/Booking

- No embedded scheduling widget
- Estimate requests link to DripJobs external form
- Phone number prominently displayed for direct contact: `(319) 850-9137`

## Chat Widget

- None detected

## Email

- Contact email: `info@whiteoakpainting.com`
- Unsubscribe: `mailto:info@whiteoakpainting.com?subject=Unsubscribe%20me!`

## Analytics

- **Google Analytics**: Active
- **Google Search Console**: Verified (`1UfpsK9_jGEWbafF9hXEE85wS8f-yVLX_3LsbFKgxMo`)

## SEO Infrastructure

### Meta Tags Pattern
Every page includes:
- `<title>` — Unique per page, includes location + phone
- `<meta name="description">` — Unique per page
- `og:title`, `og:description`, `og:image`, `og:type`
- `twitter:title`, `twitter:description`, `twitter:image`, `twitter:card`
- `viewport` with `width=device-width, initial-scale=1`
- `google-site-verification`

### Open Graph Images
- Custom OG images per page (professional photos, branded)
- Hosted on Webflow CDN
- Format: JPG, approximately 1200x630px

### Schema/Structured Data
- Not explicitly detected in scrape (may be embedded in Webflow settings)
- Should implement: LocalBusiness, Service, Review, FAQ, BreadcrumbList

### Sitemap
- Webflow auto-generates sitemap at `/sitemap.xml`

### Canonical
- Webflow handles canonical URLs automatically

### Robots
- Standard Webflow robots.txt

## Performance Patterns

### Images
- **Format**: WebP and AVIF (modern formats)
- **CDN**: Cloudflare + Webflow CDN (`cdn.prod.website-files.com`)
- **Responsive**: Webflow generates srcset for responsive images
- **Lazy loading**: Standard browser-level (`loading="lazy"`)

### Code
- **jQuery**: Loaded from Google Hosted Libraries (cached)
- **Webflow JS**: Single bundled runtime
- **CSS**: Single Webflow-generated stylesheet
- **No code splitting** (static site, single CSS/JS bundle)

### Security
- **HSTS**: Enabled
- **HTTPS**: Enforced
- **Referrer**: `no-referrer` on some pages

## Social Media

### Links
- Instagram: `instagram.com/whiteoak.painting/`
- Facebook: `facebook.com/profile.php?id=61558318138164`
- YouTube: `youtube.com/channel/UCp7yKzbNSZSDGyFUCKuNMtQ`

### Instagram Grid
- 6 photos displayed in footer area
- Links to Instagram profile
- Static images (not live API feed)

## External Services Summary

| Service | Purpose | Integration Type |
|---------|---------|-----------------|
| DripJobs | Estimate requests | External link |
| Jobber | Alt estimate form | External link |
| Google Analytics | Analytics | Script tag |
| Google Search Console | SEO verification | Meta tag |
| Cloudflare | CDN/Security | DNS/Proxy |
| Instagram | Social proof | Static image links |
| Facebook | Social | Link |
| YouTube | Social/Video | Link + embeds |
| Google Maps | Business listing | Link |
| Monday.com | Job applications | External form link |
