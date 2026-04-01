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
        primary: {
          50: "#e6f2fb",
          100: "#b3d9f3",
          200: "#80c0eb",
          300: "#4da7e3",
          400: "#1a8edb",
          500: "#0170B9",
          600: "#015a94",
          700: "#01446f",
          800: "#002e4a",
          900: "#001825",
          950: "#000c13",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
