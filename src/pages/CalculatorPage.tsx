import { useState } from "react"
import { Link } from "react-router-dom"
import { SEO } from "../components/common/SEO"
import { CTABannerSection } from "../components/sections/CTABannerSection"
import { Calculator, ArrowRight, Check, AlertCircle, Info } from "lucide-react"

interface OptionItem {
  id: string
  label: string
  priceINR: number
  priceUSD: number
  desc: string
}

interface FeatureGroup {
  key: string
  title: string
  subtitle: string
  multi: boolean
  options: OptionItem[]
}

const featureGroups: FeatureGroup[] = [
  {
    key: "platformType",
    title: "1. Core Platform Discipline",
    subtitle: "Select the primary architecture of your system.",
    multi: false,
    options: [
      { id: "custom-web", label: "Custom Software / Web Platform", priceINR: 120000, priceUSD: 1500, desc: "Bespoke operations portal, database architecture & role-based dashboard." },
      { id: "saas-app", label: "Multi-Tenant SaaS Application", priceINR: 180000, priceUSD: 2200, desc: "Customer self-service, tenant isolation & billing subscription engine." },
      { id: "mobile-app", label: "Cross-Platform Mobile App (iOS & Android)", priceINR: 160000, priceUSD: 2000, desc: "React Native / Flutter app with offline SQLite sync & push notifications." },
      { id: "automation-ai", label: "AI Integration & Automation Suite", priceINR: 140000, priceUSD: 1750, desc: "OCR document parsing, deterministic LLM pipelines & ERP webhooks." },
    ]
  },
  {
    key: "features",
    title: "2. Architectural Modules & Capabilities",
    subtitle: "Select all relevant capabilities your platform requires.",
    multi: true,
    options: [
      { id: "auth-rbac", label: "Role-Based Access Control (RBAC)", priceINR: 25000, priceUSD: 300, desc: "Multi-tier permissions (Admin, Manager, Staff, Customer)." },
      { id: "payment-upi", label: "Payment Gateway (UPI / Razorpay / Stripe)", priceINR: 30000, priceUSD: 380, desc: "Instant checkout, automated receipt generation & webhooks." },
      { id: "pdf-engine", label: "Dynamic PDF Invoice & Report Engine", priceINR: 25000, priceUSD: 300, desc: "Serverless PDF rendering for contracts, invoices & receipts." },
      { id: "realtime-ws", label: "Real-Time WebSocket Sync", priceINR: 35000, priceUSD: 450, desc: "Sub-second live queues, kitchen display units & status feeds." },
      { id: "offline-sync", label: "Offline-First SQLite Cache", priceINR: 35000, priceUSD: 450, desc: "Zero-data loss in low connectivity areas with background sync." },
      { id: "ai-extraction", label: "Deterministic AI / OCR Parser", priceINR: 60000, priceUSD: 750, desc: "Zod-validated schema gate extracting data from scanned docs." },
      { id: "cron-messaging", label: "WhatsApp / Email Automated Reminders", priceINR: 25000, priceUSD: 300, desc: "Scheduled billing runs & transactional message alerts." },
    ]
  },
  {
    key: "timeline",
    title: "3. Delivery Window",
    subtitle: "Select your target timeline for the live cloud release.",
    multi: false,
    options: [
      { id: "standard", label: "Standard Delivery (8–10 Weeks)", priceINR: 0, priceUSD: 0, desc: "Paced bi-weekly sprints with scheduled milestone reviews." },
      { id: "accelerated", label: "Accelerated Delivery (4–6 Weeks)", priceINR: 40000, priceUSD: 500, desc: "Dedicated dual-engineer pair programming sprints." },
      { id: "expedited", label: "Expedited Sprint (3–4 Weeks)", priceINR: 80000, priceUSD: 1000, desc: "Priority delivery with daily staging synchronization." },
    ]
  }
]

