import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiThreedotjs,
  SiNodedotjs, SiFastapi, SiGraphql,
  SiPostgresql, SiMongodb, SiRedis, SiSupabase,
  SiDocker, SiGooglecloud, SiVercel,
  SiLangchain
} from "react-icons/si"
import { Code2, Server, Database, Cloud, Bot, ArrowRight, ShieldCheck, Terminal, CheckCircle2 } from "lucide-react"
import { TechConstellation3DCanvas } from "../ui/TechConstellation3DCanvas"

// Inline fallback for OpenAI
const OpenAIIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.09 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.081 4.7883-2.7638a.792.792 0 0 0 .3934-.6814v-6.7516l2.0253 1.1683a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.5105 4.5147zm-9.4216-4.021a4.4755 4.4755 0 0 1-.535-3.0137l.142.0853 4.7836 2.7591a.792.792 0 0 0 .7868 0l5.8456-3.3748v2.3366a.071.071 0 0 1-.0332.0616l-4.831 2.7875a4.504 4.504 0 0 1-6.1588-1.6416zm-1.222-10.2222a4.485 4.485 0 0 1 2.3366-1.973l-.0047.1658v5.5257a.792.792 0 0 0 .3934.6814l5.8456 3.3748-2.0253 1.1683a.071.071 0 0 1-.071 0l-4.831-2.7875a4.504 4.504 0 0 1-1.6436-6.1555zm14.6306-3.1415l4.831 2.7875a4.504 4.504 0 0 1 1.6483 6.1555 4.485 4.485 0 0 1-2.3366 1.973l.0047-.1658V12.016a.792.792 0 0 0-.3934-.6814l-5.8456-3.3748 2.0253-1.1683a.071.071 0 0 1 .071 0zm3.2847 11.2338l-.142-.0853-4.7836-2.7591a.792.792 0 0 0-.7868 0l-5.8456 3.3748V13.882a.071.071 0 0 1 .0332-.0616l4.831-2.7875a4.504 4.504 0 0 1 6.1588 1.6416c.2132.37.3458.78.3902 1.2057zM12 14.869l-2.8384-1.6392 2.8384-1.6392 2.8384 1.6392z" />
  </svg>
)

interface TechItem {
  name: string
  Icon: any
  role: string
  whyWeUseIt: string
  productionStandard: string
}

interface StackLayer {
  id: string
  title: string
  icon: any
  subtitle: string
  summary: string
  techs: TechItem[]
}

