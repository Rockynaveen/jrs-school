'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import Navbar from './Navbar'
import PageHero from './PageHero'
import Footer from './Footer'
import { Shield, UserCheck, MapPin, Phone } from 'lucide-react'

interface SMCMember {
  sno: number
  name: string
  designation: string
  address: string
  contact: string
}

const smcMembers: SMCMember[] = [
  {
    sno: 1,
    name: 'Mrs. Jagadishwari Nataraj',
    designation: 'Chairman',
    address: 'Divya Enclave Vijaypuri Tarnaka',
    contact: '9160300046',
  },
  {
    sno: 2,
    name: 'Mr. C. R. Jagadish',
    designation: 'Member',
    address: 'Karthikeya Nagar Nacharam Hyderabad',
    contact: '9542664980',
  },
  {
    sno: 3,
    name: 'Mrs. Jyothi',
    designation: 'Member',
    address: '12-13-415/3 Tarnaka Secunderabad',
    contact: '9666312947',
  },
  {
    sno: 4,
    name: 'Mr. Vijay Bhaskar',
    designation: 'Member',
    address: 'Venkatadri Township Chowdarguda',
    contact: '9908330490',
  },
  {
    sno: 5,
    name: 'Mr. Ashok',
    designation: 'Member',
    address: 'Narapally Hyderabad',
    contact: '9949845482',
  },
  {
    sno: 6,
    name: 'Mrs B. Sheetal',
    designation: 'Member',
    address: 'Venkatadri Township Chowdarguda',
    contact: '8309981778',
  },
  {
    sno: 7,
    name: 'Mrs Nagasunitha',
    designation: 'Member',
    address: 'Muthvelliguda Hyderabad',
    contact: '8897503215',
  },
  {
    sno: 8,
    name: 'Dr. VinayShree',
    designation: 'Member',
    address: 'Siddhartha School Boduppal',
    contact: '9502499979',
  },
  {
    sno: 9,
    name: 'Mr. Narsing Rao',
    designation: 'Member',
    address: 'Sivaji Vidya Peeth School',
    contact: '9963701615',
  },
  {
    sno: 10,
    name: 'Dr Srinivas',
    designation: 'Member',
    address: 'Venkatadri Township Chowdarguda',
    contact: '9912712798',
  },
  {
    sno: 11,
    name: 'Dr. Anil Kumar',
    designation: 'Member',
    address: 'Boduppal, Hyderabad',
    contact: '9926811371',
  },
]

export default function SchoolManagementCommitteePage() {
  useEffect(() => {
    AOS.init({
      duration: 750,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    })
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-700 antialiased selection:bg-red-500 selection:text-white">
      {/* 1. Navbar */}
      <Navbar activePage="school-management-committee" />

      <main className="flex-1">
        {/* 2. Hero Banner */}
        <PageHero
          breadcrumb="School Management Committee"
          title="School Management"
          titleHighlight="Committee"
          imageSrc="/images/campus-building.jpg"
          imageAlt="JRS International School Campus"
        />

        {/* 3. SMC Table Section with Lite Background */}
        <section
          id="committee"
          className="py-12 sm:py-16 bg-[#f8fafc] border-b border-slate-200/70 scroll-mt-20"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10" data-aos="fade-up">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#031c3f] tracking-tight">
                School Management Committee
              </h2>
            </div>

            {/* Clean Lite Table Card */}
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
                      <th scope="col" className="py-3 px-4 sm:px-6 min-w-[210px]">
                        Name
                      </th>
                      <th scope="col" className="py-3 px-4 sm:px-6 min-w-[140px]">
                        Designation
                      </th>
                      <th scope="col" className="py-3 px-4 sm:px-6 min-w-[260px]">
                        Address
                      </th>
                      <th scope="col" className="py-3 px-4 sm:px-6 min-w-[160px] text-right">
                        Contact Number
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-[13px] sm:text-sm text-slate-700">
                    {smcMembers.map((member) => {
                      const isChairman = member.designation.toLowerCase() === 'chairman'

                      return (
                        <tr
                          key={member.sno}
                          className={`transition-colors duration-150 hover:bg-slate-50/80 ${
                            isChairman ? 'bg-red-50/20' : ''
                          }`}
                        >
                          <td className="py-2.5 px-4 sm:px-6 text-center font-semibold text-slate-400 text-xs">
                            {member.sno}
                          </td>
                          <td className="py-2.5 px-4 sm:px-6 font-semibold text-[#031c3f]">
                            <div className="flex items-center gap-2">
                              <UserCheck
                                className={`w-3.5 h-3.5 shrink-0 ${
                                  isChairman ? 'text-red-600' : 'text-slate-400'
                                }`}
                              />
                              <span>{member.name}</span>
                            </div>
                          </td>
                          <td className="py-2.5 px-4 sm:px-6">
                            {isChairman ? (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-100 text-red-700">
                                <Shield className="w-3 h-3" />
                                Chairman
                              </span>
                            ) : (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
                                Member
                              </span>
                            )}
                          </td>
                          <td className="py-2.5 px-4 sm:px-6 text-slate-600">
                            <div className="flex items-start gap-1.5">
                              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                              <span>{member.address}</span>
                            </div>
                          </td>
                          <td className="py-2.5 px-4 sm:px-6 text-right font-medium">
                            <a
                              href={`tel:${member.contact}`}
                              className="inline-flex items-center gap-1.5 text-slate-700 hover:text-red-600 transition-colors font-mono text-xs sm:text-[13px]"
                            >
                              <Phone className="w-3 h-3 text-slate-400 hover:text-red-600" />
                              <span>{member.contact}</span>
                            </a>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 4. Footer */}
      <Footer />
    </div>
  )
}
