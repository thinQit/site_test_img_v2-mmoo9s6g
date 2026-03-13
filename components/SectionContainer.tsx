"use client";

import { cn } from '@/lib/utils'

interface SectionContainerProps {
  id?: string
  className?: string
  children?: React.ReactNode
  containerWidth?: string
  sectionSpacing?: string
  angledDivider?: boolean
}

export default function SectionContainer({
  id = '',
  className = '',
  children,
  containerWidth = 'max-w-7xl',
  sectionSpacing = 'py-16 md:py-20',
  angledDivider = false,
}: Partial<SectionContainerProps>) {
  return (
    <section id={id} className={cn('relative', sectionSpacing, className)}>
      {angledDivider && (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-10 -skew-y-2 bg-[#1a1a1a]" />
      )}
      <div className={cn('mx-auto px-4 md:px-6', containerWidth)}>{children}</div>
    </section>
  )
}
