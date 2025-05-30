"use client";

import { useState, useEffect } from 'react';
import { Briefcase, Cloud, FileText, Shield, Gauge, Filter, Activity, Combine } from 'lucide-react';
import React from 'react';

// Ensure Tailwind includes these classes in the build
// border-blue-500 border-purple-500 border-green-500 border-orange-500 border-red-500
// shadow-blue-300/50 shadow-purple-300/50 shadow-green-300/50 shadow-orange-300/50 shadow-red-300/50
// bg-blue-100 bg-purple-100 bg-green-100 bg-orange-100 bg-red-100
// bg-blue-500 bg-purple-500 bg-green-500 bg-orange-500 bg-red-500
// text-blue-600 text-purple-600 text-green-600 text-orange-600 text-red-600
// text-blue-700 text-purple-700 text-green-700 text-orange-700 text-red-700

// Configuration for the unified context router visualization
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

export interface UnifiedContextRouterConfig {
  agents: AgentConfig[];
  mcpInstances: MCPInstanceConfig[];
}

// Default configuration
export const defaultConfig: UnifiedContextRouterConfig = {
  agents: [
    { name: 'Sales Agent', status: 'active', flowType: 'positive', connectsTo: [0], note: 'Authorized to access customer and product data' },
    { name: 'Support Agent', status: 'active', flowType: 'positive', connectsTo: [0, 1], note: 'Full access for customer support operations' },
    { name: 'Analytics Agent', status: 'idle', flowType: 'negative', connectsTo: [2], note: 'Blocked: Insufficient permissions for knowledge base access' }
  ],
  mcpInstances: [
    { name: 'Internal Services', icon: Briefcase, desc: 'CRM, ERP, etc.', color: 'blue' },
    { name: 'Cloud Services', icon: Cloud, desc: 'GitHub, Stripe, etc.', color: 'purple' },
    { name: 'Knowledge Base', icon: FileText, desc: 'Docs, FAQs, etc.', color: 'green' }
  ]
};

/* Example of custom configuration:
import { Database, Server, Lock, Bot, Globe } from 'lucide-react';

const customConfig: UnifiedContextRouterConfig = {
  agents: [
    { name: 'Customer Bot', status: 'active', flowType: 'positive', connectsTo: [0, 2] },
    { name: 'Admin Agent', status: 'active', flowType: 'positive', connectsTo: [0, 1, 2, 3] },
    { name: 'Data Processor', status: 'active', flowType: 'positive', connectsTo: [1] },
    { name: 'External Bot', status: 'idle', flowType: 'negative', connectsTo: [4] }
  ],
  mcpInstances: [
    { name: 'Database', icon: Database, desc: 'PostgreSQL, Redis', color: 'blue' },
    { name: 'API Server', icon: Server, desc: 'REST, GraphQL', color: 'green' },
    { name: 'Auth Service', icon: Lock, desc: 'OAuth, JWT', color: 'purple' },
    { name: 'AI Models', icon: Bot, desc: 'GPT, Claude', color: 'orange' },
    { name: 'External APIs', icon: Globe, desc: 'Third-party', color: 'red' }
  ]
};

// Usage: <UnifiedContextRouterPreview config={customConfig} />
*/

