import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-3xl bg-primary px-6 py-16 text-center sm:px-12 lg:py-20">
        <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
          Ready to ship your best work?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
          Join hundreds of teams who have already made the switch. Start your free trial today.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" variant="secondary" className="gap-2">
            Get started for free
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            Talk to sales
          </Button>
        </div>
      </div>
    </section>
  );
}
