import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "Responsible Disclosure Policy | Agentic Trust",
  description: "Responsible Disclosure Policy for Agentic Trust - Report security vulnerabilities safely and responsibly to help us protect our MCP server infrastructure.",
  path: "/responsible-disclosure",
  keywords: ["security", "responsible disclosure", "vulnerability reporting", "bug bounty", "security research", "AgenticTrust"],
});

export default function ResponsibleDisclosurePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">Responsible Disclosure Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            Last updated: June 2025
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
            <p className="text-gray-700 mb-4">
              At Agentic Trust, we take the security of our systems and our users&apos; data extremely seriously. We appreciate 
              the work of security researchers and the broader community in helping us maintain a high standard of security.
            </p>
            <p className="text-gray-700 mb-4">
              This policy outlines how to report security vulnerabilities to us in a responsible manner, and what you can 
              expect from us in return.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Scope</h2>
            <p className="text-gray-700 mb-4">
              This policy applies to any security vulnerabilities discovered in:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>The Agentic Trust platform and API</li>
              <li>Our official client libraries and SDKs</li>
              <li>Our website and web applications</li>
              <li>Our mobile applications (if applicable)</li>
              <li>Any other services operated by Agentic Trust</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Report a Vulnerability</h2>
            
            <div className="bg-brand/5 border-l-4 border-brand p-6 mb-6">
              <p className="text-gray-700 font-semibold mb-2">Important:</p>
              <p className="text-gray-700">
                Please report security vulnerabilities to us privately through secure channels on our website.
              </p>
            </div>

            <p className="text-gray-700 mb-4">
              When reporting a vulnerability, please include:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>A detailed description of the vulnerability</li>
              <li>Steps to reproduce the issue</li>
              <li>Potential impact of the vulnerability</li>
              <li>Any proof-of-concept code (if applicable)</li>
              <li>Your suggested remediation (if any)</li>
            </ul>
            
            <p className="text-gray-700 mb-4">
              Please encrypt sensitive information when reporting vulnerabilities. PGP keys are available upon request.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Commitment</h2>
            <p className="text-gray-700 mb-4">
              When you report a vulnerability to us, we commit to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Acknowledge receipt of your report within 48 hours</li>
              <li>Provide an initial assessment within 5 business days</li>
              <li>Keep you informed about our progress</li>
              <li>Credit you for the discovery (unless you prefer to remain anonymous)</li>
              <li>Not pursue legal action against you if you follow this policy</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Guidelines for Researchers</h2>
            <p className="text-gray-700 mb-4">
              To ensure responsible disclosure, please:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Make a good faith effort to avoid privacy violations and disruptions</li>
              <li>Only interact with accounts you own or with explicit permission</li>
              <li>Do not access or modify user data without permission</li>
              <li>Do not perform actions that could harm our services or users</li>
              <li>Do not publicly disclose the vulnerability before we&apos;ve addressed it</li>
              <li>Do not demand compensation for reporting vulnerabilities</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Out of Scope</h2>
            <p className="text-gray-700 mb-4">
              The following issues are generally out of scope:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Denial of Service (DoS) attacks</li>
              <li>Social engineering or phishing</li>
              <li>Physical attacks against our facilities or employees</li>
              <li>Issues in third-party services or libraries (unless they directly impact our security)</li>
              <li>Vulnerabilities requiring unlikely user interaction</li>
              <li>Recently disclosed vulnerabilities (please allow us reasonable time to patch)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Recognition</h2>
            <p className="text-gray-700 mb-4">
              We believe in recognizing the efforts of security researchers who help us improve our security. With your 
              permission, we may:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Acknowledge your contribution in our security updates</li>
              <li>List your name in our security hall of fame</li>
              <li>Provide a letter of appreciation</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Legal Safe Harbor</h2>
            <p className="text-gray-700 mb-4">
              We consider security research conducted in accordance with this policy to be:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Authorized concerning any applicable anti-hacking laws</li>
              <li>Exempt from restrictions in our Terms of Service that would interfere with security research</li>
              <li>Conducted in good faith</li>
            </ul>
            <p className="text-gray-700 mb-4">
              We will not initiate legal action against researchers who follow this policy. If legal action is initiated 
              by a third party, we will take steps to make it known that your actions were conducted in compliance with 
              this policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Response Time:</strong> Within 48 hours
              </p>
              <p className="text-gray-700">
                <strong>Encrypted Communication:</strong> PGP key available upon request
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acknowledgments</h2>
            <p className="text-gray-700 mb-4">
              We would like to thank the following security researchers for their responsible disclosure:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-500 italic">
                No vulnerabilities have been reported yet. Be the first to help us improve our security!
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
} 