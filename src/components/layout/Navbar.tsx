import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { cn } from "../../utils/cn"
import { SashLogo } from "../ui/SashLogo"

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  const navLinks = [
    { name: "Work", path: "/#work" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 border-b",
          isScrolled
            ? "bg-background/90 backdrop-blur-md border-border py-3 shadow-xs"
            : "bg-transparent border-transparent py-5"
        )}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            {/* Left: onesash + EST. 2026 */}
            <Link to="/" className="flex items-center gap-3 group">
              <SashLogo className="w-7 h-7" />
              <div className="flex flex-col">
                <span className="font-heading text-xl font-bold tracking-tight text-foreground flex items-center gap-1.5">
                  onesash
                </span>
              </div>
              <span className="text-[10px] font-mono tracking-widest text-muted-foreground border-l border-border pl-2.5 py-0.5 uppercase hidden sm:inline-block">
                EST. 2026
              </span>
            </Link>

            {/* Center: Clean startup nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path || (link.path.startsWith('/#') && location.pathname === '/')
                const isAnchor = link.path.startsWith('/#')
                return isAnchor ? (
                  <a
                    key={link.name}
                    href={link.path}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-foreground relative tracking-wide",
                      isActive ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-foreground relative tracking-wide",
                      isActive ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {link.name}
                  </Link>
                )
              })}
            </nav>

            {/* Right: CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                to="/contact"
                className="px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-md hover:opacity-90 transition-opacity tracking-wide shadow-xs"
              >
                Start a Project
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <div className="flex items-center gap-3 md:hidden">
              <button
                className="p-2 text-foreground border border-border rounded-md"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg md:hidden pt-24 px-6 flex flex-col h-screen"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col gap-6 text-2xl font-serif mb-8 border-b border-border pb-8">
              <a href="/#work" className="hover:text-primary transition-colors">Work</a>
              <Link to="/about" className="hover:text-primary transition-colors">About</Link>
              <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
              <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </nav>

            <div className="mt-auto pb-10 flex flex-col gap-3">
              <span className="text-xs font-mono uppercase text-muted-foreground tracking-widest">onesash • EST. 2026</span>
              <Link
                to="/contact"
                className="w-full py-3 text-center font-medium text-sm text-primary-foreground bg-primary rounded-md"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

