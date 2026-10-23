import React, { useState } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

export interface ServiceItem {
  id: string
  title: string
  oneLiner: string
  slug: string
  problemSolved: string
  explanation: string
  deliverables: string[]
  projectExample: {
    name: string
    description: string
  }
  previewBadge: string
  previewDetails: string[]
}

export const servicesData: ServiceItem[] = [
  {
    id: "custom-software",
    title: "Custom Software",
    oneLiner: "Replace scattered spreadsheets with one tool for your team, customers and records.",
    slug: "/services/custom-software",
    problemSolved: "Off-the-shelf software rarely fits proprietary business operations, forcing teams into fragile spreadsheet workarounds and disconnected SaaS subscriptions.",
    explanation: "We design and build bespoke business applications tailored strictly to your operational rules, employee hierarchies, and core data structures. You own the code completely.",
    deliverables: [
      "Custom operations & admin portals",
      "Role-based access control (RBAC)",
      "ACID-compliant relational database architectures",
      "Internal ticketing & workflow routing engines"
    ],
    projectExample: {
      name: "Apar Crown & Law Throne",
      description: "Delivered unified residential facility ERP and litigation case management systems."
    },
    previewBadge: "Bespoke Engineering",
    previewDetails: ["Role-Based Access Control", "Relational Database Design", "Automated Business Rules"]
  },
  {
    id: "web-applications",
    title: "Web Applications",
    oneLiner: "Give customers a simple way to book, order, pay or manage their account online.",
    slug: "/services/web-development",
    problemSolved: "Slow page loads, poor mobile responsiveness, and fragile client-side state cause customer drop-offs and operational friction.",
    explanation: "We engineer fast, accessible web applications using modern TypeScript, React, and modular backend APIs designed for sub-second interactions and predictable state.",
    deliverables: [
      "Single Page Applications (SPAs) & SaaS dashboards",
      "Secure client self-service portals",
      "Real-time WebSocket data feeds",
      "Accessible, responsive UI adhering to WCAG standards"
    ],
    projectExample: {
      name: "QR Food Processing KDS",
      description: "Real-time kitchen display and customer ordering system with sub-second order dispatch."
    },
    previewBadge: "Interactive Web",
    previewDetails: ["Sub-Second Screen Latency", "WebSocket Live Feeds", "WCAG Accessible Interfaces"]
  },
  {
    id: "mobile-applications",
    title: "Mobile Applications",
    oneLiner: "Help customers and staff get things done on their phones, including away from the office.",
    slug: "/services/mobile-apps",
    problemSolved: "Maintaining separate native codebases is expensive, while low-quality cross-platform wrappers suffer from sluggish scrolling and poor offline reliability.",
    explanation: "We build reliable iOS and Android applications with native-like 60fps animations, background synchronization, and robust offline-first caching for field and customer use.",
    deliverables: [
      "Cross-platform iOS and Android apps",
      "Offline-first SQLite local synchronization",
      "Native push notification pipelines (APNs & FCM)",
      "Biometric authentication & secure on-device storage"
    ],
    projectExample: {
      name: "Resident & Gatekeeper Mobile Apps",
      description: "Companion mobile interfaces for visitor verification and resident maintenance payments."
    },
    previewBadge: "iOS & Android",
    previewDetails: ["60fps Fluid Interactions", "Offline SQLite Storage", "Push Notification Pipelines"]
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    oneLiner: "Reduce repetitive document entry and route information to the right person for review.",
    slug: "/services/ai-integration",
    problemSolved: "Manual data extraction from physical paper, legal dockets, and invoices consumes hundreds of employee hours and generates transcription errors.",
    explanation: "We integrate practical, deterministic artificial intelligence and machine learning pipelines into your existing databases—extracting structured information with validation and human review for uncertain results.",
    deliverables: [
      "Document ingestion & OCR extraction pipelines",
      "Deterministic LLM data parsers with JSON validation",
      "Private vector search over company documents (RAG)",
      "Automated classification and anomaly detection"
    ],
    projectExample: {
      name: "Court Docket Parser in Law Throne",
      description: "Automated extraction and sync of daily High Court causelists and hearing timelines."
    },
    previewBadge: "Deterministic AI",
    previewDetails: ["Legal Docket & Invoice OCR", "Private Document RAG", "Automated Triage Pipelines"]
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    oneLiner: "Keep your application hosted, backed up and maintained as your business grows.",
    slug: "/services/cloud-solutions",
    problemSolved: "Unmonitored servers crash under traffic bursts, lack verified disaster recovery backups, and leave data exposed to security vulnerabilities.",
    explanation: "We containerize applications using Docker, establish automated CI/CD deployment pipelines, configure managed cloud databases, and enforce continuous security updates.",
    deliverables: [
      "Containerized Docker & Linux server deployments",
      "Zero-downtime CI/CD deployment workflows (GitHub Actions)",
      "Automated encrypted daily database snapshots",
      "SSL/TLS security hardening, rate limiting & uptime alerts"
    ],
    projectExample: {
      name: "OneSash Production Infrastructure",
      description: "High-reliability cloud hosting across AWS and DigitalOcean with active monitoring."
    },
    previewBadge: "Cloud Architecture",
    previewDetails: ["Docker Microservices", "Zero-Downtime GitHub Actions", "Encrypted Database Backups"]
  },
  {
    id: "business-systems",
    title: "Business Management Systems",
    oneLiner: "Track rent, invoices, payments and reminders without chasing every task manually.",
    slug: "/services/process-automation",
    problemSolved: "Manual billing reminders, paper lease agreements, and repetitive clerical handoffs lead to delayed collections and lost records.",
    explanation: "We build automated system workflows that synchronize your billing, messaging, payments, and document generation so daily operations execute without manual chasing.",
    deliverables: [
      "Automated invoice dispatch & WhatsApp payment reminders",
      "Dynamic PDF generation (receipts, lease agreements, reports)",
      "Multi-system webhook reconciliations & ERP synchronization",
      "Automated escalation triggers for overdue tasks"
    ],
    projectExample: {
      name: "PG Management Operations Suite",
      description: "Automated monthly rent invoice dispatch, bed vacancy tracking, and digital KYC archiving."
    },
    previewBadge: "Enterprise Workflows",
    previewDetails: ["WhatsApp Invoice Reminders", "Dynamic PDF Generation", "Automated UPI Reconciliations"]
  }
]

