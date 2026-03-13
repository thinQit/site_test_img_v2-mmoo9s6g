"use client";

import TrainerCard from '@/components/TrainerCard'

interface TrainerCardsGridProps {
  trainers?: {
    name: string
    title: string
    bio: string
    specialties: string[]
    credentials: string[]
    imageSrc: string
  }[]
}

export default function TrainerCardsGrid({
  trainers = [
    {
      name: 'Coach Alex Rivera',
      title: 'Strength & Performance Coach',
      bio: 'Focused on technique-first training and measurable progression.',
      specialties: ['Barbell', 'Athletic Strength'],
      credentials: ['CSCS'],
      imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/v1771578092/site-images/fitness/13106581.jpg',
    },
    {
      name: 'Coach Nina Brooks',
      title: 'Group Training Lead',
      bio: 'Builds high-energy classes that scale to every fitness level.',
      specialties: ['Conditioning', 'Movement Quality'],
      credentials: ['NASM-CPT'],
      imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/v1771578051/site-images/fitness/13965875.jpg',
    },
    {
      name: 'Coach Marcus Lee',
      title: 'Personal Coaching Specialist',
      bio: 'Works one-on-one to create personalized plans and accountability.',
      specialties: ['Fat Loss', 'Strength Foundations'],
      credentials: ['PN1', 'USAW-L1'],
      imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/v1771578062/site-images/fitness/13621287.jpg',
    },
  ],
}: Partial<TrainerCardsGridProps>) {
  return (
    <section id="trainers" className="bg-black py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="font-['Anton'] text-4xl uppercase text-white md:text-5xl">Meet Your Coaches</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {trainers.map((trainer) => (
            <div key={trainer.name} className="transition hover:-translate-y-1 hover:border-[#FF2E00]">
              <TrainerCard {...trainer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
