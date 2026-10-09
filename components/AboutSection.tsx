'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SchoolImage from './SchoolImage'

export default function AboutSection() {
  const pillars = [
    {
      title: 'Global Perspective',
      icon: (
        <svg
          className="w-8 h-8 text-[#e31e24]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
    {
      title: 'Indian Ethos',
      icon: (
        <svg
          className="w-8 h-8 text-[#e31e24]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2c-.6 2-2 3.5-2 5.5 0 1.4 1 2.5 2 2.5s2-1.1 2-2.5C14 5.5 12.6 4 12 2z" />
          <path d="M5 13c0 3.3 3.1 6 7 6s7-2.7 7-6c0-.6-.4-1-1-1H6c-.6 0-1 .4-1 1z" />
          <path d="M8 20h8v1.5c0 .3-.2.5-.5.5h-7a.5.5 0 0 1-.5-.5V20z" opacity="0.8" />
        </svg>
      ),
    },
    {
      title: 'Innovative Teaching',
      icon: (
        <svg
          className="w-8 h-8 text-[#d92662]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18h6" />
          <path d="M10 22h4" />
          <path d="M12 2a7 7 0 0 0-7 7c0 2.4 1.2 4.5 3 5.7V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.3c1.8-1.2 3-3.3 3-5.7a7 7 0 0 0-7-7z" />
          <line x1="12" y1="6" x2="12" y2="10" />
        </svg>
      ),
    },
    {
      title: 'Student-Centric Approach',
      icon: (
        <svg
          className="w-8 h-8 text-[#8b2fa8]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="7" r="4" />
          <path d="M5.5 21v-2a4 4 0 0 1 4-4h5a4 4 0 0 1 4 4v2" />
          <circle cx="19" cy="9" r="2.5" />
          <path d="M22 21v-1.5a3 3 0 0 0-2.5-3" />
          <circle cx="5" cy="9" r="2.5" />
          <path d="M2 21v-1.5a3 3 0 0 1 2.5-3" />
        </svg>
      ),
    },
  ]

  return (
    <section id="about" className="py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Stylized Image Frame with Exact Red Organic Shapes */}
          <div
            className="lg:col-span-6 relative flex items-center justify-center"
            data-aos="fade-right"
          >
            {/* SVG Filter / Clip Definitions */}
            <svg width="0" height="0" className="absolute">
              <defs>
                <clipPath id="aboutPhotoClip" clipPathUnits="objectBoundingBox">
                  <path d="M 0 0 
                           L 0.84 0 
                           C 0.89 0, 0.925 0.05, 0.925 0.14 
                           L 0.925 0.52 
                           C 0.925 0.58, 0.90 0.66, 0.865 0.74 
                           L 0.76 1 
                           L 0 1 
                           Z" />
                </clipPath>
              </defs>
            </svg>

            {/* Container for photo + red vector accents */}
            <div className="relative w-full max-w-[540px] aspect-[4/3] sm:aspect-[1.36/1]">
              {/* The Photo Container clipped to the exact contour */}
              <div
                className="absolute inset-0 z-0 bg-slate-100 overflow-hidden"
                style={{ clipPath: 'url(#aboutPhotoClip)' }}
              >
                <SchoolImage
                  src="/images/about-students.jpg"
                  alt="JRS International School Students"
                  className="w-full h-full object-cover object-top sm:object-[center_20%] group-hover:scale-105 transition-transform duration-500"
                  fallbackText="/images/about-students.jpg"
                  fallbackBg="from-red-50 via-slate-100 to-blue-50"
                />
              </div>

              {/* Exact Red Vector Accents Layered Over/Beside the Photo */}
              <svg
                viewBox="0 0 520 380"
                className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Bottom-right rich red gradient */}
                  <linearGradient id="aboutRedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#eb262d" />
                    <stop offset="100%" stopColor="#c71017" />
                  </linearGradient>

                  {/* Top-left outer darker facet */}
                  <linearGradient id="topRedDarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#b91c1c" />
                    <stop offset="100%" stopColor="#991b1b" />
                  </linearGradient>

                  {/* Top-left inner bright red sweep */}
                  <linearGradient id="topRedBrightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ef343a" />
                    <stop offset="100%" stopColor="#dc2626" />
                  </linearGradient>
                </defs>

                {/* 1. Top-Left Red Facet & Swoop (matching the reference fold) */}
                <g>
                  {/* Darker base wedge */}
                  <path d="M 0 0 L 120 0 L 0 170 Z" fill="url(#topRedDarkGrad)" />
                  {/* Brighter foreground curved fold */}
                  <path d="M 0 0 L 88 0 C 65 42, 28 88, 0 145 Z" fill="url(#topRedBrightGrad)" />
                </g>

                {/* 2. Bottom-Right Organic Red Swoop with Protruding Convex Lobe (Refined & reduced) */}
                <path
                  d="M 481 198 
                     C 492 205, 502 218, 502 234 
                     C 502 250, 488 273, 468 304 
                     L 426 380 
                     L 395 380 
                     L 450 281 
                     C 468 248, 481 220, 481 198 
                     Z"
                  fill="url(#aboutRedGrad)"
                />
              </svg>
            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-6 space-y-6" data-aos="fade-left">
            {/* Tagline */}
            <div>
              <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#e31e24]">
                ABOUT JRS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#031c3f] mt-2 tracking-tight leading-[1.2]">
                A Legacy of Excellence <br className="hidden sm:inline" /> in Education
              </h2>
            </div>

            {/* Description Paragraph */}
            <p className="text-slate-600 text-[15px] sm:text-base leading-relaxed max-w-xl">
              JRS International School, Uppal, Hyderabad is committed to providing quality education with a perfect blend of academics, values and co-curricular activities. We focus on developing confident, responsible and compassionate individuals who are prepared for a constantly evolving world.
            </p>

            {/* 4 Pillars Grid (Direct colored icons, no bulky circles) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-2 pb-2">
              {pillars.map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="flex flex-col items-center text-center group cursor-default"
                >
                  <div className="w-10 h-10 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform duration-200">
                    {item.icon}
                  </div>
                  <span className="text-xs sm:text-[13px] font-semibold text-slate-700 leading-snug">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-semibold text-white bg-[#e31e24] hover:bg-[#c9181e] active:scale-95 shadow-lg shadow-red-600/25 transition-all duration-200"
              >
                <span>Know More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

