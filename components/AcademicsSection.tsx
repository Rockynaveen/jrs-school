'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  X,
  BookOpen,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from 'lucide-react'
import SchoolImage from './SchoolImage'

export default function AcademicsSection() {
  const [activeCurriculum, setActiveCurriculum] = useState<number | null>(null)

  // Lock scroll when modal is open
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
      stageTag: 'STAGE 01 • EARLY YEARS',
      subtitle: 'NURSERY, LKG & UKG',
      badge: 'Early Years',
      description:
        'Feel grounded and supported in an environment where early learners are encouraged to participate, share ideas, explore phonics, and build confidence through play.',
      image: '/images/pre-primary-learning.jpg',
      alt: 'Pre-Primary student engaged in learning activity',
      imagePosition: 'object-[center_15%]',
      curriculumHighlights: [
        'Phonics-based English language & early communication',
        'Montessori-inspired sensorial and tactile activities',
        'Early numeracy, number sense and playful logical thinking',
        'Gross and fine motor skill development through play',
        'Art, rhymes, music, and interactive storytelling',
      ],
    },
    {
      title: 'Primary School',
      stageTag: 'STAGE 02 • PRIMARY WING',
      subtitle: 'CLASSES I TO V • CBSE / NCERT',
      badge: 'Primary Wing',
      description:
        'Building strong scholastic foundations through hands-on inquiry, experiential STEM learning, bilingual communication, and well-rounded character development.',
      image: '/images/primary-school-study.jpg',
      alt: 'Primary school student studying in classroom',
      imagePosition: 'object-[center_12%]',
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
      stageTag: 'STAGE 03 • MIDDLE WING',
      subtitle: 'CLASSES VI TO VIII • CBSE & IIT/NIT FOUNDATION',
      badge: 'Middle Wing',
      description:
        'Encouraging independent analytical thinking, teamwork, advanced science laboratory inquiry, and specialized competitive exam readiness.',
      image: '/images/middle-school-students.jpg',
      alt: 'Middle school students collaborating over books',
      imagePosition: 'object-[center_15%]',
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
    <section id="academics" className="py-16 sm:py-20 lg:py-24 bg-[#030f26] relative scroll-mt-16 text-white">
      {/* Subtle Ambient Background Lighting */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#e31e24]" />
            <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#e31e24]">
              ACADEMIC PROGRAMMES
            </span>
            <span className="w-8 h-[2px] bg-[#e31e24]" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight whitespace-nowrap">
            Shaping <span className="text-[#e31e24]">Inquiring Minds</span> at Every Stage
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
            Our progressive CBSE curriculum combines academic rigor, experiential STEM learning, and holistic character development from early years to middle school graduation.
          </p>
        </div>

        {/* Academic Stacking Stage Cards */}
        <div className="space-y-10 lg:space-y-16 pb-12">
          {stages.map((stage, index) => (
            <div
              key={index}
              className="sticky flex flex-col lg:flex-row items-stretch rounded-3xl lg:rounded-[32px] overflow-hidden shadow-2xl border border-white/15 bg-white text-slate-900 group transition-all duration-300"
              style={{
                top: `${96 + index * 28}px`,
                zIndex: index + 10,
              }}
            >
              {/* Left Column: Sharp Image (Full height, stretches 100% of card height) */}
              <div className="w-full lg:w-1/2 min-h-[320px] sm:min-h-[400px] lg:min-h-[480px] relative overflow-hidden bg-slate-950 shrink-0">
                <SchoolImage
                  src={stage.image}
                  alt={stage.alt}
                  className={`w-full h-full object-cover ${stage.imagePosition} group-hover:scale-105 transition-transform duration-700`}
                  fallbackText={stage.title}
                  fallbackBg="from-slate-800 via-slate-900 to-slate-800"
                />
              </div>

              {/* Right Column: Clean White Background Content Area */}
              <div className="w-full lg:w-1/2 bg-white p-6 sm:p-10 lg:p-12 text-slate-900 relative overflow-hidden flex flex-col justify-between">
                
                <div className="relative z-10 space-y-4">
                  {/* Stage Tag */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest text-[#e31e24] bg-[#feecee] border border-red-200">
                    <Sparkles className="w-3.5 h-3.5 text-[#e31e24]" />
                    <span>{stage.stageTag}</span>
                  </div>

                  {/* Stage Title */}
                  <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#031c3f] tracking-tight leading-tight">
                    {stage.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#e31e24]">
                    {stage.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-slate-600 text-sm sm:text-base lg:text-[16px] leading-relaxed max-w-xl">
                    {stage.description}
                  </p>

                  {/* Curriculum Preview Chips */}
                  <div className="pt-2 space-y-2.5 max-w-lg">
                    {stage.curriculumHighlights.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Explore Pill Button */}
                <div className="pt-8 relative z-10 flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setActiveCurriculum(index)}
                    className="bg-[#031c3f] hover:bg-[#e31e24] text-white font-extrabold text-sm sm:text-base px-7 py-3 rounded-full transition-all duration-300 shadow-md inline-flex items-center gap-2.5 group/btn cursor-pointer"
                  >
                    <span>Explore More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        </div>

      {/* Curriculum Details Modal */}
      {currentModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveCurriculum(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-[#09172e] rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-white/20 relative animate-scale-up text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-white/15 relative bg-white/5">
              <button
                type="button"
                onClick={() => setActiveCurriculum(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-400/10 text-amber-300 border border-amber-400/25 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{currentModal.badge}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{currentModal.title}</h3>
              <p className="text-xs text-slate-300 mt-1 font-medium">{currentModal.subtitle}</p>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4 text-white font-bold text-sm">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Curriculum & Learning Highlights</span>
              </div>

              <ul className="space-y-3 mb-6">
                {currentModal.curriculumHighlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-3">
                <Link
                  href="/admissions"
                  onClick={() => setActiveCurriculum(null)}
                  className="flex-1 py-3 px-4 rounded-xl text-center text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-md"
                >
                  Apply for Admission
                </Link>
                <button
                  type="button"
                  onClick={() => setActiveCurriculum(null)}
                  className="py-3 px-5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors cursor-pointer"
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

