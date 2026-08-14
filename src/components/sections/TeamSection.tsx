import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Github, Linkedin, Twitter } from "../ui/Icons"
import { Code, Palette, Cpu, TrendingUp, Sparkles } from "lucide-react"

const team = [
  {
    name: "Sarveshwaran A",
    role: "Founder",
    title: "Full Stack Developer",
    tier: "L7 PRINCIPAL ARCHITECT",
    initials: "SA",
    bio: "Architect of Sash Technocrafts. Sarveshwaran leads product engineering with deep expertise in React, Node.js, and cloud infrastructure — building systems that scale.",
    social: { github: "#", linkedin: "https://www.linkedin.com/in/sarvesh-arun-8b1904337/", twitter: "#" },
    skills: ["React", "Node.js", "AWS", "Docker"],
    status: "Live: Syncing Production",
    statusColor: "bg-emerald-500 shadow-[0_0_12px_#10B981]",
    stat: { label: "Engineered Commits", value: "1,842" },
    accentColor: "indigo",
    gradient: "from-indigo-500/10 via-purple-500/5 to-transparent",
    borderGlow: "group-hover:border-indigo-500/50",
    icon: Code,
  },
  {
    name: "Sharvesh CM",
    role: "Co-Founder",
    title: "UI/UX Developer",
    tier: "L7 LEAD VISUAL CREATIVE",
    initials: "CM",
    bio: "The design mind behind every pixel. Sharvesh blends world-class UI craft with technical frontend precision to create interfaces that users love.",
    social: { github: "#", linkedin: "https://www.linkedin.com/in/c-m-sharvesh-847066332/" },
    skills: ["Figma", "TailwindCSS", "Framer Motion", "WebGL"],
    status: "Live: Polishing Pixels",
    statusColor: "bg-cyan-500 shadow-[0_0_12px_#06B6D4]",
    stat: { label: "Perfected Screens", value: "340+" },
    accentColor: "cyan",
    gradient: "from-cyan-500/10 via-blue-500/5 to-transparent",
    borderGlow: "group-hover:border-cyan-500/50",
    icon: Palette,
  },
  {
    name: "Siddharth Santhosh Kumar",
    role: "Co-Founder",
    title: "Product & AI Systems Lead",
    tier: "L6 PRODUCT & AI ARCHITECT",
    initials: "SS",
    bio: "Siddharth deconstructs operational bottlenecks into clean product workflows and AI automation pipelines — delivering high-utility software solutions.",
    social: { linkedin: "https://www.linkedin.com/in/siddharthsanthoshkumar/", twitter: "#" },
    skills: ["Product Strategy", "AI Integration", "Python", "System Architecture"],
    status: "Live: Tuning LLM Weights",
    statusColor: "bg-rose-500 shadow-[0_0_12px_#F43F5E]",
    stat: { label: "Trained Models", value: "42" },
    accentColor: "rose",
    gradient: "from-rose-500/10 via-pink-500/5 to-transparent",
    borderGlow: "group-hover:border-rose-500/50",
    icon: Cpu,
  },
  {
    name: "Naren Annamalai",
    role: "Head of Digital Marketing",
    title: "Growth & Performance Lead",
    tier: "L6 DIGITAL GROWTH SCIENTIST",
    initials: "NA",
    bio: "Naren spearheads digital marketing, performance advertising, and organic acquisition funnels — driving high-intent customer growth and brand velocity for 1Sash.",
    social: { linkedin: "https://www.linkedin.com/", twitter: "#" },
    skills: ["Performance Marketing", "SEO / SEM", "Google Analytics 4", "Meta Ads", "Conversion Optimization"],
    status: "Live: Scaling Funnels",
    statusColor: "bg-emerald-500 shadow-[0_0_12px_#10B981]",
    stat: { label: "Campaign ROI", value: "4.8x" },
    accentColor: "emerald",
    gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
    borderGlow: "group-hover:border-emerald-500/50",
    icon: TrendingUp,
  },
  {
    name: "Vivek A",
    role: "Marketing Head",
    title: "Brand & B2B Strategist",
    tier: "L6 MARKETING STRATEGIST",
    initials: "VA",
    bio: "Vivek leads marketing strategy, brand positioning, and B2B growth campaigns — connecting 1Sash with clients, partners, and high-value tech opportunities.",
    social: { linkedin: "https://www.linkedin.com/in/vivek-arumugam-a01303328/" },
    skills: ["Digital Marketing", "Brand Strategy", "Campaigns", "B2B Outreach", "Growth Strategy"],
    status: "Live: Scaling Growth",
    statusColor: "bg-amber-500 shadow-[0_0_12px_#F59E0B]",
    stat: { label: "Campaign Impressions", value: "250K+" },
    accentColor: "amber",
    gradient: "from-amber-500/10 via-orange-500/5 to-transparent",
    borderGlow: "group-hover:border-amber-500/50",
    icon: TrendingUp,
  },
  {
    name: "Thaufiq Abdul Kadher",
    role: "Social Media Team",
    title: "Brand & Community Lead",
    tier: "L5 BRAND COMMANDER",
    initials: "TK",
    bio: "Thaufiq shapes the Sash voice across platforms — crafting content that resonates and building a community around innovation, trust, and tech.",
    social: { twitter: "#", linkedin: "#" },
    skills: ["Copywriting", "SEO", "TikTok API", "Campaigns"],
    status: "Live: Optimizing Reach",
    statusColor: "bg-fuchsia-500 shadow-[0_0_12px_#D946EF]",
    stat: { label: "Audience Footprint", value: "2.4M" },
    accentColor: "fuchsia",
    gradient: "from-fuchsia-500/10 via-purple-500/5 to-transparent",
    borderGlow: "group-hover:border-fuchsia-500/50",
    icon: TrendingUp,
  },
]

