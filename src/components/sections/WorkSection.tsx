import { Link } from "react-router-dom"
import { ProductInterfaceMockup } from "../ui/ProductInterfaceMockup"

export const WorkSection = () => {
  return (
    <section id="work" className="bg-[#F1F1EE] py-16 md:py-20 border-b border-[#E4E4E0]">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-[#E4E4E0] gap-6">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold tracking-tight text-[#171717]">
              Selected Work
            </h2>
            <p className="text-base text-[#646464] max-w-xl">
              Production software we have designed, engineered, and deployed for businesses.
            </p>
          </div>
          <div>
            <Link
              to="/portfolio"
              className="text-xs font-semibold text-[#1459D9] hover:underline"
            >
              View full portfolio & technical specs
            </Link>
          </div>
        </div>

        {/* Project Showcases */}
        <div className="space-y-16 pt-12">
          
          {/* Project 1: Apar Crown */}
          <div className="bg-white rounded-xl border border-[#E4E4E0] p-6 sm:p-10 shadow-studio-card">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-[#E6F4EA] text-[#137333]">
                    Active Deployment
                  </span>
                </div>
                
                <div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-[#171717]">
                    Apar Crown
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[#646464] mt-0.5">
                    Apartment & Facility Management Platform
                  </p>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-[#646464] leading-relaxed">
                  <p>
                    <strong className="text-[#171717] font-semibold">The Problem: </strong>
                    Residential associations struggled with unorganized WhatsApp groups, manual paper receipt books, and zero visibility into overdue maintenance collections.
                  </p>
                  <p>
                    <strong className="text-[#171717] font-semibold">Our Solution: </strong>
                    An integrated web management portal with an automated maintenance fee ledger, instant UPI reconciliations, ticket escalation trees, and gate security visitor logging.
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="pt-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#646464] block mb-2">Technology Stack</span>
                  <div className="flex flex-wrap gap-1.5">
                    {["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Redis"].map(t => (
                      <span key={t} className="px-2.5 py-1 bg-[#F1F1EE] rounded text-[11px] text-[#171717] border border-[#E4E4E0]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/portfolio#apar-crown"
                    className="text-xs font-semibold text-[#1459D9] hover:underline"
                  >
                    Read complete case study & deliverables
                  </Link>
                </div>
              </div>

              {/* Interface Visual */}
              <div className="lg:col-span-7">
                <ProductInterfaceMockup type="apartment-management" className="w-full" />
              </div>

            </div>
          </div>

          {/* Project 2: Law Throne */}
          <div className="bg-[#FAFAF8] rounded-xl border border-[#E4E4E0] p-6 sm:p-10 shadow-studio-card">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Visual */}
              <div className="lg:col-span-7 order-2 lg:order-1">
                <ProductInterfaceMockup type="legal-crm" className="w-full" />
              </div>

              {/* Info */}
              <div className="lg:col-span-5 space-y-4 order-1 lg:order-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-[#E6F4EA] text-[#137333]">
                    Active Deployment
                  </span>
                </div>
                
                <div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-[#171717]">
                    Law Throne
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[#646464] mt-0.5">
                    Legal Practice CRM & Case Lifecycle Platform
                  </p>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-[#646464] leading-relaxed">
                  <p>
                    <strong className="text-[#171717] font-semibold">The Problem: </strong>
                    Litigation lawyers lose billable hours manually cross-referencing daily court causelists across High Courts and District Courts while managing paper case dockets across multiple associates.
                  </p>
                  <p>
                    <strong className="text-[#171717] font-semibold">Our Solution: </strong>
                    OneSash automated court diary synchronization, securely encrypted case filings with role-scoped access, and built retainer billing tracking.
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="pt-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#646464] block mb-2">Technology Stack</span>
                  <div className="flex flex-wrap gap-1.5">
                    {["React", "TypeScript", "Python / FastAPI", "PostgreSQL", "Docker", "S3 Storage"].map(t => (
                      <span key={t} className="px-2.5 py-1 bg-[#F1F1EE] rounded text-[11px] text-[#171717] border border-[#E4E4E0]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/portfolio#law-throne"
                    className="text-xs font-semibold text-[#1459D9] hover:underline"
                  >
                    Explore Law Throne architecture
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* Project 3 & 4: QR Food Processing System & PG Management System */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* QR Food Processing */}
            <div className="bg-white rounded-xl border border-[#E4E4E0] p-6 sm:p-8 shadow-studio-card space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-[#E6F4EA] text-[#137333]">
                    Active Deployment
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-heading font-semibold text-[#171717]">
                    QR Food Processing System
                  </h3>
                  <p className="text-xs text-[#646464] mt-0.5">
                    Contactless Table Ordering & Kitchen Display Engine
                  </p>
                </div>

                <p className="text-xs text-[#646464] leading-relaxed">
                  Sub-second WebSocket order dispatching for high-volume cafes. Customers scan dynamic QR menus to order and pay via UPI, while tickets route immediately to multi-station kitchen display units.
                </p>

                <div className="pt-2">
                  <ProductInterfaceMockup type="qr-food" className="w-full" />
                </div>
              </div>

              <div className="pt-4 border-t border-[#E4E4E0] flex items-center justify-between text-xs">
                <span className="text-[#646464] text-[11px]">React • Node.js • WebSockets • MongoDB</span>
                <Link to="/portfolio#qr-food" className="font-semibold text-[#1459D9] hover:underline">
                  View Details
                </Link>
              </div>
            </div>

            {/* PG Management System */}
            <div className="bg-white rounded-xl border border-[#E4E4E0] p-6 sm:p-8 shadow-studio-card space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-[#FEF7E0] text-[#B06000]">
                    In Active Development
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-heading font-semibold text-[#171717]">
                    PG Management System
                  </h3>
                  <p className="text-xs text-[#646464] mt-0.5">
                    Hostel & Paying Guest Operations Platform
                  </p>
                </div>

                <p className="text-xs text-[#646464] leading-relaxed">
                  A centralized multi-property operations suite tracking room bed inventories in real-time across Chennai & Bangalore, dispatching automated WhatsApp rent payment links, and managing tenant KYC documents.
                </p>

                <div className="pt-2">
                  <ProductInterfaceMockup type="pg-management" className="w-full" />
                </div>
              </div>

              <div className="pt-4 border-t border-[#E4E4E0] flex items-center justify-between text-xs">
                <span className="text-[#646464] text-[11px]">React • Node.js • PostgreSQL • Express</span>
                <Link to="/portfolio#pg-management" className="font-semibold text-[#1459D9] hover:underline">
                  View Details
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
