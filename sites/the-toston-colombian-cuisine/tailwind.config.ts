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
        "brand-cream": "#FDF8F0",
        "brand-tan": "#F5EDE0",
        "brand-white": "#FFFFFF",
        "brand-gold": "#D4A843",
        "brand-gold-dark": "#B8922E",
        "brand-red": "#C0392B",
        "brand-red-dark": "#A93226",
        "brand-green": "#2E7D32",
        "brand-coffee": "#2C1810",
        "brand-brown": "#4A3728",
        "brand-muted": "#8B7355",
        "brand-border": "#E0D5C3",
      },
      fontFamily: {
        heading: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-source-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
