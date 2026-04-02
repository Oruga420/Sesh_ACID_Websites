# Design Directives — Mexico Lindo Express

## Identity Summary

Mexico Lindo Express is a takeout-focused authentic Mexican restaurant on Birchmount Road in Scarborough, passionately run by a Mexican chef. The brand identity is warm, unpretentious, and generous — a neighborhood hidden gem that lets the food speak for itself. The visual language should feel inviting and authentic, like walking into a family kitchen in Mexico: warm colors, appetizing food photography front and center, no pretension, and clear information about what matters most — the menu, the hours, and how to order. Customers describe the vibe as "cozy", "no-frills", and "if you know, you know."

## DO

- Use a light/warm background as the base — the site is NOT dark-themed (white body background with dark elements limited to hero overlay and footer)
- Lead with a full-bleed hero image of their signature birria tacos or a plated spread, overlaid with a dark scrim (rgba(0,0,0,0.7)) and white text
- Display hours and address prominently above the fold or immediately after the hero — customers need this first
- Feature food photography as the primary visual content — close-ups with visible ingredients, warm color temperature
- Use the green accent (#5CB85C) for primary CTAs like "Order Online" and "View Menu"
- Keep the design clean and flat — the current site uses zero box-shadows and minimal decoration
- Use short centered divider lines (50pt wide, #2A2A2A) between sections to match their current pattern
- Include delivery partner links (Uber Eats, SkipTheDishes) prominently — this is a takeout-first business
- Highlight the Wednesday/Friday BOGO taco special and cash discount — these are conversion drivers
- Use double corn tortilla imagery and generous portion shots — customers rave about portions
- Include verbatim customer quotes — "best birria tacos in the GTA" and "culinary trip to Mexico" are powerful
- Show the Google (4.4) and Uber Eats (4.7) ratings as trust signals
- Use Spanish menu category names (Antojitos, Sopa y Ensaladas, Favoritos, Postres, Aguas Frescas) — they reinforce authenticity

## DON'T

- Don't use a dark theme for the overall site — only the hero and footer should be dark. The body background is white.
- Don't use rounded/pill-shaped buttons — their current buttons use small border-radius (4px), keeping things clean and functional
- Don't use playful or script fonts — the brand is warm but not whimsical. Montserrat and Roboto are clean and modern.
- Don't bury hours and location — these must be visible within the first two scroll stops
- Don't use stock food photography — their CloudFront-hosted images show THEIR actual dishes, not generic Mexican food
- Don't add excessive animation or parallax — the current site has zero scroll animations. Keep it straightforward.
- Don't use a multi-column complex footer — their footer is single-column, minimal, dark background
- Don't describe the food with "fusion", "gourmet", or "upscale" language — this is street food, authentic and proud
- Don't put a contact form before the map — location and hours come first for a restaurant
- Don't use box shadows on cards — the site uses flat design throughout
- Don't add a team/staff section with placeholder photos — no staff names are publicly known. Use the brand story instead.

## Font Pairing

**Heading:** Montserrat (600-700 weight) — geometric sans-serif that reads as modern and confident without being corporate. Matches the bold, direct personality of the brand. Used on the menu/ordering platform for headings and navigation.

**Body:** Roboto (300-400-500 weight) — neutral, highly readable sans-serif perfect for menu descriptions, hours, and informational content. Pairs cleanly with Montserrat without competing for attention.

**Nav:** Montserrat at 600 weight, uppercase, 0.05em letter-spacing, 12pt — provides clear wayfinding that matches the no-nonsense restaurant personality.

**Import URLs:**
- `https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap`
- `https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap`

## Color Usage Rules

- **Primary CTA (Order Online):** #5CB85C green on #FFFFFF white background — high contrast, action-oriented
- **Hero overlay:** rgba(0,0,0,0.7) over food photography — ensures white text readability
- **Section alternation:** #FFFFFF (white) -> #F5F5F5 (light gray) -> #FFFFFF — subtle depth without dramatic contrast
- **Section dividers:** Short centered lines in #2A2A2A, 50pt wide, 2pt solid — distinctive pattern from the original site
- **Footer:** #2A2A2A dark background with #FFFFFF text — classic dark-inverse footer
- **Heading text:** #212529 (near-black) — matches the original nav/heading color
- **Body text:** #333333 for readability on white backgrounds
- **Accent/Decorative:** #D4A843 warm gold — sparingly for Mexican-themed accents, borders, or icon highlights
- **Never use** bright red as a primary color — despite being "Mexican", the brand's actual palette is green, dark charcoal, and warm gold
- **Never use** #5CB85C green for large background areas — reserve it for buttons and small accents only

## Layout Archetype: LOCATION-FIRST

**Rationale:** Mexico Lindo Express is a neighborhood restaurant where foot traffic, takeout convenience, and location identity are the primary conversion drivers. Customers describe it as a "hidden gem" and emphasize "worth the drive." The website currently leads with location and hours alongside the hero. The menu is the conversion tool, but the identity is rooted in being Scarborough's authentic Mexican spot on Birchmount Road.

## Section Order (from archetype)

1. **Hero** — Full-bleed food photography (birria tacos or plated spread) with dark overlay. White centered text: "Mexico Lindo Express" + "Authentic Mexican Restaurant". Hours badge or "Open Now" indicator. Primary CTA: "Order Online" button.
2. **Menu / Featured Items** — Signature dishes with photos and prices. Lead with Tacos de Birria, Carne Asada Tacos, and Mexican Combo. Include the BOGO Wednesday/Friday special callout.
3. **About / Story** — Brief paragraph about the Mexican chef owner who brings authentic homeland flavors to Scarborough. No names needed — focus on the passion and authenticity. Use a warm food-preparation photo.
4. **Gallery** — 3-6 food photography images from their CloudFront CDN. Close-up shots of dishes with 5pt border-radius. Grid layout, warm color temperature.
5. **Reviews / Social Proof** — 3-4 verbatim customer quotes with star ratings. Feature "best birria tacos in the GTA" and "culinary trip to Mexico" prominently. Show aggregate ratings from Google (4.4) and Uber Eats (4.7).
6. **Specials & Deals** — Wednesday/Friday BOGO tacos, cash discount, Family Fiesta Deals (catering trays). This section drives repeat visits and larger orders.
7. **Map + Hours** — Embedded Google Map centered on 2586 Birchmount Rd. Hours table (Sun 12-7, Tue-Fri 11-9, Sat 12-9, Closed Monday). Address and phone prominently displayed. Parking note.
8. **Contact / Order** — Phone number, delivery partner links (Uber Eats, SkipTheDishes), Instagram link. Simple and functional — no contact form needed for a takeout restaurant.

## Layout Blueprint

- **Header:** Static white background, centered logo (CloudFront-hosted), centered nav with 5 items (Home, Menu, Specials, Location, Order Online). Nav uses Montserrat 600 uppercase 12pt, dark text with green hover. Hamburger dropdown on mobile.
- **Hero:** Full-width food photography background with rgba(0,0,0,0.7) overlay. Centered white text stack: restaurant name (Montserrat 700, 20pt+), subtitle, and green CTA button. No video, no slider — single powerful image.
- **Content sections:** Alternating white (#FFFFFF) and light gray (#F5F5F5) backgrounds. Max-width 1200px centered. Separated by short centered dark divider lines (50pt wide, #2A2A2A). Content padding 15-30pt vertical.
- **Cards:** Flat design, no shadow, white background. Food images with 5pt border-radius. Clean typographic hierarchy with Montserrat headings and Roboto body.
- **Footer:** Full-width #2A2A2A dark background. Single column centered. White text with social media icons (20pt, white). Copyright line. Minimal — no multi-column layout.

## Tone of Voice Guide

- **Headlines should sound like:** "Welcome to Mexico Lindo Express" — warm, direct, no hype. Simple statements of identity rather than clever taglines.
- **Menu descriptions should sound like:** "Traditional Braised Beef Tacos, topped with Cilantro, Onion, Cheese, Lime and Salsa" — ingredient-forward, descriptive, appetizing. List what's in it, let the food sell itself.
- **CTAs should sound like:** "Order Online", "View Full Menu", "Find Us" — functional and clear. No urgency tactics ("ORDER NOW!") or soft invitations ("Explore our offerings"). Just tell them what the button does.
- **About copy should sound like:** "Owned and passionately run by a Mexican chef who truly honors the flavors of their homeland" — warm third-person narrative. Emphasize authenticity and passion, not business credentials.
- **Review callouts should sound like:** Direct customer quotes without editorial framing. Let the customers speak: "Seriously the best Mexican food I've found in Toronto!"
- **Specials should sound like:** "Buy one, get one 50% off on tacos — Wednesdays & Fridays" — clear, factual, easy to understand. No marketing fluff.
