import Link from 'next/link';
import { ArrowRight } from "lucide-react";

export const FinalCtaSection = () => {
  return (
    <section className="py-20 sm:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to secure your AI agents?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed">
            Talk to us about deploying secure AI agent infrastructure for your organization.
          </p>
          
          <Link
            href="https://calendly.com/subramanya1997/introduction"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand hover:bg-brand/90 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Book a Demo
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
