import React from "react"
import { SEO } from "../components/common/SEO"
import { HeroSection } from "../components/sections/HeroSection"
import { WorkSection } from "../components/sections/WorkSection"
import { ServicesSection } from "../components/sections/ServicesSection"
import { ProcessSection } from "../components/sections/ProcessSection"
import { CTABannerSection } from "../components/sections/CTABannerSection"

export const HomePage: React.FC = () => {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "OneSash",
    "url": "https://onesash.com",
    "description": "OneSash designs and develops custom software, web applications and digital products that help businesses work better.",
    "email": "onesash.contact@gmail.com",
    "telephone": "+91 99803 99557",
    "address": [
      {
        "@type": "PostalAddress",
        "addressLocality": "Chennai",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "Bangalore",
        "addressCountry": "IN"
      }
    ]
  }

  return (
    <>
      <SEO
        title="OneSash — Custom Software, Web Apps & Business Tools | Chennai, India & Bangalore, India"
        description="OneSash builds custom software, web applications and digital products that move businesses forward. Real products, engineering craft, direct collaboration in Chennai, India and Bangalore, India."
        keywords="OneSash, custom software development Chennai, web application engineering Bangalore, Apar Crown, Law Throne, software development studio Chennai India, Bangalore India"
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
