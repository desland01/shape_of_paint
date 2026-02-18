# Page Architecture — whiteoakpainting.com

> Mapped: 2026-02-18

## Site Map

### Primary Pages
1. **Homepage** `/` — Main landing page
2. **About** `/about/about` — Company story, founder bio
3. **Our Company** `/about/company` — Company details
4. **Reviews** `/about/reviews` — Google reviews page
5. **Testimonials** `/about/testimonials` — Client testimonials
6. **Interior Painting** `/services/interior-house-painting` — Service page
7. **Exterior Painting** `/services/exterior-house-painters` — Service page
8. **Portfolio** `/services/painting-projects-portfolio` — All portfolios
9. **Contact** `/contact/contact` — Contact info (address, email, phone)
10. **Free Estimate** `/contact/estimate` — Estimate request
11. **FAQs** `/contact/faq` — Frequently asked questions

### Gallery Pages
12. `/gallery/exterior-painting`
13. `/gallery/kitchen-and-bath`
14. `/gallery/living-and-dining`
15. `/gallery/signature-projects`

### Blog Categories
16. `/blog/all-articles`
17. `/blog/interior-house-painting`
18. `/blog/exterior-painting`
19. `/blog/expert-advice`

### Blog Posts (~25 posts)
- `/blog-post/[slug]` — Individual articles

### Utility
20. `/site-information/privacy-policy`
21. `/site-information/terms-of-service`
22. `/site-information/style-guide`

---

## Navigation Structure

### Header Nav (hamburger on mobile, links on desktop)
- Home
- Our Story → About Us | Our Company | Reviews
- Testimonials
- Services → Interior Painting | Exterior Painting | Portfolio
- Blog → Interior Painting | Exterior Painting | Expert Advice | All Articles
- Contact → Contact Us | Free Estimate | FAQs

### Footer
- Logo + Phone
- Links: Google Reviews, Painting Jobs
- Recommendations: Interior Design, Epoxy Floors, Carpentry
- Site Info: Privacy Policy, Terms of Service, Unsubscribe
- Copyright + Designer Credit
- Social: Instagram, Facebook, YouTube

---

## Page Templates

### Homepage (`/`)

| # | Section | Pattern | Content Slots |
|---|---------|---------|---------------|
| 1 | Header | Logo + hamburger nav | logo, nav items |
| 2 | Hero | 3-col photo grid + overlay card | 3 images, decorative icon, eyebrow, headline (H1), CTA button |
| 3 | Founder Quote | Large quote block | quote text (H2), author name, decorative accents |
| 4 | Video Testimonial | Eyebrow + heading + video | eyebrow, heading (H2), video embed |
| 5 | Services (Interior) | Image + text + CTA | image, title (H3), description, CTA link |
| 6 | Services (Exterior) | Image + text + CTA | image, title (H3), description, CTA link |
| 7 | Services (Pricing) | Image + text + CTA | image, title (H3), description, CTA link |
| 8 | CTA Banner | Button centered | CTA button |
| 9 | Decorative Feature | Eyebrow + text + image | eyebrow, title (H3), description, CTA, image, decorative icons |
| 10 | Portfolio Gallery | Eyebrow + heading + photo grid + lightbox | eyebrow, heading (H2), subtitle, 8 images with lightbox |
| 11 | Color Consulting | Eyebrow + text + image | eyebrow, title (H3), description, CTA, image, decorative icons |
| 12 | Testimonial Carousel | Eyebrow + heading + slider | eyebrow, heading (H2), testimonials[]{quote, author}, prev/next arrows |
| 13 | Contact CTA | Heading + text + CTA + image | title (H3), description, CTA link, image, decorative icons |
| 14 | Final CTA | Heading + button | heading (H2), CTA button |
| 15 | Instagram Grid | 6 linked photos | 6 images, Instagram link |
| 16 | Newsletter | Heading + form | title (H4), description, email input, submit, success msg |
| 17 | Footer | Logo + links + social | logo, phone, link columns, social icons, copyright |

### About Page (`/about/about`)

| # | Section | Pattern |
|---|---------|---------|
| 1 | Header | Same as homepage |
| 2 | Page Hero | Decorative icon + H1 + description + 3 photos |
| 3 | Company Story | Decorative accents + H2 + long-form text |
| 4 | Founder Bio | Photo + H3 + long bio text + CTA |
| 5 | Company Info | H3 + description + CTA + image |
| 6 | Portfolio Grid | 4 category cards (image + title + link) + "View all" |
| 7 | Instagram Grid | Same as homepage |
| 8 | Footer | Same as homepage |

### Contact Page (`/contact/contact`)

| # | Section | Pattern |
|---|---------|---------|
| 1 | Header | Same |
| 2 | Page Hero | Decorative icon + H1 |
| 3 | Contact Cards | 3 cards: Address, Email, Phone (each with icon + info) |
| 4 | Feature Image | Large interior photo |
| 5 | About Text | Long-form description of company |
| 6 | Instagram Grid | Same |
| 7 | Footer | Same |

### Estimate Page (`/contact/estimate`)

| # | Section | Pattern |
|---|---------|---------|
| 1 | Header | Same |
| 2 | Page Hero | Decorative icon + H1 + description + CTA button (links to DripJobs) |
| 3 | Feature Image | Interior photo |
| 4 | About Text | Long-form description |
| 5 | Instagram Grid | Same |
| 6 | Footer | Same |

### Service Page (Interior/Exterior)

| # | Section | Pattern |
|---|---------|---------|
| 1 | Header | Same |
| 2 | Page Hero | Decorative icon + H1 + hero image |
| 3 | Process Section | H2 + ordered list (Our Process) |
| 4 | Feature Block | H2 + description + image + decorative icon |
| 5 | Suggestions List | H2 + bullet list of rooms/areas + CTA + image |
| 6 | Testimonial Carousel | Same as homepage |
| 7 | Instagram Grid | Same |
| 8 | Footer | Same |

### Blog Listing Page

| # | Section | Pattern |
|---|---------|---------|
| 1 | Header | Same |
| 2 | Page Hero | Decorative icon + H1 + description |
| 3 | Article Grid | Cards with thumbnail, title, excerpt, date |
| 4 | Instagram Grid | Same |
| 5 | Footer | Same |

---

## Shared Components (appear on every page)

1. **Header** — Logo + navigation (hamburger on mobile)
2. **Instagram Grid** — 6 photos linking to Instagram
3. **Newsletter Signup** — Email form (homepage/some pages)
4. **Footer** — Logo, phone, 3 link columns, social, copyright
