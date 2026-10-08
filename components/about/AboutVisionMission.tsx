'use client'

import React from 'react'
import { Eye, Rocket } from 'lucide-react'

export default function AboutVisionMission() {
  return (
    <section id="vision-mission" className="py-6 sm:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1: OUR VISION */}
          <div className="relative overflow-hidden rounded-3xl bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 min-h-0 sm:min-h-[320px] flex flex-col sm:flex-row justify-between">
            {/* Photo: Top on Mobile, Right Side on Tablet/Desktop */}
            <div className="relative w-full h-48 sm:h-full sm:w-[46%] sm:absolute sm:top-0 sm:right-0 sm:bottom-0 overflow-hidden shrink-0 pointer-events-none">
              <img
                src="/images/vision-student.jpg"
                alt="JRS International School Student Learning"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              {/* Desktop smooth inner edge fade */}
              <div className="hidden sm:block absolute inset-y-0 left-0 w-14 bg-gradient-to-r from-white to-transparent pointer-events-none" />
              {/* Mobile bottom edge fade into card body */}
              <div className="sm:hidden absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            </div>

            {/* Content Area */}
            <div className="relative z-10 w-full sm:w-[58%] p-6 sm:p-9 flex flex-col justify-between flex-1">
              <div>
                {/* Red Eyebrow Tag */}
                <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#e31e24] block">
                  OUR VISION
                </span>

                {/* Main Heading */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#031c3f] leading-snug tracking-tight mt-2 sm:mt-2.5">
                  To be a foremost learning institution in Hyderabad.
                </h3>

                {/* Description Paragraph */}
                <p className="text-slate-700 text-[14px] leading-relaxed mt-2.5 sm:mt-3 pr-0 sm:pr-2">
                  To create a nurturing environment where every student can learn, explore, innovate and lead, becoming confident individuals who contribute positively to society.
                </p>
              </div>

              {/* Bottom Red Circular Action/Badge Icon matching design */}
              <div className="pt-6 sm:pt-8">
                <div className="w-12 h-12 rounded-full bg-[#e31e24] text-white flex items-center justify-center shadow-lg shadow-red-500/30 hover:scale-110 active:scale-95 transition-all duration-200">
                  <Eye className="w-5 h-5 stroke-[2.5]" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: OUR MISSION */}
          <div className="relative overflow-hidden rounded-3xl bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 min-h-0 sm:min-h-[320px] flex flex-col sm:flex-row justify-between">
            {/* Photo: Top on Mobile, Right Side on Tablet/Desktop */}
            <div className="relative w-full h-48 sm:h-full sm:w-[46%] sm:absolute sm:top-0 sm:right-0 sm:bottom-0 overflow-hidden shrink-0 pointer-events-none">
              <img
                src="/images/mission-students.jpg"
                alt="JRS International School Students in Computer Lab"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              {/* Desktop smooth inner edge fade */}
              <div className="hidden sm:block absolute inset-y-0 left-0 w-14 bg-gradient-to-r from-white to-transparent pointer-events-none" />
              {/* Mobile bottom edge fade into card body */}
              <div className="sm:hidden absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            </div>

            {/* Content Area */}
            <div className="relative z-10 w-full sm:w-[58%] p-6 sm:p-9 flex flex-col justify-between flex-1">
              <div>
                {/* Red Eyebrow Tag */}
                <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#e31e24] block">
                  OUR MISSION
                </span>

                {/* Main Heading */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#031c3f] leading-snug tracking-tight mt-2 sm:mt-2.5">
                  Education Beyond the Classroom.
                </h3>

                {/* Description Paragraph */}
                <p className="text-slate-700 text-[14px] leading-relaxed mt-2.5 sm:mt-3 pr-0 sm:pr-2">
                  To provide a balanced education combining academic excellence, human values, creativity, innovation and real-world skills, preparing every child for a brighter future.
                </p>
              </div>

              {/* Bottom Red Circular Action/Badge Icon matching design */}
              <div className="pt-6 sm:pt-8">
                <div className="w-12 h-12 rounded-full bg-[#e31e24] text-white flex items-center justify-center shadow-lg shadow-red-500/30 hover:scale-110 active:scale-95 transition-all duration-200">
                  <Rocket className="w-5 h-5 stroke-[2.5]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
