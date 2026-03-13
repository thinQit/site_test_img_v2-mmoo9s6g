"use client";

import Image from 'next/image'

interface HeroSpotlightProps {
  title?: string
  description?: string
  imageSrc?: string
}

export default function HeroSpotlight({
  title = 'COACHING THAT MEETS YOU WHERE YOU ARE',
  description = 'Whether you are rebuilding confidence or chasing your next PR, our coaches build a plan around your body, schedule, and goals.',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771578051/site-images/fitness/13965875.jpg',
}: Partial<HeroSpotlightProps>) {
  return (
    <section className="bg-black py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2 md:px-6">
        <div className="flex flex-col justify-center">
          <h1 className="font-['Anton'] text-4xl uppercase text-white md:text-6xl">{title}</h1>
          <p className="mt-4 text-white/80">{description}</p>
        </div>
        <div className="overflow-hidden rounded-xl border border-white/10">
          <Image src={imageSrc} alt={title} width={1200} height={800} className="h-full w-full object-cover" unoptimized />
        </div>
      </div>
    </section>
  )
}