const stackLayers: StackLayer[] = [
  {
    id: "frontend",
    title: "Client & UI Engineering",
    icon: Code2,
    subtitle: "Responsive, Type-Safe Client Interfaces",
    summary: "We craft fast, accessible user interfaces with strict TypeScript contracts and custom component systems. No heavy framework bloat—just clean React and Tailwind CSS.",
    techs: [
      {
        name: "React 18+",
        Icon: SiReact,
        role: "Primary UI Core",
        whyWeUseIt: "Provides component reusability, virtual DOM performance, and predictable unidirectional data flow.",
        productionStandard: "Modular functional components with custom hooks for state isolation."
      },
      {
        name: "TypeScript",
        Icon: SiTypescript,
        role: "Type Enforcement",
        whyWeUseIt: "Eliminates runtime type errors across client components and API payloads before code hits production.",
        productionStandard: "Strict mode enabled with shared type declarations across server and client."
      },
      {
        name: "Tailwind CSS",
        Icon: SiTailwindcss,
        role: "Design Tokens & Layout",
        whyWeUseIt: "Zero runtime overhead styling that compiles directly into minimal, responsive utility CSS.",
        productionStandard: "Strict mathematical scales and semantic token mappings."
      },
      {
        name: "Next.js",
        Icon: SiNextdotjs,
        role: "SSR & Edge Delivery",
        whyWeUseIt: "Hybrid server-side rendering for search engine indexability and instant initial page loads.",
        productionStandard: "App Router layouts with server actions and optimized asset caching."
      },
      {
        name: "Three.js",
        Icon: SiThreedotjs,
        role: "3D WebGL Canvas",
        whyWeUseIt: "Renders real-time interactive 3D graphics directly in browser viewports without plugins.",
        productionStandard: "Custom WebGL shader pipelines and ResizeObserver container bindings."
      }
    ]
  },
  {
    id: "backend",
    title: "Server & API Infrastructure",
    icon: Server,
    subtitle: "Scalable Application Logic & Microservices",
    summary: "Our backend services are built for high throughput and security. We organize logic into clear controller, service, and data layers with sanitized inputs.",
    techs: [
      {
        name: "Node.js & Express",
        Icon: SiNodedotjs,
        role: "API Gateway Runtime",
        whyWeUseIt: "Non-blocking asynchronous I/O event loop capable of handling high concurrent traffic efficiently.",
        productionStandard: "Custom error middleware, rate limiting, and CORS security headers."
      },
      {
        name: "Python & FastAPI",
        Icon: SiFastapi,
        role: "Data & ML Pipelines",
        whyWeUseIt: "Blazing fast Python backend execution with native async support and auto-generated OpenAPI docs.",
        productionStandard: "Pydantic data validation and structured JSON responses."
      },
      {
        name: "GraphQL & REST",
        Icon: SiGraphql,
        role: "Data Exchange Contracts",
        whyWeUseIt: "Structured endpoint schemas preventing over-fetching while offering flexible client queries.",
        productionStandard: "Strict OpenAPI v3 definitions and typed client fetchers."
      }
    ]
  },
  {
    id: "database",
    title: "Database & Storage",
    icon: Database,
    subtitle: "ACID-Compliant Relational & Document Stores",
    summary: "Data persistence is modeled with care. We use normalized relational schemas for business records and high-performance document stores for real-time syncing.",
    techs: [
      {
        name: "PostgreSQL",
        Icon: SiPostgresql,
        role: "Relational Engine",
        whyWeUseIt: "Industry standard ACID compliance, rich indexing, and native JSONB hybrid query capabilities.",
        productionStandard: "Drizzle / Prisma ORM integration with automated migration scripts."
      },
      {
        name: "MongoDB",
        Icon: SiMongodb,
        role: "Document Storage",
        whyWeUseIt: "Flexible schema design ideal for unstructured activity logs, media assets, and fast reads.",
        productionStandard: "Indexed query patterns and replica set connection pooling."
      },
      {
        name: "Redis",
        Icon: SiRedis,
        role: "In-Memory Cache",
        whyWeUseIt: "Sub-millisecond data retrieval for active user sessions, API rate limits, and job queues.",
        productionStandard: "Key expiration policies and pub/sub message brokering."
      },
      {
        name: "Supabase & Firebase",
        Icon: SiSupabase,
        role: "Real-Time Sync & Auth",
        whyWeUseIt: "Accelerates auth pipelines, real-time WebSocket listeners, and row-level security policies.",
        productionStandard: "Strict security rules with verified auth context checks."
      }
    ]
  },
  {
    id: "cloud",
    title: "Cloud & Deployment",
    icon: Cloud,
    subtitle: "Automated Containerization & Edge Hosting",
    summary: "We containerize every application and deploy to hardened cloud infrastructure with SSL encryption, custom domain routes, and zero-downtime releases.",
    techs: [
      {
        name: "Docker",
        Icon: SiDocker,
        role: "Container Standardization",
        whyWeUseIt: "Ensures parity across local development and production Cloud Run container instances.",
        productionStandard: "Multi-stage builds producing lightweight production images."
      },
      {
        name: "Google Cloud / Cloud Run",
        Icon: SiGooglecloud,
        role: "Serverless Container Host",
        whyWeUseIt: "Auto-scaling serverless containers with built-in HTTPS ingress, health checks, and IAM controls.",
        productionStandard: "Isolated environment secret variables and multi-region routing."
      },
      {
        name: "Vercel",
        Icon: SiVercel,
        role: "Frontend Edge Network",
        whyWeUseIt: "Instant global CDN deployment, preview links for every commit, and edge caching.",
        productionStandard: "Automated CI/CD git integration with strict environment isolation."
      }
    ]
  },
  {
    id: "ai",
    title: "AI & Intelligence",
    icon: Bot,
    subtitle: "Frontier Models & Automation Workflows",
    summary: "We integrate Gemini and frontier AI APIs server-side to automate complex document processing, semantic search, and intelligent workflow assistants.",
    techs: [
      {
        name: "Gemini API",
        Icon: Bot,
        role: "Primary Multi-Modal AI",
        whyWeUseIt: "Industry-leading context windows, fast reasoning, and reliable structured JSON outputs.",
        productionStandard: "Server-side proxy routes keeping API keys strictly private."
      },
      {
        name: "OpenAI API",
        Icon: OpenAIIcon,
        role: "Function Calling & Tools",
        whyWeUseIt: "Structured tool-use execution converting natural language into typed function parameters.",
        productionStandard: "Strict system prompts, fallback handlers, and token limits."
      },
      {
        name: "LangChain",
        Icon: SiLangchain,
        role: "Agent Orchestration",
        whyWeUseIt: "Chains complex multi-step reasoning tasks and document embedding retrievals.",
        productionStandard: "Modular agent execution graphs with logging instrumentation."
      }
    ]
  }
]

