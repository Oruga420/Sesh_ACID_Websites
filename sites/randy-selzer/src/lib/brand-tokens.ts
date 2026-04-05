// AUTO-GENERATED from brand-bible.json — DO NOT EDIT BY HAND
// Regenerate by re-running Step 3.0

export const BRAND = {
  slug: 'randy-selzer',

  colors: {
    primary: '#1B5E7A',
    secondary: '#C8963E',
    accent: '#2A8CB5',
    bgMain: '#FAFAF7',
    bgAlt: '#F0EDE6',
    bgCard: '#FFFFFF',
    bgDark: '#1A2332',
    textHeading: '#1A2332',
    textBody: '#3D4A5C',
    textMuted: '#7A8599',
    textLight: '#FFFFFF',
    border: '#DDD8CE',
    overallTheme: 'light-clean',
  },

  fonts: {
    heading: 'Cormorant Garamond',
    headingFallback: 'serif',
    headingWeights: [400, 500, 600, 700],
    body: 'Lato',
    bodyFallback: 'sans-serif',
    bodyWeights: [300, 400, 500, 700],
    navWeight: 500,
    navTextTransform: 'uppercase' as const,
    navLetterSpacing: '0.08em',
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
  sectionOrder: ['hero', 'services', 'about', 'testimonials', 'podcast', 'contact'],

  voice: {
    tone: 'warm-professional',
    personality: ['authoritative', 'friendly', 'experienced', 'approachable', 'knowledgeable'],
    primaryCTA: 'Contact Randy',
  },

  people: [
    {
      name: 'Randy Selzer',
      role: 'Sales Representative / REALTOR',
      profilePhotoUrl: 'https://assets.rew.ca/property-agent/image/105337/8151_Randy_Selzer_large_file.jpg',
      portfolioPhotos: [],
      bio: 'Platinum award-winning Real Estate Agent serving Mississauga, Oakville, and the Greater Toronto Area since 1993. Host of the Randy Selzer Real Estate Podcast.',
      instagram: 'randyselzer',
      featured: true,
    },
  ],

  images: {
    hero: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Mississsauga_Skyline_crop.jpg',
    logo: null,
    gallery: [
      { url: 'https://assets.rew.ca/property-agent/image/105337/8151_Randy_Selzer_large_file.jpg', description: 'Randy Selzer professional headshot' },
      { url: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Downtown_Mississauga.jpg', description: 'Downtown Mississauga' },
      { url: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Square_One%2C_Mississauga.jpg', description: 'Square One Mississauga' },
      { url: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Mississauga_skyline_from_Pearson.jpg', description: 'Mississauga skyline' },
      { url: 'https://pbcdn1.podbean.com/imglogo/image-logo/1623725/PodcastCover.jpg', description: 'Podcast cover art' },
    ],
    atmosphere: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Mississauga_Skyline1.jpg', description: 'Mississauga skyline panoramic' },
    ],
  },

  demographics: {
    primaryLanguage: 'en',
    secondaryLanguage: null,
    neighborhood: 'Mississauga — suburban GTA',
    targetCustomer: 'Home buyers, sellers, and investors in Mississauga, Oakville, and the GTA',
  },

  business: {
    name: 'Randy Selzer',
    fullName: 'Randy Selzer - Sutton Group Summit Realty',
    tagline: 'Your Trusted Real Estate Expert in Mississauga',
    phone: '416-433-3556',
    officePhone: '905-897-9555',
    email: 'rselzer@sutton.com',
    address: '33 Pearl St, Mississauga, ON L5M 1X1',
    brokerage: 'Sutton Group - Summit Realty Inc., Brokerage',
    established: 1993,
    awards: ['Platinum Award Winner'],
    memberships: ['CREA', 'OREA', 'TRREB'],
    social: {
      instagram: 'https://www.instagram.com/randyselzer/',
      facebook: 'https://www.facebook.com/randyselzer.realestate/',
      twitter: 'https://twitter.com/randyselzer',
      youtube: 'https://www.youtube.com/user/randyselzer/',
      linkedin: 'https://www.linkedin.com/in/randyselzer/',
      podcast: 'https://randyselzer.podbean.com/',
    },
  },
} as const;
