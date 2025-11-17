"use client";

import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ 
  code, 
  language = 'typescript',
  showLineNumbers = false,
  className = '' 
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split('\n');

  return (
    <div className={`relative group ${className}`}>
      <div className="absolute top-2 right-2 z-10">
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1.5 bg-gray-800 hover:bg-gray-700 text-white text-xs rounded-md transition-all duration-200 opacity-0 group-hover:opacity-100"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <div className="bg-gray-900 rounded-lg overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
          <span className="text-xs font-mono text-gray-400">{language}</span>
        </div>
        <div className="p-4 overflow-x-auto">
          <pre className="text-sm font-mono leading-relaxed">
            <code className="text-gray-100">
              {showLineNumbers ? (
                <table className="w-full">
                  <tbody>
                    {lines.map((line, index) => (
                      <tr key={index}>
                        <td className="pr-4 text-right text-gray-500 select-none w-8">
                          {index + 1}
                        </td>
                        <td className="text-gray-100">{line || '\n'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                code
              )}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

