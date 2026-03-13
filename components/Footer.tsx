"use client";

import Link from 'next/link'

interface FooterProps {
  brand: string
  description: string
  columns: {
    title: string
    links: { label: string; href: string }[]
  }[]
  copyright: string
}

export default function Footer({
  brand = 'IRON & OAK FITNESS',
  description = 'Premium strength training. Real coaching. Real results.',
  columns = [],
  copyright = ''
}: Partial<FooterProps>) {
  return (
    <footer className="border-t border-white/10 bg-[#111111] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div>
          <h3 className="font-['Anton'] text-2xl uppercase">{brand}</h3>
          <p className="mt-3 text-sm text-white/75">{description}</p>
        </div>

        {columns.map((col, i) => (
          <div key={col.title || i}>
            <h4 className="text-sm font-semibold uppercase text-[#FF2E00]">{col.title}</h4>
            <div className="mt-3 space-y-2 text-sm text-white/80">
              {col.links.map((l) =>
                l.href.startsWith('http') || l.href.startsWith('mailto') || l.href.startsWith('tel') ? (
                  <a
                    key={l.label}
                    href={l.href}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="block text-white/80 hover:text-white"
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link key={l.label} href={l.href} className="block text-white/80 hover:text-white">
                    {l.label}
                  </Link>
                )
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-[#FF2E00]/40 py-4 text-center text-xs text-white/60">
        {copyright ||
          `© ${new Date().getFullYear()} ${brand}. All rights reserved.`}
      </div>
    </footer>
  )
}
