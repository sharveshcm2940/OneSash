import React from "react"
import { SEO } from "../components/common/SEO"
import { HeroSection } from "../components/sections/HeroSection"
import { WorkSection } from "../components/sections/WorkSection"
import { ServicesSection } from "../components/sections/ServicesSection"
import { ProcessSection } from "../components/sections/ProcessSection"
import { CTABannerSection } from "../components/sections/CTABannerSection"

const faqs = [
  ["Do I need a technical brief?", "No. Tell us what takes too much time or what you want customers to do. We will discuss a suitable next step."],
  ["How much will it cost?", "Cost depends on scope, integrations and complexity. We agree deliverables, a timeline and a budget before development starts."],
  ["Who owns the code?", "Your engagement includes source-code handover and ownership terms agreed in your project contract. Hosting and third-party services may have separate costs."],
  ["What happens after I enquire?", "We review your message, ask any initial questions and arrange a conversation if the project is a fit. We aim to reply within one business day."]
]

export const HomePage: React.FC = () => {
  const homeSchema = [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Featured Software Systems by OneSash",
      "description": "Software products and operations platforms by OneSash; see individual development status.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Apar Crown — Apartment & Facility Management Platform",
          "url": "https://onesash.co.in/portfolio#apar-crown"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Law Throne — Legal Practice CRM & Case Lifecycle Platform",
          "url": "https://onesash.co.in/portfolio#law-throne"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "QR Food Processing — Contactless Table Ordering & Kitchen Display Engine",
          "url": "https://onesash.co.in/portfolio#qr-food-processing"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "PG Management System — Multi-Property Hostel Operations Platform",
          "url": "https://onesash.co.in/portfolio#pg-management"
        }
      ]
    }
  ]

  return (
    <>
      <SEO
        title="OneSash — Custom Software, Web Apps & Business Automation | Chennai & Bangalore"
        description="OneSash builds custom software, web applications and digital products that move businesses forward. Real products, engineering craft, direct collaboration in Chennai, India and Bangalore, India."
        keywords="OneSash, onesash, One Sash, custom software development Chennai, web application engineering Bangalore, Apar Crown, Law Throne, software development studio Chennai India, Bangalore India"
        schema={[...homeSchema, { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) }]}
      />

      <main>
        {/* 1. Hero: We build software that works. */}
        <HeroSection />

        {/* Help visitors choose the outcome they need before exploring work. */}
        <ServicesSection />

        {/* Relevant examples and transparent product status. */}
        <WorkSection />

        {/* 4. Process: From idea to launch. */}
        <ProcessSection />

        {/* 5. Contact: Have something in mind? */}
        <section className="max-w-4xl mx-auto px-6 py-16" aria-labelledby="faq-heading"><h2 id="faq-heading" className="text-3xl font-semibold mb-6">Before you get in touch</h2>{faqs.map(([question, answer]) => <details key={question} className="border-b border-neutral-200 py-5"><summary className="font-medium cursor-pointer">{question}</summary><p className="mt-3 text-neutral-600 leading-relaxed">{answer}</p></details>)}</section>
        <CTABannerSection />
      </main>
    </>
  )
}
