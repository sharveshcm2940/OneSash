import { useState } from "react"
import { Helmet } from "react-helmet-async"
import { motion, AnimatePresence } from "framer-motion"
import { TrendingUp, Target, Wrench, Award } from "lucide-react"
import { CTABannerSection } from "../components/sections/CTABannerSection"

const caseStudies = [
  {
    id: 1,
    client: "MediTrack Pro",
    industry: "Healthcare",
    title: "How We Built a HIPAA-Compliant SaaS That Scaled to 200+ Clinics",
    summary: "A healthcare startup needed a patient management platform fast — without cutting corners on compliance or performance.",
    problem: "MediCare Solutions was managing patient data across 8 clinics using spreadsheets and WhatsApp — a regulatory nightmare. They needed a secure, centralized platform that could scale to 200+ clinics within a year, while maintaining full HIPAA compliance.",
    solution: "We built MediTrack Pro: a multi-tenant SaaS with role-based access control, encrypted data at rest and in transit, real-time dashboards, appointment scheduling, and a mobile app for on-the-go clinicians. We implemented a HIPAA-compliant AWS infrastructure with automated audit logs.",
    technologies: ["React", "Node.js", "MongoDB", "AWS (EC2, S3, RDS)", "Chart.js", "Socket.io"],
    outcome: [
      "Scaled from 0 to 200+ active clinics in 9 months",
      "98% client satisfaction rate in post-launch surveys",
      "Zero security incidents since launch",
      "40% reduction in appointment scheduling time",
    ],
    color: "#0a1628",
    duration: "14 weeks",
  },
  {
    id: 2,
    client: "UrbanRide",
    industry: "Transport & Mobility",
    title: "50,000 Downloads in Month One: Building a Ride-Hailing App from Scratch",
    summary: "A regional transport startup needed a production-grade mobile app — with live tracking, payments, and ML matching — in 12 weeks.",
    problem: "UrbanConnect had secured seed funding and needed to launch a ride-hailing platform in their city before a competitor beat them to market. They had a 12-week runway and zero existing technical infrastructure.",
    solution: "We delivered end-to-end: a Flutter mobile app for both drivers and passengers, a real-time matching engine powered by geospatial algorithms, Stripe integration for in-app payments, a driver dashboard, and a Node.js backend deployed on GCP with WebSocket-based live tracking.",
    technologies: ["Flutter", "Node.js", "Firebase", "Google Maps API", "Stripe", "Python (ML matching)", "GCP"],
    outcome: [
      "Launched in 11.5 weeks — 3 days ahead of schedule",
      "50,000+ downloads in the first month",
      "4.8-star rating on Play Store and App Store",
      "Driver-passenger match time under 90 seconds on average",
    ],
    color: "#160a28",
    duration: "12 weeks",
  },
  {
    id: 3,
    client: "InsightAI",
    industry: "Business Intelligence",
    title: "80% Less Time on Reports: Building an AI-Powered BI Platform",
    summary: "DataEdge's analysts were spending 20+ hours per week building reports manually. We automated it with natural language AI queries.",
    problem: "DataEdge's team of 30 analysts was manually pulling data from 6 different sources and building PowerPoint decks for C-suite every week. Each report took an average of 4 hours. They needed an intelligent system that could do this automatically.",
    solution: "InsightAI is a custom BI platform that connects to any data source via API or CSV, uses OpenAI's API with custom-tuned prompts to answer natural language queries, generates visualizations automatically, and exports board-ready reports in one click. We built a RAG pipeline using LangChain and pgvector for semantic search across company data.",
    technologies: ["React", "FastAPI", "Python", "OpenAI GPT-4o", "LangChain", "PostgreSQL + pgvector", "Chart.js"],
    outcome: [
      "80% reduction in weekly reporting time (from 20h to 4h)",
      "Natural language queries resolved in under 3 seconds",
      "Adopted by all 30 analysts within 2 weeks of launch",
      "Identified $200K in previously invisible cost savings in first month",
    ],
    color: "#0a2010",
    duration: "16 weeks",
  },
]

