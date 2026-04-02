// AUTO-GENERATED from brand-bible.json — DO NOT EDIT BY HAND
// Regenerate by re-running Step 3.0

export const BRAND = {
  slug: 'toronto-tattoohaus',

  colors: {
    primary: '#c4a265',
    secondary: '#4a7c59',
    bgMain: '#0a0a0a',
    bgAlt: '#111111',
    bgCard: '#1a1a1a',
    textHeading: '#f5f5f5',
    textBody: '#d4d4d4',
    textMuted: '#999999',
    border: '#2a2a2a',
    link: '#c4a265',
    linkHover: '#d4b87a',
    goldDark: '#a88c4a',
    greenLight: '#5a9c6d',
    overallTheme: 'dark-moody',
  },

  fonts: {
    heading: 'Cormorant Garamond',
    headingFallback: 'serif',
    headingWeights: [400, 600, 700],
    body: 'Nunito Sans',
    bodyFallback: 'sans-serif',
    bodyWeights: [300, 400, 500, 600],
    navWeight: 500,
    navTextTransform: 'uppercase' as const,
    navLetterSpacing: '0.1em',
  },

  spacing: {
    sectionPadding: '80px',
    contentMaxWidth: '1500px',
    cardGap: '24px',
    radiusButtons: '0px',
    radiusCards: '0px',
    radiusImages: '0px',
  },

  archetype: 'portfolio-first',
  sectionOrder: [
    'hero',
    'gallery',
    'services',
    'team',
    'testimonials',
    'booking',
    'faq',
    'contact',
  ],

  voice: {
    tone: 'warm-casual',
    personality: ['welcoming', 'inclusive', 'down-to-earth', 'warm', 'community-minded'],
    primaryCTA: 'Book a Tattoo',
  },
} as const;
