'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <h2 className="font-['Anton'] text-4xl uppercase text-white md:text-5xl">Book Your Free Intro</h2>
        <form
          className="mt-6 space-y-4 rounded-xl border border-white/10 bg-[#151515] p-6"
          onSubmit={(e) => {
            e.preventDefault()
            setSubmitted(true)
          }}
        >
          <Input required placeholder="Full Name" className="bg-black text-white" />
          <Input required type="email" placeholder="Email" className="bg-black text-white" />
          <Input required placeholder="Phone" className="bg-black text-white" />
          <Input placeholder="Your Goal (Strength, Fat Loss, Performance)" className="bg-black text-white" />
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">Submit</Button>
          {submitted && <p className="text-sm text-green-400">Thanks! We will reach out shortly.</p>}
        </form>
      </div>
    </section>
  )
}
