"use client";

import { useState } from "react";
import { Bell, Check, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { submitEmailToGoogleForm } from "@/lib/googleFormSubmit";

interface EmailSubscriptionProps {
  className?: string;
  variant?: 'default' | 'compact';
  showDescription?: boolean;
}

export function EmailSubscription({ 
  className = "", 
  variant = 'default',
  showDescription = true 
}: EmailSubscriptionProps) {
  const [email, setEmail] = useState("");
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

  const isCompact = variant === 'compact';

  return (
    <div className={`space-y-4 ${className}`}>
      {!isCompact && (
        <h3 className="text-lg font-semibold text-gray-900">Get notified when we publish</h3>
      )}
      
      <div className={`flex flex-col sm:flex-row gap-3 ${isCompact ? 'max-w-sm' : 'max-w-md'}`}>
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
          className={`flex-1 ${isCompact ? 'h-10' : 'h-11'}`}
          disabled={isSubmitting}
        />
        <Button 
          className={`bg-brand hover:bg-brand/90 text-brand-foreground font-semibold disabled:opacity-50 disabled:cursor-not-allowed ${
            isCompact ? 'h-10 px-4' : 'h-11 px-6'
          }`}
          onClick={handleSubscribe}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
              {isCompact ? 'Subscribing' : 'Subscribing...'}
            </>
          ) : submitStatus === 'success' ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              {isCompact ? 'Done!' : 'Subscribed!'}
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
        <p className={`text-success-foreground flex items-center gap-2 ${isCompact ? 'text-xs' : 'text-sm'}`}>
          <Check className="w-4 h-4" />
          Successfully subscribed! We&apos;ll notify you when we launch.
        </p>
      )}
      
      {submitStatus === 'error' && errorMessage && (
        <p className={`text-destructive flex items-center gap-2 ${isCompact ? 'text-xs' : 'text-sm'}`}>
          <AlertCircle className="w-4 h-4" />
          {errorMessage}
        </p>
      )}
      
      {submitStatus === 'idle' && showDescription && (
        <p className={`text-gray-500 ${isCompact ? 'text-xs' : 'text-sm'}`}>
          Join developers getting updates on AI agent infrastructure
        </p>
      )}
    </div>
  );
} 