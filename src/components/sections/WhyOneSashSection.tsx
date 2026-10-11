import { ShieldCheck, GitCommit, Users, Code2, CheckCircle2 } from "lucide-react"

export const WhyOneSashSection = () => {
  const commitments = [
    {
      icon: Users,
      title: "Direct Senior Developer Collaboration",
      description: "You work directly with the senior software engineers and architects building your product in Chennai, India and Bangalore, India. Technical decisions are evaluated and executed quickly without layers of non-technical middlemen.",
      highlight: "Direct Engineering Access",
    },
    {
      icon: ShieldCheck,
      title: "100% Code & Intellectual Property Ownership",
      description: "From Day 1, all source code, database schemas, and cloud deployment pipelines are created in your repositories. You retain 100% copyright, intellectual property, and license freedom with zero vendor lock-in.",
      highlight: "Full Repo Handover",
    },
    {
      icon: Code2,
      title: "Pragmatic, Industry-Standard Stacks",
      description: "We build on battle-tested foundations: TypeScript, React, Node.js, Python, PostgreSQL, and Docker. Any competent software engineer anywhere in the world can inspect, maintain, and scale your code.",
      highlight: "Open-Source Standards",
    },
    {
      icon: GitCommit,
      title: "Verified Staging Releases Every 10 Days",
      description: "Predictable delivery windows with structured staging deployments. You test working software in isolated cloud staging environments before any subsequent milestone is invoiced.",
      highlight: "Continuous Transparency",
    },
  ]

  const qualityStandards = [
    "Strict TypeScript type safety across frontend and APIs",
    "ACID transactional guarantees with PostgreSQL schema migrations",
    "Automated CI/CD test gates on every pull request",
    "Comprehensive OpenAPI 3.1 contract documentation",
    "Dockerized local environments for painless developer onboarding",
    "Zero proprietary platform lock-in or recurring vendor royalties",
  ]

  return (
    <section id="why" className="bg-[#FAFAF8] py-24 md:py-32 border-b border-[#E4E4E0]">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F1F1EE] rounded-sm border border-[#E4E4E0]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1459D9]" />
            <span className="text-[11px] font-semibold tracking-wider text-[#646464] uppercase">
              Our Operating Principles
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold tracking-tight text-[#171717] leading-[1.1]">
            Technology should solve more than it complicates.
          </h2>

          <p className="text-base sm:text-lg text-[#646464] font-normal leading-relaxed pt-1">
            We operate as an extension of your team — prioritizing sound software engineering, honest timelines, and long-term business value over technical buzzwords.
          </p>
        </div>

        {/* 4 Tangible Engineering Commitments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {commitments.map((c) => {
            const Icon = c.icon
            return (
              <div
                key={c.title}
                className="p-8 bg-white rounded-2xl border border-[#E4E4E0] shadow-studio-card hover:shadow-studio-elevated transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#F1F1EE] border border-[#E4E4E0] flex items-center justify-center text-[#1459D9]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-medium text-[#646464] bg-[#FAFAF8] px-2.5 py-1 rounded border border-[#E4E4E0]">
                      {c.highlight}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-semibold text-[#171717] tracking-tight">
                    {c.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#646464] leading-relaxed">
                    {c.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Engineering Standards Panel */}
        <div className="p-8 sm:p-10 bg-[#F1F1EE] rounded-2xl border border-[#E4E4E0] space-y-6">
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-heading font-semibold text-[#171717]">
              Engineering Standards Included on Every Engagement
            </h3>
            <p className="text-xs text-[#646464]">
              Non-negotiable quality and architectural criteria enforced across all client codebases.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs text-[#171717]">
            {qualityStandards.map((std) => (
              <div key={std} className="flex items-start gap-2.5 p-3.5 bg-white rounded-xl border border-[#E4E4E0]">
                <CheckCircle2 className="w-4 h-4 text-[#137333] shrink-0 mt-0.5" />
                <span className="leading-relaxed font-medium text-[#171717]">{std}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
