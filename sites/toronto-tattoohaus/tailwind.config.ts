import type { Config } from "tailwindcss";
import { BRAND } from "./src/lib/brand-tokens";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: BRAND.colors.primary,
          secondary: BRAND.colors.secondary,
          bgMain: BRAND.colors.bgMain,
          bgAlt: BRAND.colors.bgAlt,
          bgCard: BRAND.colors.bgCard,
          textHeading: BRAND.colors.textHeading,
          textBody: BRAND.colors.textBody,
          textMuted: BRAND.colors.textMuted,
          black: BRAND.colors.bgMain,
          dark: BRAND.colors.bgAlt,
          charcoal: BRAND.colors.bgCard,
          gray: BRAND.colors.border,
          gold: BRAND.colors.primary,
          "gold-light": BRAND.colors.linkHover,
          "gold-dark": BRAND.colors.goldDark,
          green: BRAND.colors.secondary,
          "green-light": BRAND.colors.greenLight,
          white: BRAND.colors.textHeading,
          "off-white": "#e8e8e8",
        },
      },
      fontFamily: {
        heading: [BRAND.fonts.heading, BRAND.fonts.headingFallback],
        body: [BRAND.fonts.body, BRAND.fonts.bodyFallback],
      },
      maxWidth: {
        content: BRAND.spacing.contentMaxWidth,
      },
    },
  },
  plugins: [],
};

export default config;
