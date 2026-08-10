import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import { ArrowRight, Palette, MousePointerClick, LayoutTemplate, CheckCircle2 } from "lucide-react"
import { Link } from "react-router-dom"
import { CTABannerSection } from "../../components/sections/CTABannerSection"

const features = [
  { icon: Palette, title: "Design Systems", desc: "Scalable, token-based design systems that ensure consistency across all your platforms." },
  { icon: MousePointerClick, title: "Conversion Optimized", desc: "Interfaces designed not just to look good, but to intuitively guide users to take action." },
  { icon: LayoutTemplate, title: "Pixel Perfect", desc: "Meticulous attention to typography, whitespace, and micro-interactions." },
]

const processSteps = [
  "User Research & Journey Mapping",
  "Information Architecture & Wireframing",
  "Visual Design & Component Libraries",
  "Interactive Prototyping",
  "Developer Handoff & QA",
]

export const DesignPage = () => {
  return (
    <>
      <Helmet>
        <title>UI/UX Design — Saash Technocrafts</title>
        <meta name="description" content="Premium UI/UX design services. We craft interfaces that are beautiful, intuitive, and conversion-focused." />
      </Helmet>

      <section className="pt-36 pb-20 px-4 md:px-6 bg-background border-b border-border overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(var(--primary),0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Service</p>
            <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tighter mb-6">UI/UX<br />Design.</h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-10">
              We design digital experiences that delight users and drive business results. From complex SaaS dashboards to high-converting marketing sites, we sweat the details.
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-4">Design that works.</h2>
            <p className="text-muted-foreground max-w-xl">Aesthetics mean nothing without usability. We balance form and function perfectly.</p>
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
              <h2 className="text-3xl font-heading font-bold mb-6">Our Toolkit</h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Figma', 'Framer', 'Spline', 'Adobe Creative Cloud', 'Protopie', 'Storybook'].map(tech => (
                  <span key={tech} className="px-4 py-2 rounded-lg border border-border bg-muted/30 text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We use the industry standard tools for design and prototyping, ensuring seamless collaboration and developer handoff.
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
