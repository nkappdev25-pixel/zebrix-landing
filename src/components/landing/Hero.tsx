import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-16 pb-24 sm:px-6 sm:pt-20 lg:px-8 lg:pt-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,var(--color-primary)_0%,transparent_35%)] opacity-[0.08]" />
      <div className="mx-auto max-w-5xl text-center">
        <div className="mb-6 inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-sm text-muted-foreground shadow-sm">
          <span className="mr-2 flex h-2 w-2 rounded-full bg-emerald-500" />
          Now open for early access
        </div>
        <h1 className="text-balance text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Build better products,{" "}
          <span className="text-primary">faster than ever.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          A modern platform that helps teams ship, measure, and improve in one place. Replace the
          scattered toolchain with a single source of truth.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="gap-2">
            Start free trial
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="gap-2">
            <Play className="h-4 w-4" />
            Watch demo
          </Button>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">No credit card required. 14-day free trial.</p>
      </div>
    </section>
  );
}
