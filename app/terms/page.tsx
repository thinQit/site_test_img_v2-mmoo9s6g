export const dynamic = 'force-dynamic';

import HeroLamp from "@/components/HeroLamp";
import SectionContainer from "@/components/SectionContainer";
import ScrollReveal from "@/components/ScrollReveal";
import { Card } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="animate-fade-in-up min-h-[80vh]">
        <HeroLamp
          title="TERMS"
          subtitle="Website terms for Iron & Oak Fitness. For membership agreements, please review the in-gym contract."
          primaryCta={{ label: "Contact Us", href: "/contact" }}
          secondaryCta={{ label: "Back Home", href: "/" }}
        />
      </section>

      <ScrollReveal>
        <SectionContainer className="animate-fade-in-up py-20 md:py-28">
          <Card className="card-hover border-border bg-card p-8">
            <h2 className="text-3xl font-bold">WEBSITE USE</h2>
            <p className="mt-4 text-muted-foreground">
              By using this website, you agree to the terms listed on this page.
            </p>
          </Card>
        </SectionContainer>
      </ScrollReveal>
    </main>
  );
}
