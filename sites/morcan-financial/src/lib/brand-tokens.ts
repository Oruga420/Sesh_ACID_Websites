// AUTO-GENERATED from brand-bible.json — DO NOT EDIT BY HAND
// Regenerate by re-running Step 3.0

export const BRAND = {
  slug: 'morcan-financial',

  colors: {
    primary: '#1B4F8A',
    secondary: '#C8292E',
    accent: '#2A7DE1',
    bgMain: '#FFFFFF',
    bgAlt: '#F5F7FA',
    bgCard: '#FFFFFF',
    bgDark: '#0F2440',
    textHeading: '#0F2440',
    textBody: '#374151',
    textMuted: '#6B7280',
    textLight: '#FFFFFF',
    border: '#E5E7EB',
    overallTheme: 'light-clean',
  },

  fonts: {
    heading: 'DM Serif Display',
    headingFallback: 'serif',
    headingWeights: [400],
    body: 'DM Sans',
    bodyFallback: 'sans-serif',
    bodyWeights: [300, 400, 500, 600, 700],
    navWeight: 500,
    navTextTransform: 'none' as const,
    navLetterSpacing: '0.01em',
  },

  spacing: {
    sectionPadding: '96px',
    contentMaxWidth: '1200px',
    cardGap: '28px',
    radiusButtons: '6px',
    radiusCards: '10px',
    radiusImages: '8px',
  },

  archetype: 'service-first',
  sectionOrder: ['hero', 'services-overview', 'why-choose-us', 'testimonials', 'about-joe', 'calculator-teaser', 'contact-cta'],

  voice: {
    tone: 'warm-professional',
    personality: ['trustworthy', 'family-oriented', 'professional', 'approachable', 'established'],
    primaryCTA: 'Get Pre-Approved',
  },

  people: [
    {
      name: 'Joe Taibi',
      role: 'President and Principal Broker',
      profilePhotoUrl: null,
      portfolioPhotos: [],
      bio: 'President and Principal Broker at MorCan Financial Inc. FSRA #10687. Former Professor at Seneca College and Loans Manager at TD Bank Group. Serving mortgage clients since 1991.',
      instagram: 'morcanfinancial',
      featured: true,
    },
  ],

  images: {
    hero: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80',
    logo: 'https://www.morcan.ca/images/vaughan-gta-ontario-mortgage-brokers.png',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&q=80', description: 'Modern home exterior' },
      { url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80', description: 'Commercial building' },
      { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', description: 'Suburban home' },
    ],
  },

  demographics: {
    primaryLanguage: 'en' as const,
    secondaryLanguage: null,
    neighborhood: 'Woodbridge, Vaughan',
    targetCustomer: 'GTA homebuyers and homeowners',
  },

  business: {
    name: 'MorCan Financial Inc.',
    phone: '905-850-8100',
    fax: '905-856-8053',
    email: 'info@morcan.ca',
    address: 'Suite 346, 14-3650 Langstaff Road, Woodbridge, ON L4L 9A8',
    founded: 1997,
    fsra: '10687',
    lenders: '50+',
    social: {
      facebook: 'https://www.facebook.com/MorCan-Financial-Inc-187439207983145',
      instagram: 'https://www.instagram.com/morcanfinancial/',
      youtube: 'https://www.youtube.com/user/MorcanFinancial/videos',
      twitter: 'https://twitter.com/MorCanMortgages',
    },
  },
} as const;
