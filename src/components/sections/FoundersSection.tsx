import { motion } from "framer-motion"
import { Card3DTilt } from "../ui/Card3DTilt"

const founders = [
  {
    name: "Saraveshvaran A",
    role: "Founder",
    spec: "Full-Stack Systems & Architecture",
    bio: "Focuses on building reliable backend pipelines, clean database models, and end-to-end web software engineering.",
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    avatar: "SA",
  },
  {
    name: "Sharvesh CM",
    role: "Founder",
    spec: "Frontend Engineering & Interactive UI",
    bio: "Specializes in high-performance client interfaces, responsive layouts, and interactive WebGL canvas scenes.",
    techStack: ["React", "TypeScript", "Three.js", "Framer Motion", "Vite"],
    avatar: "SC",
  },
  {
    name: "Siddharth Santhosh Kumar",
    role: "Cofounder",
    spec: "Product Logic & Operations",
    bio: "Translates client operational workflows into structured software requirements and clean digital solutions.",
    techStack: ["React", "Node.js", "REST APIs", "System Architecture"],
    avatar: "SS",
  },
]

export const FoundersSection = () => {
  return (
    <section id="founders" className="py-24 md:py-36 bg-background border-b border-border">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            THE FOUNDERS • EST. 2026
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-foreground">
            Three Engineers. One Company.
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            Founded in 2026 by three engineering college students with hands-on technical abilities and a human-first approach to software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {founders.map((founder, i) => (
            <Card3DTilt key={founder.name} maxTilt={10}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-8 border border-border bg-card/40 rounded-lg space-y-6 flex flex-col justify-between hover:bg-card/80 transition-colors h-full shadow-xs"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded border border-border bg-background flex items-center justify-center font-mono text-sm font-bold text-foreground">
                    {founder.avatar}
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

                  <p className="text-xs text-muted-foreground leading-relaxed pt-2 border-t border-border/60">
                    {founder.bio}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-border">
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider block">
                    Tech Stack:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {founder.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded border border-border bg-background text-[10px] font-mono text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Card3DTilt>
          ))}
        </div>

      </div>
    </section>
  )
}
