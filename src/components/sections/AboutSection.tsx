import { motion } from "framer-motion"
import { GraduationCap, Globe } from "lucide-react"
import { Card3DTilt } from "../ui/Card3DTilt"
import { Globe3DCanvas } from "../ui/Globe3DCanvas"

interface Founder {
  name: string
  role: string
  spec: string
  bio: string
}

const founders: Founder[] = [
  {
    name: "Saraveshvaran A",
    role: "Co-Founder",
    spec: "Full-Stack Systems & Architecture",
    bio: "Focused on building reliable backend pipelines, clean database schemas, and end-to-end web product engineering."
  },
  {
    name: "Sharvesh CM",
    role: "Co-Founder",
    spec: "Frontend Engineering & Interactive UI",
    bio: "Specializing in high-performance client interfaces, responsive web systems, and fluid interactive user experiences."
  },
  {
    name: "Siddharth Santhosh Kumar",
    role: "Co-Founder",
    spec: "Product Logic & AI Systems",
    bio: "Dedicated to converting client workflow requirements into clean software architecture and functional AI automation solutions."
  },
  {
    name: "Vivek A",
    role: "Marketing Head",
    spec: "Brand Strategy & B2B Growth",
    bio: "Leading strategic brand positioning and B2B growth campaigns that connect onesash with forward-thinking enterprises."
  },
  {
    name: "Naren Annamalai",
    role: "Head of Digital Marketing",
    spec: "Digital Acquisition & Growth Ops",
    bio: "Orchestrating high-velocity digital marketing funnels, SEO strategy, and performance-driven customer acquisition."
  }
]

export const AboutSection = () => {
  return (
    <section className="py-24 md:py-36 bg-background border-b border-border">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Unconventional Editorial Header + Globe 3D Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 pb-12 border-b border-border items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground flex items-center gap-2">
              <Globe className="w-4 h-4 text-accent" /> FOUNDING STORY • EST. 2026
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif leading-[0.98] text-foreground font-black tracking-tight">
              ENGINEERING TALENT.<br />GLOBAL REACH.
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">
              onesash was founded in 2026 by engineering students who shared a common conviction: software freelancing shouldn’t be built on bloated templates or buzzwords. We write real, maintainable code for real organizations worldwide.
            </p>
          </div>

          <div className="lg:col-span-5 border border-border rounded-xl bg-card/30 p-2">
            <Globe3DCanvas />
          </div>
        </div>

        {/* Founders Grid — 3D Tilt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {founders.map((founder, idx) => (
            <Card3DTilt key={founder.name} maxTilt={10}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 border border-border bg-card/40 rounded-lg space-y-6 flex flex-col justify-between hover:bg-card/80 transition-colors h-full shadow-xs"
              >
                <div className="space-y-4">
                  {/* Monogram / Architectural Badge */}
                  <div className="w-12 h-12 rounded border border-border bg-background flex items-center justify-center font-mono text-lg font-bold text-foreground">
                    0{idx + 1}
                  </div>

                  <div>
                    <div className="text-xs font-mono text-accent uppercase tracking-widest mb-1 font-bold">
                      {founder.role}
                    </div>
                    <h3 className="text-2xl font-serif text-foreground font-bold">
                      {founder.name}
                    </h3>
                    <div className="text-xs font-mono text-muted-foreground mt-1">
                      {founder.spec}
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed border-t border-border/60 pt-4">
                    {founder.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-foreground" /> B.Tech IT '28
                  </span>
                  <span>onesash • 2026</span>
                </div>
              </motion.div>
            </Card3DTilt>
          ))}
        </div>

        {/* Story Banner */}
        <div className="mt-16 p-8 border border-border bg-card/20 rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-lg font-serif text-foreground">
              The Hands-On Engineering Ethos
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-2xl">
              Being young engineers means we bring fresh technological practices, rapid adaptability, and total commitment to every line of code we ship. No corporate bureaucracy, no middlemen.
            </p>
          </div>
          <div className="font-mono text-xs px-4 py-2 border border-border bg-background rounded text-foreground whitespace-nowrap">
            STUDENT ORIGINS • REAL CRAFTSMANSHIP
          </div>
        </div>

      </div>
    </section>
  )
}
