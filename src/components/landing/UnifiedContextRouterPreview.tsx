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
    { name: 'Sales Agent', status: 'active', flowType: 'positive', connectsTo: [0] }, // Connects to Internal Tools
    { name: 'Support Agent', status: 'active', flowType: 'positive', connectsTo: [0, 1] }, // Connects to Internal Tools & Cloud Services
    { name: 'Analytics Agent', status: 'idle', flowType: 'negative', connectsTo: [2] } // Would connect to Knowledge Base but blocked
  ],
  mcpInstances: [
    { name: 'Internal Services', icon: Briefcase, desc: 'CRM, ERP, etc.', color: 'blue' },
    { name: 'Cloud Services', icon: Cloud, desc: 'AWS, Stripe, etc.', color: 'purple' },
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
    const agentsCount = config.agents.length;
    let currentAgentIndex = 0;

    const sequence = async () => {
      const agentIndex = currentAgentIndex % agentsCount;
      const agent = config.agents[agentIndex];
      
      setInteractingAgent(agentIndex);
      setCurrentFlowStatus(agent.flowType);
      await new Promise(resolve => setTimeout(resolve, 100)); // Brief pause to set agent
      
      // Animate line to bridge
      await new Promise(resolve => setTimeout(resolve, 700)); // Duration of line animation to bridge

      setBridgeActive(true);
      await new Promise(resolve => setTimeout(resolve, 700)); // Bridge interaction time

      if (agent.flowType === 'positive') {
        // For positive flow, connect to configured instances
        setActiveInstances(agent.connectsTo);
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

    return () => clearInterval(intervalId);
  }, [config]); // Re-run effect when config changes

  const { agents, mcpInstances } = config;

  return (
    <div className="relative w-full py-8 md:py-12 lg:py-16">
      <div className="flex items-center justify-center">
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 px-2 overflow-x-auto md:overflow-visible">
          
          <div className="flex flex-col items-center md:items-start">
            <div className="text-sm md:text-base font-semibold text-gray-500 uppercase tracking-wider mb-4 md:mb-6 opacity-90">AI Agents</div>
            <div className="relative flex flex-row md:flex-col gap-3 md:space-y-0 md:gap-4">
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
                      relative bg-white/95 backdrop-blur-sm rounded-xl px-5 py-3 md:px-6 md:py-4 text-sm md:text-base font-medium text-gray-800 
                      flex items-center gap-3 min-w-[160px] md:min-w-[200px] border-2 shadow-lg 
                      transition-all duration-300 ease-in-out
                      ${interactingAgent === index && currentFlowStatus === 'positive' ? 'border-orange-500 scale-105 shadow-orange-300/50' : 
                        interactingAgent === index && currentFlowStatus === 'negative' ? 'border-red-500 scale-105 shadow-red-300/50' : 'border-gray-200/70'}
                    `}
                  >
                    <div className={`
                      w-2.5 h-2.5 md:w-3 md:h-3 rounded-full flex-shrink-0 transition-all duration-300
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

          <div className="relative z-10">
            <div className={`absolute -top-7 left-1/2 -translate-x-1/2 z-10 transition-all duration-300 ${bridgeActive ? 'scale-110' : ''}`}>
              <div className={`bg-gradient-to-r text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg whitespace-nowrap flex items-center gap-2 
                              ${currentFlowStatus === 'negative' && bridgeActive ? 'from-red-500 to-red-700' : 'from-blue-600 to-purple-600'}`}>
                <Shield className={`w-4 h-4 transition-colors duration-300 
                                  ${bridgeActive && currentFlowStatus === 'positive' ? 'text-yellow-300' : 
                                   bridgeActive && currentFlowStatus === 'negative' ? 'text-white animate-ping opacity-75' : 'text-white'}`} />
                Identity & Security
              </div>
            </div>
            
            <div className={`relative bg-gradient-to-br text-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-xl transition-all duration-300 ease-in-out 
                            ${bridgeActive && currentFlowStatus === 'positive' ? 'from-orange-500 to-red-600 scale-105 shadow-orange-400/60' : 
                             bridgeActive && currentFlowStatus === 'negative' ? 'from-gray-600 to-gray-800 scale-100 shadow-red-400/50' : 'from-orange-500 to-red-600'}`}>
              <div className="text-center">
                <Combine className={`w-12 h-12 md:w-14 md:h-14 mx-auto mb-3 md:mb-4 transition-transform duration-300 
                                  ${bridgeActive && currentFlowStatus === 'positive' ? 'rotate-[20deg] scale-110' : 
                                   bridgeActive && currentFlowStatus === 'negative' ? 'opacity-70' : ''}`} />
                <div className="text-xl md:text-2xl font-bold">AgenticTrust</div>
                <div className="text-sm opacity-90">MCP Bridge</div>
              </div>
              
              <div className="mt-5 md:mt-6 flex flex-col gap-2.5 md:gap-3">
                {[
                  { icon: Shield, label: 'Authentication' },
                  { icon: Gauge, label: 'Rate Limiting' },
                  { icon: Filter, label: 'Filtering' },
                  { icon: Activity, label: 'Traceability' }
                ].map((feature) => (
                  <div 
                    key={feature.label}
                    className={`backdrop-blur-sm rounded-md px-4 py-2.5 text-sm flex items-center gap-2.5 transition-all duration-300 
                                  ${bridgeActive && currentFlowStatus === 'positive' ? 'bg-white/30' : 
                                   bridgeActive && currentFlowStatus === 'negative' ? 'bg-white/10 opacity-70' : 'bg-white/20'}`}
                  >
                    {React.createElement(feature.icon, { className: `w-4 h-4 md:w-5 md:h-5 transition-colors duration-300 
                                                      ${bridgeActive && currentFlowStatus === 'positive' ? 'text-yellow-300' : 
                                                       bridgeActive && currentFlowStatus === 'negative' ? 'text-gray-300' : 'text-white'}` })}
                    <span>{feature.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="text-sm md:text-base font-semibold text-gray-500 uppercase tracking-wider mb-4 md:mb-6 opacity-90">MCP Instances</div>
            <div className="relative flex flex-row md:flex-col gap-3 md:space-y-0 md:gap-4">
              {mcpInstances.map((mcp, index) => {
                const isActive = activeInstances.includes(index) && bridgeActive && currentFlowStatus === 'positive';
                
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
                
                if (isActive) {
                  shadowClass = 'scale-105';
                  iconColorClass = 'text-white';
                  
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
                      relative bg-white/95 backdrop-blur-sm rounded-xl border-2 p-4 md:p-5 
                      shadow-lg transition-all duration-300 ease-in-out min-w-[180px] md:min-w-[220px]
                      ${borderClass} ${shadowClass}
                    `}
                  >
                    {/* Connection line extending from bridge to instance */}
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 right-full ${isActive ? '' : 'opacity-60'}`}>
                      <div className="flex items-center">
                        <div className={`w-16 md:w-20 lg:w-24 h-0.5 ${lineColor}`}></div>
                        <div className={`w-2 h-2 rounded-full ${nodeColor} -mr-1`}></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-lg transition-colors duration-300 ${iconBgClass}`}>
                        {React.createElement(mcp.icon, { className: `w-5 h-5 md:w-6 md:h-6 transition-colors duration-300 ${iconColorClass}` })}
                      </div>
                      <div>
                        <div className="text-sm md:text-base font-semibold text-gray-800">{mcp.name}</div>
                        <div className={`text-xs transition-colors duration-300 ${descColorClass}`}>
                          {mcp.desc}
                        </div>
                      </div>
                    </div>
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