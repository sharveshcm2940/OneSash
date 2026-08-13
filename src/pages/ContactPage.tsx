import { SEO } from "../components/common/SEO"
import { motion } from "framer-motion"
import { ContactSection } from "../components/sections/ContactSection"

export const ContactPage = () => {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact 1Sash Technocrafts",
    "description": "Get in touch with 1Sash engineers for custom software development, web app engineering, mobile apps, and technical consultation.",
    "url": "https://onesash.com/contact",
    "mainEntity": {
      "@type": "ContactPoint",
      "telephone": ["+918903467843", "+919980399557"],
      "email": "onesash.contact@gmail.com",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Tamil"]
    }
  }

  return (
    <>
      <SEO
        title="Contact Engineers & Request a Brief"
        description="Get in touch directly with 1Sash engineers in Chennai. Call +91 89034 67843 or +91 99803 99557, WhatsApp us, or send an inquiry to discuss your software project."
        keywords="Contact 1Sash, software inquiry, hire React developers, hire full stack engineers Chennai, WhatsApp software consultation"
        schema={contactSchema}
      />

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
