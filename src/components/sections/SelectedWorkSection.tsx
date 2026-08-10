import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, X, ShieldCheck, CheckCircle2, Sparkles, QrCode, Users, Building2, Briefcase } from "lucide-react"

export interface Project {
  id: string
  number: string
  title: string
  category: string
  techStack: string[]
  description: string
  details: string
  features: string[]
  mockupType: "apar" | "law" | "crm" | "ai" | "qr"
}

const projects: Project[] = [
  {
    id: "apar-crown",
    number: "01",
    title: "APAR CROWN",
    category: "Apartment & Facility Management Platform",
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    description: "A comprehensive digital management system built to streamline resident requests, maintenance tracking, visitor logs, and automated billing for residential complexes.",
    details: "APAR CROWN replaces manual paper registers and fragmented messaging groups with a centralized cloud dashboard. Residents can log service tickets, view association announcements, and pay maintenance dues, while administrators gain real-time oversight of estate operations.",
    features: [
      "Digital Resident Directory & Gate Visitor Logging",
      "Maintenance Request Dispatch & SLA Tracking",
      "Automated Monthly Billing & Payment Reconciliation",
      "Facility Reservation & Amenity Booking"
    ],
    mockupType: "apar"
  },
  {
    id: "the-law",
    number: "02",
    title: "THE LAW",
    category: "Legal Practice CRM & Case Management",
    techStack: ["React", "TypeScript", "Express", "MongoDB", "Framer Motion"],
    description: "A tailored CRM and workflow platform engineered for law firms to track client cases, automate court hearing schedules, manage document vaults, and streamline retainers.",
    details: "Designed specifically around the daily realities of legal advocates, THE LAW consolidates case files, hearing calendars, and client communication timelines into a secure, encrypted interface.",
    features: [
      "Case File Lifecycle & Document Version Vault",
      "Court Hearing Calendar & Reminder Automation",
      "Client Relationship Timeline & Notes",
      "Retainer Invoicing & Time Tracking"
    ],
    mockupType: "law"
  },
  {
    id: "crm-systems",
    number: "03",
    title: "CUSTOM CRM SYSTEMS",
    category: "Industry-Specific Enterprise CRMs",
    techStack: ["React", "TypeScript", "Tailwind CSS", "REST API", "Chart.js"],
    description: "Tailor-made Customer Relationship Management solutions architected for specialized industries including real estate, logistics, and field operations.",
    details: "Off-the-shelf CRMs often clutter workflows with unused features. Our custom CRM platforms provide zero-bloat, domain-specific lead pipelines, deal tracking stages, and field force analytics.",
    features: [
      "Custom Lead Funnel & Stage Kanban Boards",
      "Automated Email & WhatsApp Follow-up Sequences",
      "Role-Based Access Control & Team Dashboards",
      "Real-time Revenue Forecasting & Performance Metrics"
    ],
    mockupType: "crm"
  },
  {
    id: "ai-content-generator",
    number: "04",
    title: "AI SOCIAL MEDIA GENERATOR",
    category: "AI Marketing & Content Operations Platform",
    techStack: ["React", "TypeScript", "Gemini API", "Tailwind CSS", "Canvas API"],
    description: "An intelligent platform that transforms raw product briefs or blog posts into platform-optimized social copy, hashtags, and visual carousel layouts using Gemini models.",
    details: "Built to accelerate content creation workflows for marketing teams. Input a single topic or URL, and the engine generates customized posts for LinkedIn, X (Twitter), and Instagram complete with brand tone adaptation.",
    features: [
      "Multi-Platform Tone & Length Adaptation (LinkedIn, X, Instagram)",
      "Automated Carousel Slide Layout Generator",
      "AI Copy Variations & Hashtag Clustering",
      "Content Calendar & Export Pipeline"
    ],
    mockupType: "ai"
  },
  {
    id: "qr-food-ordering",
    number: "05",
    title: "QR BASED FOOD ORDERING",
    category: "Contactless Dining & Kitchen Display System",
    techStack: ["React", "TypeScript", "WebSockets", "Node.js", "Tailwind CSS"],
    description: "A friction-free QR ordering system enabling restaurant patrons to view digital menus, customize orders, and pay instantly from their smartphones without app downloads.",
    details: "Connects table-side QR scans directly to an active Kitchen Display System (KDS). Eliminates order entry errors, speeds up table turnaround time, and allows instant live menu stock updates.",
    features: [
      "Instant App-less Mobile Menu & Digital Cart",
      "Real-Time Kitchen Display System (KDS) Synchronization",
      "Custom Item Modifiers & Dietary Tagging",
      "Contactless Table Payment & Digital Receipts"
    ],
    mockupType: "qr"
  }
]

