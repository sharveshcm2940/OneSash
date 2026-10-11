import { Link } from "react-router-dom"
import { ArrowRight, ShieldCheck, Users, Clock } from "lucide-react"

export const CompanyIntroSection = () => {
  const studioStats = [
    {
      icon: Users,
      value: "100%",
      label: "In-House Engineering",
      sublabel: "Senior developers exclusively in Chennai, India & Bangalore, India. Zero subcontracting.",
    },
    {
      icon: ShieldCheck,
      value: "100%",
      label: "Code & IP Ownership",
      sublabel: "Complete source code, database schemas, and cloud accounts transferred to you.",
    },
    {
      icon: Clock,
      value: "Every 10 Days",
      label: "Verified Staging Demos",
      sublabel: "Test working software in isolated cloud staging environments on predictable cycles.",
    },
  ]

  return (
    <section className="bg-[#F1F1EE] py-24 md:py-32 border-b border-[#E4E4E0]">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Label */}
        <div className="mb-6">
          <span className="text-[11px] font-semibold tracking-wider text-[#646464] uppercase px-3 py-1 bg-white rounded-sm border border-[#E4E4E0] inline-block">
            Our Engineering Philosophy
          </span>
        </div>

        {/* Headline */}
        <div className="max-w-4xl mb-8 space-y-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold tracking-tight text-[#171717] leading-[1.1]">
            Complex operations. Thoughtfully engineered software.
          </h2>
        </div>

        {/* Supporting Narrative */}
        <p className="text-base sm:text-lg text-[#646464] font-normal leading-relaxed max-w-3xl mb-12">
          OneSash partners with businesses to design, develop, and deliver software that solves real operational bottlenecks. From custom facility platforms and legal docket management to real-time kitchen displays, we combine technical depth with thoughtful design to build technology that works in daily production.
        </p>

        {/* 3 Core Operating Commitments */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {studioStats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <div 
                key={i}
                className="space-y-4 p-8 bg-white rounded-2xl border border-[#E4E4E0] shadow-studio-card"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F1F1EE] border border-[#E4E4E0] flex items-center justify-center text-[#1459D9]">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="text-lg sm:text-xl font-heading font-semibold text-[#171717]">
                    {stat.label}
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#1459D9] uppercase tracking-wider block">
                    {stat.value}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#646464] leading-relaxed">
                  {stat.sublabel}
                </p>
              </div>
            )
          })}
        </div>

        {/* Action Link */}
        <div>
          <Link
            to="/about"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1459D9] hover:underline"
          >
            <span>Learn about our company and Chennai founding story</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  )
}
