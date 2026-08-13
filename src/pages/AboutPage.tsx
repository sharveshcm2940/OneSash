import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import { AboutSection } from "../components/sections/AboutSection"
import { TeamBiosSection } from "../components/sections/TeamBiosSection"
import { PhilosophySection } from "../components/sections/PhilosophySection"

export const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About 1Sash — Software Development Studio Founded in 2026</title>
        <meta name="description" content="1Sash is a software freelancing company founded by three engineering students in 2026: Saraveshvaran A, Sharvesh CM, and Siddharth Santhosh Kumar." />
      </Helmet>

      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-mono uppercase tracking-widest text-muted-foreground"
          >
            ABOUT 1SASH
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-serif text-foreground leading-[1.02]"
          >
            Engineering talent.<br />Human craftsmanship.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed pt-2"
          >
            We are three engineering college students who founded 1Sash in 2026 to build practical digital products and systems for real-world problems.
          </motion.p>
        </div>
      </section>

      <AboutSection />
      <TeamBiosSection />
      <PhilosophySection />
    </>
  )
}
