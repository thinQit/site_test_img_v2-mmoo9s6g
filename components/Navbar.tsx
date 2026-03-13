'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Dumbbell } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface NavbarProps {
  logo: string
  navItems: { label: string; href: string }[]
  ctaLabel: string
  ctaHref: string
}

export default function Navbar({
  logo = 'IRON & OAK FITNESS',
  navItems = [
    { label: 'Home', href: '/' },
    { label: 'Classes', href: '/#classes' },
    { label: 'Coaches', href: '/#trainers' },
    { label: 'Memberships', href: '/#pricing' },
    { label: 'Results', href: '/#transformations' },
    { label: 'Contact', href: '/contact' },
  ],
  ctaLabel = 'START FREE WEEK',
  ctaHref = '/contact',
}: Partial<NavbarProps>) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-white">
          <Dumbbell className="h-5 w-5 text-[#FF2E00]" />
          <span className="font-['Anton'] text-xl tracking-wide">{logo}</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-semibold tracking-wide text-white/90 transition hover:text-[#FF2E00]"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="bg-[#FF2E00] font-semibold text-white hover:bg-[#e12800]">
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle Menu"
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        className={cn(
          'overflow-hidden border-t border-white/10 bg-black transition-all md:hidden',
          open ? 'max-h-96' : 'max-h-0'
        )}
      >
        <div className="space-y-3 px-4 py-4">
          {navItems.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-semibold tracking-wide text-white/90 hover:text-[#FF2E00]"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="w-full bg-[#FF2E00] text-white hover:bg-[#e12800]">
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
