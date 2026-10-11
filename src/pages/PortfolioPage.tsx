import { useState } from "react"
import { SEO } from "../components/common/SEO"
import { realProducts } from "../data/projectsData"
import { ProductInterfaceMockup } from "../components/ui/ProductInterfaceMockup"
import { Link } from "react-router-dom"
import { CTABannerSection } from "../components/sections/CTABannerSection"

export const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const categories = ["All", "Custom Software Development", "Web & POS Engineering", "Business Process Automation"]

  const filtered = selectedCategory === "All"
    ? realProducts
    : realProducts.filter(p => p.category === selectedCategory)

  return (
    <>
      <SEO
        title="Our Work & Delivered Software Systems | OneSash"
        description="Explore verified software systems, web platforms, and operational tools engineered by OneSash Technocrafts for real businesses."
        keywords="OneSash portfolio, custom software projects, Apar Crown apartment management, Law Throne legal CRM, QR Food Processing, Chennai software studio work"
      />

      <main className="bg-[#FAFAF8]">
        
        {/* Page Header */}
        <section className="pt-24 pb-12 md:pt-28 md:pb-16 border-b border-[#E4E4E0] bg-[#FAFAF8]">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="max-w-3xl space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-semibold tracking-tight text-[#171717] leading-[1.1]">
                Software we've engineered.<br />
                Tested in real operations.
              </h1>
              <p className="text-base sm:text-lg text-[#646464] leading-relaxed pt-1">
                We believe in transparency. Below is an honest look at our delivered projects, their business problems, technical architecture, and real operational status.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="pt-8 flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors ${
                    selectedCategory === cat
                      ? "bg-[#171717] text-white"
                      : "bg-[#F1F1EE] text-[#646464] hover:text-[#171717] border border-[#E4E4E0]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Project List */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl space-y-16">
            {filtered.map((project) => (
              <article
                key={project.id}
                id={project.id}
                className="bg-white rounded-xl border border-[#E4E4E0] p-6 sm:p-10 shadow-studio-card scroll-mt-24 space-y-8"
              >
                {/* Project Header Bar */}
                <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-[#E4E4E0] gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-medium ${
                        project.status === "Active Deployment" 
                          ? "bg-[#E6F4EA] text-[#137333]" 
                          : "bg-[#FEF7E0] text-[#B06000]"
                      }`}>
                        {project.status}
                      </span>
                      <span className="text-xs text-[#646464]">
                        {project.category}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-[#171717]">
                      {project.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#646464]">
                      {project.subtitle} • {project.clientType}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Link
                      to="/contact"
                      className="px-4 py-2 text-xs font-semibold text-white bg-[#171717] hover:bg-[#2c2c2c] rounded-md transition-colors"
                    >
                      Request Similar Build
                    </Link>
                  </div>
                </div>

                {/* Primary Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  
                  {/* Left Column: Problem, Solution, Features (5 cols) */}
                  <div className="lg:col-span-5 space-y-5">
                    
                    {/* The Business Problem */}
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#171717] block mb-1">
                        The Problem
                      </span>
                      <p className="text-xs sm:text-sm text-[#171717] leading-relaxed">
                        {project.businessProblem}
                      </p>
                    </div>

                    {/* How OneSash Solved It */}
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#171717] block mb-1">
                        Our Solution
                      </span>
                      <p className="text-xs sm:text-sm text-[#646464] leading-relaxed">
                        {project.solution}
                      </p>
                    </div>

                    {/* Main Features */}
                    <div className="pt-1">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#171717] block mb-2">
                        Key Features & Workflows
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#646464]">
                        {project.keyFeatures.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#1459D9] font-bold">·</span>
                            <span className="leading-snug">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    <div className="p-4 bg-[#FAFAF8] rounded-lg border border-[#E4E4E0] space-y-1.5">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#171717] block">
                        Deliverables
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.deliverables.map((deliv, idx) => (
                          <span key={idx} className="px-2 py-0.5 bg-white rounded text-[11px] font-medium text-[#171717] border border-[#E4E4E0]">
                            {deliv}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#646464] block mb-1.5">
                        Technology Stack
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech, idx) => (
                          <span key={idx} className="px-2 py-0.5 bg-[#F1F1EE] rounded text-[11px] text-[#171717] border border-[#E4E4E0]">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Right Column: Realistic Interface Frame (7 cols) */}
                  <div className="lg:col-span-7 space-y-2">
                    <div className="bg-[#F1F1EE] p-3 rounded-xl border border-[#E4E4E0]">
                      <ProductInterfaceMockup type={project.interfaceType} className="w-full" />
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-[#646464] px-1">
                      <span>Delivered system preview for {project.name}</span>
                      <span>Built: {project.year}</span>
                    </div>
                  </div>

                </div>

              </article>
            ))}
          </div>
        </section>

        {/* Bottom Banner */}
        <CTABannerSection />

      </main>
    </>
  )
}
