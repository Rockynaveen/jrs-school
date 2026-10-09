'use client'

import React, { useState } from 'react'
import {
  GraduationCap,
  Sparkles,
  Award,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  AlertCircle,
  RotateCcw,
  ArrowRight,
  ShieldCheck,
  Clock,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Button } from '@/components/ui/button'

export default function AdmissionsCTA() {
  const [step, setStep] = useState<1 | 2>(1)
  const [submitted, setSubmitted] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  // Form state
  const [formData, setFormData] = useState({
    academicYear: '2026-2027',
    branch: 'JRS INTERNATIONAL SCHOOL',
    admissionType: 'DAY SCHOLAR',
    countryCode: '91',
    parentMobile: '',
    studentDob: '',
    grade: '',
    // Step 2 details
    studentName: '',
    parentName: '',
    emailAddress: '',
  })

  // Handle Step 1 ("Get" button)
  const handleGetDetails = (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg('')

    if (!formData.parentMobile.trim()) {
      setErrorMsg('Please enter parent mobile number.')
      return
    }
    if (formData.parentMobile.trim().length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.')
      return
    }
    if (!formData.studentDob) {
      setErrorMsg('Please select student date of birth.')
      return
    }
    if (!formData.grade || formData.grade === '-SELECT CLASS-') {
      setErrorMsg('Please select class / grade.')
      return
    }

    setStep(2)
  }

  // Handle Step 2 Final Submission
  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg('')

    if (!formData.studentName.trim() || !formData.parentName.trim()) {
      setErrorMsg('Please enter student name and parent name.')
      return
    }
    setSubmitted(true)
  }

  const resetForm = () => {
    setSubmitted(false)
    setStep(1)
    setErrorMsg('')
    setFormData({
      academicYear: '2026-2027',
      branch: 'JRS INTERNATIONAL SCHOOL',
      admissionType: 'DAY SCHOLAR',
      countryCode: '91',
      parentMobile: '',
      studentDob: '',
      grade: '',
      studentName: '',
      parentName: '',
      emailAddress: '',
    })
  }

  return (
    <section
      id="contact"
      className="relative bg-[#031c3f] py-10 overflow-hidden text-white scroll-mt-24"
    >
      <span id="enquire" className="absolute -top-24" />
      <span id="admissions" className="absolute -top-24" />
      <span id="enquiry-form" className="absolute -top-24" />
      <span id="enquiry" className="absolute -top-24" />
      <span id="enquire-now" className="absolute -top-24" />

      {/* Realistic Campus Building Background Image with Deep Navy Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/contact-bg.jpg"
          alt="JRS International School Campus"
          className="w-full h-full object-cover object-[center_35%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#031c3f]/95 via-[#031c3f]/90 to-[#031c3f]/80 backdrop-blur-[1px]" />
      </div>

      {/* Signature Red Corner Swoop Accent */}
      <div className="absolute -bottom-28 -right-28 w-96 h-96 sm:w-[520px] sm:h-[520px] bg-[#dc2626] rounded-full opacity-80 z-0 pointer-events-none transform rotate-12" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Heading, Info, Highlights */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5" data-aos="fade-right">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-400/10 border border-amber-400/20 mb-2.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>Narapally, Hyderabad</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Admission Open for <br />
                <span className="text-[#facc15]">2026 – 2027</span>
              </h2>
              <p className="text-slate-200 text-sm sm:text-[15px] mt-2.5 max-w-xl leading-relaxed">
                Give your child the right foundation for a brighter future. Apply early for personalized guidance, campus tour, and direct interaction with academic mentors.
              </p>
            </div>

            {/* Quick Contact Chips */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] text-slate-100 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#facc15]" />
                <span className="font-medium">+91 98765 43210</span>
              </a>
              <a
                href="mailto:info@jrsinternationalschool.com"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] text-slate-100 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#facc15]" />
                <span className="font-medium">info@jrsinternationalschool.com</span>
              </a>
            </div>

            {/* 3 Circular Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 max-w-xl">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-[13px] font-semibold text-white">CBSE Curriculum</h4>
                  <p className="text-[11px] sm:text-xs text-slate-300">National standards</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center shrink-0 shadow-md">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-[13px] font-semibold text-white">Holistic Growth</h4>
                  <p className="text-[11px] sm:text-xs text-slate-300">Arts, sports & STEM</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-md">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-[13px] font-semibold text-white">Top Faculty</h4>
                  <p className="text-[11px] sm:text-xs text-slate-300">Caring mentorship</p>
                </div>
              </div>
            </div>

            {/* Micro reassurance line */}
            <div className="flex items-center gap-5 pt-0.5 text-xs sm:text-[13px] text-slate-300">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                100% Confidential
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-300" />
                Quick 24-hr Response
              </span>
            </div>
          </div>

          {/* Right Column: Clean 2-Field-per-Row Enquiry Form Card */}
          <div className="lg:col-span-6" data-aos="fade-left">
            <Card className="bg-white rounded-2xl p-5 sm:p-6 shadow-xl text-slate-900 border border-slate-100">
              <CardContent className="p-0">
                
                {/* Form Title */}
                <div className="mb-3.5 pb-2.5 border-b border-slate-100">
                  <h3 className="text-lg sm:text-xl font-bold text-[#031c3f] tracking-tight">
                    Enquiry Form
                  </h3>
                  <p className="text-[13px] text-slate-500 mt-1">
                    Fill in the details below to enquire for admissions.
                  </p>
                </div>

                {submitted ? (
                  /* Success View */
                  <div className="py-8 text-center space-y-3">
                    <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">
                      Enquiry Submitted!
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
                      Thank you for your interest. Our admissions officer will contact you at{' '}
                      <span className="font-semibold text-slate-900">
                        +{formData.countryCode} {formData.parentMobile}
                      </span>{' '}
                      shortly.
                    </p>

                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-left text-xs text-slate-700 space-y-1.5 mt-3">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Academic Year:</span>
                        <span className="font-semibold">{formData.academicYear}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Class:</span>
                        <span className="font-semibold">{formData.grade}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Student:</span>
                        <span className="font-semibold">{formData.studentName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Admission Type:</span>
                        <span className="font-semibold">{formData.admissionType}</span>
                      </div>
                    </div>

                    <div className="pt-3">
                      <Button
                        type="button"
                        onClick={resetForm}
                        variant="outline"
                        className="rounded-full inline-flex items-center gap-2 text-xs"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        Submit Another Enquiry
                      </Button>
                    </div>
                  </div>
                ) : step === 1 ? (
                  /* Step 1: 2 Fields per Row Grid Layout */
                  <form onSubmit={handleGetDetails} className="space-y-4">
                    {errorMsg && (
                      <div className="p-2.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Row 1 - Field 1: Academic Year */}
                      <div className="space-y-1">
                        <Label htmlFor="academicYear" className="text-xs font-semibold text-slate-700">
                          Academic Year
                        </Label>
                        <Select
                          id="academicYear"
                          value={formData.academicYear}
                          onChange={(e) =>
                            setFormData({ ...formData, academicYear: e.target.value })
                          }
                          className="h-10 text-xs"
                        >
                          <option value="2026-2027">2026-2027</option>
                          <option value="2027-2028">2027-2028</option>
                        </Select>
                      </div>

                      {/* Row 1 - Field 2: Branch */}
                      <div className="space-y-1">
                        <Label htmlFor="branch" className="text-xs font-semibold text-slate-700">
                          Branch
                        </Label>
                        <Select
                          id="branch"
                          value={formData.branch}
                          onChange={(e) =>
                            setFormData({ ...formData, branch: e.target.value })
                          }
                          className="h-10 text-xs"
                        >
                          <option value="JRS INTERNATIONAL SCHOOL">
                            JRS INTERNATIONAL SCHOOL
                          </option>
                        </Select>
                      </div>

                      {/* Row 2 - Field 3: Admission Type */}
                      <div className="space-y-1">
                        <Label htmlFor="admissionType" className="text-xs font-semibold text-slate-700">
                          Admission Type
                        </Label>
                        <Select
                          id="admissionType"
                          value={formData.admissionType}
                          onChange={(e) =>
                            setFormData({ ...formData, admissionType: e.target.value })
                          }
                          className="h-10 text-xs"
                        >
                          <option value="DAY SCHOLAR">DAY SCHOLAR</option>
                          <option value="DAY BOARDING">DAY BOARDING</option>
                          <option value="RESIDENTIAL">RESIDENTIAL</option>
                        </Select>
                      </div>

                      {/* Row 2 - Field 4: Grade */}
                      <div className="space-y-1">
                        <Label htmlFor="grade" className="text-xs font-semibold text-slate-700">
                          Grade
                        </Label>
                        <Select
                          id="grade"
                          value={formData.grade}
                          onChange={(e) =>
                            setFormData({ ...formData, grade: e.target.value })
                          }
                          className="h-10 text-xs"
                          required
                        >
                          <option value="">-SELECT CLASS-</option>
                          <option value="Nursery">Nursery</option>
                          <option value="LKG">LKG</option>
                          <option value="UKG">UKG</option>
                          <option value="Class 1">Class 1</option>
                          <option value="Class 2">Class 2</option>
                          <option value="Class 3">Class 3</option>
                          <option value="Class 4">Class 4</option>
                          <option value="Class 5">Class 5</option>
                          <option value="Class 6">Class 6</option>
                          <option value="Class 7">Class 7</option>
                          <option value="Class 8">Class 8</option>
                          <option value="Class 9">Class 9</option>
                          <option value="Class 10">Class 10</option>
                          <option value="Class 11">Class 11</option>
                          <option value="Class 12">Class 12</option>
                        </Select>
                      </div>

                      {/* Row 3 - Field 5: Parent Mobile No (with Country Code) */}
                      <div className="space-y-1">
                        <Label htmlFor="parentMobile" className="text-xs font-semibold text-slate-700">
                          Parent Mobile No
                        </Label>
                        <div className="flex gap-1.5">
                          <div className="w-20 shrink-0">
                            <Select
                              id="countryCode"
                              value={formData.countryCode}
                              onChange={(e) =>
                                setFormData({ ...formData, countryCode: e.target.value })
                              }
                              className="h-10 text-xs px-2"
                            >
                              <option value="91">+91</option>
                              <option value="1">+1</option>
                              <option value="44">+44</option>
                              <option value="971">+971</option>
                              <option value="966">+966</option>
                            </Select>
                          </div>
                          <Input
                            id="parentMobile"
                            type="tel"
                            inputMode="numeric"
                            maxLength={10}
                            placeholder="Mobile No"
                            value={formData.parentMobile}
                            onChange={(e) => {
                              const val = e.target.value.replace(/\D/g, '')
                              setFormData({ ...formData, parentMobile: val })
                            }}
                            className="h-10 text-xs flex-1"
                            required
                          />
                        </div>
                      </div>

                      {/* Row 3 - Field 6: Student DOB */}
                      <div className="space-y-1">
                        <Label htmlFor="studentDob" className="text-xs font-semibold text-slate-700">
                          Student DOB
                        </Label>
                        <Input
                          id="studentDob"
                          type="date"
                          value={formData.studentDob}
                          onChange={(e) =>
                            setFormData({ ...formData, studentDob: e.target.value })
                          }
                          className="h-10 text-xs cursor-pointer"
                          required
                        />
                      </div>

                      {/* Row 4 - Full-width Action Button */}
                      <div className="sm:col-span-2 pt-2">
                        <Button
                          type="submit"
                          className="w-full h-11 bg-[#013aa3] hover:bg-[#012d80] text-white text-sm font-semibold rounded-lg shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-2"
                        >
                          <span>Get</span>
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </form>
                ) : (
                  /* Step 2: Student & Parent Details */
                  <form onSubmit={handleFinalSubmit} className="space-y-3.5">
                    {errorMsg && (
                      <div className="p-2.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    {/* Summary Pill */}
                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-2.5 flex items-center justify-between text-xs text-slate-700">
                      <div className="text-xs space-y-0.5">
                        <div>
                          <strong>Class:</strong> {formData.grade} • <strong>Year:</strong> {formData.academicYear}
                        </div>
                        <div>
                          <strong>Mobile:</strong> +{formData.countryCode} {formData.parentMobile}
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-xs font-semibold text-blue-700 hover:underline shrink-0 ml-2"
                      >
                        Edit
                      </button>
                    </div>

                    {/* Student Full Name */}
                    <div className="space-y-1">
                      <Label htmlFor="studentName" className="text-xs font-semibold text-slate-700">
                        Student Full Name *
                      </Label>
                      <Input
                        id="studentName"
                        type="text"
                        placeholder="Enter student full name"
                        value={formData.studentName}
                        onChange={(e) =>
                          setFormData({ ...formData, studentName: e.target.value })
                        }
                        className="h-10 text-xs"
                        required
                      />
                    </div>

                    {/* Parent / Guardian Name */}
                    <div className="space-y-1">
                      <Label htmlFor="parentName" className="text-xs font-semibold text-slate-700">
                        Parent / Guardian Name *
                      </Label>
                      <Input
                        id="parentName"
                        type="text"
                        placeholder="Enter parent name"
                        value={formData.parentName}
                        onChange={(e) =>
                          setFormData({ ...formData, parentName: e.target.value })
                        }
                        className="h-10 text-xs"
                        required
                      />
                    </div>

                    {/* Email Address */}
                    <div className="space-y-1">
                      <Label htmlFor="emailAddress" className="text-xs font-semibold text-slate-700">
                        Email Address (Optional)
                      </Label>
                      <Input
                        id="emailAddress"
                        type="email"
                        placeholder="parent@example.com"
                        value={formData.emailAddress}
                        onChange={(e) =>
                          setFormData({ ...formData, emailAddress: e.target.value })
                        }
                        className="h-10 text-xs"
                      />
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center justify-between gap-3 pt-2">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setStep(1)}
                        className="h-10 text-xs px-4"
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        className="h-10 text-xs px-6 bg-[#013aa3] hover:bg-[#012d80] text-white font-semibold"
                      >
                        Submit Enquiry
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  )
}
