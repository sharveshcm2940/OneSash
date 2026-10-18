import { SEO } from "../components/common/SEO"
import { ArrowRight, CheckCircle2, Mail, Code2, Users, Cpu, MapPin } from "lucide-react"
import { CTABannerSection } from "../components/sections/CTABannerSection"

export const CareersPage = () => {
  const criteria = [
    "Comfortable with TypeScript and strict type-safety across client and server.",
    "Fundamental understanding of relational database normalization, indexes, and ACID transactions.",
    "Ability to write clean, maintainable code with clear Git commit histories and PR documentation.",
    "Appreciation for fast, accessible, responsive HTML and CSS without heavy framework bloat.",
    "Direct, transparent communication: ability to evaluate and explain technical trade-offs openly."
  ]

  const openRoles = [
    {
      title: "Senior Full-Stack Software Engineer",
      domain: "Systems Engineering",
      location: "Chennai, India & Bangalore, India (Hybrid)",
      stack: "React • TypeScript • Node.js • PostgreSQL",
      desc: "Architect and develop production web platforms, design relational database schemas, and build secure, typed REST & GraphQL APIs.",
      subject: "Application: Senior Full-Stack Engineer"
    },
    {
      title: "AI Systems & Automation Engineer",
      domain: "Intelligent Workflows",
      location: "Chennai, India & Bangalore, India (Hybrid)",
      stack: "Python • FastAPI • Gemini / OpenAI • pgvector",
      desc: "Build deterministic document parsing pipelines, contextual RAG systems, and automated ERP event integrations with strict schema validation.",
      subject: "Application: AI Systems Engineer"
    },
    {
      title: "Software Engineering Intern",
      domain: "Early Career",
      location: "Chennai, India & Bangalore, India (Hybrid)",
      stack: "TypeScript • React • Tailwind CSS • SQL",
      desc: "Hands-on immersion working directly alongside senior engineers on production client systems, test suites, and interface design.",
      subject: "Application: Software Engineering Intern"
    }
  ]

  return (
    <>
      <SEO
        title="Careers & Engineering Culture | OneSash"
        description="Join OneSash. We are looking for talented full-stack engineers and interns passionate about building clean, production-grade software in Chennai, India and Bangalore, India."
        keywords="careers OneSash, software engineer jobs Chennai, software engineer jobs Bangalore, tech internships Chennai, tech internships Bangalore, hiring full stack developers Chennai India"
      />

      <main className="bg-[#FAFAF8]">
        
        {/* Hero Header */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 border-b border-[#E4E4E0] bg-[#FAFAF8]">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="max-w-4xl space-y-6">
              
              <span className="text-[11px] font-semibold tracking-wider text-[#646464] uppercase px-3 py-1 bg-[#F1F1EE] rounded-sm border border-[#E4E4E0] inline-block">
                Careers & Culture
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-semibold tracking-tight text-[#171717] leading-[1.08]">
                Build software that solves real problems.
              </h1>

              <p className="text-base sm:text-lg text-[#646464] leading-relaxed max-w-2xl">
                We're a small, independent software development studio based in Chennai, India and Bangalore, India. We don't hire code-monkeys for ticket grinding—we work as peer software engineers who care about clean code, reliable delivery, and sound systems design.
              </p>

            </div>
          </div>
        </section>

        {/* What We Value */}
        <section className="py-20 md:py-28 border-b border-[#E4E4E0] bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              <div className="lg:col-span-5 space-y-3">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#171717] font-mono block">
                  CULTURE & STANDARDS
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-[#171717]">
                  What we look for in engineers.
                </h2>
                <p className="text-xs sm:text-sm text-[#646464] leading-relaxed">
                  We care far more about sound computer science fundamentals, clear communication, and an eagerness to learn than how many buzzwords you have on your resume.
                </p>
              </div>

              <div className="lg:col-span-7 space-y-3">
                {criteria.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-[#FAFAF8] rounded-xl border border-[#E4E4E0] text-xs sm:text-sm text-[#171717]">
                    <CheckCircle2 className="w-4 h-4 text-[#171717] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 md:py-28 border-b border-[#E4E4E0] bg-[#F1F1EE]">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            
            <div className="max-w-2xl mb-12 space-y-3">
              <span className="text-[11px] font-semibold tracking-wider text-[#646464] uppercase px-3 py-1 bg-white rounded-sm border border-[#E4E4E0] inline-block">
                Open Positions
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-[#171717]">
                Current openings in Chennai, India and Bangalore, India.
              </h2>
            </div>

            <div className="space-y-6">
              {openRoles.map((role, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#E4E4E0] p-6 sm:p-8 shadow-studio-card flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-semibold text-[#171717]">{role.domain}</span>
                      <span className="text-[#646464] text-xs">•</span>
                      <span className="text-xs text-[#646464]">{role.location}</span>
                    </div>

                    <h3 className="text-xl font-heading font-semibold text-[#171717]">
                      {role.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#646464] leading-relaxed">
                      {role.desc}
                    </p>

                    <div className="pt-1 font-mono text-[11px] text-[#171717]">
                      Stack: {role.stack}
                    </div>
                  </div>

                  <a
                    href={`mailto:onesash.contact@gmail.com?subject=${encodeURIComponent(role.subject)}`}
                    className="px-6 py-2.5 text-xs font-semibold text-white bg-[#171717] hover:bg-[#2c2c2c] rounded-full transition-all shadow-studio-subtle whitespace-nowrap inline-flex items-center gap-1.5 self-start md:self-center"
                  >
                    <span>Apply via Email</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>

          </div>
        </section>

        <CTABannerSection />

      </main>
    </>
  )
}
