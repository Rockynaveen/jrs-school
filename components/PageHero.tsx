'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Play, PhoneCall } from 'lucide-react'

export interface PageHeroButton {
  text: string
  href?: string
  onClick?: () => void
  icon?: 'arrow' | 'play' | 'phone'
}

export interface PageHeroProps {
  breadcrumb: string
  title: string
  titleHighlight?: string
  subtitle?: string
  description?: string
  imageSrc?: string
  imageAlt?: string
  imagePosition?: string
  overlayType?: 'default' | 'logo-blue'
  primaryButton?: PageHeroButton
  secondaryButton?: PageHeroButton
  children?: React.ReactNode
}

export default function PageHero({
  breadcrumb,
  title,
  titleHighlight,
  subtitle,
  description,
  imageSrc = '/images/campus-building.jpg',
  imageAlt = 'JRS International School Campus',
  imagePosition,
  overlayType = 'default',
  primaryButton,
  secondaryButton,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#031c3f] text-white min-h-[70vh] flex flex-col justify-center">
      {/* Background Campus Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageSrc}
          alt={imageAlt}
          className={`w-full h-full object-cover ${
            imagePosition || 'object-center sm:object-[center_35%]'
          }`}
          onError={(e) => {
            const target = e.currentTarget
            target.src = '/images/campus-building.jpg'
          }}
        />

        {overlayType === 'logo-blue' ? (
          <>
            {/* Logo Blue Light Overlay */}
            <div className="absolute inset-0 bg-[#013aa3]/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#013aa3]/90 via-[#013aa3]/60 via-40% to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#013aa3]/40 via-transparent to-transparent" />
          </>
        ) : (
          <>
            {/* Soft Navy Gradient from Left for high readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#031c3f] via-[#031c3f]/85 via-35% md:via-45% to-transparent" />
            {/* Subtle Dark Bottom Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#031c3f]/30 via-transparent to-transparent" />
          </>
        )}
      </div>

      {/* Decorative Red Curved Swoosh in Bottom-Right Corner (matching design) */}
      <div className="absolute -bottom-8 -right-8 w-60 sm:w-80 h-60 sm:h-80 pointer-events-none z-10 overflow-hidden">
        <svg
          viewBox="0 0 300 300"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 120 300 C 180 260, 260 210, 300 120 L 300 300 Z"
            fill="#e31e24"
            opacity="0.95"
          />
          <path
            d="M 170 300 C 210 270, 270 230, 300 170 L 300 300 Z"
            fill="#ff3b44"
            opacity="0.85"
          />
        </svg>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
        <div className="max-w-2xl" data-aos="fade-right">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-300 mb-4 sm:mb-5"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-slate-400 font-normal">›</span>
            <span className="text-white font-semibold">{breadcrumb}</span>
          </nav>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
            {title}{' '}
            {titleHighlight && (
              <span className="text-[#f59e0b]">{titleHighlight}</span>
            )}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-xl sm:text-2xl font-bold text-white/95 mt-2 sm:mt-3 tracking-tight">
              {subtitle}
            </p>
          )}

          {/* Description Paragraph */}
          {description && (
            <p className="text-slate-200 text-xs sm:text-sm sm:leading-relaxed max-w-xl opacity-90 leading-relaxed mt-4">
              {description}
            </p>
          )}

          {/* Action Buttons */}
          {(primaryButton || secondaryButton) && (
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mt-7 sm:mt-8">
              {/* Primary Button */}
              {primaryButton &&
                (primaryButton.href ? (
                  primaryButton.href.startsWith('http') || primaryButton.href.startsWith('tel:') ? (
                    <a
                      href={primaryButton.href}
                      onClick={primaryButton.onClick}
                      className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#e31e24] hover:bg-[#c9181e] shadow-lg shadow-red-600/30 transition-all duration-200 active:scale-95"
                    >
                      <span>{primaryButton.text}</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </a>
                  ) : (
                    <Link
                      href={primaryButton.href}
                      onClick={primaryButton.onClick}
                      className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#e31e24] hover:bg-[#c9181e] shadow-lg shadow-red-600/30 transition-all duration-200 active:scale-95"
                    >
                      <span>{primaryButton.text}</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </Link>
                  )
                ) : (
                  <button
                    type="button"
                    onClick={primaryButton.onClick}
                    className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#e31e24] hover:bg-[#c9181e] shadow-lg shadow-red-600/30 transition-all duration-200 active:scale-95"
                  >
                    <span>{primaryButton.text}</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                ))}

              {/* Secondary Button */}
              {secondaryButton &&
                (secondaryButton.href ? (
                  secondaryButton.href.startsWith('http') || secondaryButton.href.startsWith('tel:') ? (
                    <a
                      href={secondaryButton.href}
                      onClick={secondaryButton.onClick}
                      className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/40 backdrop-blur-sm transition-all duration-200 active:scale-95"
                    >
                      <span>{secondaryButton.text}</span>
                      {secondaryButton.icon === 'phone' ? (
                        <PhoneCall className="w-3.5 h-3.5 text-[#f59e0b]" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border border-white flex items-center justify-center">
                          <Play className="w-2 h-2 fill-white ml-0.5" />
                        </div>
                      )}
                    </a>
                  ) : (
                    <Link
                      href={secondaryButton.href}
                      onClick={secondaryButton.onClick}
                      className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/40 backdrop-blur-sm transition-all duration-200 active:scale-95"
                    >
                      <span>{secondaryButton.text}</span>
                      {secondaryButton.icon === 'phone' ? (
                        <PhoneCall className="w-3.5 h-3.5 text-[#f59e0b]" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border border-white flex items-center justify-center">
                          <Play className="w-2 h-2 fill-white ml-0.5" />
                        </div>
                      )}
                    </Link>
                  )
                ) : (
                  <button
                    type="button"
                    onClick={secondaryButton.onClick}
                    className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/40 backdrop-blur-sm transition-all duration-200 active:scale-95 cursor-pointer"
                  >
                    <span>{secondaryButton.text}</span>
                    {secondaryButton.icon === 'phone' ? (
                      <PhoneCall className="w-3.5 h-3.5 text-[#f59e0b]" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border border-white flex items-center justify-center">
                        <Play className="w-2 h-2 fill-white ml-0.5" />
                      </div>
                    )}
                  </button>
                ))}
            </div>
          )}
        </div>

        {/* Optional Children slot (e.g. highlight cards) */}
        {children && <div className="mt-10 sm:mt-12">{children}</div>}
      </div>
    </section>
  )
}
