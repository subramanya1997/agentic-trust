/**
 * Reusable components for OpenGraph image generation
 */

import { OG_CONFIG } from './config';

interface OGContainerProps {
  children: React.ReactNode;
}

export function OGContainer({ children }: OGContainerProps) {
  return (
    <div
      style={{
        background: `linear-gradient(to br, ${OG_CONFIG.colors.gradientFrom} 0%, ${OG_CONFIG.colors.gradientTo} 100%)`,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: OG_CONFIG.spacing.contentGap,
        }}
      >
        {children}
      </div>
    </div>
  );
}

interface OGLogoProps {
  size?: number;
}

export function OGLogo({ size = 80 }: OGLogoProps) {
  const { logoSvg, colors, spacing } = OG_CONFIG;
  
  return (
    <div
      style={{
        background: colors.brandLight,
        borderRadius: spacing.logoContainer.borderRadius,
        padding: spacing.logoContainer.padding,
        border: `1px solid ${colors.brandBorder}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox={logoSvg.viewBox}
        fill="none"
        stroke={colors.brand}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {logoSvg.paths.map((d, i) => (
          <path key={`path-${i}`} d={d} />
        ))}
        {logoSvg.rects.map((rect, i) => (
          <rect key={`rect-${i}`} {...rect} />
        ))}
      </svg>
    </div>
  );
}

interface OGTitleProps {
  children: React.ReactNode;
  size?: 'large' | 'medium';
}

export function OGTitle({ children, size = 'medium' }: OGTitleProps) {
  const fontSize = size === 'large' 
    ? OG_CONFIG.typography.titleLarge 
    : OG_CONFIG.typography.titleMedium;
    
  return (
    <div
      style={{
        fontSize,
        fontWeight: OG_CONFIG.typography.fontWeightBold,
        color: OG_CONFIG.colors.textPrimary,
        textAlign: 'center',
        letterSpacing: OG_CONFIG.typography.letterSpacing,
      }}
    >
      {children}
    </div>
  );
}

interface OGSubtitleProps {
  children: React.ReactNode;
  maxWidth?: number;
  size?: 'normal' | 'small';
}

export function OGSubtitle({ children, maxWidth, size = 'normal' }: OGSubtitleProps) {
  const fontSize = size === 'normal' 
    ? OG_CONFIG.typography.subtitle 
    : OG_CONFIG.typography.subtitleSmall;
    
  const defaultMaxWidth = size === 'normal'
    ? OG_CONFIG.maxWidths.subtitleLarge
    : OG_CONFIG.maxWidths.subtitleSmall;
    
  return (
    <div
      style={{
        fontSize,
        color: OG_CONFIG.colors.textSecondary,
        textAlign: 'center',
        fontWeight: OG_CONFIG.typography.fontWeightNormal,
        maxWidth: maxWidth || defaultMaxWidth,
        lineHeight: OG_CONFIG.typography.lineHeight,
      }}
    >
      {children}
    </div>
  );
}

interface OGBadgeProps {
  children: React.ReactNode;
}

export function OGBadge({ children }: OGBadgeProps) {
  return (
    <div
      style={{
        background: OG_CONFIG.colors.brandBadgeBg,
        border: `1px solid ${OG_CONFIG.colors.brandBadgeBorder}`,
        borderRadius: OG_CONFIG.spacing.badgeBorderRadius,
        padding: OG_CONFIG.spacing.badgePadding,
        fontSize: OG_CONFIG.typography.badge,
        color: OG_CONFIG.colors.brand,
        fontWeight: OG_CONFIG.typography.fontWeightMedium,
      }}
    >
      {children}
    </div>
  );
}

interface OGAuthorProps {
  name: string;
  category?: string;
  date?: string;
}

export function OGAuthor({ name, category, date }: OGAuthorProps) {
  const parts = [name, category, date].filter(Boolean);
  
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        fontSize: 18,
        color: OG_CONFIG.colors.textSecondary,
      }}
    >
      {parts.map((part, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {i > 0 && <span>•</span>}
          <span>{part}</span>
        </div>
      ))}
    </div>
  );
}

