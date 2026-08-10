import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, CheckCircle2, Award, Zap, HelpCircle, Server, UserCheck } from "lucide-react"

interface TimelinePhase {
  id: string
  name: string
  baseWeeks: number
  description: string
  deliverables: string[]
  team: string[]
  icon: any
}

const timelineData: Record<string, TimelinePhase[]> = {
  web: [
    {
      id: "disc",
      name: "Discovery & Blueprint",
      baseWeeks: 1,
      description: "Defining user personas, sitemaps, information architecture, and final tech stacks. Establishing APIs and structural specifications.",
      deliverables: ["Product Specification Doc", "Sitemap & User Flow Charts", "Database & API Schema Design"],
      team: ["Lead Architect", "Business Analyst"],
      icon: HelpCircle
    },
    {
      id: "des",
      name: "UI/UX High-Fi Design",
      baseWeeks: 2,
      description: "Interactive wireframes and high-fidelity Figma components matching brand assets. Fully interactive prototype validation.",
      deliverables: ["Figma Design System", "Interactive Desktop & Mobile Prototypes", "Asset Handover package"],
      team: ["Senior UI/UX Designer"],
      icon: Zap
    },
    {
      id: "dev",
      name: "Core Sprint Engineering",
      baseWeeks: 4,
      description: "Developing fully-responsive React interfaces, databases, robust backend routers, and server-side components with clean code.",
      deliverables: ["Component Library Integration", "Secure Database Migrations", "API Endpoints Implementation"],
      team: ["Senior Frontend Engineer", "Senior Backend Engineer"],
      icon: Server
    },
    {
      id: "qa",
      name: "QA Auditing & Hardening",
      baseWeeks: 1,
      description: "Rigorous testing across browsers/resolutions, end-to-end integration testing, SEO optimization, and load/performance test audits.",
      deliverables: ["Browser Compatibility Matrix", "Automated Playwright Reports", "Vulnerability & Security Scan"],
      team: ["Quality Assurance Lead"],
      icon: UserCheck
    },
    {
      id: "launch",
      name: "Production Launch",
      baseWeeks: 1,
      description: "Configuring CI/CD pipelines, SSL encryption setups, domain resolution, server caching rules, and production deployment monitoring.",
      deliverables: ["Cloud Architecture Launch", "SSL Certificates Installation", "Real-time Monitoring Setup"],
      team: ["DevOps Engineer", "Project Lead"],
      icon: Award
    }
  ],
  mobile: [
    {
      id: "disc",
      name: "Product Design Scoping",
      baseWeeks: 2,
      description: "Defining native device integrations, offline sync strategies, app stores guidelines prep, and security schemas.",
      deliverables: ["App Architecture Sheet", "App Store Compliance Audit", "Mock Data Integrations Setup"],
      team: ["Mobile Solutions Architect", "Product Manager"],
      icon: HelpCircle
    },
    {
      id: "des",
      name: "Native Interface Design",
      baseWeeks: 2,
      description: "Pixel-perfect mobile layouts designed with precise thumb-zone safety, transitions, haptics, and custom dark mode layout assets.",
      deliverables: ["Figma Mobile UI kit", "Micro-interaction Prototypes", "Haptic & Animation Specifications"],
      team: ["Lead Mobile UX Specialist"],
      icon: Zap
    },
    {
      id: "dev",
      name: "Cross-Platform Engineering",
      baseWeeks: 5,
      description: "Building production Flutter code, offline local storage mechanisms, background syncing channels, and deep native bridges.",
      deliverables: ["Stable Flutter/Kotlin Core Code", "Local DB SQLite/Realm Integrations", "Secure REST/WebSockets Client"],
      team: ["Senior Flutter Engineer", "Core Mobile Specialist"],
      icon: Server
    },
    {
      id: "qa",
      name: "Device testing & Prep",
      baseWeeks: 2,
      description: "Running rigorous test cycles on virtual and actual iOS/Android test units. Performance profiling for battery, memory, and startup speeds.",
      deliverables: ["Beta TestFlight & Google Play builds", "Device Performance Reports", "Automated Crashlytics setup"],
      team: ["Senior QA Automator"],
      icon: UserCheck
    },
    {
      id: "launch",
      name: "App Store Publishing",
      baseWeeks: 1,
      description: "Preparing App Store and Google Play assets, setting store page localized metadata, completing audits, and executing phased launches.",
      deliverables: ["App Store Connect Production Release", "Play Console Rollout (100%)", "Marketing Assets Package"],
      team: ["Release Lead", "Product Owner"],
      icon: Award
    }
  ],
  saas: [
    {
      id: "disc",
      name: "Tenant Strategy & Schema",
      baseWeeks: 2,
      description: "Multi-tenancy isolation scoping, sub-domain mapping structure, subscription tiered gates, and payment hook structures.",
      deliverables: ["Multi-Tenant DB Blueprint", "Stripe Webhooks & Tiers Map", "RBAC Matrix Specification"],
      team: ["SaaS Architect", "Billing Analyst"],
      icon: HelpCircle
    },
    {
      id: "des",
      name: "Dashboard & Config UI",
      baseWeeks: 3,
      description: "Complex analytical grids, user onboarding wizards, settings screens, invoices, teammate permissions panel, and metric boards.",
      deliverables: ["Figma Dashboard UI Kit", "Onboarding Flow Map", "Interactive Analytical Charts Prototypes"],
      team: ["Lead SaaS UX Designer"],
      icon: Zap
    },
    {
      id: "dev",
      name: "Platform Sprint Delivery",
      baseWeeks: 6,
      description: "Enforcing Row-Level Security, full-stack Next.js dashboards, analytical metrics processing pipelines, and webhooks endpoints.",
      deliverables: ["Tenant Router Implementation", "Stripe Billing Engine Code", "Real-time Notifications hub"],
      team: ["Senior Next.js Developer", "Cloud Dev Specialist"],
      icon: Server
    },
    {
      id: "qa",
      name: "Security, Role & Tenant Audits",
      baseWeeks: 2,
      description: "Testing DB RLS rules against token cross-pollination. Testing plan limits execution, Stripe webhooks, and billing cycle transitions.",
      deliverables: ["Tenant Security Audit Report", "Webhook Failover testing sheets", "Auth0/Cognito edge test results"],
      team: ["Information Security Lead"],
      icon: UserCheck
    },
    {
      id: "launch",
      name: "Enterprise Scaled Launch",
      baseWeeks: 1,
      description: "High-availability multi-region cluster launch, zero-downtime deploy scripts, CDN caching rules, and logging infrastructure.",
      deliverables: ["Automated Kubernetes Clusters", "Elastic Edge Cache setup", "Centralized Grafana Dashboards"],
      team: ["Senior Site Reliability Engineer"],
      icon: Award
    }
  ],
  ai: [
    {
      id: "disc",
      name: "Model Scoping & Vector Map",
      baseWeeks: 2,
      description: "Model selection criteria, prompt architecture, chunking pipelines, vector database schemas, and embedding dimensions mapping.",
      deliverables: ["LLM Performance Blueprint", "Vector Embeddings Schema", "Prompt Matrix Specification"],
      team: ["AI Research Architect", "Data Engineer"],
      icon: HelpCircle
    },
    {
      id: "des",
      name: "AI Interaction design",
      baseWeeks: 2,
      description: "Designing conversational streams, input markdown builders, smart auto-suggest menus, streaming tokens transitions, and history loops.",
      deliverables: ["Figma Chat & UI Elements", "Streaming UI motion templates", "Fallbacks & Error States Spec"],
      team: ["Interactive AI UX Designer"],
      icon: Zap
    },
    {
      id: "dev",
      name: "Model & Agent Engineering",
      baseWeeks: 5,
      description: "Integrating Gemini @google/genai SDK, embedding databases like pgvector, configuring RAG workflows, and scheduling agent tools.",
      deliverables: ["Gemini Server Middleware", "Hybrid Semantic Search engine", "Agent Tool-Calling Modules"],
      team: ["AI Systems Engineer", "Python Backend Engineer"],
      icon: Server
    },
    {
      id: "qa",
      name: "Hallucination & Cost Audit",
      baseWeeks: 2,
      description: "Evaluating model response drift, testing vector retrieve precision, token usage budget estimations, and safety filter boundaries.",
      deliverables: ["Response Drift audit sheet", "Prompt injection hardening report", "Token Cost-Benefit metrics"],
      team: ["AI Validator Specialist"],
      icon: UserCheck
    },
    {
      id: "launch",
      name: "Scalable Inference Deploy",
      baseWeeks: 1,
      description: "Deploying API rate-limiters, model failure fallbacks, semantic memory cache layers, and live user feedback monitoring.",
      deliverables: ["Rate-limited API gateway", "Semantic Cache (Redis) Cluster", "Prompt Telemetry Monitoring"],
      team: ["Machine Learning DevOps Lead"],
      icon: Award
    }
  ]
}

