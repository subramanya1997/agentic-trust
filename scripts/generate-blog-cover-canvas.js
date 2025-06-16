const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Helper function to add slight randomness for hand-drawn effect
function drawHandDrawnLine(ctx, x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  
  // Add slight waviness to the line
  const steps = 20;
  for (let i = 1; i <= steps; i++) {
    const t = i / steps;
    const x = x1 + (x2 - x1) * t + (Math.random() - 0.5) * 1;
    const y = y1 + (y2 - y1) * t + (Math.random() - 0.5) * 1;
    ctx.lineTo(x, y);
  }
  ctx.stroke();
}

// Helper function to draw hand-drawn circle
function drawHandDrawnCircle(ctx, x, y, radius) {
  ctx.beginPath();
  const steps = 40;
  for (let i = 0; i <= steps; i++) {
    const angle = (i / steps) * Math.PI * 2;
    const r = radius + (Math.random() - 0.5) * 2;
    const px = x + Math.cos(angle) * r;
    const py = y + Math.sin(angle) * r;
    if (i === 0) {
      ctx.moveTo(px, py);
    } else {
      ctx.lineTo(px, py);
    }
  }
  ctx.closePath();
}

async function generateBlogCover() {
  // Create canvas
  const width = 1200;
  const height = 630;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#292524');
  gradient.addColorStop(1, '#1c1917');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Draw faint MCP architecture diagram in background
  ctx.save();
  ctx.globalAlpha = 0.05; // Very faint
  ctx.strokeStyle = '#f97316';
  ctx.fillStyle = '#f97316';
  ctx.lineWidth = 2;
  
  // Position elements
  const bgCenterX = width / 2;
  const bgTopY = 100;
  
  // AI Agent box
  ctx.fillRect(bgCenterX - 60, bgTopY, 120, 40);
  
  // MCP Protocol box
  ctx.fillRect(bgCenterX - 60, bgTopY + 80, 120, 40);
  
  // Three service boxes
  ctx.fillRect(bgCenterX - 200, bgTopY + 160, 110, 60);
  ctx.fillRect(bgCenterX - 55, bgTopY + 160, 110, 60);
  ctx.fillRect(bgCenterX + 90, bgTopY + 160, 110, 60);
  
  // Vulnerability warning at bottom
  ctx.fillRect(bgCenterX - 100, bgTopY + 280, 200, 50);
  
  // Connect with lines
  ctx.beginPath();
  // Agent to Protocol
  ctx.moveTo(bgCenterX, bgTopY + 40);
  ctx.lineTo(bgCenterX, bgTopY + 80);
  
  // Protocol to services
  ctx.moveTo(bgCenterX, bgTopY + 120);
  ctx.lineTo(bgCenterX - 145, bgTopY + 160);
  ctx.moveTo(bgCenterX, bgTopY + 120);
  ctx.lineTo(bgCenterX, bgTopY + 160);
  ctx.moveTo(bgCenterX, bgTopY + 120);
  ctx.lineTo(bgCenterX + 145, bgTopY + 160);
  
  // Services to vulnerability
  ctx.moveTo(bgCenterX - 145, bgTopY + 220);
  ctx.lineTo(bgCenterX - 50, bgTopY + 280);
  ctx.moveTo(bgCenterX, bgTopY + 220);
  ctx.lineTo(bgCenterX, bgTopY + 280);
  ctx.moveTo(bgCenterX + 145, bgTopY + 220);
  ctx.lineTo(bgCenterX + 50, bgTopY + 280);
  
  ctx.stroke();
  ctx.restore();

  // Left padding
  const padding = 60;
  
  // Logo size (increased)
  const logoSize = 60;

  // Draw the actual logo from favicon.svg (no background/border)
  ctx.save();
  ctx.translate(padding, padding);
  ctx.scale(logoSize / 24, logoSize / 24);
  ctx.strokeStyle = '#f97316';
  ctx.lineWidth = 2;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  
  // Path 1: M10 18H5a3 3 0 0 1-3-3v-1
  ctx.beginPath();
  ctx.moveTo(10, 18);
  ctx.lineTo(5, 18);
  ctx.arc(5, 15, 3, Math.PI/2, Math.PI);
  ctx.lineTo(2, 14);
  ctx.stroke();
  
  // Path 2: M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2
  ctx.beginPath();
  ctx.moveTo(14, 2);
  ctx.arc(16, 4, 2, Math.PI, -Math.PI/2);
  ctx.lineTo(16, 8);
  ctx.arc(14, 8, 2, 0, Math.PI/2);
  ctx.stroke();
  
  // Path 3: M20 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2
  ctx.beginPath();
  ctx.moveTo(20, 2);
  ctx.arc(22, 4, 2, Math.PI, -Math.PI/2);
  ctx.lineTo(22, 8);
  ctx.arc(20, 8, 2, 0, Math.PI/2);
  ctx.stroke();
  
  // Path 4: m7 21 3-3-3-3
  ctx.beginPath();
  ctx.moveTo(7, 21);
  ctx.lineTo(10, 18);
  ctx.lineTo(7, 15);
  ctx.stroke();
  
  // Rectangle 1: rect x="14" y="14" width="8" height="8" rx="2"
  ctx.beginPath();
  ctx.roundRect(14, 14, 8, 8, 2);
  ctx.stroke();
  
  // Rectangle 2: rect x="2" y="2" width="8" height="8" rx="2"
  ctx.beginPath();
  ctx.roundRect(2, 2, 8, 8, 2);
  ctx.stroke();
  
  ctx.restore();

  // Brand name (increased size and adjusted position)
  ctx.fillStyle = '#f97316';
  ctx.font = '700 48px Arial';
  ctx.fillText('Agentic Trust', padding + logoSize + 20, padding + logoSize / 2 + 12);

  // Title
  ctx.fillStyle = '#ffffff';
  ctx.font = '700 48px Arial';
  const title = 'MCP and the Lethal Trifecta: How';
  const title2 = 'Agentic Trust Secures AI Agent';
  const title3 = 'Ecosystems';
  ctx.fillText(title, padding, 250);
  ctx.fillText(title2, padding, 310);
  ctx.fillText(title3, padding, 370);

  // Description
  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
  ctx.font = '20px Arial';
  const desc1 = 'Exploring how the Model Context Protocol\'s design';
  const desc2 = 'philosophy creates security vulnerabilities and how';
  const desc3 = 'Agentic Trust provides comprehensive protection.';
  ctx.fillText(desc1, padding, 430);
  ctx.fillText(desc2, padding, 460);
  ctx.fillText(desc3, padding, 490);

  // Author and date
  ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
  ctx.font = '500 18px Arial';
  ctx.fillText('Subramanya N', padding, height - padding);
  ctx.font = '18px Arial';
  ctx.fillText(' • ', padding + 120, height - padding);
  ctx.fillText('June 16, 2025', padding + 140, height - padding);

  // Ensure directory exists
  const outputDir = path.join(process.cwd(), 'public', 'images', 'blog');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Save the image
  const buffer = canvas.toBuffer('image/png');
  const outputPath = path.join(outputDir, 'mcp-security-cover.png');
  fs.writeFileSync(outputPath, buffer);

  console.log('Blog cover image generated successfully at:', outputPath);
}

generateBlogCover().catch(console.error); 