import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Plug, Zap } from 'lucide-react';

const IntegrationStep = ({ number, title, description, icon }: { number: string, title: string, description: string, icon: React.ReactNode }) => (
  <div className="relative">
    <div className="flex items-start">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 text-orange-600 font-bold text-sm mr-4 flex-shrink-0">
        {number}
      </div>
      <div className="flex-1">
        <div className="flex items-center mb-2">
          {icon}
          <h3 className="text-lg font-semibold ml-3 text-white">{title}</h3>
        </div>
        <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

export const ControlServersSection = () => {
  const integrationSteps = [
    {
      number: "1",
      title: "Connect Your Agents",
      description: "Point your AI agents to our gateway endpoint. Works with any LLM provider - OpenAI, Anthropic, open source models, or custom solutions.",
      icon: <Plug className="w-5 h-5 text-orange-400" />
    },
    {
      number: "2",
      title: "Define Your Rules",
      description: "Set up authentication, rate limits, and tool access policies through our intuitive dashboard or API. Changes take effect instantly.",
      icon: <Code2 className="w-5 h-5 text-orange-400" />
    },
    {
      number: "3",
      title: "Deploy with Confidence",
      description: "Your agents are now production-ready with automatic scaling, monitoring, and security. Focus on building features, not infrastructure.",
      icon: <Zap className="w-5 h-5 text-orange-400" />
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="text-sm uppercase text-orange-400 font-semibold mb-2 tracking-wider">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
            From Prototype to Production <br className="hidden md:inline" />in Minutes, Not Months
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            AgenticTrust sits between your AI agents and tools, providing a secure, scalable gateway that handles all the complexity of production deployments.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto mb-12">
          {integrationSteps.map((step, index) => (
            <React.Fragment key={step.title}>
              <IntegrationStep
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
              />
              {index < integrationSteps.length - 1 && (
                <div className="hidden md:flex justify-center py-2">
                  <ArrowRight className="w-5 h-5 text-gray-600 rotate-90" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Architecture diagram placeholder */}
        <div className="bg-gray-800 rounded-lg p-8 max-w-4xl mx-auto mb-12">
          <div className="text-center">
            <div className="bg-gray-700 rounded-lg p-12 mb-4">
              <p className="text-gray-400 text-sm">[ Architecture Diagram ]</p>
              <p className="text-gray-500 text-xs mt-2">Your Agents → AgenticTrust Gateway → Your Tools & APIs</p>
            </div>
            <p className="text-sm text-gray-400">Enterprise-grade infrastructure that scales with your needs</p>
          </div>
        </div>
        
        <div className="text-center">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 text-base rounded-md shadow-md hover:shadow-lg transition-shadow">
            Start Building <ArrowRight className="w-4 h-4 ml-2 inline" />
          </Button>
          <p className="text-sm text-gray-400 mt-4">No credit card required • 5-minute setup</p>
        </div>
      </div>
    </section>
  );
}; 