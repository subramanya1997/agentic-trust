"use client";

import { useState, useEffect, useRef } from 'react';
import { Briefcase, Cloud, FileText, Shield, Gauge, Filter, Activity, Combine } from 'lucide-react';
import React from 'react';

// Ensure Tailwind includes these classes in the build
// border-blue-500 border-purple-500 border-green-500 border-orange-500 border-red-500
// shadow-blue-300/50 shadow-purple-300/50 shadow-green-300/50 shadow-orange-300/50 shadow-red-300/50
// bg-blue-100 bg-purple-100 bg-green-100 bg-orange-100 bg-red-100
// bg-blue-500 bg-purple-500 bg-green-500 bg-orange-500 bg-red-500
// text-blue-600 text-purple-600 text-green-600 text-orange-600 text-red-600
// text-blue-700 text-purple-700 text-green-700 text-orange-700 text-red-700

// Configuration for the bridge demo visualization
export interface AgentConfig {
  name: string;
  status: 'active' | 'idle';
  flowType: 'positive' | 'negative';
  connectsTo: number[]; // Array of MCP instance indices this agent connects to
  note?: string; // Optional note explaining the access decision
}

export interface MCPInstanceConfig {
  name: string;
  icon: React.ElementType;
  desc: string;
  color: 'blue' | 'purple' | 'green' | 'orange' | 'red';
}

export interface BridgeDemoConfig {
  agents: AgentConfig[];
  mcpInstances: MCPInstanceConfig[];
}

// Default configuration
export const defaultConfig: BridgeDemoConfig = {
  agents: [
    { name: 'Sales Agent', status: 'active', flowType: 'positive', connectsTo: [0], note: 'Authorized to access customer and product data' },
    { name: 'Support Agent', status: 'active', flowType: 'positive', connectsTo: [0, 1], note: 'Full access for customer support operations' },
    { name: 'Analytics Agent', status: 'idle', flowType: 'negative', connectsTo: [2], note: 'Blocked: Insufficient permissions for knowledge base access' }
  ],
  mcpInstances: [
    { name: 'Internal Services', icon: Briefcase, desc: 'CRM, ERP, etc.', color: 'blue' },
    { name: 'Cloud Services', icon: Cloud, desc: 'GitHub, Stripe, etc.', color: 'orange' },
    { name: 'Knowledge Base', icon: FileText, desc: 'Docs, FAQs, etc.', color: 'purple' }
  ]
};

/* Example of custom configuration:
import { Database, Server, Lock } from 'lucide-react';

const customConfig: BridgeDemoConfig = {
  agents: [
    { name: 'Customer Bot', status: 'active', flowType: 'positive', connectsTo: [0, 2] },
    { name: 'Admin Agent', status: 'active', flowType: 'positive', connectsTo: [0, 1, 2] },
    { name: 'External Bot', status: 'idle', flowType: 'negative', connectsTo: [1] }
  ],
  mcpInstances: [
    { name: 'Database', icon: Database, desc: 'PostgreSQL, Redis', color: 'blue' },
    { name: 'API Server', icon: Server, desc: 'REST, GraphQL', color: 'orange' },
    { name: 'Auth Service', icon: Lock, desc: 'OAuth, JWT', color: 'purple' }
  ]
};

// Usage: <BridgeDemo config={customConfig} />
*/

