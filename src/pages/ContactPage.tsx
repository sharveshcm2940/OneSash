import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import { ContactSection } from "../components/sections/ContactSection"

export const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us — Sash Technocrafts</title>
        <meta name="description" content="Get in touch with Sash Technocrafts to discuss your project. We respond within 24 hours." />
      </Helmet>

      <section className="relative pt-36 pb-10 px-4 md:px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)] dark:bg-[linear-gradient(to_right,#fff1_1px,transparent_1px),linear-gradient(to_bottom,#fff1_1px,transparent_1px)]" />
        <div className="absolute top-16 right-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          >
            Get In Touch
          </motion.span>
          <motion.h1
            className="text-5xl md:text-7xl font-heading font-bold mb-6"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          >
            Let's Build <span className="text-gradient">Together</span>
          </motion.h1>
          <motion.p
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          >
            Tell us about your project and we'll craft a tailored solution. We respond to all enquiries within 24 hours.
          </motion.p>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