export const UnifiedContextRouterPreview = ({ config = defaultConfig }: { config?: UnifiedContextRouterConfig }) => {
  const [interactingAgent, setInteractingAgent] = useState<number | null>(null);
  const [bridgeActive, setBridgeActive] = useState(false);
  const [activeInstances, setActiveInstances] = useState<number[]>([]);
  const [currentFlowStatus, setCurrentFlowStatus] = useState<'positive' | 'negative' | null>(null);

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

  const { agents, mcpInstances } = config;

  return (
    <div className="w-full">
      {/* Access Notes Section - Moved to top */}
      <div className="mb-3 sm:mb-4 flex justify-center px-4 mb-8">
        <div className="max-w-2xl w-full text-center h-10 sm:h-12 flex items-center justify-center">
          <div className={`
            transition-all duration-300
            ${interactingAgent !== null && interactingAgent < agents.length ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
          `}>
            {interactingAgent !== null && interactingAgent < agents.length && agents[interactingAgent] && (
              <div className={`
                inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm
                ${currentFlowStatus === 'positive' 
                  ? 'bg-green-100 text-green-800 border border-green-200' 
                  : 'bg-red-100 text-red-800 border border-red-200'}
              `}>
                <div className={`
                  w-2 h-2 rounded-full
                  ${currentFlowStatus === 'positive' ? 'bg-green-500' : 'bg-red-500'}
                `}></div>
                <span className="font-medium">
                  {agents[interactingAgent].name}:
                </span>
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
      
      <div className="flex items-center justify-center mt-8">
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 px-2 md:overflow-visible">
          
          <div className="flex flex-col items-center md:items-start w-full">
            <div className="text-xs sm:text-sm md:text-base font-semibold text-gray-500 uppercase tracking-wider mb-3 sm:mb-4 md:mb-6 opacity-90 text-center md:text-left">AI Agents</div>
            <div className="relative flex flex-row md:flex-col gap-2.5 sm:gap-3 md:space-y-0 md:gap-4 overflow-x-auto md:overflow-visible w-full pb-2 md:pb-0">
              {agents.map((agent, index) => {
                const isActive = interactingAgent === index;
                let lineColor = 'bg-gray-300';
                let nodeColor = 'bg-gray-300';
                
                if (isActive && currentFlowStatus === 'positive') {
                  lineColor = nodeColor = 'bg-orange-500';
                } else if (isActive && currentFlowStatus === 'negative') {
                  lineColor = nodeColor = 'bg-red-500';
                }
                
                return (
                  <div 
                    key={agent.name} 
                    className={`
                      relative bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2.5 sm:px-5 sm:py-3 md:px-6 md:py-4 text-xs sm:text-sm md:text-base font-medium text-gray-800 
                      flex items-center gap-2 sm:gap-3 min-w-[160px] sm:min-w-[200px] md:min-w-[240px] border-2 shadow-lg 
                      transition-all duration-300 ease-in-out flex-shrink-0 md:flex-shrink-1
                      ${interactingAgent === index && currentFlowStatus === 'positive' ? 'border-orange-500 scale-105 shadow-orange-300/50' : 
                        interactingAgent === index && currentFlowStatus === 'negative' ? 'border-red-500 scale-105 shadow-red-300/50' : 'border-gray-200/70'}
                    `}
                  >
                    <div className={`
                      w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full flex-shrink-0 transition-all duration-300
                      ${interactingAgent === index && currentFlowStatus === 'positive' ? 'bg-orange-500 animate-pulse' : 
                        interactingAgent === index && currentFlowStatus === 'negative' ? 'bg-red-500 animate-pulse' : 
                        (agent.status === 'active' ? 'bg-emerald-500' : 'bg-gray-400')}
                    `}></div>
                    <span>{agent.name}</span>
                    
                    {/* Connection line extending from agent card */}
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 left-full ${isActive ? '' : 'opacity-60'}`}>
                      <div className="flex items-center">
                        <div className={`w-2 h-2 rounded-full ${nodeColor} -ml-1`}></div>
                        <div className={`w-16 md:w-20 lg:w-24 h-0.5 ${lineColor}`}></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative z-10 my-4 md:my-0">
            <div className={`absolute -top-6 sm:-top-7 left-1/2 -translate-x-1/2 z-10 transition-all duration-300 ${bridgeActive ? 'scale-110' : ''}`}>
              <div className={`bg-gradient-to-r text-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-lg whitespace-nowrap flex items-center gap-1.5 sm:gap-2 
                              ${currentFlowStatus === 'negative' && bridgeActive ? 'from-red-500 to-red-700' : 'from-blue-600 to-purple-600'}`}>
                <Shield className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-colors duration-300 
                                  ${bridgeActive && currentFlowStatus === 'positive' ? 'text-yellow-300' : 
                                   bridgeActive && currentFlowStatus === 'negative' ? 'text-white animate-ping opacity-75' : 'text-white'}`} />
                Identity & Security
              </div>
            </div>
            
            <div className={`relative bg-gradient-to-br text-white rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-xl transition-all duration-300 ease-in-out 
                            ${bridgeActive && currentFlowStatus === 'positive' ? 'from-orange-500 to-red-600 scale-105 shadow-orange-400/60' : 
                             bridgeActive && currentFlowStatus === 'negative' ? 'from-gray-600 to-gray-800 scale-100 shadow-red-400/50' : 'from-orange-500 to-red-600'}`}>
              <div className="text-center">
                <Combine className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto mb-2 sm:mb-3 md:mb-4 transition-transform duration-300 
                                  ${bridgeActive && currentFlowStatus === 'positive' ? 'rotate-[20deg] scale-110' : 
                                   bridgeActive && currentFlowStatus === 'negative' ? 'opacity-70' : ''}`} />
                <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">AgenticTrust</div>
              </div>
              
              <div className="mt-4 sm:mt-5 md:mt-6 flex flex-col gap-2 sm:gap-2.5 md:gap-3">
                {[
                  { icon: Shield, label: 'Authentication' },
                  { icon: Gauge, label: 'Rate Limiting' },
                  { icon: Filter, label: 'Filtering' },
                  { icon: Activity, label: 'Traceability' }
                ].map((feature) => (
                  <div 
                    key={feature.label}
                    className={`backdrop-blur-sm rounded-md px-3 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm flex items-center gap-2 sm:gap-2.5 transition-all duration-300 
                                  ${bridgeActive && currentFlowStatus === 'positive' ? 'bg-white/30' : 
                                   bridgeActive && currentFlowStatus === 'negative' ? 'bg-white/10 opacity-70' : 'bg-white/20'}`}
                  >
                    {React.createElement(feature.icon, { className: `w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 transition-colors duration-300 
                                                      ${bridgeActive && currentFlowStatus === 'positive' ? 'text-yellow-300' : 
                                                       bridgeActive && currentFlowStatus === 'negative' ? 'text-gray-300' : 'text-white'}` })}
                    <span>{feature.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end w-full">
            <div className="text-xs sm:text-sm md:text-base font-semibold text-gray-500 uppercase tracking-wider mb-3 sm:mb-4 md:mb-6 opacity-90 text-center md:text-left">MCP Instances</div>
            <div className="relative flex flex-row md:flex-col gap-2.5 sm:gap-3 md:space-y-0 md:gap-4 overflow-x-auto md:overflow-visible w-full pb-2 md:pb-0">
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
                  lineColor = nodeColor = 'bg-blue-500';
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
                  borderClass = 'border-red-500';
                  shadowClass = 'shadow-red-300/50';
                  iconBgClass = 'bg-red-100';
                  iconColorClass = 'text-red-600';
                  descColorClass = 'text-red-600';
                  scaleClass = 'scale-95';
                }
                
                // Handle active/successful connection state
                if (isActive) {
                  shadowClass = 'shadow-lg';
                  iconColorClass = 'text-white';
                  scaleClass = 'scale-105';
                  
                  // Use explicit classes for each color when active
                  if (mcp.color === 'blue') {
                    borderClass = 'border-blue-500';
                    shadowClass += ' shadow-blue-300/50';
                    iconBgClass = 'bg-blue-500';
                    descColorClass = 'text-blue-700 font-medium';
                  } else if (mcp.color === 'purple') {
                    borderClass = 'border-purple-500';
                    shadowClass += ' shadow-purple-300/50';
                    iconBgClass = 'bg-purple-500';
                    descColorClass = 'text-purple-700 font-medium';
                  } else if (mcp.color === 'green') {
                    borderClass = 'border-green-500';
                    shadowClass += ' shadow-green-300/50';
                    iconBgClass = 'bg-green-500';
                    descColorClass = 'text-green-700 font-medium';
                  } else if (mcp.color === 'orange') {
                    borderClass = 'border-orange-500';
                    shadowClass += ' shadow-orange-300/50';
                    iconBgClass = 'bg-orange-500';
                    descColorClass = 'text-orange-700 font-medium';
                  } else if (mcp.color === 'red') {
                    borderClass = 'border-red-500';
                    shadowClass += ' shadow-red-300/50';
                    iconBgClass = 'bg-red-500';
                    descColorClass = 'text-red-700 font-medium';
                  }
                }
                
                return (
                  <div 
                    key={mcp.name} 
                    className={`
                      relative bg-white/95 backdrop-blur-sm rounded-xl border-2 px-3 py-3 sm:p-4 md:p-5 
                      shadow-lg transition-all duration-300 ease-in-out min-w-[180px] sm:min-w-[220px] md:min-w-[260px]
                      flex-shrink-0 md:flex-shrink-1
                      ${borderClass} ${shadowClass} ${scaleClass}
                    `}
                  >
                    {/* Connection line extending from bridge to instance */}
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 right-full ${isActive ? '' : 'opacity-60'}`}>
                      <div className="flex items-center">
                        <div className={`w-16 md:w-20 lg:w-24 h-0.5 ${lineColor}`}></div>
                        <div className={`w-2 h-2 rounded-full ${nodeColor} -mr-1`}></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className={`p-2 rounded-lg transition-colors duration-300 ${iconBgClass}`}>
                        {React.createElement(mcp.icon, { className: `w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-colors duration-300 ${iconColorClass}` })}
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm md:text-base font-semibold text-gray-800">{mcp.name}</div>
                        <div className={`text-[10px] sm:text-xs transition-colors duration-300 ${descColorClass}`}>
                          {mcp.desc}
                        </div>
                      </div>
                    </div>
                    
                    {/* Denied overlay indicator */}
                    {isDenied && (
                      <div className="absolute inset-0 flex items-center justify-center rounded-xl">
                        <div className="absolute inset-0 bg-red-50/50 rounded-xl"></div>
                        <div className="relative bg-red-100 rounded-full p-1">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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