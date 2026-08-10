import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import { ServicesSection } from "../components/sections/ServicesSection"
import { ProcessSection } from "../components/sections/ProcessSection"
import { CTABannerSection } from "../components/sections/CTABannerSection"

export const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Services — Saash Technocrafts</title>
        <meta name="description" content="Explore our full range of software development services including web apps, mobile apps, UI/UX design, cloud solutions, and AI integration." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-36 pb-16 px-4 md:px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)] dark:bg-[linear-gradient(to_right,#fff1_1px,transparent_1px),linear-gradient(to_bottom,#fff1_1px,transparent_1px)]" />
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          >
            What We Do
          </motion.span>
          <motion.h1
            className="text-5xl md:text-7xl font-heading font-bold mb-6"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          >
            Services That <span className="text-gradient">Scale</span>
            <br />With Your Business
          </motion.h1>
          <motion.p
            className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          >
            From pixel-perfect frontend designs to robust backend architectures and scalable cloud deployments — we cover the full stack of software engineering.
          </motion.p>
        </div>
      </section>

      <ServicesSection />
      <ProcessSection />
      <CTABannerSection />
    </>
  )
}
