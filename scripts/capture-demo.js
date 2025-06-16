const puppeteer = require('puppeteer');
const GIFEncoder = require('gifencoder');
const PNG = require('pngjs').PNG;
const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  fps: 30,                    // Frames per second (10, 20, 30, or 60)
  numberOfCycles: 3,          // How many animation cycles to capture
  animationCycleDuration: 4.2, // Duration of one animation cycle in seconds
  width: 1200,                // Width of the capture
  height: 600,                // Height of the capture
  deviceScaleFactor: 2,       // 2 = retina quality
  gifQuality: 10,             // GIF quality (1-20, lower is better)
};

// Helper function for delays
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function captureDemo() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Set viewport to a good size for the demo
  await page.setViewport({
    width: CONFIG.width,
    height: CONFIG.height,
    deviceScaleFactor: CONFIG.deviceScaleFactor,
  });
  
  // Navigate to the demo page
  await page.goto('http://localhost:3000/demo-preview', {
    waitUntil: 'networkidle0'
  });
  
  // Wait for the component to be ready
  await delay(1000);
  
  // Create output directory
  const outputDir = path.join(__dirname, '../demo-output');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Calculate capture parameters
  const fps = CONFIG.fps;
  const frameDelay = Math.floor(1000 / fps);
  const totalDuration = CONFIG.animationCycleDuration * CONFIG.numberOfCycles;
  const frameCount = Math.floor(totalDuration * fps);
  
  console.log(`🎬 Starting capture with settings:`);
  console.log(`   - Frame rate: ${fps}fps`);
  console.log(`   - Total duration: ${totalDuration}s`);
  console.log(`   - Total frames: ${frameCount}`);
  console.log(`   - Resolution: ${CONFIG.width}x${CONFIG.height}`);
  console.log('');
  
  // Capture frames
  const frames = [];
  
  console.log(`Capturing ${frameCount} frames at ${fps}fps...`);
  for (let i = 0; i < frameCount; i++) {
    const screenshot = await page.screenshot({
      type: 'png',
      omitBackground: false,
    });
    frames.push(screenshot);
    await delay(frameDelay);
    
    if (i % 30 === 0) { // Update progress every second
      console.log(`Captured frame ${i + 1}/${frameCount} (${Math.round((i/frameCount)*100)}%)`);
    }
  }
  
  console.log('Creating GIF...');
  
  // Create GIF encoder
  const encoder = new GIFEncoder(CONFIG.width, CONFIG.height);
  encoder.createReadStream().pipe(
    fs.createWriteStream(path.join(outputDir, 'bridge-demo.gif'))
  );
  
  encoder.start();
  encoder.setRepeat(0); // 0 = repeat forever
  encoder.setDelay(frameDelay); // Set delay to match fps
  encoder.setQuality(CONFIG.gifQuality);
  
  // Add frames to GIF
  console.log('Encoding frames...');
  for (let i = 0; i < frames.length; i++) {
    const png = PNG.sync.read(frames[i]);
    encoder.addFrame(png.data);
    
    if (i % 30 === 0) { // Update progress every 30 frames
      console.log(`Encoded frame ${i + 1}/${frames.length} (${Math.round((i/frames.length)*100)}%)`);
    }
  }
  
  encoder.finish();
  
  console.log(`✅ GIF created at: demo-output/bridge-demo.gif`);
  console.log(`   - Frame rate: ${fps}fps`);
  console.log(`   - Total frames: ${frameCount}`);
  console.log(`   - Duration: ${totalDuration}s`);
  
  // Also save as video frames for potential video creation
  console.log('Saving individual frames...');
  for (let i = 0; i < frames.length; i++) {
    fs.writeFileSync(
      path.join(outputDir, `frame-${String(i).padStart(4, '0')}.png`),
      frames[i]
    );
  }
  
  console.log('Frames saved in: demo-output/');
  console.log(`You can convert to MP4 using: ffmpeg -framerate ${fps} -i demo-output/frame-%04d.png -c:v libx264 -pix_fmt yuv420p demo-output/bridge-demo.mp4`);
  
  await browser.close();
}

// Run the capture
captureDemo().catch(console.error); 