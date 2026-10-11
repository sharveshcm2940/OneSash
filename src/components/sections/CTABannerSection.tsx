import { Link } from "react-router-dom"

export const CTABannerSection = () => {
  return (
    <section className="bg-[#FAFAF8] text-[#171717] py-16 md:py-20 border-t border-[#E4E4E0]">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl text-left sm:text-center space-y-6">
        
        {/* Direct Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold tracking-tight text-[#171717] leading-[1.12]">
          Have a problem worth solving with software?
        </h2>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg text-[#646464] font-normal leading-relaxed max-w-2xl sm:mx-auto">
          Whether you need a custom operations portal, a reliable mobile app, or a practical automated workflow, we'd be glad to discuss your project.
        </p>

        {/* Primary CTAs */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-start sm:justify-center gap-3">
          <Link
            to="/contact"
            className="px-6 py-2.5 text-xs font-semibold text-white bg-[#171717] hover:bg-[#2c2c2c] rounded-md transition-colors text-center"
          >
            Discuss a Project
          </Link>

          <Link
            to="/portfolio"
            className="px-6 py-2.5 text-xs font-semibold text-[#171717] bg-white hover:bg-[#F1F1EE] rounded-md transition-colors border border-[#E4E4E0] text-center"
          >
            Explore Verified Work
          </Link>
        </div>

        <p className="text-xs text-[#646464] pt-2">
          Or write to us directly at <a href="mailto:onesash.contact@gmail.com" className="font-semibold text-[#171717] underline">onesash.contact@gmail.com</a>
        </p>

      </div>
    </section>
  )
}
