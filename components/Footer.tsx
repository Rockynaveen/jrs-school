'use client'

import React from 'react'
import {
  MapPin,
  Phone,
  Mail,
  ChevronUp,
} from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-white text-slate-700 pt-16 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: School Identity (Col span 4) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Logo */}
            <a href="#home" className="inline-block group py-1">
              <img
                src="/images/logo.png"
                alt="JRS International School"
                className="h-14 sm:h-16 w-auto object-contain group-hover:scale-[1.02] transition-transform duration-200 bg-white/60 rounded-lg p-1"
              />
            </a>

            <p className="text-xs font-semibold text-slate-800">
              JRS International School, Narapally, Hyderabad
            </p>
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              Nurturing young minds with knowledge, values and a global perspective.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-[#1877f2] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-[#ff0000] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-[#0a66c2] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (Col span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-slate-900 tracking-tight">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-600">
              <li>
                <a href="#home" className="hover:text-red-600 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-red-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#academics" className="hover:text-red-600 transition-colors">
                  Academics
                </a>
              </li>
              <li>
                <a href="#enquire" className="hover:text-red-600 transition-colors">
                  Admissions
                </a>
              </li>
              <li>
                <a href="#beyond" className="hover:text-red-600 transition-colors">
                  Beyond Classroom
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-red-600 transition-colors">
                  Facilities
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-red-600 transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-red-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Important Links (Col span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-slate-900 tracking-tight">
              Important Links
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-600">
              <li>
                <a href="#prospectus" className="hover:text-red-600 transition-colors">
                  School Prospectus
                </a>
              </li>
              <li>
                <a href="#mandatory" className="hover:text-red-600 transition-colors">
                  Mandatory Disclosure
                </a>
              </li>
              <li>
                <a href="#affiliation" className="hover:text-red-600 transition-colors">
                  CBSE Affiliation
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-red-600 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#enquire" className="hover:text-red-600 transition-colors">
                  Online Enquiry
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us & Map Preview (Col span 4) */}
          <div id="footer-contact" className="lg:col-span-4 space-y-3.5">
            <h4 className="text-sm font-bold text-slate-900 tracking-tight">
              Contact Us
            </h4>

            <div className="space-y-2.5 text-xs text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                <span>JRS International School, Narapally, Hyderabad, Telangana</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-red-600 flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-red-600 transition-colors">
                  +91 98765 43210
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-red-600 flex-shrink-0" />
                <a
                  href="mailto:info@jrsinternationalschool.com"
                  className="hover:text-red-600 transition-colors"
                >
                  info@jrsinternationalschool.com
                </a>
              </div>
            </div>

            {/* Interactive Google Map Embed */}
            <div className="mt-3 relative rounded-xl overflow-hidden border border-slate-200 shadow-sm aspect-[16/9] w-full bg-slate-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.007807061472!2d78.64582367390636!3d17.406331902261698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99d739fb75a1%3A0xb3a2624674fea4ab!2sJRS%20International%20School%20-%20Narapally%2C%20Hyderabad!5e1!3m2!1sen!2sin!4v1790770247998!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="JRS International School - Narapally, Hyderabad"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll-to-Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-[#0a1931] hover:bg-red-600 text-white flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <ChevronUp className="w-5 h-5 stroke-[2.5]" />
      </button>

      {/* Bottom Copyright Strip */}
      <div className="bg-[#060f1f] text-slate-400 text-xs py-4 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[11px]">
          <div>
            © 2026 JRS International School. All Rights Reserved.
          </div>

          <div className="flex items-center gap-3 text-slate-400">
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
            <span>|</span>
            <a href="#sitemap" className="hover:text-white transition-colors">
              Sitemap
            </a>
          </div>

          <div className="flex items-center gap-1">
            <span>Designed with</span>
            <span className="text-red-500">❤️</span>
            <span>for a Brighter Tomorrow</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
