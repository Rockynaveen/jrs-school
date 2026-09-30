'use client'

import React, { useState } from 'react'
import {
  GraduationCap,
  Sparkles,
  Award,
  ChevronDown,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react'

export default function AdmissionsCTA() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phoneNumber: '',
    emailAddress: '',
    grade: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="relative bg-[#081730] py-10 overflow-hidden text-white"
    >
      <span id="enquire" className="absolute -top-10" />
      <span id="admissions" className="absolute -top-10" />

      {/* Realistic Campus Building Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/contact-bg.jpg"
          alt="JRS International School Campus"
          className="w-full h-full object-cover object-[center_35%]"
        />
        {/* Deep Navy / Gradient Overlay for high readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#031c3f]/95 via-[#031c3f]/85 to-[#031c3f]/75 backdrop-blur-[1px]" />
      </div>

      {/* Dynamic Red Swoop Shape at the bottom right */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 sm:w-[500px] sm:h-[500px] bg-[#dc2626] rounded-full blur-0 opacity-80 z-0 pointer-events-none transform rotate-12" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading, Subtitle & 3 Feature Pills */}
          <div className="lg:col-span-7 space-y-6" data-aos="fade-right">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-400/10 border border-amber-400/20 mb-3">
                <MapPin className="w-3.5 h-3.5" />
                <span>Narapally, Hyderabad</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Admission Open for <br />
                <span className="text-[#facc15]">2026 – 2027</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-lg leading-relaxed">
                Give your child the right start for a brighter future. Contact our admissions desk or visit our campus today.
              </p>
            </div>

            {/* Quick Contact Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 px-3.5 py-1.5 rounded-full text-xs sm:text-sm text-slate-100 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#facc15]" />
                <span>+91 98765 43210</span>
              </a>
              <a
                href="mailto:info@jrsinternationalschool.com"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 px-3.5 py-1.5 rounded-full text-xs sm:text-sm text-slate-100 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#facc15]" />
                <span>info@jrsinternationalschool.com</span>
              </a>
            </div>

            {/* 3 Circular Feature Badges in a horizontal row */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
              {/* Badge 1 */}
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-md">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-200">
                  CBSE Curriculum
                </span>
              </div>

              {/* Badge 2 */}
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center shadow-md">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-200">
                  Holistic Development
                </span>
              </div>

              {/* Badge 3 */}
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-md">
                  <Award className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-200">
                  Experienced Faculty
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating White Enquiry Form Card */}
          <div className="lg:col-span-5" data-aos="fade-left">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-900 border border-slate-100/60">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
                Enquire for Admissions
              </h3>

              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">
                    Thank You for Enquiring!
                  </h4>
                  <p className="text-xs text-slate-500 max-w-xs mx-auto">
                    Our admissions team will contact you shortly with all details regarding Admissions 2026–2027.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-3 text-xs text-red-600 font-semibold hover:underline"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1: Student Name & Parent Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Student Name"
                        value={formData.studentName}
                        onChange={(e) =>
                          setFormData({ ...formData, studentName: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 bg-slate-50/50 placeholder-slate-400"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Parent Name"
                        value={formData.parentName}
                        onChange={(e) =>
                          setFormData({ ...formData, parentName: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 bg-slate-50/50 placeholder-slate-400"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone Number & Email Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <input
                        type="tel"
                        required
                        placeholder="Phone Number"
                        value={formData.phoneNumber}
                        onChange={(e) =>
                          setFormData({ ...formData, phoneNumber: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 bg-slate-50/50 placeholder-slate-400"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        value={formData.emailAddress}
                        onChange={(e) =>
                          setFormData({ ...formData, emailAddress: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 bg-slate-50/50 placeholder-slate-400"
                      />
                    </div>
                  </div>

                  {/* Row 3: Select Grade Dropdown */}
                  <div className="relative">
                    <select
                      required
                      value={formData.grade}
                      onChange={(e) =>
                        setFormData({ ...formData, grade: e.target.value })
                      }
                      className="w-full appearance-none px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 bg-slate-50/50 text-slate-700 pr-10 cursor-pointer"
                    >
                      <option value="" disabled>
                        Select Grade
                      </option>
                      <option value="Pre-Primary">Pre-Primary (Nursery, LKG, UKG)</option>
                      <option value="Grade 1-5">Primary School (Grades 1 – 5)</option>
                      <option value="Grade 6-8">Middle School (Grades 6 – 8)</option>
                      <option value="Grade 9-10">Secondary School (Grades 9 – 10)</option>
                      <option value="Grade 11-12">Senior Secondary (Grades 11 – 12)</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-full text-sm font-bold text-white bg-[#dc2626] hover:bg-[#b91c1c] active:scale-[0.99] shadow-lg shadow-red-600/30 transition-all duration-200"
                    >
                      Submit Enquiry
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