const TeamCard = ({ member, index }: { member: typeof team[0]; index: number }) => {
  const IconComponent = member.icon
  const [hovered, setHovered] = useState(false)

  // Glow map corresponding to member theme
  const getAccentShadow = () => {
    switch (member.accentColor) {
      case "indigo": return "group-hover:shadow-[0_0_40px_-5px_rgba(99,102,241,0.12)]"
      case "cyan": return "group-hover:shadow-[0_0_40px_-5px_rgba(6,182,212,0.12)]"
      case "rose": return "group-hover:shadow-[0_0_40px_-5px_rgba(244,63,94,0.12)]"
      case "amber": return "group-hover:shadow-[0_0_40px_-5px_rgba(245,158,11,0.12)]"
      case "fuchsia": return "group-hover:shadow-[0_0_40px_-5px_rgba(217,70,239,0.12)]"
      default: return "group-hover:shadow-[0_0_40px_-5px_rgba(255,255,255,0.05)]"
    }
  }

  return (
    <motion.div
      className={`group relative rounded-3xl border border-slate-900 bg-[#06060c]/60 backdrop-blur-xl overflow-hidden transition-all duration-500 ${getAccentShadow()} ${member.borderGlow}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Dynamic gradient wash background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-50 transition-opacity duration-500 pointer-events-none`} />

      {/* Cyber Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none" />

      {/* Top Meta Hub */}
      <div className="px-6 pt-6 pb-2 flex items-center justify-between relative z-10">
        {/* Tier level */}
        <span className="text-[9px] font-bold font-mono tracking-widest text-slate-500 bg-white/[0.03] border border-white/[0.05] px-2.5 py-1 rounded-full uppercase">
          {member.tier}
        </span>

        {/* Pulse status */}
        <div className="flex items-center gap-1.5 bg-black/40 border border-white/[0.02] px-2.5 py-1 rounded-full">
          <span className={`w-1.5 h-1.5 rounded-full ${member.statusColor} animate-pulse`} />
          <span className="text-[9px] font-bold font-mono tracking-wider text-slate-400 uppercase">
            {member.status.split(":")[0]}
          </span>
        </div>
      </div>

      {/* Hero Visual Block */}
      <div className="flex justify-center pt-6 pb-2 relative z-10">
        <div className="relative">
          {/* Animated Tech Radar Ring */}
          <motion.div
            className="absolute -inset-3.5 rounded-full border border-dashed opacity-40"
            style={{
              borderColor:
                member.accentColor === "indigo" ? "#6366f1" :
                member.accentColor === "cyan" ? "#06b6d4" :
                member.accentColor === "rose" ? "#f43f5e" :
                member.accentColor === "amber" ? "#f59e0b" : "#d946ef"
            }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: hovered ? 12 : 24, ease: "linear" }}
          />

          {/* Secondary counter-rotating cosmic ring */}
          <motion.div
            className="absolute -inset-2 rounded-full border border-double border-white/5"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
          />

          {/* Core Avatar Sphere */}
          <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/[0.1] backdrop-blur-md flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-500">
            <span className="text-white font-heading font-extrabold text-2xl tracking-wide select-none">
              {member.initials}
            </span>

            {/* Glowing Craft Icon Overlay */}
            <div className={`absolute -bottom-1.5 -right-1.5 w-7 h-7 rounded-lg bg-slate-900 border border-white/[0.15] flex items-center justify-center shadow-md text-white/80 group-hover:text-white transition-colors duration-300`}>
              <IconComponent className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>

      {/* Body Content */}
      <div className="px-6 pt-4 pb-6 relative z-10 flex flex-col justify-between min-h-[220px]">
        {/* Name and Professional Title */}
        <div>
          <h3 className="font-heading font-bold text-lg tracking-tight text-white mb-0.5 group-hover:text-primary transition-colors duration-300">
            {member.name}
          </h3>
          <p className="text-xs font-semibold text-slate-400 font-mono tracking-wide flex items-center gap-1.5 mb-3.5">
            <Sparkles className="w-3 h-3 text-yellow-500" />
            {member.title}
          </p>
          <p className="text-xs text-slate-400 leading-relaxed font-sans mb-5 font-medium line-clamp-3">
            {member.bio}
          </p>
        </div>

        {/* Dynamic Skills and Stats Section */}
        <div className="space-y-4">
          {/* Tech stack / Skills Pills */}
          <div className="flex flex-wrap gap-1.5">
            {member.skills.map((skill) => (
              <span
                key={skill}
                className="text-[9px] font-bold font-mono text-slate-300 bg-white/[0.02] border border-white/[0.04] px-2 py-0.5 rounded transition-all duration-300 hover:bg-white/[0.06] hover:border-white/[0.1]"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

          {/* Verified Stats and Social Connections */}
          <div className="flex items-center justify-between">
            {/* Stat bento */}
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-wider font-bold text-slate-500 font-mono">
                {member.stat.label}
              </span>
              <span className="text-sm font-bold text-white font-mono tracking-tight mt-0.5">
                {member.stat.value}
              </span>
            </div>

            {/* Social channels */}
            <div className="flex gap-1.5">
              {member.social.github && member.social.github !== "#" && (
                <a
                  href={member.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub Profile"
                  className="w-7 h-7 rounded-lg border border-slate-800 bg-black/30 flex items-center justify-center hover:bg-slate-800 hover:border-slate-700 transition-all text-slate-400 hover:text-white"
                >
                  <Github className="w-3 h-3" />
                </a>
              )}
              {member.social.linkedin && member.social.linkedin !== "#" && (
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn Profile"
                  className="px-2 h-7 rounded-lg border border-sky-500/40 bg-sky-500/10 flex items-center gap-1 hover:bg-sky-500/20 transition-all text-sky-400 font-mono text-[10px] font-bold"
                >
                  <Linkedin className="w-3 h-3" />
                  <span>LinkedIn</span>
                </a>
              )}
              {member.social.twitter && member.social.twitter !== "#" && (
                <a
                  href={member.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Twitter / X Profile"
                  className="w-7 h-7 rounded-lg border border-slate-800 bg-black/30 flex items-center justify-center hover:bg-slate-800 hover:border-slate-700 transition-all text-slate-400 hover:text-white"
                >
                  <Twitter className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export const TeamSection = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="team" className="py-32 px-4 md:px-6 relative overflow-hidden bg-background">
      {/* Decorative vector background accents */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-500/[0.015] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-fuchsia-500/[0.015] rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header Block */}
        <motion.div
          ref={ref}
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-px bg-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary font-mono">The Operational Hive</span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-5xl md:text-6xl font-heading font-extrabold tracking-tight text-white leading-tight">
              The Minds Behind<br />
              <span className="text-gradient">Sash.</span>
            </h2>
            <p className="text-slate-400 max-w-sm leading-relaxed text-sm font-medium">
              An elite cadre of engineers, creative visualists, and system strategists dedicated to premium craftsmanship, clean code, and zero-compromise delivery.
            </p>
          </div>
        </motion.div>

        {/* Professional Bento Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
