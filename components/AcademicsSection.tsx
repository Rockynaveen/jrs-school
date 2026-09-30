'use client'

import React, { useState } from 'react'
import { ArrowRight, X, BookOpen, CheckCircle, Sparkles } from 'lucide-react'
import SchoolImage from './SchoolImage'

export default function AcademicsSection() {
  const [activeCurriculum, setActiveCurriculum] = useState<number | null>(null)

  const stages = [
    {
      title: 'Pre-Primary',
      subtitle: 'NURSERY, LKG & UKG',
      badge: 'Early Childhood',
      badgeDotColor: 'bg-[#e31e24]',
      description:
        'Play, explore, and discover. Building curious and confident young learners from their very first steps in education.',
      image: '/images/pre-primary-learning.jpg',
      alt: 'Pre-Primary student engaged in learning activity',
      topGradient: 'from-[#e31e24] via-[#f59e0b] to-[#031c3f]',
      curriculumHighlights: [
        'Phonics-based English language development',
        'Montessori-inspired sensorial and tactile activities',
        'Number sense, early numeracy and logical thinking',
        'Gross and fine motor skill development through play',
        'Art, rhymes, music, and interactive storytelling',
      ],
    },
    {
      title: 'Primary School',
      subtitle: 'CLASSES I TO V • NCERT SYLLABUS',
      badge: 'Foundation Years',
      badgeDotColor: 'bg-[#031c3f]',
      description:
        'Building strong scholastic foundations through hands-on inquiry, creativity, and balanced academic development.',
      image: '/images/primary-school-study.jpg',
      alt: 'Primary school student studying in classroom',
      topGradient: 'from-[#031c3f] via-[#1d4ed8] to-[#e31e24]',
      curriculumHighlights: [
        'Integrated CBSE-aligned NCERT framework',
        'Experiential STEM learning and scientific inquiry',
        'Bilingual communication and creative writing skills',
        'Computer literacy, coding basics, and digital tools',
        'Physical education, yoga, and performing arts',
      ],
    },
    {
      title: 'Middle School',
      subtitle: 'CLASSES VI TO VIII • CBSE & IIT/NIT',
      badge: 'Advanced Prep',
      badgeDotColor: 'bg-[#f59e0b]',
      description:
        'Encouraging independent analytical thinking, teamwork, scientific inquiry, and competitive exam readiness.',
      image: '/images/middle-school-students.jpg',
      alt: 'Middle school students collaborating over books',
      topGradient: 'from-[#031c3f] via-[#e31e24] to-[#f59e0b]',
      curriculumHighlights: [
        'Rigorous CBSE syllabus with strong core concepts',
        'Specialized IIT/NIT Olympiad foundation modules',
        'State-of-the-art Science and Computer lab practicals',
        'Critical thinking, debating, and collaborative projects',
        'Life skills, leadership programs, and ethics education',
      ],
    },
  ]

  const currentModal = activeCurriculum !== null ? stages[activeCurriculum] : null

  return (
    <section id="academics" className="py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#dc2626]">
            ACADEMIC PROGRAMMES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#031c3f] tracking-tight leading-[1.15] mb-4">
            Shaping Inquiring Minds at Every Stage
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From early foundational exploration to advanced preparatory excellence, our curriculum builds conceptual clarity, character, and lifelong curiosity.
          </p>
        </div>

        {/* 3 Academic Stage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {stages.map((stage, index) => (
            <div
              key={index}
              className="bg-white rounded-[26px] overflow-hidden border border-slate-200 transition-all duration-200 flex flex-col group"
            >
              {/* Top Accent Gradient Rim */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${stage.topGradient}`} />

              {/* Photo Container with Top-Left Floating Pill Badge */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
                <SchoolImage
                  src={stage.image}
                  alt={stage.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  fallbackText={stage.image}
                  fallbackBg="from-slate-100 via-slate-200 to-slate-100"
                />

                {/* Floating Pill Badge */}
                <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-slate-800 shadow-sm border border-white/60 flex items-center gap-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${stage.badgeDotColor}`} />
                  <span>{stage.badge}</span>
                </div>
              </div>

              {/* Card Body Content */}
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                {/* Stage Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1.5 tracking-tight group-hover:text-[#031c3f] transition-colors">
                  {stage.title}
                </h3>

                {/* Curriculum / Syllabus Subtitle */}
                <span className="text-[11px] sm:text-xs font-bold text-[#e31e24] uppercase tracking-wider mb-3 block">
                  {stage.subtitle}
                </span>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed mb-6 flex-1">
                  {stage.description}
                </p>

                {/* View Curriculum CTA Button with dynamic hover state */}
                <button
                  type="button"
                  onClick={() => setActiveCurriculum(index)}
                  className="group/btn inline-flex items-center justify-center gap-2 w-full py-2.5 sm:py-3 rounded-xl bg-slate-50 hover:bg-[#e31e24] border border-slate-200/80 hover:border-[#e31e24] text-slate-800 hover:text-white font-semibold text-xs sm:text-sm transition-all duration-300 hover:shadow-lg hover:shadow-red-600/25 active:scale-[0.98] cursor-pointer"
                >
                  <span>View Curriculum</span>
                  <ArrowRight className="w-4 h-4 text-slate-600 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Curriculum Detail Modal */}
      {currentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-100 relative animate-scale-up">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#031c3f] to-[#0a2f64] p-6 text-white relative">
              <button
                type="button"
                onClick={() => setActiveCurriculum(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/15 text-amber-300 mb-2">
                <Sparkles className="w-3 h-3" />
                <span>{currentModal.badge}</span>
              </div>
              <h3 className="text-2xl font-bold">{currentModal.title}</h3>
              <p className="text-xs text-white/80 mt-0.5 font-medium">{currentModal.subtitle}</p>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3 text-slate-900 font-bold text-sm">
                <BookOpen className="w-4 h-4 text-[#e31e24]" />
                <span>Curriculum & Learning Highlights</span>
              </div>

              <ul className="space-y-2.5 mb-6">
                {currentModal.curriculumHighlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-600">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-3">
                <a
                  href="#admissions"
                  onClick={() => setActiveCurriculum(null)}
                  className="flex-1 py-3 px-4 rounded-xl text-center text-xs sm:text-sm font-semibold text-white bg-[#e31e24] hover:bg-[#c9181e] shadow-md shadow-red-600/20 transition-all"
                >
                  Apply for Admissions
                </a>
                <button
                  type="button"
                  onClick={() => setActiveCurriculum(null)}
                  className="py-3 px-5 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
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


