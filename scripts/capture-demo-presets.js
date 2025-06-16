const puppeteer = require('puppeteer');
const GIFEncoder = require('gifencoder');
const PNG = require('pngjs').PNG;
const fs = require('fs');
const path = require('path');

// Get preset from command line argument
const preset = process.argv[2] || 'smooth';

// Preset configurations
const PRESETS = {
  'fast': {
    fps: 10,
    gifQuality: 20,
    description: 'Fast capture, smaller file size (~1MB)'
  },
  'smooth': {
    fps: 30,
    gifQuality: 10,
    description: 'Smooth animation, medium file size (~3-4MB)'
  },
  'ultra': {
    fps: 60,
    gifQuality: 5,
    description: 'Ultra smooth, larger file size (~6-8MB)'
  },
  'preview': {
    fps: 15,
    gifQuality: 15,
    description: 'Good balance for previews (~2MB)'
  }
};

if (!PRESETS[preset]) {
  console.error(`Invalid preset: ${preset}`);
  console.log('Available presets:');
  Object.entries(PRESETS).forEach(([name, config]) => {
    console.log(`  - ${name}: ${config.description}`);
  });
  process.exit(1);
}

// Configuration
const CONFIG = {
  ...PRESETS[preset],
  numberOfCycles: 3,
  animationCycleDuration: 4.2,
  width: 1200,
  height: 600,
  deviceScaleFactor: 2,
};

// Helper function for delays
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function captureDemo() {
  console.log(`\n📹 Using preset: ${preset}`);
  console.log(`   ${PRESETS[preset].description}\n`);
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  await page.setViewport({
    width: CONFIG.width,
    height: CONFIG.height,
    deviceScaleFactor: CONFIG.deviceScaleFactor,
  });
  
  await page.goto('http://localhost:3000/demo-preview', {
    waitUntil: 'networkidle0'
  });
  
  await delay(1000);
  
  const outputDir = path.join(__dirname, '../demo-output');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  const fps = CONFIG.fps;
  const frameDelay = Math.floor(1000 / fps);
  const totalDuration = CONFIG.animationCycleDuration * CONFIG.numberOfCycles;
  const frameCount = Math.floor(totalDuration * fps);
  
  console.log(`🎬 Capture settings:`);
  console.log(`   - Frame rate: ${fps}fps`);
  console.log(`   - Total duration: ${totalDuration}s`);
  console.log(`   - Total frames: ${frameCount}`);
  console.log('');
  
  const frames = [];
  
  console.log(`Capturing ${frameCount} frames at ${fps}fps...`);
  const startTime = Date.now();
  
  for (let i = 0; i < frameCount; i++) {
    const screenshot = await page.screenshot({
      type: 'png',
      omitBackground: false,
    });
    frames.push(screenshot);
    await delay(frameDelay);
    
    if (i % fps === 0) { // Update progress every second
      const elapsed = (Date.now() - startTime) / 1000;
      const eta = (elapsed / (i + 1)) * (frameCount - i - 1);
      console.log(`Frame ${i + 1}/${frameCount} (${Math.round((i/frameCount)*100)}%) - ETA: ${Math.round(eta)}s`);
    }
  }
  
  console.log('\nCreating GIF...');
  
  const encoder = new GIFEncoder(CONFIG.width, CONFIG.height);
  const outputFile = path.join(outputDir, `bridge-demo-${preset}.gif`);
  const stream = fs.createWriteStream(outputFile);
  encoder.createReadStream().pipe(stream);
  
  encoder.start();
  encoder.setRepeat(0);
  encoder.setDelay(frameDelay);
  encoder.setQuality(CONFIG.gifQuality);
  
  console.log('Encoding frames...');
  for (let i = 0; i < frames.length; i++) {
    const png = PNG.sync.read(frames[i]);
    encoder.addFrame(png.data);
    
    if (i % fps === 0) {
      console.log(`Encoded ${i + 1}/${frames.length} (${Math.round((i/frames.length)*100)}%)`);
    }
  }
  
  encoder.finish();
  
  // Wait for the write stream to finish
  await new Promise((resolve, reject) => {
    stream.on('finish', resolve);
    stream.on('error', reject);
  });
  
  // Check file size
  const stats = fs.statSync(outputFile);
  const fileSizeMB = (stats.size / 1024 / 1024).toFixed(2);
  
  console.log(`\n✅ GIF created successfully!`);
  console.log(`   - File: demo-output/bridge-demo-${preset}.gif`);
  console.log(`   - Size: ${fileSizeMB}MB`);
  console.log(`   - Frame rate: ${fps}fps`);
  console.log(`   - Quality: ${CONFIG.gifQuality}`);
  
  // Also save as video frames for potential video creation
  console.log('\nSaving individual frames...');
  for (let i = 0; i < frames.length; i++) {
    fs.writeFileSync(
      path.join(outputDir, `frame-${String(i).padStart(4, '0')}.png`),
      frames[i]
    );
    
    if (i % fps === 0) { // Update progress every second
      console.log(`Saved frame ${i + 1}/${frames.length} (${Math.round((i/frames.length)*100)}%)`);
    }
  }
  
  console.log(`\n✅ ${frames.length} PNG frames saved in: demo-output/`);
  console.log(`\n🎥 To create MP4 with custom settings, use:`);
  console.log(`   ffmpeg -framerate ${fps} -i demo-output/frame-%04d.png -c:v libx264 -pix_fmt yuv420p -crf 18 demo-output/bridge-demo-${preset}.mp4`);
  console.log(`\n🐌 For slower playback (half speed), use:`);
  console.log(`   ffmpeg -framerate ${fps/2} -i demo-output/frame-%04d.png -c:v libx264 -pix_fmt yuv420p -crf 18 demo-output/bridge-demo-${preset}-slow.mp4`);
  
  await browser.close();
}

// Run the capture
captureDemo().catch(console.error); 