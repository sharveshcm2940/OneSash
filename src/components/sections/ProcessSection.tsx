import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import {
  FileCode2,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
  Activity,
  CheckCircle2,
  Terminal,
  UserCheck,
  Clock,
  Layers,
  ChevronRight
} from "lucide-react"

export interface ProcessStage {
  id: string
  stepNumber: string
  title: string
  subtitle: string
  leadFounder: string
  timeline: string
  icon: any
  summary: string
  inputData: string
  deliveredArtifacts: string[]
  qualityCheck: string
  codeSnippet: string
}

const processStages: ProcessStage[] = [
  {
    id: "stage-01",
    stepNumber: "STAGE 01",
    title: "Discovery & Architectural Blueprint",
    subtitle: "Deconstructing Requirements & Database Modeling",
    leadFounder: "Siddharth & Sarveshvara",
    timeline: "Days 1 – 3",
    icon: FileCode2,
    summary:
      "We eliminate ambiguity before writing code. Through direct discovery sessions with Sarveshvara, Sharvesh, and Siddharth, we draft system ERDs, choose the tech stack, and finalize the API data contracts.",
    inputData: "Operational pain points, workflow diagrams, brand guidelines, and core data requirements.",
    deliveredArtifacts: [
      "Normalized PostgreSQL / Firestore database schema ERD",
      "API route definitions & OpenAPI v3 contract specifications",
      "Milestone breakdown document with fixed target delivery dates",
      "Technology stack architecture document (React, Node, Cloud Run)"
    ],
    qualityCheck: "Zero ambiguous user stories. Every API endpoint and data entity mapped prior to development.",
    codeSnippet: `// Schema Contract: Tenant Isolation
export interface SystemBlueprint {
  tenantId: string;
  dataSchema: NormalizedDatabaseSchema;
  securityRules: RowLevelSecurityPolicy[];
}`
  },
  {
    id: "stage-02",
    stepNumber: "STAGE 02",
    title: "UI Design Tokens & WebGL Prototyping",
    subtitle: "High-Contrast Responsive Layouts",
    leadFounder: "Sharvesh CM (Interactive UI Lead)",
    timeline: "Days 4 – 7",
    icon: PenTool,
    summary:
      "We design responsive, high-contrast user interfaces with zero AI slop or generic templates. We establish typography scales, dark/light color tokens, and smooth Framer Motion micro-interactions.",
    inputData: "Brand asset preferences, typography choices, and wireframe user journeys.",
    deliveredArtifacts: [
      "High-contrast React component layout prototypes",
      "Interactive Framer Motion state transition models",
      "3D WebGL canvas scene shaders (if applicable)",
      "Accessible WCAG AA color contrast & responsive token system"
    ],
    qualityCheck: "Tested across mobile touch viewports and ultra-wide desktop displays.",
    codeSnippet: `// Design System Tokens
export const themeTokens = {
  typography: { display: "Playfair Display", body: "Plus Jakarta Sans" },
  radii: { card: "8px", badge: "4px" },
  contrastRatio: "4.5:1 Minimum (WCAG AA)"
};`
  },
  {
    id: "stage-03",
    stepNumber: "STAGE 03",
    title: "Sprint Engineering & Live Staging",
    subtitle: "Strict TypeScript & Modular Code",
    leadFounder: "Sarveshvara, Sharvesh & Siddharth",
    timeline: "Sprint Weeks 1 – 3",
    icon: Code2,
    summary:
      "The founders engineer your software in 1-week structured sprints. Every feature is written in strict TypeScript with modular React components and secure server routes.",
    inputData: "Signed architectural blueprint and validated UI design tokens.",
    deliveredArtifacts: [
      "Production-ready TypeScript & React source codebase",
      "Server-side Express / Cloud Run API middleware routes",
      "Live preview URL updated with every weekly milestone commit",
      "Automated linters preventing dead imports & broken states"
    ],
    qualityCheck: "Direct founder commits only. Zero outsourced code or unvetted third-party blobs.",
    codeSnippet: `// Express Server API Route
app.post("/api/v1/resource", async (req, res) => {
  const validated = inputSchema.parse(req.body);
  const result = await db.insert(validated);
  res.json({ success: true, data: result });
});`
  },
  {
    id: "stage-04",
    stepNumber: "STAGE 04",
    title: "QA Hardening & Security Audit",
    subtitle: "OWASP Compliance & Performance Tuning",
    leadFounder: "Sarveshvara A (Systems Lead)",
    timeline: "Pre-Release Week",
    icon: ShieldCheck,
    summary:
      "Before production deployment, we run rigorous automated lint checks, OWASP security audits, SQL injection defense validations, and database query index optimizations.",
    inputData: "Completed feature sprint code on live staging environment.",
    deliveredArtifacts: [
      "Linter audit report (0 breaking syntax or type errors)",
      "OWASP security check & sanitization verification",
      "Database query execution plan & indexing optimization log",
      "Cross-browser & mobile touch responsiveness audit"
    ],
    qualityCheck: "100% build compilation pass with zero unhandled promise rejections.",
    codeSnippet: `// Security & Sanitization
export function sanitizeInput(raw: string): string {
  return raw.replace(/<script\\b[^<]*(?:(?!<\\/script>)<[^<]*)*<\\/script>/gi, "");
}`
  },
  {
    id: "stage-05",
    stepNumber: "STAGE 05",
    title: "Cloud Release & Founder Handoff",
    subtitle: "Zero-Downtime Deployment & Source Control",
    leadFounder: "Sarveshvara & Siddharth",
    timeline: "Launch Day",
    icon: Rocket,
    summary:
      "We deploy your application to Cloud Run / Vercel with SSL certificates, custom domain bindings, automated CI/CD pipelines, and complete GitHub source repository handoff.",
    inputData: "Audited staging build & production domain credentials.",
    deliveredArtifacts: [
      "Production container deployment on Cloud Run / Vercel / AWS",
      "Custom domain binding with automated SSL renewal",
      "Full GitHub source repository transfer & environment key guide",
      "System administration & deployment documentation manual"
    ],
    qualityCheck: "Zero-downtime deployment verified with active HTTPS status checks.",
    codeSnippet: `# Cloud Run Deployment Contract
gcloud run deploy app-service \\
  --image gcr.io/project/app:v1.0 \\
  --platform managed --port 3000`
  },
  {
    id: "stage-06",
    stepNumber: "STAGE 06",
    title: "Post-Launch Growth & Active Monitoring",
    subtitle: "Direct Support & Operational Scalability",
    leadFounder: "Sarveshvara, Sharvesh & Siddharth",
    timeline: "Ongoing Partner Support",
    icon: Activity,
    summary:
      "We don't vanish after deployment. We monitor server health, optimize database queries as user traffic grows, and collaborate on future feature sprints.",
    inputData: "Live user telemetry, server error logs, and feature request backlogs.",
    deliveredArtifacts: [
      "Active uptime monitoring & error alert webhooks",
      "Database scaling & memory performance tuning",
      "Direct WhatsApp / Slack communication channel with founders",
      "Iterative feature sprint planning for phase 2 expansion"
    ],
    qualityCheck: "<24h response time SLA directly from Sarveshvara, Sharvesh, and Siddharth.",
    codeSnippet: `// Health Monitoring Endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "healthy", uptime: process.uptime(), timestamp: Date.now() });
});`
  }
]

