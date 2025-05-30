import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Header />
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            AgenticTrust Blog
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Insights, news, and updates from the AgenticTrust team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Placeholder for blog posts */}
          <div className="py-16 text-center border-2 border-dashed border-gray-300 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Blog Posts Coming Soon!
            </h2>
            <p className="text-gray-500">
              We're working on bringing you exciting content. Stay tuned!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 