import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, X, Compass } from "lucide-react"

interface ComparisonService {
  name: string
  tagline: string
  duration: string
  stack: string
  focus: string
  maintenance: string
  features: Record<string, boolean | string>
}

const comparisonData: ComparisonService[] = [
  {
    name: "Web Development",
    tagline: "Optimized corporate sites, high-converting portals, and lightweight CMS solutions.",
    duration: "4 - 6 Weeks",
    stack: "Next.js, React, Tailwind, Vercel",
    focus: "SEO rankings, Core Web Vitals, Edge rendering",
    maintenance: "Quarterly reviews",
    features: {
      "Mobile Responsive": true,
      "Multi-Tenancy Isolation": false,
      "Offline Sync": false,
      "Row Level Security (RLS)": "Optional",
      "Stripe Payments API": "Standard integrations",
      "CI/CD deployment": true,
      "LLM Reasoning / RAG": "Not included",
      "Data Visualizations": "Recharts & SVG Charts"
    }
  },
  {
    name: "Mobile App Dev",
    tagline: "Native-performing iOS & Android mobile apps engineered under a unified codebase.",
    duration: "8 - 12 Weeks",
    stack: "Flutter, Firebase, SQLite, Store Kit",
    focus: "Native performance, Offline, Haptics",
    maintenance: "Bi-monthly Store compliance updates",
    features: {
      "Mobile Responsive": "Native Mobile App",
      "Multi-Tenancy Isolation": "Client-side isolated",
      "Offline Sync": true,
      "Row Level Security (RLS)": true,
      "Stripe Payments API": "Apple / Google Pay & Stripe SDK",
      "CI/CD deployment": "App Store Fastlane",
      "LLM Reasoning / RAG": "Mobile-edge optional",
      "Data Visualizations": "Native high-performance canvas"
    }
  },
  {
    name: "SaaS Platforms",
    tagline: "Enterprise cloud platforms with sub-domain routers, billing cycles, and secure RBAC.",
    duration: "10 - 14 Weeks",
    stack: "Next.js, Node.js, PostgreSQL, Stripe",
    focus: "Multi-tenant integrity, billing gates, security audits",
    maintenance: "Monthly uptime logs & security patch audits",
    features: {
      "Mobile Responsive": true,
      "Multi-Tenancy Isolation": true,
      "Offline Sync": "Optional caching",
      "Row Level Security (RLS)": true,
      "Stripe Payments API": "Full Subscription Engine (Stripe)",
      "CI/CD deployment": true,
      "LLM Reasoning / RAG": "Dynamic plugins optional",
      "Data Visualizations": "Fully customizable admin grids"
    }
  },
  {
    name: "AI Integrations",
    tagline: "Intelligent pipelines embedding vector stores, semantic queries, and agent tools.",
    duration: "8 - 12 Weeks",
    stack: "Python, FastAPI, pgvector, LangChain",
    focus: "Hallucination reduction, prompt scopes, API grounding",
    maintenance: "Weekly vector fine-tuning logs",
    features: {
      "Mobile Responsive": true,
      "Multi-Tenancy Isolation": "Optional DB metadata gating",
      "Offline Sync": false,
      "Row Level Security (RLS)": "Metadata Gated",
      "Stripe Payments API": "Credit billing integration",
      "CI/CD deployment": true,
      "LLM Reasoning / RAG": true,
      "Data Visualizations": "Conversational text & interactive widgets"
    }
  }
]

const rows = [
  "Mobile Responsive",
  "Multi-Tenancy Isolation",
  "Offline Sync",
  "Row Level Security (RLS)",
  "Stripe Payments API",
  "CI/CD deployment",
  "LLM Reasoning / RAG",
  "Data Visualizations"
]

