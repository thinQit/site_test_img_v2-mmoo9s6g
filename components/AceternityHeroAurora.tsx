'use client'

import Link from 'next/link'
import { AuroraBackground } from '@/components/ui/backgrounds/aurora-background'
import { TextGenerateEffect } from '@/components/ui/text/text-generate-effect'
import { Button } from '@/components/ui/button'

interface AceternityHeroAuroraProps {
  headline?: string
  subheadline?: string
  imageSrc?: string
}

export default function AceternityHeroAurora({
  headline = 'BUILD RELENTLESS STRENGTH',
  subheadline = 'Personal coaching + high-intensity group classes at Iron & Oak Fitness.',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771578059/site-images/fitness/14037024.jpg',
}: Partial<AceternityHeroAuroraProps>) {
  return (
    <AuroraBackground className="min-h-[85vh]">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-center px-4 py-24 md:px-6">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#FF2E00]">Iron & Oak Fitness</p>
        <h1 className="max-w-4xl font-['Anton'] text-5xl uppercase leading-[0.95] text-white md:text-7xl">
          <TextGenerateEffect words={headline} />
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/85 md:text-lg">{subheadline}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild className="bg-blue-600 text-white hover:bg-blue-700">
            <Link href="#contact">Claim Free Week</Link>
          </Button>
          <Button asChild variant="outline" className="border-blue-400 text-blue-100 hover:bg-blue-500/10">
            <Link href="#classes">View Schedule</Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-4 text-sm text-white/90 md:grid-cols-3">
          <p>• Expert strength coaches</p>
          <p>• Small group sessions</p>
          <p>• Progress tracking every 4 weeks</p>
        </div>
      </div>
    </AuroraBackground>
  )
}