const customFeaturesList = [
  { id: "cms", name: "Dynamic Blog & CMS Integration", extraWeeks: 1, cost: "Medium", desc: "Adds headless CMS (e.g. Contentful/Sanity) linking and dynamic rendering routines." },
  { id: "ecom", name: "Advanced Checkout & Stripe Hooks", extraWeeks: 2, cost: "High", desc: "Adds custom checkout flows, inventory checks, discount logic, and tax webhooks." },
  { id: "multilang", name: "Internationalization (i18n)", extraWeeks: 1, cost: "Low", desc: "Sets up localization routes, language translation files, and dynamic rtl/ltr rules." },
  { id: "mfa", name: "Enterprise Multi-Factor Auth (MFA)", extraWeeks: 1, cost: "Medium", desc: "Enforces SMS/Authenticator code challenges, recovery backup tokens, and strict audit logs." },
  { id: "search", name: "Instant Full-Text Search Indexing", extraWeeks: 1, cost: "Medium", desc: "Integrates Meilisearch/Algolia for instant dynamic search auto-results and highlighting." }
]

export const ProjectTimelineSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("web")
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1.0) // 1.0 standard, 0.7 accelerated
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0)
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])

  const currentCategoryPhases = useMemo(() => {
    return timelineData[activeCategory]
  }, [activeCategory])

  const handleFeatureToggle = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== id))
    } else {
      setSelectedFeatures([...selectedFeatures, id])
    }
  }

  // Calculate cumulative timeline durations
  const computedPhases = useMemo(() => {
    // Distribute extra weeks from selected features to the appropriate phase
    // 'cms', 'ecom' and 'search' goes to development phase
    // 'mfa' goes to discovery/development
    // 'multilang' goes to design/development
    let extraDevWeeks = 0
    let extraDesignWeeks = 0
    let extraDiscWeeks = 0

    selectedFeatures.forEach(featId => {
      const feat = customFeaturesList.find(f => f.id === featId)
      if (feat) {
        if (featId === "cms" || featId === "ecom" || featId === "search") {
          extraDevWeeks += feat.extraWeeks
        } else if (featId === "multilang") {
          extraDesignWeeks += feat.extraWeeks
        } else if (featId === "mfa") {
          extraDiscWeeks += feat.extraWeeks
        }
      }
    })

    let accumulatedWeeks = 0
    return currentCategoryPhases.map((phase) => {
      let phaseExtra = 0
      if (phase.id === "dev") phaseExtra = extraDevWeeks
      if (phase.id === "des") phaseExtra = extraDesignWeeks
      if (phase.id === "disc") phaseExtra = extraDiscWeeks

      const rawWeeks = (phase.baseWeeks + phaseExtra) * speedMultiplier
      const weeks = Number(rawWeeks.toFixed(1))
      const startWeek = Number(accumulatedWeeks.toFixed(1))
      accumulatedWeeks += weeks
      const endWeek = Number(accumulatedWeeks.toFixed(1))

      return {
        ...phase,
        weeks,
        startWeek,
        endWeek
      }
    })
  }, [currentCategoryPhases, speedMultiplier, selectedFeatures])

  const totalProjectWeeks = useMemo(() => {
    if (computedPhases.length === 0) return 0
    return computedPhases[computedPhases.length - 1].endWeek
  }, [computedPhases])

  const currentPhaseDetails = computedPhases[activePhaseIndex] || computedPhases[0]

  return (
    <section id="project-timeline" className="py-32 px-4 md:px-6 bg-background relative overflow-hidden border-t border-border">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="container mx-auto max-w-5xl">
        
        {/* Section Title */}
        <div className="mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Delivery Simulator</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-5xl md:text-6xl font-heading font-bold tracking-tighter">
              Interactive<br />Project Timeline.
            </h2>
            <p className="text-muted-foreground max-w-sm leading-relaxed text-sm">
              Select your platform parameters, add complex features, toggle execution speeds, and watch your delivery timeline sync dynamically in real time.
            </p>
          </div>
        </div>

        {/* Dashboard Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column Controls */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* 1. Category selector */}
            <div className="border border-border rounded-2xl p-5 bg-card/60 shadow-sm space-y-3.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">1. Select Platform</span>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: "web", label: "Web App" },
                  { id: "mobile", label: "Mobile Dev" },
                  { id: "saas", label: "SaaS Platform" },
                  { id: "ai", label: "AI Integration" }
                ].map((btn) => (
                  <button
                    key={btn.id}
                    onClick={() => {
                      setActiveCategory(btn.id)
                      setActivePhaseIndex(0)
                    }}
                    className={`px-3 py-2.5 rounded-xl text-xs font-semibold border transition-all text-center ${
                      activeCategory === btn.id
                        ? "bg-foreground text-background border-foreground"
                        : "border-border hover:bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Speed selector */}
            <div className="border border-border rounded-2xl p-5 bg-card/60 shadow-sm space-y-3.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">2. Select Execution Model</span>
              <div className="flex gap-2 p-1 bg-muted rounded-xl">
                <button
                  onClick={() => setSpeedMultiplier(1.0)}
                  className={`flex-1 py-2 text-center rounded-lg text-xs font-semibold transition-all ${
                    speedMultiplier === 1.0 ? "bg-background text-foreground shadow-sm" : "text-muted-foreground"
                  }`}
                >
                  Standard Execution
                </button>
                <button
                  onClick={() => setSpeedMultiplier(0.7)}
                  className={`flex-1 py-2 text-center rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1 ${
                    speedMultiplier === 0.7 ? "bg-background text-foreground shadow-sm" : "text-muted-foreground"
                  }`}
                >
                  <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  Expedited Sprint
                </button>
              </div>
              <p className="text-[10px] text-muted-foreground leading-normal">
                {speedMultiplier === 0.7 
                  ? "⚡ Accelerated delivery: Multiple senior resources scheduled in parallel. Reduces overall build duration by 30%."
                  : "✓ Standard delivery: Ideal pacing, balanced QA intervals, optimal feedback feedback loops."}
              </p>
            </div>

            {/* 3. Features Customiser checklist */}
            <div className="border border-border rounded-2xl p-5 bg-card/60 shadow-sm space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">3. Add Custom Scope Features</span>
              <div className="space-y-2.5">
                {customFeaturesList.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id)
                  return (
                    <button
                      key={feat.id}
                      onClick={() => handleFeatureToggle(feat.id)}
                      className={`w-full flex items-start gap-3 p-3 rounded-xl border text-left transition-all ${
                        isChecked 
                          ? "bg-foreground/5 border-foreground" 
                          : "border-border hover:bg-muted/40"
                      }`}
                    >
                      <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                        isChecked ? "bg-foreground border-foreground text-background" : "border-border"
                      }`}>
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-xs font-semibold text-foreground leading-tight">{feat.name}</p>
                        <p className="text-[10px] text-muted-foreground leading-relaxed">{feat.desc}</p>
                        <span className="inline-block font-mono text-[9px] text-primary bg-primary/5 px-1.5 py-0.2 rounded mt-1">
                          +{feat.extraWeeks} {feat.extraWeeks === 1 ? "Week" : "Weeks"} | Cost: {feat.cost}
                        </span>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

          </div>

          {/* Right Column Dynamic Visualisation Map */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Unified Gantt Visualization */}
            <div className="border border-border rounded-2xl p-6 bg-card shadow-sm space-y-6">
              
              <div className="flex justify-between items-center border-b border-border pb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Estimated Delivery Pipeline</span>
                </div>
                <div className="flex items-baseline gap-1 bg-muted px-3 py-1 rounded-full">
                  <span className="text-[10px] text-muted-foreground font-semibold">Total Duration:</span>
                  <span className="text-xs font-bold text-foreground font-mono">{totalProjectWeeks} Weeks</span>
                </div>
              </div>

              {/* Dynamic Gantt Bars */}
              <div className="space-y-4 pt-2">
                {computedPhases.map((phase, idx) => {
                  const isSelected = activePhaseIndex === idx
                  // Calculate width percentage relative to totalProjectWeeks
                  const widthPercent = totalProjectWeeks > 0 ? (phase.weeks / totalProjectWeeks) * 100 : 0
                  const leftPercent = totalProjectWeeks > 0 ? (phase.startWeek / totalProjectWeeks) * 100 : 0

                  return (
                    <div 
                      key={phase.id} 
                      className="space-y-1 cursor-pointer group"
                      onClick={() => setActivePhaseIndex(idx)}
                    >
                      <div className="flex justify-between text-[11px] font-semibold items-center">
                        <span className={`transition-colors flex items-center gap-1.5 ${isSelected ? "text-foreground font-bold" : "text-muted-foreground group-hover:text-foreground"}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? "bg-foreground" : "bg-muted"}`} />
                          {phase.name}
                        </span>
                        <span className="font-mono text-[10px] text-muted-foreground">
                          {phase.weeks} {phase.weeks === 1 ? "week" : "weeks"} (W{phase.startWeek} - W{phase.endWeek})
                        </span>
                      </div>

                      {/* Visual Progress Bar track */}
                      <div className="h-4 w-full bg-muted/45 rounded-lg overflow-hidden relative border border-border/30">
                        <motion.div 
                          className={`h-full absolute rounded-lg transition-all ${
                            isSelected 
                              ? "bg-foreground shadow-inner" 
                              : "bg-foreground/15 group-hover:bg-foreground/25"
                          }`}
                          initial={false}
                          animate={{ 
                            width: `${widthPercent}%`,
                            left: `${leftPercent}%` 
                          }}
                          transition={{ type: "spring", stiffness: 220, damping: 24 }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Grid Timeline labels */}
              <div className="flex justify-between border-t border-border pt-4 text-[9px] font-mono text-muted-foreground">
                <span>Start Kickoff</span>
                <span>Week {Math.round(totalProjectWeeks * 0.25)}</span>
                <span>Week {Math.round(totalProjectWeeks * 0.5)}</span>
                <span>Week {Math.round(totalProjectWeeks * 0.75)}</span>
                <span>Week {totalProjectWeeks} (Launch)</span>
              </div>

            </div>

            {/* Detailed Phase Inspection Drawer Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory + "-" + activePhaseIndex + "-" + speedMultiplier}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="border border-border rounded-2xl p-6 md:p-8 bg-card shadow-md space-y-6"
              >
                {/* Drawer Header */}
                <div className="flex items-start justify-between flex-wrap gap-4 border-b border-border pb-5">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-foreground text-background flex items-center justify-center font-bold text-sm">
                      {activePhaseIndex + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold tracking-tight">{currentPhaseDetails.name}</h3>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mt-0.5">Active Milestone Details</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="px-3 py-1.5 rounded-lg border border-border bg-muted/30 text-[10px] font-semibold text-muted-foreground font-mono">
                      Weeks: {currentPhaseDetails.weeks}
                    </div>
                    <div className="px-3 py-1.5 rounded-lg border border-border bg-muted/30 text-[10px] font-semibold text-muted-foreground font-mono">
                      Interval: W{currentPhaseDetails.startWeek} - W{currentPhaseDetails.endWeek}
                    </div>
                  </div>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1">
                  
                  {/* Left phase outline */}
                  <div className="space-y-4">
                    <div>
                      <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest block mb-2">Phase Outline</span>
                      <p className="text-xs text-foreground/90 leading-relaxed font-medium">{currentPhaseDetails.description}</p>
                    </div>

                    <div className="pt-2">
                      <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest block mb-2">Sprint Team Allocated</span>
                      <div className="flex flex-wrap gap-1.5">
                        {currentPhaseDetails.team.map((t) => (
                          <span key={t} className="px-2 py-1 rounded-md bg-muted text-[10px] font-medium text-foreground border border-border/50">
                            👤 {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right deliverables list */}
                  <div className="bg-muted/10 border border-border/80 rounded-xl p-5 space-y-4">
                    <div>
                      <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest block mb-2.5">Key Deliverables (Approved by Client)</span>
                      <ul className="space-y-2">
                        {currentPhaseDetails.deliverables.map((del) => (
                          <li key={del} className="flex items-start gap-2 text-xs">
                            <CheckCircle2 className="w-4 h-4 text-foreground shrink-0 mt-0.5" />
                            <span className="text-foreground/90 font-medium">{del}</span>
                          </li>
                        ))}
                        {currentPhaseDetails.id === "dev" && selectedFeatures.length > 0 && (
                          <li className="flex items-start gap-2 text-xs border-t border-border/60 pt-2 text-primary font-semibold">
                            <Zap className="w-4 h-4 shrink-0 mt-0.5 text-primary fill-primary/10" />
                            <span>Including {selectedFeatures.length} Custom Features</span>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>

                </div>

                {/* Navigation helpers */}
                <div className="flex justify-between items-center border-t border-border pt-4">
                  <button 
                    onClick={() => setActivePhaseIndex((prev) => (prev - 1 + computedPhases.length) % computedPhases.length)}
                    className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                  >
                    ← Previous Phase
                  </button>
                  <span className="text-[10px] font-mono text-muted-foreground">
                    Phase {activePhaseIndex + 1} of {computedPhases.length}
                  </span>
                  <button 
                    onClick={() => setActivePhaseIndex((prev) => (prev + 1) % computedPhases.length)}
                    className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Next Phase →
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  )
}
