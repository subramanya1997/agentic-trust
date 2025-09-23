"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from 'react';
import { Check, AlertCircle } from "lucide-react";
import { submitEmailToGoogleForm } from "@/lib/googleFormSubmit";

export const FinalCtaSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");

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
        setEmail('');
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
    <section className="py-16 sm:py-20 md:py-28 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-1 sm:mb-2">
            Your agents. Your rules.
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 sm:mb-8">
            <span className="text-brand">Scale securely.</span>
          </h3>
          <p className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-12 leading-relaxed">
            The only agent management platform that maps your existing identity provider to granular tool permissions. 
            Built for enterprises running AI agents at scale.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSubscribe();
                }
              }}
              className="flex-1 py-4 sm:py-5 px-3 sm:px-4 text-sm sm:text-base rounded-lg bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-brand focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            />
            <Button 
              size="lg"
              className="bg-brand hover:bg-brand/90 text-brand-foreground font-semibold py-4 sm:py-5 px-6 sm:px-8 text-sm sm:text-base rounded-lg shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
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
                "Get Early Access"
              )}
            </Button>
          </div>
          
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <p className="mt-4 text-sm text-success flex items-center justify-center gap-2">
              <Check className="w-4 h-4" />
              Successfully subscribed! We&apos;ll notify you when early access opens.
            </p>
          )}
          
          {submitStatus === 'error' && errorMessage && (
            <p className="mt-4 text-sm text-destructive flex items-center justify-center gap-2">
              <AlertCircle className="w-4 h-4" />
              {errorMessage}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
