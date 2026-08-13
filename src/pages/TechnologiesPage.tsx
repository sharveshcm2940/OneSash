import { SEO } from "../components/common/SEO"
import { motion } from "framer-motion"
import { TechnologiesSection } from "../components/sections/TechnologiesSection"
import { CTABannerSection } from "../components/sections/CTABannerSection"

export const TechnologiesPage = () => {
  return (
    <>
      <SEO
        title="Modern Engineering Tech Stack & Tools"
        description="Explore the battle-tested engineering stack behind 1Sash: React, Vite, TypeScript, Node.js, Python, PostgreSQL, Three.js, Docker, AWS, and Gemini AI."
        keywords="1Sash tech stack, React TypeScript Vite, Node.js PostgreSQL, Gemini AI, Docker cloud architecture"
      />

      <section className="relative pt-36 pb-10 px-4 md:px-6 text-center overflow-hidden">
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <motion.span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            Our Stack
          </motion.span>
          <motion.h1 className="text-5xl md:text-7xl font-heading font-bold mb-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Built for <span className="text-gradient">Scale & Speed</span>
          </motion.h1>
          <motion.p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            We leverage the latest and most reliable technologies to deliver solutions that are secure, fast, and future-proof.
          </motion.p>
        </div>
      </section>

      <TechnologiesSection />
      <CTABannerSection />
    </>
  )
}
