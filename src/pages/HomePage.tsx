import { SEO } from "../components/common/SEO"
import { HeroSection } from "../components/sections/HeroSection"
import { WorkSection } from "../components/sections/WorkSection"
import { ServicesSection } from "../components/sections/ServicesSection"
import { ProcessSection } from "../components/sections/ProcessSection"
import { CTABannerSection } from "../components/sections/CTABannerSection"

export const HomePage = () => {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "OneSash",
    "url": "https://onesash.com",
    "description": "OneSash designs and develops custom software, web applications and digital products that help businesses work better.",
    "email": "onesash.contact@gmail.com",
    "address": [
      {
        "@type": "PostalAddress",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
      }
    ]
  }

  return (
    <>
      <SEO
        title="OneSash — Independent Software Development Studio | Chennai"
        description="OneSash designs and develops custom software, web applications and digital products that help businesses work better. Chennai & Bangalore."
        keywords="OneSash, software development studio Chennai, custom software development, web application engineering, Apar Crown, Law Throne, software company Chennai"
        schema={homeSchema}
      />

      <main>
        {/* 1. Hero: Direct Value Proposition & Product Mockup */}
        <HeroSection />

        {/* 2. Selected Work (Centerpiece: Real Delivered Systems) */}
        <WorkSection />

        {/* 3. Core Capabilities */}
        <ServicesSection />

        {/* 4. Structured Engineering Process */}
        <ProcessSection />

        {/* 5. Direct Studio Contact */}
        <CTABannerSection />
      </main>
    </>
  )
}
