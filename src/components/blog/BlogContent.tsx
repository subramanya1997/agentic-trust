"use client";

import { useEffect } from 'react';
import mermaid from 'mermaid';

interface BlogContentProps {
  htmlContent: string;
}

export function BlogContent({ htmlContent }: BlogContentProps) {
  useEffect(() => {
    // Initialize mermaid with custom configuration
    mermaid.initialize({ 
      startOnLoad: false, // We'll manually trigger rendering
      theme: 'default',
      securityLevel: 'loose', // Allow more rendering options
      themeVariables: {
        fontSize: '16px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        edgeLabelBackground: 'transparent',
      },
      flowchart: {
        htmlLabels: true,
        nodeSpacing: 50,
        rankSpacing: 40,
        curve: 'basis',
        padding: 8,
        diagramPadding: 2,
        useMaxWidth: false,
        defaultRenderer: 'dagre-d3',
      },
      suppressErrorRendering: true,
    });

    // Process mermaid diagrams after DOM is ready
    const processMermaidDiagrams = async () => {
      try {
        // Find all code blocks with mermaid language
        const mermaidBlocks = document.querySelectorAll('pre code.hljs.language-mermaid');
        
        if (mermaidBlocks.length === 0) {
          return;
        }
        
        for (let index = 0; index < mermaidBlocks.length; index++) {
          const block = mermaidBlocks[index];
          const pre = block.parentElement as HTMLPreElement;
          
          if (!pre || !block.textContent) {
            console.error(`Skipping block ${index}: no parent or no content`);
            continue;
          }
          
          const mermaidCode = block.textContent.trim();
          
          try {
            // Create a container div
            const container = document.createElement('div');
            container.className = 'mermaid-wrapper';
            
            // Create the mermaid div
            const mermaidDiv = document.createElement('div');
            mermaidDiv.className = 'mermaid';
            mermaidDiv.textContent = mermaidCode;
            
            // Replace the pre element with our container
            container.appendChild(mermaidDiv);
            pre.parentElement?.replaceChild(container, pre);
            
            // Run mermaid on the new element
            await mermaid.run({
              querySelector: '.mermaid',
            });
            
          } catch (error) {
            console.error(`Error rendering mermaid diagram ${index}:`, error);
            // Keep the original code block on error
          }
        }
      } catch (error) {
        console.error('Error in processMermaidDiagrams:', error);
      }
    };

    // Give React time to render the HTML content, then process
    const timeoutId = setTimeout(() => {
      processMermaidDiagrams();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [htmlContent]);

  return (
    <div 
      className="prose prose-lg prose-slate max-w-none blog-content"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
} 