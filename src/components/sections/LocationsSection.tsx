import { MapPin, Mail, Clock } from "lucide-react"

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
            Rooted in India. Built for ambitious businesses.
          </h2>

          <p className="text-base sm:text-lg text-[#646464] font-normal leading-relaxed pt-1">
            Dual technology studios in India's leading software and innovation hubs, delivering dependable systems for enterprises and growing businesses.
          </p>
        </div>

        {/* Two Concrete Engineering Studios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Chennai Studio */}
          <div className="p-8 sm:p-10 bg-[#FAFAF8] rounded-2xl border border-[#E4E4E0] space-y-6 shadow-studio-card">
            <div className="space-y-1">
              <span className="text-[10px] font-semibold tracking-wider text-[#1459D9] uppercase block font-mono">
                ENGINEERING HQ • CHENNAI, TAMIL NADU
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-[#171717]">
                Chennai Studio
              </h3>
              <p className="text-xs text-[#646464]">
                Software Engineering & Cloud Operations Hub
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#646464] leading-relaxed">
              Our core software development and backend systems studio. Focused on scalable web platforms, high-throughput APIs, ACID transactional ledgers, and secure cloud infrastructure.
            </p>

            <div className="space-y-2.5 pt-2 text-xs text-[#171717]">
              <div className="flex items-center gap-2.5 text-[#646464]">
                <MapPin className="w-4 h-4 text-[#1459D9] shrink-0" />
                <span>Anna Salai & Guindy Tech Corridor, Chennai, TN 600032</span>
              </div>
              <div className="flex items-center gap-2.5 text-[#646464]">
                <Clock className="w-4 h-4 text-[#1459D9] shrink-0" />
                <span>IST (UTC+05:30) • Mon–Fri, 9:00 AM – 7:00 PM</span>
              </div>
              <div className="flex items-center gap-2.5 text-[#646464]">
                <Mail className="w-4 h-4 text-[#1459D9] shrink-0" />
                <span className="font-semibold text-[#171717]">onesash.contact@gmail.com</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E4E4E0] flex items-center justify-between text-xs text-[#646464]">
              <span>Cloud & Engineering Hub</span>
              <span className="text-[#1459D9] font-medium">Direct Developer Access</span>
            </div>
          </div>

          {/* Bangalore Studio */}
          <div className="p-8 sm:p-10 bg-[#FAFAF8] rounded-2xl border border-[#E4E4E0] space-y-6 shadow-studio-card">
            <div className="space-y-1">
              <span className="text-[10px] font-semibold tracking-wider text-[#1459D9] uppercase block font-mono">
                INNOVATION HUB • BANGALORE, KARNATAKA
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-[#171717]">
                Bangalore Studio
              </h3>
              <p className="text-xs text-[#646464]">
                Product Architecture & Intelligent Systems
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#646464] leading-relaxed">
              Our digital product design and intelligent automation studio. Focused on interactive web platforms, document automation, business integrations, and modern client experiences.
            </p>

            <div className="space-y-2.5 pt-2 text-xs text-[#171717]">
              <div className="flex items-center gap-2.5 text-[#646464]">
                <MapPin className="w-4 h-4 text-[#1459D9] shrink-0" />
                <span>Indiranagar Tech District, Bangalore, KA 560038</span>
              </div>
              <div className="flex items-center gap-2.5 text-[#646464]">
                <Clock className="w-4 h-4 text-[#1459D9] shrink-0" />
                <span>IST (UTC+05:30) • Mon–Fri, 9:00 AM – 7:00 PM</span>
              </div>
              <div className="flex items-center gap-2.5 text-[#646464]">
                <Mail className="w-4 h-4 text-[#1459D9] shrink-0" />
                <span className="font-semibold text-[#171717]">onesash.contact@gmail.com</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E4E4E0] flex items-center justify-between text-xs text-[#646464]">
              <span>Intelligent Systems Hub</span>
              <span className="text-[#1459D9] font-medium">Direct Developer Access</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
