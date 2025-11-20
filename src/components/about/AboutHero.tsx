"use client";

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  opacity: number;
  baseOpacity: number;
  pulsePhase: number;
}

export function AboutHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles with brand colors
    const particleCount = 150;
    const colors = [
      { rgb: '249, 115, 22', weight: 0.4 },   // orange-500 (brand) - most prominent
      { rgb: '251, 146, 60', weight: 0.3 },   // orange-400
      { rgb: '234, 88, 12', weight: 0.2 },    // orange-600
      { rgb: '59, 130, 246', weight: 0.1 },   // blue-500 - accent
    ];

    particlesRef.current = [];
    
    for (let i = 0; i < particleCount; i++) {
      // Weighted color selection
      const rand = Math.random();
      let cumulative = 0;
      let selectedColor = colors[0].rgb;
      
      for (const color of colors) {
        cumulative += color.weight;
        if (rand <= cumulative) {
          selectedColor = color.rgb;
          break;
        }
      }

      const baseOpacity = Math.random() * 0.4 + 0.3;
      
      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 4 + 1.5,
        color: selectedColor,
        opacity: baseOpacity,
        baseOpacity: baseOpacity,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { 
        x: e.clientX - rect.left, 
        y: e.clientY - rect.top 
      };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      timeRef.current += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, i) => {
        // Calculate distance to mouse
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 250;

        // Apply force away from cursor with stronger effect
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          particle.vx -= (dx / distance) * force * 0.5;
          particle.vy -= (dy / distance) * force * 0.5;
        }

        // Add subtle wave motion
        particle.vx += Math.sin(timeRef.current + particle.pulsePhase) * 0.02;
        particle.vy += Math.cos(timeRef.current + particle.pulsePhase) * 0.02;

        // Apply friction
        particle.vx *= 0.98;
        particle.vy *= 0.98;

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Pulsing opacity
        particle.opacity = particle.baseOpacity + Math.sin(timeRef.current * 2 + particle.pulsePhase) * 0.2;

        // Draw particle with glow
        ctx.shadowBlur = 15;
        ctx.shadowColor = `rgba(${particle.color}, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particle.color}, ${particle.opacity})`;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw connections to nearby particles
        particlesRef.current.forEach((otherParticle, j) => {
          if (i >= j) return;
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const lineOpacity = (1 - distance / 150) * 0.25;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            
            // Create gradient line
            const gradient = ctx.createLinearGradient(
              particle.x, particle.y,
              otherParticle.x, otherParticle.y
            );
            gradient.addColorStop(0, `rgba(${particle.color}, ${lineOpacity})`);
            gradient.addColorStop(1, `rgba(${otherParticle.color}, ${lineOpacity})`);
            
            ctx.strokeStyle = gradient;
            ctx.globalAlpha = lineOpacity;
            ctx.lineWidth = 1.5;
            ctx.stroke();
          }
        });
      });

      ctx.globalAlpha = 1;
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Canvas Animation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Dot Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />
      
      {/* Enhanced Gradient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-brand/15 rounded-full blur-[150px] pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-orange-600/12 rounded-full blur-[140px] pointer-events-none animate-pulse" style={{ animationDuration: '5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-400/10 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '6s' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="text-center space-y-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-zinc-900 leading-[1.1] tracking-tight">
            Building the trust layer for<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-orange-600">
              MCP and AI agents.
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
            Making enterprise AI secure, compliant, and fully connected—without slowing teams down.
          </p>
        </div>
      </div>
    </section>
  );
}
