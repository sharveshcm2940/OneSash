import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import {
  CheckCircle2,
  XCircle,
  UserCheck,
  Code2,
  ShieldCheck,
  Lock,
  Zap,
  ArrowRight
} from "lucide-react"

export interface ComparisonRow {
  category: string
  conventionalWay: {
    title: string
    detail: string
  }
  sashWay: {
    title: string
    detail: string
    founderLead: string
  }
}

const comparisonData: ComparisonRow[] = [
  {
    category: "ENGINEERING OWNERSHIP",
    conventionalWay: {
      title: "Proxy Account Managers & Junior Outsourcing",
      detail: "Clients talk to sales reps or non-technical project managers who delegate coding to offshore sub-contractors."
    },
    sashWay: {
      title: "100% Direct Founder Engineering",
      detail: "Saraveshvaran, Sharvesh, and Siddharth handle discovery AND write every line of code. No proxy layers or junior handoffs.",
      founderLead: "Saraveshvaran, Sharvesh & Siddharth"
    }
  },
  {
    category: "CODEBASE & CRAFTSMANSHIP",
    conventionalWay: {
      title: "Fragile AI Wrappers & Bloated Templates",
      detail: "Hastily assembled AI-generated code snippets, unvetted npm packages, and zero compile-time type safety."
    },
    sashWay: {
      title: "Strict TypeScript & Zero-Bloat Architecture",
      detail: "Custom modular React components, strict interface contracts, normalized database schemas, and lightweight Node/Express routes.",
      founderLead: "Saraveshvaran A (Lead Systems Architect)"
    }
  },
  {
    category: "VISUAL & UI EXECUTION",
    conventionalWay: {
      title: "Generic SaaS Templates & AI Design Clichés",
      detail: "Repetitive purple-blue gradients, overlapping card borders, unreadable text contrast, and stock icon placeholders."
    },
    sashWay: {
      title: "Bespoke Editorial UI & 3D WebGL Canvases",
      detail: "Mathematical typography scales, WCAG AA color contrast, fluid Framer Motion state physics, and custom WebGL shaders.",
      founderLead: "Sharvesh CM (Interactive UI Lead)"
    }
  },
  {
    category: "SCOPE & SPRINT TRANSPARENCY",
    conventionalWay: {
      title: "Scope Creep Trapdoors & Hidden Hourly Fees",
      detail: "Unclear milestone definitions leading to unexpected billings, delayed deliverables, and black-box progress."
    },
    sashWay: {
      title: "Fixed Milestone Proposals & Weekly Live Demos",
      detail: "Clear fixed-budget proposals with transparent deliverable criteria and live preview URL updates at every sprint checkpoint.",
      founderLead: "Siddharth Santhosh Kumar (Product Lead)"
    }
  },
  {
    category: "POST-LAUNCH RELIABILITY",
    conventionalWay: {
      title: "Ghosting After Final Invoice Payment",
      detail: "Once launched, support disappears. Unmonitored server crashes, memory leaks, and unhandled security vulnerabilities emerge.",
      
    },
    sashWay: {
      title: "Active Cloud Monitoring & Direct SLA Support",
      detail: "We monitor server health, optimize database queries as traffic grows, and maintain direct support channels with the founders.",
      founderLead: "Saraveshvaran & Siddharth"
    }
  }
]

const founderGuarantees = [
  {
    icon: UserCheck,
    title: "Direct Founder Accountability",
    description: "You have direct access to the founders on email, WhatsApp, and weekly calls. The people in discovery write the code."
  },
  {
    icon: Code2,
    title: "100% Type-Safe Source Code",
    description: "Every module, route, and state interface is strictly typed in TypeScript. Errors are caught in compilation, never in production."
  },
  {
    icon: ShieldCheck,
    title: "Production Security Standards",
    description: "OWASP-compliant API endpoints, SQL injection protection, environment key isolation, and encrypted document storage."
  },
  {
    icon: Lock,
    title: "Full Source Code Ownership",
    description: "You own 100% of the repository, database schemas, and deployment pipelines. No vendor lock-in or proprietary traps."
  }
]

