"use client";

import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface HeroWavesProps {
  title?: string
  subtitle?: string
  imageSrc?: string
}

export default function HeroWaves({
  title = 'LET’S TALK ABOUT YOUR TRAINING GOALS',
  subtitle = 'Book a free intro session and discover the right path for your body and lifestyle.',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771578053/site-images/fitness/13018401.jpg',
}: Partial<HeroWavesProps>) {
  return (
    <section className="relative overflow-hidden bg-[#111111] py-16 text-white">
      <div className="absolute inset-x-0 bottom-0 h-20 bg-[radial-gradient(circle_at_20%_120%,#FF2E00_0%,transparent_60%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 md:grid-cols-2 md:px-6">
        <div>
          <h1 className="font-['Anton'] text-4xl uppercase md:text-6xl">{title}</h1>
          <p className="mt-4 text-white/80">{subtitle}</p>
          <Button className="mt-6 bg-[#FF2E00] hover:bg-[#e12800]">Book Intro</Button>
        </div>
        <Image src={imageSrc} alt={title} width={1200} height={800} className="rounded-xl object-cover" unoptimized />
      </div>
    </section>
  )
}
