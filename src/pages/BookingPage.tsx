import { SEO } from "../components/common/SEO"
import { motion } from "framer-motion"
import { useState } from "react"
import { Calendar as CalendarIcon, Clock, Video, CheckCircle2 } from "lucide-react"
import { cn } from "../utils/cn"

const availableTimes = ["09:00 AM", "10:30 AM", "01:00 PM", "03:30 PM", "05:00 PM"]

export const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState<number | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [isBooked, setIsBooked] = useState(false)

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedDate && selectedTime) {
      setIsBooked(true)
    }
  }

  // Generate some dummy dates for the current month
  const today = new Date().getDate()
  const dates = Array.from({ length: 14 }).map((_, i) => today + i).filter(d => d <= 31)

  return (
    <>
      <SEO
        title="Schedule a Discovery Call with 1Sash Founders"
        description="Schedule a 1-on-1 technical discovery session with 1Sash engineers. Discuss project architecture, budget, tech stack, and roadmap."
        keywords="book consultation 1Sash, software discovery call, hire software team, technical architecture consultation"
      />

      <section className="relative pt-36 pb-32 px-4 md:px-6 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto max-w-5xl">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">Free Consultation</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Book a <span className="text-gradient">Discovery Call</span></h1>
            <p className="text-muted-foreground text-lg">Choose a time that works for you. Let's discuss your vision.</p>
          </motion.div>

          {isBooked ? (
            <motion.div 
              className="max-w-xl mx-auto text-center p-12 rounded-3xl border border-emerald-500/30 bg-emerald-500/5"
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            >
              <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
              <h2 className="text-3xl font-heading font-bold mb-4">Booking Confirmed!</h2>
              <p className="text-muted-foreground mb-6">A calendar invitation with the Google Meet link has been sent to your email.</p>
              <div className="inline-flex items-center gap-4 text-sm font-medium bg-card p-4 rounded-xl border border-border">
                <div className="flex items-center gap-2"><CalendarIcon className="w-4 h-4 text-primary" /> {selectedDate}th</div>
                <div className="w-px h-4 bg-border" />
                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> {selectedTime}</div>
              </div>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Calendar Sidebar */}
              <motion.div className="p-8 rounded-3xl border border-border bg-card" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Video className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg">Discovery Call</h3>
                    <p className="text-muted-foreground text-sm flex items-center gap-1"><Clock className="w-3 h-3" /> 30 min | Google Meet</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-8">During this call, we will discuss your project requirements, technical challenges, and outline a high-level execution plan.</p>

                <h4 className="font-semibold mb-4 flex items-center gap-2"><CalendarIcon className="w-4 h-4" /> Select a Date (This Month)</h4>
                <div className="grid grid-cols-5 gap-2 mb-8">
                  {dates.map((date) => (
                    <button
                      key={date}
                      onClick={() => setSelectedDate(date)}
                      className={cn(
                        "p-3 rounded-xl text-center text-sm font-medium transition-all",
                        selectedDate === date ? "bg-primary text-white shadow-md" : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                      )}
                    >
                      {date}
                    </button>
                  ))}
                </div>

                {selectedDate && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}>
                    <h4 className="font-semibold mb-4 flex items-center gap-2"><Clock className="w-4 h-4" /> Select a Time</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {availableTimes.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={cn(
                            "py-2.5 rounded-lg text-sm font-medium transition-all border",
                            selectedTime === time ? "border-primary bg-primary/10 text-primary" : "border-border hover:border-primary/50 text-muted-foreground"
                          )}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>

              {/* Booking Form */}
              <motion.div className="p-8 rounded-3xl border border-border bg-card flex flex-col justify-center" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
                {selectedDate && selectedTime ? (
                  <form onSubmit={handleBooking} className="space-y-5">
                    <h3 className="font-heading font-bold text-xl mb-6">Your Details</h3>
                    <div>
                      <label className="block text-sm font-medium mb-2">Name *</label>
                      <input required className="w-full px-4 py-3 rounded-xl border border-border bg-background outline-none focus:border-primary" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <input required type="email" className="w-full px-4 py-3 rounded-xl border border-border bg-background outline-none focus:border-primary" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Project Brief</label>
                      <textarea rows={3} className="w-full px-4 py-3 rounded-xl border border-border bg-background outline-none focus:border-primary resize-none" />
                    </div>
                    <button type="submit" className="w-full py-4 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(80,70,229,0.3)]">
                      Confirm Booking
                    </button>
                  </form>
                ) : (
                  <div className="text-center text-muted-foreground flex flex-col items-center">
                    <CalendarIcon className="w-12 h-12 opacity-20 mb-4" />
                    <p>Please select a date and time<br/>from the calendar to proceed.</p>
                  </div>
                )}
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
