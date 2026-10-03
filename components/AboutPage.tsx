'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import Navbar from './Navbar'
import AboutHero from './about/AboutHero'
import AboutStats from './about/AboutStats'
import AboutStory from './about/AboutStory'
import AboutVisionMission from './about/AboutVisionMission'
import AboutValues from './about/AboutValues'
import AboutWhyChoose from './about/AboutWhyChoose'
import AboutBeyond from './about/AboutBeyond'
import AboutAdmissionSteps from './about/AboutAdmissionSteps'
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
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-red-500 selection:text-white">
      {/* 1. Header / Navbar with active 'about' state */}
      <Navbar activePage="about" />

      <main className="flex-1">
        {/* 2. Hero Section (Home > About JRS, Title, Subtitle, Description, CTA Buttons) */}
        <AboutHero />

        {/* 3. Key Metrics Floating White Card (2021, 3630478, 1:25, 5 Core Pillars) */}
        <AboutStats />

        {/* 4. Our Story (Journey of Learning & Human Values, Indian Ethos, Int'l Standards, Interactive, Real-World) */}
        <AboutStory />

        {/* 5. Our Vision & Our Mission Dual Cards with Custom Mountain Flag & Rocket Launch Illustrations */}
        <AboutVisionMission />

        {/* 6. Our Values & Attributes (Hygiene, Perseverance, Integrity, Honesty, Respect, Trust, Determination, Teamwork, Compassion) */}
        <AboutValues />

        {/* 7. Why Choose JRS? What Makes JRS Different? (5 Top Feature Cards + 8 Compact Badges) */}
        <AboutWhyChoose />

        {/* 8. Education Beyond the Classroom (10 Co-curricular Activities: Art, Music, Dance, Dramatics, Yoga, Skating, Sports, Projects, Excursions, Clubs) */}
        <AboutBeyond />

        {/* 9. Steps of Admission Process (6-Step Hexagonal Workflow with Dashed Connectors) */}
        <AboutAdmissionSteps />

        {/* 10. Bottom CTA Navy Banner (Give Your Child a Strong Foundation for Tomorrow) */}
        <AboutBottomCTA />
      </main>

      {/* 10. Footer with Quick Links, Contact, Interactive Map, and Copyright bar */}
      <Footer />
    </div>
  )
}
