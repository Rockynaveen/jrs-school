'use client'

import React from 'react'
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
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased">
      {/* 1. Header / Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Floating 5 Highlight Cards */}
        <FeatureCards />

        {/* 4. About JRS Section */}
        <AboutSection />

        {/* 5. Key Statistics Navy Banner */}
        <StatsBar />

        {/* 6. Academics Section */}
        <AcademicsSection />

        {/* 7. Facilities Section */}
        <FacilitiesSection />

        {/* 8. Beyond Classroom Section */}
        <BeyondClassroom />

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
