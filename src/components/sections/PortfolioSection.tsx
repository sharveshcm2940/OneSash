import { useState, useRef, useMemo } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ArrowRight, ExternalLink, Search, Sparkles, SlidersHorizontal, Check } from "lucide-react"
import { Github } from "../ui/Icons"

interface ProjectItem {
  id: number
  title: string
  year: string
  description: string
  tech: string[]
  results: string
  performanceScore: number // out of 100
  hoursSaved: number
  speedBoost: number // e.g., 3.2 representing 3.2x speedup
  category: string
}

const allProjects: ProjectItem[] = [
  {
    id: 1,
    title: "NexCommerce",
    year: "2024",
    description: "A blazing-fast custom e-commerce platform with real-time inventory, AI-powered recommendations, and seamless checkout.",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    results: "3× faster checkout, 40% more conversions",
    performanceScore: 99,
    hoursSaved: 420,
    speedBoost: 3.0,
    category: "web"
  },
  {
    id: 2,
    title: "MediTrack Pro",
    year: "2024",
    description: "HIPAA-compliant healthcare SaaS with real-time patient dashboards, scheduling, and analytics.",
    tech: ["React", "Node.js", "MongoDB", "AWS"],
    results: "Used by 200+ clinics",
    performanceScore: 96,
    hoursSaved: 580,
    speedBoost: 2.5,
    category: "saas"
  },
  {
    id: 3,
    title: "UrbanRide",
    year: "2024",
    description: "Ride-hailing app with live tracking, in-app payments, and ML-powered driver-passenger matching.",
    tech: ["Flutter", "Firebase", "Google Maps", "Python"],
    results: "50K+ downloads in first month",
    performanceScore: 94,
    hoursSaved: 310,
    speedBoost: 4.2,
    category: "mobile"
  },
  {
    id: 4,
    title: "InsightAI",
    year: "2024",
    description: "Business intelligence platform that transforms raw data into insights with natural language querying powered by LLMs.",
    tech: ["React", "Python", "OpenAI", "LangChain"],
    results: "80% reduction in reporting time",
    performanceScore: 95,
    hoursSaved: 750,
    speedBoost: 5.0,
    category: "ai"
  },
  {
    id: 5,
    title: "LaunchPad SaaS",
    year: "2025",
    description: "All-in-one project management SaaS with Kanban boards, time tracking, billing, and collaboration tools.",
    tech: ["Next.js", "Prisma", "TypeScript", "Stripe"],
    results: "1,200+ active teams",
    performanceScore: 98,
    hoursSaved: 490,
    speedBoost: 2.8,
    category: "saas"
  },
  {
    id: 6,
    title: "EduSphere",
    year: "2025",
    description: "Modern e-learning platform with live classrooms, AI-generated quizzes, progress tracking, and certification modules.",
    tech: ["React", "Node.js", "WebRTC", "AWS"],
    results: "15K+ students globally",
    performanceScore: 97,
    hoursSaved: 640,
    speedBoost: 3.5,
    category: "web"
  }
]

const categories = [
  { id: "all", label: "All Sectors" },
  { id: "web", label: "Web Applications" },
  { id: "mobile", label: "Mobile Dev" },
  { id: "saas", label: "SaaS Platforms" },
  { id: "ai", label: "AI & Data Solutions" }
]

const cardColors = ["#080812", "#051124", "#120721", "#041a0b", "#1a1005", "#011526"]

