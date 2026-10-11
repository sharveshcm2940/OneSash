import { SEO } from "../components/common/SEO"
import { Link } from "react-router-dom"
import { MapPin } from "lucide-react"
import { CTABannerSection } from "../components/sections/CTABannerSection"

export const AboutPage = () => {
  const milestones = [
    {
      year: "2024",
      quarter: "Q1",
      title: "OneSash Founded in Chennai",
      description: "Established as an independent software studio to engineer custom systems directly with business owners, eliminating agency middleman bloat."
    },
    {
      year: "2024",
      quarter: "Q2",
      title: "Delivered Apar Crown ERP",
      description: "Designed, built, and deployed the full facility management platform, automated dues ledger, and gate security workflow for residential communities."
    },
    {
      year: "2024",
      quarter: "Q3",
      title: "Launched Law Throne Legal CRM",
      description: "Engineered court causelist synchronization and secure confidential case filing dockets for litigation advocate practices."
    },
    {
      year: "2024",
      quarter: "Q4",
      title: "Deployed QR Food Processing KDS",
      description: "Shipped sub-second WebSocket kitchen display units and table QR ordering engines for high-volume cafe dining operations."
    },
    {
      year: "2025",
      quarter: "Q1",
      title: "PG Operations Suite & Bangalore Expansion",
      description: "Initiated multi-property hostel occupancy and rent automation suite, expanding project collaborations into Bangalore's startup corridor."
    }
  ]

  const teamMembers = [
    {
      name: "Sharvesh C M",
      role: "Founder & Lead Systems Architect",
      location: "Chennai, India",
      responsibilities: "System architecture, PostgreSQL database schema modeling, backend microservices, high-throughput API design, and client discovery.",
      focus: "Relational Data Integrity & Cloud Reliability",
      projects: "Architected Apar Crown database ledger & Law Throne court docket synchronization."
    },
    {
      name: "Naren Annamalai",
      role: "Full-Stack Engineer",
      location: "Chennai, India",
      responsibilities: "Frontend interface engineering with TypeScript & React, real-time WebSocket implementations, mobile responsiveness, and CI/CD pipelines.",
      focus: "UI Responsiveness & Distributed Web Workflows",
      projects: "Engineered QR Food Processing KDS screen and PG Management occupancy interface."
    }
  ]

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
        description="OneSash is an independent software development team based in Chennai and Bangalore. Meet our engineers and discover our pragmatic engineering philosophy."
        keywords="About OneSash, Chennai software developers, Sharvesh C M, Naren Annamalai, software studio Chennai, custom software team"
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
                OneSash is an independent software development team based in Chennai. We work with businesses and founders to turn ideas, operational challenges, and product requirements into useful software.
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-4 text-xs text-[#646464]">
                <span className="flex items-center gap-1.5 font-medium text-[#171717]">
                  <MapPin className="w-3.5 h-3.5 text-[#1459D9]" />
                  Headquartered in Chennai, India
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

        {/* 2. The Actual Founding Story */}
        <section className="py-16 md:py-20 border-b border-[#E4E4E0] bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              <div className="lg:col-span-5 space-y-3">
                <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-[#171717] leading-tight">
                  Why we started OneSash in Chennai.
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
                  We don't pretend to have 500 enterprise consultants or glass skyscrapers in five countries. We are a compact, disciplined technical team based in Chennai with an engineering presence in Bangalore. When you work with us, your project is our priority—not lost in a bureaucratic chain of command.
                </p>
                <p className="text-[#646464]">
                  Every system we deliver—from apartment billing engines and advocate case registers to kitchen display setups—is engineered to remain maintainable five years from now, with clean code, standard databases, and thorough documentation.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 3. Engineering Team Section */}
        <section className="py-16 md:py-20 border-b border-[#E4E4E0] bg-[#FAFAF8]">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-[#E4E4E0] gap-4">
              <div className="space-y-2 max-w-2xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold tracking-tight text-[#171717]">
                  The Team
                </h2>
                <p className="text-sm text-[#646464]">
                  No stock photos or invented personas. Here is the actual technical team responsible for your codebase.
                </p>
              </div>
            </div>

            {/* Team Profiles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="bg-white rounded-xl border border-[#E4E4E0] p-6 sm:p-8 shadow-studio-card space-y-5 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    
                    {/* Header */}
                    <div className="flex items-start justify-between pb-3 border-b border-[#E4E4E0]">
                      <div>
                        <h3 className="text-xl font-heading font-semibold text-[#171717]">
                          {member.name}
                        </h3>
                        <p className="text-xs font-medium text-[#1459D9] mt-0.5">
                          {member.role}
                        </p>
                      </div>
                      <span className="text-[11px] text-[#646464] bg-[#F1F1EE] px-2.5 py-1 rounded border border-[#E4E4E0]">
                        {member.location}
                      </span>
                    </div>

                    {/* Specific Technical Responsibilities */}
                    <div className="space-y-1 text-xs">
                      <span className="font-semibold uppercase tracking-wider text-[#171717] text-[10px] block">
                        Responsibilities
                      </span>
                      <p className="text-[#646464] leading-relaxed">
                        {member.responsibilities}
                      </p>
                    </div>

                    {/* Core Architectural Focus */}
                    <div className="p-3 bg-[#FAFAF8] rounded-md border border-[#E4E4E0] text-xs">
                      <span className="text-[10px] uppercase font-semibold text-[#646464] block">Focus Domain</span>
                      <span className="font-semibold text-[#171717]">{member.focus}</span>
                    </div>

                    {/* Relevant Delivered Projects */}
                    <div className="text-xs text-[#646464]">
                      <span className="text-[10px] uppercase font-semibold text-[#171717] block mb-1">Delivered Systems</span>
                      <p>{member.projects}</p>
                    </div>

                  </div>

                  <div className="pt-3 border-t border-[#E4E4E0] flex items-center justify-between text-xs text-[#646464]">
                    <span>Chennai Engineering Studio</span>
                    <Link to="/contact" className="text-[#1459D9] font-medium hover:underline">
                      Collaborate directly
                    </Link>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 4. Engineering Principles */}
        <section className="py-16 md:py-20 border-b border-[#E4E4E0] bg-white">
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
                  className="p-6 sm:p-8 bg-[#FAFAF8] rounded-xl border border-[#E4E4E0] space-y-2"
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

        {/* 5. Verified Milestones */}
        <section className="py-16 md:py-20 border-b border-[#E4E4E0] bg-[#FAFAF8]">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            
            <div className="max-w-2xl mb-12 space-y-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-[#171717]">
                Studio Milestones
              </h2>
              <p className="text-sm text-[#646464]">
                Our verified delivery history from 2024 to present.
              </p>
            </div>

            <div className="border-l border-[#E4E4E0] ml-3 pl-6 sm:pl-8 space-y-10">
              {milestones.map((m, idx) => (
                <div key={idx} className="relative space-y-1">
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#1459D9]" />
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-[#1459D9]">{m.year} {m.quarter}</span>
                    <span className="text-[#646464] text-xs">•</span>
                    <h3 className="text-sm sm:text-base font-semibold text-[#171717]">{m.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#646464] max-w-2xl leading-relaxed pt-0.5">
                    {m.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 6. Dual Studio Locations */}
        <section className="py-16 md:py-20 bg-white border-b border-[#E4E4E0]">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="p-6 sm:p-8 bg-[#FAFAF8] rounded-xl border border-[#E4E4E0] space-y-2">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#1459D9] block">
                  Chennai Studio (Headquarters)
                </span>
                <h3 className="text-lg font-heading font-semibold text-[#171717]">Chennai, Tamil Nadu</h3>
                <p className="text-xs text-[#646464] leading-relaxed">
                  Anna Salai & Guindy Tech Corridor, Chennai, Tamil Nadu 600032. Database architecture, backend services, and client discovery.
                </p>
                <div className="text-xs text-[#171717] pt-1">
                  onesash.contact@gmail.com
                </div>
              </div>

              <div className="p-6 sm:p-8 bg-[#FAFAF8] rounded-xl border border-[#E4E4E0] space-y-2">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#1459D9] block">
                  Bangalore Studio
                </span>
                <h3 className="text-lg font-heading font-semibold text-[#171717]">Bangalore, Karnataka</h3>
                <p className="text-xs text-[#646464] leading-relaxed">
                  Indiranagar Tech District, Bangalore, Karnataka 560038. Intelligent automation, real-time web applications, and technical partnerships.
                </p>
                <div className="text-xs text-[#171717] pt-1">
                  onesash.contact@gmail.com
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