export const TechnologiesSection = () => {
  const [activeLayerId, setActiveLayerId] = useState(stackLayers[0].id)
  const [selectedTechName, setSelectedTechName] = useState<string | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  const activeLayer = stackLayers.find((l) => l.id === activeLayerId)!
  const selectedTech = activeLayer.techs.find((t) => t.name === selectedTechName) || activeLayer.techs[0]

  return (
    <section id="technologies" className="py-24 md:py-36 bg-background border-b border-border">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* Header */}
        <motion.div
          ref={ref}
          className="max-w-3xl mb-16 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground block">
            OUR TECHNICAL ARCHITECTURE
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-foreground leading-[1.05]">
            Engineering Stack & Production Standards.
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            We don't pick technologies based on transient trends. Every tool in our stack is chosen for performance, type safety, security, and long-term maintainability.
          </p>
        </motion.div>

        {/* Interactive 3D Tech Constellation Galaxy */}
        <div className="mb-12">
          <TechConstellation3DCanvas />
        </div>

        {/* Architecture Tier Selector Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-8">
          {stackLayers.map((layer) => {
            const LayerIcon = layer.icon
            const isActive = activeLayerId === layer.id
            return (
              <button
                key={layer.id}
                onClick={() => {
                  setActiveLayerId(layer.id)
                  setSelectedTechName(layer.techs[0].name)
                }}
                className={`p-4 rounded-lg border text-left transition-all flex flex-col justify-between space-y-3 ${
                  isActive
                    ? "border-accent bg-accent/10 text-foreground shadow-sm"
                    : "border-border bg-card/30 text-muted-foreground hover:bg-card/70 hover:text-foreground"
                }`}
              >
                <div className="flex items-center justify-between">
                  <LayerIcon className={`w-5 h-5 ${isActive ? "text-accent" : "text-muted-foreground"}`} />
                  <span className="text-[10px] font-mono text-muted-foreground">
                    0{stackLayers.indexOf(layer) + 1}
                  </span>
                </div>
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider block">
                    {layer.title.split(" ")[0]}
                  </div>
                  <div className="text-[11px] font-serif text-foreground font-semibold line-clamp-1">
                    {layer.title.split(" ").slice(1).join(" ")}
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        {/* Selected Tier Main Stage */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLayerId}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="border border-border rounded-xl bg-card/20 p-6 md:p-10 space-y-8"
          >
            {/* Tier Summary Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-accent font-bold uppercase tracking-widest">
                    TIER 0{stackLayers.indexOf(activeLayer) + 1}
                  </span>
                  <span className="text-muted-foreground text-xs font-mono">•</span>
                  <span className="text-xs font-mono text-muted-foreground">{activeLayer.subtitle}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif text-foreground">
                  {activeLayer.title}
                </h3>
              </div>

              <p className="text-xs text-muted-foreground max-w-md leading-relaxed">
                {activeLayer.summary}
              </p>
            </div>

            {/* Main Stage Grid: Tech List (Left) + Selected Tech Rationale (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Interactive Tech Buttons */}
              <div className="lg:col-span-5 space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground block mb-2">
                  SELECT TECHNOLOGY TO INSPECT RATIONALE:
                </span>
                <div className="space-y-2">
                  {activeLayer.techs.map((tech) => {
                    const TechIcon = tech.Icon
                    const isSelected = selectedTech.name === tech.name
                    return (
                      <button
                        key={tech.name}
                        onClick={() => setSelectedTechName(tech.name)}
                        className={`w-full p-4 rounded-lg border text-left transition-all flex items-center justify-between group ${
                          isSelected
                            ? "border-foreground bg-foreground text-background font-semibold"
                            : "border-border bg-background text-foreground hover:bg-card"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded border ${isSelected ? "border-background/30 bg-background/10 text-background" : "border-border bg-card text-accent"}`}>
                            <TechIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-sm font-serif">{tech.name}</div>
                            <div className={`text-[10px] font-mono ${isSelected ? "text-background/80" : "text-muted-foreground"}`}>
                              {tech.role}
                            </div>
                          </div>
                        </div>

                        <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? "text-background translate-x-1" : "text-muted-foreground opacity-0 group-hover:opacity-100"}`} />
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Right Column: Detailed Engineering Rationale */}
              <div className="lg:col-span-7 p-6 md:p-8 border border-border bg-background rounded-xl space-y-6 shadow-sm">
                
                {/* Tech Title & Role Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg border border-accent/30 bg-accent/10 text-accent">
                      {selectedTech.Icon && <selectedTech.Icon className="w-6 h-6" />}
                    </div>
                    <div>
                      <h4 className="text-2xl font-serif text-foreground font-bold">{selectedTech.name}</h4>
                      <span className="text-xs font-mono text-accent font-medium">{selectedTech.role}</span>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded bg-muted text-muted-foreground border border-border text-[10px] font-mono uppercase tracking-widest">
                    VERIFIED STACK
                  </span>
                </div>

                {/* Why We Use It */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-accent" /> WHY WE CHOSE THIS TOOL
                  </span>
                  <p className="text-xs md:text-sm text-foreground leading-relaxed">
                    {selectedTech.whyWeUseIt}
                  </p>
                </div>

                {/* Production Engineering Standard */}
                <div className="p-4 rounded-lg border border-border bg-card/40 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-accent flex items-center gap-1.5 font-bold">
                    <ShieldCheck className="w-3.5 h-3.5" /> ONESASH PRODUCTION STANDARD
                  </span>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {selectedTech.productionStandard}
                  </p>
                </div>

                {/* Key Guarantee Badges */}
                <div className="pt-2 flex flex-wrap gap-2 border-t border-border/60">
                  <span className="px-2.5 py-1 rounded border border-border bg-card text-[10px] font-mono text-foreground flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" /> 100% Maintained
                  </span>
                  <span className="px-2.5 py-1 rounded border border-border bg-card text-[10px] font-mono text-foreground flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Strict Security
                  </span>
                  <span className="px-2.5 py-1 rounded border border-border bg-card text-[10px] font-mono text-foreground flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Production Verified
                  </span>
                </div>

              </div>

            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
