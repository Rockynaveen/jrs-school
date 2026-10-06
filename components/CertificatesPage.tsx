'use client'

import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import Navbar from './Navbar'
import PageHero from './PageHero'
import Footer from './Footer'
import {
  FileText,
  Download,
  ExternalLink,
  ShieldCheck,
  Droplets,
  GraduationCap,
  Flame,
  Building2,
  Eye,
  X,
} from 'lucide-react'

interface CertificateItem {
  sno: number
  id: string
  title: string
  authority: string
  pdfUrl: string
  icon: React.ReactNode
}

const certificatesList: CertificateItem[] = [
  {
    sno: 1,
    id: 'health-sanitary',
    title: 'Health and Sanitary Certificate',
    authority: 'Municipal / Public Health Department',
    pdfUrl: '/certificates/health-sanitary-certificate.pdf',
    icon: <Droplets className="w-4 h-4 text-blue-600" />,
  },
  {
    sno: 2,
    id: 'preprimary-noc',
    title: 'Pre-Primary to Class 8 Recognition & NOC',
    authority: 'Department of School Education, Govt. of Telangana',
    pdfUrl: '/certificates/preprimary-to-8-noc.pdf',
    icon: <GraduationCap className="w-4 h-4 text-emerald-600" />,
  },
  {
    sno: 3,
    id: 'fire-safety',
    title: 'Fire Safety Certificate',
    authority: 'State Disaster Response & Fire Services Department',
    pdfUrl: '/certificates/fire-certificate.pdf',
    icon: <Flame className="w-4 h-4 text-amber-600" />,
  },
  {
    sno: 4,
    id: 'building-safety',
    title: 'Building Safety & Stability Certificate',
    authority: 'Executive Engineer / Authorized Structural Engineer',
    pdfUrl: '/certificates/building-safety-certificate.pdf',
    icon: <Building2 className="w-4 h-4 text-purple-600" />,
  },
]

export default function CertificatesPage() {
  const [selectedPdf, setSelectedPdf] = useState<CertificateItem | null>(null)

  useEffect(() => {
    AOS.init({
      duration: 750,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    })
  }, [])

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPdf(null)
      }
    }
    if (selectedPdf) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [selectedPdf])

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-700 antialiased selection:bg-red-500 selection:text-white">
      {/* 1. Navbar */}
      <Navbar activePage="certificates" />

      <main className="flex-1">
        {/* 2. Hero Banner */}
        <PageHero
          breadcrumb="Certificates"
          title="Mandatory"
          titleHighlight="Certificates"
          imageSrc="/images/campus-building.jpg"
          imageAlt="JRS International School Campus"
        />

        {/* 3. Certificates Table Section with Lite Background */}
        <section className="py-12 sm:py-16 bg-[#f8fafc] border-b border-slate-200/70">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10" data-aos="fade-up">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-bold tracking-wider uppercase mb-2.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Statutory Compliance</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#031c3f] tracking-tight">
                Mandatory Disclosure & Certificates
              </h2>
            </div>

            {/* Clean, Simple Table with View PDF Buttons */}
            <div
              className="bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100/80 border-b border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-wider">
                      <th scope="col" className="py-3 px-4 sm:px-6 w-16 text-center">
                        S.NO
                      </th>
                      <th scope="col" className="py-3 px-4 sm:px-6 min-w-[260px]">
                        Document / Certificate
                      </th>
                      <th scope="col" className="py-3 px-4 sm:px-6 min-w-[240px]">
                        Issuing Authority
                      </th>
                      <th scope="col" className="py-3 px-4 sm:px-6 text-right min-w-[180px]">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
                    {certificatesList.map((cert) => (
                      <tr
                        key={cert.id}
                        className="transition-colors duration-150 hover:bg-slate-50/80"
                      >
                        <td className="py-4 px-4 sm:px-6 text-center font-semibold text-slate-400 text-xs">
                          {cert.sno}
                        </td>
                        <td className="py-4 px-4 sm:px-6 font-semibold text-[#031c3f]">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                              {cert.icon}
                            </div>
                            <span className="text-sm font-bold text-slate-700">
                              {cert.title}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-4 sm:px-6 text-slate-700 text-xs sm:text-sm">
                          {cert.authority}
                        </td>
                        <td className="py-4 px-4 sm:px-6 text-right">
                          <div className="inline-flex items-center gap-2 justify-end">
                            {/* View PDF Button */}
                            <button
                              type="button"
                              onClick={() => setSelectedPdf(cert)}
                              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold text-white bg-[#dc2626] hover:bg-[#b91c1c] shadow-xs active:scale-95 transition-all cursor-pointer"
                            >
                              <Eye className="w-3.5 h-3.5" />
                              <span>View PDF</span>
                            </button>

                            {/* Direct Open in New Tab */}
                            <a
                              href={cert.pdfUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                              title="Open in new window"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>

                            {/* Download Button */}
                            <a
                              href={cert.pdfUrl}
                              download
                              className="p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                              title="Download PDF"
                            >
                              <Download className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 4. Full View PDF Modal Dialog */}
      {selectedPdf && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xs animate-fade-in">
          <div
            className="relative w-full max-w-5xl h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-gradient-to-r from-[#031c3f] to-[#0a2f64] text-white">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <h3 className="text-sm sm:text-base font-bold tracking-tight">
                    {selectedPdf.title}
                  </h3>
                  <p className="text-[11px] text-slate-300">
                    {selectedPdf.authority}
                  </p>
                </div>
              </div>

              {/* Action & Close Buttons */}
              <div className="flex items-center gap-2">
                <a
                  href={selectedPdf.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold text-white bg-white/15 hover:bg-white/25 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Open in Tab</span>
                </a>
                <a
                  href={selectedPdf.pdfUrl}
                  download
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold text-white bg-[#dc2626] hover:bg-[#b91c1c] transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Download</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedPdf(null)}
                  className="p-1.5 rounded-md text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer ml-1"
                  aria-label="Close viewer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Embedded PDF Viewer */}
            <div className="flex-1 w-full bg-slate-100 overflow-hidden relative">
              <iframe
                src={`${selectedPdf.pdfUrl}#toolbar=1`}
                title={selectedPdf.title}
                className="w-full h-full border-0 bg-white"
              />
            </div>
          </div>
        </div>
      )}

      {/* 5. Footer */}
      <Footer />
    </div>
  )
}
