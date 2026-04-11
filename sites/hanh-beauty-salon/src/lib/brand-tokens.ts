// AUTO-GENERATED from brand-bible.json — DO NOT EDIT BY HAND

export const BRAND = {
  slug: 'hanh-beauty-salon',

  colors: {
    primary: '#6B8E7B',
    secondary: '#4A6B5A',
    accent: '#C9A96E',
    warmNeutral: '#D4C4B0',
    bgMain: '#FAFAF7',
    bgAlt: '#F0EDE6',
    bgCard: '#FFFFFF',
    bgDark: '#2C3E35',
    textHeading: '#1A2E24',
    textBody: '#4A5D52',
    textMuted: '#8A9B90',
    textLight: '#FFFFFF',
    overallTheme: 'light-warm-wellness',
  },

  fonts: {
    heading: 'DM Serif Display',
    headingFallback: 'Georgia, serif',
    headingWeights: [400],
    body: 'DM Sans',
    bodyFallback: 'system-ui, sans-serif',
    bodyWeights: [300, 400, 500, 700],
    navWeight: 500,
    navTextTransform: 'uppercase' as const,
    navLetterSpacing: '0.15em',
  },

  spacing: {
    sectionPadding: 'clamp(3rem, 8vw, 6rem)',
    contentMaxWidth: '1280px',
    cardGap: '1.5rem',
    radiusButtons: '4px',
    radiusCards: '8px',
    radiusImages: '8px',
  },

  archetype: 'AUTHORITY + NEIGHBORHOOD',
  sectionOrder: ['hero', 'servicesOverview', 'spaExperience', 'testimonials', 'locations'],

  voice: {
    tone: 'professional, welcoming, wellness-focused, established',
    personality: ['calming', 'professional', 'established', 'wellness', 'comprehensive'],
    primaryCTA: 'Book Your Treatment',
  },

  people: [],

  images: {
    hero: null,
    logo: null,
    gallery: [],
    atmosphere: [],
    food: [],
  },

  demographics: {
    primaryLanguage: 'en',
    secondaryLanguage: null,
    neighborhood: 'Hurontario, Brampton',
    targetCustomer: 'Women and men 25-60 in Brampton seeking comprehensive spa, salon, and medispa services',
  },

  business: {
    name: 'Hanh Beauty Salon & Spa',
    address: '11495 Hurontario St, Brampton, ON L6Z 0B1',
    phone: '905-452-0855',
    email: 'info@hanhbeauty.com',
    hours: 'Mon-Sat 10AM-7PM, Sun 10AM-6PM',
    instagram: 'https://www.instagram.com/hanhsalonandspa2024/',
    facebook: 'https://www.facebook.com/HanhSalonAndSpa/',
    website: 'https://www.hanhbeauty.com/',
    bookingUrl: 'https://www.hanhbeauty.com/',
    locations: [
      { name: 'Mayfield Location', address: '11495 Hurontario St, Brampton, ON L6Z 0B1' },
      { name: 'Wellness Location', address: '7900 Hurontario St, Brampton, ON' },
    ],
  },
} as const;
