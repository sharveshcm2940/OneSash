import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  GraduationCap,
  Mail,
  Code2,
  CheckCircle2,
  X,
  ArrowUpRight,
  Award,
  FolderGit2,
  BookOpen,
  Sparkles
} from "lucide-react"

export interface TeamMember {
  id: string
  name: string
  role: string
  tagline: string
  education: string
  degree: string
  college: string
  gradYear: string
  gpaMilestone: string
  location: string
  email: string
  github: string
  linkedin: string
  shortBio: string
  fullBio: string
  academicHighlight: string
  specialties: string[]
  keyProjects: { name: string; role: string; desc: string }[]
  techStack: string[]
  quote: string
  avatarInitials: string
  milestoneBadge: string
}

export const teamMembers: TeamMember[] = [
  {
    id: "saraveshvaran",
    name: "Saraveshvaran A",
    role: "Founder & Full-Stack Systems Architect",
    tagline: "Building scalable server infrastructure, clean API layers, and production-ready Web platforms.",
    education: "B.Tech. Information Technology",
    degree: "Bachelor of Technology",
    college: "Engineering College • Chennai, India",
    gradYear: "Class of 2028",
    gpaMilestone: "Systems & Backend Architecture Scholar",
    location: "Chennai, Tamil Nadu, India",
    email: "onesash.contact@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    shortBio: "Focuses on backend pipelines, database normalization, and end-to-end full-stack web software engineering with strict type safety.",
    fullBio: "Saraveshvaran is a co-founder of 1Sash specializing in full-stack web architecture and high-performance server logic. With a deep foundation in information technology fundamentals, he leads the architectural design of database schemas (PostgreSQL, MongoDB), REST API handlers, and cloud backend deployments. He believes that true software quality stems from readable, maintainable code structures that scale gracefully without technical debt.",
    academicHighlight: "Specialized Coursework in Database Management Systems, Distributed Systems, Operating Systems, and Network Protocols.",
    specialties: [
      "Full-Stack Web Architecture & API Engineering",
      "Database Modeling & Query Optimization (PostgreSQL/SQL)",
      "Server-Side Node.js / Express Services",
      "State Management & Type-Safe Integration"
    ],
    keyProjects: [
      { name: "APAR CROWN", role: "Lead Systems Architect", desc: "Engineered database schema, resident access controls, and automated billing engine." },
      { name: "CUSTOM CRM ENGINE", role: "Backend Developer", desc: "Built zero-bloat pipeline stage manager and automated email sequence triggers." }
    ],
    techStack: ["TypeScript", "React", "Node.js", "Express", "PostgreSQL", "REST APIs", "Tailwind CSS", "Docker"],
    quote: "Clean architecture is not a luxury—it's the precondition for speed and stability.",
    avatarInitials: "SA",
    milestoneBadge: "B.Tech. IT • CLASS OF 2028"
  },
  {
    id: "sharvesh",
    name: "Sharvesh CM",
    role: "Founder & Head of Interactive UI Engineering",
    tagline: "Crafting fluid responsive client portals, 3D WebGL scenes, and editorial design systems.",
    education: "B.Tech. Information Technology",
    degree: "Bachelor of Technology",
    college: "Engineering College • Chennai, India",
    gradYear: "Class of 2028",
    gpaMilestone: "Interactive WebGL & UI Systems Specialist",
    location: "Chennai, Tamil Nadu, India",
    email: "onesash.contact@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    shortBio: "Specializes in high-performance frontend interfaces, responsive design systems, and interactive 3D WebGL scenes using Three.js.",
    fullBio: "Sharvesh leads client-side design and interactive engineering at 1Sash. Combining technical expertise in React and Vite with an acute eye for typography, spatial rhythm, and responsive layouts, he turns complex user workflows into effortless visual experiences. He is particularly focused on WebGL canvas rendering, smooth animations (Framer Motion), and dark/light luxury theme engineering that eliminates AI design clichés.",
    academicHighlight: "Focused Research in Computer Graphics, Human-Computer Interaction (HCI), Frontend Optimization, and Algorithms.",
    specialties: [
      "Interactive 3D WebGL & Canvas Rendering (Three.js)",
      "Responsive UI Design Systems & Tailwind CSS Architecture",
      "Micro-Interactions & Fluid Motion Graphics",
      "Performance Optimization & Bundle Splitting"
    ],
    keyProjects: [
      { name: "1SASH 3D ENGINE", role: "Lead UI Developer", desc: "Created real-time WebGL interactive canvas rendering architectural node models." },
      { name: "AI CONTENT GENERATOR", role: "Frontend Lead", desc: "Designed intuitive multi-platform preview canvas and live slide layout generator." }
    ],
    techStack: ["React", "TypeScript", "Three.js", "WebGL", "Tailwind CSS", "Framer Motion", "Vite", "HTML5/CSS3"],
    quote: "User experience is measured in milliseconds and spatial clarity.",
    avatarInitials: "SC",
    milestoneBadge: "B.Tech. IT • CLASS OF 2028"
  },
  {
    id: "siddharth",
    name: "Siddharth Santhosh Kumar",
    role: "Cofounder & Product Strategy & Operations Lead",
    tagline: "Translating business bottlenecks into clear software blueprints and product deliverables.",
    education: "B.Tech. Information Technology",
    degree: "Bachelor of Technology",
    college: "Engineering College • Chennai, India",
    gradYear: "Class of 2028",
    gpaMilestone: "Product Architecture & Operations Lead",
    location: "Chennai, Tamil Nadu, India",
    email: "onesash.contact@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    shortBio: "Translates complex client operations into structured software requirements, product roadmaps, and functional digital solutions.",
    fullBio: "Siddharth bridges real-world business requirements with 1Sash’s engineering roadmap. Drawing from a strong background in analytical problem solving and project management, he works directly with clients to deconstruct operational friction, formulate concise functional specifications, and ensure delivered software aligns precisely with client business goals.",
    academicHighlight: "Coursework & Honors in Software Project Management, Systems Analysis & Design, Quality Assurance, and Operations.",
    specialties: [
      "Product Specification & Workflow Deconstruction",
      "Client Discovery & Operational Requirement Mapping",
      "Agile Project Delivery & System Quality Assurance",
      "Feature Scope Optimization & Roadmap Execution"
    ],
    keyProjects: [
      { name: "THE LAW PRACTICE CRM", role: "Product Lead", desc: "Mapped legal advocate hearing workflows and vault security requirements." },
      { name: "QR FOOD ORDERING", role: "Operations Lead", desc: "Designed kitchen display system (KDS) synchronization flow and table checkout logic." }
    ],
    techStack: ["Product Management", "System Blueprinting", "REST Integration", "React", "TypeScript", "Agile", "User Research"],
    quote: "Great software solves the problem without introducing new friction.",
    avatarInitials: "SS",
    milestoneBadge: "B.Tech. IT • CLASS OF 2028"
  }
]

