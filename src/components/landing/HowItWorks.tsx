import { Badge } from "@/components/ui/badge";

const steps = [
  {
    number: "01",
    title: "Connect your data",
    description: "Import from your existing tools or start fresh in under a minute.",
  },
  {
    number: "02",
    title: "Set your goals",
    description: "Define outcomes and let the platform organize the work around them.",
  },
  {
    number: "03",
    title: "Ship with confidence",
    description: "Track progress, remove blockers, and celebrate wins as a team.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-y border-border/60 bg-muted/30 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <Badge variant="secondary" className="mb-4">
            How it works
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            From idea to launch in three steps
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative rounded-2xl border border-border bg-background p-8">
              <span className="text-4xl font-black text-primary/20">{step.number}</span>
              <h3 className="mt-4 text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
