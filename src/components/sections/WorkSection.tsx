import { realProducts } from "../../data/projectsData"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react"
import { ProductInterfaceMockup } from "../ui/ProductInterfaceMockup"

interface ProjectItem {
  id: string
  name: string
  tagline: string
  mockupType: "apartment-management" | "legal-crm" | "qr-food" | "pg-management"
  link: string
}

const PROJECTS: ProjectItem[] = [
  {
    id: "apar-crown",
    name: "Apar Crown",
    tagline: "Integrated facility management, maintenance fee ledger and gate security platform.",
    mockupType: "apartment-management",
    link: "/portfolio#apar-crown"
  },
  {
    id: "law-throne",
    name: "Law Throne",
    tagline: "Legal practice CRM synchronizing daily High Court causelists and encrypted case dockets.",
    mockupType: "legal-crm",
    link: "/portfolio#law-throne"
  },
  {
    id: "qr-food",
    name: "QR Food Processing System",
    tagline: "Contactless table ordering engine with sub-second kitchen display ticket routing.",
    mockupType: "qr-food",
    link: "/portfolio#qr-food-processing"
  },
  {
    id: "pg-management",
    name: "PG Management System",
    tagline: "Multi-property operations suite tracking bed inventories and automated rent collection.",
    mockupType: "pg-management",
    link: "/portfolio#pg-management"
  }
]

export const WorkSection: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0)

  const activeProject = PROJECTS[selectedIdx]
  const status = realProducts.find(p => p.interfaceType === activeProject.mockupType)?.status

  const nextProject = () => {
    setSelectedIdx((prev) => (prev + 1) % PROJECTS.length)
  }

  const prevProject = () => {
    setSelectedIdx((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length)
  }

  return (
    <section id="work" className="bg-[#F1F1EE] py-20 md:py-28 border-b border-[#E4E4E0]">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Section Header: Heading 3-8 words, Description 10-20 words */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 border-b border-[#E4E4E0] gap-6">
          <div className="space-y-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#646464] block">
              Featured Systems
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold tracking-tight text-[#171717]">
              Things we've built.
            </h2>
            <p className="text-base text-[#646464] max-w-xl">
              Explore the business problems behind our products. Deployment status is shown in each project.
            </p>
          </div>

          {/* Interactive Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prevProject}
              className="w-10 h-10 rounded-lg bg-white border border-[#E4E4E0] text-[#171717] hover:bg-[#FAFAF8] flex items-center justify-center transition-colors shadow-xs"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="px-3 text-xs font-semibold text-[#171717]">
              {selectedIdx + 1} / {PROJECTS.length}
            </div>
            <button
              type="button"
              onClick={nextProject}
              className="w-10 h-10 rounded-lg bg-white border border-[#E4E4E0] text-[#171717] hover:bg-[#FAFAF8] flex items-center justify-center transition-colors shadow-xs"
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Project Selector Pills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-8 pb-10">
          {PROJECTS.map((proj, idx) => {
            const isActive = selectedIdx === idx
            return (
              <button
                key={proj.id}
                type="button"
                onClick={() => setSelectedIdx(idx)}
                className={`text-left p-3.5 rounded-lg border transition-all ${
                  isActive
                    ? "bg-white border-[#171717] shadow-xs"
                    : "bg-[#FAFAF8]/70 border-[#E4E4E0] hover:bg-white text-[#646464] hover:text-[#171717]"
                }`}
              >
                <div className="text-[10px] font-semibold text-[#646464] mb-0.5">
                  0{idx + 1}
                </div>
                <div className="text-xs sm:text-sm font-semibold truncate text-[#171717]">
                  {proj.name}
                </div>
              </button>
            )
          })}
        </div>

        {/* Primary Interactive Stage */}
        <div className="bg-white rounded-2xl border border-[#E4E4E0] p-6 sm:p-10 shadow-studio-card">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              {/* Product Info: EXACTLY Product name, One-line description, View Project */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-[#E4E4E0]">
                <div className="space-y-1.5 max-w-2xl">
                  <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-[#171717]">
                    {activeProject.name}
                  </h3>
                  <p className="text-xs text-neutral-500">{status}</p>
                  <p className="text-sm sm:text-base text-[#646464] leading-relaxed">
                    {activeProject.tagline}
                  </p>
                </div>

                <Link
                  to={activeProject.link}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#171717] hover:bg-[#2c2c2c] text-white text-xs font-semibold transition-colors shrink-0 shadow-xs"
                >
                  <span>View Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Large Genuine Interface Mockup */}
              <div className="rounded-xl overflow-hidden border border-[#E4E4E0] shadow-xs">
                <ProductInterfaceMockup
                  type={activeProject.mockupType}
                  interactive={true}
                  className="w-full border-0 rounded-none shadow-none"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footnote Link */}
        <div className="pt-8 text-center">
          <Link
            to="/portfolio"
            className="text-xs font-semibold text-[#171717] hover:underline"
          >
            See project details and development status →
          </Link>
        </div>

      </div>
    </section>
  )
}
