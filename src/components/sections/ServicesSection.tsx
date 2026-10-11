import { Link } from "react-router-dom"

interface ServiceItem {
  title: string
  slug: string
  problemSolved: string
  explanation: string
  deliverables: string[]
  projectExample: {
    name: string
    description: string
  }
}

export const servicesData: ServiceItem[] = [
  {
    title: "Custom Software Development",
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
    }
  },
  {
    title: "Web Application Development",
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
    }
  },
  {
    title: "Mobile Application Development",
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
    }
  },
  {
    title: "AI Integration & Automation",
    slug: "/services/ai-integration",
    problemSolved: "Manual data extraction from physical paper, legal dockets, and invoices consumes hundreds of employee hours and generates transcription errors.",
    explanation: "We integrate practical, deterministic artificial intelligence and machine learning pipelines into your existing databases—extracting structured information without hallucinations.",
    deliverables: [
      "Document ingestion & OCR extraction pipelines",
      "Deterministic LLM data parsers with JSON validation",
      "Private vector search over company documents (RAG)",
      "Automated classification and anomaly detection"
    ],
    projectExample: {
      name: "Court Docket Parser in Law Throne",
      description: "Automated extraction and sync of daily High Court causelists and hearing timelines."
    }
  },
  {
    title: "Business Process Automation",
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
    }
  },
  {
    title: "Cloud Deployment & Maintenance",
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
    }
  }
]

export const ServicesSection = () => {
  return (
    <section id="services" className="bg-[#FAFAF8] py-16 md:py-20 border-b border-[#E4E4E0]">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-[#E4E4E0] gap-6">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold tracking-tight text-[#171717]">
              Services & Capabilities
            </h2>
            <p className="text-base text-[#646464] max-w-xl">
              We design and engineer software to solve specific operational problems. No generic buzzwords—just durable systems that work.
            </p>
          </div>
          <div>
            <Link
              to="/contact"
              className="text-xs font-semibold text-[#1459D9] hover:underline"
            >
              Discuss your project scope
            </Link>
          </div>
        </div>

        {/* Clean Capabilities Rows */}
        <div className="divide-y divide-[#E4E4E0]">
          {servicesData.map((service) => (
            <div 
              key={service.slug}
              className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Title & Link (4 cols) */}
              <div className="lg:col-span-4 space-y-2">
                <h3 className="text-xl sm:text-2xl font-heading font-semibold text-[#171717]">
                  {service.title}
                </h3>
                <div>
                  <Link
                    to={service.slug}
                    className="text-xs font-semibold text-[#1459D9] hover:underline"
                  >
                    Learn more about {service.title}
                  </Link>
                </div>
              </div>

              {/* Problem & Solution (5 cols) */}
              <div className="lg:col-span-5 space-y-3">
                <p className="text-xs sm:text-sm text-[#171717] font-medium leading-relaxed">
                  {service.problemSolved}
                </p>
                <p className="text-xs sm:text-sm text-[#646464] leading-relaxed">
                  {service.explanation}
                </p>
                <div className="text-xs text-[#646464] pt-1">
                  <span className="font-semibold text-[#171717]">Example: </span>
                  <span>{service.projectExample.name} — {service.projectExample.description}</span>
                </div>
              </div>

              {/* Key Deliverables (3 cols) */}
              <div className="lg:col-span-3 space-y-2 bg-[#F1F1EE] p-4 rounded-lg border border-[#E4E4E0]">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#171717] block">
                  Deliverables
                </span>
                <ul className="space-y-1.5 text-xs text-[#646464]">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#1459D9] font-bold">·</span>
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

        {/* Section Footer */}
        <div className="pt-12 border-t border-[#E4E4E0] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-sm font-semibold text-[#171717]">Have a requirement spanning multiple capabilities?</h4>
            <p className="text-xs text-[#646464] mt-0.5">Most engagements combine custom software with automated workflows and cloud deployment.</p>
          </div>
          <Link
            to="/contact"
            className="px-5 py-2.5 text-xs font-semibold text-white bg-[#171717] hover:bg-[#2c2c2c] rounded-md transition-colors whitespace-nowrap"
          >
            Discuss Scope with an Engineer
          </Link>
        </div>

      </div>
    </section>
  )
}
