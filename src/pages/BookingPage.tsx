import { useState } from "react"
import { SEO } from "../components/common/SEO"
import { CTABannerSection } from "../components/sections/CTABannerSection"
import { Calendar as CalendarIcon, Clock, Video, CheckCircle2, ArrowRight } from "lucide-react"

const availableTimes = ["10:00 AM IST", "11:30 AM IST", "02:00 PM IST", "04:00 PM IST", "05:30 PM IST"]

export const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState<number | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [notes, setNotes] = useState("")
  const [isBooked, setIsBooked] = useState(false)

  const today = new Date().getDate()
  const dates = Array.from({ length: 12 }).map((_, i) => today + i).filter(d => d <= 31)

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedDate && selectedTime && name && email) {
      setIsBooked(true)
    }
  }

  return (
    <>
      <SEO
        title="Schedule a Technical Discovery Call with OneSash"
        description="Schedule a 1-on-1 technical discovery session with OneSash senior engineers in Chennai, India and Bangalore, India. Discuss project architecture, budget, and roadmap."
        keywords="book consultation OneSash, software discovery call, schedule meeting OneSash, technical consultation Chennai, technical consultation Bangalore"
      />

      <main className="bg-[#FAFAF8] pt-24 pb-16 md:pt-28 md:pb-20 border-b border-[#E4E4E0]">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          
          {/* Header */}
          <div className="max-w-3xl mb-12 space-y-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-semibold tracking-tight text-[#171717] leading-[1.1]">
              Book a 30-Minute Discovery Call.
            </h1>
            <p className="text-base sm:text-lg text-[#646464] leading-relaxed pt-1">
              Speak directly with our senior software architects. We'll discuss your operational problems, explore potential technical architectures, and provide a fixed-budget outline.
            </p>
          </div>

          {isBooked ? (
            <div className="bg-white p-10 sm:p-14 rounded-2xl border border-[#E4E4E0] shadow-studio-card text-center space-y-5 max-w-2xl mx-auto">
              <div className="w-14 h-14 rounded-full bg-[#171717] text-white mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-heading font-semibold text-[#171717]">
                Discovery Session Confirmed.
              </h2>
              <p className="text-xs sm:text-sm text-[#646464] max-w-md mx-auto leading-relaxed">
                Thank you, {name}. A Google Meet invitation for Date: {selectedDate}th at {selectedTime} has been scheduled. Our lead engineer will connect with you directly.
              </p>
              <div className="p-4 bg-[#FAFAF8] rounded-xl border border-[#E4E4E0] max-w-sm mx-auto text-xs text-[#171717] flex justify-between">
                <span>Google Meet Video Link</span>
                <span className="font-mono text-[#171717] font-semibold">meet.google.com/onesash-sync</span>
              </div>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => setIsBooked(false)}
                  className="text-xs font-semibold text-[#171717] hover:underline"
                >
                  Schedule another slot
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Calendar & Times (7 cols) */}
              <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-[#E4E4E0] shadow-studio-card space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-[#E4E4E0]">
                  <div className="w-10 h-10 rounded-xl bg-[#F1F1EE] text-[#171717] border border-[#E4E4E0] flex items-center justify-center">
                    <Video className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-[#171717]">Technical Discovery Call</h3>
                    <span className="text-xs text-[#646464]">30 mins • Video Conference via Google Meet</span>
                  </div>
                </div>

                {/* Date Selection */}
                <div className="space-y-3">
                  <span className="text-xs font-semibold text-[#171717] flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4 text-[#171717]" />
                    Select a Date (Current Month)
                  </span>
                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                    {dates.map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => setSelectedDate(d)}
                        className={`p-3 rounded-xl text-center text-xs font-semibold transition-all cursor-pointer ${
                          selectedDate === d
                            ? "bg-[#171717] text-white shadow-studio-subtle"
                            : "bg-[#FAFAF8] border border-[#E4E4E0] text-[#171717] hover:border-[#171717]"
                        }`}
                      >
                        {d}th
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Selection */}
                {selectedDate && (
                  <div className="space-y-3 pt-4 border-t border-[#E4E4E0]">
                    <span className="text-xs font-semibold text-[#171717] flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#171717]" />
                      Select a Time Slot
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {availableTimes.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setSelectedTime(t)}
                          className={`p-2.5 rounded-lg text-xs font-semibold transition-all border cursor-pointer ${
                            selectedTime === t
                              ? "bg-[#171717] text-white border-[#171717]"
                              : "bg-[#FAFAF8] border-[#E4E4E0] text-[#171717] hover:border-[#171717]"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Form (5 cols) */}
              <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-[#E4E4E0] shadow-studio-card space-y-5">
                <h3 className="font-heading font-semibold text-base text-[#171717]">Your Information</h3>
                
                {selectedDate && selectedTime ? (
                  <form onSubmit={handleBooking} className="space-y-4">
                    <div className="p-3 bg-[#F1F1EE] rounded-lg border border-[#E4E4E0] text-xs text-[#171717]">
                      Scheduled for: <strong>{selectedDate}th at {selectedTime}</strong>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#171717] block">Your Name</label>
                      <input
                        required
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Ananya Sundaram"
                        className="w-full px-3.5 py-2 rounded-lg border border-[#E4E4E0] bg-[#FAFAF8] text-xs text-[#171717] focus:bg-white focus:border-[#171717] outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#171717] block">Work Email</label>
                      <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full px-3.5 py-2 rounded-lg border border-[#E4E4E0] bg-[#FAFAF8] text-xs text-[#171717] focus:bg-white focus:border-[#171717] outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#171717] block">Project Brief / Questions</label>
                      <textarea
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Brief summary of what you'd like to discuss..."
                        className="w-full px-3.5 py-2 rounded-lg border border-[#E4E4E0] bg-[#FAFAF8] text-xs text-[#171717] focus:bg-white focus:border-[#171717] outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 px-4 rounded-md text-xs font-semibold text-white bg-[#171717] hover:bg-[#2c2c2c] transition-colors cursor-pointer"
                    >
                      Confirm 30-Minute Call
                    </button>
                  </form>
                ) : (
                  <div className="py-12 text-center text-xs text-[#646464] space-y-2">
                    <CalendarIcon className="w-8 h-8 text-[#A0A0A0] mx-auto" />
                    <p>Please select a date and time slot from the calendar to confirm your appointment.</p>
                  </div>
                )}
              </div>

            </div>
          )}

        </div>
      </main>

      <CTABannerSection />
    </>
  )
}