const criteriaOptions = [
  { id: "seo", label: "Must rank high on Google (SEO)", scoreRef: { "Web Development": 99, "Mobile App Dev": 30, "SaaS Platforms": 85, "AI Integrations": 40 } },
  { id: "offline", label: "Needs to work offline without network", scoreRef: { "Web Development": 10, "Mobile App Dev": 98, "SaaS Platforms": 40, "AI Integrations": 10 } },
  { id: "billing", label: "Requires subscription billing/tiers", scoreRef: { "Web Development": 50, "Mobile App Dev": 75, "SaaS Platforms": 99, "AI Integrations": 60 } },
  { id: "privacy", label: "Strict tenant security & database isolation", scoreRef: { "Web Development": 40, "Mobile App Dev": 80, "SaaS Platforms": 99, "AI Integrations": 75 } },
  { id: "ai", label: "Needs automated summaries/semantic queries", scoreRef: { "Web Development": 30, "Mobile App Dev": 50, "SaaS Platforms": 70, "AI Integrations": 100 } },
  { id: "charts", label: "Needs rich live dashboard visualization", scoreRef: { "Web Development": 80, "Mobile App Dev": 70, "SaaS Platforms": 98, "AI Integrations": 75 } }
]

export const ServiceComparisonSection = () => {
  // Compatibility Engine State
  const [selectedCriteria, setSelectedCriteria] = useState<string[]>([])

  const handleCriteriaToggle = (id: string) => {
    if (selectedCriteria.includes(id)) {
      setSelectedCriteria(selectedCriteria.filter((c) => c !== id))
    } else {
      setSelectedCriteria([...selectedCriteria, id])
    }
  }

  // Calculate matching scores
  const matchingScores = useMemo(() => {
    const scores = {
      "Web Development": 70,
      "Mobile App Dev": 70,
      "SaaS Platforms": 70,
      "AI Integrations": 70
    }

    if (selectedCriteria.length === 0) return scores

    let webTotal = 0
    let mobileTotal = 0
    let saasTotal = 0
    let aiTotal = 0

    selectedCriteria.forEach((critId) => {
      const option = criteriaOptions.find((o) => o.id === critId)
      if (option) {
        webTotal += option.scoreRef["Web Development"]
        mobileTotal += option.scoreRef["Mobile App Dev"]
        saasTotal += option.scoreRef["SaaS Platforms"]
        aiTotal += option.scoreRef["AI Integrations"]
      }
    })

    const count = selectedCriteria.length
    return {
      "Web Development": Math.round(webTotal / count),
      "Mobile App Dev": Math.round(mobileTotal / count),
      "SaaS Platforms": Math.round(saasTotal / count),
      "AI Integrations": Math.round(aiTotal / count)
    }
  }, [selectedCriteria])

  // Get matching service name
  const optimalMatch = useMemo(() => {
    let highestScore = -1
    let bestService = "Web Development"

    Object.entries(matchingScores).forEach(([name, score]) => {
      if (score > highestScore) {
        highestScore = score
        bestService = name
      }
    })

    return { name: bestService, score: highestScore }
  }, [matchingScores])

  return (
    <section id="service-comparison" className="py-32 px-4 md:px-6 bg-muted/20 dark:bg-card/10 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Architecture Matcher</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-5xl md:text-6xl font-heading font-bold tracking-tighter">
              Service Matrix<br />& Comparison.
            </h2>
            <p className="text-muted-foreground max-w-sm leading-relaxed text-sm">
              An objective, technical side-by-side comparison. Run the compatibility finder below to see which service stack matches your requirements.
            </p>
          </div>
        </div>

        {/* Compatibility Matcher Widget (Interactive Feature) */}
        <div className="border border-border rounded-2xl p-6 md:p-8 bg-card shadow-sm space-y-6 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/2 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex items-center gap-2 border-b border-border pb-4">
            <Compass className="w-5 h-5 text-primary" />
            <h3 className="font-heading font-bold text-base">Service Compatibility Engine</h3>
          </div>

          <p className="text-xs text-muted-foreground leading-relaxed max-w-2xl">
            Toggle your business or technical criteria. Our architectural matching logic will instantly prioritize the right framework, delivery speed, and service segment for you.
          </p>

          {/* Criteria Checkbox Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
            {criteriaOptions.map((opt) => {
              const isChecked = selectedCriteria.includes(opt.id)
              return (
                <button
                  key={opt.id}
                  onClick={() => handleCriteriaToggle(opt.id)}
                  className={`flex items-center gap-3 p-3.5 rounded-xl border text-left text-xs font-semibold transition-all ${
                    isChecked 
                      ? "bg-foreground text-background border-foreground shadow-sm" 
                      : "border-border hover:bg-muted bg-transparent text-foreground/80 hover:text-foreground"
                  }`}
                >
                  <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                    isChecked ? "bg-background border-background text-foreground" : "border-border"
                  }`}>
                    {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <span>{opt.label}</span>
                </button>
              )
            })}
          </div>

          {/* Results Output */}
          <AnimatePresence>
            {selectedCriteria.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                className="border border-border bg-muted/40 rounded-xl p-5 mt-4 flex flex-col md:flex-row items-center justify-between gap-6"
              >
                <div className="space-y-1">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-muted-foreground">RECOMMENDED ARCHITECTURE</span>
                  <div className="flex items-baseline gap-2">
                    <p className="text-lg font-heading font-bold text-foreground">{optimalMatch.name}</p>
                    <span className="text-xs font-mono font-semibold text-primary">Compatibility Score: {optimalMatch.score}%</span>
                  </div>
                  <p className="text-xs text-muted-foreground max-w-md">
                    Based on your requirements, we recommend a <span className="font-bold text-foreground">{optimalMatch.name}</span> architecture due to its high score across your selection.
                  </p>
                </div>
                
                {/* Visual Matching Meter */}
                <div className="w-full md:w-48 space-y-1">
                  <div className="flex justify-between text-[10px] font-mono text-muted-foreground">
                    <span>Priority Fit</span>
                    <span>{optimalMatch.score}% Match</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-foreground"
                      initial={{ width: 0 }}
                      animate={{ width: `${optimalMatch.score}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* Comparison Grid Table */}
        <div className="border border-border rounded-2xl overflow-hidden bg-card shadow-sm overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-muted/30 border-b border-border">
                <th className="p-5 text-xs font-bold uppercase tracking-widest text-muted-foreground w-[200px]">Service Features</th>
                {comparisonData.map((service) => (
                  <th key={service.name} className="p-5 w-[220px]">
                    <div className="space-y-1">
                      <p className="font-heading font-bold text-sm text-foreground">{service.name}</p>
                      <p className="text-[10px] text-muted-foreground font-medium leading-tight line-clamp-2 min-h-[30px]">{service.tagline}</p>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {/* Dynamic properties rows */}
              <tr className="hover:bg-muted/5 transition-colors">
                <td className="p-5 text-xs font-semibold text-muted-foreground">Typical Delivery Speed</td>
                {comparisonData.map((service) => (
                  <td key={service.name} className="p-5 text-xs font-bold font-mono">
                    {service.duration}
                  </td>
                ))}
              </tr>

              <tr className="hover:bg-muted/5 transition-colors">
                <td className="p-5 text-xs font-semibold text-muted-foreground">Standard Stack</td>
                {comparisonData.map((service) => (
                  <td key={service.name} className="p-5 text-xs text-foreground/80 font-medium">
                    {service.stack}
                  </td>
                ))}
              </tr>

              <tr className="hover:bg-muted/5 transition-colors">
                <td className="p-5 text-xs font-semibold text-muted-foreground">Core Focus KPI</td>
                {comparisonData.map((service) => (
                  <td key={service.name} className="p-5 text-xs text-foreground/80 font-medium leading-normal">
                    {service.focus}
                  </td>
                ))}
              </tr>

              {/* Render Boolean Features */}
              {rows.map((rowKey) => (
                <tr key={rowKey} className="hover:bg-muted/5 transition-colors">
                  <td className="p-5 text-xs font-semibold text-muted-foreground">{rowKey}</td>
                  {comparisonData.map((service) => {
                    const value = service.features[rowKey]
                    return (
                      <td key={service.name} className="p-5 text-xs">
                        {typeof value === "boolean" ? (
                          value ? (
                            <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                              <Check className="w-4 h-4 shrink-0" />
                              <span>Standard</span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-1.5 text-muted-foreground/60">
                              <X className="w-3.5 h-3.5 shrink-0" />
                              <span>Not included</span>
                            </div>
                          )
                        ) : (
                          <span className="text-foreground/90 font-semibold">{value}</span>
                        )}
                      </td>
                    )
                  })}
                </tr>
              ))}

              {/* Maintenance row */}
              <tr className="hover:bg-muted/5 transition-colors">
                <td className="p-5 text-xs font-semibold text-muted-foreground">Ongoing Maintenance SLA</td>
                {comparisonData.map((service) => (
                  <td key={service.name} className="p-5 text-xs text-muted-foreground font-medium">
                    {service.maintenance}
                  </td>
                ))}
              </tr>

            </tbody>
          </table>
        </div>

      </div>
    </section>
  )
}
