const fs = require('fs');
const path = require('path');

// You'll need to install sharp for image conversion
// Run: npm install sharp
const sharp = require('sharp');

const logoSvg = fs.readFileSync(path.join(__dirname, '../public/logos/agentic-trust-logo.svg'));

const sizes = [
  { size: 16, suffix: '-16' },
  { size: 24, suffix: '-24' },
  { size: 32, suffix: '-32' },
  { size: 48, suffix: '-48' },
  { size: 64, suffix: '-64' },
  { size: 128, suffix: '-128' },
  { size: 256, suffix: '-256' },
  { size: 512, suffix: '-512' },
  { size: 1024, suffix: '-1024' }
];

async function convertLogo() {
  try {
    const outputDir = path.join(__dirname, '../public/logos');
    
    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    for (const { size, suffix } of sizes) {
      const baseName = `agentic-trust-logo${suffix}`;

      // Convert to PNG
      await sharp(logoSvg)
        .resize(size, size)
        .png({ quality: 100 })
        .toFile(path.join(outputDir, `${baseName}.png`));

      // Convert to JPG with white rounded background
      const roundedSize = size;
      const radius = Math.floor(size * 0.1); // 10% radius for rounded corners
      
      await sharp(logoSvg)
        .resize(size, size)
        .composite([{
          input: Buffer.from(`<svg><rect x="0" y="0" width="${roundedSize}" height="${roundedSize}" rx="${radius}" ry="${radius}" fill="white"/></svg>`),
          blend: 'dest-over'
        }])
        .flatten({ background: { r: 255, g: 255, b: 255 } })
        .jpeg({ quality: 95 })
        .toFile(path.join(outputDir, `${baseName}.jpg`));

      // Create padded branding versions (with 20% padding)
      const paddedSize = Math.floor(size * 0.6); // Logo takes 60% of canvas, 20% padding on each side
      const paddingOffset = Math.floor((size - paddedSize) / 2);
      
      // Padded PNG version
      await sharp({
        create: {
          width: size,
          height: size,
          channels: 4,
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        }
      })
      .composite([{
        input: await sharp(logoSvg).resize(paddedSize, paddedSize).png().toBuffer(),
        left: paddingOffset,
        top: paddingOffset
      }])
      .png()
      .toFile(path.join(outputDir, `${baseName}-padded.png`));

      // Padded JPG version with rounded white background
      await sharp({
        create: {
          width: size,
          height: size,
          channels: 3,
          background: { r: 255, g: 255, b: 255 }
        }
      })
      .composite([{
        input: Buffer.from(`<svg><rect x="0" y="0" width="${size}" height="${size}" rx="${radius}" ry="${radius}" fill="white"/></svg>`),
        blend: 'dest-over'
      }])
      .composite([{
        input: await sharp(logoSvg).resize(paddedSize, paddedSize).png().toBuffer(),
        left: paddingOffset,
        top: paddingOffset
      }])
      .jpeg({ quality: 95 })
      .toFile(path.join(outputDir, `${baseName}-padded.jpg`));

      // Padded WEBP version
      await sharp({
        create: {
          width: size,
          height: size,
          channels: 4,
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        }
      })
      .composite([{
        input: await sharp(logoSvg).resize(paddedSize, paddedSize).webp().toBuffer(),
        left: paddingOffset,
        top: paddingOffset
      }])
      .webp({ quality: 95 })
      .toFile(path.join(outputDir, `${baseName}-padded.webp`));

      // Convert to WEBP
      await sharp(logoSvg)
        .resize(size, size)
        .webp({ quality: 95 })
        .toFile(path.join(outputDir, `${baseName}.webp`));

      console.log(`✅ Generated ${baseName} in PNG, JPG, and WEBP formats (regular + padded versions)`);
    }

    // Also create versions without size suffix for the default 1024px version
    const defaultSize = 1024;
    const defaultRadius = Math.floor(defaultSize * 0.1);
    
    // Default PNG
    await sharp(logoSvg)
      .resize(defaultSize, defaultSize)
      .png({ quality: 100 })
      .toFile(path.join(outputDir, 'agentic-trust-logo.png'));

    // Default JPG with rounded background
    await sharp(logoSvg)
      .resize(defaultSize, defaultSize)
      .composite([{
        input: Buffer.from(`<svg><rect x="0" y="0" width="${defaultSize}" height="${defaultSize}" rx="${defaultRadius}" ry="${defaultRadius}" fill="white"/></svg>`),
        blend: 'dest-over'
      }])
      .flatten({ background: { r: 255, g: 255, b: 255 } })
      .jpeg({ quality: 95 })
      .toFile(path.join(outputDir, 'agentic-trust-logo.jpg'));

    // Default WEBP
    await sharp(logoSvg)
      .resize(defaultSize, defaultSize)
      .webp({ quality: 95 })
      .toFile(path.join(outputDir, 'agentic-trust-logo.webp'));

    // Default padded versions for branding
    const defaultPaddedSize = Math.floor(defaultSize * 0.6);
    const defaultPaddingOffset = Math.floor((defaultSize - defaultPaddedSize) / 2);
    
    // Default padded PNG
    await sharp({
      create: {
        width: defaultSize,
        height: defaultSize,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      }
    })
    .composite([{
      input: await sharp(logoSvg).resize(defaultPaddedSize, defaultPaddedSize).png().toBuffer(),
      left: defaultPaddingOffset,
      top: defaultPaddingOffset
    }])
    .png()
    .toFile(path.join(outputDir, 'agentic-trust-logo-padded.png'));

    // Default padded JPG with rounded background
    await sharp({
      create: {
        width: defaultSize,
        height: defaultSize,
        channels: 3,
        background: { r: 255, g: 255, b: 255 }
      }
    })
    .composite([{
      input: Buffer.from(`<svg><rect x="0" y="0" width="${defaultSize}" height="${defaultSize}" rx="${defaultRadius}" ry="${defaultRadius}" fill="white"/></svg>`),
      blend: 'dest-over'
    }])
    .composite([{
      input: await sharp(logoSvg).resize(defaultPaddedSize, defaultPaddedSize).png().toBuffer(),
      left: defaultPaddingOffset,
      top: defaultPaddingOffset
    }])
    .jpeg({ quality: 95 })
    .toFile(path.join(outputDir, 'agentic-trust-logo-padded.jpg'));

    // Default padded WEBP
    await sharp({
      create: {
        width: defaultSize,
        height: defaultSize,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      }
    })
    .composite([{
      input: await sharp(logoSvg).resize(defaultPaddedSize, defaultPaddedSize).webp().toBuffer(),
      left: defaultPaddingOffset,
      top: defaultPaddingOffset
    }])
    .webp({ quality: 95 })
    .toFile(path.join(outputDir, 'agentic-trust-logo-padded.webp'));

    console.log('✅ Generated default agentic-trust-logo (1024px) in PNG, JPG, and WEBP formats (regular + padded versions)');
    console.log('🎉 Logo conversion completed successfully!');

  } catch (error) {
    console.error('❌ Error converting logo:', error);
    process.exit(1);
  }
}

convertLogo(); 