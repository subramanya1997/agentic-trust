import React from 'react';
import { Users, Shield, Terminal, Code2 } from 'lucide-react';

export const TeamsSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full mb-6 border border-purple-100">
            <Users className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-600">Built for Teams</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">
            Empower Every Stakeholder
          </h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Security, Engineering, and Product teams all get what they need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Security Engineers",
              description: "Define policies, monitor threats, and ensure compliance without slowing down development.",
              icon: Shield,
              gradient: "from-blue-500/10 to-cyan-500/10",
              border: "hover:border-blue-200",
              iconColor: "text-blue-600",
              bg: "bg-blue-50"
            },
            {
              title: "Platform Teams",
              description: "Provide a secure, paved road for AI agent deployment with built-in observability and control.",
              icon: Terminal,
              gradient: "from-purple-500/10 to-pink-500/10",
              border: "hover:border-purple-200",
              iconColor: "text-purple-600",
              bg: "bg-purple-50"
            },
            {
              title: "Product Developers",
              description: "Ship agents faster with pre-approved tools and safe-by-default infrastructure.",
              icon: Code2,
              gradient: "from-orange-500/10 to-red-500/10",
              border: "hover:border-orange-200",
              iconColor: "text-orange-600",
              bg: "bg-orange-50"
            }
          ].map((team, index) => {
            const Icon = team.icon;
            return (
              <div
                key={index}
                className={`group relative bg-zinc-50 rounded-2xl p-8 border border-zinc-200 ${team.border} hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`w-14 h-14 ${team.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 ${team.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{team.title}</h3>
                <p className="text-zinc-600 leading-relaxed">
                  {team.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
