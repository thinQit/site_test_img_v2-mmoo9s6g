export const dynamic = 'force-dynamic';

import AceternityHeroAurora from "@/components/AceternityHeroAurora";
import ClassSchedule from "@/components/ClassSchedule";
import TrainerCardsGrid from "@/components/TrainerCardsGrid";
import MembershipTiers from "@/components/MembershipTiers";
import TransformationGallery from "@/components/TransformationGallery";
import StatsCounter from "@/components/StatsCounter";
import CTASparkles from "@/components/CTASparkles";
import TestimonialsAnimated from "@/components/TestimonialsAnimated";
import SectionContainer from "@/components/SectionContainer";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <section id="hero" className="animate-fade-in-up min-h-[80vh]">
        <AceternityHeroAurora
          headline="BUILD REAL STRENGTH—WITH COACHING THAT SHOWS UP."
          subheadline="Iron & Oak Fitness is a premium strength gym for people who want measurable progress: personal coaching, small-group lifting, and a class schedule built around performance—not gimmicks."
          primaryCta={{ label: "Book a Free Intro Session", href: "/contact" }}
          secondaryCta={{ label: "View Class Schedule", href: "#classes" }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771578059/site-images/fitness/14037024.jpg"
          quickFacts={[
            { label: "Location", value: "214 Foundry Ave, Austin, TX 78701" },
            { label: "Hours", value: "Mon–Fri 5:30am–8:30pm • Sat 8:00am–2:00pm • Sun 9:00am–1:00pm" },
            { label: "Phone", value: "(512) 555-0198" },
          ]}
          trustBadges={["Coach-led sessions", "Beginner-friendly strength", "Small class sizes (max 12)"]}
        />
      </section>

      <ScrollReveal>
        <SectionContainer className="animate-fade-in-up py-20 md:py-28" id="classes">
          <ClassSchedule
            headline="CLASS SCHEDULE BUILT FOR CONSISTENCY"
            subheadline="Strength-focused sessions with clear progressions. Show up, train hard, recover smarter."
            primaryCta={{ label: "Reserve Your Spot", href: "/contact" }}
            secondaryCta={{ label: "See Memberships", href: "#pricing" }}
            note="All classes are coach-led. First-time visitors: arrive 10 minutes early for a quick movement screen."
            weeklySchedule={[]}
            classTypes={[]}
          />
        </SectionContainer>
      </ScrollReveal>

      <ScrollReveal>
        <SectionContainer className="animate-fade-in-up py-20 md:py-28 bg-muted/40" id="trainers">
          <TrainerCardsGrid
            headline="COACHES WHO COACH—NOT JUST COUNT REPS"
            subheadline="Every session is led by a certified coach who cares about form, progression, and keeping you training for the long run."
            primaryCta={{ label: "Meet Us in Person", href: "/about" }}
            secondaryCta={{ label: "Start Coaching", href: "/contact" }}
            trainers={[
              {
                name: "Maya Torres",
                role: "Head Coach • Strength & Conditioning",
                imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577321/site-images/team-people/1181622.jpg",
                bio: "Maya builds strong lifters from the ground up—clean technique, clear goals, and a plan you can stick to.",
              },
              {
                name: "Jordan Kim",
                role: "Coach • Powerbuilding",
                imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577358/site-images/team-people/1181401.jpg",
                bio: "Jordan blends strength and aesthetics with smart volume and joint-friendly progressions.",
              },
              {
                name: "Elena Rossi",
                role: "Coach • Mobility & Performance",
                imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577370/site-images/team-people/1181405.jpg",
                bio: "Elena keeps athletes moving well so they can train hard—without feeling beat up.",
              },
            ]}
          />
        </SectionContainer>
      </ScrollReveal>

      <ScrollReveal>
        <SectionContainer className="animate-fade-in-up py-20 md:py-28" id="pricing">
          <MembershipTiers
            headline="MEMBERSHIPS THAT MATCH YOUR GOALS"
            subheadline="Choose your training cadence. Upgrade anytime as your goals evolve."
            primaryCta={{ label: "Claim a Free Trial Week", href: "/contact" }}
            secondaryCta={{ label: "Questions? Contact Us", href: "#contact" }}
            tiers={[]}
            finePrint="All memberships include onboarding, movement screen, and access to our member app for scheduling. Taxes included. Cancel anytime with 14 days notice."
          />
        </SectionContainer>
      </ScrollReveal>

      <ScrollReveal>
        <SectionContainer className="animate-fade-in-up py-20 md:py-28 bg-muted/40" id="transformations">
          <TransformationGallery
            headline="REAL PEOPLE. REAL PROGRESS."
            subheadline="Strength changes everything—confidence, posture, energy, and performance."
            primaryCta={{ label: "Start Your Transformation", href: "/contact" }}
            secondaryCta={{ label: "Read Testimonials", href: "#testimonials" }}
            images={[
              { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771578086/site-images/fitness/13106584.jpg", alt: "Member transformation 1", caption: "12 weeks • +65 lb deadlift" },
              { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771578058/site-images/fitness/1103244.jpg", alt: "Member transformation 2", caption: "16 weeks • First strict pull-up" },
              { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771578078/site-images/fitness/10475451.jpg", alt: "Member transformation 3", caption: "10 weeks • +40 lb squat" },
              { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771578064/site-images/fitness/11385974.jpg", alt: "Member training progress", caption: "Consistent coaching wins" },
            ]}
          />
        </SectionContainer>
      </ScrollReveal>

      <ScrollReveal>
        <SectionContainer className="animate-fade-in-up py-20 md:py-28">
          <StatsCounter
            headline="THE IRON & OAK DIFFERENCE—BY THE NUMBERS"
            subheadline="A premium gym experience with a coaching-first culture."
            stats={[
              { value: "12", label: "Max class size" },
              { value: "3+", label: "Avg. member strength PRs per quarter" },
              { value: "40+", label: "Coached sessions weekly" },
              { value: "86%", label: "Member retention (12 mo.)" },
            ]}
          />
        </SectionContainer>
      </ScrollReveal>

      <ScrollReveal>
        <SectionContainer className="animate-fade-in-up py-20 md:py-28 bg-muted/40">
          <CTASparkles
            title="GET A FREE TRIAL WEEK—ON US"
            subtitle="One week of coached classes + a 1:1 intro session to set goals, assess movement, and build your plan."
            primaryCta={{ label: "Claim Free Trial Week", href: "/contact" }}
            secondaryCta={{ label: "Call (512) 555-0198", href: "tel:+15125550198" }}
          />
        </SectionContainer>
      </ScrollReveal>

      <ScrollReveal>
        <SectionContainer className="animate-fade-in-up py-20 md:py-28" id="testimonials">
          <TestimonialsAnimated
            title="WHAT MEMBERS SAY AFTER 30 DAYS"
            subtitle="Coaching, community, and a plan that actually works."
            autoplay
            testimonials={[
              {
                quote:
                  "I’ve tried big-box gyms for years and never stuck with it. Here, the coaching is constant—my form improved in week one, and I hit a deadlift PR by week four.",
                name: "Danielle W.",
                designation: "Member • Small-Group PT",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577325/site-images/team-people/10347164.jpg",
              },
              {
                quote:
                  "The programming is legit. It’s not random workouts—there’s a plan. The coaches know my numbers and push me when I need it.",
                name: "Chris M.",
                designation: "Member • Unlimited Classes",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577370/site-images/team-people/10375912.jpg",
              },
              {
                quote:
                  "I was nervous to lift. The environment is intense in a good way, but never intimidating. I learned the barbell basics and feel stronger every week.",
                name: "Priya S.",
                designation: "Member • Foundations",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577351/site-images/team-people/12903244.jpg",
              },
            ]}
          />
        </SectionContainer>
      </ScrollReveal>
    </main>
  );
}
