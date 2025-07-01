const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// LinkedIn cover dimensions (using higher resolution for better quality)
const WIDTH = 1584;
const HEIGHT = 396;

// Brand colors
const BRAND_ORANGE = '#f97316';
const TEXT_COLOR = '#1a1a1a';
const TAGLINE_COLOR = '#6b7280';

async function generateLinkedInCover() {
  try {
    const outputDir = path.join(__dirname, '../public/social');
    
    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Create main SVG for the cover - Updated with horizontal layout
    const coverSvg = `
    <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <!-- Clean white background -->
      <rect width="${WIDTH}" height="${HEIGHT}" fill="white"/>
      
      <!-- Content centered horizontally -->
      <g transform="translate(${WIDTH/2}, ${HEIGHT/2})">
        <!-- Logo positioned to the left -->
        <g transform="translate(-180, -5)">
          <g transform="translate(0, 0) scale(2.5)">
            <g transform="translate(-12, -12)">
              <path d="M10 18H5a3 3 0 0 1-3-3v-1" 
                    fill="none" stroke="${BRAND_ORANGE}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" 
                    fill="none" stroke="${BRAND_ORANGE}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M20 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" 
                    fill="none" stroke="${BRAND_ORANGE}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="m7 21 3-3-3-3" 
                    fill="none" stroke="${BRAND_ORANGE}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <rect x="14" y="14" width="8" height="8" rx="2" 
                    fill="none" stroke="${BRAND_ORANGE}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <rect x="2" y="2" width="8" height="8" rx="2" 
                    fill="none" stroke="${BRAND_ORANGE}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </g>
        </g>
        
        <!-- Text aligned to the right of logo -->
        <g transform="translate(-80, 0)">
          <text x="0" y="-8" text-anchor="start" 
                font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
                font-size="42" font-weight="600" fill="${TEXT_COLOR}">
            Agentic Trust
          </text>
          
          <text x="0" y="22" text-anchor="start" 
                font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
                font-size="18" font-weight="400" fill="${TAGLINE_COLOR}">
            Securing AI Agents with Enterprise-Grade MCP Protection
          </text>
        </g>
      </g>
    </svg>`;

    // Generate the main cover
    await sharp(Buffer.from(coverSvg))
      .png()
      .toFile(path.join(outputDir, 'linkedin-cover.png'));

    console.log('✅ Generated linkedin-cover.png');

    // Generate a version with right-aligned content (horizontal layout)
    const coverSvgRight = `
    <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <!-- Clean white background -->
      <rect width="${WIDTH}" height="${HEIGHT}" fill="white"/>
      
      <!-- Content right-aligned with horizontal layout -->
      <g transform="translate(${WIDTH - 200}, ${HEIGHT/2})">
        <!-- Logo on the left of text -->
        <g transform="translate(-240, -5)">
          <g transform="translate(0, 0) scale(2.5)">
            <g transform="translate(-12, -12)">
              <path d="M10 18H5a3 3 0 0 1-3-3v-1" 
                    fill="none" stroke="${BRAND_ORANGE}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" 
                    fill="none" stroke="${BRAND_ORANGE}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M20 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" 
                    fill="none" stroke="${BRAND_ORANGE}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="m7 21 3-3-3-3" 
                    fill="none" stroke="${BRAND_ORANGE}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <rect x="14" y="14" width="8" height="8" rx="2" 
                    fill="none" stroke="${BRAND_ORANGE}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <rect x="2" y="2" width="8" height="8" rx="2" 
                    fill="none" stroke="${BRAND_ORANGE}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </g>
        </g>
        
        <!-- Text on the right -->
        <g transform="translate(-140, 0)">
          <text x="0" y="-8" text-anchor="start" 
                font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
                font-size="40" font-weight="600" fill="${TEXT_COLOR}">
            Agentic Trust
          </text>
          
          <text x="0" y="20" text-anchor="start" 
                font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
                font-size="16" font-weight="400" fill="${TAGLINE_COLOR}">
            Enterprise MCP Security Platform
          </text>
        </g>
      </g>
      
      <!-- Subtle accent line at bottom -->
      <rect x="0" y="${HEIGHT - 2}" width="${WIDTH}" height="2" fill="${BRAND_ORANGE}" opacity="0.15"/>
    </svg>`;

    // Generate right-aligned version
    await sharp(Buffer.from(coverSvgRight))
      .png()
      .toFile(path.join(outputDir, 'linkedin-cover-right.png'));

    console.log('✅ Generated linkedin-cover-right.png');

    // Generate a minimalist version with horizontal layout
    const coverSvgMinimal = `
    <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <!-- Clean white background -->
      <rect width="${WIDTH}" height="${HEIGHT}" fill="#fafafa"/>
      
      <!-- Content centered horizontally -->
      <g transform="translate(${WIDTH/2}, ${HEIGHT/2})">
        <!-- Logo on the left -->
        <g transform="translate(-160, -5)">
          <g transform="translate(0, 0) scale(2.5)">
            <g transform="translate(-12, -12)">
              <path d="M10 18H5a3 3 0 0 1-3-3v-1" 
                    fill="none" stroke="${BRAND_ORANGE}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" 
                    fill="none" stroke="${BRAND_ORANGE}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M20 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" 
                    fill="none" stroke="${BRAND_ORANGE}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="m7 21 3-3-3-3" 
                    fill="none" stroke="${BRAND_ORANGE}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <rect x="14" y="14" width="8" height="8" rx="2" 
                    fill="none" stroke="${BRAND_ORANGE}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <rect x="2" y="2" width="8" height="8" rx="2" 
                    fill="none" stroke="${BRAND_ORANGE}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </g>
        </g>
        
        <!-- Vertical separator line -->
        <line x1="-70" y1="-30" x2="-70" y2="30" stroke="${BRAND_ORANGE}" stroke-width="1" opacity="0.3"/>
        
        <!-- Text on the right -->
        <g transform="translate(-40, 0)">
          <text x="0" y="-8" text-anchor="start" 
                font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
                font-size="40" font-weight="600" fill="${TEXT_COLOR}" letter-spacing="-0.5">
            Agentic Trust
          </text>
          
          <text x="0" y="20" text-anchor="start" 
                font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
                font-size="16" font-weight="400" fill="${TAGLINE_COLOR}" letter-spacing="0.5">
            AI AGENT SECURITY PLATFORM
          </text>
        </g>
      </g>
    </svg>`;

    // Generate minimalist version
    await sharp(Buffer.from(coverSvgMinimal))
      .png()
      .toFile(path.join(outputDir, 'linkedin-cover-minimal.png'));

    console.log('✅ Generated linkedin-cover-minimal.png');

    // Also generate smaller versions for other social platforms
    // Twitter header (1500x500)
    const twitterCover = coverSvgMinimal.replace(`width="${WIDTH}" height="${HEIGHT}"`, `width="1500" height="500"`)
                                       .replace(`translate(${WIDTH/2}, ${HEIGHT/2})`, `translate(750, 250)`)
                                       .replace('translate(-160, -5)', 'translate(-160, -5)')
                                       .replace('translate(-70', 'translate(-70')
                                       .replace('translate(-40, 0)', 'translate(-40, 0)');
    
    await sharp(Buffer.from(twitterCover))
      .png()
      .toFile(path.join(outputDir, 'twitter-header.png'));

    console.log('✅ Generated twitter-header.png');

    // Facebook cover (820x312)
    const fbCover = coverSvgMinimal.replace(`width="${WIDTH}" height="${HEIGHT}"`, `width="820" height="312"`)
                                   .replace(`translate(${WIDTH/2}, ${HEIGHT/2})`, `translate(410, 156)`)
                                   .replace('font-size="40"', 'font-size="32"')
                                   .replace('font-size="16"', 'font-size="13"')
                                   .replace('translate(-160, -5)', 'translate(-120, -3)')
                                   .replace('x1="-70"', 'x1="-60"')
                                   .replace('x2="-70"', 'x2="-60"')
                                   .replace('translate(-40, 0)', 'translate(-30, 0)')
                                   .replace('scale(2.5)', 'scale(2.0)');
    
    await sharp(Buffer.from(fbCover))
      .png()
      .toFile(path.join(outputDir, 'facebook-cover.png'));

    console.log('✅ Generated facebook-cover.png');

    // Generate center-aligned horizontal version (like professional but centered)
    const coverSvgCenterHorizontal = `
    <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <!-- Clean white background -->
      <rect width="${WIDTH}" height="${HEIGHT}" fill="#ffffff"/>
      
      <!-- Content centered horizontally -->
      <g transform="translate(${WIDTH/2}, ${HEIGHT/2})">
        <!-- Logo positioned to the left of text -->
        <g transform="translate(-140, -5)">
          <g transform="translate(0, 0) scale(2.08)">
            <g transform="translate(-12, -12)">
              <path d="M10 18H5a3 3 0 0 1-3-3v-1" 
                    fill="none" stroke="${BRAND_ORANGE}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" 
                    fill="none" stroke="${BRAND_ORANGE}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M20 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" 
                    fill="none" stroke="${BRAND_ORANGE}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="m7 21 3-3-3-3" 
                    fill="none" stroke="${BRAND_ORANGE}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <rect x="14" y="14" width="8" height="8" rx="2" 
                    fill="none" stroke="${BRAND_ORANGE}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <rect x="2" y="2" width="8" height="8" rx="2" 
                    fill="none" stroke="${BRAND_ORANGE}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </g>
        </g>
        
        <!-- Text aligned to the right of logo -->
        <g transform="translate(-50, 0)">
          <text x="0" y="-5" text-anchor="start" 
                font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
                font-size="36" font-weight="600" fill="${TEXT_COLOR}">
            Agentic Trust
          </text>
          
          <text x="0" y="25" text-anchor="start" 
                font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
                font-size="16" font-weight="400" fill="${TAGLINE_COLOR}">
            Enterprise-Grade AI Agent Security
          </text>
        </g>
      </g>
    </svg>`;

    // Generate center horizontal version
    await sharp(Buffer.from(coverSvgCenterHorizontal))
      .png()
      .toFile(path.join(outputDir, 'linkedin-cover-center-horizontal.png'));

    console.log('✅ Generated linkedin-cover-center-horizontal.png');

    // Generate professional gradient version
    const coverSvgProfessional = `
    <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <!-- Subtle gradient background -->
      <defs>
        <linearGradient id="bgGradientPro" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#fffbf5;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#ffffff;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bgGradientPro)"/>
      
      <!-- Content positioned with golden ratio -->
      <g transform="translate(${WIDTH * 0.618}, ${HEIGHT/2})">
        <!-- Logo icon only -->
        <g transform="translate(-25, -35)">
          <g transform="translate(0, 0) scale(2.08)">
            <g transform="translate(-12, -12)">
              <path d="M10 18H5a3 3 0 0 1-3-3v-1" 
                    fill="none" stroke="${BRAND_ORANGE}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" 
                    fill="none" stroke="${BRAND_ORANGE}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M20 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" 
                    fill="none" stroke="${BRAND_ORANGE}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="m7 21 3-3-3-3" 
                    fill="none" stroke="${BRAND_ORANGE}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <rect x="14" y="14" width="8" height="8" rx="2" 
                    fill="none" stroke="${BRAND_ORANGE}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <rect x="2" y="2" width="8" height="8" rx="2" 
                    fill="none" stroke="${BRAND_ORANGE}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </g>
        </g>
        
        <!-- Text aligned right of logo -->
        <g transform="translate(30, 0)">
          <text x="0" y="-5" text-anchor="start" 
                font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
                font-size="36" font-weight="600" fill="${TEXT_COLOR}">
            Agentic Trust
          </text>
          
          <text x="0" y="25" text-anchor="start" 
                font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
                font-size="16" font-weight="400" fill="${TAGLINE_COLOR}">
            Enterprise-Grade AI Agent Security
          </text>
        </g>
      </g>
      
      <!-- Very subtle accent -->
      <rect x="0" y="${HEIGHT - 3}" width="${WIDTH}" height="3" fill="${BRAND_ORANGE}" opacity="0.1"/>
    </svg>`;

    // Generate professional version
    await sharp(Buffer.from(coverSvgProfessional))
      .png()
      .toFile(path.join(outputDir, 'linkedin-cover-professional.png'));

    console.log('✅ Generated linkedin-cover-professional.png');

    console.log('\n🎉 All social media covers generated successfully!');
    console.log('\nGenerated files:');
    console.log('- linkedin-cover.png (centered horizontal layout)');
    console.log('- linkedin-cover-right.png (right-aligned horizontal layout)');
    console.log('- linkedin-cover-minimal.png (minimal horizontal layout)');
    console.log('- linkedin-cover-center-horizontal.png (clean centered design)');
    console.log('- linkedin-cover-professional.png (professional golden ratio layout)');
    console.log('- twitter-header.png');
    console.log('- facebook-cover.png');

  } catch (error) {
    console.error('❌ Error generating covers:', error);
    process.exit(1);
  }
}

generateLinkedInCover(); 