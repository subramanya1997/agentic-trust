"use client";

import { BridgeDemo } from '@/components/landing/BridgeDemo';

export default function DemoPreviewPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
      {/* Demo component */}
      <div className="w-full max-w-6xl">
        <BridgeDemo />
      </div>
    </div>
  );
} 