export const CalculatorPage = () => {
  const [selections, setSelections] = useState<Record<string, string[]>>({
    platformType: ["custom-web"],
    features: ["auth-rbac", "payment-upi"],
    timeline: ["standard"]
  })

  const [currency, setCurrency] = useState<"INR" | "USD">("INR")

  const toggle = (groupKey: string, optionId: string, multi: boolean) => {
    setSelections(prev => {
      const cur = prev[groupKey] || []
      if (multi) {
        return {
          ...prev,
          [groupKey]: cur.includes(optionId) ? cur.filter(x => x !== optionId) : [...cur, optionId]
        }
      }
      return { ...prev, [groupKey]: [optionId] }
    })
  }

  // Calculate totals
  const total = featureGroups.reduce((acc, group) => {
    const sel = selections[group.key] || []
    return acc + group.options
      .filter(o => sel.includes(o.id))
      .reduce((s, o) => s + (currency === "INR" ? o.priceINR : o.priceUSD), 0)
  }, 0)

  return (
    <>
      <SEO
        title="Interactive Software Cost Estimator & Scope Calculator | OneSash"
        description="Estimate realistic costs and delivery windows for your custom software, web app, or mobile platform with OneSash's transparent scope calculator."
        keywords="software cost calculator, web development pricing India, hire software developers Chennai cost, hire software developers Bangalore cost, custom software budget"
      />

      <main className="bg-[#FAFAF8] pt-24 pb-16 md:pt-28 md:pb-20 border-b border-[#E4E4E0]">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          
          {/* Header */}
          <div className="max-w-3xl mb-12 space-y-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-semibold tracking-tight text-[#171717] leading-[1.1]">
              Software Project Cost Estimator.
            </h1>
            <p className="text-base sm:text-lg text-[#646464] leading-relaxed pt-1">
              Select your required technical modules to get an immediate, realistic ballpark estimate. We believe in transparent pricing without hidden surprises.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="text-xs font-semibold text-[#171717]">Display Currency:</span>
              <div className="inline-flex rounded-lg border border-[#E4E4E0] bg-[#F1F1EE] p-0.5 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setCurrency("INR")}
                  className={`px-3 py-1 rounded-md transition-all ${
                    currency === "INR" ? "bg-white text-[#171717] shadow-xs" : "text-[#646464]"
                  }`}
                >
                  INR (₹)
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency("USD")}
                  className={`px-3 py-1 rounded-md transition-all ${
                    currency === "USD" ? "bg-white text-[#171717] shadow-xs" : "text-[#646464]"
                  }`}
                >
                  USD ($)
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Options Chooser (8 cols) */}
            <div className="lg:col-span-8 space-y-10">
              {featureGroups.map((group) => (
                <div key={group.key} className="bg-white rounded-2xl border border-[#E4E4E0] p-6 sm:p-8 shadow-studio-card space-y-4">
                  <div>
                    <h2 className="text-lg font-heading font-semibold text-[#171717]">{group.title}</h2>
                    <p className="text-xs text-[#646464]">{group.subtitle}</p>
                  </div>

                  <div className="space-y-2.5">
                    {group.options.map((opt) => {
                      const isSelected = (selections[group.key] || []).includes(opt.id)
                      const price = currency === "INR" ? `₹${opt.priceINR.toLocaleString()}` : `$${opt.priceUSD.toLocaleString()}`

                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => toggle(group.key, opt.id, group.multi)}
                          className={`w-full text-left p-4 rounded-xl border transition-all flex items-start justify-between gap-4 cursor-pointer ${
                            isSelected
                              ? "bg-[#171717] border-[#171717] text-white shadow-xs"
                              : "bg-[#FAFAF8] border-[#E4E4E0] hover:border-[#171717] text-[#646464]"
                          }`}
                        >
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                                isSelected ? "bg-white border-white text-black" : "border-[#E4E4E0] bg-white"
                              }`}>
                                {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                              </div>
                              <span className={`text-xs sm:text-sm font-semibold ${isSelected ? "text-white" : "text-[#171717]"}`}>
                                {opt.label}
                              </span>
                            </div>
                            <p className={`text-[11px] pl-6 leading-relaxed ${isSelected ? "text-white/80" : "text-[#646464]"}`}>
                              {opt.desc}
                            </p>
                          </div>

                          <div className="text-right shrink-0">
                            <span className={`font-mono text-xs font-semibold ${isSelected ? "text-white" : "text-[#646464]"}`}>
                              {opt.priceINR === 0 ? "Included" : `+${price}`}
                            </span>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Sticky Summary Box (4 cols) */}
            <div className="lg:col-span-4 sticky top-28 space-y-4">
              <div className="bg-white rounded-2xl border border-[#E4E4E0] p-6 shadow-studio-card space-y-6">
                <div className="pb-4 border-b border-[#E4E4E0]">
                  <span className="text-[10px] font-semibold tracking-wider text-[#646464] uppercase block">
                    ESTIMATED BUDGET
                  </span>
                  <div className="text-3xl font-heading font-bold text-[#171717] mt-1">
                    {currency === "INR" ? `₹${total.toLocaleString()}` : `$${total.toLocaleString()}`}
                  </div>
                  <p className="text-[11px] text-[#646464] mt-1">
                    Full IP ownership, source code repository & deployment setup included.
                  </p>
                </div>

                {/* Selected Modules Breakdown */}
                <div className="space-y-2 text-xs">
                  <span className="text-[10px] uppercase font-semibold text-[#646464] block">Included Items:</span>
                  {featureGroups.map(group => {
                    const sel = selections[group.key] || []
                    return sel.map(optId => {
                      const opt = group.options.find(o => o.id === optId)
                      if (!opt) return null
                      const price = currency === "INR" ? `₹${opt.priceINR.toLocaleString()}` : `$${opt.priceUSD.toLocaleString()}`
                      return (
                        <div key={optId} className="flex justify-between items-center text-[11px] text-[#646464]">
                          <span className="truncate pr-2">• {opt.label}</span>
                          <span className="font-mono shrink-0">{opt.priceINR === 0 ? "Base" : price}</span>
                        </div>
                      )
                    })
                  })}
                </div>

                <div className="pt-2">
                  <Link
                    to="/contact"
                    state={{
                      estimatedScope: {
                        projectType: featureGroups[0].options.find(o => (selections.platformType || []).includes(o.id))?.label,
                        complexity: `${(selections.features || []).length} modules selected`,
                        timeline: featureGroups[2].options.find(o => (selections.timeline || []).includes(o.id))?.label,
                        budgetEstimate: currency === "INR" ? `₹${total.toLocaleString()}` : `$${total.toLocaleString()}`
                      }
                    }}
                    className="w-full py-2.5 px-4 rounded-md text-xs font-semibold text-white bg-[#171717] hover:bg-[#2c2c2c] transition-colors flex items-center justify-center cursor-pointer"
                  >
                    Proceed with this Scope
                  </Link>
                </div>

                {/* Honest Limitation Notice */}
                <div className="p-3 bg-[#F1F1EE] rounded-xl border border-[#E4E4E0] text-[11px] text-[#646464] flex items-start gap-2">
                  <Info className="w-3.5 h-3.5 text-[#171717] shrink-0 mt-0.5" />
                  <span>
                    *This estimate provides an honest starting benchmark. Final fixed-budget proposals are locked after a 30-minute discovery call with our engineers.
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>

      <CTABannerSection />
    </>
  )
}
