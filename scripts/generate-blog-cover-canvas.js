const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

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

// Helper function to wrap text into multiple lines
function wrapText(ctx, text, maxWidth) {
  const words = text.split(' ');
  const lines = [];
  let currentLine = '';

  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    const metrics = ctx.measureText(testLine);
    
    if (metrics.width > maxWidth && currentLine) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  }
  
  if (currentLine) {
    lines.push(currentLine);
  }
  
  return lines;
}

// Helper function to generate background pattern based on blog category
function drawBackgroundPattern(ctx, width, height, category) {
  ctx.save();
  ctx.globalAlpha = 0.05;
  ctx.strokeStyle = '#f97316';
  ctx.fillStyle = '#f97316';
  ctx.lineWidth = 2;
  
  const patterns = {
    'Security': () => {
      // Shield pattern for security posts
      for (let i = 0; i < 5; i++) {
        const x = 200 + i * 200;
        const y = 150 + (i % 2) * 100;
        drawShield(ctx, x, y, 60);
      }
    },
    'Standards': () => {
      // Document/specification pattern for standards posts
      for (let i = 0; i < 6; i++) {
        const x = 150 + (i % 3) * 200;
        const y = 150 + Math.floor(i / 3) * 150;
        drawDocument(ctx, x, y, 50, 70);
      }
    },
    'Engineering': () => {
      // Gear pattern for engineering posts
      for (let i = 0; i < 4; i++) {
        const x = 250 + (i % 2) * 300;
        const y = 200 + Math.floor(i / 2) * 200;
        drawGear(ctx, x, y, 50);
      }
    },
    'Product': () => {
      // Box/package pattern for product posts
      for (let i = 0; i < 5; i++) {
        const x = 200 + i * 180;
        const y = 180 + (i % 2) * 80;
        drawBox(ctx, x, y, 60);
      }
    },
    'Company': () => {
      // Building pattern for company posts
      for (let i = 0; i < 4; i++) {
        const x = 200 + i * 200;
        const y = 250;
        drawBuilding(ctx, x, y, 80, 120);
      }
    },
    'default': () => {
      // Generic network pattern
      drawNetworkPattern(ctx, width, height);
    }
  };
  
  const drawPattern = patterns[category] || patterns.default;
  drawPattern();
  
  ctx.restore();
}

// Pattern drawing functions
function drawShield(ctx, x, y, size) {
  ctx.beginPath();
  ctx.moveTo(x, y - size/2);
  ctx.lineTo(x + size/2, y - size/3);
  ctx.lineTo(x + size/2, y + size/3);
  ctx.quadraticCurveTo(x + size/2, y + size/2, x, y + size * 0.7);
  ctx.quadraticCurveTo(x - size/2, y + size/2, x - size/2, y + size/3);
  ctx.lineTo(x - size/2, y - size/3);
  ctx.closePath();
  ctx.fill();
}

function drawDocument(ctx, x, y, w, h) {
  ctx.fillRect(x - w/2, y - h/2, w, h);
  // Lines representing text
  ctx.fillRect(x - w/3, y - h/3, w * 0.6, 2);
  ctx.fillRect(x - w/3, y - h/6, w * 0.6, 2);
  ctx.fillRect(x - w/3, y, w * 0.6, 2);
  ctx.fillRect(x - w/3, y + h/6, w * 0.4, 2);
}

function drawGear(ctx, x, y, radius) {
  const teeth = 8;
  const innerRadius = radius * 0.6;
  
  ctx.beginPath();
  for (let i = 0; i < teeth * 2; i++) {
    const angle = (i / (teeth * 2)) * Math.PI * 2;
    const r = i % 2 === 0 ? radius : innerRadius;
    const px = x + Math.cos(angle) * r;
    const py = y + Math.sin(angle) * r;
    if (i === 0) {
      ctx.moveTo(px, py);
    } else {
      ctx.lineTo(px, py);
    }
  }
  ctx.closePath();
  ctx.fill();
}

function drawBox(ctx, x, y, size) {
  // Front face
  ctx.fillRect(x - size/2, y - size/2, size, size);
  // Top face
  ctx.beginPath();
  ctx.moveTo(x - size/2, y - size/2);
  ctx.lineTo(x - size/3, y - size * 0.7);
  ctx.lineTo(x + size/3 + size/6, y - size * 0.7);
  ctx.lineTo(x + size/2, y - size/2);
  ctx.closePath();
  ctx.fill();
}

function drawBuilding(ctx, x, y, w, h) {
  ctx.fillRect(x - w/2, y - h, w, h);
  // Windows
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
      ctx.fillRect(x - w/3 + i * w/4, y - h + 20 + j * h/5, w/8, h/10);
    }
  }
}

function drawNetworkPattern(ctx, width, height) {
  // Draw interconnected nodes
  const nodes = [];
  for (let i = 0; i < 8; i++) {
    nodes.push({
      x: 100 + Math.random() * (width - 200),
      y: 100 + Math.random() * (height - 200)
    });
  }
  
  // Draw connections
  nodes.forEach((node, i) => {
    nodes.slice(i + 1).forEach(otherNode => {
      if (Math.random() > 0.6) {
        ctx.beginPath();
        ctx.moveTo(node.x, node.y);
        ctx.lineTo(otherNode.x, otherNode.y);
        ctx.stroke();
      }
    });
  });
  
  // Draw nodes
  nodes.forEach(node => {
    ctx.beginPath();
    ctx.arc(node.x, node.y, 20, 0, Math.PI * 2);
    ctx.fill();
  });
}

