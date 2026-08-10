import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import { ArrowRight, Cloud, Server, Shield, CheckCircle2 } from "lucide-react"
import { Link } from "react-router-dom"
import { CTABannerSection } from "../../components/sections/CTABannerSection"

const features = [
  { icon: Server, title: "High Availability", desc: "Multi-zone deployments ensuring 99.99% uptime for mission-critical applications." },
  { icon: Cloud, title: "Auto-Scaling", desc: "Infrastructure that automatically scales resources up during traffic spikes and down to save costs." },
  { icon: Shield, title: "Zero Trust Security", desc: "Rigorous identity management, network isolation, and encryption at rest and in transit." },
]

const processSteps = [
  "Infrastructure Audit & Planning",
  "Cloud Architecture Design",
  "Infrastructure as Code (IaC) Setup",
  "Data Migration & CI/CD Pipelines",
  "24/7 Monitoring & Optimization",
]

export const CloudPage = () => {
  return (
    <>
      <Helmet>
        <title>Cloud Solutions & DevOps — Saash Technocrafts</title>
        <meta name="description" content="Enterprise cloud architecture, migration, and DevOps services on AWS, GCP, and Azure." />
      </Helmet>

      <section className="pt-36 pb-20 px-4 md:px-6 bg-background border-b border-border overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(var(--primary),0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Service</p>
            <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tighter mb-6">Cloud Solutions<br />& DevOps.</h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-10">
              Future-proof your infrastructure. We design, migrate, and manage resilient cloud architectures that scale securely and cost-effectively.
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-4">Built to scale.</h2>
            <p className="text-muted-foreground max-w-xl">Don't let server crashes dictate your growth. Move to modern, scalable cloud infrastructure.</p>
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
                {['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Datadog'].map(tech => (
                  <span key={tech} className="px-4 py-2 rounded-lg border border-border bg-muted/30 text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                From serverless functions to massive Kubernetes clusters, we deploy Infrastructure as Code (IaC) to ensure reproducibility and stability.
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
