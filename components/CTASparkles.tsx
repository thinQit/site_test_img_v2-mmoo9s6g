'use client'

import { Button } from '@/components/ui/button'

export default function CTASparkles() {
  return (
    <section className="relative overflow-hidden bg-[#FF2E00] py-14 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="font-['Anton'] text-4xl uppercase md:text-5xl">Start Your Free Week</h2>
        <p className="mt-3 max-w-2xl">Includes movement assessment, coached sessions, and a personalized plan. Bring training shoes and water.</p>
        <Button className="mt-6 bg-blue-600 text-white hover:bg-blue-700">Claim Trial</Button>
      </div>
    </section>
  )
}
