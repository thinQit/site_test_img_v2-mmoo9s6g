"use client";

interface HeroGradientBlobProps {
  title?: string
  description?: string
  imageSrc?: string
}

export default function HeroGradientBlob({
  title = 'PRIVACY & MEMBER DATA',
  description = 'We protect your information and use secure systems to manage memberships, billing, and progress data.',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577710/site-images/hero-backgrounds/12981879.jpg',
}: Partial<HeroGradientBlobProps>) {
  return (
    <section className="relative overflow-hidden bg-black py-20 text-white">
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#FF2E00]/30 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-4 text-center md:px-6">
        <h1 className="font-['Anton'] text-4xl uppercase md:text-6xl">{title}</h1>
        <p className="mt-4 text-white/80">{description}</p>
      </div>
    </section>
  )
}
