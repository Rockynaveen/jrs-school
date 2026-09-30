'use client'

import React, { useState, useEffect, useRef } from 'react'
import { GraduationCap, Users, Award, Trophy } from 'lucide-react'

interface StatItem {
  value: number
  suffix?: string
  prefix?: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}

const stats: StatItem[] = [
  {
    value: 2021,
    suffix: '',
    label: 'Year of Establishment',
    icon: GraduationCap,
  },
  {
    value: 1000,
    suffix: '+',
    label: 'Happy Students',
    icon: Users,
  },
  {
    value: 50,
    suffix: '+',
    label: 'Experienced Faculty',
    icon: Award,
  },
  {
    value: 100,
    suffix: '+',
    label: 'Co-curricular Activities',
    icon: Trophy,
  },
]

function CountUpNumber({
  value,
  suffix = '',
  prefix = '',
  start = false,
  duration = 2000,
}: {
  value: number
  suffix?: string
  prefix?: string
  start: boolean
  duration?: number
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return

    let startTime: number | null = null
    let animationFrameId: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic: fast start, soft and graceful finish
      const easedProgress = 1 - Math.pow(1 - progress, 3)
      const currentVal = Math.floor(easedProgress * value)
      setCount(currentVal)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate)
      } else {
        setCount(value)
      }
    }

    animationFrameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrameId)
  }, [start, value, duration])

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}

export default function StatsBar() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#081730] py-10 border-y border-blue-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 text-center">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div
                key={idx}
                className="flex flex-col items-center justify-center space-y-2 group"
              >
                <div className="text-amber-400 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 md:w-9 md:h-9" />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold text-white tracking-tight tabular-nums">
                  <CountUpNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    start={isVisible}
                    duration={2000}
                  />
                </div>
                <div className="text-xs sm:text-[13px] text-slate-300 font-medium">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
