'use client'

import React from 'react'
import SchoolImage from './SchoolImage'

const facilities = [
  {
    title: 'Smart Classrooms',
    subtitle: 'Modern and interactive learning spaces',
    image: '/images/facilities/smart-classroom.jpg',
  },
  {
    title: 'Science & Computer Labs',
    subtitle: 'Well-equipped labs',
    image: '/images/facilities/science-lab.jpg',
  },
  {
    title: 'Library',
    subtitle: 'A world of knowledge',
    image: '/images/facilities/library.jpg',
  },
  {
    title: 'Sports Facilities',
    subtitle: 'Indoor & outdoor sports',
    image: '/images/facilities/sports.jpg',
  },
  {
    title: 'Transport',
    subtitle: 'Safe and secure transport',
    image: '/images/facilities/transport.jpg',
  },
]

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="py-10 bg-[#edf5fd] border-y border-[#dbeafe]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="mb-8" data-aos="fade-up">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#dc2626]">
            OUR FACILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1931] mt-2 tracking-tight">
            World-Class Infrastructure
          </h2>
        </div>

        {/* 5 Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {facilities.map((facility, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100 flex flex-col text-left"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <SchoolImage
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  fallbackText={facility.image}
                  fallbackBg="from-slate-100 via-blue-50 to-slate-200"
                />
              </div>

              {/* Text info */}
              <div className="p-4 flex-1 flex flex-col justify-center">
                <h3 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-red-600 transition-colors">
                  {facility.title}
                </h3>
                <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                  {facility.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
