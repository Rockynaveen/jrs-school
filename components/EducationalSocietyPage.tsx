'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import Navbar from './Navbar'
import PageHero from './PageHero'
import Footer from './Footer'
import { Shield, UserCheck } from 'lucide-react'

interface CommitteeMember {
  sn: number
  name: string
  status: string
}

const managingMembers: CommitteeMember[] = [
  {
    sn: 1,
    name: 'Mr. C. R. Jagadish',
    status: 'President',
  },
  {
    sn: 2,
    name: 'Ms. V. Jyothi',
    status: 'Vice-President',
  },
  {
    sn: 3,
    name: 'Ms. C. Amaravathi',
    status: 'General Secretary',
  },
  {
    sn: 4,
    name: 'Dr. C. Suman Kumar',
    status: 'Joint-Secretary',
  },
  {
    sn: 5,
    name: 'Ms. V. Vedavathi',
    status: 'Treasurer',
  },
  {
    sn: 6,
    name: 'Mr. Sreepathi Rao',
    status: 'Executive-Member',
  },
  {
    sn: 7,
    name: 'Mr. Sudharshan Rao',
    status: 'Exe-Member',
  },
  {
    sn: 8,
    name: 'Mr. Baskar Reddy',
    status: 'Exe-Member',
  },
]

export default function EducationalSocietyPage() {
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
      <Navbar activePage="educational-society" />

      <main className="flex-1">
        {/* 2. Hero Banner */}
        <PageHero
          breadcrumb="Educational Society"
          title="Educational Society —"
          titleHighlight="Managing Committee"
          imageSrc="/images/campus-building.jpg"
          imageAlt="JRS International School Campus"
        />

        {/* 3. Managing Committee Section with Lite Background */}
        <section
          id="committee"
          className="py-12 sm:py-16 bg-[#f8fafc] border-b border-slate-200/70 scroll-mt-20"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10" data-aos="fade-up">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#031c3f] tracking-tight">
                Managing Committee
              </h2>
            </div>

            {/* Simple Lite Table Card */}
            <div
              className="bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100/80 border-b border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-wider">
                      <th scope="col" className="py-3.5 px-4 sm:px-6 w-16 text-center">
                        S.N
                      </th>
                      <th scope="col" className="py-3.5 px-4 sm:px-6 min-w-[260px]">
                        Name of the Person
                      </th>
                      <th scope="col" className="py-3.5 px-4 sm:px-6 text-right min-w-[180px]">
                        Status / Designation
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-[14px] text-slate-700">
                    {managingMembers.map((member) => {
                      const isPresident = member.status.toLowerCase() === 'president'
                      const isVicePresident = member.status.toLowerCase().includes('vice')
                      const isSecretary = member.status.toLowerCase().includes('secretary')

                      return (
                        <tr
                          key={member.sn}
                          className={`transition-colors duration-150 hover:bg-slate-50/80 ${
                            isPresident ? 'bg-red-50/20' : ''
                          }`}
                        >
                          <td className="py-3 px-4 sm:px-6 text-center font-semibold text-slate-400">
                            {member.sn}
                          </td>
                          <td className="py-3 px-4 sm:px-6 font-semibold text-[#031c3f]">
                            <div className="flex items-center gap-2.5">
                              <UserCheck
                                className={`w-4 h-4 shrink-0 ${
                                  isPresident
                                  ? 'text-red-600'
                                  : isVicePresident
                                  ? 'text-blue-600'
                                  : 'text-slate-400'
                                }`}
                              />
                              <span>{member.name}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4 sm:px-6 text-right">
                            {isPresident ? (
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-700">
                                <Shield className="w-3 h-3" />
                                {member.status}
                              </span>
                            ) : isVicePresident ? (
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">
                                {member.status}
                              </span>
                            ) : isSecretary ? (
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-100">
                                {member.status}
                              </span>
                            ) : (
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
                                {member.status}
                              </span>
                            )}
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
