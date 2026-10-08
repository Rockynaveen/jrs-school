'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'

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
          name: 'Certificates',
          href: '/certificates',
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
          href: 'https://jrsinternationalschooluppal.com/wp-content/uploads/2020/05/JRS_International_School-Prospectus.pdf',
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
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Area */}
          <Link href="/" className="flex items-center group py-1">
            <img
              src="/images/logo.png"
              alt="JRS International School"
              className="h-11 sm:h-12 md:h-14 w-auto object-contain group-hover:scale-[1.02] transition-transform duration-200"
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
              href="/admissions"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-[#dc2626] hover:bg-[#b91c1c] active:scale-95 shadow-md shadow-red-500/20 transition-all duration-200"
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
        <div className="xl:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-2">
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
              href="/admissions"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center block px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-[#dc2626] hover:bg-[#b91c1c] shadow-md shadow-red-500/20"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
