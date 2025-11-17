/**
 * Template generators for OpenGraph images
 */

import { ImageResponse } from 'next/og';
import { OG_CONFIG } from './config';
import { OGContainer, OGLogo, OGTitle, OGSubtitle, OGBadge, OGAuthor } from './components';

interface GenericOGProps {
  title: string;
  subtitle: string;
}

export function generateGenericOG({ title, subtitle }: GenericOGProps) {
  return (
    <OGContainer>
      <OGLogo />
      <OGTitle size="large">{title}</OGTitle>
      <OGSubtitle>{subtitle}</OGSubtitle>
    </OGContainer>
  );
}

interface PageOGProps {
  title: string;
  subtitle: string;
}

export function generatePageOG({ title, subtitle }: PageOGProps) {
  return (
    <OGContainer>
      <OGLogo />
      <OGTitle size="medium">{title}</OGTitle>
      <OGSubtitle size="small">{subtitle}</OGSubtitle>
    </OGContainer>
  );
}

interface BlogOGProps {
  title: string;
  subtitle: string;
}

export function generateBlogOG({ title, subtitle }: BlogOGProps) {
  return (
    <OGContainer>
      <OGLogo />
      <OGTitle size="medium">{title}</OGTitle>
      <OGSubtitle size="small">{subtitle}</OGSubtitle>
    </OGContainer>
  );
}

interface BlogPostOGProps {
  title: string;
  author?: string;
  category?: string;
  date?: string;
}

export function generateBlogPostOG({ title, author, category, date }: BlogPostOGProps) {
  return (
    <OGContainer>
      <OGLogo size={60} />
      <OGTitle size="medium">{title}</OGTitle>
      {(author || category || date) && (
        <OGAuthor name={author || ''} category={category} date={date} />
      )}
    </OGContainer>
  );
}

interface DemoOGProps {
  title: string;
  subtitle: string;
  badge?: string;
}

export function generateDemoOG({ title, subtitle, badge }: DemoOGProps) {
  return (
    <OGContainer>
      <OGLogo />
      <OGTitle size="medium">{title}</OGTitle>
      <OGSubtitle size="small">{subtitle}</OGSubtitle>
      {badge && <OGBadge>{badge}</OGBadge>}
    </OGContainer>
  );
}

// Helper to create ImageResponse with consistent config
export async function createOGImageResponse(element: React.ReactElement, fonts?: any[]) {
  return new ImageResponse(element, {
    ...OG_CONFIG.sizes.og,
    fonts,
  });
}

