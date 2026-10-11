import { Link } from "react-router-dom"

interface TimelinePhase {
  number: string
  name: string
  timeline: string
  summary: string
  activities: string[]
  deliverables: string[]
  signoff: string
}

const PHASES: TimelinePhase[] = [
  {
    number: "1",
    name: "Discovery & Architecture Blueprint",
    timeline: "Weeks 1 – 2",
    summary: "We audit your business requirements, normalize relational database schemas, model system architecture, and eliminate scope ambiguity before writing code.",
    activities: [
      "Stakeholder workflow interviews & systems audit",
      "Normalized relational database modeling (PostgreSQL schemas & foreign keys)",
      "Strict API contract definitions & OpenAPI specifications",
      "Fixed-milestone roadmap with transparent deliverable criteria"
    ],
    deliverables: [
      "Technical Architecture Document",
      "Fixed-Milestone Sprint Roadmap & Budget"
    ],
    signoff: "Architecture sign-off and fixed-budget confirmation prior to development."
  },
  {
    number: "2",
    name: "System Design & Interactive Prototype",
    timeline: "Weeks 3 – 4",
    summary: "We design every screen state and clickable user journey in Figma. We validate workflows with your stakeholders to ensure intuitive operation before frontend engineering begins.",
    activities: [
      "Production design token system (typography, semantic colors, spacing)",
      "High-fidelity UI screens designed for desktop, tablet, and mobile",
      "Clickable interactive prototypes testing edge cases and errors",
      "Component specification mapping directly to backend API contracts"
    ],
    deliverables: [
      "Figma Component Design System",
      "Clickable User Journey Prototype"
    ],
    signoff: "Complete prototype walkthrough and design sign-off."
  },
  {
    number: "3",
    name: "Sprint Engineering & Live Staging",
    timeline: "Weeks 5 – 9",
    summary: "We build your software in transparent two-week sprints. Every commit passes automated test gates, and you test working software on isolated cloud staging environments regularly.",
    activities: [
      "Strict TypeScript full-stack development across UI, APIs, and background queues",
      "Automated unit, integration, and end-to-end testing with CI/CD validation",
      "Regular staging deployments to isolated cloud environments for hands-on review",
      "Query optimization and database index profiling for sub-50ms latency"
    ],
    deliverables: [
      "Production-Grade Codebase in Git",
      "Dedicated Staging Deployment"
    ],
    signoff: "Regular milestone live demos with direct senior developer Q&A."
  },
  {
    number: "4",
    name: "Production Launch & 100% IP Handover",
    timeline: "Week 10+ & Ongoing",
    summary: "We orchestrate production cloud deployment, configure domain routing and telemetry alerts, and transfer 100% intellectual property, git repositories, and cloud credentials to your company.",
    activities: [
      "Hardened cloud infrastructure provisioning on AWS or DigitalOcean",
      "Domain DNS routing, TLS 1.3 certificates, CDN caching, and automated error telemetry",
      "Complete git repository ownership and cloud credential transfer",
      "Team walkthrough sessions and ongoing SLA maintenance support"
    ],
    deliverables: [
      "100% Repository & IP Handover (Zero vendor lock-in)",
      "Deployment Runbook & Documentation"
    ],
    signoff: "Production verification sign-off and complete ownership handover."
  }
]

export const ProcessSection = () => {
  return (
    <section id="process" className="bg-[#F1F1EE] py-16 md:py-20 border-b border-[#E4E4E0]">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-heading font-semibold tracking-tight text-[#171717]">
            How We Work
          </h2>
          <p className="text-base text-[#646464] leading-relaxed">
            A structured, 4-stage engineering lifecycle designed for transparency, predictable budgets, staging demos, and complete code ownership.
          </p>
        </div>

        {/* Static, Readable 4-Stage Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PHASES.map((phase) => (
            <div
              key={phase.number}
              className="bg-white rounded-xl border border-[#E4E4E0] p-6 sm:p-8 shadow-studio-card flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#E4E4E0]">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-[#171717] text-white text-xs font-semibold flex items-center justify-center">
                      {phase.number}
                    </span>
                    <h3 className="text-base sm:text-lg font-heading font-semibold text-[#171717]">
                      {phase.name}
                    </h3>
                  </div>
                  <span className="text-xs font-medium text-[#1459D9] bg-[#EEF3FD] px-2.5 py-0.5 rounded">
                    {phase.timeline}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#646464] leading-relaxed">
                  {phase.summary}
                </p>

                <div className="space-y-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#171717] block">
                    Key Activities
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#646464]">
                    {phase.activities.map((act, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#1459D9] font-bold">·</span>
                        <span className="leading-snug">{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E4E4E0] space-y-2 text-xs">
                <div className="flex flex-wrap items-center gap-2 text-[#171717]">
                  <span className="font-semibold text-[11px] uppercase tracking-wider text-[#646464]">Deliverables:</span>
                  <span className="font-medium">{phase.deliverables.join(" · ")}</span>
                </div>
                <div className="text-[11px] text-[#0D7A5F] bg-[#E6F4EA] px-2.5 py-1 rounded">
                  <span className="font-semibold">Sign-off: </span>{phase.signoff}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Footer */}
        <div className="mt-12 pt-8 border-t border-[#E4E4E0] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#646464]">
          <p>Direct communication with the engineers building your product throughout every phase.</p>
          <Link
            to="/contact"
            className="font-semibold text-[#1459D9] hover:underline"
          >
            Start your discovery phase
          </Link>
        </div>

      </div>
    </section>
  )
}
