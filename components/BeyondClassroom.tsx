'use client'

import React from 'react'
import {
  Trophy,
  Music,
  Flame,
  Shield,
  FlaskConical,
  Wind,
} from 'lucide-react'
import SchoolImage from './SchoolImage'

const activities = [
  {
    title: 'Sports',
    icon: Trophy,
    color: 'bg-[#15803d]', // Forest Green
    image: '/images/beyond/sports.jpg',
    objectPosition: 'object-[center_65%]',
  },
  {
    title: 'Music',
    icon: Music,
    color: 'bg-[#0284c7]', // Cyan / Ocean Blue
    image: '/images/beyond/music.jpg',
    objectPosition: 'object-[center_20%]',
  },
  {
    title: 'Dance',
    icon: Flame,
    color: 'bg-[#db2777]', // Magenta / Pink
    image: '/images/beyond/dance.jpg',
    objectPosition: 'object-[center_55%]',
  },
  {
    title: 'Karate',
    icon: Shield,
    color: 'bg-[#d97706]', // Amber / Gold
    image: '/images/beyond/karate.jpg',
    objectPosition: 'object-[center_35%]',
  },
  {
    title: 'Science & Activities',
    icon: FlaskConical,
    color: 'bg-[#2563eb]', // Royal Blue
    image: '/images/beyond/science.jpg',
    objectPosition: 'object-[center_35%]',
  },
  {
    title: 'Skating',
    icon: Wind,
    color: 'bg-[#0891b2]', // Cyan / Teal
    image: '/images/beyond/skating.jpg',
    objectPosition: 'object-[center_45%]',
  },
]

export default function BeyondClassroom() {
  return (
    <section id="beyond" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="mb-8" data-aos="fade-up">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#dc2626]">
            BEYOND CLASSROOM
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1931] mt-2 tracking-tight">
            A Platform for Every Talent
          </h2>
        </div>

        {/* 6 Cards Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {activities.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col bg-slate-100"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <SchoolImage
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-full object-cover ${item.objectPosition} group-hover:scale-105 transition-transform duration-500`}
                    fallbackText={item.image}
                    fallbackBg="from-slate-100 to-slate-200"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                </div>

                {/* Colored Label Bar */}
                <div
                  className={`${item.color} text-white py-2.5 sm:py-3 px-1.5 sm:px-2.5 flex items-center justify-center gap-1.5 sm:gap-2 font-bold shadow-md transition-all duration-300 min-h-[48px] sm:min-h-[52px]`}
                >
                  <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 flex-shrink-0" />
                  <span className="leading-tight text-center whitespace-normal sm:whitespace-nowrap text-[11px] sm:text-xs md:text-[13px] xl:text-sm">
                    {item.title}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
