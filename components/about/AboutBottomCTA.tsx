'use client'

import React from 'react'
import { ArrowRight, Play } from 'lucide-react'

export default function AboutBottomCTA() {
  return (
    <section className="relative overflow-hidden bg-[#031533] text-white">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#031533] via-[#051f49] to-[#041635]" />

      {/* Decorative Red Curved Swoosh in Bottom-Right Corner (matching design) */}
      <div className="absolute -bottom-8 -right-8 w-64 sm:w-80 h-64 sm:h-80 pointer-events-none z-20 overflow-hidden">
        <svg
          viewBox="0 0 300 300"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 100 300 C 170 270, 260 220, 300 110 L 300 300 Z"
            fill="#e31e24"
            opacity="0.95"
          />
          <path
            d="M 160 300 C 210 275, 275 235, 300 160 L 300 300 Z"
            fill="#ff3b44"
            opacity="0.85"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[380px] sm:min-h-[420px] py-12 lg:py-0">
          {/* Left Column: CTA Content */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 lg:py-16">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-[1.15]">
              Give Your Child a Strong <br />
              Foundation <span className="text-[#f59e0b]">for Tomorrow</span>
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl opacity-90">
              Join JRS International School and be a part of a nurturing environment that shapes confident, responsible and future-ready individuals.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-3">
              {/* Enquire for Admission */}
              <a
                href="#enquire"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#e31e24] hover:bg-[#c9181e] shadow-lg shadow-red-600/30 transition-all duration-200 active:scale-95"
              >
                <span>Enquire for Admission</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              {/* Take a Campus Tour */}
              <a
                href="#tour"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/40 backdrop-blur-sm transition-all duration-200 active:scale-95"
              >
                <span>Take a Campus Tour</span>
                <div className="w-4 h-4 rounded-full border border-white flex items-center justify-center">
                  <Play className="w-2 h-2 fill-white ml-0.5" />
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Students in Science Lab Photo */}
          <div className="lg:col-span-5 relative self-stretch flex items-end justify-center lg:justify-end overflow-hidden">
            <div className="relative w-full h-[280px] sm:h-[340px] lg:h-full min-h-[300px] lg:min-h-[380px] flex items-end">
              <img
                src="/images/science.jpg"
                alt="JRS International School Students in Science Lab"
                className="w-full h-full object-cover object-center lg:object-[center_20%] transform hover:scale-105 transition-transform duration-500"
              />

              {/* Seamless Gradient Fade on the Left of the Image to blend into Navy */}
              <div className="absolute inset-y-0 left-0 w-28 sm:w-44 bg-gradient-to-r from-[#031533] via-[#031533]/80 to-transparent pointer-events-none" />
              {/* Soft Gradient Fade at the Bottom */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#031533]/80 to-transparent pointer-events-none" />
              {/* Soft Gradient at the Top for mobile */}
              <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#031533]/40 to-transparent lg:hidden pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