export const WhySashSection = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  const activeRow = comparisonData[activeCategoryIndex]

  return (
    <section id="why-sash" className="py-24 md:py-36 bg-background border-b border-border">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">

        {/* Section Header */}
        <motion.div
          ref={ref}
          className="max-w-3xl mx-auto text-center mb-16 space-y-4 flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-border bg-card/80 text-xs font-mono font-medium text-foreground tracking-tight shadow-xs mb-1">
            Why onesash
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-foreground font-black tracking-tighter leading-[1.05]">
            Why Founders Trust onesash Over Traditional Options
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-sans">
            We built onesash to give teams what bloated agencies and fragile automated templates fail to deliver: direct founder engineering, strict type safety, and software engineered for real industry operations.
          </p>
        </motion.div>

        {/* Operational Matrix Console */}
        <div className="border border-border rounded-xl bg-card/20 overflow-hidden mb-16 shadow-sm">
          
          {/* Matrix Header / Category Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border-b border-border bg-card/40">
            {comparisonData.map((row, idx) => {
              const isActive = activeCategoryIndex === idx
              return (
                <button
                  key={row.category}
                  onClick={() => setActiveCategoryIndex(idx)}
                  className={`p-4 text-left border-r border-border last:border-r-0 transition-colors flex flex-col justify-between space-y-2 ${
                    isActive
                      ? "bg-background text-foreground font-semibold"
                      : "text-muted-foreground hover:bg-card hover:text-foreground"
                  }`}
                >
                  <span className="text-[10px] font-mono text-accent font-bold tracking-widest">
                    0{idx + 1}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider line-clamp-1">
                    {row.category}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Side-by-Side Comparison Stage */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategoryIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="p-6 md:p-10 space-y-8"
            >
              {/* Category Indicator */}
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <span className="text-xs font-mono text-accent font-bold uppercase tracking-widest flex items-center gap-2">
                  <Zap className="w-4 h-4" /> {activeRow.category} COMPARISON
                </span>
                <span className="text-xs font-mono text-muted-foreground">
                  SPEC 0{activeCategoryIndex + 1} OF 05
                </span>
              </div>

              {/* Contrast Grid: Conventional vs onesash */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Conventional Way (Negative contrast) */}
                <div className="p-6 border border-red-500/20 bg-red-500/5 rounded-lg space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded bg-red-500/10 text-red-600 text-[10px] font-mono font-bold tracking-wider uppercase border border-red-500/20">
                      CONVENTIONAL AGENCIES & AI TEMPLATES
                    </span>
                    <XCircle className="w-5 h-5 text-red-500/80" />
                  </div>

                  <h3 className="text-xl font-serif text-foreground font-semibold">
                    {activeRow.conventionalWay.title}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {activeRow.conventionalWay.detail}
                  </p>
                </div>

                {/* onesash Engineering Way (Positive contrast) */}
                <div className="p-6 border border-emerald-500/30 bg-emerald-500/5 rounded-lg space-y-4 relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 text-[10px] font-mono font-bold tracking-wider uppercase border border-emerald-500/20">
                      THE ONESASH ENGINEERING WAY
                    </span>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  </div>

                  <h3 className="text-xl font-serif text-foreground font-semibold">
                    {activeRow.sashWay.title}
                  </h3>

                  <p className="text-xs text-foreground leading-relaxed">
                    {activeRow.sashWay.detail}
                  </p>

                  <div className="pt-3 border-t border-emerald-500/20 flex items-center gap-2 text-[11px] font-mono text-muted-foreground">
                    <UserCheck className="w-3.5 h-3.5 text-accent" />
                    <span>Direct Lead: <strong className="text-foreground">{activeRow.sashWay.founderLead}</strong></span>
                  </div>
                </div>

              </div>

              {/* Bottom Quick Switch Controls */}
              <div className="pt-4 border-t border-border flex items-center justify-between">
                <button
                  disabled={activeCategoryIndex === 0}
                  onClick={() => setActiveCategoryIndex((prev) => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 rounded border border-border text-xs font-mono text-muted-foreground hover:text-foreground disabled:opacity-40 transition-colors"
                >
                  ← PREVIOUS ASPECT
                </button>

                <div className="flex items-center gap-1.5">
                  {comparisonData.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveCategoryIndex(i)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        activeCategoryIndex === i ? "bg-accent w-6" : "bg-border"
                      }`}
                    />
                  ))}
                </div>

                <button
                  disabled={activeCategoryIndex === comparisonData.length - 1}
                  onClick={() => setActiveCategoryIndex((prev) => Math.min(comparisonData.length - 1, prev + 1))}
                  className="px-3 py-1.5 rounded border border-border text-xs font-mono text-muted-foreground hover:text-foreground disabled:opacity-40 transition-colors flex items-center gap-1"
                >
                  <span>NEXT ASPECT</span>
                  <ArrowRight className="w-3.5 h-3.5 text-accent" />
                </button>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

        {/* 4 Core Guarantees Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {founderGuarantees.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="p-6 border border-border bg-card/30 rounded-lg space-y-3 hover:bg-card/70 transition-colors group"
              >
                <div className="w-9 h-9 rounded border border-border bg-background flex items-center justify-center text-accent group-hover:border-accent transition-colors">
                  <Icon className="w-4.5 h-4.5" />
                </div>
                <h4 className="text-base font-serif text-foreground font-semibold group-hover:text-accent transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
