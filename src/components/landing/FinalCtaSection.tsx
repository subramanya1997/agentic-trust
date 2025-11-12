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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
            See your complete AI landscape
            <br />
            <span className="text-brand">in 15 minutes</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-10 leading-relaxed">
            Join forward-thinking enterprises measuring AI adoption, proficiency, and ROI. 
            Start with a personalized demo of your AI landscape.
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
              Thanks! We&apos;ll reach out to schedule your demo.
            </p>
          )}
          
          {submitStatus === 'error' && errorMessage && (
            <p className="mt-4 text-sm text-destructive flex items-center justify-center gap-2">
              <AlertCircle className="w-4 h-4" />
              {errorMessage}
            </p>
          )}

          {/* Trust Signals */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span>No credit card required</span>
            </div>
            <span className="text-gray-600">•</span>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span>Deploy in 1 day</span>
            </div>
            <span className="text-gray-600">•</span>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span>Enterprise-grade security</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
