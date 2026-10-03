'use client'

import React from 'react'
import { ArrowRight, Play } from 'lucide-react'

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#031737] text-white min-h-[460px] sm:min-h-[500px] lg:min-h-[540px] flex items-center">
      {/* Background Campus Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/campus-building.jpg"
          alt="JRS International School Campus"
          className="w-full h-full object-cover object-center sm:object-[center_35%]"
          onError={(e) => {
            // Graceful fallback if file is moved
            const target = e.currentTarget
            target.style.display = 'none'
          }}
        />

        {/* Deep Navy Angled/Curved Gradient Overlay from Left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#031533] via-[#051e46]/95 via-45% md:via-55% to-[#031533]/40 sm:to-transparent" />
        
        {/* Subtle Dark Bottom Gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#031533]/80 via-transparent to-black/20" />
      </div>

      {/* Decorative Red Curved Swoosh in Bottom-Right Corner (as in reference) */}
      <div className="absolute -bottom-8 -right-8 w-60 sm:w-80 h-60 sm:h-80 pointer-events-none z-10 overflow-hidden">
        <svg
          viewBox="0 0 300 300"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 120 300 C 180 260, 260 210, 300 120 L 300 300 Z"
            fill="#e31e24"
            opacity="0.95"
          />
          <path
            d="M 170 300 C 210 270, 270 230, 300 170 L 300 300 Z"
            fill="#ff3b44"
            opacity="0.85"
          />
        </svg>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
        <div className="max-w-2xl" data-aos="fade-right">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-300 mb-4 sm:mb-5">
            <a href="/" className="hover:text-white transition-colors">
              Home
            </a>
            <span className="text-slate-400 font-normal">›</span>
            <span className="text-white font-semibold">About JRS</span>
          </nav>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
            About <span className="text-[#f59e0b]">JRS</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl font-bold text-white/95 mt-2 sm:mt-3 tracking-tight">
            Learning Today. Leading Tomorrow.
          </p>

          {/* Description Paragraph */}
          <p className="text-slate-200 text-xs sm:text-sm sm:leading-relaxed max-w-xl mt-4 sm:mt-5 opacity-90">
            At JRS International School, we are committed to providing quality education with a perfect blend of academic excellence, human values and holistic development, preparing students to face the opportunities of a global world.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mt-7 sm:mt-8">
            {/* Our Story Button */}
            <a
              href="#our-story"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#e31e24] hover:bg-[#c9181e] shadow-lg shadow-red-600/30 transition-all duration-200 active:scale-95"
            >
              <span>Our Story</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </a>

            {/* Explore JRS Button */}
            <a
              href="#vision-mission"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/40 backdrop-blur-sm transition-all duration-200 active:scale-95"
            >
              <span>Explore JRS</span>
              <div className="w-4 h-4 rounded-full border border-white flex items-center justify-center">
                <Play className="w-2 h-2 fill-white ml-0.5" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