async function generateBlogCover(blogData) {
  const { title, description, authors, date, category, slug } = blogData;
  
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

  // Draw category-specific background pattern
  drawBackgroundPattern(ctx, width, height, category);

  // Left padding
  const padding = 60;
  
  // Logo size
  const logoSize = 60;

  // Draw the logo
  ctx.save();
  ctx.translate(padding, padding);
  ctx.scale(logoSize / 24, logoSize / 24);
  ctx.strokeStyle = '#f97316';
  ctx.lineWidth = 2;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  
  // Logo paths (same as before)
  ctx.beginPath();
  ctx.moveTo(10, 18);
  ctx.lineTo(5, 18);
  ctx.arc(5, 15, 3, Math.PI/2, Math.PI);
  ctx.lineTo(2, 14);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(14, 2);
  ctx.arc(16, 4, 2, Math.PI, -Math.PI/2);
  ctx.lineTo(16, 8);
  ctx.arc(14, 8, 2, 0, Math.PI/2);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(20, 2);
  ctx.arc(22, 4, 2, Math.PI, -Math.PI/2);
  ctx.lineTo(22, 8);
  ctx.arc(20, 8, 2, 0, Math.PI/2);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(7, 21);
  ctx.lineTo(10, 18);
  ctx.lineTo(7, 15);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.roundRect(14, 14, 8, 8, 2);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.roundRect(2, 2, 8, 8, 2);
  ctx.stroke();
  
  ctx.restore();

  // Brand name
  ctx.fillStyle = '#f97316';
  ctx.font = '700 48px Arial';
  ctx.fillText('Agentic Trust', padding + logoSize + 20, padding + logoSize / 2 + 12);

  // Title - wrap if too long
  ctx.fillStyle = '#ffffff';
  ctx.font = '700 48px Arial';
  const titleLines = wrapText(ctx, title, width - padding * 2);
  
  let titleY = 250;
  titleLines.forEach(line => {
    ctx.fillText(line, padding, titleY);
    titleY += 60;
  });

  // Description - wrap if too long
  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
  ctx.font = '20px Arial';
  const descLines = wrapText(ctx, description, width - padding * 2);
  
  let descY = titleY + 40;
  descLines.slice(0, 3).forEach(line => { // Limit to 3 lines
    ctx.fillText(line, padding, descY);
    descY += 30;
  });

  // Author and date
  const authorName = authors[0]?.name || 'Agentic Trust Team';
  const formattedDate = new Date(date + 'T12:00:00').toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
  ctx.font = '500 18px Arial';
  ctx.fillText(authorName, padding, height - padding);
  
  const authorWidth = ctx.measureText(authorName).width;
  ctx.font = '18px Arial';
  ctx.fillText(' • ', padding + authorWidth + 10, height - padding);
  ctx.fillText(formattedDate, padding + authorWidth + 30, height - padding);

  // Category badge
  if (category) {
    const categoryText = category.toUpperCase();
    ctx.font = '500 14px Arial';
    const categoryWidth = ctx.measureText(categoryText).width;
    
    // Draw badge background
    ctx.fillStyle = 'rgba(249, 115, 22, 0.2)';
    ctx.fillRect(width - padding - categoryWidth - 30, padding - 10, categoryWidth + 20, 30);
    
    // Draw badge text
    ctx.fillStyle = '#f97316';
    ctx.fillText(categoryText, width - padding - categoryWidth - 20, padding + 8);
  }

  // Ensure directory exists
  const outputDir = path.join(process.cwd(), 'public', 'images', 'blog');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Generate filename from slug
  const filename = `${slug}-cover.png`;
  const outputPath = path.join(outputDir, filename);
  
  // Save the image
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(outputPath, buffer);

  console.log(`Generated cover image for "${title}" at:`, outputPath);
  return `/images/blog/${filename}`;
}

async function generateAllBlogCovers() {
  const blogsDirectory = path.join(process.cwd(), 'blogs');
  const fileNames = fs.readdirSync(blogsDirectory);
  
  const blogPosts = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(blogsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      
      // Parse front matter
      const { data } = matter(fileContents);
      
      return {
        slug,
        title: data.title || slug.replace(/-/g, ' '),
        description: data.description || '',
        date: data.date || new Date().toISOString().split('T')[0],
        authors: data.authors || [{ name: 'Agentic Trust Team' }],
        category: data.category || 'General',
        coverImage: data.coverImage
      };
    });

  console.log(`Found ${blogPosts.length} blog posts. Generating cover images...`);
  
  for (const blogPost of blogPosts) {
    try {
      const generatedPath = await generateBlogCover(blogPost);
      console.log(`✓ Generated: ${generatedPath}`);
    } catch (error) {
      console.error(`✗ Failed to generate cover for "${blogPost.title}":`, error);
    }
  }
  
  console.log('\nAll blog cover images generated successfully!');
}

// Run the script
generateAllBlogCovers().catch(console.error); 