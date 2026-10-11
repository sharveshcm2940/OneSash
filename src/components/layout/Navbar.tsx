import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { cn } from "../../utils/cn"
import { SashLogo } from "../ui/SashLogo"

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Our Work", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-150 border-b",
        isScrolled
          ? "bg-[#FAFAF8]/95 backdrop-blur-sm border-[#E4E4E0] py-4"
          : "bg-[#FAFAF8] border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="flex items-center justify-between">
          
          {/* Rich Handcrafted Studio Brand Mark */}
          <Link
            to="/"
            className="flex items-center focus-visible:outline-none group"
            aria-label="OneSash — Home"
          >
            <SashLogo className="w-9 h-9 transition-transform group-hover:scale-105" showWordmark={true} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "text-xs font-medium transition-colors py-1 focus-visible:outline-none",
                    isActive
                      ? "text-[#171717] font-semibold"
                      : "text-[#646464] hover:text-[#171717]"
                  )}
                >
                  {link.name}
                </Link>
              )
            })}
          </nav>

          {/* Clean Standard Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              className="px-4 py-2 text-xs font-semibold text-white bg-[#171717] hover:bg-[#333333] rounded-md transition-colors"
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="p-1.5 text-[#171717] rounded hover:bg-[#F1F1EE] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-[#E4E4E0] bg-[#FAFAF8] px-6 py-6 shadow-sm">
          <nav className="flex flex-col gap-3 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "py-2 transition-colors",
                  location.pathname === link.path ? "text-[#171717] font-semibold" : "text-[#646464] hover:text-[#171717]"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="pt-4 mt-2 border-t border-[#E4E4E0]">
            <Link
              to="/contact"
              className="block w-full py-2.5 text-center text-xs font-semibold text-white bg-[#171717] rounded-md"
            >
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
