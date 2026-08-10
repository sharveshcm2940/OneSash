import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import { PortfolioSection } from "../components/sections/PortfolioSection"
import { CTABannerSection } from "../components/sections/CTABannerSection"

export const PortfolioPage = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio — Saash Technocrafts</title>
        <meta name="description" content="Explore our portfolio of web apps, mobile apps, SaaS platforms, and AI solutions we've built for clients worldwide." />
      </Helmet>

      <section className="relative pt-36 pb-10 px-4 md:px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)] dark:bg-[linear-gradient(to_right,#fff1_1px,transparent_1px),linear-gradient(to_bottom,#fff1_1px,transparent_1px)]" />
        <div className="absolute top-10 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          >
            Our Work
          </motion.span>
          <motion.h1
            className="text-5xl md:text-7xl font-heading font-bold mb-6"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          >
            Projects We're <span className="text-gradient">Proud Of</span>
          </motion.h1>
          <motion.p
            className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          >
            A curated collection of digital products we've designed and engineered — across industries, platforms, and technologies.
          </motion.p>
        </div>
      </section>

      <PortfolioSection />
      <CTABannerSection />
    </>
  )
}
