export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import SectionContainer from "@/components/SectionContainer";
import TrainerCardsGrid from "@/components/TrainerCardsGrid";
import CTABand from "@/components/CTABand";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="animate-fade-in-up min-h-[80vh]">
        <HeroSpotlight
          title="A COACHING-FIRST GYM FOR PEOPLE WHO WANT TO GET STRONG"
          subtitle="Iron & Oak was built to feel premium and perform like a training facility."
          primaryCta={{ label: "Meet the Coaches", href: "/about#team" }}
          secondaryCta={{ label: "Book a Free Intro", href: "/contact" }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/v1771578064/site-images/fitness/11385974.jpg"
        />
      </section>

      <ScrollReveal>
        <SectionContainer className="animate-fade-in-up py-20 md:py-28 bg-muted/40">
          <TrainerCardsGrid
            headline="THE TEAM"
            subheadline="Certified coaches with a simple goal: help you train better than you would alone."
            primaryCta={{ label: "Start Coaching", href: "/contact" }}
            secondaryCta={{ label: "Questions? Contact Us", href: "/contact" }}
            trainers={[
              { name: "Maya Torres", role: "Head Coach • Strength & Conditioning", imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/v1771578091/site-images/fitness/13896897.jpg" },
              { name: "Jordan Kim", role: "Coach • Powerbuilding", imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/v1771578078/site-images/fitness/13993019.jpg" },
              { name: "Elena Rossi", role: "Coach • Mobility & Performance", imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/v1771578055/site-images/fitness/13278075.jpg" },
            ]}
          />
        </SectionContainer>
      </ScrollReveal>

      <ScrollReveal>
        <SectionContainer className="animate-fade-in-up py-20 md:py-28">
          <CTABand
            headline="READY TO TRAIN WITH A PLAN?"
            subheadline="Book a free intro session and we’ll match you to the right classes and membership."
            primaryCta={{ label: "Book Free Intro", href: "/contact" }}
            secondaryCta={{ label: "See Pricing", href: "/#pricing" }}
          />
        </SectionContainer>
      </ScrollReveal>
    </main>
  );
}
