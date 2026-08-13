import { SEO } from "../../components/common/SEO"
import { motion } from "framer-motion"
import { ArrowRight, Bot, BrainCircuit, Network, CheckCircle2 } from "lucide-react"
import { Link } from "react-router-dom"
import { CTABannerSection } from "../../components/sections/CTABannerSection"

const features = [
  { icon: Bot, title: "LLM Integration", desc: "Embed ChatGPT, Claude, or custom open-source models directly into your product workflows." },
  { icon: BrainCircuit, title: "RAG Pipelines", desc: "Retrieval-Augmented Generation to make AI chat securely with your proprietary company data." },
  { icon: Network, title: "Automated Agents", desc: "Autonomous AI agents that can browse, reason, and execute complex multi-step tasks." },
]

const processSteps = [
  "Data Readiness & Security Audit",
  "Model Selection & Prompt Engineering",
  "RAG & Vector Database Architecture",
  "Integration & Fine-tuning",
  "Deployment & Usage Monitoring",
]

export const AIPage = () => {
  return (
    <>
      <SEO
        title="AI Integration & Generative AI Solutions — Gemini & RAG"
        description="Transform your software with Gemini AI integration, RAG pipelines, autonomous AI agents, and custom fine-tuned machine learning models built by 1Sash."
        keywords="AI integration, Gemini API developers, RAG pipeline engineering, autonomous AI agents, 1Sash AI services"
      />

      <section className="pt-36 pb-20 px-4 md:px-6 bg-background border-b border-border overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(var(--primary),0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Service</p>
            <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tighter mb-6">AI Integration<br />& Engineering.</h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-10">
              Transform your product from a static tool into an intelligent assistant. We integrate cutting-edge language models and AI agents securely into your infrastructure.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/quote" className="px-6 py-3 bg-foreground text-background font-semibold rounded-xl hover:scale-105 transition-transform flex items-center gap-2">
                Start a Project <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 md:px-6 bg-muted/30 border-b border-border">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-4">Real intelligence.</h2>
            <p className="text-muted-foreground max-w-xl">Move past basic wrappers. We build sophisticated AI pipelines that actually understand your business context.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border rounded-2xl overflow-hidden">
            {features.map((feat, i) => {
              const Icon = feat.icon
              return (
                <motion.div 
                  key={feat.title} 
                  className="bg-card p-8 group hover:bg-muted/50 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Icon className="w-8 h-8 text-primary mb-6" />
                  <h3 className="font-heading font-bold text-lg mb-2">{feat.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 md:px-6 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">Technologies We Master</h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {['OpenAI', 'Anthropic', 'LangChain', 'LlamaIndex', 'Pinecone', 'Weaviate', 'HuggingFace', 'Python'].map(tech => (
                  <span key={tech} className="px-4 py-2 rounded-lg border border-border bg-muted/30 text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We utilize the absolute bleeding edge of the AI ecosystem to build fast, hallucination-resistant, and context-aware systems.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">Our Process</h2>
              <ul className="space-y-4">
                {processSteps.map((step, i) => (
                  <motion.li 
                    key={step} 
                    className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="font-medium text-sm">{step}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABannerSection />
    </>
  )
}
