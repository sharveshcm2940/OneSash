import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import { SashLogo } from "../ui/SashLogo"

export const Footer = () => {
  return (
    <footer className="bg-[#F1F1EE] border-t border-[#E4E4E0] py-16 text-[#171717]">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-10 border-b border-[#E4E4E0] gap-4">
          <div className="space-y-1">
            <Link to="/" className="inline-flex items-center hover:opacity-85 transition-opacity">
              <SashLogo className="w-9 h-9" showWordmark={true} />
            </Link>
            <p className="text-xs text-[#646464] font-normal pt-1">
              Independent software development studio based in Chennai, India and Bangalore, India.
            </p>
          </div>

          <div className="text-xs text-[#646464] font-mono">
            <span>Chennai, India</span> • <span>Bangalore, India</span>
          </div>
        </div>

        {/* Links Navigation */}
        <div className="py-10 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-8 text-xs">
          
          {/* Navigation */}
          <div className="space-y-3">
            <span className="font-semibold text-[#171717] block">Studio</span>
            <ul className="space-y-2 text-[#646464]">
              <li><Link to="/" className="hover:text-[#1459D9] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#1459D9] transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-[#1459D9] transition-colors">Our Work</Link></li>
              <li><Link to="/contact" className="hover:text-[#1459D9] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="space-y-3">
            <span className="font-semibold text-[#171717] block">Services</span>
            <ul className="space-y-2 text-[#646464]">
              <li><Link to="/services/custom-software" className="hover:text-[#1459D9] transition-colors">Custom Software</Link></li>
              <li><Link to="/services/web-development" className="hover:text-[#1459D9] transition-colors">Web Applications</Link></li>
              <li><Link to="/services/mobile-apps" className="hover:text-[#1459D9] transition-colors">Mobile Engineering</Link></li>
              <li><Link to="/services/ai-integration" className="hover:text-[#1459D9] transition-colors">AI & Automation</Link></li>
              <li><Link to="/services/process-automation" className="hover:text-[#1459D9] transition-colors">Process Automation</Link></li>
              <li><Link to="/services/cloud-solutions" className="hover:text-[#1459D9] transition-colors">Cloud & DevOps</Link></li>
            </ul>
          </div>

          {/* Selected Projects */}
          <div className="space-y-3">
            <span className="font-semibold text-[#171717] block">Selected Work</span>
            <ul className="space-y-2 text-[#646464]">
              <li><Link to="/portfolio#apar-crown" className="hover:text-[#1459D9] transition-colors">Apar Crown ERP</Link></li>
              <li><Link to="/portfolio#law-throne" className="hover:text-[#1459D9] transition-colors">Law Throne CRM</Link></li>
              <li><Link to="/portfolio#qr-food" className="hover:text-[#1459D9] transition-colors">QR Food KDS</Link></li>
              <li><Link to="/portfolio#pg-management" className="hover:text-[#1459D9] transition-colors">PG Operations Suite</Link></li>
            </ul>
          </div>

          {/* Governance & Policies */}
          <div className="space-y-3">
            <span className="font-semibold text-[#171717] block">Legal & Governance</span>
            <ul className="space-y-2 text-[#646464]">
              <li><Link to="/privacy" className="hover:text-[#1459D9] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-[#1459D9] transition-colors">Terms of Service</Link></li>
              <li><Link to="/security" className="hover:text-[#1459D9] transition-colors">Security Standards</Link></li>
            </ul>
          </div>

          {/* Inquiries */}
          <div className="space-y-2.5 col-span-2 sm:col-span-1">
            <span className="font-semibold text-[#171717] block">Direct Contact</span>
            <p className="text-[#646464] text-xs leading-relaxed">
              Direct developer consultation with zero middleman overhead.
            </p>
            <div className="space-y-1.5 pt-1 text-xs">
              <div>
                <a href="tel:+919980399557" className="text-[#171717] hover:text-[#1459D9] font-medium block">
                  Call: +91 99803 99557
                </a>
              </div>
              <div>
                <a
                  href="https://wa.me/918903467843"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#10B981] hover:underline font-medium block"
                >
                  WhatsApp: +91 89034 67843
                </a>
              </div>
              <div>
                <a href="mailto:onesash.contact@gmail.com" className="text-[#1459D9] hover:underline font-medium block">
                  onesash.contact@gmail.com
                </a>
              </div>
            </div>
            <div className="pt-2">
              <Link to="/contact" className="text-xs font-semibold text-[#171717] hover:text-[#1459D9]">
                Start a Project →
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-[#E4E4E0] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#646464]">
          <p>© 2026 OneSash. All rights reserved.</p>
          <p>Chennai, India and Bangalore, India</p>
        </div>

      </div>
    </footer>
  )
}
