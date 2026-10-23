import { Link } from "react-router-dom"
import { SEO } from "../../components/common/SEO"
import { CTABannerSection } from "../../components/sections/CTABannerSection"
import { ProductInterfaceMockup } from "../../components/ui/ProductInterfaceMockup"
import { CheckCircle2 } from "lucide-react"

export const CustomSoftwarePage = () => {
  return (
    <>
      <SEO
        title="Custom Software Development — Bespoke Systems & Operations Portals | OneSash"
        description="We engineer bespoke business systems, operations portals, and database architectures mapped to how your company actually works. Built by OneSash."
        keywords="custom software development, business software Chennai, enterprise portals, bespoke software engineering, relational database design"
      />

      <main className="bg-[#FAFAF8]">
        
        {/* Service Hero */}
        <section className="pt-24 pb-16 md:pt-28 md:pb-20 border-b border-[#E4E4E0]">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-5">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-semibold tracking-tight text-[#171717] leading-[1.1]">
                  Software built specifically for your internal operations.
                </h1>

                <p className="text-base sm:text-lg text-[#646464] leading-relaxed max-w-2xl">
                  When off-the-shelf software doesn't fit your business rules, you end up maintaining dozens of fragile spreadsheets. We engineer unified software platforms that map 1-to-1 to your exact internal hierarchies, compliance requirements, and daily workflows.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    to="/contact?service=custom-software"
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-[#171717] hover:bg-[#2c2c2c] rounded-md transition-colors"
                  >
                    Discuss Your Custom Software Project
                  </Link>
                  <Link
                    to="/portfolio"
                    className="px-5 py-2.5 text-xs font-semibold text-[#171717] bg-white hover:bg-[#F1F1EE] rounded-md border border-[#E4E4E0] transition-colors"
                  >
                    View Apar Crown & Law Throne
                  </Link>
                </div>
              </div>

              {/* Right: Application Interface */}
              <div className="lg:col-span-5 space-y-2">
                <div className="border border-[#E4E4E0] rounded-xl overflow-hidden bg-white shadow-studio-card">
                  <ProductInterfaceMockup type="apartment-management" className="w-full border-0 rounded-none shadow-none" />
                </div>
                <p className="text-[11px] text-[#646464] text-center">
                  Apar Crown — Custom facility operations ledger and unit tracking built by OneSash
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 1. What This Service Provides & 2. Problems It Solves */}
        <section className="py-16 md:py-20 border-b border-[#E4E4E0] bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
              
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-[#171717]">
                  Why businesses outgrow generic SaaS tools.
                </h2>
                <div className="space-y-3 text-xs sm:text-sm text-[#646464] leading-relaxed">
                  <p>
                    <strong className="text-[#171717]">Spreadsheet Overload: </strong>
                    Critical data is siloed across separate Excel or Google sheets where formula errors, duplicate customer records, and accidental edits cause financial discrepancies.
                  </p>
                  <p>
                    <strong className="text-[#171717]">Clunky Monthly Subscriptions: </strong>
                    Paying high recurring seat costs for bulky enterprise suites where your team uses only 15% of the features while being forced into someone else's rigid workflow.
                  </p>
                  <p>
                    <strong className="text-[#171717]">Zero IP Ownership: </strong>
                    If a SaaS vendor increases prices or shuts down an API, your business is held hostage. With custom software, you own the entire codebase, database, and infrastructure forever.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-[#171717]">
                  Bespoke software tailored to your company.
                </h2>
                <div className="space-y-3 text-xs sm:text-sm text-[#171717]">
                  <div className="flex items-start gap-2.5 p-3.5 bg-[#FAFAF8] rounded-lg border border-[#E4E4E0]">
                    <CheckCircle2 className="w-4 h-4 text-[#171717] shrink-0 mt-0.5" />
                    <div>
                      <strong>Internal Operations Portals: </strong>
                      Centralized web dashboards for tracking service orders, billing ledgers, staff assignments, and inventory.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3.5 bg-[#FAFAF8] rounded-lg border border-[#E4E4E0]">
                    <CheckCircle2 className="w-4 h-4 text-[#171717] shrink-0 mt-0.5" />
                    <div>
                      <strong>Role-Based Access Control (RBAC): </strong>
                      Strict multi-level user permissions (Admin, Manager, Field Staff, Client) ensuring everyone sees only what their role permits.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3.5 bg-[#FAFAF8] rounded-lg border border-[#E4E4E0]">
                    <CheckCircle2 className="w-4 h-4 text-[#171717] shrink-0 mt-0.5" />
                    <div>
                      <strong>ACID-Compliant Relational Schemas: </strong>
                      Strict PostgreSQL database architectures designed with verified foreign key constraints to prevent corrupt or orphan data.
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. Deliverables */}
        <section className="py-16 md:py-20 border-b border-[#E4E4E0] bg-[#F1F1EE]">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="max-w-2xl mb-10 space-y-2">
              <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-[#171717]">
                What you receive upon project completion.
              </h2>
              <p className="text-sm text-[#646464]">
                Everything required to run, scale, and maintain your software independently.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Complete Source Code Repository", desc: "Clean, modular TypeScript repository on your GitHub or GitLab organization with complete commit history." },
                { title: "Production Cloud Deployment", desc: "Automated Docker deployment with zero-downtime CI/CD pipelines, SSL certificates, and database backups." },
                { title: "Normalized Database Architecture", desc: "Well-documented PostgreSQL migration scripts, index configurations, and disaster recovery runbooks." },
                { title: "Responsive Web Interface", desc: "Accessible, fast UI optimized for desktop monitors, laptops, and mobile screens alike." },
                { title: "Interactive Staging Environment", desc: "Isolated preview deployment where your internal team can test new features before they hit production." },
                { title: "Team Training & Technical Documentation", desc: "Comprehensive onboarding guides, API endpoint references, and administrative walkthroughs." },
              ].map((deliv, idx) => (
                <div key={idx} className="p-6 bg-white rounded-xl border border-[#E4E4E0] shadow-studio-card space-y-2">
                  <h3 className="text-sm font-semibold text-[#171717]">{deliv.title}</h3>
                  <p className="text-xs text-[#646464] leading-relaxed">{deliv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Delivery Lifecycle */}
        <section className="py-16 md:py-20 border-b border-[#E4E4E0] bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="max-w-2xl mb-10 space-y-2">
              <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-[#171717]">
                How we take your custom software from discovery to live deployment.
              </h2>
              <p className="text-sm text-[#646464]">
                Direct collaboration from Day 1 with senior developers.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
              <div className="p-6 bg-[#FAFAF8] rounded-xl border border-[#E4E4E0] space-y-2">
                <span className="font-semibold text-xs text-[#171717]">Step 1</span>
                <h3 className="text-sm font-semibold text-[#171717]">Discovery & Schema Blueprint</h3>
                <p className="text-[#646464]">We sit down with your department leads to map data flows, edge cases, and user permissions before writing code.</p>
              </div>

              <div className="p-6 bg-[#FAFAF8] rounded-xl border border-[#E4E4E0] space-y-2">
                <span className="font-semibold text-xs text-[#171717]">Step 2</span>
                <h3 className="text-sm font-semibold text-[#171717]">Interface Prototyping</h3>
                <p className="text-[#646464]">Every screen and button is reviewed in clickable Figma prototypes so your team signs off on the exact experience.</p>
              </div>

              <div className="p-6 bg-[#FAFAF8] rounded-xl border border-[#E4E4E0] space-y-2">
                <span className="font-semibold text-xs text-[#171717]">Step 3</span>
                <h3 className="text-sm font-semibold text-[#171717]">Sprint Engineering</h3>
                <p className="text-[#646464]">You test working features every 10 business days on an isolated cloud staging server with live sample data.</p>
              </div>

              <div className="p-6 bg-[#FAFAF8] rounded-xl border border-[#E4E4E0] space-y-2">
                <span className="font-semibold text-xs text-[#171717]">Step 4</span>
                <h3 className="text-sm font-semibold text-[#171717]">Launch & Handover</h3>
                <p className="text-[#646464]">We manage domain routing, TLS hardening, database backups, and transfer all credentials and repositories to you.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Relevant Project Examples */}
        <section className="py-16 md:py-20 border-b border-[#E4E4E0] bg-[#FAFAF8]">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#E4E4E0] gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-[#171717]">
                  Verified Custom Systems in Active Production
                </h2>
              </div>
              <Link to="/portfolio" className="text-xs font-semibold text-[#171717] hover:underline">
                See all project case studies
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
              <div className="p-6 sm:p-8 bg-white rounded-xl border border-[#E4E4E0] shadow-studio-card space-y-3">
                <h3 className="text-xl font-heading font-semibold text-[#171717]">Apar Crown — Apartment Operations ERP</h3>
                <p className="text-xs sm:text-sm text-[#646464] leading-relaxed">
                  Replaced chaotic paper receipt books and WhatsApp groups across 320 residential units with an automated maintenance billing ledger, visitor security log, and ticket SLA escalation tree.
                </p>
                <div className="pt-1 text-xs text-[#646464]">React • Node.js • PostgreSQL • Redis</div>
              </div>

              <div className="p-6 sm:p-8 bg-white rounded-xl border border-[#E4E4E0] shadow-studio-card space-y-3">
                <h3 className="text-xl font-heading font-semibold text-[#171717]">Law Throne — Litigation Practice CRM</h3>
                <p className="text-xs sm:text-sm text-[#646464] leading-relaxed">
                  Synchronizes daily court hearing causelists across High Courts and District Courts, encrypts confidential client dossiers, and tracks retainer billings for advocate chambers.
                </p>
                <div className="pt-1 text-xs text-[#646464]">React • Python • FastAPI • PostgreSQL • Docker</div>
              </div>
            </div>
          </div>
        </section>

        <CTABannerSection />

      </main>
    </>
  )
}
