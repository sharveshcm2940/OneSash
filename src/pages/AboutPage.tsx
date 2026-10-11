import React from "react"
import { SEO } from "../components/common/SEO"
import { MapPin } from "lucide-react"
import { CTABannerSection } from "../components/sections/CTABannerSection"

export const AboutPage: React.FC = () => {
  const engineeringPrinciples = [
    {
      title: "No Middlemen. Direct Developer Access.",
      desc: "When you discuss your requirements with OneSash, you speak directly with the engineers designing your schemas and writing your code. No non-technical account managers playing telephone games."
    },
    {
      title: "100% Code & Architecture Ownership",
      desc: "You own every single line of code, git commit, Docker container, and cloud configuration from Day 1. No vendor lock-in, no proprietary licenses, and no hidden exit fees."
    },
    {
      title: "Pragmatic Stacks Over Trend Chasing",
      desc: "We write clean, strictly-typed TypeScript, React, Node.js, Python, and PostgreSQL. We choose technologies with proven stability, clear documentation, and easy long-term hiring."
    },
    {
      title: "Verified Deliverables Every 10 Days",
      desc: "We ship functional, testable software to isolated cloud staging environments on regular cycles. You verify actual progress through working software, not speculative slide decks."
    }
  ]

  return (
    <>
      <SEO
        title="About Us — Small Team. Serious About Building Good Software | OneSash"
        description="OneSash is an independent software development studio based in Chennai, India and Bangalore, India. Discover our engineering approach and pragmatic development philosophy."
        keywords="About OneSash, software developers Chennai, software developers Bangalore, software studio India, custom software team India"
      />

      <main className="bg-[#FAFAF8]">
        
        {/* 1. Page Hero */}
        <section className="pt-24 pb-16 md:pt-28 md:pb-20 border-b border-[#E4E4E0] bg-[#FAFAF8]">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="max-w-3xl space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-semibold tracking-tight text-[#171717] leading-[1.1]">
                Small team.<br />
                Serious about building good software.
              </h1>

              <p className="text-base sm:text-lg text-[#646464] leading-relaxed pt-1">
                OneSash is an independent software development team based in Chennai, India and Bangalore, India. We work with businesses and founders to turn ideas, operational challenges, and product requirements into useful software.
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-4 text-xs text-[#646464]">
                <span className="flex items-center gap-1.5 font-medium text-[#171717]">
                  <MapPin className="w-3.5 h-3.5 text-[#1459D9]" />
                  Chennai, India & Bangalore, India
                </span>
                <span>•</span>
                <span className="font-medium text-[#171717]">
                  Independent & Founder-Operated
                </span>
                <span>•</span>
                <span className="font-medium text-[#171717]">
                  Zero Subcontracting
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. The Founding Story */}
        <section className="py-16 md:py-20 border-b border-[#E4E4E0] bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              <div className="lg:col-span-5 space-y-3">
                <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-[#171717] leading-tight">
                  Why we started OneSash in Chennai & Bangalore.
                </h2>
                <p className="text-xs sm:text-sm text-[#646464] leading-relaxed">
                  Most businesses that need custom software get caught between two bad options: massive IT outsourcers who treat them like ticket numbers, or freelance contractors who disappear halfway through delivery.
                </p>
              </div>

              <div className="lg:col-span-7 space-y-4 text-sm text-[#171717] leading-relaxed">
                <p>
                  We founded OneSash to offer a third alternative: a focused, independent engineering team that acts like an internal technical partner. We sit down with you, understand exactly how your orders, invoices, or customer dockets move through your company, and write durable software to automate the friction away.
                </p>
                <p className="text-[#646464]">
                  We don't pretend to have 500 enterprise consultants or glass skyscrapers in five countries. We are a compact, disciplined technical team based in Chennai, India and Bangalore, India. When you work with us, your project is our priority—not lost in a bureaucratic chain of command.
                </p>
                <p className="text-[#646464]">
                  Every system we deliver—from apartment billing engines and advocate case registers to kitchen display setups—is engineered to remain maintainable five years from now, with clean code, standard databases, and thorough documentation.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 3. Engineering Principles */}
        <section className="py-16 md:py-20 border-b border-[#E4E4E0] bg-[#FAFAF8]">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            
            <div className="max-w-2xl mb-12 space-y-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-[#171717]">
                Engineering Principles
              </h2>
              <p className="text-sm text-[#646464]">
                How we operate and deliver code every day.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {engineeringPrinciples.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 bg-white rounded-xl border border-[#E4E4E0] space-y-2 shadow-xs"
                >
                  <h3 className="text-base sm:text-lg font-heading font-semibold text-[#171717]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#646464] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 4. Studio Locations */}
        <section className="py-16 md:py-20 bg-white border-b border-[#E4E4E0]">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="p-6 sm:p-8 bg-[#FAFAF8] rounded-xl border border-[#E4E4E0] space-y-3">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#1459D9] block font-mono">
                  ENGINEERING STUDIO • CHENNAI, INDIA
                </span>
                <h3 className="text-lg font-heading font-semibold text-[#171717]">Chennai, India</h3>
                <p className="text-xs text-[#646464] leading-relaxed">
                  Database architecture, backend services, high-throughput systems, and client discovery.
                </p>
                <div className="pt-1 flex flex-wrap gap-3 text-xs">
                  <a href="tel:+919980399557" className="font-medium text-[#171717] hover:text-[#1459D9]">Call: +91 99803 99557</a>
                  <span>•</span>
                  <a href="https://wa.me/918903467843" target="_blank" rel="noopener noreferrer" className="font-medium text-[#10B981] hover:underline">WhatsApp: +91 89034 67843</a>
                </div>
              </div>

              <div className="p-6 sm:p-8 bg-[#FAFAF8] rounded-xl border border-[#E4E4E0] space-y-3">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#1459D9] block font-mono">
                  PRODUCT STUDIO • BANGALORE, INDIA
                </span>
                <h3 className="text-lg font-heading font-semibold text-[#171717]">Bangalore, India</h3>
                <p className="text-xs text-[#646464] leading-relaxed">
                  Digital platforms, business process automation, real-time web applications, and technical partnerships.
                </p>
                <div className="pt-1 flex flex-wrap gap-3 text-xs">
                  <a href="tel:+919980399557" className="font-medium text-[#171717] hover:text-[#1459D9]">Call: +91 99803 99557</a>
                  <span>•</span>
                  <a href="https://wa.me/918903467843" target="_blank" rel="noopener noreferrer" className="font-medium text-[#10B981] hover:underline">WhatsApp: +91 89034 67843</a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <CTABannerSection />

      </main>
    </>
  )
}
