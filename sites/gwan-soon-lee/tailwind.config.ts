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
          green: "#2d8c4e",
          "green-light": "#3da863",
          "green-dark": "#1f6b38",
          gold: "#c9a44b",
          "gold-light": "#d4b565",
          "gold-dark": "#b08e35",
          white: "#ffffff",
          "off-white": "#f0f0ea",
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
