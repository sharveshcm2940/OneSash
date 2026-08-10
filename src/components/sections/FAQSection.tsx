import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "How do I get started with Saash Technocrafts?",
    answer:
      "Getting started is simple. Click 'Start Your Project' or head to our Contact page and fill in a brief project description. We'll respond within 24 hours to schedule a free discovery call where we explore your goals, timeline, and budget — no strings attached.",
  },
  {
    id: 2,
    question: "What types of projects do you take on?",
    answer:
      "We specialize in custom web applications, mobile apps (iOS, Android, cross-platform), SaaS platforms, e-commerce systems, AI/ML integrations, and cloud infrastructure. Both greenfield projects and existing systems that need a major upgrade.",
  },
  {
    id: 3,
    question: "How long does a typical project take?",
    answer:
      "It depends on scope. A production-ready MVP typically takes 6–10 weeks. A full-featured enterprise product can take 3–6 months. We'll give you a detailed timeline in our proposal after the discovery call — and we stick to it.",
  },
  {
    id: 4,
    question: "What does the development process look like?",
    answer:
      "We work in focused two-week sprints: Discovery → Design → Development → QA → Launch → Support. You get weekly demo sessions, a live project board for full transparency, and a dedicated point of contact throughout the entire engagement.",
  },
  {
    id: 5,
    question: "Do you work with early-stage startups?",
    answer:
      "Absolutely. Some of our best work has been with early-stage founders building their first product. We understand that speed and budget matter at this stage and offer flexible arrangements including phased delivery and MVP-first approaches.",
  },
  {
    id: 6,
    question: "Who owns the code and intellectual property?",
    answer:
      "You do. 100%. Upon final payment, all source code, assets, and intellectual property are transferred to you with no strings attached. We also hand over full documentation and deployment guides so your team can maintain it independently.",
  },
  {
    id: 7,
    question: "Do you offer post-launch maintenance?",
    answer:
      "Yes. We offer flexible maintenance retainers covering bug fixes, security patches, performance monitoring, and ongoing feature development. Many clients stay with us long-term as their dedicated engineering partner.",
  },
  {
    id: 8,
    question: "What are your payment terms?",
    answer:
      "We typically structure payments as 40% upfront, 30% at mid-project milestone, and 30% at final delivery. For larger projects, we offer monthly billing. All terms are clearly defined in the project contract before any work begins.",
  },
]

const FAQItem = ({ faq, isOpen, onToggle }: {
  faq: typeof faqs[0]
  isOpen: boolean
  onToggle: () => void
}) => (
  <motion.div
    className="border-b border-border last:border-b-0"
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
  >
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between gap-6 py-6 text-left group"
    >
      <span className="font-heading font-semibold text-base tracking-tight group-hover:text-muted-foreground transition-colors pr-4">
        {faq.question}
      </span>
      <div className="flex-shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:bg-muted transition-colors">
        {isOpen ? (
          <Minus className="w-3.5 h-3.5" />
        ) : (
          <Plus className="w-3.5 h-3.5" />
        )}
      </div>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="content"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden"
        >
          <p className="text-sm text-muted-foreground leading-relaxed pb-6 max-w-2xl">
            {faq.answer}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
)

export const FAQSection = () => {
  const [openId, setOpenId] = useState<number | null>(1)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  const toggle = (id: number) => setOpenId(openId === id ? null : id)

  // Split into two columns
  const col1 = faqs.slice(0, 4)
  const col2 = faqs.slice(4)

  return (
    <section id="faq" className="py-32 px-4 md:px-6 bg-background">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <motion.div
          ref={ref}
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Questions</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-5xl md:text-6xl font-heading font-bold tracking-tighter">
              Frequently Asked<br />Questions.
            </h2>
            <p className="text-muted-foreground max-w-xs leading-relaxed text-sm">
              Everything you need to know before kicking off your project. Can't find what you're looking for? Just reach out.
            </p>
          </div>
        </motion.div>

        {/* Two-column accordion layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16">
          <div className="divide-y divide-border border-t border-border">
            {col1.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => toggle(faq.id)}
              />
            ))}
          </div>
          <div className="divide-y divide-border border-t border-border mt-0 lg:mt-0">
            {col2.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => toggle(faq.id)}
              />
            ))}
          </div>
        </div>

        {/* CTA below FAQ */}
        <motion.div
          className="mt-20 pt-12 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h3 className="font-heading font-bold text-xl tracking-tight mb-1">Still have questions?</h3>
            <p className="text-sm text-muted-foreground">We're happy to answer anything — no sales pressure, ever.</p>
          </div>
          <a
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-foreground text-background text-sm font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Talk to Us →
          </a>
        </motion.div>

      </div>
    </section>
  )
}
