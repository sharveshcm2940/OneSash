import { Link } from "react-router-dom"
import { SEO } from "../components/common/SEO"
import { CTABannerSection } from "../components/sections/CTABannerSection"
import { servicesData } from "../components/sections/ServicesSection"
import { CheckCircle2 } from "lucide-react"

export const ServicesPage = () => {
  return (
    <>
      <SEO
        title="Services & Engineering Capabilities | OneSash"
        description="Explore the 6 core software engineering disciplines offered by OneSash: Custom software, web apps, mobile engineering, applied AI, business automation, and cloud maintenance."
        keywords="OneSash services, custom software development Chennai, web applications, mobile apps, AI automation India, cloud deployments"
      />

      <main className="bg-[#FAFAF8]">
        
        {/* Page Header */}
        <section className="pt-24 pb-12 md:pt-28 md:pb-16 border-b border-[#E4E4E0] bg-[#FAFAF8]">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="max-w-3xl space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-semibold tracking-tight text-[#171717] leading-[1.1]">
                Software engineered around your business operations.
              </h1>

              <p className="text-base sm:text-lg text-[#646464] leading-relaxed pt-1">
                We design and build bespoke software, modern web platforms, mobile tools, and practical automation systems. Every engagement solves a specific operational problem and delivers code you own 100%.
              </p>

              {/* Jump to Services */}
              <div className="pt-4 flex flex-wrap gap-2 text-xs">
                {servicesData.map((s, idx) => (
                  <a
                    key={s.slug}
                    href={`#service-${idx + 1}`}
                    className="px-3 py-1.5 bg-[#F1F1EE] text-[#171717] hover:bg-[#EAEAE5] rounded-md border border-[#E4E4E0] font-medium transition-colors"
                  >
                    {s.title.split("&")[0].trim()}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6 Detailed Service Sections */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl space-y-16">
            {servicesData.map((service, idx) => (
              <article
                key={service.slug}
                id={`service-${idx + 1}`}
                className="bg-white rounded-xl border border-[#E4E4E0] p-6 sm:p-10 shadow-studio-card scroll-mt-24 space-y-8"
              >
                {/* Top Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E4E4E0] gap-4">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-[#171717]">
                      {service.title}
                    </h2>
                  </div>

                  <div className="flex items-center gap-3">
                    <Link
                      to={service.slug}
                      className="px-4 py-2 text-xs font-semibold text-[#171717] bg-[#F1F1EE] hover:bg-[#EAEAE5] rounded-md border border-[#E4E4E0] transition-colors"
                    >
                      Discipline Details
                    </Link>
                    <Link
                      to="/contact"
                      className="px-4 py-2 text-xs font-semibold text-white bg-[#171717] hover:bg-[#2c2c2c] rounded-md transition-colors"
                    >
                      Discuss Scope
                    </Link>
                  </div>
                </div>

                {/* 2-Column Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left: Problem & Solution (7 cols) */}
                  <div className="lg:col-span-7 space-y-5">
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#171717] block mb-1">
                        The Problem
                      </span>
                      <p className="text-xs sm:text-sm text-[#171717] font-medium leading-relaxed">
                        {service.problemSolved}
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#646464] block mb-1">
                        Our Approach
                      </span>
                      <p className="text-xs sm:text-sm text-[#646464] leading-relaxed">
                        {service.explanation}
                      </p>
                    </div>

                    {/* Verified Project Example */}
                    <div className="p-4 bg-[#FAFAF8] rounded-lg border border-[#E4E4E0] text-xs space-y-1">
                      <span className="text-[10px] uppercase font-semibold text-[#171717] block">
                        Verified Project Reference
                      </span>
                      <div className="font-semibold text-[#171717] text-sm">{service.projectExample.name}</div>
                      <p className="text-[#646464] leading-relaxed">{service.projectExample.description}</p>
                      <div className="pt-1">
                        <Link to="/portfolio" className="text-[#1459D9] font-medium hover:underline">
                          Inspect project breakdown in portfolio
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Right: Key Deliverables (5 cols) */}
                  <div className="lg:col-span-5 bg-[#F1F1EE] p-5 rounded-lg border border-[#E4E4E0] space-y-3">
                    <span className="text-xs font-semibold text-[#171717] uppercase tracking-wider block">
                      What You Receive
                    </span>
                    <ul className="space-y-2 text-xs text-[#171717]">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1459D9] shrink-0 mt-0.5" />
                          <span className="leading-snug text-[#171717]">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-2 border-t border-[#E4E4E0] text-[11px] text-[#646464]">
                      Full source code and infrastructure scripts included with zero recurring licensing.
                    </div>
                  </div>

                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Operating Commitments Box */}
        <section className="py-14 bg-white border-t border-b border-[#E4E4E0]">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
              <div className="p-5 bg-[#FAFAF8] rounded-lg border border-[#E4E4E0] space-y-1.5">
                <span className="font-semibold text-[#171717] block">100% In-House Developers</span>
                <p className="text-[#646464]">Direct access to senior engineers in Chennai, India and Bangalore, India. Zero outsourcing.</p>
              </div>
              <div className="p-5 bg-[#FAFAF8] rounded-lg border border-[#E4E4E0] space-y-1.5">
                <span className="font-semibold text-[#171717] block">Complete IP Ownership</span>
                <p className="text-[#646464]">Full git repository, schemas, and cloud accounts transferred directly to you.</p>
              </div>
              <div className="p-5 bg-[#FAFAF8] rounded-lg border border-[#E4E4E0] space-y-1.5">
                <span className="font-semibold text-[#171717] block">Standard Stacks</span>
                <p className="text-[#646464]">Built on TypeScript, React, Node.js, Python, PostgreSQL, and Docker.</p>
              </div>
              <div className="p-5 bg-[#FAFAF8] rounded-lg border border-[#E4E4E0] space-y-1.5">
                <span className="font-semibold text-[#171717] block">Regular Staging Demos</span>
                <p className="text-[#646464]">Inspect working cloud software every 10 business days before milestone sign-off.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Banner */}
        <CTABannerSection />

      </main>
    </>
  )
}