/* Timeline Journey Data */
const founderMilestones = [
  {
    year: "2024",
    title: "College Labs & Technical Ideation",
    desc: "Saraveshvaran, Sharvesh, and Siddharth began collaborating in college software engineering labs, building custom full-stack tools and experimenting with WebGL graphics."
  },
  {
    year: "2025",
    title: "First Commercial Contract: APAR CROWN",
    desc: "Built and deployed a comprehensive 216-apartment management portal from scratch, delivering real-time visitor tracking and digital maintenance billing."
  },
  {
    year: "2026",
    title: "Formal Studio Launch & Senior Graduation",
    desc: "Officially incorporated 1Sash as a software freelancing studio, balancing senior engineering coursework with client software deliveries across real estate, legal, and hospitality."
  }
]

/* Engineering Principles */
const engineeringPrinciples = [
  {
    num: "01",
    title: "Type Safety Across All Boundaries",
    desc: "Every API endpoint, state container, and database model is strictly typed with TypeScript. Errors are caught at compile-time, not in production."
  },
  {
    num: "02",
    title: "Zero Artificial Bloat",
    desc: "We refuse to include heavy, unneeded dependencies. Clean native React, Tailwind CSS, and lightweight Node.js keep our software fast and maintainable."
  },
  {
    num: "03",
    title: "Direct Founder Engineering",
    desc: "Clients speak directly with Saraveshvaran, Sharvesh, and Siddharth. The people in discovery meetings are the exact same engineers writing the code."
  },
  {
    num: "04",
    title: "Real-World Utility First",
    desc: "We don't build useless hype widgets. Every feature is designed to solve a clear operational bottleneck or improve user workflow speed."
  }
]

