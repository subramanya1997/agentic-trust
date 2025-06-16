"use client";

import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { CategoryTabs } from "@/components/blog/CategoryTabs";
import { BlogPostList } from "@/components/blog/BlogPostList";
import { useState, useEffect } from "react";
import { Bell, Sparkles, Check, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { submitEmailToGoogleForm } from "@/lib/googleFormSubmit";
import { BlogPost } from "./blog-data";

export default function BlogPage() {
  const [email, setEmail] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>(['All']);
  const [isLoading, setIsLoading] = useState(true);
  
  // Fetch blog posts from API
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/blog-posts');
        if (!response.ok) throw new Error('Failed to fetch blog posts');
        
        const data = await response.json();
        setBlogPosts(data.blogPosts || []);
        setCategories(data.categories || ['All']);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        // Keep empty arrays on error
        setBlogPosts([]);
        setCategories(['All']);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);
  
  // Filter posts based on selected category
  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  // Handle email subscription
  const handleSubscribe = async () => {
    if (!email) {
      setSubmitStatus('error');
      setErrorMessage('Please enter your email address');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const result = await submitEmailToGoogleForm(email);
      
      if (result.success) {
        setSubmitStatus('success');
        setEmail(''); // Clear the email field
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Failed to subscribe. Please try again.');
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 max-w-7xl">
        {/* Coming Soon Featured Post Style */}
        <div className="relative mb-16 group">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand/10 via-muted/50 to-secondary/30 rounded-2xl opacity-60" />
          
          {/* Main container */}
          <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/50">
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Content Section */}
              <div className="lg:col-span-3 p-8 md:p-12 lg:p-16">
                {/* Category & Meta */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand bg-brand/10 px-3 py-1.5 rounded-full">
                    Coming Soon
                  </span>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Launching June 2025
                    </span>
                  </div>
                </div>
                
                {/* Title */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  Insights from the Future of AI Infrastructure
                </h1>
                
                {/* Description */}
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Be the first to read our deep dives into MCP servers, AI agent deployment strategies, 
                  enterprise security patterns, and real-world production experiences. Subscribe to get 
                  notified when we launch our blog.
                </p>
                
                {/* Subscribe Form */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Get notified when we publish</h3>
                  <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                    <Input 
                      type="email" 
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          handleSubscribe();
                        }
                      }}
                      className="flex-1 h-11"
                      disabled={isSubmitting}
                    />
                    <Button 
                      className="bg-brand hover:bg-brand/90 text-brand-foreground font-semibold h-11 px-6 disabled:opacity-50 disabled:cursor-not-allowed"
                      onClick={handleSubscribe}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Subscribing...
                        </>
                      ) : submitStatus === 'success' ? (
                        <>
                          <Check className="w-4 h-4 mr-2" />
                          Subscribed!
                        </>
                      ) : (
                        <>
                          <Bell className="w-4 h-4 mr-2" />
                          Subscribe
                        </>
                      )}
                    </Button>
                  </div>
                  
                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <p className="text-sm text-success-foreground flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      Successfully subscribed! We&apos;ll notify you when we launch.
                    </p>
                  )}
                  
                  {submitStatus === 'error' && errorMessage && (
                    <p className="text-sm text-destructive flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      {errorMessage}
                    </p>
                  )}
                  
                  {submitStatus === 'idle' && (
                    <p className="text-sm text-gray-500">
                      Join developers getting updates on AI agent infrastructure
                    </p>
                  )}
                </div>
              </div>
              
              {/* Visual Section */}
              <div className="lg:col-span-2 relative h-64 lg:h-auto bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8 overflow-hidden">
                {/* Animated background circles */}
                <div className="absolute inset-0">
                  <div className="absolute top-10 right-10 w-32 h-32 bg-brand/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
                  <div className="absolute bottom-10 left-10 w-32 h-32 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
                  <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
                </div>
                
                {/* Content Preview Cards */}
                <div className="relative space-y-4 max-w-xs">
                  {/* Preview Card 1 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg transform rotate-3 hover:rotate-0 transition-transform">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-brand/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-brand font-bold text-xs">01</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-800 mb-1">MCP Server Deep Dive</h4>
                        <p className="text-xs text-gray-600">Understanding the architecture behind unified AI tool access</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Preview Card 2 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg transform -rotate-2 hover:rotate-0 transition-transform">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-secondary-foreground font-bold text-xs">02</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-800 mb-1">Production Best Practices</h4>
                        <p className="text-xs text-gray-600">Scaling AI agents from MVP to enterprise</p>
                      </div>
                    </div>
                  </div>

                  {/* Preview Card 3 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg transform rotate-1 hover:rotate-0 transition-transform">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-muted-foreground font-bold text-xs">03</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-800 mb-1">Security & Compliance</h4>
                        <p className="text-xs text-gray-600">Enterprise-grade patterns for AI safety</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        {!isLoading && (
          <CategoryTabs 
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        )}

        {/* Blog Posts List */}
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="w-8 h-8 border-4 border-brand border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <BlogPostList posts={filteredPosts} />
        )}
      </main>
      <Footer />
    </div>
  );
} 