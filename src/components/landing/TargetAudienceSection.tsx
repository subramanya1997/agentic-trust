import React from 'react';
import { Zap, Users, Building } from 'lucide-react';

interface Audience {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  accentColor: string;
}

const AudienceCard = ({ title, description, icon, iconBg, accentColor }: Audience) => (
  <div className="bg-white p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-100 group">
    <div className={`w-14 h-14 ${iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export const TargetAudienceSection = () => {
  const audiences: Audience[] = [
    {
      title: "AI Product Teams",
      description: "Ship MCP-compliant agent features faster. Write your tool logic and prompts - we handle the server, security, and scaling automatically.",
      icon: <Zap className="w-7 h-7 text-orange-600" />,
      iconBg: "bg-orange-50",
      accentColor: "orange"
    },
    {
      title: "Platform Engineers",
      description: "Deploy one MCP server instead of dozens. Get built-in auth, rate limiting, and observability without writing infrastructure code.",
      icon: <Users className="w-7 h-7 text-blue-600" />,
      iconBg: "bg-blue-50",
      accentColor: "blue"
    },
    {
      title: "Enterprise Adopters",
      description: "Production-ready MCP servers from day one. Focus on agent capabilities while we ensure security, compliance, and reliability.",
      icon: <Building className="w-7 h-7 text-green-600" />,
      iconBg: "bg-green-50",
      accentColor: "green"
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm uppercase text-orange-600 font-semibold mb-4 tracking-wider">
            WHO IT'S FOR
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Built for Teams Who Ship Fast
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Whether you're building your first AI agent or scaling to millions of users, AgenticTrust gives you production-ready MCP servers without the infrastructure headache. Just write your logic and deploy.
          </p>
          
          {/* Decorative line */}
          <div className="mt-8 mx-auto w-20 h-1 bg-orange-500 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience) => (
            <AudienceCard
              key={audience.title}
              {...audience}
            />
          ))}
        </div>
        
        {/* Bottom decorative dots */}
        <div className="flex justify-center mt-16 space-x-2">
          <div className="w-2 h-2 bg-orange-300 rounded-full" />
          <div className="w-2 h-2 bg-blue-300 rounded-full" />
          <div className="w-2 h-2 bg-green-300 rounded-full" />
        </div>
      </div>
    </section>
  );
}; 