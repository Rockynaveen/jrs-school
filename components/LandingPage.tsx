'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import Navbar from './Navbar'
import Hero from './Hero'
import FeatureCards from './FeatureCards'
import AboutSection from './AboutSection'
import StatsBar from './StatsBar'
import AcademicsSection from './AcademicsSection'
import FacilitiesSection from './FacilitiesSection'
import BeyondClassroom from './BeyondClassroom'
import EventsSection from './EventsSection'
import AdmissionsCTA from './AdmissionsCTA'
import Footer from './Footer'

export default function LandingPage() {
  useEffect(() => {
    AOS.init({
      duration: 750,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
      disable: 'mobile',
    })
  }, [])
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased w-full">
      {/* 1. Header / Navbar */}
      <Navbar />

      <main className="flex-1 w-full">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Floating 5 Highlight Cards */}
        <FeatureCards />

        {/* 4. About JRS Section */}
        <AboutSection />

        {/* 5. Academics Section */}
        <AcademicsSection />

        {/* 6. Facilities Section */}
        <FacilitiesSection />

        {/* 7. Beyond Classroom Section */}
        <BeyondClassroom />

        {/* 8. Key Statistics Navy Banner */}
        <StatsBar />

        {/* 9. Latest Events Section */}
        <EventsSection />

        {/* 10. Admission Open 2026-2027 & Enquiry Form */}
        <AdmissionsCTA />
      </main>

      {/* 11. Footer & Copyright Bar */}
      <Footer />
    </div>
  )
}
