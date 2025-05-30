import React from 'react';
import { Zap, Users, LucideProps, User, Building2 } from 'lucide-react';

interface Audience {
  title: string;
  description: string;
  icon: React.ElementType<LucideProps>;
  iconBg: string;
  accentColor: string;
}

const AudienceCard = ({ title, description, icon: IconComponent, iconBg }: Audience) => (
  <div className="bg-white p-6 sm:p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-100 group">
    <div className={`w-12 h-12 sm:w-14 sm:h-14 ${iconBg} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}>
      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
    </div>
    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{title}</h3>
    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export const TargetAudienceSection = () => {
  const audiences: Audience[] = [
    {
      title: "Solo Developers",
      icon: User,
      description: "Individual developers building AI-powered applications who need reliable agent infrastructure",
      iconBg: "bg-blue-50",
      accentColor: "blue"
    },
    {
      title: "Agencies & Consultants",
      icon: Users,
      description: "Teams delivering AI solutions for clients who need scalable, multi-tenant infrastructure",
      iconBg: "bg-green-50",
      accentColor: "green"
    },
    {
      title: "Startups",
      icon: Zap,
      description: "Fast-moving companies integrating AI agents who can&apos;t afford to build infrastructure from scratch",
      iconBg: "bg-purple-50",
      accentColor: "purple"
    },
    {
      title: "Enterprises",
      icon: Building2,
      description: "Large organizations requiring enterprise-grade security, compliance, and control over their AI agents&apos; behavior",
      iconBg: "bg-orange-50",
      accentColor: "orange"
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block text-xs sm:text-sm uppercase text-orange-600 font-semibold mb-3 sm:mb-4 tracking-wider">
            WHO IT&apos;S FOR
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Built for Teams Who Ship Fast
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Whether you&apos;re building your first AI agent or scaling to millions of users, AgenticTrust gives you production-ready MCP servers without the infrastructure headache. Just write your logic and deploy.
          </p>
          
          {/* Decorative line */}
          <div className="mt-6 sm:mt-8 mx-auto w-16 sm:w-20 h-1 bg-orange-500 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {audiences.map((audience) => (
            <AudienceCard
              key={audience.title}
              {...audience}
            />
          ))}
        </div>
        
        {/* Bottom decorative dots */}
        <div className="flex justify-center mt-12 sm:mt-16 space-x-1.5 sm:space-x-2">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-300 rounded-full" />
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-300 rounded-full" />
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-300 rounded-full" />
        </div>
      </div>
    </section>
  );
}; 