"use client";

import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface MembershipTierCardProps {
  name?: string
  price?: string
  period?: string
  features?: string[]
  highlighted?: boolean
}

export default function MembershipTierCard({
  name = 'ESSENTIAL',
  price = '$149',
  period = '/month',
  features = ['Unlimited group classes', 'Progress tracking', 'Open gym access'],
  highlighted = false,
}: Partial<MembershipTierCardProps>) {
  return (
    <Card className={cn('border-white/15 bg-[#151515] p-6 text-white', highlighted && 'border-[#FF2E00] shadow-[0_0_0_1px_#FF2E00]')}>
      <h3 className="font-['Anton'] text-3xl uppercase">{name}</h3>
      <p className="mt-2 text-4xl font-bold">{price}<span className="text-base text-white/70">{period}</span></p>
      <ul className="mt-4 space-y-2 text-sm text-white/85">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-[#FF2E00]" /> {f}</li>
        ))}
      </ul>
      <Button className={cn('mt-6 w-full', highlighted ? 'bg-[#FF2E00] hover:bg-[#e12800]' : 'bg-white text-black hover:bg-white/90')}>
        Join Now
      </Button>
    </Card>
  )
}
