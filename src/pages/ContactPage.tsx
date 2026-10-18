import { useState, useId } from "react"
import { useLocation } from "react-router-dom"
import { SEO } from "../components/common/SEO"
import { CheckCircle2, Mail, MapPin, Phone, Clock, MessageCircle } from "lucide-react"

export const ContactPage = () => {
  const formId = useId()
  const location = useLocation()
  const prefill = (location.state as any)?.estimatedScope

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: prefill ? prefill.projectType : "Custom Software Development",
    projectDescription: prefill ? `Estimated Scope: ${prefill.complexity} complexity, ${prefill.timeline} timeline.` : "",
    budget: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [referenceId, setReferenceId] = useState("")

  const projectTypes = [
    "Custom Software Development",
    "Web Application Development",
    "Mobile Application Development",
    "AI Integration & Automation",
    "Business Process Automation",
    "Cloud Deployment & Maintenance",
    "Technical Discovery & Architectural Audit"
  ]

  const budgetRanges = [
    "Under ₹1,00,000 / $1,200",
    "₹1,00,000 – ₹3,00,000 / $1,200 – $3,500",
    "₹3,00,000 – ₹8,00,000 / $3,500 – $10,000",
    "₹8,00,000+ / $10,000+",
    "Not sure / Let's scope it out"
  ]

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!formData.name.trim()) errs.name = "Please enter your name."
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address."
    }
    if (!formData.projectDescription.trim()) {
      errs.projectDescription = "Please briefly describe your project or operational problem."
    }
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setReferenceId(`ONESASH-${Math.floor(100000 + Math.random() * 900000)}`)
    }, 700)
  }

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "OneSash",
      "url": "https://onesash.co.in",
      "telephone": ["+919980399557", "+918903467843"],
      "email": "onesash.contact@gmail.com",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+919980399557",
          "contactType": "sales & engineering",
          "areaServed": "Global",
          "availableLanguage": ["English", "Tamil", "Hindi"]
        }
      ]
    }
  }

  return (
    <>
      <SEO
        title="Tell Us What You Want to Build — Contact OneSash"
        description="Connect with OneSash in Chennai, India and Bangalore, India. Whether you have a project brief or an early idea, we'd be happy to understand what you're working on."
        keywords="contact OneSash, software development inquiry, hire software developers Chennai, hire software developers Bangalore, start software project India"
        schema={contactSchema}
      />

      <main className="bg-[#FAFAF8] pt-24 pb-16 md:pt-28 md:pb-20 border-b border-[#E4E4E0]">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          
          {/* Header */}
          <div className="max-w-3xl mb-12 space-y-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-semibold tracking-tight text-[#171717] leading-[1.1]">
              Tell us what you want to build.
            </h1>
            <p className="text-base sm:text-lg text-[#646464] leading-relaxed pt-1">
              Whether you have a complete project brief or an early-stage idea, we'd be happy to understand what you're working on.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Contact Form (7 cols) */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl border border-[#E4E4E0] shadow-studio-card">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#171717] text-white mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-heading font-semibold text-[#171717]">
                    Project brief received.
                  </h2>
                  <p className="text-xs sm:text-sm text-[#646464] max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name}. Our lead engineers will review your requirements and respond within 24 business hours.
                  </p>
                  <div className="p-3 bg-[#FAFAF8] rounded-lg border border-[#E4E4E0] max-w-xs mx-auto text-xs text-[#646464]">
                    <span>Inquiry Reference: </span>
                    <strong className="text-[#171717] font-mono">{referenceId}</strong>
                  </div>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false)
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          projectType: "Custom Software Development",
                          projectDescription: "",
                          budget: ""
                        })
                      }}
                      className="text-xs font-semibold text-[#171717] hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label htmlFor={`${formId}-name`} className="text-xs font-semibold text-[#171717] block">
                      Your Name <span className="text-[#B3261E]">*</span>
                    </label>
                    <input
                      id={`${formId}-name`}
                      type="text"
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-[#E4E4E0] bg-[#FAFAF8] text-xs sm:text-sm text-[#171717] focus:bg-white focus:border-[#171717] outline-none transition-colors"
                    />
                    {errors.name && <p className="text-[11px] text-[#171717] font-semibold">{errors.name}</p>}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor={`${formId}-email`} className="text-xs font-semibold text-[#171717] block">
                        Email Address <span className="text-[#171717]">*</span>
                      </label>
                      <input
                        id={`${formId}-email`}
                        type="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-[#E4E4E0] bg-[#FAFAF8] text-xs sm:text-sm text-[#171717] focus:bg-white focus:border-[#171717] outline-none transition-colors"
                      />
                      {errors.email && <p className="text-[11px] text-[#171717] font-semibold">{errors.email}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor={`${formId}-phone`} className="text-xs font-semibold text-[#171717] block">
                        Phone Number <span className="text-[#646464] font-normal">(Optional)</span>
                      </label>
                      <input
                        id={`${formId}-phone`}
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-[#E4E4E0] bg-[#FAFAF8] text-xs sm:text-sm text-[#171717] focus:bg-white focus:border-[#171717] outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div className="space-y-1.5">
                    <label htmlFor={`${formId}-projectType`} className="text-xs font-semibold text-[#171717] block">
                      Project Type
                    </label>
                    <select
                      id={`${formId}-projectType`}
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-[#E4E4E0] bg-[#FAFAF8] text-xs sm:text-sm text-[#171717] focus:bg-white focus:border-[#171717] outline-none transition-colors cursor-pointer"
                    >
                      {projectTypes.map((pt) => (
                        <option key={pt} value={pt}>{pt}</option>
                      ))}
                    </select>
                  </div>

                  {/* Project Description */}
                  <div className="space-y-1.5">
                    <label htmlFor={`${formId}-description`} className="text-xs font-semibold text-[#171717] block">
                      Project Description <span className="text-[#171717]">*</span>
                    </label>
                    <textarea
                      id={`${formId}-description`}
                      rows={4}
                      placeholder="Tell us what problem your business is facing, what kind of software you need, or what workflows you want to automate..."
                      value={formData.projectDescription}
                      onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-[#E4E4E0] bg-[#FAFAF8] text-xs sm:text-sm text-[#171717] focus:bg-white focus:border-[#171717] outline-none transition-colors resize-y"
                    />
                    {errors.projectDescription && <p className="text-[11px] text-[#171717] font-semibold">{errors.projectDescription}</p>}
                  </div>

                  {/* Budget (Optional) */}
                  <div className="space-y-1.5">
                    <label htmlFor={`${formId}-budget`} className="text-xs font-semibold text-[#171717] block">
                      Estimated Budget <span className="text-[#646464] font-normal">(Optional)</span>
                    </label>
                    <select
                      id={`${formId}-budget`}
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-[#E4E4E0] bg-[#FAFAF8] text-xs sm:text-sm text-[#171717] focus:bg-white focus:border-[#171717] outline-none transition-colors cursor-pointer"
                    >
                      <option value="">Select a ballpark range...</option>
                      {budgetRanges.map((br) => (
                        <option key={br} value={br}>{br}</option>
                      ))}
                    </select>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-2.5 px-6 rounded-md text-xs font-semibold text-white bg-[#171717] hover:bg-[#2c2c2c] transition-colors disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? "Submitting Brief..." : "Submit Project Brief"}
                    </button>
                    <p className="text-[11px] text-[#646464] text-center mt-2.5">
                      Direct engineering review. No automated marketing spam.
                    </p>
                  </div>

                </form>
              )}
            </div>

            {/* Right: Direct Studio Contacts & Information (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Direct Communication Details */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E4E4E0] shadow-studio-card space-y-5">
                <span className="text-[11px] font-semibold tracking-wider text-[#171717] uppercase block font-mono">
                  DIRECT CONTACT
                </span>
                
                <div className="space-y-4 text-xs sm:text-sm">
                  {/* Phone Call */}
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#171717] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] uppercase font-semibold text-[#646464] block">Call Us Directly</span>
                      <a href="tel:+919980399557" className="font-semibold text-[#171717] hover:underline">
                        +91 99803 99557
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-4 h-4 text-[#171717] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] uppercase font-semibold text-[#646464] block">WhatsApp Message</span>
                      <a
                        href="https://wa.me/918903467843"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-[#171717] hover:underline"
                      >
                        +91 89034 67843
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#171717] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] uppercase font-semibold text-[#646464] block">Email Us Directly</span>
                      <a href="mailto:onesash.contact@gmail.com" className="font-semibold text-[#171717] hover:underline">
                        onesash.contact@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Response Turnaround */}
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#171717] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] uppercase font-semibold text-[#646464] block">Response Turnaround</span>
                      <span className="text-[#171717] font-medium">Within 24 business hours</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Physical Studio Locations */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E4E4E0] shadow-studio-card space-y-4">
                <span className="text-[11px] font-semibold tracking-wider text-[#646464] uppercase block">
                  Studio Locations
                </span>

                <div className="space-y-4 text-xs">
                  <div className="pb-3 border-b border-[#E4E4E0]">
                    <div className="flex items-center gap-1.5 font-semibold text-[#171717]">
                      <MapPin className="w-3.5 h-3.5 text-[#171717]" />
                      <span>Chennai, India</span>
                    </div>
                    <p className="text-[#646464] mt-0.5 leading-relaxed">
                      Engineering & Architecture Studio
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5 font-semibold text-[#171717]">
                      <MapPin className="w-3.5 h-3.5 text-[#171717]" />
                      <span>Bangalore, India</span>
                    </div>
                    <p className="text-[#646464] mt-0.5 leading-relaxed">
                      Product Systems & Automation Studio
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </main>
    </>
  )
}
