import type { Metadata } from "next";
import { Anton, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const headingFont = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
});

const bodyFont = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Iron & Oak Fitness | Premium Strength Training Gym in Austin",
  description:
    "Premium strength training with personal coaching and group classes. View the schedule, meet the coaches, and claim a free trial week at Iron & Oak Fitness in Austin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable} font-sans bg-background text-foreground`}>
        <Navbar
          logo="Iron & Oak Fitness"
          navItems={[
            { label: "Home", href: "/" },
            { label: "Classes", href: "/#classes" },
            { label: "Coaches", href: "/#trainers" },
            { label: "Memberships", href: "/#pricing" },
            { label: "Results", href: "/#transformations" },
            { label: "Contact", href: "/contact" },
          ]}
          ctaLabel="Book Free Intro"
          ctaHref="/contact"
        />
        {children}
        <Footer
          brand="IRON & OAK FITNESS"
          description="Premium strength training in Austin—coached, structured, and built for real progress."
          columns={[
            {
              title: "Contact",
              links: [
                { label: "214 Foundry Ave, Austin, TX 78701", href: "https://maps.google.com/?q=214+Foundry+Ave,+Austin,+TX+78701" },
                { label: "(512) 555-0198", href: "tel:+15125550198" },
                { label: "hello@ironandoakfitness.com", href: "mailto:hello@ironandoakfitness.com" },
              ],
            },
            {
              title: "Explore",
              links: [
                { label: "Classes", href: "/#classes" },
                { label: "Coaches", href: "/#trainers" },
                { label: "Memberships", href: "/#pricing" },
                { label: "Results", href: "/#transformations" },
              ],
            },
            {
              title: "Legal",
              links: [
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms", href: "/terms" },
              ],
            },
          ]}
          copyright="© 2026 Iron & Oak Fitness. All rights reserved."
        />
      </body>
    </html>
  );
}
