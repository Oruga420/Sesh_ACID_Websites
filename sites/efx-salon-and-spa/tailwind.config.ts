import type { Config } from 'tailwindcss';
import { BRAND } from './src/lib/brand-tokens';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: BRAND.colors.primary,
          secondary: BRAND.colors.secondary,
          accent: BRAND.colors.accent,
          bgMain: BRAND.colors.bgMain,
          bgAlt: BRAND.colors.bgAlt,
          bgCard: BRAND.colors.bgCard,
          bgWarm: BRAND.colors.bgWarm,
          textHeading: BRAND.colors.textHeading,
          textBody: BRAND.colors.textBody,
          textMuted: BRAND.colors.textMuted,
        },
      },
      fontFamily: {
        heading: [BRAND.fonts.heading, BRAND.fonts.headingFallback],
        body: [BRAND.fonts.body, BRAND.fonts.bodyFallback],
      },
      maxWidth: {
        content: BRAND.spacing.contentMaxWidth,
      },
      borderRadius: {
        btn: BRAND.spacing.radiusButtons,
        card: BRAND.spacing.radiusCards,
        img: BRAND.spacing.radiusImages,
      },
    },
  },
  plugins: [],
};

export default config;
