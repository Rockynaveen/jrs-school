'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  X,
  BookOpen,
  CheckCircle,
  Users,
  Sparkles,
} from 'lucide-react'
import SchoolImage from './SchoolImage'

// Line-art teddy bear icon matching the target mockup for Pre-Primary
const TeddyBearIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Ears */}
    <circle cx="6.5" cy="6.5" r="2.3" />
    <circle cx="17.5" cy="6.5" r="2.3" />
    {/* Head */}
    <circle cx="12" cy="10" r="4.3" />
    {/* Eyes */}
    <circle cx="10.2" cy="9.2" r="0.6" fill="currentColor" stroke="none" />
    <circle cx="13.8" cy="9.2" r="0.6" fill="currentColor" stroke="none" />
    {/* Nose / Smile */}
    <path d="M11 11.2c.6.4 1.4.4 2 0" />
    {/* Body */}
    <path d="M8.5 14.5 C7.5 16, 7.5 19, 8 20 C10 20.8, 14 20.8, 16 20 C16.5 19, 16.5 16, 15.5 14.5" />
    {/* Small Heart on Chest */}
    <path
      d="M12 15.8 c-.4-.5-1-.6-1.4-.2-.4.4-.3 1 .1 1.4 L12 18.2 l1.3-1.2 c.4-.4.5-1 .1-1.4-.4-.4-1-.3-1.4.2z"
      fill="currentColor"
      stroke="none"
    />
    {/* Paws */}
    <circle cx="7" cy="18" r="1.5" />
    <circle cx="17" cy="18" r="1.5" />
  </svg>
)

