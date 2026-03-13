"use client";

import { Button } from '@/components/ui/button'

interface CTABandProps {
  title?: string
  bullets?: string[]
}

export default function CTABand({
  title = 'READY TO TRAIN WITH PURPOSE?',
  bullets = ['Personalized coaching', 'Flexible memberships', 'Supportive community'],
}: Partial<CTABandProps>) {
  return (
    <section className="border-y border-white/15 bg-black py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center md:px-6">
        <div>
          <h3 className="font-['Anton'] text-3xl uppercase">{title}</h3>
          <ul className="mt-2 flex flex-wrap gap-4 text-sm text-white/80">
            {bullets.map((b) => <li key={b}>• {b}</li>)}
          </ul>
        </div>
        <div className="flex gap-3">
          <Button className="bg-[#FF2E00] hover:bg-[#e12800]">Book Intro</Button>
          <Button variant="outline" className="border-white/40 text-white">View Plans</Button>
        </div>
      </div>
    </section>
  )
}
