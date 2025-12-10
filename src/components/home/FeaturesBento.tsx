"use client";

import React from 'react';
import Image from 'next/image';
import { 
  Blocks, 
  Route, 
  Activity, 
  Shield, 
  Plug, 
  Server,
  CheckCircle2,
  Bot,
  Zap,
  Lock,
  Users,
  FileText
} from 'lucide-react';

const features = [
  {
    id: 'agent-gateway',
    title: 'Universal Agent Gateway',
    description: 'Connect any agent framework — LangChain, CrewAI, AutoGen, or your own. Zero code changes.',
    icon: Blocks,
    gradient: 'from-purple-500/10 to-blue-500/10',
    iconBg: 'bg-purple-500',
    span: 'md:col-span-2',
    visual: (
      <div className="mt-6 relative">
        <div className="bg-zinc-900 rounded-xl p-4 shadow-lg">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
            </div>
            <span className="text-xs text-zinc-500 font-mono">your-agent → agentic-trust</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                <Bot className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-[10px] text-zinc-500">Your Agent</span>
            </div>
            <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-500 to-brand" />
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-lg bg-brand/20 border border-brand/30 flex items-center justify-center">
                <Zap className="w-6 h-6 text-brand" />
              </div>
              <span className="text-[10px] text-zinc-500">Gateway</span>
            </div>
            <div className="flex-1 h-0.5 bg-gradient-to-r from-brand to-green-500" />
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-lg bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-green-400" />
              </div>
              <span className="text-[10px] text-zinc-500">APIs & Tools</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'llm-routing',
    title: 'Smart LLM Router',
    description: 'Route to any provider. Automatic fallbacks, cost optimization, and latency-based routing.',
    icon: Route,
    gradient: 'from-orange-500/10 to-red-500/10',
    iconBg: 'bg-brand',
    span: 'md:col-span-1',
    visual: (
      <div className="mt-6 space-y-2">
        {[
          { name: 'GPT-4', latency: '1.2s', cost: '$0.03' },
          { name: 'Claude', latency: '0.8s', cost: '$0.02' },
          { name: 'Your LLM', latency: '0.3s', cost: '$0.00' },
        ].map((model, i) => (
          <div 
            key={model.name}
            className={`flex items-center justify-between p-2 rounded-lg ${i === 0 ? 'bg-brand/10 border border-brand/20' : 'bg-zinc-100'}`}
          >
            <div className="flex items-center gap-2">
              {i === 0 && <div className="w-2 h-2 rounded-full bg-brand animate-pulse" />}
              <span className={`text-sm font-medium ${i === 0 ? 'text-brand' : 'text-zinc-600'}`}>{model.name}</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-zinc-500">
              <span>{model.latency}</span>
              <span>{model.cost}</span>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'observability',
    title: 'Full Observability',
    description: 'Traces, logs, and metrics for every call. Debug issues in seconds, not hours.',
    icon: Activity,
    gradient: 'from-green-500/10 to-emerald-500/10',
    iconBg: 'bg-green-500',
    span: 'md:col-span-1',
    visual: (
      <div className="mt-6 flex-1 flex flex-col">
        <div
          className="flex-1 flex items-end gap-1 rounded-xl bg-gradient-to-b from-emerald-50 to-white border border-emerald-100/70 px-3 py-4 shadow-inner"
          style={{ minHeight: '200px' }}
        >
          {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
            <div
              key={i}
              className="flex-1 bg-gradient-to-t from-green-500 to-emerald-400 rounded-t opacity-80 hover:opacity-100 transition-all duration-300 animate-pulse"
              style={{ height: `${height}%`, animationDelay: `${i * 120}ms` }}
            />
          ))}
        </div>
        <div className="flex justify-between pt-3 text-xs text-zinc-500">
          <span>12 AM</span>
          <span>Now</span>
        </div>
      </div>
    ),
  },
  {
    id: 'integrations',
    title: 'Bring Your Own Tools',
    description: 'Use our pre-built connectors or register your own APIs. Full OpenAPI support.',
    icon: Plug,
    gradient: 'from-pink-500/10 to-rose-500/10',
    iconBg: 'bg-pink-500',
    span: 'md:col-span-2',
    visual: (
      <div className="mt-6 grid grid-cols-5 gap-2">
        {[
          '/integrations/light/salesforce.svg',
          '/integrations/light/slack.svg',
          '/integrations/light/github.svg',
          '/integrations/light/gmail.svg',
          '/integrations/light/notion.svg',
          '/integrations/light/linear.svg',
          '/integrations/light/zendesk.svg',
          '/integrations/light/zoom.svg',
          '/integrations/light/quickbooks.svg',
          null, // placeholder for +more
        ].map((logo, i) => (
          <div
            key={i}
            className="aspect-square rounded-lg bg-white border border-zinc-200 flex items-center justify-center p-2 hover:border-zinc-300 hover:shadow-sm transition-all"
          >
            {logo ? (
              <Image
                src={logo}
                alt="Integration"
                width={24}
                height={24}
                className="opacity-70"
              />
            ) : (
              <span className="text-[10px] text-zinc-400 font-medium">+yours</span>
            )}
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'security',
    title: 'Enterprise Security',
    description: 'Identity, authentication, and audit logs built-in. SOC 2 and HIPAA ready.',
    icon: Shield,
    gradient: 'from-blue-500/10 to-cyan-500/10',
    iconBg: 'bg-blue-500',
    span: 'md:col-span-2',
    visual: (
      <div className="mt-6 flex flex-col justify-between h-full min-h-[220px]">
        <div className="grid grid-cols-3 gap-4 px-2">
          {/* Auth: Fingerprint Scan */}
          <div className="group/auth relative aspect-square flex items-center justify-center bg-white rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-all overflow-hidden">
            <div className="absolute inset-0 bg-blue-50/30 group-hover/auth:bg-blue-50/50 transition-colors" />
            
            {/* Fingerprint SVG */}
            <div className="relative w-24 h-24">
               <svg viewBox="0 0 2048 2048" fill="url(#fingerprint-gradient)">
                 <defs>
                   <linearGradient id="fingerprint-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                     <stop offset="0%" stopColor="#ec4899" /> {/* pink-500 */}
                     <stop offset="100%" stopColor="#ef4444" /> {/* red-500 */}
                   </linearGradient>
                 </defs>
                 <g>
                   <path d="M1487.202,505.663c9.47,9.262,24.659,9.095,33.921-0.376c9.263-9.47,9.095-24.659-0.375-33.921c-1.398-1.367-482.245-482.241-988.013-2.471c-9.573,9.108-9.951,24.254-0.843,33.827c9.108,9.573,24.254,9.951,33.827,0.843C1037.537,55.999,1485.898,504.388,1487.202,505.663z"/>
                   <path d="M1144.439,472.974c12.834,3.105,25.757-4.783,28.862-17.616c3.105-12.834-4.782-25.757-17.616-28.862c-1.7-0.414-592.016-151.89-699.312,539.889c-2.018,13.041,6.918,25.252,19.959,27.269c13.041,2.018,25.252-6.918,27.269-19.959C602.828,333.94,1142.883,472.595,1144.439,472.974z"/>
                   <path d="M1276.166,469.692c-12.523-4.191-26.076,2.564-30.267,15.087c-4.191,12.523,2.564,26.076,15.087,30.267c0.721,0.243,251.478,81.341,283.052,449.262c1.086,13.196,12.667,23.013,25.863,21.927c13.196-1.086,23.014-12.667,21.927-25.863C1557.542,560.822,1276.973,469.964,1276.166,469.692z"/>
                   <path d="M1514.42,1296.481c10.143,8.487,25.248,7.145,33.735-2.999c8.487-10.143,7.145-25.248-2.999-33.735c-26.297-22.002-46.367-69.647-61.668-124.942c-15.996-57.814-26.372-123.831-33.249-179.055c-12.362-99.258-52.443-191.289-112.349-263.181c-43.121-51.75-96.438-93.062-157.046-119.188c-60.957-26.277-129.185-37.28-201.753-28.243c-88.621,11.038-183.554,52.023-279.24,131.758c-10.143,8.435-11.528,23.498-3.093,33.641c8.435,10.143,23.498,11.528,33.641,3.093c88.003-73.333,174.44-110.917,254.503-120.89c63.789-7.944,123.643,1.677,177.013,24.683c53.721,23.157,100.993,59.793,139.241,105.695c54.043,64.857,90.245,148.231,101.48,238.444c7.054,56.646,17.823,124.816,34.748,185.989C1455.01,1211.238,1479.652,1267.391,1514.42,1296.481z"/>
                   <path d="M1425.995,1463.463c10.143,8.487,25.248,7.145,33.735-2.999c8.487-10.143,7.145-25.248-2.999-33.735c-25.014-20.93-53.505-86.797-78.437-166.832c-28.825-92.536-51.68-202.266-58.832-284.901l0.004-0.007c-0.109-1.257-0.314-2.483-0.604-3.672c-15.112-89.807-47.751-156.696-90.102-204.1c-35.579-39.823-77.916-65.784-122.528-79.972c-44.466-14.142-91.004-16.519-135.214-9.228c-55.775,9.197-108.165,33.828-148.286,69.674c-71.139,63.561-79.835,141.551-89.152,225.138c-0.747,6.71-1.508,13.521-2.802,24.386c-3.237,27.167-6.544,58.772-9.862,90.511c-14.924,142.714-30.15,288.291-90.919,422.498c-5.433,12.057-0.063,26.239,11.994,31.672c12.057,5.433,26.239,0.063,31.672-11.994c63.874-141.064,79.519-290.655,94.855-437.302c2.999-28.681,5.988-57.248,9.862-89.762c0.668-5.61,1.738-15.196,2.803-24.759c8.273-74.225,15.995-143.479,73.41-194.779c33.348-29.795,77.196-50.317,124.109-58.053c37.213-6.137,76.159-4.208,113.1,7.54c36.792,11.701,71.798,33.215,101.352,66.292c36.647,41.019,65.061,99.976,78.541,180.278c7.436,85.622,31.076,199.129,60.872,294.786C1359.947,1362.042,1393.433,1436.218,1425.995,1463.463z"/>
                   <path d="M1355.255,1564.055c8.383,10.246,23.488,11.756,33.734,3.373c10.246-8.383,11.756-23.488,3.373-33.734c-17.832-21.782-55.796-79.279-93.69-150.538c-26.59-50.004-52.835-106.141-71.596-160.452c-17.171-49.705-22.124-86.525-27.611-127.329c-2.987-22.213-6.126-45.552-11.228-72.141c-6.775-35.314-14.993-65.356-24.375-90.677c-10.231-27.611-22.029-49.998-35.022-67.804c-22.357-30.64-53.38-48.986-86.417-55.103c-25.9-4.797-52.988-2.021-78.044,8.286c-24.867,10.229-47.656,27.809-65.158,52.672c-25.078,35.626-39.292,86.204-32.637,151.268c10.078,98.547,49.851,230.764,97.555,355.516c59.253,154.952,131.439,299.863,174.338,354.808c8.124,10.402,23.144,12.247,33.546,4.122c10.402-8.125,12.247-23.144,4.123-33.546c-40.245-51.544-109.425-191.31-167.215-342.438c-46.485-121.564-85.152-249.533-94.745-343.335c-5.357-52.385,5.25-91.922,24.203-118.846c12.057-17.128,27.49-29.131,44.168-35.991c16.491-6.783,34.278-8.619,51.246-5.476c21.471,3.976,41.723,16.016,56.431,36.174c10.279,14.086,19.91,32.598,28.649,56.185c8.545,23.062,16.065,50.611,22.313,83.181c5.026,26.194,8.012,48.391,10.853,69.517c5.796,43.102,11.026,81.994,29.861,136.512c19.962,57.784,47.134,116.101,74.406,167.386C1295.744,1479.786,1336.032,1540.575,1355.255,1564.055z"/>
                   <path d="M669.069,837.878c5.382-12.057-0.031-26.196-12.088-31.578c-12.057-5.382-26.196,0.03-31.578,12.087c-35.195,78.854-42.234,184.909-49.061,287.835c-6.624,99.837-13.044,196.594-44.516,254.362c-6.314,11.592-2.034,26.109,9.557,32.422c11.592,6.314,26.109,2.034,32.422-9.557c36.587-67.157,43.349-169.07,50.326-274.227C630.683,1010.489,637.433,908.757,669.069,837.878z"/>
                   <path d="M1049.007,968.014c-0.672-13.196-11.918-23.349-25.113-22.677c-13.196,0.672-23.349,11.918-22.677,25.114c6.265,121.556,31.674,257.963,81.38,388.954c42.829,112.867,103.669,221.821,185.805,314.06c8.797,9.884,23.944,10.765,33.828,1.968c9.885-8.797,10.765-23.943,1.968-33.828c-78.059-87.661-135.967-191.437-176.809-299.067C1079.508,1216.361,1055.037,1085.023,1049.007,968.014z"/>
                   <path d="M1001.882,1781.435c7.399,10.971,22.296,13.865,33.266,6.466c10.971-7.4,13.865-22.296,6.466-33.267c-44.803-66.323-79.482-133.119-108.771-199.853c-29.596-67.434-53.836-135.011-77.417-202.01l0.045-0.092c-4.398-12.496-18.095-19.061-30.591-14.663c-8.66,3.048-14.471,10.564-15.759,19.05l-3.624,17.079c-19.194,90.656-36.734,173.486-89.222,267.215c-6.468,11.54-2.356,26.142,9.184,32.61c11.539,6.468,26.142,2.356,32.61-9.183c43.3-77.322,64.043-146.401,80.46-217.37c15.476,42.036,31.919,84.234,50.461,126.481C919.471,1643.351,955.486,1712.752,1001.882,1781.435z"/>
                 </g>
              </svg>
              
              {/* Scanning Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent h-[30%] w-full blur-md animate-[scan_3s_ease-in-out_infinite] opacity-60" />
            </div>
            
            <div className="absolute bottom-3 text-xs font-semibold text-zinc-500 group-hover/auth:text-pink-500 transition-colors">Auth</div>
          </div>

          {/* RBAC: Access Control */}
          <div className="group/rbac relative aspect-square flex items-center justify-center bg-white rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-all">
             <div className="absolute inset-0 bg-purple-50/50 group-hover/rbac:bg-purple-50 transition-colors rounded-2xl" />
             <div className="relative flex flex-col items-center justify-center gap-3">
               {/* Root Node */}
               <div className="w-10 h-10 rounded-xl bg-purple-100 border-2 border-purple-200 flex items-center justify-center z-10 shadow-sm group-hover/rbac:scale-110 transition-transform">
                 <Users className="w-5 h-5 text-purple-600" />
               </div>
               
               {/* Connections */}
               <div className="relative w-24 h-6">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-full border-t-2 border-l-2 border-r-2 border-purple-200 rounded-t-xl" />
               </div>
               
               {/* Leaf Nodes */}
               <div className="flex gap-4">
                 <div className="w-8 h-8 rounded-lg bg-white border-2 border-zinc-200 flex items-center justify-center group-hover/rbac:border-purple-300 transition-colors">
                   <div className="w-3 h-3 rounded-full bg-zinc-300 group-hover/rbac:bg-purple-400 transition-colors" />
                 </div>
                 <div className="w-8 h-8 rounded-lg bg-white border-2 border-zinc-200 flex items-center justify-center group-hover/rbac:border-purple-300 transition-colors">
                   <div className="w-3 h-3 rounded-full bg-zinc-300 group-hover/rbac:bg-purple-400 transition-colors delay-75" />
                 </div>
               </div>
             </div>
             <div className="absolute bottom-3 text-xs font-semibold text-zinc-500 group-hover/rbac:text-purple-600 transition-colors">RBAC</div>
          </div>

          {/* Audit: Live Terminal */}
          <div className="group/audit relative aspect-square flex items-center justify-center bg-zinc-900 rounded-2xl border border-zinc-800 shadow-sm hover:shadow-md transition-all overflow-hidden p-4">
            <div className="w-full flex flex-col gap-2.5">
              {[
                { w: '70%', d: '0s' },
                { w: '90%', d: '0.2s' },
                { w: '50%', d: '0.4s' },
                { w: '80%', d: '0.6s' },
                { w: '60%', d: '0.8s' }
              ].map((line, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-[9px] font-mono text-zinc-600">12:0{i}</span>
                  <div className="h-1.5 rounded-full bg-zinc-800 flex-1 overflow-hidden">
                    <div 
                      className="h-full bg-emerald-500 rounded-full animate-[shimmer_3s_infinite]"
                      style={{ 
                        width: line.w,
                        animationDelay: line.d,
                        opacity: 0.6 + (i * 0.1)
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute bottom-3 text-xs font-semibold text-zinc-500 group-hover/audit:text-emerald-500 transition-colors">Logs</div>
          </div>
        </div>
        
        <style jsx>{`
          @keyframes scan {
            0% { transform: translateY(-100%); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateY(100%); opacity: 0; }
          }
          @keyframes shimmer {
            0% { opacity: 0.4; transform: translateX(-10%); }
            50% { opacity: 1; transform: translateX(0); }
            100% { opacity: 0.4; transform: translateX(-10%); }
          }
        `}</style>
      </div>
    ),
  },
  {
    id: 'tool-registry',
    title: 'Tool Registry',
    description: 'Centralized tool management. Register, version, and govern your AI agent tools at scale.',
    icon: Server,
    gradient: 'from-violet-500/10 to-purple-500/10',
    iconBg: 'bg-violet-500',
    span: 'md:col-span-1',
    visual: (
      <div className="mt-6 space-y-2">
        {[
          { name: 'your-custom-tools', tools: 12, status: 'healthy' },
          { name: 'cloud-apis', tools: 8, status: 'healthy' },
          { name: 'databases', tools: 5, status: 'healthy' },
        ].map((server) => (
          <div key={server.name} className="flex items-center justify-between p-2 bg-zinc-50 rounded-lg">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                <Server className="w-4 h-4 text-violet-600" />
              </div>
              <div>
                <div className="text-sm font-medium text-zinc-700">{server.name}</div>
                <div className="text-xs text-zinc-500">{server.tools} tools</div>
              </div>
            </div>
            <div className="w-2 h-2 rounded-full bg-green-500" />
          </div>
        ))}
      </div>
    ),
  },
];

export const FeaturesBento = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">
            The infrastructure layer your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-orange-500">
              agents deserve
            </span>
          </h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Identity, routing, and observability — so you can focus on building.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className={`group relative bg-white rounded-2xl p-6 border-2 border-zinc-200 hover:border-zinc-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${feature.span}`}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-12 h-12 ${feature.iconBg} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-zinc-900 mb-2">{feature.title}</h3>
                  <p className="text-zinc-600 leading-relaxed">{feature.description}</p>

                  {/* Visual */}
                  {feature.visual}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

