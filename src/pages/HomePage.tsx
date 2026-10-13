import React from "react"
import { SEO } from "../components/common/SEO"
import { HeroSection } from "../components/sections/HeroSection"
import { WorkSection } from "../components/sections/WorkSection"
import { ServicesSection } from "../components/sections/ServicesSection"
import { ProcessSection } from "../components/sections/ProcessSection"
import { CTABannerSection } from "../components/sections/CTABannerSection"

export const HomePage: React.FC = () => {
  const homeSchema = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is OneSash (One Sash)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "OneSash (officially spelled OneSash, also written as One Sash or onesash) is an independent software development studio based in Chennai, India and Bangalore, India. We engineer bespoke web applications, mobile platforms, and business automation systems for ambitious companies."
          }
        },
        {
          "@type": "Question",
          "name": "Is the company name written as OneSash or One Sash?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The official company name is OneSash (without spaces). However, it is also commonly searched as One Sash or onesash. OneSash is a software development studio in Chennai and Bangalore, India."
          }
        },
        {
          "@type": "Question",
          "name": "What services does OneSash provide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "OneSash specializes in 6 core engineering capabilities: Custom Software Development, Modern Web Applications (React & TypeScript), Mobile App Engineering (iOS & Android), AI Integration & OCR, Business Process Automation, and Cloud Infrastructure & DevOps."
          }
        },
        {
          "@type": "Question",
          "name": "Where is OneSash located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "OneSash has engineering studios in Chennai, Tamil Nadu and Bangalore, Karnataka, India, serving clients across India and internationally."
          }
        },
        {
          "@type": "Question",
          "name": "Who owns the software source code built by OneSash?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Clients retain 100% intellectual property ownership of all source code, database architectures, and cloud deployments from Day 1, with zero proprietary vendor lock-in or recurring licensing penalties."
          }
        },
        {
          "@type": "Question",
          "name": "How does OneSash collaborate with clients?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Clients work directly with senior engineers without non-technical account managers or middlemen. OneSash provides predictable staging releases every 10 days for continuous review."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Featured Software Systems by OneSash",
      "description": "Production software systems and operations platforms engineered by OneSash.",
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
          "url": "https://onesash.co.in/portfolio#qr-food"
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
        schema={homeSchema}
      />

      <main>
        {/* 1. Hero: We build software that works. */}
        <HeroSection />

        {/* 2. Featured Work: Things we've built. */}
        <WorkSection />

        {/* 3. Services: What can we build for you? */}
        <ServicesSection />

        {/* 4. Process: From idea to launch. */}
        <ProcessSection />

        {/* 5. Contact: Have something in mind? */}
        <CTABannerSection />
      </main>
    </>
  )
}
