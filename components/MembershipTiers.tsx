"use client";

import MembershipTierCard from '@/components/MembershipTierCard'

export default function MembershipTiers() {
  return (
    <section id="pricing" className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="font-['Anton'] text-4xl uppercase text-white md:text-5xl">Membership Options</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <MembershipTierCard name="Starter" price="$99" features={['3 classes/week', '1 onboarding session']} />
          <MembershipTierCard highlighted name="Performance" price="$149" features={['Unlimited classes', 'Monthly coach check-in', 'Nutrition basics']} />
          <MembershipTierCard name="Elite Coaching" price="$249" features={['Unlimited classes', 'Weekly 1:1 coaching', 'Custom plan updates']} />
        </div>
        <p className="mt-6 text-sm text-white/70">Drop-in classes available at $29/session. No long-term contracts required.</p>
      </div>
    </section>
  )
}
