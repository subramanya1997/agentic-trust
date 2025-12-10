import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "Terms of Service | Agentic Trust",
  description: "Terms of Service for Agentic Trust - Read our terms and conditions for using our MCP server platform and AI infrastructure services.",
  path: "/terms",
  keywords: ["terms of service", "legal terms", "MCP server terms", "AI infrastructure", "service agreement", "AgenticTrust"],
});

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            Last updated: June 2025
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing or using the Agentic Trust platform and services (the &quot;Service&quot;), you agree to be bound by these 
              Terms of Service (&quot;Terms&quot;). If you disagree with any part of these terms, you do not have permission to 
              access the Service.
            </p>
            <p className="text-gray-700 mb-4">
              These Terms apply to all visitors, users, and others who access or use the Service. By using our Service, 
              you represent that you are at least 18 years old and have the legal capacity to enter into these Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-700 mb-4">
              Agentic Trust provides a unified MCP (Model Context Protocol) server platform for production AI agents, 
              including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>API infrastructure for AI agent integration</li>
              <li>Authentication and authorization services</li>
              <li>Monitoring and analytics tools</li>
              <li>Deployment and scaling capabilities</li>
              <li>Related documentation and support services</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Account Registration</h2>
            <p className="text-gray-700 mb-4">
              To access certain features of our Service, you must register for an account. When you register, you agree to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security of your password and account</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Immediately notify us of any unauthorized use of your account</li>
            </ul>
            <p className="text-gray-700 mb-4">
              We reserve the right to refuse service, terminate accounts, or remove content at our sole discretion.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Acceptable Use Policy</h2>
            <p className="text-gray-700 mb-4">
              You agree not to use the Service to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Transmit malicious code or interfere with the Service</li>
              <li>Attempt to gain unauthorized access to any systems</li>
              <li>Engage in any activity that could damage our reputation</li>
              <li>Use the Service for any illegal or unauthorized purpose</li>
              <li>Resell or redistribute the Service without authorization</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property Rights</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Our Intellectual Property</h3>
            <p className="text-gray-700 mb-4">
              The Service and its original content, features, and functionality are owned by Agentic Labs Inc. 
              and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2 Your Content</h3>
            <p className="text-gray-700 mb-4">
              You retain ownership of any content you submit to the Service. By submitting content, you grant us a worldwide, 
              non-exclusive, royalty-free license to use, reproduce, and distribute your content in connection with the Service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Payment Terms</h2>
            <p className="text-gray-700 mb-4">
              If you subscribe to a paid plan:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>You agree to pay all fees according to the pricing plan you select</li>
              <li>Fees are non-refundable except as required by law</li>
              <li>We may change pricing with 30 days&apos; notice</li>
              <li>You authorize us to charge your payment method on a recurring basis</li>
              <li>You are responsible for all taxes associated with your use of the Service</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Privacy and Data Protection</h2>
            <p className="text-gray-700 mb-4">
              Your use of the Service is also governed by our Privacy Policy. By using the Service, you consent to our 
              collection and use of your information as described in the Privacy Policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Service Level Agreement</h2>
            <p className="text-gray-700 mb-4">
              We strive to provide reliable service but do not guarantee uninterrupted or error-free operation. Any service 
              level commitments are outlined in separate agreements for enterprise customers.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Disclaimers and Limitations of Liability</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">9.1 Disclaimers</h3>
            <p className="text-gray-700 mb-4 uppercase">
              THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS 
              OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR 
              NON-INFRINGEMENT.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">9.2 Limitation of Liability</h3>
            <p className="text-gray-700 mb-4 uppercase">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, AGENTIC TRUST SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, 
              CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Indemnification</h2>
            <p className="text-gray-700 mb-4">
              You agree to defend, indemnify, and hold harmless Agentic Trust and its officers, directors, employees, and 
              agents from any claims, damages, obligations, losses, liabilities, costs, or expenses arising from:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Your use of the Service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third party rights</li>
              <li>Any content you submit to the Service</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Termination</h2>
            <p className="text-gray-700 mb-4">
              We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, 
              for any reason, including breach of these Terms. Upon termination, your right to use the Service will cease 
              immediately.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Modifications to Terms</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify these Terms at any time. If we make material changes, we will notify you by 
              email or by posting a notice on our Service. Your continued use of the Service after any changes indicates 
              your acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Governing Law and Dispute Resolution</h2>
            <p className="text-gray-700 mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, 
              United States, without regard to its conflict of law provisions. Any disputes arising under these Terms 
              shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. General Provisions</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li><strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and Agentic Trust</li>
              <li><strong>Severability:</strong> If any provision is found unenforceable, the remaining provisions will continue in effect</li>
              <li><strong>Waiver:</strong> No waiver of any term shall be deemed a further or continuing waiver</li>
              <li><strong>Assignment:</strong> You may not assign these Terms without our prior written consent</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 font-semibold">Agentic Labs Inc.</p>
              <p className="text-gray-700">Website: https://agentictrust.com</p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
} 