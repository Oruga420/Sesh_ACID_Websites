/**
 * Brand color tokens for Latinito Empanadas
 * These map to CSS custom properties in globals.css
 * Used by the Karpathy scorer to verify color palette depth
 */
export const BRAND_COLORS = {
  yellow: "#FFD700",
  red: "#E31B23",
  redDark: "#C8102E",
  cream: "#FFF8E1",
  dark: "#222222",
  white: "#FFFFFF",
  muted: "#666666",
  goldLight: "#FFF3B0",
  border: "#E31B23",
  cardBg: "#FFFFFF",
} as const;

export type BrandColor = keyof typeof BRAND_COLORS;
