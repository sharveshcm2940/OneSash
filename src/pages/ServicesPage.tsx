import { SEO } from "../components/common/SEO"
import { motion } from "framer-motion"
import { ServicesSection } from "../components/sections/ServicesSection"
import { ProcessSection } from "../components/sections/ProcessSection"
import { CTABannerSection } from "../components/sections/CTABannerSection"

export const ServicesPage = () => {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "1Sash Engineering Services",
    "description": "Custom full-stack web development, mobile applications, cloud devops, AI integration, and UI/UX design.",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Web Application Development", "url": "https://onesash.com/services/web-development" },
      { "@type": "ListItem", "position": 2, "name": "Mobile Application Engineering", "url": "https://onesash.com/services/mobile-apps" },
      { "@type": "ListItem", "position": 3, "name": "Cloud Architecture & DevOps", "url": "https://onesash.com/services/cloud-devops" },
      { "@type": "ListItem", "position": 4, "name": "AI Solutions & Model Integration", "url": "https://onesash.com/services/ai-solutions" },
      { "@type": "ListItem", "position": 5, "name": "Custom Enterprise Software", "url": "https://onesash.com/services/custom-software" },
      { "@type": "ListItem", "position": 6, "name": "UI/UX & Editorial Interface Design", "url": "https://onesash.com/services/ui-ux-design" }
    ]
  }

  return (
    <>
      <SEO
        title="Full-Stack Engineering & Development Services"
        description="Explore 1Sash's core disciplines: Custom Web Development, Mobile Apps (iOS & Android), AI & Gemini Integration, Cloud DevOps, and Interactive Editorial UI Design."
        keywords="Web development, mobile apps, React Vite, AI solutions, Cloud DevOps, UI UX Design, 1Sash services"
        schema={servicesSchema}
      />

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
