import { motion } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Link } from "react-router-dom"
import { Hero3DCanvas } from "../ui/Hero3DCanvas"

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-background pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-border">
      <div className="container mx-auto px-4 md:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Headline & Actions (7 columns) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-xs font-mono tracking-tight text-foreground border border-border px-3.5 py-1.5 rounded-full bg-card/80 shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              1Sash • Software Freelancing Studio
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black leading-[0.98] tracking-tighter text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              We build software that gets things done.
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              1Sash is a software freelancing company founded by three engineering students, building practical digital products and systems for real-world problems.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="#work"
                className="px-6 py-3.5 text-sm font-medium text-primary-foreground bg-primary rounded-md flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-xs"
              >
                View Our Work <ChevronDown className="w-4 h-4" />
              </a>

              <Link
                to="/contact"
                className="px-6 py-3.5 text-sm font-medium text-foreground bg-card border border-border rounded-md flex items-center justify-center gap-2 hover:bg-muted transition-colors"
              >
                Start a Project <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Right: Interactive 3D Canvas (5 columns) */}
          <motion.div
            className="lg:col-span-5 w-full flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Hero3DCanvas />
          </motion.div>

        </div>
      </div>
    </section>
  )
}

