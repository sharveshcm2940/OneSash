import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import {
  Code2,
  Building2,
  ShieldCheck,
  Cpu,
  ArrowUpRight,
  CheckCircle2,
  Terminal,
  Clock,
  UserCheck,
  Zap,
  FolderGit2
} from "lucide-react"

export interface ServiceSpec {
  id: string
  code: string
  title: string
  category: string
  headline: string
  problemSolved: string
  icon: any
  leadFounder: string
  deliverables: string[]
  techStack: string[]
  caseStudy: {
    title: string
    metric: string
    description: string
  }
  estimatedTime: string
}

const serviceCatalog: ServiceSpec[] = [
  {
    id: "web-portals",
    code: "DISCIPLINE-01",
    category: "SYSTEMS & PORTALS",
    title: "Full-Stack Web & Resident Portals",
    headline: "Custom administrative web applications, multi-tenant resident portals, and operational management suites.",
    problemSolved: "Replaces fragmented spreadsheets, manual billing, and paper logbooks with a centralized, secure web dashboard.",
    icon: Building2,
    leadFounder: "Sarveshvara A (Lead Architect)",
    deliverables: [
      "Multi-tenant RBAC permissions & resident login suites",
      "Automated PDF bill generation & digital payment receipt logs",
      "Visitor QR code gate pass logging & guardhouse station views",
      "Maintenance request dispatch, status tracking & audit logs",
      "Normalized PostgreSQL database & REST API routing"
    ],
    techStack: ["React 18+", "TypeScript", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
    caseStudy: {
      title: "APAR CROWN Apartment Portal",
      metric: "216 Apartments • 100% Digital",
      description: "Deployed a zero-maintenance resident portal automating billing, visitor approvals, and community notices."
    },
    estimatedTime: "2 - 4 Weeks Sprint"
  },
  {
    id: "interactive-3d",
    category: "INTERACTIVE UI & WEBGL",
    code: "DISCIPLINE-02",
    title: "Interactive 3D WebGL & UI Systems",
    headline: "High-performance client interfaces, responsive editorial design systems, and real-time Three.js canvas rendering.",
    problemSolved: "Eliminates boring, static web templates by building immersive 3D spatial models and fluid responsive client portals.",
    icon: Cpu,
    leadFounder: "Sharvesh CM (Interactive UI Lead)",
    deliverables: [
      "Custom Three.js WebGL canvas shaders & 3D object controls",
      "Responsive mathematical typography & editorial design tokens",
      "Micro-interaction state machines with Framer Motion physics",
      "Sub-second initial page load & fluid mobile viewports",
      "Dark / Light luxury theme engineering without AI clichés"
    ],
    techStack: ["React", "TypeScript", "Three.js", "WebGL", "Framer Motion", "Tailwind CSS"],
    caseStudy: {
      title: "1Sash Interactive 3D Engine",
      metric: "60 FPS Render Loop",
      description: "Engineered real-time WebGL node models rendering architectural layouts smoothly across desktop & mobile."
    },
    estimatedTime: "1 - 3 Weeks Sprint"
  },
  {
    id: "crm-automation",
    category: "OPERATIONS & AUTOMATION",
    code: "DISCIPLINE-03",
    title: "Legal & Corporate CRM Engines",
    headline: "Bespoke client management systems, advocate hearing trackers, document vaulting, and pipeline automation.",
    problemSolved: "Streamlines confidential legal workflows, client case stage tracking, and automated appointment scheduling.",
    icon: ShieldCheck,
    leadFounder: "Siddharth Santhosh Kumar (Product Lead)",
    deliverables: [
      "Custom pipeline stage Kanban boards & milestone triggers",
      "Client case document vaulting with AES-256 encryption",
      "Hearing date calendar synchronization & SMS alert triggers",
      "Automated time-tracking, retainer billing & invoice generation",
      "Role-based access logs for senior partners & legal staff"
    ],
    techStack: ["React", "TypeScript", "Express", "PostgreSQL", "REST APIs", "Node.js"],
    caseStudy: {
      title: "The Law Practice CRM",
      metric: "100% Paperless Workflows",
      description: "Mapped advocate hearing schedules and vault security requirements into a zero-bloat web application."
    },
    estimatedTime: "3 - 5 Weeks Sprint"
  },
  {
    id: "cloud-ai",
    category: "CLOUD & AI INTEGRATION",
    code: "DISCIPLINE-04",
    title: "Cloud Infrastructure & AI Workflows",
    headline: "Zero-downtime container deployments, Gemini model API integration, and automated document processing.",
    problemSolved: "Transforms unstructured operational documents and customer tickets into structured, actionable JSON data.",
    icon: Code2,
    leadFounder: "Sarveshvara & Sharvesh",
    deliverables: [
      "Server-side Gemini & OpenAI API proxy routes (private keys)",
      "Automated document OCR & semantic metadata extraction",
      "Docker containerization & Cloud Run serverless hosting",
      "Automated CI/CD git build pipelines & domain SSL binding",
      "OWASP security audit & SQL injection protection layers"
    ],
    techStack: ["Gemini API", "Node.js", "Docker", "Google Cloud", "Express", "TypeScript"],
    caseStudy: {
      title: "AI Content & Slide Generator",
      metric: "95% Faster Processing",
      description: "Integrated server-side Gemini multi-modal reasoning to auto-generate slide layouts from raw documents."
    },
    estimatedTime: "1 - 2 Weeks Sprint"
  }
]

export const ServicesSection = () => {
  const [activeSpecId, setActiveSpecId] = useState(serviceCatalog[0].id)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  const activeSpec = serviceCatalog.find((s) => s.id === activeSpecId)!

  return (
    <section id="services" className="py-24 md:py-36 bg-background border-b border-border">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* Header */}
        <motion.div
          ref={ref}
          className="max-w-3xl mx-auto text-center mb-16 space-y-4 flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-border bg-card/80 text-xs font-mono font-medium text-foreground tracking-tight shadow-xs mb-1">
            What We Do
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-foreground font-black tracking-tighter leading-[1.05]">
            Services That Scale With Your Business
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-sans">
            From pixel-perfect frontend designs to robust backend architectures and scalable cloud deployments — we cover the full stack of software engineering.
          </p>
        </motion.div>

        {/* Discipline Navigation Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {serviceCatalog.map((spec) => {
            const Icon = spec.icon
            const isActive = activeSpecId === spec.id
            return (
              <button
                key={spec.id}
                onClick={() => setActiveSpecId(spec.id)}
                className={`p-5 rounded-lg border text-left transition-all flex flex-col justify-between space-y-4 ${
                  isActive
                    ? "border-accent bg-accent/10 text-foreground shadow-sm"
                    : "border-border bg-card/30 text-muted-foreground hover:bg-card/70 hover:text-foreground"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-accent font-bold tracking-widest uppercase">
                    {spec.code}
                  </span>
                  <Icon className={`w-5 h-5 ${isActive ? "text-accent" : "text-muted-foreground"}`} />
                </div>

                <div>
                  <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider block">
                    {spec.category}
                  </div>
                  <div className="text-base font-serif text-foreground font-semibold line-clamp-1 mt-0.5">
                    {spec.title}
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        {/* Detailed Service Specification Stage */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSpecId}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="border border-border rounded-xl bg-card/20 p-6 md:p-10 space-y-8 shadow-sm"
          >
            
            {/* Spec Header Bar */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-border">
              <div className="space-y-2 max-w-2xl">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-2.5 py-0.5 rounded bg-accent/10 border border-accent/20 text-accent font-mono text-[10px] font-bold tracking-wider uppercase">
                    {activeSpec.code}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground">
                    LEAD: {activeSpec.leadFounder}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-serif text-foreground font-bold">
                  {activeSpec.title}
                </h3>

                <p className="text-sm text-foreground leading-relaxed">
                  {activeSpec.headline}
                </p>
              </div>

              <div className="p-4 border border-border bg-background rounded-lg shrink-0 space-y-2 max-w-xs">
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest block">
                  TARGET SPRINT TIMELINE:
                </span>
                <div className="flex items-center gap-2 text-sm font-mono font-bold text-foreground">
                  <Clock className="w-4 h-4 text-accent" />
                  <span>{activeSpec.estimatedTime}</span>
                </div>
              </div>
            </div>

            {/* Operational Problem & Key Deliverables Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left: Key Deliverables List */}
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-accent" /> VERIFIED SYSTEM DELIVERABLES
                </span>

                <div className="space-y-2.5">
                  {activeSpec.deliverables.map((item) => (
                    <div
                      key={item}
                      className="p-3.5 border border-border bg-background rounded-lg flex items-start gap-3 hover:border-accent/40 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs font-mono text-foreground leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Operational Problem & Real Case Study */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Problem Solved */}
                <div className="p-5 border border-border bg-background rounded-lg space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-accent font-bold flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" /> OPERATIONAL FRICTION SOLVED
                  </span>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {activeSpec.problemSolved}
                  </p>
                </div>

                {/* Case Study Proof */}
                <div className="p-5 border border-border bg-card/50 rounded-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-1.5">
                      <FolderGit2 className="w-3.5 h-3.5 text-foreground" /> PROOF IN PRODUCTION
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 font-mono text-[10px] font-bold">
                      {activeSpec.caseStudy.metric}
                    </span>
                  </div>

                  <h4 className="text-lg font-serif text-foreground font-semibold">
                    {activeSpec.caseStudy.title}
                  </h4>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {activeSpec.caseStudy.description}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider block">
                    STACK INCLUDED:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeSpec.techStack.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded border border-border bg-background text-[10px] font-mono text-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom Call to Action */}
            <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                <UserCheck className="w-4 h-4 text-accent" />
                <span>Direct Founder Consultation with Sarveshvara, Sharvesh, and Siddharth.</span>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-foreground font-semibold hover:text-accent transition-colors"
                >
                  <span>FULL SERVICES DIRECTORY</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/contact"
                  className="px-5 py-2.5 text-xs font-mono bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity font-medium"
                >
                  Request Service Brief
                </Link>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
