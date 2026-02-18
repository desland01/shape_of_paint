# Integrations TODO

Checklist of services to connect after filling in business content.

## Required

- [ ] **Email service** — Wire `src/app/api/contact/route.ts` to Resend, SendGrid, or webhook
- [ ] **Estimate/booking** — Replace CTA links to use your booking platform (DripJobs, Jobber, Calendly, etc.) at `<!-- BOOKING_EMBED -->` slots
- [ ] **Analytics** — Add Google Analytics or Plausible at `<!-- ANALYTICS -->` in `src/app/layout.tsx`
- [ ] **Google Search Console** — Add verification meta tag to `src/app/layout.tsx` metadata

## Recommended

- [ ] **Chat widget** — Add Tawk.to, Intercom, or similar at `<!-- CHAT_WIDGET -->` in `src/app/layout.tsx`
- [ ] **Newsletter** — Wire newsletter form to Mailchimp, ConvertKit, or email service
- [ ] **OG images** — Create and place in `/public/og/` directory, reference in page metadata
- [ ] **Favicon** — Replace `/public/favicon.ico` with your business favicon
- [ ] **Real images** — Replace all `placehold.co` URLs with real photography
- [ ] **Instagram feed** — Replace static grid images with your actual Instagram photos

## Optional

- [ ] **Google Maps embed** — Add map to contact page
- [ ] **Video testimonials** — Add YouTube/Vimeo embed URLs to VideoTestimonial component
- [ ] **Blog** — Create blog pages with CMS or MDX content
- [ ] **Review widget** — Embed Google Reviews or Yelp widget
