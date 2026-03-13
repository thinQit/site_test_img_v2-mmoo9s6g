"use client";

interface HeroLampProps {
  title?: string
  description?: string
  imageSrc?: string
}

export default function HeroLamp({
  title = 'TERMS OF SERVICE',
  description = 'Clear terms for memberships, billing, cancellations, and facility policies at Iron & Oak Fitness.',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577705/site-images/hero-backgrounds/12981881.jpg',
}: Partial<HeroLampProps>) {
  return (
    <section className="relative bg-[#111111] py-20 text-white">
      <div className="absolute left-1/2 top-0 h-40 w-2 -translate-x-1/2 bg-white/20" />
      <div className="absolute left-1/2 top-36 h-48 w-48 -translate-x-1/2 rounded-full bg-[#FF2E00]/20 blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-4 text-center md:px-6">
        <h1 className="font-['Anton'] text-4xl uppercase md:text-6xl">{title}</h1>
        <p className="mt-4 text-white/80">{description}</p>
      </div>
    </section>
  )
}
