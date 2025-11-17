/**
 * Centralized configuration for OpenGraph image generation
 */

export const OG_CONFIG = {
  // Brand colors
  colors: {
    brand: '#f97316',
    brandLight: 'rgba(249, 115, 22, 0.1)',
    brandBorder: 'rgba(249, 115, 22, 0.2)',
    brandBadgeBg: 'rgba(249, 115, 22, 0.2)',
    brandBadgeBorder: 'rgba(249, 115, 22, 0.3)',
    white: '#ffffff',
    textPrimary: '#ffffff',
    textSecondary: 'rgba(255, 255, 255, 0.7)',
    gradientFrom: '#292524',
    gradientTo: '#1c1917',
  },

  // Typography
  typography: {
    titleLarge: 72,
    titleMedium: 56,
    subtitle: 24,
    subtitleSmall: 22,
    badge: 16,
    fontWeightBold: 600,
    fontWeightMedium: 500,
    fontWeightNormal: 400,
    letterSpacing: '-1px',
    lineHeight: 1.4,
  },

  // Dimensions
  sizes: {
    og: {
      width: 1200,
      height: 630,
    },
    icon: {
      width: 180,
      height: 180,
    },
  },

  // Spacing and styling
  spacing: {
    logoContainer: {
      borderRadius: 24,
      padding: 28,
    },
    contentGap: 40,
    badgePadding: '12px 24px',
    badgeBorderRadius: 12,
    iconBorderRadius: 36,
  },

  // Logo SVG - centralized single source of truth
  logoSvg: {
    viewBox: '0 0 24 24',
    paths: [
      'M10 18H5a3 3 0 0 1-3-3v-1',
      'M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2',
      'M20 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2',
      'm7 21 3-3-3-3',
    ],
    rects: [
      { x: 14, y: 14, width: 8, height: 8, rx: 2 },
      { x: 2, y: 2, width: 8, height: 8, rx: 2 },
    ],
  },

  // Max widths
  maxWidths: {
    subtitleLarge: 700,
    subtitleSmall: 650,
  },
} as const;

export type OGConfig = typeof OG_CONFIG;

