import { SEO } from "../components/common/SEO"
import { Link } from "react-router-dom"
import { CTABannerSection } from "../components/sections/CTABannerSection"

export const TermsPage = () => {
  return (
    <>
      <SEO
        title="Terms of Service — OneSash"
        description="Terms of service and engagement standards for OneSash."
      />

      {/* Hero Header */}
      <section className="bg-white pt-32 pb-16 md:pt-40 md:pb-24 border-b border-[#E5E5EA]">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="space-y-4">
            <span className="text-xs font-semibold tracking-wider text-[#6E6E73] uppercase px-3.5 py-1 bg-[#F5F5F7] rounded-full border border-[#E5E5EA] inline-block">
              Legal & Governance
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-medium tracking-tight text-[#1D1D1F]">
              Terms of Service
            </h1>
            <p className="text-xs text-[#86868B] font-medium">
              Effective Date: January 1, 2026 • OneSash
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-[#FAFAFC] border-b border-[#E5E5EA]">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="p-8 sm:p-12 bg-white rounded-3xl border border-[#E5E5EA] shadow-apple-subtle space-y-8 text-[#48484A] text-sm leading-relaxed">
            
            <section className="space-y-3">
              <h2 className="text-lg font-heading font-semibold text-[#1D1D1F]">1. Agreement to Terms</h2>
              <p>
                By accessing or using the OneSash website, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use our website.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-heading font-semibold text-[#1D1D1F]">2. Professional Services Engagements</h2>
              <p>
                All software engineering, custom development, architectural consulting, and maintenance services performed by OneSash are governed by specific client Master Service Agreements (MSAs) and Statements of Work (SOWs). Website descriptions provide high-level capabilities and do not constitute a binding unilateral contract.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-heading font-semibold text-[#1D1D1F]">3. Intellectual Property Rights</h2>
              <p>
                All website content, design systems, and documentation published on this website are the intellectual property of OneSash unless otherwise noted. Software delivered to clients under formal agreements becomes the exclusive property of the client in accordance with project contracts.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-heading font-semibold text-[#1D1D1F]">4. Limitation of Liability</h2>
              <p>
                This website is provided "as is" without warranties of any kind. OneSash will not be liable for any damages arising out of the use or inability to use this website.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-heading font-semibold text-[#1D1D1F]">5. Inquiries & Contact</h2>
              <p>
                For legal inquiries regarding services, terms, or contracts:
              </p>
              <div className="p-4 bg-[#F5F5F7] rounded-xl border border-[#E5E5EA] text-xs space-y-1">
                <p className="font-semibold text-[#1D1D1F]">OneSash</p>
                <p>Email: <a href="mailto:onesash.contact@gmail.com" className="text-[#0071E3] hover:underline font-medium">onesash.contact@gmail.com</a></p>
                <p className="text-[#6E6E73]">Locations: Chennai, Tamil Nadu & Bangalore, Karnataka, India</p>
              </div>
            </section>

          </div>
        </div>
      </section>

      <CTABannerSection />
    </>
  )
}
