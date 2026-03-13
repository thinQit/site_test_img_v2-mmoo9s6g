export const dynamic = 'force-dynamic';

import HeroGradientBlob from "@/components/HeroGradientBlob";
import SectionContainer from "@/components/SectionContainer";
import ScrollReveal from "@/components/ScrollReveal";
import { Card } from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="animate-fade-in-up min-h-[80vh]">
        <HeroGradientBlob
          title="PRIVACY POLICY"
          subtitle="How Iron & Oak Fitness collects and uses information submitted through our website."
          primaryCta={{ label: "Contact Us", href: "/contact" }}
          secondaryCta={{ label: "Back Home", href: "/" }}
        />
      </section>

      <ScrollReveal>
        <SectionContainer className="animate-fade-in-up py-20 md:py-28">
          <Card className="card-hover border-border bg-card p-8">
            <h2 className="text-3xl font-bold">SUMMARY</h2>
            <p className="mt-4 text-muted-foreground">
              We collect only what we need to schedule sessions and respond to inquiries.
            </p>
          </Card>
        </SectionContainer>
      </ScrollReveal>
    </main>
  );
}
