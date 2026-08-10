import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import { ArrowRight, Code2, Layers, Zap, CheckCircle2 } from "lucide-react"
import { Link } from "react-router-dom"
import { CTABannerSection } from "../../components/sections/CTABannerSection"

const features = [
  { icon: Zap, title: "High-Performance", desc: "Optimized for speed, Core Web Vitals, and lightning-fast interactions." },
  { icon: Layers, title: "Scalable Architecture", desc: "Built on modern frameworks like React, Next.js, and Node.js to handle growth." },
  { icon: Code2, title: "Clean Codebase", desc: "Maintainable, well-documented, and strictly typed with TypeScript." },
]

const processSteps = [
  "Requirements Gathering & Architecture Planning",
  "UI/UX Design & Prototyping",
  "Frontend & Backend Engineering",
  "QA, Security, & Performance Testing",
  "Deployment & Continuous Monitoring",
]

export const WebDevPage = () => {
  return (
    <>
      <Helmet>
        <title>Web Development Services — Saash Technocrafts</title>
        <meta name="description" content="Custom web application development, SaaS platforms, and enterprise solutions built with modern tech stacks." />
      </Helmet>

      {/* Hero */}
      <section className="pt-36 pb-20 px-4 md:px-6 bg-background border-b border-border overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(var(--primary),0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Service</p>
            <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tighter mb-6">Web Application<br />Development.</h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-10">
              We build complex, high-performance web applications and SaaS platforms that scale effortlessly. No templates. No shortcuts. Just robust engineering.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/quote" className="px-6 py-3 bg-foreground text-background font-semibold rounded-xl hover:scale-105 transition-transform flex items-center gap-2">
                Start a Project <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24 px-4 md:px-6 bg-muted/30 border-b border-border">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-4">Why our web apps win.</h2>
            <p className="text-muted-foreground max-w-xl">We don't just build websites; we engineer web applications that become the core engine of your business.</p>
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

      {/* Tech Stack & Process */}
      <section className="py-24 px-4 md:px-6 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">Technologies We Master</h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {['React', 'Next.js', 'Vue', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Redis'].map(tech => (
                  <span key={tech} className="px-4 py-2 rounded-lg border border-border bg-muted/30 text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We select the right tech stack for your specific requirements, balancing development speed, maintainability, and pure performance.
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
