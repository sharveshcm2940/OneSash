import { MapPin, Mail, Clock, Phone, MessageCircle } from "lucide-react"

export const LocationsSection = () => {
  return (
    <section id="locations" className="bg-white py-24 md:py-32 border-b border-[#E4E4E0]">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F1F1EE] rounded-sm border border-[#E4E4E0]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1459D9]" />
            <span className="text-[11px] font-semibold tracking-wider text-[#646464] uppercase">
              Studios & Locations
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold tracking-tight text-[#171717] leading-[1.1]">
            Rooted in Chennai & Bangalore. Built for ambitious businesses.
          </h2>

          <p className="text-base sm:text-lg text-[#646464] font-normal leading-relaxed pt-1">
            Technology studios in Chennai, India and Bangalore, India, delivering dependable custom software, web platforms, and automated operations.
          </p>
        </div>

        {/* Dual Concrete Engineering Studios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Chennai Studio */}
          <div className="p-8 sm:p-10 bg-[#FAFAF8] rounded-2xl border border-[#E4E4E0] space-y-6 shadow-studio-card">
            <div className="space-y-1">
              <span className="text-[10px] font-semibold tracking-wider text-[#1459D9] uppercase block font-mono">
                ENGINEERING STUDIO • CHENNAI, INDIA
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-[#171717]">
                Chennai Studio
              </h3>
              <p className="text-xs text-[#646464]">
                Software Engineering, Architecture & Cloud Operations Hub
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#646464] leading-relaxed">
              Our core software development and backend systems studio. Focused on scalable web platforms, high-throughput APIs, ACID transactional ledgers, and secure cloud infrastructure.
            </p>

            <div className="space-y-2.5 pt-2 text-xs text-[#171717]">
              <div className="flex items-center gap-2.5 text-[#646464]">
                <MapPin className="w-4 h-4 text-[#1459D9] shrink-0" />
                <span>Chennai, India</span>
              </div>
              
              <div className="flex items-center gap-2.5 text-[#646464]">
                <Phone className="w-4 h-4 text-[#1459D9] shrink-0" />
                <a href="tel:+919980399557" className="font-semibold text-[#171717] hover:text-[#1459D9]">
                  Call: +91 99803 99557
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-[#646464]">
                <MessageCircle className="w-4 h-4 text-[#10B981] shrink-0" />
                <a
                  href="https://wa.me/918903467843"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#10B981] hover:underline"
                >
                  WhatsApp: +91 89034 67843
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-[#646464]">
                <Mail className="w-4 h-4 text-[#1459D9] shrink-0" />
                <a href="mailto:onesash.contact@gmail.com" className="font-semibold text-[#171717] hover:text-[#1459D9]">
                  onesash.contact@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E4E4E0] flex items-center justify-between text-xs text-[#646464]">
              <span>Cloud & Engineering Hub · Chennai, India</span>
              <span className="text-[#1459D9] font-medium">Direct Developer Access</span>
            </div>
          </div>

          {/* Bangalore Studio */}
          <div className="p-8 sm:p-10 bg-[#FAFAF8] rounded-2xl border border-[#E4E4E0] space-y-6 shadow-studio-card">
            <div className="space-y-1">
              <span className="text-[10px] font-semibold tracking-wider text-[#1459D9] uppercase block font-mono">
                PRODUCT STUDIO • BANGALORE, INDIA
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-[#171717]">
                Bangalore Studio
              </h3>
              <p className="text-xs text-[#646464]">
                Product Architecture & Intelligent Automation Studio
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#646464] leading-relaxed">
              Our digital product design and intelligent automation studio. Focused on interactive web applications, business process workflows, integrations, and modern client experiences.
            </p>

            <div className="space-y-2.5 pt-2 text-xs text-[#171717]">
              <div className="flex items-center gap-2.5 text-[#646464]">
                <MapPin className="w-4 h-4 text-[#1459D9] shrink-0" />
                <span>Bangalore, India</span>
              </div>
              
              <div className="flex items-center gap-2.5 text-[#646464]">
                <Phone className="w-4 h-4 text-[#1459D9] shrink-0" />
                <a href="tel:+919980399557" className="font-semibold text-[#171717] hover:text-[#1459D9]">
                  Call: +91 99803 99557
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-[#646464]">
                <MessageCircle className="w-4 h-4 text-[#10B981] shrink-0" />
                <a
                  href="https://wa.me/918903467843"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#10B981] hover:underline"
                >
                  WhatsApp: +91 89034 67843
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-[#646464]">
                <Mail className="w-4 h-4 text-[#1459D9] shrink-0" />
                <a href="mailto:onesash.contact@gmail.com" className="font-semibold text-[#171717] hover:text-[#1459D9]">
                  onesash.contact@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E4E4E0] flex items-center justify-between text-xs text-[#646464]">
              <span>Product Studio · Bangalore, India</span>
              <span className="text-[#1459D9] font-medium">Direct Developer Access</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