export default function AcademicsSection() {
  const [activeCurriculum, setActiveCurriculum] = useState<number | null>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveCurriculum(null)
    }

    if (activeCurriculum !== null) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeCurriculum])

  const stages = [
    {
      title: 'Pre-Primary',
      number: '01',
      subtitle: 'NURSERY, LKG & UKG',
      badge: 'Early Years',
      description:
        'Play, explore, and discover. Building curious and confident young learners through hands-on sensorial activities, foundational phonics, and joyful discovery.',
      image: '/images/pre-primary-learning.jpg',
      alt: 'Pre-Primary student engaged in learning activity',
      imagePosition: 'object-[center_15%]',
      icon: TeddyBearIcon,
      numColor: 'text-[#fce4e6]',
      waveColor: 'text-[#e31e24]',
      iconBg: 'bg-[#e31e24]',
      iconShadow: 'shadow-[0_8px_20px_-3px_rgba(227,30,36,0.45)]',
      pillBg: 'bg-[#feecee]',
      pillText: 'text-[#e31e24]',
      pillHover: 'hover:bg-[#fddde0]',
      curriculumHighlights: [
        'Phonics-based English language and communication skills',
        'Montessori-inspired sensorial and tactile activities',
        'Early numeracy, number sense and playful logical thinking',
        'Gross and fine motor skill development through play',
        'Art, rhymes, music, and interactive storytelling',
      ],
    },
    {
      title: 'Primary School',
      number: '02',
      subtitle: 'CLASSES I TO V • CBSE / NCERT',
      badge: 'Primary Wing',
      description:
        'Building strong scholastic foundations through hands-on inquiry, experiential STEM learning, bilingual communication, and well-rounded character development.',
      image: '/images/primary-school-study.jpg',
      alt: 'Primary school student studying in classroom',
      imagePosition: 'object-[center_12%]',
      icon: BookOpen,
      numColor: 'text-[#fce4e6]',
      waveColor: 'text-[#e31e24]',
      iconBg: 'bg-[#e31e24]',
      iconShadow: 'shadow-[0_8px_20px_-3px_rgba(227,30,36,0.45)]',
      pillBg: 'bg-[#feecee]',
      pillText: 'text-[#e31e24]',
      pillHover: 'hover:bg-[#fddde0]',
      curriculumHighlights: [
        'Integrated CBSE-aligned NCERT syllabus framework',
        'Experiential STEM learning and scientific experiments',
        'Bilingual communication, reading, and creative writing',
        'Computer literacy, introductory coding, and digital tools',
        'Physical education, yoga, sports, and performing arts',
      ],
    },
    {
      title: 'Middle School',
      number: '03',
      subtitle: 'CLASSES VI TO VIII • CBSE & IIT/NIT',
      badge: 'Middle Wing',
      description:
        'Encouraging independent analytical thinking, teamwork, advanced science laboratory inquiry, and specialized competitive exam readiness.',
      image: '/images/middle-school-students.jpg',
      alt: 'Middle school students collaborating over books',
      imagePosition: 'object-[center_15%]',
      icon: Users,
      numColor: 'text-[#fce4e6]',
      waveColor: 'text-[#e31e24]',
      iconBg: 'bg-[#e31e24]',
      iconShadow: 'shadow-[0_8px_20px_-3px_rgba(227,30,36,0.45)]',
      pillBg: 'bg-[#feecee]',
      pillText: 'text-[#e31e24]',
      pillHover: 'hover:bg-[#fddde0]',
      curriculumHighlights: [
        'Rigorous CBSE syllabus emphasizing core conceptual depth',
        'Specialized IIT/NIT and Olympiad foundation preparation',
        'Practical experiments in modern Science and Computer labs',
        'Critical thinking, debating, and collaborative projects',
        'Leadership mentoring, ethical values, and co-curricular pursuits',
      ],
    },
  ]

  const currentModal = activeCurriculum !== null ? stages[activeCurriculum] : null

  return (
    <section id="academics" className="py-10 bg-[#031c3f] relative overflow-hidden scroll-mt-16">
      {/* Decorative Ambient Background Glow on Left */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#0a2f64]/60 blur-3xl pointer-events-none" />

      {/* Decorative Dot Grid on Top Right */}
      <div className="absolute top-6 right-6 w-36 h-36 opacity-20 pointer-events-none hidden md:block">
        <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="academicDotsPattern" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#60a5fa" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#academicDotsPattern)" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12" data-aos="fade-up">
          {/* Eyebrow: — ACADEMIC PROGRAMMES — */}
          <div className="flex items-center justify-center gap-3 mb-2.5">
            <span className="w-8 h-[2px] bg-[#e31e24]" />
            <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#e31e24]">
              ACADEMIC PROGRAMMES
            </span>
            <span className="w-8 h-[2px] bg-[#e31e24]" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight">
            Shaping <span className="text-[#e31e24]">Inquiring Minds</span> at Every Stage
          </h2>
        </div>

        {/* 3 Horizontal Split Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-7 items-stretch">
          {stages.map((stage, index) => {
            const Icon = stage.icon
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white rounded-[26px] sm:rounded-[28px] overflow-hidden shadow-xl flex flex-col sm:flex-row relative group hover:-translate-y-1 transition-all duration-300 min-h-[330px] sm:min-h-[355px] lg:min-h-[370px]"
              >
                {/* Photo Container: ~39% Width with Rounded Bottom-Right Seam Corner */}
                <div className="relative w-full sm:w-[39%] h-60 sm:h-full shrink-0 overflow-hidden bg-slate-100 rounded-br-[36px] sm:rounded-br-[42px]">
                  <SchoolImage
                    src={stage.image}
                    alt={stage.alt}
                    className={`w-full h-full object-cover ${stage.imagePosition} group-hover:scale-105 transition-transform duration-500`}
                    fallbackText={stage.title}
                    fallbackBg="from-slate-100 via-slate-200 to-slate-100"
                  />

                  {/* Organic Colored Wedge in Bottom-Left Corner */}
                  <div className="absolute bottom-0 left-0 pointer-events-none leading-none z-10 w-36 sm:w-40 h-32 sm:h-36">
                    <svg
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-full h-full block ${stage.waveColor}`}
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M 0,38 C 5,55 14,75 42,94 C 50,98 56,100 62,100 L 0,100 Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>

                {/* Floating Circle Badge Centered on the Seam (No White Border) */}
                <div className="absolute top-5 sm:top-6 left-[39%] -translate-x-1/2 z-20 hidden sm:flex">
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full ${stage.iconBg} text-white flex items-center justify-center ${stage.iconShadow} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className="w-5 h-5 stroke-[2.1]" />
                  </div>
                </div>

                {/* Mobile Floating Circle Badge */}
                <div className="relative -mt-6 ml-5 z-20 sm:hidden">
                  <div
                    className={`w-11 h-11 rounded-full ${stage.iconBg} text-white flex items-center justify-center ${stage.iconShadow}`}
                  >
                    <Icon className="w-5 h-5 stroke-[2.1]" />
                  </div>
                </div>

                {/* Card Content Area: ~61% Width */}
                <div className="p-5 sm:p-6 lg:p-6 flex flex-col justify-between flex-1 relative bg-white overflow-hidden w-full sm:w-[61%]">
                  {/* Giant Watermark Stage Number in Top-Right Corner */}
                  <span
                    className={`absolute top-2 right-3.5 sm:right-4 font-black text-5xl sm:text-[68px] ${stage.numColor} select-none pointer-events-none tracking-tight leading-none z-0`}
                  >
                    {stage.number}
                  </span>

                  <div className="relative z-10 pt-1 sm:pt-0">
                    {/* Subtitle / Syllabus */}
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#e31e24] mb-1.5 block max-w-[62%] leading-tight">
                      {stage.subtitle}
                    </span>

                    {/* Stage Title */}
                    <h3 className="text-lg sm:text-[21px] font-extrabold text-[#031c3f] tracking-tight mb-2.5 group-hover:text-[#e31e24] transition-colors leading-tight">
                      {stage.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[14px] text-slate-600 leading-relaxed mb-5">
                      {stage.description}
                    </p>
                  </div>

                  {/* Bottom Action: Keep only View Curriculum button */}
                  <div className="pt-2 mt-auto relative z-10 flex items-center">
                    <button
                      type="button"
                      onClick={() => setActiveCurriculum(index)}
                      className={`inline-flex items-center px-4.5 py-2 rounded-full text-xs font-bold ${stage.pillBg} ${stage.pillText} ${stage.pillHover} hover:opacity-90 transition-all cursor-pointer shadow-2xs`}
                    >
                      View Curriculum
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Curriculum Details Modal */}
      {currentModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setActiveCurriculum(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-100 relative animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-[#031c3f] p-6 text-white relative">
              <button
                type="button"
                onClick={() => setActiveCurriculum(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/15 text-amber-300 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{currentModal.badge}</span>
              </div>
              <h3 className="text-2xl font-bold">{currentModal.title}</h3>
              <p className="text-xs text-white/80 mt-1 font-medium">{currentModal.subtitle}</p>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4 text-[#031c3f] font-bold text-sm">
                <BookOpen className="w-4 h-4 text-[#e31e24]" />
                <span>Curriculum & Learning Highlights</span>
              </div>

              <ul className="space-y-3 mb-6">
                {currentModal.curriculumHighlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-3">
                <Link
                  href="/admissions"
                  onClick={() => setActiveCurriculum(null)}
                  className="flex-1 py-2.5 px-4 rounded-xl text-center text-xs sm:text-sm font-semibold text-white bg-[#e31e24] hover:bg-red-700 transition-colors"
                >
                  Apply for Admission
                </Link>
                <button
                  type="button"
                  onClick={() => setActiveCurriculum(null)}
                  className="py-2.5 px-5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
