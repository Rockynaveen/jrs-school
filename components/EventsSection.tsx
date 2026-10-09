'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import SchoolImage from './SchoolImage'

const events = [
  {
    day: '26',
    month: 'JAN',
    title: 'Republic Day Celebrations',
    description: 'Students showcased patriotic fervor in traditional costumes, march past and cultural performances.',
    image: '/images/events/republic-day.jpg',
    objectPosition: 'object-[center_35%]',
  },
  {
    day: '11',
    month: 'FEB',
    title: 'Annual Day Celebrations',
    description: 'A spectacular evening of music, dance, theatrical drama, and honoring student excellence.',
    image: '/images/events/annual-day.jpg',
    objectPosition: 'object-[center_40%]',
  },
  {
    day: '28',
    month: 'AUG',
    title: 'Sports Day',
    description: 'Showcasing athleticism, team spirit, athletic track events, and enthusiastic sportsmanship.',
    image: '/images/events/sports-day.jpg',
    objectPosition: 'object-[center_65%]',
  },
]

export default function EventsSection() {
  const [activeEvent, setActiveEvent] = useState(0)

  return (
    <section id="events" className="py-10 bg-[#edf5fd] border-y border-[#dbeafe]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-4 space-y-5">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-[2px] bg-[#e31e24]" />
                <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-wider text-[#e31e24]">
                  LATEST EVENTS
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#031c3f] mt-1 leading-tight tracking-tight">
                What's Happening <br className="hidden sm:block" />
                at <span className="text-[#e31e24]">JRS</span>
              </h2>
            </div>

            <p className="text-[14px] text-slate-700 leading-relaxed">
              Explore our recent events, celebrations and achievements that make JRS a vibrant place to learn and grow.
            </p>

            <div>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#e31e24] hover:bg-red-700 active:scale-95 shadow-md shadow-red-600/20 transition-all duration-200 cursor-pointer"
              >
                <span>View All Events</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Event Cards Grid in Cyient-inspired Design */}
          <div className="lg:col-span-8">
            {/* Stable min-height grid prevents entire section container from jumping/blinking */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5 items-end sm:min-h-[345px]">
              {events.map((event, index) => {
                const isActive = activeEvent === index

                return (
                  /* Outer stable slot wrapper prevents hover boundary thrashing */
                  <div
                    key={index}
                    onMouseEnter={() => setActiveEvent(index)}
                    onClick={() => setActiveEvent(index)}
                    className="h-full flex flex-col justify-end cursor-pointer"
                  >
                    <div
                      className={`transition-colors duration-300 rounded-[22px] sm:rounded-[24px] overflow-hidden p-3.5 border-2 ${
                        isActive
                          ? 'bg-gradient-to-b from-[#feecee] via-[#fff5f6] to-white border-[#e31e24] shadow-xl shadow-red-500/10'
                          : 'bg-gradient-to-br from-[#e0effa] via-[#ebf4fd] to-[#d6eafc] border-[#bad6f5] hover:border-[#031c3f]/40 shadow-sm'
                      }`}
                    >
                      {/* Photo Container: Smooth collapsible transition without DOM unmounting */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isActive
                            ? 'max-h-56 opacity-100 mb-3'
                            : 'max-h-0 opacity-0 mb-0 pointer-events-none'
                        }`}
                      >
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[16px] bg-slate-100 shadow-xs">
                          <SchoolImage
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover"
                            fallbackText={event.title}
                            fallbackBg="from-slate-100 via-rose-50 to-slate-200"
                          />

                          {/* Date Badge over image */}
                          <div className="absolute bottom-2 left-2 bg-white/95 backdrop-blur-xs rounded-lg py-1 px-2.5 shadow-sm border border-slate-100 flex items-center gap-1.5">
                            <span className="text-xs font-black text-[#e31e24] leading-none">
                              {event.day}
                            </span>
                            <span className="text-[10px] font-extrabold text-[#031c3f] tracking-wider uppercase leading-none">
                              {event.month}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Inactive Date Pill */}
                      <div
                        className={`transition-opacity duration-200 ${
                          isActive ? 'hidden' : 'flex items-center justify-between mb-2'
                        }`}
                      >
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-white/85 text-[#031c3f] border border-blue-200/60 uppercase tracking-wider">
                          <Calendar className="w-3 h-3 text-[#e31e24]" />
                          <span>{event.day} {event.month}</span>
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#031c3f]/30" />
                      </div>

                      {/* Card Title (Always visible with stable layout) */}
                      <h3
                        className={`text-[15px] sm:text-[16px] font-extrabold leading-snug transition-colors ${
                          isActive ? 'text-[#031c3f]' : 'text-[#031c3f]'
                        }`}
                      >
                        {event.title}
                      </h3>

                      {/* Active Description & Action link */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isActive
                            ? 'max-h-36 opacity-100 mt-1.5'
                            : 'max-h-0 opacity-0 mt-0 pointer-events-none'
                        }`}
                      >
                        <p className="text-[13px] text-slate-600 leading-relaxed line-clamp-2 mb-3">
                          {event.description}
                        </p>

                        <Link
                          href="/gallery"
                          className="pt-2 border-t border-red-100/90 flex items-center justify-between text-xs font-bold text-[#e31e24] hover:text-red-700 transition-colors group/link cursor-pointer"
                        >
                          <span>Explore event</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </div>

                      {/* Inactive Prompt */}
                      <div
                        className={`mt-2 transition-opacity duration-200 ${
                          isActive ? 'hidden' : 'flex items-center gap-1 text-[11px] font-semibold text-[#031c3f]/70'
                        }`}
                      >
                        <span>Preview</span>
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
