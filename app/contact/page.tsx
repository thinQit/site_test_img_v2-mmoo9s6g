export const dynamic = 'force-dynamic';

import HeroWaves from "@/components/HeroWaves";
import ContactForm from "@/components/ContactForm";
import LocationMap from "@/components/LocationMap";
import CTABand from "@/components/CTABand";
import SectionContainer from "@/components/SectionContainer";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="animate-fade-in-up min-h-[80vh]">
        <HeroWaves
          title="BOOK YOUR FREE INTRO SESSION"
          subtitle="Tell us your goals and training history. We’ll recommend the best starting point."
          primaryCta={{ label: "Call (512) 555-0198", href: "tel:+15125550198" }}
          secondaryCta={{ label: "Email Us", href: "mailto:hello@ironandoakfitness.com" }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771578051/site-images/fitness/10112284.jpg"
        />
      </section>

      <ScrollReveal>
        <SectionContainer className="animate-fade-in-up py-20 md:py-28">
          <ContactForm
            headline="CONTACT IRON & OAK"
            subheadline="Prefer a message? Send your details and we’ll get you scheduled."
            contactInfo={[
              { icon: "Mail", label: "Email", value: "hello@ironandoakfitness.com" },
              { icon: "Phone", label: "Phone", value: "(512) 555-0198" },
              { icon: "MapPin", label: "Address", value: "214 Foundry Ave, Austin, TX 78701" },
            ]}
          />
        </SectionContainer>
      </ScrollReveal>

      <ScrollReveal>
        <SectionContainer className="animate-fade-in-up py-20 md:py-28 bg-muted/40">
          <LocationMap
            headline="VISIT THE GYM"
            subheadline="We’re downtown with easy parking after 6pm and on weekends."
            primaryCta={{ label: "Get Directions", href: "https://maps.google.com/?q=214+Foundry+Ave,+Austin,+TX+78701" }}
            secondaryCta={{ label: "See Hours", href: "/#hero" }}
            address="214 Foundry Ave, Austin, TX 78701"
            mapEmbedUrl="https://www.google.com/maps?q=214+Foundry+Ave,+Austin,+TX+78701&output=embed"
          />
        </SectionContainer>
      </ScrollReveal>

      <ScrollReveal>
        <SectionContainer className="animate-fade-in-up py-20 md:py-28">
          <CTABand
            headline="YOUR FIRST WEEK CAN START THIS WEEK"
            subheadline="Claim your free trial week and we’ll help you pick the right sessions for your schedule."
            primaryCta={{ label: "Claim Free Trial", href: "/contact" }}
            secondaryCta={{ label: "See Pricing", href: "/#pricing" }}
          />
        </SectionContainer>
      </ScrollReveal>
    </main>
  );
}
