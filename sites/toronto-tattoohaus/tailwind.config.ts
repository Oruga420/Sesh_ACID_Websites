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
        brand: {
          black: "#0a0a0a",
          dark: "#111111",
          charcoal: "#1a1a1a",
          gray: "#2a2a2a",
          gold: "#c4a265",
          "gold-light": "#d4b87a",
          "gold-dark": "#a88c4a",
          green: "#4a7c59",
          "green-light": "#5a9c6d",
          white: "#f5f5f5",
          "off-white": "#e8e8e8",
        },
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
