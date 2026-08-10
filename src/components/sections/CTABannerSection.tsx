import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export const CTABannerSection = () => {
  return (
    <section className="py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <motion.div
          className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          {/* Animated blobs inside the banner */}
          <motion.div
            className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none"
            animate={{
              x: ["-50%", "-30%", "-50%"],
              y: ["-50%", "-70%", "-50%"],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"
            animate={{
              x: ["50%", "30%", "50%"],
              y: ["50%", "70%", "50%"],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />

          {/* Grid lines overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem]" />

          <div className="relative z-10">
            <motion.span
              className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium mb-6 border border-white/30 backdrop-blur-sm"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              ✦ Founded June 12, 2026
            </motion.span>

            <motion.h2
              className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Have a Project in Mind?
              <br />
              <span className="text-white/80">Let's Make It Real.</span>
            </motion.h2>

            <motion.p
              className="text-white/70 text-lg max-w-2xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Whether you're a startup with a bold idea or an enterprise looking to modernize — Sash Technocrafts is your trusted engineering partner.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Link
                to="/contact"
                className="group flex items-center gap-2 px-8 py-4 bg-white text-indigo-700 rounded-full font-bold text-base hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/30 text-white rounded-full font-semibold text-base hover:bg-white/20 backdrop-blur-sm transition-all"
              >
                See Our Work
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
