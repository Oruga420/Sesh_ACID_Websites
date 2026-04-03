import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-offwhite": "#FFF9F2",
        "brand-cream": "#FDF0E1",
        "brand-white": "#FFFFFF",
        "brand-red": "#E8443A",
        "brand-red-dark": "#C73830",
        "brand-gold": "#F7B731",
        "brand-gold-dark": "#D9A020",
        "brand-green": "#2D8E4E",
        "brand-espresso": "#2B1810",
        "brand-brown": "#4A3520",
        "brand-muted": "#8B7355",
        "brand-border": "#E8DDD0",
      },
      fontFamily: {
        heading: ["var(--font-libre-baskerville)", "serif"],
        body: ["var(--font-nunito-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