export const ProcessSection = () => {
  const [activeStageId, setActiveStageId] = useState(processStages[0].id)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  const activeStage = processStages.find((s) => s.id === activeStageId)!

  return (
    <section id="process" className="py-24 md:py-36 bg-background border-b border-border relative">
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
            How We Work
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-foreground font-black tracking-tighter leading-[1.05]">
            A Process Built for Excellence
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-sans">
            Transparent, disciplined, and executed directly by the founders. Here is how we turn requirements into battle-tested software.
          </p>
        </motion.div>

        {/* Process Steps Stage Rail (Interactive Pipeline) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
          {processStages.map((stage, idx) => {
            const Icon = stage.icon
            const isActive = activeStageId === stage.id
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageId(stage.id)}
                className={`p-3.5 rounded-lg border text-left transition-all flex flex-col justify-between space-y-3 relative overflow-hidden ${
                  isActive
                    ? "border-accent bg-accent/10 text-foreground shadow-sm"
                    : "border-border bg-card/30 text-muted-foreground hover:bg-card/70 hover:text-foreground"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-accent font-bold tracking-widest">
                    0{idx + 1}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? "text-accent" : "text-muted-foreground"}`} />
                </div>

                <div>
                  <div className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider block">
                    {stage.timeline}
                  </div>
                  <div className="text-xs font-serif font-semibold text-foreground line-clamp-1 mt-0.5">
                    {stage.title.split(" ")[0]} {stage.title.split(" ")[1]}
                  </div>
                </div>

                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                  />
                )}
              </button>
            )
          })}
        </div>

        {/* Selected Stage Specification Console */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStageId}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="border border-border rounded-xl bg-card/20 p-6 md:p-10 space-y-8 shadow-sm"
          >
            
            {/* Stage Title Bar */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-border">
              <div className="space-y-2 max-w-2xl">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-2.5 py-0.5 rounded bg-accent/10 border border-accent/20 text-accent font-mono text-[10px] font-bold tracking-wider uppercase">
                    {activeStage.stepNumber}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                    <UserCheck className="w-3.5 h-3.5 text-accent" /> OWNER: {activeStage.leadFounder}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-serif text-foreground font-bold">
                  {activeStage.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {activeStage.summary}
                </p>
              </div>

              <div className="p-4 border border-border bg-background rounded-lg shrink-0 space-y-2 max-w-xs">
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest block">
                  STAGE TIMELINE:
                </span>
                <div className="flex items-center gap-2 text-sm font-mono font-bold text-foreground">
                  <Clock className="w-4 h-4 text-accent" />
                  <span>{activeStage.timeline}</span>
                </div>
              </div>
            </div>

            {/* Split Grid: Deliverables (Left) + Inputs, Code Contract, Quality Check (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Delivered Artifacts */}
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-accent" /> DELIVERED ENGINEERING ARTIFACTS
                </span>

                <div className="space-y-2.5">
                  {activeStage.deliveredArtifacts.map((artifact) => (
                    <div
                      key={artifact}
                      className="p-3.5 border border-border bg-background rounded-lg flex items-start gap-3 hover:border-accent/40 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs font-mono text-foreground leading-snug">
                        {artifact}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Code Contract & Quality Guarantee */}
              <div className="lg:col-span-6 space-y-5">
                
                {/* Code / Schema Blueprint snippet */}
                <div className="border border-border bg-black/90 text-emerald-400 p-4 rounded-lg font-mono text-xs overflow-x-auto space-y-2 shadow-inner">
                  <div className="flex items-center justify-between text-[10px] text-muted-foreground pb-2 border-b border-white/10 uppercase tracking-widest">
                    <span>STAGE DATA CONTRACT</span>
                    <span className="text-accent">TYPESCRIPT / CLI</span>
                  </div>
                  <pre className="text-[11px] leading-relaxed text-emerald-300 font-mono">
                    {activeStage.codeSnippet}
                  </pre>
                </div>

                {/* Input Data Contract */}
                <div className="p-4 border border-border bg-background rounded-lg space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground block">
                    STAGE INPUT REQUIREMENTS:
                  </span>
                  <p className="text-xs text-foreground leading-relaxed">
                    {activeStage.inputData}
                  </p>
                </div>

                {/* Quality Rule Guarantee */}
                <div className="p-4 border border-accent/30 bg-accent/5 rounded-lg space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-accent font-bold flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" /> 1SASH QUALITY GUARANTEE
                  </span>
                  <p className="text-xs text-foreground leading-relaxed">
                    {activeStage.qualityCheck}
                  </p>
                </div>

              </div>

            </div>

            {/* Bottom Controls */}
            <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                <Layers className="w-4 h-4 text-accent" />
                <span>Stage {processStages.indexOf(activeStage) + 1} of 6 in 1Sash Sprint Lifecycle</span>
              </div>

              {processStages.indexOf(activeStage) < processStages.length - 1 ? (
                <button
                  onClick={() => setActiveStageId(processStages[processStages.indexOf(activeStage) + 1].id)}
                  className="px-4 py-2 text-xs font-mono bg-card border border-border hover:border-accent text-foreground rounded flex items-center gap-2 transition-colors"
                >
                  <span>PROCEED TO NEXT STAGE</span>
                  <ChevronRight className="w-4 h-4 text-accent" />
                </button>
              ) : (
                <a
                  href="#contact"
                  className="px-5 py-2.5 text-xs font-mono bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity font-medium"
                >
                  Schedule Discovery Call
                </a>
              )}
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
