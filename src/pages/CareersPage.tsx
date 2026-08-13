import { useState } from "react"
import { SEO } from "../components/common/SEO"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, ArrowRight, Users, Heart, Zap, Globe } from "lucide-react"
import { CTABannerSection } from "../components/sections/CTABannerSection"

const deptFilters = ["All", "Engineering", "Design", "Marketing", "Operations"]

const openings = [
  {
    id: 1,
    title: "Full Stack Developer",
    type: "Remote Developer",
    dept: "Engineering",
    location: "Remote (Global)",
    commitment: "Freelance / Contract",
    tags: ["React", "Node.js", "TypeScript"],
    desc: "We're looking for skilled full stack developers to join our growing project roster. You'll work on real products shipped to real users — no busywork.",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    type: "UI Designer",
    dept: "Design",
    location: "Remote (Global)",
    commitment: "Freelance / Part-time",
    tags: ["Figma", "Prototyping", "Design Systems"],
    desc: "A design-obsessed individual who thinks in systems and executes with precision. You'll shape how users interact with our clients' products.",
  },
  {
    id: 3,
    title: "Software Engineering Intern",
    type: "Internship",
    dept: "Engineering",
    location: "Remote (India)",
    commitment: "3–6 months",
    tags: ["React", "Node.js", "Learning"],
    desc: "Our internship program is built for ambitious students who want to build real products and learn from senior engineers — not just shadow them.",
  },
  {
    id: 4,
    title: "AI/ML Engineering Intern",
    type: "Internship",
    dept: "Engineering",
    location: "Remote (India)",
    commitment: "3–6 months",
    tags: ["Python", "LangChain", "OpenAI"],
    desc: "Work alongside our AI team on real LLM integrations and data pipelines. Ideal for students passionate about applied machine learning.",
  },
  {
    id: 5,
    title: "Freelance Backend Developer",
    type: "Remote Developer",
    dept: "Engineering",
    location: "Remote (Global)",
    commitment: "Project-based",
    tags: ["Python", "FastAPI", "PostgreSQL"],
    desc: "We regularly partner with senior backend engineers for specific project workstreams. Pitch us your experience and we'll find the right fit.",
  },
  {
    id: 6,
    title: "Digital Marketing Specialist",
    type: "Freelance",
    dept: "Marketing",
    location: "Remote",
    commitment: "Freelance",
    tags: ["SEO", "Content", "Paid Ads"],
    desc: "Help us and our clients grow their digital presence. We work with specialists across SEO, content marketing, and performance advertising.",
  },
]

const typeColors: Record<string, string> = {
  "Internship": "bg-green-500/10 text-green-600 dark:text-green-400",
  "Freelance": "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  "Remote Developer": "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  "UI Designer": "bg-purple-500/10 text-purple-600 dark:text-purple-400",
}

const perks = [
  { icon: Globe, title: "100% Remote", desc: "Work from anywhere in the world. We are asynchronous-first." },
  { icon: Zap, title: "Real Impact", desc: "No fake projects. Every task ships to real users and real clients." },
  { icon: Heart, title: "Supportive Team", desc: "A small, tight-knit team that invests in your growth and wellbeing." },
  { icon: Users, title: "Expert Mentorship", desc: "Learn directly from senior engineers who've shipped at scale." },
]

export const CareersPage = () => {
  const [activeDept, setActiveDept] = useState("All")
  const filtered = activeDept === "All" ? openings : openings.filter(j => j.dept === activeDept)

  return (
    <>
      <SEO
        title="Careers & Engineering Opportunities — Internships & Roles"
        description="Join 1Sash Technocrafts. Explore opportunities for Full Stack Developers, UI/UX Designers, AI Engineers, and Software Interns in Chennai and remote."
        keywords="1Sash careers, software engineering internships, remote React developer jobs, UI designer roles, AI engineering opportunities"
      />

      {/* Hero */}
      <section className="pt-36 pb-16 px-4 md:px-6 bg-background border-b border-border">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Join the Team</p>
            <h1 className="text-6xl md:text-7xl font-heading font-bold tracking-tighter mb-6">Build What<br />Matters.</h1>
            <p className="text-muted-foreground max-w-lg leading-relaxed">
              We're a lean, fully-remote team of passionate builders. Whether you're a seasoned engineer or a talented intern — if you care about craft, we want to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-12 px-4 md:px-6 border-b border-border bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {perks.map((perk, i) => {
              const Icon = perk.icon
              return (
                <motion.div
                  key={perk.title}
                  className="bg-card p-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Icon className="w-5 h-5 text-muted-foreground mb-3" strokeWidth={1.5} />
                  <p className="font-heading font-bold text-sm mb-1">{perk.title}</p>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">{perk.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Job listings */}
      <section className="py-16 px-4 md:px-6 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
            <h2 className="text-2xl font-heading font-bold tracking-tight">Open Positions</h2>
            {/* Dept filter */}
            <div className="flex flex-wrap gap-2">
              {deptFilters.map(dept => (
                <button
                  key={dept}
                  onClick={() => setActiveDept(dept)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                    activeDept === dept
                      ? "bg-foreground text-background border-foreground"
                      : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeDept}
              className="space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {filtered.map((job, i) => (
                <motion.div
                  key={job.id}
                  className="group border border-border rounded-2xl bg-card hover:border-foreground/20 transition-all cursor-pointer overflow-hidden"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="p-6 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${typeColors[job.type] || "bg-muted text-muted-foreground"}`}>
                          {job.type}
                        </span>
                        <span className="text-[10px] text-muted-foreground font-mono">{job.commitment}</span>
                      </div>
                      <h3 className="font-heading font-bold text-base tracking-tight mb-2">{job.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-4 max-w-xl">{job.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {job.tags.map(tag => (
                          <span key={tag} className="px-2.5 py-1 rounded-full border border-border text-[10px] font-mono text-muted-foreground">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-3 flex-shrink-0">
                      <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        {job.location}
                      </div>
                      <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-border text-xs font-semibold hover:bg-foreground hover:text-background hover:border-foreground transition-all group">
                        Apply Now
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              <p className="font-medium mb-1">No openings in this department right now.</p>
              <p className="text-sm">Send a speculative application — we're always growing.</p>
            </div>
          )}

          {/* Open application */}
          <motion.div
            className="mt-12 border border-border rounded-2xl p-8 bg-card flex flex-col md:flex-row md:items-center md:justify-between gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h3 className="font-heading font-bold text-base tracking-tight mb-1">Don't see a perfect fit?</h3>
              <p className="text-xs text-muted-foreground">Send us your CV and portfolio. We review every application personally.</p>
            </div>
            <a
              href="mailto:onesash.contact@gmail.com"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-sm font-semibold hover:bg-foreground hover:text-background hover:border-foreground transition-all"
            >
              onesash.contact@gmail.com
            </a>
          </motion.div>
        </div>
      </section>

      <CTABannerSection />
    </>
  )
}
