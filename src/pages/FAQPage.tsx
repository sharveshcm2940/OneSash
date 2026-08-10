import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "../utils/cn"

const faqs = [
  { q: "How much does a website cost?", a: "Our projects range from $499 for a basic business site to custom enterprise quotes for complex applications. Use our Project Calculator for an instant estimate tailored to your requirements." },
  { q: "How long does development take?", a: "A standard 5-page business website takes 2–4 weeks. Custom web apps and mobile apps typically take 6–16 weeks depending on complexity, integrations, and feature scope." },
  { q: "Do you redesign existing websites?", a: "Absolutely! We specialize in modernizing outdated websites. We'll redesign your site with a fresh, high-converting design while preserving your SEO and brand identity." },
  { q: "Do you provide post-launch maintenance?", a: "Yes. All our packages include a free maintenance period. After that, we offer monthly support plans covering security updates, bug fixes, performance monitoring, and feature additions." },
  { q: "Can you build a SaaS platform?", a: "Yes — SaaS development is one of our specialties. We build multi-tenant SaaS products with subscription billing, user dashboards, admin panels, and scalable cloud infrastructure." },
  { q: "Do you work with startups?", a: "We love working with startups! We offer flexible engagement models — from MVP development to full product builds — with transparent pricing that fits early-stage budgets." },
  { q: "Which technologies do you use?", a: "We work with a modern, battle-tested stack: React, Next.js, TypeScript, Node.js, Python, Flutter, PostgreSQL, AWS, and many more. We choose technology based on your project's specific needs." },
  { q: "How do I get started?", a: "Simply fill out our contact form or use the Get a Quote button. We'll schedule a free 30-minute discovery call within 24 hours to understand your goals and propose a tailored plan." },
]

const FAQItem = ({ item, index }: { item: typeof faqs[0]; index: number }) => {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      className="border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
    >
      <button
        className="w-full flex items-center justify-between gap-4 p-6 text-left font-heading font-semibold text-lg hover:text-primary transition-colors group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{item.q}</span>
        <ChevronDown className={cn("w-5 h-5 shrink-0 transition-transform duration-300 text-primary", open && "rotate-180")} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 text-muted-foreground leading-relaxed text-sm">{item.a}</div>
      </motion.div>
    </motion.div>
  )
}

export const FAQPage = () => {
  return (
    <>
      <Helmet>
        <title>FAQ — Sash Technocrafts</title>
        <meta name="description" content="Find answers to common questions about our services, pricing, timelines, and development process." />
      </Helmet>

      <section className="relative pt-36 pb-10 px-4 md:px-6 text-center overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <motion.span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>Frequently Asked Questions</motion.span>
          <motion.h1 className="text-5xl md:text-7xl font-heading font-bold mb-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Got <span className="text-gradient">Questions?</span>
          </motion.h1>
          <motion.p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            Everything you need to know before starting your project with us.
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, i) => <FAQItem key={i} item={faq} index={i} />)}
        </div>
      </section>
    </>
  )
}
