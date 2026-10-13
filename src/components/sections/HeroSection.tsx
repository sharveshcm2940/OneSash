import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowDown, ExternalLink } from "lucide-react"
import { ProductInterfaceMockup } from "../ui/ProductInterfaceMockup"
import { MechanicalRollingCounter } from "../ui/rolling-counter/MechanicalRollingCounter"

interface ProductItem {
  id: "apar-crown" | "law-throne" | "qr-food" | "pg-management"
  name: string
  category: string
  mockupType: "apartment-management" | "legal-crm" | "qr-food" | "pg-management"
  summary: string
  link: string
}

const PRODUCTS: ProductItem[] = [
  {
    id: "apar-crown",
    name: "Apar Crown",
    category: "Apartment ERP",
    mockupType: "apartment-management",
    summary: "Integrated ledger, gate security & helpdesk system.",
    link: "/portfolio#apar-crown"
  },
  {
    id: "law-throne",
    name: "Law Throne",
    category: "Legal Practice CRM",
    mockupType: "legal-crm",
    summary: "Court causelist sync & encrypted case dockets.",
    link: "/portfolio#law-throne"
  },
  {
    id: "qr-food",
    name: "QR Food Processing",
    category: "Kitchen Display Engine",
    mockupType: "qr-food",
    summary: "Real-time contactless ordering & KDS routing.",
    link: "/portfolio#qr-food"
  },
  {
    id: "pg-management",
    name: "PG Management",
    category: "Hostel Operations",
    mockupType: "pg-management",
    summary: "Multi-property bed inventory & WhatsApp rent links.",
    link: "/portfolio#pg-management"
  }
]

export const HeroSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0)
  const [isPaused, setIsPaused] = useState<boolean>(false)

  // Gentle auto-rotation that pauses when user hovers or interacts
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % PRODUCTS.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [isPaused])

  const activeProduct = PRODUCTS[activeIdx]

  return (
    <section className="relative bg-[#FAFAF8] pt-24 pb-16 md:pt-32 md:pb-24 border-b border-[#E4E4E0] overflow-hidden">
      {/* Subtle Studio Grid Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#C8C8C4 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Direct Headline, Mechanical Rolling Counter, Short Supporting Text, Short Buttons */}
          <motion.div 
            className="lg:col-span-5 space-y-5 text-left"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Studio Badge */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#F1F1EE] border border-[#E4E4E0] text-[11px] font-medium text-[#171717]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1459D9]" />
              <span>OneSash Studio · Chennai, India & Bangalore, India</span>
            </div>

            {/* Exact Headline: 5 words with accessible brand anchoring for search engines */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-heading font-semibold tracking-tight text-[#171717] leading-[1.1]">
              <span className="sr-only">OneSash — </span>We build software that works.
            </h1>

            {/* Reference Animation: Mechanical Rolling Counter */}
            <div className="pt-1 pb-1">
              <MechanicalRollingCounter align="left" className="!my-1" />
            </div>

            {/* Exact Supporting Text: 11 words */}
            <p className="text-base sm:text-lg font-normal text-[#646464] leading-relaxed max-w-lg">
              Custom applications, digital products and business tools — built around your needs.
            </p>

            {/* Buttons: Short, Clear Labels */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#work"
                className="px-6 py-3 text-xs font-semibold text-white bg-[#171717] hover:bg-[#2c2c2c] rounded-md transition-all text-center shadow-xs hover:shadow flex items-center justify-center gap-2 group"
              >
                <span>See Our Work</span>
                <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
              </a>

              <Link
                to="/contact"
                className="px-6 py-3 text-xs font-semibold text-[#171717] bg-white hover:bg-[#F1F1EE] rounded-md transition-all border border-[#E4E4E0] text-center"
              >
                Start a Project
              </Link>
            </div>

            {/* Trust Footnote */}
            <div className="pt-2 flex items-center gap-4 text-xs text-[#646464]">
              <span>Direct access to engineers</span>
              <span className="w-1 h-1 rounded-full bg-[#C8C8C4]" />
              <span>100% code ownership</span>
            </div>
          </motion.div>

          {/* Right Column: Visual Product Showcase with Genuine Interfaces */}
          <motion.div 
            className="lg:col-span-7 space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Interactive Product Selector Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-2 bg-[#F1F1EE] p-1.5 rounded-lg border border-[#E4E4E0]">
              <div className="flex flex-wrap items-center gap-1">
                {PRODUCTS.map((prod, idx) => {
                  const isActive = activeIdx === idx
                  return (
                    <button
                      key={prod.id}
                      type="button"
                      onClick={() => setActiveIdx(idx)}
                      className={`relative px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                        isActive
                          ? "bg-white text-[#171717] font-semibold shadow-xs"
                          : "text-[#646464] hover:text-[#171717]"
                      }`}
                      aria-label={`View ${prod.name}`}
                    >
                      <span>{prod.name}</span>
                      {isActive && (
                        <motion.span
                          layoutId="activeTabBadge"
                          className="absolute -bottom-1 left-2 right-2 h-0.5 bg-[#1459D9] rounded-full"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>
                  )
                })}
              </div>

              <span className="text-[11px] text-[#646464] px-2 hidden sm:inline">
                Live Interactive UI
              </span>
            </div>

            {/* Polished Mockup Container with AnimatePresence */}
            <div className="border border-[#E4E4E0] rounded-xl overflow-hidden bg-white shadow-studio-card transition-shadow hover:shadow-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProduct.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                >
                  <ProductInterfaceMockup
                    type={activeProduct.mockupType}
                    interactive={true}
                    className="w-full border-0 rounded-none shadow-none"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Current Product Meta Strip */}
            <div className="flex items-center justify-between text-xs text-[#646464] px-1 pt-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#171717]">{activeProduct.name}</span>
                <span>—</span>
                <span>{activeProduct.summary}</span>
              </div>
              <Link
                to={activeProduct.link}
                className="inline-flex items-center gap-1 text-[#1459D9] hover:underline font-semibold whitespace-nowrap"
              >
                <span>View Project</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
