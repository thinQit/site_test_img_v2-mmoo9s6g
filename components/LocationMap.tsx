"use client";

export default function LocationMap() {
  return (
    <section className="bg-[#111111] py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 text-white md:grid-cols-2 md:px-6">
        <div>
          <h2 className="font-['Anton'] text-4xl uppercase md:text-5xl">Find Iron & Oak</h2>
          <p className="mt-3 text-white/80">128 Foundry Ave, Denver, CO 80204</p>
          <p className="mt-2 text-sm text-white/70">Parking: Free lot behind building + street parking after 6PM.</p>
        </div>
        <iframe
          title="Iron & Oak Fitness Map"
          src="https://www.google.com/maps?q=Denver%20CO&output=embed"
          className="h-72 w-full rounded-xl border border-white/10 md:h-96"
          loading="lazy"
        />
      </div>
    </section>
  )
}