export const TeamBiosSection = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const [activeTab, setActiveTab] = useState<"bios" | "milestones" | "principles">("bios")

  return (
    <section id="team" className="py-24 md:py-36 bg-background border-b border-border relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Academic & Education Milestone Banner */}
        <div className="mb-16 p-6 md:p-8 rounded-xl border border-accent/20 bg-accent/5 backdrop-blur-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0 text-accent">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full bg-accent text-accent-foreground text-[10px] font-mono font-bold tracking-wider uppercase">
                  EDUCATION MILESTONE
                </span>
                <span className="text-xs font-mono text-muted-foreground">
                  CLASS OF 2028 • B-TECH SCHOLARS
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-serif text-foreground">
                Engineered in College Labs. Delivered to Real Industry.
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5 max-w-2xl">
                1Sash was founded in 2026 by three engineering students completing their Bachelor of Engineering degrees while engineering software for commercial clients.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <div className="px-3 py-1.5 rounded border border-border bg-background text-xs font-mono text-foreground flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-accent" />
              <span>Information Technology</span>
            </div>
            <div className="px-3 py-1.5 rounded border border-border bg-background text-xs font-mono text-foreground flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Founded 2026</span>
            </div>
          </div>
        </div>

        {/* Section Header & Sub-Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b border-border gap-6">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              FOUNDERS & ENGINEERING DISCIPLINE
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-foreground">
              Meet the Engineers behind 1Sash.
            </h2>
          </div>

          {/* Sub-navigation tabs */}
          <div className="flex items-center gap-2 p-1 border border-border rounded-lg bg-card/60">
            <button
              onClick={() => setActiveTab("bios")}
              className={`px-4 py-2 rounded text-xs font-mono uppercase tracking-wider transition-colors ${
                activeTab === "bios"
                  ? "bg-primary text-primary-foreground font-bold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Team Bios
            </button>
            <button
              onClick={() => setActiveTab("milestones")}
              className={`px-4 py-2 rounded text-xs font-mono uppercase tracking-wider transition-colors ${
                activeTab === "milestones"
                  ? "bg-primary text-primary-foreground font-bold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Journey (2024-2026)
            </button>
            <button
              onClick={() => setActiveTab("principles")}
              className={`px-4 py-2 rounded text-xs font-mono uppercase tracking-wider transition-colors ${
                activeTab === "principles"
                  ? "bg-primary text-primary-foreground font-bold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Code Standards
            </button>
          </div>
        </div>

        {/* Tab 1: Team Bios Grid */}
        {activeTab === "bios" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group border border-border bg-card/40 rounded-lg p-8 flex flex-col justify-between hover:bg-card/80 transition-all duration-300 relative overflow-hidden space-y-6"
              >
                {/* Academic Milestone Badge overlay pill */}
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-accent/30 bg-accent/10 text-[10px] font-mono text-accent font-bold tracking-wider uppercase">
                    <GraduationCap className="w-3 h-3" />
                    {member.milestoneBadge}
                  </span>
                </div>

                <div className="space-y-6 pt-2">
                  
                  {/* Initials badge */}
                  <div className="w-14 h-14 rounded-md border border-border bg-background flex items-center justify-center font-mono text-xl font-bold text-foreground group-hover:border-accent transition-colors">
                    {member.avatarInitials}
                  </div>

                  {/* Name & Role */}
                  <div className="space-y-1">
                    <h3 className="text-2xl font-serif text-foreground group-hover:accent-text transition-colors">
                      {member.name}
                    </h3>
                    <div className="text-xs font-mono text-accent font-medium">
                      {member.role}
                    </div>
                  </div>

                  {/* College / Education line with Milestone Badge */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-mono text-foreground font-semibold">
                      <GraduationCap className="w-4 h-4 text-accent shrink-0" />
                      <span>{member.education}</span>
                    </div>
                    <div className="text-[11px] font-mono text-muted-foreground pl-6">
                      {member.college}
                    </div>
                  </div>

                  {/* Short Bio */}
                  <p className="text-xs text-muted-foreground leading-relaxed pt-2 border-t border-border/60">
                    {member.shortBio}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider block">
                      Core Technical Stack:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {member.techStack.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded border border-border bg-background text-[10px] font-mono text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                      {member.techStack.length > 5 && (
                        <span className="px-2 py-0.5 rounded border border-border bg-muted text-[10px] font-mono text-muted-foreground">
                          +{member.techStack.length - 5}
                        </span>
                      )}
                    </div>
                  </div>

                </div>

                {/* Bottom CTA to read full bio */}
                <div className="pt-6 border-t border-border flex items-center justify-between">
                  <button
                    onClick={() => setSelectedMember(member)}
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-foreground font-semibold hover:text-accent transition-colors group/btn"
                  >
                    <span>READ FULL RECORD & BADGES</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>

              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Tab 2: Student-Founder Journey Timeline */}
        {activeTab === "milestones" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <div className="p-6 border border-border bg-card/30 rounded-lg mb-8">
              <h3 className="text-xl font-serif text-foreground mb-2">The Student-Founder Trajectory</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Starting from engineering classroom assignments to managing high-stakes client software, here is how Saraveshvaran, Sharvesh, and Siddharth built 1Sash.
              </p>
            </div>

            <div className="relative border-l border-border pl-8 space-y-12 ml-4 md:ml-8">
              {founderMilestones.map((m) => (
                <div key={m.year} className="relative space-y-2">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full border-2 border-accent bg-background flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-accent px-2 py-0.5 rounded border border-accent/20 bg-accent/10">
                      {m.year}
                    </span>
                    <h4 className="text-xl font-serif text-foreground">{m.title}</h4>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed max-w-2xl">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Tab 3: Code Standards / Engineering Principles */}
        {activeTab === "principles" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {engineeringPrinciples.map((p) => (
              <div key={p.num} className="p-8 border border-border bg-card/30 rounded-lg space-y-4">
                <span className="text-xs font-mono text-accent font-bold uppercase tracking-widest block">
                  {p.num} / STANDARD
                </span>
                <h3 className="text-2xl font-serif text-foreground">{p.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </motion.div>
        )}

        {/* Additional Milestone Summary Cards */}
        <div className="mt-20 pt-12 border-t border-border grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 border border-border rounded-lg bg-card/20 space-y-2">
            <div className="flex items-center gap-2 text-accent">
              <GraduationCap className="w-5 h-5" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider">ACADEMIC CLASS</span>
            </div>
            <div className="text-2xl font-serif text-foreground">Class of 2028</div>
            <p className="text-[11px] text-muted-foreground">B.E. Engineering Candidates at top technical university.</p>
          </div>

          <div className="p-6 border border-border rounded-lg bg-card/20 space-y-2">
            <div className="flex items-center gap-2 text-accent">
              <FolderGit2 className="w-5 h-5" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider">COMMERCIAL SYSTEMS</span>
            </div>
            <div className="text-2xl font-serif text-foreground">100% Shipped</div>
            <p className="text-[11px] text-muted-foreground">Every project built by the 3 founders is deployed live.</p>
          </div>

          <div className="p-6 border border-border rounded-lg bg-card/20 space-y-2">
            <div className="flex items-center gap-2 text-accent">
              <Code2 className="w-5 h-5" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider">TYPE SAFETY</span>
            </div>
            <div className="text-2xl font-serif text-foreground">Strict TypeScript</div>
            <p className="text-[11px] text-muted-foreground">End-to-end interface contracts across all applications.</p>
          </div>

          <div className="p-6 border border-border rounded-lg bg-card/20 space-y-2">
            <div className="flex items-center gap-2 text-accent">
              <Award className="w-5 h-5" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider">FOUNDER LED</span>
            </div>
            <div className="text-2xl font-serif text-foreground">3 Engineers</div>
            <p className="text-[11px] text-muted-foreground">Saraveshvaran, Sharvesh, and Siddharth personally code every line.</p>
          </div>
        </div>

      </div>

      {/* Modal for detailed founder record */}
      <AnimatePresence>
        {selectedMember && (
          <FounderBioModal member={selectedMember} onClose={() => setSelectedMember(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}

/* ── Detailed Founder Bio Modal ── */
const FounderBioModal = ({ member, onClose }: { member: TeamMember; onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-background border border-border rounded-lg p-6 md:p-10 shadow-2xl space-y-8"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full border border-border hover:bg-muted transition-colors text-foreground"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header section */}
        <div className="flex items-start gap-6 border-b border-border pb-6">
          <div className="w-16 h-16 rounded-md border border-border bg-card flex items-center justify-center font-mono text-2xl font-bold text-foreground shrink-0">
            {member.avatarInitials}
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
                {member.role}
              </span>
              <span className="px-2 py-0.5 rounded bg-accent/10 border border-accent/20 text-[10px] font-mono text-accent font-bold">
                {member.milestoneBadge}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">
              {member.name}
            </h2>
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted-foreground pt-1">
              <span className="flex items-center gap-1 font-semibold text-foreground">
                <GraduationCap className="w-3.5 h-3.5 text-accent" /> {member.education}
              </span>
              <span>•</span>
              <span>{member.college}</span>
            </div>
          </div>
        </div>

        {/* Academic Milestone Highlight Box */}
        <div className="p-4 rounded border border-accent/30 bg-accent/5 space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-accent uppercase">
            <Award className="w-4 h-4" /> Academic & Engineering Distinction
          </div>
          <p className="text-xs text-foreground leading-relaxed">
            {member.academicHighlight}
          </p>
        </div>

        {/* Tagline / Philosophy Quote */}
        <div className="p-4 border-l-2 border-accent bg-card/50 rounded-r text-sm font-serif italic text-foreground leading-relaxed">
          "{member.quote}"
        </div>

        {/* Full Bio */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground flex items-center gap-2">
            <Code2 className="w-4 h-4 text-foreground" /> ENGINEERING BACKGROUND & ROLE
          </h3>
          <p className="text-sm text-foreground leading-relaxed">
            {member.fullBio}
          </p>
        </div>

        {/* Areas of Expertise */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-foreground" /> TECHNICAL SPECIALTIES
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-foreground">
            {member.specialties.map((spec) => (
              <li key={spec} className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{spec}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Delivered Projects */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground flex items-center gap-2">
            <FolderGit2 className="w-4 h-4 text-foreground" /> KEY SYSTEMS DELIVERED AT 1SASH
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {member.keyProjects.map((proj) => (
              <div key={proj.name} className="p-3 border border-border bg-card rounded space-y-1">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-foreground">
                  <span>{proj.name}</span>
                  <span className="text-[10px] font-normal text-muted-foreground">{proj.role}</span>
                </div>
                <p className="text-[11px] text-muted-foreground leading-snug">
                  {proj.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Complete Tech Stack */}
        <div className="space-y-2">
          <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            FULL TOOLING & LANGUAGES
          </h3>
          <div className="flex flex-wrap gap-2">
            {member.techStack.map((tech) => (
              <span key={tech} className="px-2.5 py-1 border border-border bg-card rounded text-xs font-mono text-foreground">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Contact Links */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono text-muted-foreground">
            Direct Email: <a href={`mailto:${member.email}`} className="text-foreground underline">{member.email}</a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${member.email}`}
              className="px-4 py-2 text-xs font-mono bg-primary text-primary-foreground rounded flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              <Mail className="w-3.5 h-3.5" /> Email {member.name.split(" ")[0]}
            </a>
          </div>
        </div>

      </motion.div>
    </div>
  )
}
