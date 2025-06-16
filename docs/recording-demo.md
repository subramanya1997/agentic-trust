# Recording BridgeDemo Animation

This guide explains how to record the BridgeDemo component animation as a GIF or video.

## Prerequisites

- Node.js and npm installed
- The development server running (`npm run dev`)

## Method 1: Using the Automated Script (Recommended)

We've created Puppeteer scripts that automatically capture the animation:

### Option A: Standard Capture (30fps)

1. **Make sure the dev server is running:**
   ```bash
   npm run dev
   ```

2. **In a new terminal, run the capture script:**
   ```bash
   npm run capture-demo
   ```

3. **Output files will be in the `demo-output` directory:**
   - `bridge-demo.gif` - The animated GIF (30fps, ~3-4MB)
   - `frame-*.png` - Individual frames

### Option B: Preset Capture (Different Frame Rates)

Use presets for different quality/size trade-offs:

```bash
# Fast capture - 10fps, smaller file (~1MB)
npm run capture-demo-preset fast

# Smooth animation - 30fps, medium file (~3-4MB) [default]
npm run capture-demo-preset smooth

# Ultra smooth - 60fps, larger file (~6-8MB)
npm run capture-demo-preset ultra

# Preview quality - 15fps, balanced (~2MB)
npm run capture-demo-preset preview
```

### Customizing Frame Rate

Edit `scripts/capture-demo.js` and modify the CONFIG object:

```javascript
const CONFIG = {
  fps: 30,  // Change this to 10, 15, 20, 30, or 60
  // ... other settings
};
```

Higher frame rates = smoother animation but larger file sizes:
- 10fps: ~1MB (choppy but small)
- 15fps: ~2MB (decent for previews)
- 30fps: ~3-4MB (smooth, recommended)
- 60fps: ~6-8MB (very smooth, large)

## Method 2: Manual Screen Recording

1. **Visit the demo page:**
   ```
   http://localhost:3000/demo-preview
   ```

2. **Use a screen recording tool:**

   **Mac:**
   - [Kap](https://getkap.co/) - Free, excellent for GIFs
   - [Gifox](https://gifox.app/) - Paid, professional quality
   - QuickTime Player - Built-in, can record screen

   **Windows:**
   - [ScreenToGif](https://www.screentogif.com/) - Free
   - [ShareX](https://getsharex.com/) - Free, powerful
   - Windows Game Bar (Win+G) - Built-in

   **Cross-platform:**
   - [OBS Studio](https://obsproject.com/) - Free, professional
   - Chrome DevTools Recorder - Built into Chrome

3. **Recording tips:**
   - Set your browser to 100% zoom
   - Hide browser toolbars for a cleaner look
   - Record at least one full animation cycle (about 12-15 seconds)
   - For GIFs, keep the dimensions reasonable (1200x600 or smaller)

## Converting to Video

Convert PNG frames to MP4 video (requires ffmpeg):

```bash
# For 30fps capture
ffmpeg -framerate 30 -i demo-output/frame-%04d.png -c:v libx264 -pix_fmt yuv420p demo-output/bridge-demo.mp4

# For other frame rates, adjust the -framerate parameter
```

## Customizing the Animation

The demo page (`/demo-preview`) can be modified to show different configurations by editing `src/app/demo-preview/page.tsx`.

## Tips for Best Quality

- **For GIFs:** 
  - 30fps provides smooth animation
  - Keep file size under 10MB for web use
  - Use 15-20fps for smaller files
- **For Videos:** 
  - Use H.264 codec for best compatibility
  - 30fps or 60fps for smooth playback
- **Resolution:** 1200x600 works well for most use cases

## File Size Guide

Approximate file sizes for 12.6 seconds of animation:
- 10fps: ~1MB
- 15fps: ~1.5-2MB  
- 20fps: ~2.5MB
- 30fps: ~3-4MB
- 60fps: ~6-8MB

## Troubleshooting

If the automated script fails:
1. Make sure all dependencies are installed: `npm install`
2. Ensure the dev server is running on port 3000
3. Check that the `scripts` directory exists
4. Try running with `DEBUG=puppeteer:* npm run capture-demo` for more info 