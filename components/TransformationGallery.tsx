'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface TransformationGalleryProps {
  images?: string[]
}

export default function TransformationGallery({
  images = [
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771578051/site-images/fitness/10112284.jpg',
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771578079/site-images/fitness/13947314.jpg',
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771578086/site-images/fitness/13106584.jpg',
  ],
}: Partial<TransformationGalleryProps>) {
  const [index, setIndex] = useState(0)

  return (
    <section id="transformations" className="bg-[#111111] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="font-['Anton'] text-4xl uppercase text-white md:text-5xl">Member Transformations</h2>
        <div className="mt-8 md:hidden">
          <Image src={images[index]} alt="Transformation result" width={1200} height={800} className="rounded-xl object-cover" unoptimized />
          <div className="mt-3 flex gap-2">
            <Button variant="outline" className="border-white/40 text-white" onClick={() => setIndex((index - 1 + images.length) % images.length)}>Prev</Button>
            <Button className="bg-[#FF2E00] hover:bg-[#e12800]" onClick={() => setIndex((index + 1) % images.length)}>Next</Button>
          </div>
        </div>
        <div className="hidden gap-4 md:grid md:grid-cols-3">
          {images.map((src) => (
            <Image key={src} src={src} alt="Transformation result" width={1200} height={800} className="rounded-xl object-cover" unoptimized />
          ))}
        </div>
      </div>
    </section>
  )
}
