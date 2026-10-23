import { SEO } from "../components/common/SEO"
import { Link } from "react-router-dom"
import { CTABannerSection } from "../components/sections/CTABannerSection"

export const PrivacyPage = () => {
  return (
    <>
      <SEO
        title="Privacy Policy — OneSash"
        description="Privacy policy and data handling principles of OneSash."
      />

      {/* Hero Header */}
      <section className="bg-white pt-32 pb-16 md:pt-40 md:pb-24 border-b border-[#E5E5EA]">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="space-y-4">
            <span className="text-xs font-semibold tracking-wider text-[#6E6E73] uppercase px-3.5 py-1 bg-[#F5F5F7] rounded-full border border-[#E5E5EA] inline-block">
              Legal & Governance
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-medium tracking-tight text-[#1D1D1F]">
              Privacy Policy
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
              <h2 className="text-lg font-heading font-semibold text-[#1D1D1F]">1. Overview</h2>
              <p>
                OneSash ("OneSash", "we", "us", or "our") respects your privacy. This policy explains how we handle information collected through our official website and project inquiry channels.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-heading font-semibold text-[#1D1D1F]">2. Information We Collect</h2>
              <p>
                We collect information that you voluntarily submit when inquiring about our software engineering services. This typically includes:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-[#6E6E73]">
                <li>Your name and business email address.</li>
                <li>Your phone number, if you choose to provide it.</li>
                <li>Project requirements, specifications, and scope descriptions.</li>
                <li>Contact preferences and communication records.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-heading font-semibold text-[#1D1D1F]">3. How We Use Information</h2>
              <p>
                Your enquiry is passed securely to our configured lead-management service so we can store and respond to it. Contact us to request an update or deletion. The information you provide is used strictly for technical discovery, preparing proposals, communicating about ongoing engagements, and maintaining business relationships. We do not sell, rent, or lease your contact information or project data to third parties.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-heading font-semibold text-[#1D1D1F]">4. Confidentiality & Project IP</h2>
              <p>
                All proprietary project documentation, technical architectures, and business logic shared with OneSash are treated with strict confidentiality. Non-disclosure agreements (NDAs) are routinely executed prior to in-depth technical discovery upon request.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-heading font-semibold text-[#1D1D1F]">5. Contact Information</h2>
              <p>
                If you have questions regarding this Privacy Policy or wish to request data updates, please contact us at:
              </p>
              <div className="p-4 bg-[#F5F5F7] rounded-xl border border-[#E5E5EA] text-xs space-y-1">
                <p className="font-semibold text-[#1D1D1F]">OneSash</p>
                <p>Email: <a href="mailto:onesash.contact@gmail.com" className="text-[#1D1D1F] hover:underline font-semibold">onesash.contact@gmail.com</a></p>
                <p>Phone: <a href="tel:+919980399557" className="text-[#1D1D1F] hover:underline font-semibold">+91 99803 99557</a> • WhatsApp: <a href="https://wa.me/918903467843" className="text-[#1D1D1F] hover:underline font-semibold">+91 89034 67843</a></p>
                <p className="text-[#6E6E73]">Locations: Chennai, India and Bangalore, India</p>
              </div>
            </section>

          </div>
        </div>
      </section>

      <CTABannerSection />
    </>
  )
}
