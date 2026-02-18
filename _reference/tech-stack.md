# Tech Stack Analysis — whiteoakpainting.com

> Analyzed: 2026-02-18

## Platform

- **CMS/Builder**: Webflow (`data-wf-site`, `data-wf-page` attributes)
- **Hosting**: Cloudflare CDN (also uses Google Hosted Libraries CDN)
- **Protocol**: HTTP/3

## Frontend

- **Framework**: Webflow runtime (no React/Vue/Angular — static HTML + Webflow JS)
- **CSS**: Webflow generated CSS (utility + component classes like `.w-mod-js`, `.w-mod-ix`)
- **JavaScript**: jQuery (loaded via Google Hosted Libraries)
- **Interactions**: Webflow Interactions 2.0 (IX2) — `data-animation`, `data-duration`, `data-easing`
- **Carousel**: Webflow native slider component

## Typography

- **Primary Font**: Montserrat (all 9 weights + italics loaded via Google Font API)
- **Font Loading**: `wf-montserrat-n1-active` through `wf-montserrat-n9-active` class flags

## Analytics & SEO

- **Analytics**: Google Analytics
- **Verification**: Google Search Console (`google-site-verification` meta tag)
- **OG/Twitter**: Full Open Graph + Twitter Card meta on all pages

## Security

- **HSTS**: Enabled (HTTP Strict Transport Security)
- **Referrer**: `no-referrer` on some pages

## Images

- **Format**: WebP and AVIF via Webflow CDN (`cdn.prod.website-files.com`)
- **Optimization**: Webflow automatic responsive images

## Forms & Integrations

- **Estimate Requests**: DripJobs (`whiteoakpainting.dripjobs.com/appointmentrequests`)
- **Alt Estimate Form**: Jobber (`clienthub.getjobber.com`)
- **Newsletter**: Webflow native form (email capture in footer)
- **Email**: `info@whiteoakpainting.com`
- **Gallery**: Webflow native lightbox

## Social

- Instagram, Facebook, YouTube linked in footer
- Instagram photo grid in footer area

## Third-Party Assets

- Decorative botanical SVGs/PNGs from a shared Webflow template library (`61968e48b94efd50a60d2f19` site ID)
- Custom photography (WebP) hosted on Webflow CDN
