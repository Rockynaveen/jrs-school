'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, ChevronRight, Phone, Mail, FileText, Award, Download } from 'lucide-react'

interface DropdownSubItem {
  name: string
  href: string
  target?: string
  rel?: string
}

interface DropdownItem {
  name: string
  href: string
  target?: string
  rel?: string
  subItems?: DropdownSubItem[]
}

interface NavLinkItem {
  name: string
  href: string
  id: string
  dropdown?: DropdownItem[]
}

interface NavbarProps {
  activePage?:
    | 'home'
    | 'about'
    | 'chairman'
    | 'principal'
    | 'educational-society'
    | 'school-management-committee'
    | 'certificates'
    | 'academics'
    | 'admissions'
    | 'beyond'
    | 'facilities'
    | 'gallery'
    | 'media'
    | '360-degree-campus'
    | 'events'
    | 'contact'
    | 'careers'
}

export default function Navbar({ activePage = 'home' }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null)
  const [openMobileSubDropdown, setOpenMobileSubDropdown] = useState<string | null>(null)

  const navLinks: NavLinkItem[] = [
    { name: 'Home', href: '/', id: 'home' },
    {
      name: 'About JRS',
      href: '/about',
      id: 'about',
      dropdown: [
        { name: 'About JRS', href: '/about' },
        {
          name: 'Leadership',
          href: '#',
          subItems: [
            { name: 'Chairman of JRS', href: '/chairman' },
            { name: 'Principal', href: '/principal' },
          ],
        },
        {
          name: 'Committee',
          href: '#',
          subItems: [
            { name: 'Educational Society', href: '/educational-society' },
            { name: 'School Management Committee', href: '/school-management-committee' },
          ],
        },
        {
          name: 'Mandatory Disclosure',
          href: '/mandatory-disclosure',
        },
      ],
    },
    { name: 'Academics', href: '/academics', id: 'academics' },
    {
      name: 'Admissions',
      href: '/admissions',
      id: 'admissions',
      dropdown: [
        { name: 'Admissions Overview', href: '/admissions' },
        {
          name: 'Download Brochure',
          href: 'https://jrsinternationalschooluppal.com/wp-content/uploads/2022/01/Brochure-2020-JRS.pdf',
          target: '_blank',
          rel: 'noopener noreferrer',
        },
      ],
    },
    { name: 'Beyond Classroom', href: '/beyond', id: 'beyond' },
    { name: 'Amenities', href: '/facilities', id: 'facilities' },
    {
      name: 'Gallery',
      href: '/gallery',
      id: 'gallery',
      dropdown: [
        { name: 'Media', href: '/media' },
        { name: '360 Degree Campus', href: '/gallery/360-degree-campus' },
      ],
    },
    { name: 'Contact', href: '/contact', id: 'contact' },
    { name: 'Careers', href: '/careers', id: 'careers' },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white border-b border-slate-100 shadow-sm transition-all duration-300">
        {/* Top Bar: Above Header Navigation (hidden on mobile devices) */}
        <div style={{ backgroundColor: 'rgb(240, 244, 250)' }} className="hidden md:block text-[#031c3f] border-b border-slate-200/80 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between min-h-[34px] sm:min-h-[38px] py-1 gap-2">
            {/* Left Contact & Affiliation Info */}
            <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-[13px] text-[#031c3f] font-normal">
              <a
                href="tel:+9191574043210"
                className="inline-flex items-center gap-1.5 text-[#031c3f] hover:text-[#e31e24] transition-colors font-normal shrink-0"
              >
                <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span className="text-[#031c3f]">+91 915740 43210</span>
              </a>

              <span className="text-slate-400 hidden md:inline shrink-0">•</span>

              <a
                href="mailto:info@jrsinternationalschool.com"
                className="hidden md:inline-flex items-center gap-1.5 text-[#031c3f] hover:text-[#e31e24] transition-colors font-normal shrink-0"
              >
                <Mail className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span className="text-[#031c3f]">info@jrsinternationalschool.com</span>
              </a>

              <span className="text-slate-400 hidden lg:inline shrink-0">•</span>

              <span className="hidden lg:inline-flex items-center gap-1.5 text-[#031c3f] font-normal shrink-0">
                <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span className="text-[#031c3f]">CBSE Affiliated School</span>
              </span>
            </div>

            {/* Right: Mandatory Disclosure & Quick links */}
            <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-[13px] text-[#031c3f] font-normal shrink-0">
              <Link
                href="/mandatory-disclosure"
                className="inline-flex items-center gap-1.5 font-normal text-[#031c3f] hover:text-[#e31e24] transition-colors shrink-0"
              >
                <FileText className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span className="text-[#031c3f]">Mandatory Disclosure</span>
              </Link>

              <span className="text-slate-400 hidden sm:inline shrink-0">•</span>

              <a
                href="https://jrsinternationalschooluppal.com/wp-content/uploads/2022/01/Brochure-2020-JRS.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 font-normal text-[#031c3f] hover:text-[#e31e24] transition-colors shrink-0"
              >
                <Download className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span className="text-[#031c3f]">School Prospectus</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo Area */}
          <Link href="/" className="flex items-center group py-1">
            <img
              src="/images/logo.png"
              alt="JRS International School"
              className="h-10 sm:h-12 md:h-14 w-auto object-contain group-hover:scale-[1.02] transition-transform duration-200"
              style={{ imageRendering: '-webkit-optimize-contrast' }}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
            {navLinks.map((link) => {
              const isActive =
                link.id === activePage ||
                (link.id === 'about' &&
                  (activePage === 'chairman' ||
                    activePage === 'principal' ||
                    activePage === 'educational-society' ||
                    activePage === 'school-management-committee' ||
                    activePage === 'certificates')) ||
                (link.id === 'gallery' &&
                  (activePage === 'gallery' ||
                    activePage === 'media' ||
                    activePage === '360-degree-campus'))

              if (link.dropdown) {
                return (
                  <div key={link.name} className="relative group">
                    <Link
                      href={link.href}
                      className={`inline-flex items-center gap-1 text-[15px] font-medium transition-colors hover:text-red-600 py-2 ${
                        isActive ? 'text-red-600 font-semibold' : 'text-slate-700'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-slate-400 group-hover:text-red-600" />
                    </Link>

                    {/* Desktop Dropdown Menu */}
                    <div className="absolute top-full left-0 pt-1.5 hidden group-hover:block z-50 min-w-[210px]">
                      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 py-2 overflow-visible ring-1 ring-black/5 animate-fade-in">
                        {link.dropdown.map((subItem) => {
                          if (subItem.subItems) {
                            return (
                              <div key={subItem.name} className="relative group/sub">
                                <div className="flex items-center justify-between px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-red-600 hover:bg-red-50/60 transition-colors cursor-pointer">
                                  <span>{subItem.name}</span>
                                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover/sub:text-red-600 group-hover/sub:translate-x-0.5 transition-transform" />
                                </div>

                                {/* Desktop Nested Flyout Submenu */}
                                <div className="absolute left-full top-0 -ml-1 pl-2 hidden group-hover/sub:block z-50 min-w-[260px]">
                                  <div className="bg-white rounded-2xl shadow-xl border border-slate-100 py-2 overflow-hidden ring-1 ring-black/5 animate-fade-in">
                                    {subItem.subItems.map((nested) => (
                                      <Link
                                        key={nested.name}
                                        href={nested.href}
                                        target={nested.target}
                                        rel={nested.rel}
                                        className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-red-600 hover:bg-red-50/60 transition-colors whitespace-nowrap"
                                      >
                                        {nested.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )
                          }

                          return (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              target={subItem.target}
                              rel={subItem.rel}
                              className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-red-600 hover:bg-red-50/60 transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[15px] font-medium transition-colors hover:text-red-600 ${
                    isActive ? 'text-red-600 font-semibold' : 'text-slate-700'
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
          </nav>

          {/* Enquire Now CTA Button */}
          <div className="hidden sm:flex items-center">
            <Link
              href="/admissions#enquiry-form"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-[#dc2626] hover:bg-[#b91c1c] active:scale-95 shadow-md shadow-red-500/20 transition-all duration-200"
            >
              Enquire Now
            </Link>
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
        <div className="xl:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-2 max-h-[calc(100vh-4.5rem)] overflow-y-auto">
          {navLinks.map((link) => {
            const isActive =
              link.id === activePage ||
              (link.id === 'about' &&
                (activePage === 'chairman' ||
                  activePage === 'principal' ||
                  activePage === 'educational-society' ||
                  activePage === 'school-management-committee' ||
                  activePage === 'certificates')) ||
              (link.id === 'gallery' && (activePage === 'gallery' || activePage === 'media'))

            if (link.dropdown) {
              return (
                <div key={link.name} className="space-y-1">
                  <div
                    className={`flex items-center justify-between px-3 py-2 rounded-md text-[15px] font-medium ${
                      isActive ? 'bg-red-50 text-red-600 font-semibold' : 'text-slate-700'
                    }`}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex-1 hover:text-red-600"
                    >
                      {link.name}
                    </Link>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenMobileDropdown(
                          openMobileDropdown === link.id ? null : link.id
                        )
                      }
                      className="p-1 text-slate-400 hover:text-red-600 focus:outline-none"
                      aria-label="Toggle dropdown"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          openMobileDropdown === link.id ? 'rotate-180 text-red-600' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {openMobileDropdown === link.id && (
                    <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50/70 rounded-lg">
                      {link.dropdown.map((subItem) => {
                        if (subItem.subItems) {
                          const isSubOpen = openMobileSubDropdown === subItem.name
                          return (
                            <div key={subItem.name} className="space-y-1">
                              <div
                                onClick={() => setOpenMobileSubDropdown(isSubOpen ? null : subItem.name)}
                                className="flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-red-600 hover:bg-white transition-colors cursor-pointer"
                              >
                                <span>{subItem.name}</span>
                                <ChevronDown
                                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                                    isSubOpen ? 'rotate-180 text-red-600' : 'text-slate-400'
                                  }`}
                                />
                              </div>

                              {isSubOpen && (
                                <div className="pl-4 pr-2 py-1 space-y-1 border-l-2 border-red-200 ml-3">
                                  {subItem.subItems.map((nested) => (
                                    <Link
                                      key={nested.name}
                                      href={nested.href}
                                      target={nested.target}
                                      rel={nested.rel}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="block px-3 py-1.5 rounded-md text-[13px] font-medium text-slate-600 hover:text-red-600 hover:bg-white transition-colors"
                                    >
                                      {nested.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          )
                        }

                        return (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            target={subItem.target}
                            rel={subItem.rel}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-red-600 hover:bg-white transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            }

            return (
              <Link
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
              </Link>
            )
          })}
          <div className="pt-2">
            <Link
              href="/admissions#enquiry-form"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center block px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-[#dc2626] hover:bg-[#b91c1c] shadow-md shadow-red-500/20"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      )}
    </header>
    {/* Spacer to preserve document flow underneath the fixed header */}
    <div className="h-16 md:h-[122px] w-full shrink-0 pointer-events-none" aria-hidden="true" />
  </>
  )
}