export const BridgeDemo = ({ config = defaultConfig }: { config?: BridgeDemoConfig }) => {
  const [interactingAgent, setInteractingAgent] = useState<number | null>(null);
  const [bridgeActive, setBridgeActive] = useState(false);
  const [activeInstances, setActiveInstances] = useState<number[]>([]);
  const [currentFlowStatus, setCurrentFlowStatus] = useState<'positive' | 'negative' | null>(null);

  // Refs for auto-scrolling the horizontal container
  const containerRef = useRef<HTMLDivElement | null>(null);
  const agentsColRef = useRef<HTMLDivElement | null>(null);
  const bridgeRef = useRef<HTMLDivElement | null>(null);
  const instancesColRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Reset states when config changes
    setInteractingAgent(null);
    setBridgeActive(false);
    setActiveInstances([]);
    setCurrentFlowStatus(null);
    
    const agentsCount = config.agents.length;
    let currentAgentIndex = 0;

    const sequence = async () => {
      const agentIndex = currentAgentIndex % agentsCount;
      // Early exit if agent doesn't exist
      if (!config.agents[agentIndex]) return;
      
      const agent = config.agents[agentIndex];
      
      setInteractingAgent(agentIndex);
      setCurrentFlowStatus(agent.flowType);
      await new Promise(resolve => setTimeout(resolve, 100)); // Brief pause to set agent
      
      // Check if still valid after async wait
      if (!config.agents[agentIndex]) return;
      
      // Animate line to bridge
      await new Promise(resolve => setTimeout(resolve, 700)); // Duration of line animation to bridge

      setBridgeActive(true);
      await new Promise(resolve => setTimeout(resolve, 700)); // Bridge interaction time

      if (agent.flowType === 'positive') {
        // For positive flow, connect to configured instances
        // Validate all instance indices exist
        const validInstances = agent.connectsTo.filter(i => i < config.mcpInstances.length);
        setActiveInstances(validInstances);
        await new Promise(resolve => setTimeout(resolve, 700)); // Duration of line animation from bridge
      } else {
        // For negative flow, bridge blocks the connection
        await new Promise(resolve => setTimeout(resolve, 700)); // Hold bridge "blocked" state
      }
      
      await new Promise(resolve => setTimeout(resolve, 1000)); // Display result / pause

      // Reset states for next cycle
      setInteractingAgent(null);
      setBridgeActive(false);
      setActiveInstances([]);
      setCurrentFlowStatus(null);
      await new Promise(resolve => setTimeout(resolve, 500)); // Pause before next agent
      
      currentAgentIndex++;
    };

    const intervalId = setInterval(sequence, 4200); // Total duration: 100 + 700 + 700 + 700 + 1000 + 500
    sequence(); // Start immediately
    
    return () => {
      clearInterval(intervalId);
      // Clean up states on unmount or config change
      setInteractingAgent(null);
      setBridgeActive(false);
      setActiveInstances([]);
      setCurrentFlowStatus(null);
    };
  }, [config]); // Re-run effect when config changes

  // Auto-scroll to keep active section in view on small screens
  useEffect(() => {
    let target: HTMLElement | null = null;
    if (bridgeActive && activeInstances.length === 0 && bridgeRef.current) {
      target = bridgeRef.current;
    } else if (activeInstances.length > 0 && instancesColRef.current) {
      target = instancesColRef.current;
    } else if (interactingAgent !== null && agentsColRef.current) {
      target = agentsColRef.current;
    }

    if (target && containerRef.current) {
      // Smoothly center the target column HORIZONTALLY without affecting page's vertical scroll
      const container = containerRef.current;
      const targetCenter = target.offsetLeft + target.offsetWidth / 2;
      const containerCenter = container.clientWidth / 2;
      const newScrollLeft = targetCenter - containerCenter;
      container.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    }
  }, [interactingAgent, bridgeActive, activeInstances]);

  const { agents, mcpInstances } = config;

  return (
    <div className="w-full">
      {/* Access Notes Section - Moved to top */}
      <div className="mb-3 sm:mb-4 flex justify-center px-4">
        <div className="max-w-2xl w-full text-center h-10 sm:h-12 flex items-center justify-center">
          <div className={`
            transition-all duration-300
            ${interactingAgent !== null && interactingAgent < agents.length ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
          `}>
            {interactingAgent !== null && interactingAgent < agents.length && agents[interactingAgent] && (
              <div className={`
                inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] sm:text-xs
                ${currentFlowStatus === 'positive' 
                  ? 'bg-green-100 text-green-800 border border-green-200' 
                  : 'bg-gray-100 text-gray-800 border border-gray-200'}
              `}>
                <div className={`
                  w-1.5 h-1.5 rounded-full
                  ${currentFlowStatus === 'positive' ? 'bg-green-500' : 'bg-gray-500'}
                `}></div>
                <span>
                  {agents[interactingAgent].note || 
                    (currentFlowStatus === 'positive' 
                      ? 'Authorized access granted' 
                      : 'Access denied by security policy')}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-center">
        {/* Horizontal flow container with scroll on small screens */}
        <div ref={containerRef} className="relative flex flex-row items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 px-2 overflow-x-auto scroll-snap-x mandatory md:overflow-visible py-2">
          
          <div ref={agentsColRef} className="flex flex-col items-center md:items-center min-w-max flex-shrink-0 snap-start">
            <div className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 sm:mb-3 md:mb-4 opacity-90 text-center md:text-left">AI Agents</div>
            {/* Mobile: vertical list; Desktop (md+) keeps column layout */}
            <div className="relative flex flex-col md:flex-col gap-2.5 sm:gap-3 md:gap-4 w-full">
              {agents.map((agent, index) => {
                const isActive = interactingAgent === index;
                let lineColor = 'bg-gray-300';
                let nodeColor = 'bg-gray-300';
                
                if (isActive && currentFlowStatus === 'positive') {
                  lineColor = nodeColor = 'bg-brand';
                } else if (isActive && currentFlowStatus === 'negative') {
                  lineColor = nodeColor = 'bg-gray-500';
                }
                
                return (
                  <div 
                    key={agent.name} 
                    className={`
                      relative bg-white/95 backdrop-blur-sm rounded-xl px-2.5 py-2 sm:px-3 sm:py-2.5 md:px-4 md:py-3 text-[10px] sm:text-xs md:text-sm font-medium text-gray-800 
                      flex items-center gap-1.5 sm:gap-2 w-[120px] sm:w-[150px] md:w-[180px] border-2 shadow-lg 
                      transition-all duration-300 ease-in-out flex-shrink-0 md:flex-shrink-1
                      ${interactingAgent === index && currentFlowStatus === 'positive' ? 'border-brand scale-105 shadow-brand/50' : 
                        interactingAgent === index && currentFlowStatus === 'negative' ? 'border-gray-400 scale-105 shadow-gray-300/50' : 'border-gray-200/70'}
                    `}
                  >
                    <div className={`
                      w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 rounded-full flex-shrink-0 transition-all duration-300
                      ${interactingAgent === index && currentFlowStatus === 'positive' ? 'bg-brand animate-pulse' : 
                        interactingAgent === index && currentFlowStatus === 'negative' ? 'bg-gray-500 animate-pulse' : 
                        (agent.status === 'active' ? 'bg-green-500' : 'bg-gray-400')}
                    `}></div>
                    <span>{agent.name}</span>
                    
                    {/* Connection line extending from agent card */}
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 left-full ${isActive ? '' : 'opacity-60'}`}>
                      <div className="flex items-center">
                        <div className={`w-1.5 h-1.5 rounded-full ${nodeColor} -ml-0.5`}></div>
                        <div className={`w-12 md:w-16 lg:w-20 h-0.5 ${lineColor}`}></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div ref={bridgeRef} className="relative z-10 my-4 md:my-0 min-w-max flex-shrink-0 snap-start">
            <div className={`absolute -top-5 sm:-top-6 left-1/2 -translate-x-1/2 z-10 transition-all duration-300 ${bridgeActive ? 'scale-110' : ''}`}>
              <div className={`bg-gradient-to-r text-white px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold shadow-lg whitespace-nowrap flex items-center gap-1 sm:gap-1.5 
                              ${currentFlowStatus === 'negative' && bridgeActive ? 'from-gray-600 to-gray-700' : 'from-gray-700 to-gray-800'}`}>
                <Shield className={`w-3 h-3 sm:w-3.5 sm:h-3.5 transition-colors duration-300 ${bridgeActive && currentFlowStatus === 'positive' ? 'text-brand' : 'text-white'}`} />
                Identity & Security
              </div>
            </div>
            
            <div className={`relative bg-gradient-to-br rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-xl transition-all duration-300 ease-in-out border
                            ${bridgeActive && currentFlowStatus === 'positive' ? 'from-gray-50 to-gray-100 scale-105 shadow-lg border-gray-300 ring-2 ring-brand/20' : 
                             bridgeActive && currentFlowStatus === 'negative' ? 'from-gray-100 to-gray-200 scale-100 shadow-md border-gray-400' : 'from-white to-gray-50 border-gray-200'}`}>
              <div className="text-center">
                <Combine className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-1.5 sm:mb-2 md:mb-3 transition-transform duration-300 text-brand
                                  ${bridgeActive && currentFlowStatus === 'positive' ? 'rotate-[20deg] scale-110' : 
                                   bridgeActive && currentFlowStatus === 'negative' ? 'opacity-70' : ''}`} />
                <div className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-900">AgenticTrust</div>
              </div>
              
              <div className="mt-3 sm:mt-4 md:mt-5 flex flex-col gap-1.5 sm:gap-2 md:gap-2.5">
                {[
                  { icon: Shield, label: 'Authentication' },
                  { icon: Gauge, label: 'Rate Limiting' },
                  { icon: Filter, label: 'Filtering' },
                  { icon: Activity, label: 'Traceability' }
                ].map((feature) => (
                  <div 
                    key={feature.label}
                    className={`backdrop-blur-sm rounded-md px-2 py-1.5 sm:px-3 sm:py-2 text-[10px] sm:text-xs flex items-center gap-1.5 sm:gap-2 transition-all duration-300 
                                  ${bridgeActive && currentFlowStatus === 'positive' ? 'bg-brand/10 border border-brand/20' : 
                                   bridgeActive && currentFlowStatus === 'negative' ? 'bg-gray-200/50' : 'bg-gray-100'}`}
                  >
                    {React.createElement(feature.icon, { className: `w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 transition-colors duration-300 
                                                      ${bridgeActive && currentFlowStatus === 'positive' ? 'text-brand' : 
                                                       bridgeActive && currentFlowStatus === 'negative' ? 'text-gray-500' : 'text-gray-600'}` })}
                    <span className="text-gray-700 font-medium">{feature.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div ref={instancesColRef} className="flex flex-col items-center md:items-end min-w-max flex-shrink-0 snap-start">
            <div className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 sm:mb-3 md:mb-4 opacity-90 text-center md:text-left">MCP Instances</div>
            {/* Mobile: vertical list; Desktop keeps column layout */}
            <div className="relative flex flex-col md:flex-col gap-2.5 sm:gap-3 md:gap-4 w-full">
              {mcpInstances.map((mcp, index) => {
                const isActive = activeInstances.includes(index) && bridgeActive && currentFlowStatus === 'positive';
                const isTargeted = interactingAgent !== null && 
                                 interactingAgent < agents.length && 
                                 agents[interactingAgent] && 
                                 agents[interactingAgent].connectsTo.includes(index);
                const isDenied = isTargeted && currentFlowStatus === 'negative' && bridgeActive;
                
                let lineColor = 'bg-gray-300';
                let nodeColor = 'bg-gray-300';
                
                if (isActive) {
                  lineColor = nodeColor = 'bg-brand';
                }
                
                // Determine border and shadow classes based on active state and color
                let borderClass = 'border-gray-200/70';
                let shadowClass = '';
                let iconBgClass = '';
                let iconColorClass = '';
                let descColorClass = 'text-gray-500';
                let scaleClass = '';
                
                // Set default (inactive) classes based on color
                if (mcp.color === 'blue') {
                  iconBgClass = 'bg-blue-100';
                  iconColorClass = 'text-blue-600';
                } else if (mcp.color === 'purple') {
                  iconBgClass = 'bg-purple-100';
                  iconColorClass = 'text-purple-600';
                } else if (mcp.color === 'green') {
                  iconBgClass = 'bg-green-100';
                  iconColorClass = 'text-green-600';
                } else if (mcp.color === 'orange') {
                  iconBgClass = 'bg-orange-100';
                  iconColorClass = 'text-orange-600';
                } else if (mcp.color === 'red') {
                  iconBgClass = 'bg-red-100';
                  iconColorClass = 'text-red-600';
                }
                
                // Handle targeted state (when agent is trying to connect)
                if (isTargeted && !isActive && !isDenied) {
                  // Highlight when selected but connection not yet resolved
                  borderClass = 'border-gray-400';
                  shadowClass = 'shadow-md';
                  scaleClass = 'scale-[1.02]';
                }
                
                // Handle denied state
                if (isDenied) {
                  borderClass = 'border-gray-400';
                  shadowClass = 'shadow-gray-300/50';
                  iconBgClass = 'bg-gray-100';
                  iconColorClass = 'text-gray-600';
                  descColorClass = 'text-gray-600';
                  scaleClass = 'scale-95';
                }
                
                // Handle active/successful connection state
                if (isActive) {
                  borderClass = 'border-brand';
                  shadowClass = 'shadow-lg shadow-brand/50';
                  scaleClass = 'scale-105';
                  descColorClass = 'text-brand font-medium';
                  // Keep the original icon background color but make it more vibrant
                  if (mcp.color === 'blue') {
                    iconBgClass = 'bg-blue-500';
                    iconColorClass = 'text-white';
                  } else if (mcp.color === 'purple') {
                    iconBgClass = 'bg-purple-500';
                    iconColorClass = 'text-white';
                  } else if (mcp.color === 'orange') {
                    iconBgClass = 'bg-orange-500';
                    iconColorClass = 'text-white';
                  }
                }
                
                return (
                  <div 
                    key={mcp.name} 
                    className={`
                      relative bg-white/95 backdrop-blur-sm rounded-xl border-2 px-2.5 py-2.5 sm:p-3 md:p-4 
                      shadow-lg transition-all duration-300 ease-in-out w-[120px] sm:w-[150px] md:w-[180px]
                      flex-shrink-0 md:flex-shrink-1
                      ${borderClass} ${shadowClass} ${scaleClass}
                    `}
                  >
                    {/* Connection line extending from bridge to instance */}
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 right-full ${isActive ? '' : 'opacity-60'}`}>
                      <div className="flex items-center">
                        <div className={`w-12 md:w-16 lg:w-20 h-0.5 ${lineColor}`}></div>
                        <div className={`w-1.5 h-1.5 rounded-full ${nodeColor} -mr-0.5`}></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className={`p-1.5 rounded-lg transition-colors duration-300 ${iconBgClass}`}>
                        {React.createElement(mcp.icon, { className: `w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 transition-colors duration-300 ${iconColorClass}` })}
                      </div>
                      <div>
                        <div className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-800">{mcp.name}</div>
                        <div className={`text-[8px] sm:text-[10px] transition-colors duration-300 ${descColorClass}`}>
                          {mcp.desc}
                        </div>
                      </div>
                    </div>
                    
                    {/* Denied overlay indicator */}
                    {isDenied && (
                      <div className="absolute inset-0 flex items-center justify-center rounded-xl">
                        <div className="absolute inset-0 bg-gray-50/50 rounded-xl"></div>
                        <div className="relative bg-gray-100 rounded-full p-0.5">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};