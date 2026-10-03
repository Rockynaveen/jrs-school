'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

interface NavbarProps {
  activePage?: 'home' | 'about' | 'academics' | 'admissions' | 'beyond' | 'facilities' | 'gallery' | 'events' | 'contact'
}

export default function Navbar({ activePage = 'home' }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '/', id: 'home' },
    { name: 'About JRS', href: '/about', id: 'about' },
    { name: 'Academics', href: '/#academics', id: 'academics' },
    { name: 'Admissions', href: '/#admissions', id: 'admissions' },
    { name: 'Beyond Classroom', href: '/#beyond', id: 'beyond' },
    { name: 'Facilities', href: '/#facilities', id: 'facilities' },
    { name: 'Gallery', href: '/#gallery', id: 'gallery' },
    { name: 'Sports & Events', href: '/#events', id: 'events' },
    { name: 'Contact', href: '/#contact', id: 'contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Area */}
          <a href="#home" className="flex items-center group py-1">
            <img
              src="/images/logo.png"
              alt="JRS International School"
              className="h-14 sm:h-16 w-auto object-contain group-hover:scale-[1.02] transition-transform duration-200"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
            {navLinks.map((link) => {
              const isActive = link.id === activePage
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-[15px] font-medium transition-colors hover:text-red-600 ${
                    isActive
                      ? 'text-red-600 font-semibold'
                      : 'text-slate-700'
                  }`}
                >
                  {link.name}
                </a>
              )
            })}
          </nav>

          {/* Enquire Now CTA Button */}
          <div className="hidden sm:flex items-center">
            <a
              href="#enquire"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-[#dc2626] hover:bg-[#b91c1c] active:scale-95 shadow-md shadow-red-500/20 transition-all duration-200"
            >
              Enquire Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-red-600 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => {
            const isActive = link.id === activePage
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-[15px] font-medium transition-colors ${
                  isActive
                    ? 'bg-red-50 text-red-600 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-red-600'
                }`}
              >
                {link.name}
              </a>
            )
          })}
          <div className="pt-2">
            <a
              href="#enquire"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center block px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-[#dc2626] hover:bg-[#b91c1c] shadow-md shadow-red-500/20"
            >
              Enquire Now
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
