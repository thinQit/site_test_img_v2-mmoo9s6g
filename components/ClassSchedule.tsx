'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

interface ClassScheduleProps {
  days?: { day: string; classes: { time: string; name: string; type: string }[] }[]
}

export default function ClassSchedule({
  days = [
    { day: 'MON', classes: [{ time: '6:00 AM', name: 'Strength Foundations', type: 'Strength' }, { time: '6:00 PM', name: 'Barbell Flow', type: 'Group' }] },
    { day: 'TUE', classes: [{ time: '7:00 AM', name: 'Power Circuit', type: 'Conditioning' }, { time: '5:30 PM', name: 'Coach-Led Lift', type: 'Strength' }] },
    { day: 'WED', classes: [{ time: '6:00 AM', name: 'Athlete Engine', type: 'Conditioning' }, { time: '6:00 PM', name: 'Lower Body Lab', type: 'Strength' }] },
  ],
}: Partial<ClassScheduleProps>) {
  const [active, setActive] = useState(days[0]?.day || 'MON')

  return (
    <section id="classes" className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="font-['Anton'] text-4xl uppercase text-white md:text-5xl">Class Schedule</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {days.map((d) => (
            <button
              key={d.day}
              onClick={() => setActive(d.day)}
              className={active === d.day ? 'rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700' : 'rounded-lg border border-blue-500/40 px-4 py-2 text-sm text-blue-100 hover:bg-blue-500/10'}
            >
              {d.day}
            </button>
          ))}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {days.find((d) => d.day === active)?.classes.map((item) => (
            <Card key={item.time + item.name} className="border-white/15 bg-[#1a1a1a] p-4 text-white">
              <p className="text-sm text-[#FF2E00]">{item.time}</p>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-white/70">{item.type}</p>
            </Card>
          ))}
        </div>
        <Button className="mt-6 bg-blue-600 hover:bg-blue-700">Reserve Spot</Button>
      </div>
    </section>
  )
}
