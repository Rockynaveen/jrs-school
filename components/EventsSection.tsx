'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'
import SchoolImage from './SchoolImage'

const events = [
  {
    day: '26',
    month: 'JAN',
    title: 'Republic Day Celebrations',
    description: 'Students showcased patriotic fervor in traditional costumes and cultural performances.',
    image: '/images/events/republic-day.jpg',
    objectPosition: 'object-[center_35%]',
  },
  {
    day: '11',
    month: 'FEB',
    title: 'Annual Day Celebrations',
    description: 'A spectacular evening of dance, drama, and celebrating student excellence.',
    image: '/images/events/annual-day.jpg',
    objectPosition: 'object-[center_40%]',
  },
  {
    day: '28',
    month: 'AUG',
    title: 'Sports Day',
    description: 'Showcasing athleticism, teamwork, track events, and vibrant sportsmanship.',
    image: '/images/events/sports-day.jpg',
    objectPosition: 'object-[center_65%]',
  },
]

export default function EventsSection() {
  return (
    <section id="events" className="py-10 bg-[#edf5fd] border-y border-[#dbeafe]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-4 space-y-5">
            <div>
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#dc2626]">
                LATEST EVENTS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1931] mt-2 leading-tight">
                What's Happening <br className="hidden sm:block" />
                at JRS
              </h2>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              Explore our recent events, celebrations and achievements that make JRS a vibrant place to learn and grow.
            </p>

            <div>
              <a
                href="#events"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#dc2626] hover:bg-[#b91c1c] active:scale-95 shadow-md shadow-red-600/20 transition-all duration-200"
              >
                <span>View All Events</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: 3 Event Cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group"
                >
                  {/* Image with date badge */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <SchoolImage
                      src={event.image}
                      alt={event.title}
                      className={`w-full h-full object-cover ${event.objectPosition || 'object-center'} group-hover:scale-105 transition-transform duration-500`}
                      fallbackText={event.image}
                      fallbackBg="from-slate-100 via-amber-50 to-slate-200"
                    />

                    {/* Date Badge */}
                    <div className="absolute bottom-2.5 left-2.5 bg-white rounded-xl py-1 px-2.5 shadow-md text-center border border-slate-100">
                      <span className="block text-sm font-extrabold text-slate-900 leading-none">
                        {event.day}
                      </span>
                      <span className="block text-[9px] font-bold text-slate-500 tracking-wider uppercase leading-tight mt-0.5">
                        {event.month}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-red-600 transition-colors leading-snug">
                      {event.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1.5 leading-relaxed line-clamp-2">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
