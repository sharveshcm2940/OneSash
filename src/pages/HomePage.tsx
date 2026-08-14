import { SEO } from "../components/common/SEO"
import { HeroSection } from "../components/sections/HeroSection"
import { TrustIdentityStrip } from "../components/sections/TrustIdentityStrip"
import { ServicesSection } from "../components/sections/ServicesSection"
import { SelectedWorkSection } from "../components/sections/SelectedWorkSection"
import { TechnologiesSection } from "../components/sections/TechnologiesSection"
import { WhySashSection } from "../components/sections/WhySashSection"
import { ProcessSection } from "../components/sections/ProcessSection"
import { WhatWeBuildSection } from "../components/sections/WhatWeBuildSection"
import { ThreeDEngineeringSection } from "../components/sections/ThreeDEngineeringSection"
import { AboutSection } from "../components/sections/AboutSection"
import { TeamBiosSection } from "../components/sections/TeamBiosSection"
import { PhilosophySection } from "../components/sections/PhilosophySection"
import { ContactSection } from "../components/sections/ContactSection"

export const HomePage = () => {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "1Sash",
    "url": "https://onesash.com",
    "description": "1Sash is a software development studio engineering custom web systems, mobile applications, AI platforms, and cloud solutions.",
    "publisher": {
      "@type": "Organization",
      "name": "1Sash Technocrafts"
    }
  }

  return (
    <>
      <SEO
        description="1Sash is a software development studio founded by Saraveshvaran A, Sharvesh CM, Siddharth Santhosh Kumar, Vivek A, and Naren Annamalai in 2026. We build production-ready full-stack applications, AI integrations, mobile apps, and cloud pipelines."
        keywords="1Sash, software freelancing studio, full stack software development, React Vite TypeScript, custom web app engineering, mobile app development, Chennai software company, Saraveshvaran A, Sharvesh CM, Siddharth Santhosh Kumar, Vivek A, Naren Annamalai"
        schema={homeSchema}
      />

      {/* 1Sash Complete Page Flow */}
      <HeroSection />
      <TrustIdentityStrip />
      <ServicesSection />
      <SelectedWorkSection />
      <TechnologiesSection />
      <WhySashSection />
      <ProcessSection />
      <WhatWeBuildSection />
      <ThreeDEngineeringSection />
      <AboutSection />
      <TeamBiosSection />
      <PhilosophySection />
      <ContactSection />
    </>
  )
}
