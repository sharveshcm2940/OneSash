import React, { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { 
  Search, 
  PenTool, 
  Code2, 
  Rocket, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Sparkles
} from "lucide-react"

interface ProcessMilestone {
  id: string
  number: string
  phase: string
  title: string
  timeframe: string
  summary: string
  deliverable: string
  icon: React.ElementType
  accentColor: string
}

const MILESTONES: ProcessMilestone[] = [
  {
    id: "discover",
    number: "01",
    phase: "Discover",
    title: "Architecture & Spec",
    timeframe: "Example: Weeks 1–2",
    summary: "System blueprint, data schemas, API contracts, and fixed-milestone budget.",
    deliverable: "Architecture Spec & Budget",
    icon: Search,
    accentColor: "#000000"
  },
  {
    id: "design",
    number: "02",
    phase: "Design",
    title: "Interactive Prototype",
    timeframe: "Weeks 3–4",
    summary: "High-fidelity Figma screen states, responsive layouts, and clickable prototypes.",
    deliverable: "Clickable Figma Prototype",
    icon: PenTool,
    accentColor: "#000000"
  },
  {
    id: "build",
    number: "03",
    phase: "Build",
    title: "Sprint Engineering",
    timeframe: "Weeks 5–9",
    summary: "Agile 2-week sprints with strict TypeScript gates and staging demos every 10 business days.",
    deliverable: "Verified Staging Codebase",
    icon: Code2,
    accentColor: "#000000"
  },
  {
    id: "launch",
    number: "04",
    phase: "Launch",
    title: "Cloud Deploy & IP",
    timeframe: "Week 10+",
    summary: "Hardened cloud infrastructure, automated CI/CD, and 100% IP code handover.",
    deliverable: "100% IP & Repository Handover",
    icon: Rocket,
    accentColor: "#000000"
  }
]

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0)

  return (
    <section id="process" className="bg-[#FAFAF8] py-14 sm:py-16 md:py-20 border-b border-[#E4E4E0] relative overflow-hidden">
      {/* Subtle micro background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#171717 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        
        {/* Compact Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12 pb-6 border-b border-[#E4E4E0]">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-white rounded-full border border-[#E4E4E0] shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#171717] animate-pulse" />
              <span className="text-[10px] font-mono font-semibold tracking-wider text-[#646464] uppercase">
                Example project timeline — agreed after discovery
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold tracking-tight text-[#171717]">
              From your first conversation to launch.
            </h2>
            
            <p className="text-xs sm:text-sm text-[#646464] max-w-xl">
              A predictable, sprint-by-sprint engineering timeline with verified staging demos every 10 business days.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#171717] hover:opacity-70 transition-opacity shrink-0 group self-start sm:self-end"
          >
            <span>Start your project</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* ==================== DESKTOP MINI TIMELINE ==================== */}
        <div className="hidden md:block">
          {/* Timeline Track with Milestones */}
          <div className="relative mb-8">
            {/* Background Track Line */}
            <div className="absolute top-6 left-12 right-12 h-[2px] bg-[#E4E4E0] z-0" />
            
            {/* Animated Active Progress Line */}
            <motion.div 
              className="absolute top-6 left-12 h-[2px] bg-[#171717] z-0"
              initial={false}
              animate={{ 
                width: `${(activeStep / (MILESTONES.length - 1)) * (100 - (24 / 6))}%` 
              }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            />

            {/* 4 Milestone Stepper Nodes */}
            <div className="grid grid-cols-4 gap-4 relative z-10">
              {MILESTONES.map((step, idx) => {
                const isActive = activeStep === idx
                const isPassed = activeStep > idx
                const IconComponent = step.icon

                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    onMouseEnter={() => setActiveStep(idx)}
                    className="flex flex-col items-center text-center group focus:outline-none cursor-pointer"
                  >
                    {/* Node Circle */}
                    <div className="relative mb-3">
                      <motion.div
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 border-2 ${
                          isActive
                            ? "bg-[#171717] text-white border-[#171717] shadow-md ring-4 ring-black/10 scale-110"
                            : isPassed
                            ? "bg-[#171717] text-white border-[#171717]"
                            : "bg-white text-[#646464] border-[#E4E4E0] group-hover:border-[#171717] group-hover:text-[#171717]"
                        }`}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <IconComponent className="w-5 h-5" />
                      </motion.div>

                      {/* Active Status Pulse Dot */}
                      {isActive && (
                        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#171717] border-2 border-white animate-pulse" />
                      )}
                    </div>

                    {/* Step Number & Phase Name */}
                    <div className="space-y-0.5">
                      <span className={`text-[10px] font-mono font-bold tracking-wider uppercase block transition-colors ${
                        isActive ? "text-[#171717]" : "text-[#888888]"
                      }`}>
                        Step {step.number} • {step.timeframe}
                      </span>
                      <span className={`text-sm font-semibold transition-colors ${
                        isActive ? "text-[#171717]" : "text-[#646464] group-hover:text-[#171717]"
                      }`}>
                        {step.phase}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Mini Interactive Cards Row */}
          <div className="grid grid-cols-4 gap-4">
            {MILESTONES.map((step, idx) => {
              const isActive = activeStep === idx

              return (
                <motion.div
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`p-5 rounded-xl border transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                    isActive
                      ? "bg-white border-[#171717] shadow-studio-card ring-1 ring-[#171717] -translate-y-1"
                      : "bg-white/70 hover:bg-white border-[#E4E4E0] hover:border-[#C8C8C4] shadow-xs"
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-semibold text-[#646464] bg-[#F1F1EE] px-2 py-0.5 rounded">
                        {step.number}
                      </span>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                        isActive ? "bg-[#171717] text-white" : "text-[#646464] bg-[#F1F1EE]"
                      }`}>
                        {step.timeframe}
                      </span>
                    </div>

                    <h3 className="text-sm font-heading font-semibold text-[#171717] leading-snug">
                      {step.title}
                    </h3>

                    <p className="text-xs text-[#646464] leading-relaxed line-clamp-3">
                      {step.summary}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-[#E4E4E0]">
                    <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#171717]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#171717] shrink-0" />
                      <span className="truncate">{step.deliverable}</span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* ==================== MOBILE MINI TIMELINE ==================== */}
        <div className="block md:hidden">
          <div className="relative pl-8 space-y-6 before:absolute before:left-3.5 before:top-3 before:bottom-3 before:w-[2px] before:bg-[#E4E4E0]">
            {MILESTONES.map((step, idx) => {
              const IconComponent = step.icon
              const isActive = activeStep === idx

              return (
                <div 
                  key={step.id} 
                  onClick={() => setActiveStep(idx)}
                  className="relative group cursor-pointer"
                >
                  {/* Vertical Node Indicator */}
                  <div className={`absolute -left-8 top-1 w-7 h-7 rounded-full flex items-center justify-center border-2 transition-all ${
                    isActive
                      ? "bg-[#171717] text-white border-[#171717] shadow-sm"
                      : "bg-white text-[#646464] border-[#E4E4E0]"
                  }`}>
                    <IconComponent className="w-3.5 h-3.5" />
                  </div>

                  {/* Compact Step Card */}
                  <div className={`p-4 rounded-xl border transition-all ${
                    isActive
                      ? "bg-white border-[#171717] shadow-studio-card ring-1 ring-[#171717]"
                      : "bg-white/80 border-[#E4E4E0]"
                  }`}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-mono font-bold text-[#171717] uppercase">
                        Step {step.number} • {step.phase}
                      </span>
                      <span className="text-[10px] font-medium text-[#646464] bg-[#F1F1EE] px-2 py-0.5 rounded">
                        {step.timeframe}
                      </span>
                    </div>

                    <h3 className="text-sm font-heading font-semibold text-[#171717]">
                      {step.title}
                    </h3>

                    <p className="text-xs text-[#646464] mt-1 leading-relaxed">
                      {step.summary}
                    </p>

                    <div className="pt-2.5 mt-2.5 border-t border-[#E4E4E0] flex items-center gap-1.5 text-[11px] font-medium text-[#171717]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#171717] shrink-0" />
                      <span>{step.deliverable}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mini Reassurance Banner */}
        <div className="mt-8 sm:mt-10 pt-6 border-t border-[#E4E4E0] flex flex-wrap items-center justify-between gap-4 text-xs text-[#646464]">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5 font-medium text-[#171717]">
              <Sparkles className="w-3.5 h-3.5 text-[#171717]" />
              Demos Every 10 Business Days
            </span>
            <span className="text-[#D4D4D0] hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5 font-medium text-[#171717]">
              <Clock className="w-3.5 h-3.5 text-[#171717]" />
              Direct WhatsApp / Call Access
            </span>
            <span className="text-[#D4D4D0] hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5 font-medium text-[#171717]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#171717]" />
              100% IP Code Handover
            </span>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#171717] hover:underline"
          >
            <span>Have a project to discuss? Contact us</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

      </div>
    </section>
  )
}
