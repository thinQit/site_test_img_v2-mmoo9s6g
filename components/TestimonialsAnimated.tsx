"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

interface TestimonialItem {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface TestimonialsAnimatedProps {
  headline: string;
  subheadline?: string;
  testimonials: TestimonialItem[];
  autoplay?: boolean;
}

export default function TestimonialsAnimated({
  headline = "REAL MEMBERS. REAL RESULTS.",
  subheadline = "See how consistency, coaching, and community changed their lives.",
  testimonials = [
    {
      quote:
        "I dropped 18 pounds in 12 weeks and gained serious confidence. The coaches keep every session intense and focused.",
      name: "Alicia M.",
      designation: "Member • 8 Months",
      src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771578059/site-images/fitness/14037024.jpg",
    },
    {
      quote:
        "From my first class, I felt welcomed and challenged. The programming is smart, and I’m stronger than ever.",
      name: "Darnell T.",
      designation: "Member • 1 Year",
      src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771578051/site-images/fitness/13965875.jpg",
    },
    {
      quote:
        "I used to skip workouts. Now I train 5 days a week because every class pushes me with purpose.",
      name: "Priya R.",
      designation: "Member • 6 Months",
      src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771578051/site-images/fitness/10112284.jpg",
    },
  ],
  autoplay = true,
}: Partial<TestimonialsAnimatedProps>) {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="animate-fade-in-up mx-auto max-w-2xl text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl uppercase">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="animate-fade-in-up rounded-xl border border-border bg-card card-hover">
          <AnimatedTestimonials testimonials={testimonials} autoplay={autoplay} />
        </div>
      </div>
    </section>
  );
}
