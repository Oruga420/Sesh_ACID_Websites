# Design Directives — Star Beauty & Hair Salon

## Identity Summary
Star Beauty & Hair Salon is a warm, welcoming neighborhood beauty salon on Kennedy Rd in Scarborough, run by Rachel Chu. The salon specializes in hair color transformations (balayage, ash blonde, rosegold, silver metallic) alongside full beauty services including threading, facials, and waxing. The brand personality is feminine, professional, and approachable — skilled craftsmanship with a friendly neighborhood vibe. The diverse Scarborough community is the salon's home.

## DO
- Use warm rose/blush color palette — feminine but not overwhelming
- Keep backgrounds light and warm (off-white with pink undertone)
- Use Cormorant Garamond for headings — elegant serif that says "beauty"
- Use DM Sans for body — clean, friendly, readable
- Show hair transformation work prominently (this is the portfolio)
- Include booking CTA above the fold
- Make phone number clickable (tap-to-call)
- Show hours prominently — walk-in friendly salon
- Use warm shadows and soft border-radius (12px)
- Include Kennedy Rd / Scarborough location pride
- Use section labels (uppercase overlines) for hierarchy
- Make the gallery page showcase color transformation work
- Footer should be dark (deep plum #2D1B30) as visual anchor

## DON'T
- Don't use dark mode — this is a light, warm, welcoming salon
- Don't use Playfair Display, Roboto, or Inter
- Don't use stock photos or Unsplash images
- Don't add fabricated stats bars ("500+ clients served")
- Don't use anchor links — every page gets its own route
- Don't dump all sections on the homepage
- Don't use cold blues or grays — stay in the warm rose/plum family
- Don't make it feel clinical or corporate
- Don't use equal-height card grids for services (use editorial list)
- Don't use generic CTAs ("Learn More") — be specific ("Book Your Color Transformation")

## Font Pairing
- **Heading**: Cormorant Garamond (400-700) — elegant serif with high contrast, beauty-appropriate
- **Body**: DM Sans (300-700) — geometric sans, friendly and modern
- **Nav**: DM Sans 500, uppercase, 0.12em letter-spacing, 13px
- **Rationale**: Serif/sans pairing creates hierarchy. Cormorant brings sophistication for a salon that does premium color work. DM Sans keeps it approachable for a walk-in neighborhood business.

## Color Usage Rules
- Primary (#C2185B Rose Star) — CTAs, links, accent elements, active states
- Secondary (#F8BBD0 Blush Pink) — soft backgrounds, hover states, card accents
- Deep Berry (#880E4F) — footer, dark sections, strong emphasis
- Background Main (#FFF8F5) — page background, warm off-white
- Background Alt (#FDE8EF) — alternate sections, light blush
- Headings (#2D1B30) — near-black with purple warmth
- Body text (#4A3347) — dark plum, readable on light backgrounds
- Muted (#8B6F87) — captions, metadata, secondary info

## Layout Archetype: PORTFOLIO-FIRST + NEIGHBORHOOD
Rachel's work IS the product. Color transformations drive bookings. But this is also a neighborhood walk-in salon, so location/hours matter.

## Section Order (Homepage)
1. Hero: Split layout — heading + CTA left, featured transformation right
2. Gallery teaser: 3-4 transformation images linking to /gallery
3. CTA strip: "Book Your Appointment"

## Section Order (Full Site)
- `/` — Hero + gallery teaser + CTA
- `/services` — Full service list, organized by category (Hair, Color, Treatment, Extensions, Beauty)
- `/gallery` — Portfolio grid of transformation work
- `/about` — Rachel's story, the salon, the neighborhood
- `/contact` — Map, hours, phone, booking CTA

## Tone of Voice Guide
- Speak directly: "Your hair transformation starts here"
- Be warm: "Welcome to Star Beauty" not "Star Beauty Hair Salon Inc."
- Be specific: "Balayage, color correction, ash blonde" not "hair services"
- Be confident: "Expert color transformations" not "we try our best"
- Neighborhood pride: "Scarborough's Kennedy Rd" not "Greater Toronto Area"

## Layout Blueprint
- Hero: 60/40 split — large heading + CTA left, transformation photo right
- Services: Editorial list grouped by category, not card grid
- Gallery: Asymmetric grid on dark background for contrast
- About: Photo right, text left — Rachel's story
- Contact: Map featured prominently, hours in sidebar, phone/CTA prominent
