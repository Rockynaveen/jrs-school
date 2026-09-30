'use client'

import React, { useState, useEffect } from 'react'
import { ArrowRight, ArrowLeft, Play, X } from 'lucide-react'
import SchoolImage from './SchoolImage'

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  const slides = [
    {
      titlePart1: 'Empowering',
      titlePart2: 'Future Leaders',
      tagline: 'NURTURING BRIGHT MINDS • BUILDING A BETTER TOMORROW',
      description:
        'At JRS International School, we inspire curiosity, creativity and compassion. A place where every child discovers their potential and shines in their own unique way.',
      image: '/images/hero image.png',
      alt: 'JRS International School Campus Building and Assembly',
    },
    {
      titlePart1: 'Inspiring',
      titlePart2: 'Excellence & Values',
      tagline: 'WORLD-CLASS EDUCATION • ROOTED IN ETHOS',
      description:
        'Providing an innovative curriculum and a nurturing environment where students develop leadership, critical thinking, and lifelong values.',
      image: '/images/heroslider3.png',
      alt: 'JRS International School Students',
    },
  ]

  const current = slides[activeSlide]

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  // Auto-advance slides every 6 seconds unless user is hovering
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [isPaused, slides.length])

  // Handle escape key and body scroll lock for video popup
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsVideoModalOpen(false)
      }
    }

    if (isVideoModalOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isVideoModalOpen])

  return (
    <section
      id="home"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative h-[105vh] min-h-[105vh] w-full overflow-hidden flex items-center bg-[#031c3f]"
    >
      {/* Right space ONLY for the hero slider images (no image under the left overlay) */}
      <div className="absolute top-0 right-0 bottom-0 w-full md:w-[54%] lg:w-[58%] xl:w-[60%] z-0 overflow-hidden">
        {slides.map((slide, idx) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activeSlide === idx ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <SchoolImage
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover object-center"
              fallbackText={slide.image}
              fallbackBg="from-slate-800 via-[#0d2146] to-[#0a1931]"
            />
          </div>
        ))}

        {/* Smooth feather fade on the left edge of the right image container */}
        <div className="absolute inset-y-0 left-0 w-24 sm:w-36 md:w-48 bg-gradient-to-r from-[#031c3f] via-[#031c3f]/80 to-transparent z-[1] pointer-events-none" />

        {/* Mobile-only background tint so text is readable if stacked */}
        <div className="absolute inset-0 md:hidden bg-[#031c3f]/80 z-[1] pointer-events-none" />
      </div>

      {/* Hero Content on Clean Solid Navy Left Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 w-full">
        <div className="max-w-xl lg:max-w-2xl text-left">
          {/* Tagline / Subtitle */}
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-5">
            <span className="text-white/95 text-xs sm:text-[13px] font-bold tracking-[0.16em] uppercase flex items-center gap-2">
              {current.tagline.split('•').map((part, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <span className="text-[#f59e0b] font-black">•</span>}
                  <span>{part.trim()}</span>
                </React.Fragment>
              ))}
            </span>
          </div>

          {/* Big Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-extrabold text-white tracking-tight leading-[1.08] mb-5">
            <span>{current.titlePart1}</span>{' '}
            <span className="text-[#ffbe1a] block mt-1">
              {current.titlePart2}
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-sm sm:text-[15px] lg:text-base text-white/90 leading-relaxed font-normal mb-8 max-w-lg lg:max-w-xl">
            {current.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Primary Admissions Button */}
            <a
              href="#admissions"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white bg-[#e31e24] hover:bg-[#c9181e] active:scale-95 shadow-lg shadow-red-600/30 transition-all duration-200"
            >
              <span>Admissions 2026-27</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Secondary Virtual Tour Button */}
            <button
              type="button"
              onClick={() => setIsVideoModalOpen(true)}
              aria-label="Play virtual campus tour video"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-[#031c3f]/50 hover:bg-[#031c3f]/80 active:scale-95 border border-white/40 backdrop-blur-sm transition-all duration-200 group cursor-pointer"
            >
              <span>Take a Virtual Tour</span>
              <Play className="w-3 h-3 fill-white text-white group-hover:scale-110 transition-transform ml-0.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Right Carousel Controls matching design */}
      <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-12 z-20 flex items-center gap-2.5">
        {/* Previous Button (Dark) */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#031c3f] hover:bg-[#02132d] text-white flex items-center justify-center transition-colors border border-white/10 shadow-lg cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-white" />
        </button>

        {/* Indicators */}
        <div className="flex items-center gap-2 px-1">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                activeSlide === idx
                  ? 'w-6 h-2.5 bg-[#e31e24]'
                  : 'w-2.5 h-2.5 bg-white opacity-90 hover:opacity-100'
              }`}
            />
          ))}
        </div>

        {/* Next Button (White) */}
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-slate-100 text-[#031c3f] flex items-center justify-center transition-colors shadow-lg cursor-pointer"
        >
          <ArrowRight className="w-4 h-4 text-[#031c3f]" />
        </button>
      </div>

      {/* Magnified Virtual Tour Video Modal Popup */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setIsVideoModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Virtual Tour Video"
        >
          <div
            className="relative w-full max-w-5xl bg-[#031c3f] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/20 animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-gradient-to-r from-[#031c3f] to-[#0a2f64] border-b border-white/10 text-white">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#e31e24] animate-pulse" />
                <h3 className="text-sm sm:text-base font-bold tracking-tight">
                  JRS International School — Campus Virtual Tour
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(false)}
                aria-label="Close virtual tour video"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Magnified 16:9 Video Container */}
            <div className="relative w-full aspect-video bg-black">
              <iframe
                src="https://www.youtube.com/embed/LBvByB-S0O4?autoplay=1&rel=0&modestbranding=1"
                title="JRS International School Virtual Tour"
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

