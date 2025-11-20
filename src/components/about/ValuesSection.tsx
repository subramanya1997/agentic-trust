"use client";

import { Shield, Zap, Rocket } from "lucide-react";

const values = [
  {
    title: "Trust by Default",
    description:
      "We build zero-trust systems where every interaction is verified. Security isn't a feature—it's the foundation.",
    icon: Shield,
  },
  {
    title: "Ship with Speed",
    description:
      "Shipping is our feedback loop. We ship knowing the first version won't have everything, but it will work well. Every release is a data point.",
    icon: Rocket,
  },
  {
    title: "Automate Everything",
    description:
      "We're AI-native from day one. Whether it's infrastructure or customer workflows, we leverage AI to automate work at scale.",
    icon: Zap,
  },
];

export function ValuesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">
            Our Values
          </h2>
          <p className="text-xl text-zinc-600 leading-relaxed max-w-3xl mx-auto">
            We are AI-native and high-agency. We own our work with a very high bar
            and strive for excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-8 border border-zinc-200 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

