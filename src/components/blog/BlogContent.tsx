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
      startOnLoad: false,
      theme: 'default',
      securityLevel: 'loose',
      themeVariables: {
        fontSize: '16px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        primaryColor: '#f97316',
        primaryTextColor: '#fff',
        primaryBorderColor: '#ea580c',
        lineColor: '#5c5c5c',
        secondaryColor: '#74b9ff',
        tertiaryColor: '#81ecec',
      },
      flowchart: {
        htmlLabels: true,
        nodeSpacing: 50,
        rankSpacing: 50,
        curve: 'basis',
        padding: 15,
        diagramPadding: 8,
        useMaxWidth: true,
      },
      sequence: {
        diagramMarginX: 50,
        diagramMarginY: 10,
        actorMargin: 50,
        width: 150,
        height: 65,
        boxMargin: 10,
        boxTextMargin: 5,
        noteMargin: 10,
        messageMargin: 35,
        mirrorActors: true,
        bottomMarginAdj: 1,
        useMaxWidth: true,
      },
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
            console.warn(`Skipping mermaid block ${index}: no parent or no content`);
            continue;
          }
          
          const mermaidCode = block.textContent.trim();
          const mermaidId = `mermaid-${Date.now()}-${index}`;
          
          try {
            // Create a container div
            const container = document.createElement('div');
            container.className = 'mermaid-wrapper my-8 overflow-x-auto';
            
            // Create the mermaid container div
            const mermaidContainer = document.createElement('div');
            mermaidContainer.id = mermaidId;
            mermaidContainer.className = 'mermaid-rendered flex justify-center';
            
            // Use mermaid.render to convert the diagram
            const { svg } = await mermaid.render(mermaidId, mermaidCode);
            
            // Insert the SVG
            mermaidContainer.innerHTML = svg;
            
            // Add the container to the wrapper
            container.appendChild(mermaidContainer);
            
            // Replace the pre element with our container
            pre.parentElement?.replaceChild(container, pre);
            
          } catch (error) {
            console.error(`Error rendering mermaid diagram ${index}:`, error);
            
            // Create an error message
            const errorDiv = document.createElement('div');
            errorDiv.className = 'border border-red-300 bg-red-50 p-4 rounded-md my-4';
            
            let errorMessage = 'Failed to render Mermaid diagram';
            if (error instanceof Error && error.message) {
              errorMessage += `: ${error.message}`;
              if (error.message.includes('timeline')) {
                errorMessage = 'Timeline diagrams are not supported in the current Mermaid version. Please use gantt or other diagram types.';
              }
            }
            
            errorDiv.innerHTML = `
              <p class="text-red-700 font-semibold mb-2">${errorMessage}</p>
              <details class="text-sm">
                <summary class="cursor-pointer text-red-600">Show diagram code</summary>
                <pre class="mt-2 p-2 bg-white rounded overflow-x-auto"><code class="text-xs">${mermaidCode.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
              </details>
            `;
            
            // Replace the pre element with the error message
            pre.parentElement?.replaceChild(errorDiv, pre);
          }
        }
      } catch (error) {
        console.error('Error in processMermaidDiagrams:', error);
      }
    };

    // Give React time to render the HTML content, then process
    const timeoutId = setTimeout(() => {
      processMermaidDiagrams();
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      // Clean up any mermaid state
      try {
        mermaid.mermaidAPI?.reset?.();
      } catch {
        // Ignore cleanup errors
      }
    };
  }, [htmlContent]);

  return (
    <div 
      className="prose prose-lg prose-slate max-w-none blog-content"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
} 