export const SelectedWorkSection = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  return (
    <section id="work" className="py-24 md:py-36 bg-background border-b border-border">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-8 border-b border-border gap-6">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              SELECTED WORK
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-foreground">
              Software built for actual problems.
            </h2>
          </div>
          <p className="text-sm font-mono text-muted-foreground max-w-xs leading-relaxed">
            Case studies of custom systems, Web apps, and platforms built and deployed by 1Sash.
          </p>
        </div>

        {/* Vertical Project List */}
        <div className="space-y-24">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 md:p-10 rounded-lg border border-border bg-card/30 hover:bg-card/70 transition-all duration-300"
            >
              {/* Left Column: Number + Info (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-4xl md:text-5xl font-light text-muted-foreground/60 group-hover:text-foreground transition-colors">
                    {project.number}
                  </span>
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-serif text-foreground group-hover:accent-text transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-sm border border-border bg-background/80 text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-foreground hover:text-accent font-semibold group/btn"
                  >
                    <span>LAUNCH INTERACTIVE DEMO</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Right Column: Visual Mockup Container (7 cols) */}
              <div className="lg:col-span-7">
                <div
                  onClick={() => setActiveProject(project)}
                  className="relative cursor-pointer aspect-video md:aspect-[16/10] rounded-md border border-border bg-background p-4 md:p-6 overflow-hidden shadow-xs group-hover:border-foreground/30 transition-all"
                >
                  <MockupPreview type={project.mockupType} title={project.title} />

                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 bg-foreground text-background text-xs font-mono tracking-wider rounded-sm shadow-md">
                      CLICK TO TEST INTERACTIVE SYSTEM
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Interactive Modal */}
      <AnimatePresence>
        {activeProject && (
          <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}

/* ── Interactive Mockup Graphics ── */
const MockupPreview = ({ type, title: _title }: { type: Project["mockupType"]; title: string }) => {
  if (type === "apar") {
    return (
      <div className="w-full h-full flex flex-col justify-between font-mono text-xs text-foreground/80 space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-border">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-emerald-600" />
            <span className="font-semibold text-foreground">APAR CROWN Admin Hub</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 text-[10px]">LIVE ESTATE</span>
        </div>
        <div className="grid grid-cols-3 gap-2 my-auto">
          <div className="p-2.5 rounded bg-card border border-border">
            <div className="text-[10px] text-muted-foreground">Active Units</div>
            <div className="text-lg font-bold text-foreground">128 / 130</div>
          </div>
          <div className="p-2.5 rounded bg-card border border-border">
            <div className="text-[10px] text-muted-foreground">Open Tickets</div>
            <div className="text-lg font-bold text-amber-600">3 Pending</div>
          </div>
          <div className="p-2.5 rounded bg-card border border-border">
            <div className="text-[10px] text-muted-foreground">Gate Visitors</div>
            <div className="text-lg font-bold text-foreground">14 Today</div>
          </div>
        </div>
        <div className="p-2 bg-card rounded border border-border flex items-center justify-between text-[11px]">
          <span>Tower A - Plumbing Maintenance Request</span>
          <span className="text-emerald-600">Assigned</span>
        </div>
      </div>
    )
  }

  if (type === "law") {
    return (
      <div className="w-full h-full flex flex-col justify-between font-mono text-xs space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-border">
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-indigo-500" />
            <span className="font-semibold text-foreground">THE LAW Advocates Portal</span>
          </div>
          <span className="text-[10px] text-muted-foreground">ENCRYPTED VAULT</span>
        </div>
        <div className="space-y-2 my-auto">
          <div className="p-2 rounded bg-card border border-border flex items-center justify-between">
            <div>
              <div className="font-semibold text-foreground">Case #2026-HC-891</div>
              <div className="text-[10px] text-muted-foreground">High Court Bench 4 • Hearing Tomorrow 10:30 AM</div>
            </div>
            <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-600 text-[10px]">Urgent</span>
          </div>
          <div className="p-2 rounded bg-card border border-border flex items-center justify-between opacity-80">
            <div>
              <div className="font-semibold text-foreground">Corporate Retainer Agreement</div>
              <div className="text-[10px] text-muted-foreground">Draft Review Sent to Client</div>
            </div>
            <span className="px-2 py-0.5 bg-muted text-muted-foreground text-[10px]">In Review</span>
          </div>
        </div>
      </div>
    )
  }

  if (type === "crm") {
    return (
      <div className="w-full h-full flex flex-col justify-between font-mono text-xs space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-border">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-blue-500" />
            <span className="font-semibold text-foreground">Custom Pipeline Engine</span>
          </div>
          <span className="text-[10px] text-muted-foreground">CONVERSION 34%</span>
        </div>
        <div className="grid grid-cols-3 gap-2 my-auto text-[11px]">
          <div className="p-2 rounded bg-card border border-border space-y-1">
            <div className="text-[10px] font-bold text-muted-foreground uppercase">New Leads</div>
            <div className="p-1 rounded bg-background border border-border text-[10px]">Acme Tech Ltd</div>
            <div className="p-1 rounded bg-background border border-border text-[10px]">Apex Retail</div>
          </div>
          <div className="p-2 rounded bg-card border border-border space-y-1">
            <div className="text-[10px] font-bold text-muted-foreground uppercase">Proposal</div>
            <div className="p-1 rounded bg-background border border-border text-[10px]">Global Logistics</div>
          </div>
          <div className="p-2 rounded bg-card border border-border space-y-1">
            <div className="text-[10px] font-bold text-emerald-600 uppercase">Won ($42k)</div>
            <div className="p-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-[10px] text-emerald-600 font-semibold">Nexus Enterprise</div>
          </div>
        </div>
      </div>
    )
  }

  if (type === "ai") {
    return (
      <div className="w-full h-full flex flex-col justify-between font-mono text-xs space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-border">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="font-semibold text-foreground">Gemini AI Studio Studio</span>
          </div>
          <span className="text-[10px] text-amber-600 font-bold">1Sash AI Engine</span>
        </div>
        <div className="p-3 rounded bg-card border border-border space-y-2 my-auto">
          <div className="text-[10px] text-muted-foreground">Prompt Brief: "Explain why engineered software beats no-code tools"</div>
          <div className="p-2 rounded bg-background border border-border text-[11px] text-foreground leading-relaxed italic">
            "No-code builds fast prototypes, but custom code builds enterprise longevity. Here are 3 reasons why clean code scales..."
          </div>
          <div className="flex gap-2">
            <span className="px-1.5 py-0.5 rounded bg-muted text-[9px]">#SoftwareEngineering</span>
            <span className="px-1.5 py-0.5 rounded bg-muted text-[9px]">#TechStartup</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-full flex flex-col justify-between font-mono text-xs space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-border">
        <div className="flex items-center gap-2">
          <QrCode className="w-4 h-4 text-rose-500" />
          <span className="font-semibold text-foreground">Table #04 Mobile Menu</span>
        </div>
        <span className="text-[10px] text-emerald-600 font-bold">SCAN READY</span>
      </div>
      <div className="space-y-2 my-auto">
        <div className="p-2 rounded bg-card border border-border flex items-center justify-between">
          <div>
            <div className="font-semibold text-foreground">Wood-fired Artisan Pizza</div>
            <div className="text-[10px] text-muted-foreground">Extra Mozzarella • Basil • Chili Oil</div>
          </div>
          <span className="font-bold text-foreground">$16.00</span>
        </div>
        <div className="p-2 rounded bg-card border border-border flex items-center justify-between">
          <div>
            <div className="font-semibold text-foreground">Fresh Cold Brew Espresso</div>
            <div className="text-[10px] text-muted-foreground">Oat Milk • Single Origin</div>
          </div>
          <span className="font-bold text-foreground">$5.50</span>
        </div>
      </div>
    </div>
  )
}

/* ── Interactive Modal Component ── */
const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background border border-border rounded-lg p-6 md:p-10 shadow-2xl space-y-8"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full border border-border hover:bg-muted transition-colors text-foreground"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="space-y-2">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <span>PROJECT {project.number}</span>
            <span>•</span>
            <span>{project.category}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground">
            {project.title}
          </h2>
        </div>

        {/* Description & Overview */}
        <div className="space-y-4">
          <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">System Overview</h3>
          <p className="text-foreground leading-relaxed text-base">
            {project.details}
          </p>
        </div>

        {/* Interactive Simulated Terminal / Live Preview Box */}
        <div className="border border-border rounded-md p-6 bg-card space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-border font-mono text-xs">
            <span className="font-bold text-foreground">INTERACTIVE SIMULATED ENVIRONMENT</span>
            <span className="text-emerald-600 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> SYSTEM ONLINE
            </span>
          </div>

          <MockupPreview type={project.mockupType} title={project.title} />

          <div className="pt-2 text-center">
            <p className="text-xs font-mono text-muted-foreground">
              Production system engineered for high availability and low latency response.
            </p>
          </div>
        </div>

        {/* Core Capabilities */}
        <div className="space-y-4">
          <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Key Deliverables</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            {project.features.map((feat) => (
              <li key={feat} className="flex items-start gap-2.5 text-foreground">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="space-y-3">
          <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Tech Stack Architecture</h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="px-3 py-1 text-xs font-mono border border-border rounded bg-muted/50 text-foreground">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-muted-foreground">
            Interested in a similar system built for your organization?
          </p>
          <a
            href="/contact"
            className="w-full sm:w-auto px-6 py-3 text-sm font-medium bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity text-center"
          >
            Request System Demo & Quote
          </a>
        </div>

      </motion.div>
    </div>
  )
}
