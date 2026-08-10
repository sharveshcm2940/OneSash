import { Helmet } from "react-helmet-async"
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
  return (
    <>
      <Helmet>
        <title>1Sash — Software Development Studio Founded in 2026</title>
        <meta name="description" content="1Sash is a software freelancing company founded by Sarveshvara A, Sharvesh CM, and Siddharth Santhosh Kumar in 2026, building practical digital products and systems for real-world problems." />
        <meta property="og:title" content="1Sash — Software Development Studio" />
        <meta property="og:description" content="We build software that gets things done." />
      </Helmet>

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
