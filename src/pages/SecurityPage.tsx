import { SEO } from "../components/common/SEO"
import { Shield, Lock, FileCode, CheckCircle2, Key, Server, RefreshCw, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
import { CTABannerSection } from "../components/sections/CTABannerSection"

export const SecurityPage = () => {
  return (
    <>
      <SEO
        title="Security Standards & Engineering Governance — OneSash"
        description="Review OneSash software security practices, intellectual property ownership commitments, and repository protection standards."
      />

      {/* Hero Header */}
      <section className="bg-white pt-32 pb-20 md:pt-40 md:pb-28 border-b border-[#E5E5EA]">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-xs font-semibold tracking-wider text-[#6E6E73] uppercase px-3.5 py-1 bg-[#F5F5F7] rounded-full border border-[#E5E5EA]">
                Security & Engineering Governance
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-medium tracking-tight text-[#1D1D1F] leading-[1.04]">
              Security by Architecture. Not Afterthought.
            </h1>

            <p className="text-lg sm:text-xl text-[#6E6E73] font-normal leading-relaxed max-w-3xl pt-2">
              We engineer custom software systems with strict adherence to architectural defense-in-depth, encrypted transit, credential isolation, and unambiguous client IP ownership.
            </p>
          </div>
        </div>
      </section>

      {/* Security Pillars */}
      <section className="py-24 md:py-32 bg-[#FAFAFC] border-b border-[#E5E5EA]">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="space-y-8">
            
            {/* 1. IP & Code Ownership */}
            <div className="p-8 sm:p-10 bg-white rounded-3xl border border-[#E5E5EA] shadow-apple-subtle space-y-4">
              <div className="flex items-center gap-3 text-[#1D1D1F]">
                <FileCode className="w-5 h-5" />
                <h2 className="text-xl font-heading font-semibold text-[#1D1D1F]">
                  1. Complete Source Code & IP Ownership
                </h2>
              </div>
              <p className="text-sm text-[#48484A] leading-relaxed">
                Upon milestone delivery and contractual completion, 100% of the custom source code, documentation, schema migrations, and deployment configurations are transferred entirely to the client. OneSash does not retain proprietary vendor lock-in code or claim ownership over client systems.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-[#1D1D1F]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1D1D1F]" /> Full Git Repository Handover
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1D1D1F]" /> Clean Docker Build Scripts Included
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1D1D1F]" /> Zero Proprietary Lock-In
                </span>
              </div>
            </div>

            {/* 2. Confidentiality & Non-Disclosure */}
            <div className="p-8 sm:p-10 bg-white rounded-3xl border border-[#E5E5EA] shadow-apple-subtle space-y-4">
              <div className="flex items-center gap-3 text-[#1D1D1F]">
                <Lock className="w-5 h-5" />
                <h2 className="text-xl font-heading font-semibold text-[#1D1D1F]">
                  2. Confidentiality & Bilateral Non-Disclosure (NDA)
                </h2>
              </div>
              <p className="text-sm text-[#48484A] leading-relaxed">
                We sign formal bilateral Non-Disclosure Agreements prior to reviewing client requirements, source code, or confidential operational data. All client materials remain confidential and are accessible strictly to developers actively assigned to the project.
              </p>
            </div>

            {/* 3. Secrets Management */}
            <div className="p-8 sm:p-10 bg-white rounded-3xl border border-[#E5E5EA] shadow-apple-subtle space-y-4">
              <div className="flex items-center gap-3 text-[#1D1D1F]">
                <Key className="w-5 h-5" />
                <h2 className="text-xl font-heading font-semibold text-[#1D1D1F]">
                  3. Credential & Secrets Hygiene
                </h2>
              </div>
              <p className="text-sm text-[#48484A] leading-relaxed">
                We enforce strict credential hygiene across all client projects:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-[#48484A] list-disc pl-5">
                <li>Zero hardcoded API keys, database connection strings, or credentials committed to source repositories.</li>
                <li>Environment-based secret management utilizing AWS Secrets Manager, GCP Secret Manager, or encrypted vaults.</li>
                <li>Automated Git pre-commit hooks preventing accidental secret leakage.</li>
              </ul>
            </div>

            {/* 4. Database Security */}
            <div className="p-8 sm:p-10 bg-white rounded-3xl border border-[#E5E5EA] shadow-apple-subtle space-y-4">
              <div className="flex items-center gap-3 text-[#1D1D1F]">
                <Server className="w-5 h-5" />
                <h2 className="text-xl font-heading font-semibold text-[#1D1D1F]">
                  4. Relational Database & Transport Security
                </h2>
              </div>
              <p className="text-sm text-[#48484A] leading-relaxed">
                All production databases use parameterized queries and ORM layers to eliminate SQL injection vulnerabilities. Data in transit is strictly encrypted using TLS 1.3, and cloud storage volumes are encrypted at rest with industry standard AES-256.
              </p>
            </div>

            {/* 5. Continuous Scanning */}
            <div className="p-8 sm:p-10 bg-white rounded-3xl border border-[#E5E5EA] shadow-apple-subtle space-y-4">
              <div className="flex items-center gap-3 text-[#1D1D1F]">
                <RefreshCw className="w-5 h-5" />
                <h2 className="text-xl font-heading font-semibold text-[#1D1D1F]">
                  5. Automated Vulnerability Scanning & CI/CD
                </h2>
              </div>
              <p className="text-sm text-[#48484A] leading-relaxed">
                We integrate automated static code analysis and npm/pip vulnerability scanners into continuous integration pipelines to identify and remediate vulnerable third-party dependencies before code hits staging or production.
              </p>
            </div>

            {/* Contact for Security */}
            <div className="p-6 bg-[#F5F5F7] rounded-2xl border border-[#E5E5EA] text-xs text-[#6E6E73] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <span className="font-medium text-[#1D1D1F]">Have specific security requirements or compliance audit questions?</span>
              <a
                href="mailto:onesash.contact@gmail.com?subject=Security Inquiry"
                className="text-[#1D1D1F] hover:underline font-semibold"
              >
                Contact Security Team →
              </a>
            </div>

          </div>
        </div>
      </section>

      <CTABannerSection />
    </>
  )
}
