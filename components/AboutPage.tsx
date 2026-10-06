'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import Navbar from './Navbar'
import AboutHero from './about/AboutHero'
import AboutStats from './about/AboutStats'
import AboutStory from './about/AboutStory'
import AboutVideo from './about/AboutVideo'
import AboutVisionMission from './about/AboutVisionMission'
import AboutWhyChoose from './about/AboutWhyChoose'
import AboutPTA from './about/AboutPTA'
import AboutBottomCTA from './about/AboutBottomCTA'
import Footer from './Footer'

export default function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 750,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    })
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-700 text-[14px] antialiased selection:bg-red-500 selection:text-white">
      {/* 1. Header / Navbar with active 'about' state */}
      <Navbar activePage="about" />

      <main className="flex-1">
        {/* 2. Hero Section (Home > About JRS, Title, Subtitle, Description, CTA Buttons) */}
        <AboutHero />

        {/* 3. Key Metrics Floating White Card (2021, 3630478, 1:25, 5 Core Pillars) */}
        <AboutStats />

        {/* 4. Our Story (Journey of Learning & Human Values, Indian Ethos, Int'l Standards, Interactive, Real-World) */}
        <AboutStory />

        {/* 5. Campus Tour & Video Showcase (Inline Framed Player & Welcome Section) */}
        <AboutVideo />

        {/* 6. Our Vision & Our Mission Dual Cards with Custom Mountain Flag & Rocket Launch Illustrations */}
        <AboutVisionMission />

        {/* 7. Why Choose JRS? What Makes JRS Different? (5 Top Feature Cards + 8 Compact Badges) */}
        <AboutWhyChoose />

        {/* 8. Parent Teacher Association (PTA) Members Table */}
        <AboutPTA />

        {/* 9. Bottom CTA Navy Banner */}
        <AboutBottomCTA />
      </main>

      {/* 10. Footer with Quick Links, Contact, Interactive Map, and Copyright bar */}
      <Footer />
    </div>
  )
}
