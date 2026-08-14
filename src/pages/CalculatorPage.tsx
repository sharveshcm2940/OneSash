import { SEO } from "../components/common/SEO"
import { motion } from "framer-motion"
import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Calculator } from "lucide-react"
import { cn } from "../utils/cn"

const featureGroups = [
  {
    label: "Project Type",
    key: "type",
    options: [
      { label: "Business Website", price: 500 },
      { label: "Portfolio / Landing Page", price: 300 },
      { label: "E-Commerce Store", price: 1500 },
      { label: "Web Application (SaaS)", price: 3000 },
      { label: "Mobile App (Flutter)", price: 2500 },
      { label: "Custom Enterprise Software", price: 8000 },
    ],
    multi: false,
  },
  {
    label: "Number of Pages / Screens",
    key: "pages",
    options: [
      { label: "1–5 pages", price: 0 },
      { label: "6–10 pages", price: 300 },
      { label: "11–20 pages", price: 700 },
      { label: "20+ pages", price: 1500 },
    ],
    multi: false,
  },
  {
    label: "Features (select all that apply)",
    key: "features",
    options: [
      { label: "User Authentication & Accounts", price: 400 },
      { label: "Payment Gateway (Stripe/Razorpay)", price: 500 },
      { label: "Admin Dashboard", price: 600 },
      { label: "CMS / Blog System", price: 350 },
      { label: "Third-party API Integration", price: 400 },
      { label: "AI / ML Integration", price: 1200 },
      { label: "Real-time Features (Chat/Notifications)", price: 700 },
      { label: "Multi-language Support", price: 300 },
      { label: "Analytics Dashboard", price: 500 },
    ],
    multi: true,
  },
  {
    label: "Timeline",
    key: "timeline",
    options: [
      { label: "Standard (8–12 weeks)", price: 0 },
      { label: "Accelerated (4–8 weeks)", price: 500 },
      { label: "Rush (2–4 weeks)", price: 1200 },
    ],
    multi: false,
  },
]

export const CalculatorPage = () => {
  const [selections, setSelections] = useState<Record<string, string[]>>({})

  const toggle = (groupKey: string, label: string, multi: boolean) => {
    setSelections(prev => {
      const cur = prev[groupKey] || []
      if (multi) {
        return { ...prev, [groupKey]: cur.includes(label) ? cur.filter(x => x !== label) : [...cur, label] }
      }
      return { ...prev, [groupKey]: [label] }
    })
  }

  const total = featureGroups.reduce((acc, group) => {
    const sel = selections[group.key] || []
    return acc + group.options.filter(o => sel.includes(o.label)).reduce((s, o) => s + o.price, 0)
  }, 0)

  const hasSelections = Object.values(selections).some(v => v.length > 0)

  return (
    <>
      <SEO
        title="Interactive Software Project Cost Calculator"
        description="Estimate the scope and timeline for your web application, mobile app, SaaS product, or AI system with onesash's interactive cost calculator."
        keywords="software cost calculator, web app estimation, project cost calculator, hire software developers cost"
      />

      <section className="relative pt-36 pb-10 px-4 md:px-6 text-center overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <motion.span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Calculator className="inline w-4 h-4 mr-1" /> Project Estimator
          </motion.span>
          <motion.h1 className="text-5xl md:text-6xl font-heading font-bold mb-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Instant <span className="text-gradient">Cost Estimate</span>
          </motion.h1>
          <motion.p className="text-muted-foreground text-lg max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            Select your project requirements below to get a ballpark budget estimate. No sign-up needed.
          </motion.p>
        </div>
      </section>

      <section className="pb-32 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Options */}
            <div className="lg:col-span-2 space-y-8">
              {featureGroups.map((group, gi) => (
                <motion.div
                  key={group.key}
                  className="rounded-2xl border border-border bg-card p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: gi * 0.1 }}
                >
                  <h3 className="font-heading font-bold text-lg mb-4">{group.label}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {group.options.map(opt => {
                      const selected = (selections[group.key] || []).includes(opt.label)
                      return (
                        <button
                          key={opt.label}
                          onClick={() => toggle(group.key, opt.label, group.multi)}
                          className={cn(
                            "flex items-center justify-between gap-2 p-4 rounded-xl border text-left text-sm transition-all",
                            selected
                              ? "border-primary bg-primary/10 text-primary font-semibold shadow-[0_0_15px_rgba(80,70,229,0.15)]"
                              : "border-border hover:border-primary/30 hover:bg-primary/5 text-foreground"
                          )}
                        >
                          <span>{opt.label}</span>
                          <span className="text-xs font-mono shrink-0 opacity-70">+${opt.price.toLocaleString()}</span>
                        </button>
                      )
                    })}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Sticky Estimate Panel */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <motion.div
                  className="rounded-2xl border border-primary/20 bg-card p-6 shadow-[0_0_40px_rgba(80,70,229,0.08)]"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="font-heading font-bold text-xl mb-6">Your Estimate</h3>

                  <div className="space-y-2 mb-6 min-h-[80px]">
                    {!hasSelections ? (
                      <p className="text-muted-foreground text-sm">Select options to see your estimate.</p>
                    ) : (
                      featureGroups.map(group => {
                        const sel = selections[group.key] || []
                        return sel.map(label => {
                          const opt = group.options.find(o => o.label === label)
                          if (!opt) return null
                          return (
                            <div key={label} className="flex justify-between text-sm">
                              <span className="text-muted-foreground truncate mr-2">{label}</span>
                              <span className="font-semibold shrink-0">${opt.price.toLocaleString()}</span>
                            </div>
                          )
                        })
                      })
                    )}
                  </div>

                  <div className="border-t border-border pt-4 mb-6">
                    <div className="flex justify-between items-end">
                      <span className="text-sm text-muted-foreground">Estimated Total</span>
                      <motion.span
                        key={total}
                        className="text-3xl font-heading font-black text-gradient"
                        initial={{ scale: 0.8, opacity: 0.5 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        ${total.toLocaleString()}
                      </motion.span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">*Estimate is a starting point. Final quote after discovery call.</p>
                  </div>

                  <Link
                    to="/contact"
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(80,70,229,0.3)]"
                  >
                    Get Exact Quote
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
