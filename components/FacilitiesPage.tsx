'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import Link from 'next/link'
import Navbar from './Navbar'
import PageHero from './PageHero'
import Footer from './Footer'
import {
  Waves,
  Trophy,
  UtensilsCrossed,
  Bus,
  ShieldCheck,
  HeartPulse,
  Building2,
  Wifi,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

export default function FacilitiesPage() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    })
  }, [])

  const facilities = [
    {
      title: 'Athletics Track, Swimming Pool and Meditation Hall',
      icon: Waves,
      iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    },
    {
      title: 'Spacious playgrounds for football, cricket, basketball and volleyball',
      icon: Trophy,
      iconBg: 'bg-amber-50 text-amber-600 border-amber-100',
    },
    {
      title: 'Canteen for the use of day scholars and staff',
      icon: UtensilsCrossed,
      iconBg: 'bg-orange-50 text-orange-600 border-orange-100',
    },
    {
      title: 'Transport facilities for students and staff',
      icon: Bus,
      iconBg: 'bg-blue-50 text-blue-600 border-blue-100',
    },
    {
      title: 'Secure campus with widespread CCTV coverage',
      icon: ShieldCheck,
      iconBg: 'bg-red-50 text-red-600 border-red-100',
    },
    {
      title: 'Medical facilities and First aid',
      icon: HeartPulse,
      iconBg: 'bg-rose-50 text-rose-600 border-rose-100',
    },
    {
      title: 'World Class Infrastructure with elegant Ambience',
      icon: Building2,
      iconBg: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    },
    {
      title: 'Excellent computing facilities with Internet and Wi-Fi',
      icon: Wifi,
      iconBg: 'bg-cyan-50 text-cyan-600 border-cyan-100',
    },
    {
      title: 'And many more…',
      icon: Sparkles,
      iconBg: 'bg-purple-50 text-purple-600 border-purple-100',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-700 antialiased selection:bg-red-500 selection:text-white">
      {/* 1. Header */}
      <Navbar activePage="facilities" />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <PageHero
          breadcrumb="Facilities"
          title="State-of-the-Art"
          titleHighlight="Facilities"
          subtitle="World Class Infrastructure with Elegant Ambience."
          imageSrc="/images/campus-building.jpg"
          imageAlt="JRS International School Facilities"
          primaryButton={{
            text: 'View Facilities',
            href: '#facilities-list',
          }}
          secondaryButton={{
            text: 'Contact Us',
            href: '/#contact',
          }}
        />

        {/* 3. Simple & Clean Facilities Section */}
        <section id="facilities-list" className="py-14 sm:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-12" data-aos="fade-up">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#dc2626]">
                OUR CAMPUS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#031c3f] mt-2 tracking-tight">
                State-of-the-Art Facilities
              </h2>
              <p className="text-slate-700 text-sm sm:text-base mt-3 leading-relaxed">
                The campus boasts of the following unique facilities to make this happen:
              </p>
            </div>

            {/* Simple, Clean 2-Column / 3-Column List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {facilities.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                    className="p-5 sm:p-6 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-red-200 hover:shadow-xl transition-all duration-200 flex items-center gap-4 sm:gap-5 group"
                  >
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shrink-0 border-2 ${item.iconBg} transition-transform duration-200 group-hover:scale-110 shadow-sm`}
                    >
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.2]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[13px] sm:text-[14px] font-semibold text-slate-800 group-hover:text-red-600 transition-colors leading-snug">
                        {item.title}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Simple Closing Note & Invitation Box */}
            <div
              className="mt-14 p-8 sm:p-10 rounded-2xl bg-[#031c3f] text-white text-center shadow-lg relative overflow-hidden"
              data-aos="fade-up"
            >
              <div className="relative z-10 max-w-xl mx-auto space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold leading-snug text-white">
                  We invite everyone to join us on our journey towards excellence.
                </h3>
                <div className="pt-2 flex flex-wrap justify-center gap-3.5">
                  <Link
                    href="/admissions"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#dc2626] hover:bg-[#b91c1c] active:scale-95 transition-all shadow-md"
                  >
                    <span>Book a Campus Tour</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white border border-white/30 hover:bg-white/10 transition-colors"
                  >
                    <span>Contact School</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 4. Footer */}
      <Footer />
    </div>
  )
}
