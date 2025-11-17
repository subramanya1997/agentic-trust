/**
 * Font loading utilities for OpenGraph image generation
 */

/**
 * Load Geist font for OG images
 * Falls back gracefully if font loading fails
 */
export async function loadGeistFont() {
  try {
    // Try to load Geist Sans from local or CDN
    // Note: In production, you might want to host these fonts locally
    const fontData = await fetch(
      new URL('../../app/fonts/GeistVF.woff', import.meta.url)
    ).then((res) => res.arrayBuffer());

    return {
      name: 'Geist',
      data: fontData,
      style: 'normal' as const,
      weight: 400 as const,
    };
  } catch (error) {
    // Font loading failed, return null to use system fonts
    console.warn('Failed to load Geist font for OG image, falling back to system fonts');
    return null;
  }
}

/**
 * Get font configuration for ImageResponse
 * Returns array of fonts or undefined if loading fails
 */
export async function getOGFonts() {
  const geistFont = await loadGeistFont();
  return geistFont ? [geistFont] : undefined;
}

