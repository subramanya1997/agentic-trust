import React from 'react';
import { Zap, LucideProps, User, Building2 } from 'lucide-react';

interface Audience {
  title: string;
  description: string;
  icon: React.ElementType<LucideProps>;
  iconBg: string;
  accentColor: string;
}

const AudienceCard = ({ title, description, icon: IconComponent, iconBg, accentColor }: Audience) => (
  <div className="bg-white p-6 sm:p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-100 group">
    <div className={`w-12 h-12 sm:w-14 sm:h-14 ${iconBg} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}>
      <IconComponent 
        className={`w-6 h-6 sm:w-7 sm:h-7 ${
          accentColor === 'blue' ? 'text-blue-600' : 
          accentColor === 'brand' ? 'text-brand' : 
          accentColor === 'purple' ? 'text-purple-600' : 
          'text-gray-600'
        }`} 
      />
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
      description: "Ship AI features faster without managing servers or security",
      iconBg: "bg-blue-100",
      accentColor: "blue"
    },
    {
      title: "Startups",
      icon: Zap,
      description: "Launch AI agents quickly without building your own backend",
      iconBg: "bg-brand/10",
      accentColor: "brand"
    },
    {
      title: "Enterprises",
      icon: Building2,
      description: "Get the security, compliance, and control your organization needs",
      iconBg: "bg-purple-100",
      accentColor: "purple"
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block text-xs sm:text-sm uppercase text-brand font-semibold mb-3 sm:mb-4 tracking-wider bg-brand/5 px-3 py-1 rounded-full">
            WHO IT&apos;S FOR
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            For Everyone Building with AI
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            From your first AI agent to serving millions of users. Write your logic, deploy, and let us handle the rest.
          </p>
          
          {/* Decorative line */}
          <div className="mt-6 sm:mt-8 mx-auto w-16 sm:w-20 h-1 bg-brand rounded-full" />
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
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full" />
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand rounded-full" />
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full" />
        </div>
      </div>
    </section>
  );
}; 