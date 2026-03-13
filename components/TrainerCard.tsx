"use client";

import Image from 'next/image'
import { Card } from '@/components/ui/card'

interface TrainerCardProps {
  name?: string
  title?: string
  bio?: string
  specialties?: string[]
  credentials?: string[]
  imageSrc?: string
}

export default function TrainerCard({
  name = 'Coach Alex Rivera',
  title = 'Strength & Performance Coach',
  bio = 'Alex helps members build durable strength with structured progressions and intentional coaching.',
  specialties = ['Barbell Technique', 'Mobility', 'Hypertrophy'],
  credentials = ['CSCS', 'USAW-L1'],
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/v1771578072/site-images/fitness/13562693.jpg',
}: Partial<TrainerCardProps>) {
  return (
    <Card className="overflow-hidden border-white/15 bg-[#151515] text-white">
      <Image src={imageSrc} alt={name} width={1200} height={800} className="h-56 w-full object-cover" unoptimized />
      <div className="p-5">
        <h3 className="font-['Anton'] text-2xl uppercase">{name}</h3>
        <p className="text-sm text-[#FF2E00]">{title}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {credentials.map((c) => <span key={c} className="rounded bg-white/10 px-2 py-1 text-xs">{c}</span>)}
        </div>
        <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-white/80">
          {specialties.map((s) => <li key={s}>{s}</li>)}
        </ul>
        <p className="mt-3 text-sm text-white/75">{bio}</p>
      </div>
    </Card>
  )
}