export const CaseStudiesPage = () => {
  const [activeId, setActiveId] = useState(caseStudies[0].id)
  const active = caseStudies.find(c => c.id === activeId)!

  return (
    <>
      <Helmet>
        <title>Case Studies — Sash Technocrafts | Real Projects, Real Results</title>
        <meta name="description" content="Explore how Sash Technocrafts solved real business problems — from healthcare SaaS to AI platforms. Problem, solution, technologies, and measurable outcomes." />
        <meta property="og:title" content="Case Studies — Sash Technocrafts" />
        <meta name="keywords" content="software case studies, web development case study, SaaS development, AI development, mobile app development results" />
      </Helmet>

      {/* Hero */}
      <section className="pt-36 pb-16 px-4 md:px-6 bg-background border-b border-border">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Proven Results</p>
            <h1 className="text-6xl md:text-7xl font-heading font-bold tracking-tighter mb-6">Case Studies.</h1>
            <p className="text-muted-foreground max-w-lg leading-relaxed">
              Real problems. Real solutions. Real, measurable outcomes. Here's how we've helped businesses transform their operations through custom software.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Panel layout — same as Services/Technologies */}
      <section className="py-16 px-4 md:px-6 bg-background">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            className="flex flex-col lg:flex-row border border-border rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Left: Case study list */}
            <div className="lg:w-72 flex-shrink-0 border-b lg:border-b-0 lg:border-r border-border">
              {caseStudies.map(cs => (
                <button
                  key={cs.id}
                  onClick={() => setActiveId(cs.id)}
                  className={`w-full flex flex-col gap-1 px-6 py-6 text-left border-b border-border last:border-b-0 transition-all duration-200 ${
                    activeId === cs.id ? "bg-foreground text-background" : "hover:bg-muted"
                  }`}
                >
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${activeId === cs.id ? "text-background/50" : "text-muted-foreground"}`}>
                    {cs.industry}
                  </span>
                  <span className="font-heading font-semibold text-sm leading-snug">{cs.client}</span>
                  <span className={`text-[10px] font-mono ${activeId === cs.id ? "text-background/40" : "text-muted-foreground"}`}>
                    {cs.duration}
                  </span>
                </button>
              ))}
            </div>

            {/* Right: Detail */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                className="flex-1"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                {/* Thumbnail header */}
                <div
                  className="relative min-h-[160px] flex flex-col justify-end p-8 overflow-hidden"
                  style={{ backgroundColor: active.color }}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
                  <div className="relative z-10">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2 block">{active.industry}</span>
                    <h2 className="text-xl md:text-2xl font-heading font-bold text-white tracking-tight leading-snug max-w-xl">{active.title}</h2>
                  </div>
                </div>

                <div className="p-8 space-y-8">
                  {/* Problem */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Target className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
                      <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">The Problem</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-foreground/80">{active.problem}</p>
                  </div>

                  <div className="h-px bg-border" />

                  {/* Solution */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Wrench className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
                      <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Our Solution</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-foreground/80">{active.solution}</p>
                  </div>

                  <div className="h-px bg-border" />

                  {/* Technologies */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Wrench className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
                      <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Technologies Used</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {active.technologies.map(tech => (
                        <span key={tech} className="px-3 py-1 rounded-full border border-border bg-muted text-xs font-mono text-muted-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="h-px bg-border" />

                  {/* Outcome */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
                      <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Outcome</h3>
                    </div>
                    <ul className="space-y-2.5">
                      {active.outcome.map((item, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-3 text-sm"
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.07 }}
                        >
                          <TrendingUp className="w-4 h-4 text-foreground mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                          <span className="text-foreground/80">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CTABannerSection />
    </>
  )
}