const ProjectCard = ({ item, idx }: { item: ProjectItem; idx: number }) => {
  const [hovered, setHovered] = useState(false)
  const color = cardColors[item.id % cardColors.length]

  return (
    <motion.div
      className="group rounded-xl border border-border overflow-hidden bg-card"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ delay: idx * 0.05, duration: 0.3 }}
      whileHover={{ y: -3 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Thumbnail */}
      <div
        className="relative h-44 flex flex-col justify-between p-6 overflow-hidden"
        style={{ backgroundColor: color }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
        <div className="relative z-10 flex justify-between items-start">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/30">{item.year}</span>
          <span className="text-[10px] font-bold border border-white/10 text-white/40 px-2 py-0.5 rounded">
            {item.tech[0]}
          </span>
        </div>
        <h4 className="relative z-10 text-xl font-heading font-bold text-white tracking-tight">{item.title}</h4>

        <AnimatePresence>
          {hovered && (
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-3 z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <motion.button className="w-10 h-10 rounded-full border border-white/20 bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" whileHover={{ scale: 1.1 }}>
                <Github className="w-4 h-4 text-white" />
              </motion.button>
              <motion.button className="w-10 h-10 rounded-full border border-white/20 bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" whileHover={{ scale: 1.1 }}>
                <ExternalLink className="w-4 h-4 text-white" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Body */}
      <div className="p-5 border-t border-border">
        <p className="text-xs text-muted-foreground leading-relaxed mb-4">{item.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {item.tech.map((t) => (
            <span key={t} className="px-2 py-0.5 rounded-full border border-border text-[10px] font-mono text-muted-foreground bg-muted/20">
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <div className="space-y-0.5">
            <p className="text-[10px] text-muted-foreground font-medium">✦ {item.results}</p>
            <p className="text-[9px] font-mono opacity-50">Score: {item.performanceScore}% | Speed: {item.speedBoost}x</p>
          </div>
          <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </motion.div>
  )
}

export const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTechs, setSelectedTechs] = useState<string[]>([])
  
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  // Extract all unique technologies from our data dynamically
  const uniqueTechs = useMemo(() => {
    const list = new Set<string>()
    allProjects.forEach(p => p.tech.forEach(t => list.add(t)))
    return Array.from(list)
  }, [])

  // Combined project filtering
  const filteredProjects = useMemo(() => {
    return allProjects.filter(p => {
      const matchesCategory = activeCategory === "all" || p.category === activeCategory
      const matchesSearch = 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
      const matchesTechs = 
        selectedTechs.length === 0 || 
        selectedTechs.every(t => p.tech.includes(t))
      
      return matchesCategory && matchesSearch && matchesTechs
    })
  }, [activeCategory, searchQuery, selectedTechs])

  const handleTechToggle = (tech: string) => {
    if (selectedTechs.includes(tech)) {
      setSelectedTechs(selectedTechs.filter(t => t !== tech))
    } else {
      setSelectedTechs([...selectedTechs, tech])
    }
  }

  return (
    <section id="portfolio" className="py-32 px-4 md:px-6 bg-muted/30 dark:bg-card/20">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          ref={ref}
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Our Portfolio</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-5xl md:text-6xl font-heading font-bold tracking-tighter">
              Projects We're<br />Proud Of.
            </h2>
            <p className="text-muted-foreground max-w-xs leading-relaxed text-sm">
              Explore our tech stacks and search our actual project delivery histories in real time.
            </p>
          </div>
        </motion.div>

        {/* Combined Advanced Filter and Grid System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Filtering Sidebar Column */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Sector Sidebar Selector */}
            <div className="border border-border rounded-2xl overflow-hidden bg-card/60 shadow-sm">
              <div className="px-5 py-4 border-b border-border bg-muted/20">
                <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">Sectors</h3>
              </div>
              <div className="divide-y divide-border">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`w-full flex items-center justify-between px-5 py-4 text-left text-xs font-semibold transition-all ${
                      activeCategory === cat.id 
                        ? "bg-foreground text-background" 
                        : "hover:bg-muted text-foreground bg-transparent"
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className={`text-[10px] font-mono ${activeCategory === cat.id ? "text-background/50" : "text-muted-foreground"}`}>
                      {cat.id === "all" ? allProjects.length : allProjects.filter(p => p.category === cat.id).length}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Stack Tags filter box */}
            <div className="border border-border rounded-2xl p-5 bg-card/50 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">Filter Stack</h4>
                {selectedTechs.length > 0 && (
                  <button 
                    onClick={() => setSelectedTechs([])}
                    className="text-[10px] text-muted-foreground hover:text-foreground underline transition-colors"
                  >
                    Clear
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {uniqueTechs.map((tech) => {
                  const isSelected = selectedTechs.includes(tech)
                  return (
                    <button
                      key={tech}
                      onClick={() => handleTechToggle(tech)}
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-medium border flex items-center gap-1 transition-all ${
                        isSelected 
                          ? "bg-foreground text-background border-foreground" 
                          : "border-border text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      {isSelected && <Check className="w-2.5 h-2.5" />}
                      {tech}
                    </button>
                  )
                })}
              </div>
            </div>

          </div>

          {/* Right Content Column (Search + Results Grid) */}
          <div className="lg:col-span-9 space-y-6">
            
            {/* Search inputs bar */}
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search projects by name, description, or stack..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-card border border-border rounded-xl pl-10 pr-4 py-3 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary text-foreground transition-all shadow-sm"
                />
              </div>
            </div>

            {/* Project List / Grid */}
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                  Showing {filteredProjects.length} of {allProjects.length} Projects
                </span>
                <SlidersHorizontal className="w-3.5 h-3.5 opacity-60" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory + searchQuery + selectedTechs.join("-")}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {filteredProjects.map((item, idx) => (
                    <ProjectCard key={item.id} item={item} idx={idx} />
                  ))}
                </motion.div>
              </AnimatePresence>

              {filteredProjects.length === 0 && (
                <div className="border border-dashed border-border rounded-2xl bg-card/10 py-20 text-center flex flex-col items-center justify-center gap-2">
                  <Sparkles className="w-6 h-6 opacity-30 text-muted-foreground" />
                  <p className="text-xs text-muted-foreground font-medium">No projects match your exact filter combination.</p>
                  <button 
                    onClick={() => {
                      setActiveCategory("all")
                      setSearchQuery("")
                      setSelectedTechs([])
                    }}
                    className="text-xs text-foreground font-bold underline hover:opacity-80 mt-1"
                  >
                    Reset filters
                  </button>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
