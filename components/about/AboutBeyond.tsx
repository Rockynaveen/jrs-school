'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'
import SchoolImage from '../SchoolImage'

export default function AboutBeyond() {
  const topActivities = [
    {
      title: 'Art & Painting',
      src: '/images/primary-school-study.jpg',
      fallback: '/images/primary-school-study.jpg',
    },
    {
      title: 'Music',
      src: '/images/beyond/music.jpg',
      fallback: '/images/music.jpg',
    },
    {
      title: 'Dance',
      src: '/images/beyond/dance.jpg',
      fallback: '/images/dance.jpg',
    },
    {
      title: 'Dramatics',
      src: '/images/beyond/drama.jpg',
      fallback: '/images/annual-day.jpg',
    },
    {
      title: 'Yoga',
      src: '/images/beyond/yoga.jpg',
      fallback: '/images/karate.jpg',
    },
    {
      title: 'Skating',
      src: '/images/beyond/skating.jpg',
      fallback: '/images/skating.jpg',
    },
  ]

  const bottomActivities = [
    {
      title: 'Games & Sports',
      src: '/images/beyond/sports.jpg',
      fallback: '/images/sports.jpg',
    },
    {
      title: 'Project Work',
      src: '/images/beyond/project-work.jpg',
      fallback: '/images/science-lab.jpg',
    },
    {
      title: 'Excursions & Trips',
      src: '/images/beyond/excursions.jpg',
      fallback: '/images/transport.jpg',
    },
    {
      title: 'Clubs & Activities',
      src: '/images/beyond/clubs.jpg',
      fallback: '/images/library.jpg',
    },
  ]

  return (
    <section id="beyond-classroom" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title and Explore Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div className="max-w-2xl">
            <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#e31e24]">
              EDUCATION BEYOND THE CLASSROOM
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#031c3f] mt-2 tracking-tight">
              Learn. Explore. Create. Grow.
            </h2>
            <p className="text-slate-600 text-xs sm:text-[14px] leading-relaxed mt-3">
              We encourage students to explore their interests and develop their talents through a wide range of co-curricular activities, helping them grow into confident and well-rounded individuals.
            </p>
          </div>

          <div className="flex-shrink-0">
            <a
              href="#activities"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-[#e31e24] border-2 border-[#e31e24] hover:bg-[#e31e24] hover:text-white transition-all duration-200 active:scale-95"
            >
              <span>Explore Activities</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Top 6 Activities Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {topActivities.map((act, index) => (
            <div key={index} className="group cursor-default">
              <div className="overflow-hidden rounded-xl bg-slate-100 aspect-[4/3] relative shadow-xs">
                <SchoolImage
                  src={act.src}
                  alt={act.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  fallbackText={act.src}
                />
              </div>
              <h4 className="text-xs sm:text-[13px] font-bold text-[#031c3f] mt-2 text-center sm:text-left">
                {act.title}
              </h4>
            </div>
          ))}
        </div>

        {/* Bottom 4 Activities Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-5 sm:mt-6">
          {bottomActivities.map((act, index) => (
            <div key={index} className="group cursor-default">
              <div className="overflow-hidden rounded-xl bg-slate-100 aspect-[16/10] relative shadow-xs">
                <SchoolImage
                  src={act.src}
                  alt={act.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  fallbackText={act.src}
                />
              </div>
              <h4 className="text-xs sm:text-[13px] font-bold text-[#031c3f] mt-2 text-center sm:text-left">
                {act.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
