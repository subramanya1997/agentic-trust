import React from 'react';
import Image from 'next/image';
import { Users, Server, ArrowRight, Check } from 'lucide-react';
import { SectionContainer } from '@/components/ui/section-container';

export const DirectoryRegistrySection = () => {
  return (
    <SectionContainer background="white" padding="lg">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-brand/10 px-4 py-2 rounded-full mb-4">
          <div className="w-2 h-2 bg-brand rounded-full" />
          <span className="text-sm font-semibold text-brand">Solution</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Control Center
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Manage all your agents and tools from a single control plane
        </p>
      </div>

      {/* Agent Directory - Horizontal Layout */}
      <div className="mb-24 lg:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-center max-w-[1600px] mx-auto">
          {/* Left: Content */}
          <div className="lg:order-1">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                <Users className="w-7 h-7 text-blue-600" aria-hidden="true" />
              </div>
              <div className="h-px w-12 bg-gray-300" />
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Agent Directory
            </h3>
            <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
              Register and manage all AI agents across your organization. Map identities, assign roles, and track agent lifecycle from creation to retirement.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-base lg:text-lg text-gray-700">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-blue-600" />
                </div>
                <span>Identity mapping to your IdP (Okta, Entra, Google)</span>
              </li>
              <li className="flex items-start gap-3 text-base lg:text-lg text-gray-700">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-blue-600" />
                </div>
                <span>Role-based access with inheritance</span>
              </li>
              <li className="flex items-start gap-3 text-base lg:text-lg text-gray-700">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-blue-600" />
                </div>
                <span>Credential rotation and revocation</span>
              </li>
              <li className="flex items-start gap-3 text-base lg:text-lg text-gray-700">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-blue-600" />
                </div>
                <span>Audit trail of all agent actions</span>
              </li>
            </ul>
          </div>

          {/* Right: Extra Large Screenshot */}
          <div className="lg:order-2">
            <div className="relative bg-white rounded-2xl border-2 border-gray-200 shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />
              <Image
                src="/images/Agent Directory.png"
                alt="Agent Directory UI showing registered agents, capabilities, and management features"
                width={1800}
                height={1350}
                className="w-full h-auto"
                priority={false}
                quality={95}
              />
            </div>
          </div>
        </div>
      </div>

      {/* MCP Registry - Horizontal Layout (Reversed) */}
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-16 items-center max-w-[1600px] mx-auto">
          {/* Left: Extra Large Screenshot */}
          <div className="lg:order-1">
            <div className="relative bg-white rounded-2xl border-2 border-gray-200 shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />
              <Image
                src="/images/MCP Registry.png"
                alt="MCP Registry UI showing available MCP servers, tools, and connection options"
                width={1800}
                height={1350}
                className="w-full h-auto"
                priority={false}
                quality={95}
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:order-2">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center">
                <Server className="w-7 h-7 text-purple-600" aria-hidden="true" />
              </div>
              <div className="h-px w-12 bg-gray-300" />
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              MCP Registry
            </h3>
            <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
              Discover, deploy, and manage MCP servers and tools. Control which agents can access which tools with fine-grained permissions.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-base lg:text-lg text-gray-700">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-purple-600" />
                </div>
                <span>Curated catalog of MCP servers</span>
              </li>
              <li className="flex items-start gap-3 text-base lg:text-lg text-gray-700">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-purple-600" />
                </div>
                <span>Custom tool registration and versioning</span>
              </li>
              <li className="flex items-start gap-3 text-base lg:text-lg text-gray-700">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-purple-600" />
                </div>
                <span>Per-tool access policies and rate limits</span>
              </li>
              <li className="flex items-start gap-3 text-base lg:text-lg text-gray-700">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-purple-600" />
                </div>
                <span>Health monitoring and usage analytics</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