export const ServicesSection: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number>(0)

  const activeService = servicesData[hoveredIdx]

  return (
    <section id="services" className="bg-[#FAFAF8] py-20 md:py-28 border-b border-[#E4E4E0]">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Section Header: 3-8 words heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-[#E4E4E0] gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#646464] block">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold tracking-tight text-[#171717]">
              What can we build for you?
            </h2>
            <p className="text-base text-[#646464] leading-relaxed">
              Engineering services focused on tangible business outcomes, from initial architecture to production operations.
            </p>
          </div>

          <Link
            to="/contact"
            className="text-xs font-semibold text-[#171717] hover:underline"
          >
            Discuss your requirements with an engineer →
          </Link>
        </div>

        {/* Interactive Services Grid: Large Interactive Rows on Left + Dynamic Live Visual Preview on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-8">
          
          {/* Services List Rows (No decorative icons!) */}
          <div className="lg:col-span-7 divide-y divide-[#E4E4E0]">
            {servicesData.map((service, idx) => {
              const isSelected = hoveredIdx === idx

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onFocus={() => setHoveredIdx(idx)}
                  tabIndex={0}
                  className={`py-6 px-4 -mx-4 rounded-xl transition-all cursor-pointer group ${
                    isSelected ? "bg-white shadow-xs" : "hover:bg-[#F1F1EE]/60"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-semibold text-[#646464]">
                          0{idx + 1}
                        </span>
                        <h3 className={`text-xl sm:text-2xl font-heading font-semibold transition-colors ${
                          isSelected ? "text-[#171717]" : "text-[#171717] group-hover:text-[#171717]"
                        }`}>
                          {service.title}
                        </h3>
                      </div>

                      {/* One short sentence description */}
                      <p className="text-xs sm:text-sm text-[#646464] leading-relaxed pl-7 max-w-lg">
                        {service.oneLiner}
                      </p>
                    </div>

                    {/* Animated directional indicator */}
                    <div className="pt-1">
                      <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                        isSelected 
                          ? "bg-[#171717] text-white border-[#171717]" 
                          : "border-[#E4E4E0] text-[#646464] group-hover:border-[#171717] group-hover:text-[#171717]"
                      }`}>
                        <ArrowUpRight className={`w-4 h-4 transition-transform duration-200 ${
                          isSelected ? "translate-x-0.5 -translate-y-0.5" : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        }`} />
                      </div>
                    </div>
                  </div>

                  {/* Inline link on mobile or for quick navigation */}
                  <div className="pl-7 pt-2">
                    <Link
                      to={service.slug}
                      className="text-[11px] font-semibold text-[#171717] hover:underline"
                    >
                      Explore {service.title} details →
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Column: Docked Visual Preview Stage that Responds to Hover */}
          <div className="lg:col-span-5 hidden lg:block sticky top-28">
            <div className="bg-white rounded-2xl border border-[#E4E4E0] p-6 shadow-studio-card space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#E4E4E0]">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#646464]">
                  Capability Preview
                </span>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-medium bg-[#F1F1EE] text-[#171717] border border-[#E4E4E0]">
                  {activeService.previewBadge}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-5"
                >
                  <div>
                    <h4 className="text-xl font-heading font-semibold text-[#171717]">
                      {activeService.title}
                    </h4>
                    <p className="text-xs text-[#646464] mt-1 leading-relaxed">
                      {activeService.oneLiner}
                    </p>
                  </div>

                  <div className="bg-[#FAFAF8] rounded-xl p-4 border border-[#E4E4E0] space-y-3">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#171717] block">
                      Core Engineering Standards
                    </span>
                    <ul className="space-y-2 text-xs text-[#646464]">
                      {activeService.previewDetails.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#171717]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-xs text-[#646464] pt-1">
                    <span className="font-semibold text-[#171717]">Related Product: </span>
                    <span>{activeService.projectExample.name}</span>
                  </div>

                  <Link
                    to={activeService.slug}
                    className="w-full py-2.5 px-4 rounded-md bg-[#171717] hover:bg-[#2c2c2c] text-white text-xs font-semibold text-center block transition-colors shadow-xs"
                  >
                    See What You Receive
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
