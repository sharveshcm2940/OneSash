import { useState } from "react"
import { motion } from "framer-motion"
import { Plus, Minus } from "lucide-react"

interface SystemType {
  number: string
  title: string
  subtitle: string
  description: string
  capabilities: string[]
}

const buildCategories: SystemType[] = [
  {
    number: "01",
    title: "Web Applications",
    subtitle: "High-performance web platforms and digital interfaces",
    description: "Responsive, modern client portals, SaaS applications, and interactive Web dashboards built with React, TypeScript, and robust API integrations.",
    capabilities: ["Single Page Applications (SPAs)", "SaaS Product MVP & Scaling", "Progressive Web Apps (PWAs)", "Complex UI Dashboards"]
  },
  {
    number: "02",
    title: "Business Management Systems",
    subtitle: "Operations software for physical and digital enterprises",
    description: "Custom internal tools to automate inventory tracking, scheduling, staff management, resident systems, and daily business workflows.",
    capabilities: ["Apartment & Estate Dashboards", "Facility & Fleet Tracking", "Staff Shift & Task Scheduler", "Automated Billing & Invoicing"]
  },
  {
    number: "03",
    title: "CRM Platforms",
    subtitle: "Domain-specific customer relationship tools",
    description: "Bespoke CRMs built around specific industry workflows—such as law practice case managers, real estate lead funnels, and service agencies.",
    capabilities: ["Legal Case File Management", "Sales Pipeline Kanban Boards", "Client Retainer Tracking", "Automated Follow-up Workflows"]
  },
  {
    number: "04",
    title: "Ordering Systems",
    subtitle: "Contactless digital menus and point-of-sale platforms",
    description: "Frictionless QR ordering solutions, kitchen display interfaces, and direct customer checkout platforms engineered for low-friction transactions.",
    capabilities: ["QR Code Table Menus", "Kitchen Display Systems (KDS)", "Multi-location Inventory Sync", "Instant Contactless Payment"]
  },
  {
    number: "05",
    title: "Custom Software",
    subtitle: "Bespoke algorithms, AI pipelines, and API services",
    description: "Tailored backend APIs, automated data scrapers, custom AI content engines, and specialized software tailored to unique operational needs.",
    capabilities: ["Gemini AI & LLM Integrations", "Custom REST & GraphQL APIs", "Automated Data Pipelines", "Legacy System Migration"]
  }
]

export const WhatWeBuildSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 md:py-36 bg-background border-b border-border">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            WHAT WE BUILD
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-foreground">
            Core Engineering Capabilities
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            We focus strictly on software products that solve concrete operational and business bottlenecks.
          </p>
        </div>

        {/* Editorial List with Thin Rules */}
        <div className="border-t border-border">
          {buildCategories.map((item, idx) => {
            const isOpen = openIndex === idx

            return (
              <div
                key={item.number}
                className="border-b border-border transition-colors hover:bg-card/30"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full py-8 text-left flex items-start justify-between gap-6 group"
                >
                  <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8 flex-1">
                    <span className="font-mono text-xl md:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors">
                      {item.number}
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-2xl md:text-4xl font-serif text-foreground group-hover:accent-text transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs font-mono text-muted-foreground">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 text-muted-foreground group-hover:text-foreground">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>

                {/* Collapsible details */}
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pb-8 pt-2 pl-0 md:pl-16 space-y-6 max-w-3xl">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>

                    <div className="space-y-2">
                      <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                        Core Modules Delivered:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-foreground">
                        {item.capabilities.map((cap) => (
                          <div key={cap} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
