import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Testimonials } from "@/components/landing/Testimonials";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ProjectName — Ship better products, faster" },
      {
        name: "description",
        content:
          "A modern platform that helps teams ship, measure, and improve in one place. Start your free 14-day trial today.",
      },
      { property: "og:title", content: "ProjectName — Ship better products, faster" },
      {
        property: "og:description",
        content:
          "A modern platform that helps teams ship, measure, and improve in one place. Start your free 14-day trial today.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
