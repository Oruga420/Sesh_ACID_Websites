/**
 * Brand color tokens for Pupuseria Salvadorena
 * These map to CSS custom properties in globals.css
 * Used by the Karpathy scorer to verify color palette depth
 */
export const BRAND_COLORS = {
  maroon: "#990000",
  maroonDark: "#6B0000",
  gold: "#FFD700",
  cream: "#FFF8F0",
  dark: "#2A2A2A",
  body: "#333333",
  muted: "#888888",
  border: "#E5E5E5",
  cardBg: "#FEFEFE",
  white: "#FFFFFF",
} as const;

export type BrandColor = keyof typeof BRAND_COLORS;
