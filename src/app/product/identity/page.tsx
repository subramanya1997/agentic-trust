import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { CodeBlock } from '@/components/ui/code-block';
import { TrustBadge } from '@/components/ui/badge-trust';
import { Key, Shield, RefreshCw, Users, Building, Lock } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Identity & Auth — Agentic Trust',
  description: 'Verifiable agent identities with seamless IdP integration. SAML, SCIM, OIDC support.',
};

const exampleCode = `// Sync agent identities from your IdP
const agentIdentity = await identityProvider.createAgent({
  name: "support-bot",
  serviceAccount: "bot-support@company.com",
  roles: ["SupportAgent"],
  tenant: "acme-corp",
  attributes: {
    department: "customer-success",
    region: "us-west"
  }
});

// Issue signed credentials with automatic rotation
const credentials = await issueCredentials(agentIdentity, {
  ttl: "1h",
  autoRotate: true,
  keyType: "ed25519"
});

// Verify agent identity on every request
const verified = await verifyAgentSignature(request, {
  publicKey: agentIdentity.publicKey,
  allowedIssuers: ["https://auth.company.com"]
});`;

const features = [
  {
    icon: Key,
    title: 'IdP Integration',
    description: 'Sync agent identities from Okta, Azure AD/Entra, Google Workspace. Map roles and attributes automatically.',
  },
  {
    icon: Shield,
    title: 'Service Accounts',
    description: 'Dedicated service accounts for agents with programmatic credential management and lifecycle controls.',
  },
  {
    icon: RefreshCw,
    title: 'Automatic Rotation',
    description: 'Keys and tokens rotate automatically. No manual intervention, no downtime, no credential sprawl.',
  },
  {
    icon: Users,
    title: 'SCIM Provisioning',
    description: 'Automatic user and group sync via SCIM 2.0. Deprovision agents when users leave your organization.',
  },
  {
    icon: Building,
    title: 'Multi-Tenant',
    description: 'Isolate agents by tenant, organization, or customer. One platform, infinite boundaries.',
  },
  {
    icon: Lock,
    title: 'Signed Credentials',
    description: 'Cryptographically signed agent identities. Verifiable provenance on every action.',
  },
];

export default function IdentityPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-brand/10 px-4 py-2 rounded-full mb-6">
                <Key className="w-4 h-4 text-brand" />
                <span className="text-sm font-semibold text-brand">Identity & Auth</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
                Verifiable Identity for Every Agent
              </h1>
              <p className="text-xl text-gray-600">
                Connect agents to your identity provider. Issue signed credentials with automatic rotation and revocation.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="bg-white rounded-xl p-6 border border-gray-200">
                    <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-brand" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Code Example */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Identity API</h2>
              <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
                Programmatic identity management with cryptographic guarantees
              </p>
              <CodeBlock code={exampleCode} language="typescript" />
            </div>

            {/* Supported Protocols */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12 border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Enterprise Identity Standards</h2>
              <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
                Works with your existing identity infrastructure
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <TrustBadge type="saml" label="SAML 2.0" size="lg" />
                <TrustBadge type="scim" label="SCIM 2.0" size="lg" />
                <TrustBadge type="oidc" label="OpenID Connect" size="lg" />
                <TrustBadge type="kms" label="KMS Integration" size="lg" />
              </div>

              {/* IdP Logos */}
              <div className="mt-12 pt-8 border-t border-gray-300">
                <p className="text-sm text-gray-600 text-center mb-6">Supported Identity Providers</p>
                <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
                  <span className="font-semibold">Okta</span>
                  <span className="font-semibold">Azure AD / Entra</span>
                  <span className="font-semibold">Google Workspace</span>
                  <span className="font-semibold">Auth0</span>
                  <span className="font-semibold">PingIdentity</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

