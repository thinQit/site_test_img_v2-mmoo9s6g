'use client'

import { useEffect, useState } from 'react'

export default function StatsCounter() {
  const [counts, setCounts] = useState([0, 0, 0])

  useEffect(() => {
    const targets = [1200, 96, 14]
    const timer = setInterval(() => {
      setCounts((prev) => prev.map((v, i) => (v < targets[i] ? v + Math.ceil(targets[i] / 30) : targets[i])))
    }, 40)
    setTimeout(() => clearInterval(timer), 1400)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 text-white md:grid-cols-3 md:px-6">
        <div><p className="font-['Anton'] text-5xl text-[#FF2E00]">{counts[0]}+</p><p className="mt-2">Sessions coached monthly</p></div>
        <div><p className="font-['Anton'] text-5xl text-[#FF2E00]">{counts[1]}%</p><p className="mt-2">Members report stronger confidence</p></div>
        <div><p className="font-['Anton'] text-5xl text-[#FF2E00]">{counts[2]}</p><p className="mt-2">Expert coaches on staff</p></div>
      </div>
    </section>
  )
}
