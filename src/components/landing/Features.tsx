import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Layers, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning fast",
    description:
      "Optimized for speed from day one. Pages load instantly and workflows feel snappy, even as you scale.",
  },
  {
    icon: Layers,
    title: "All-in-one workspace",
    description:
      "Bring your roadmap, tasks, docs, and feedback into a single, organized workspace your team will love.",
  },
  {
    icon: BarChart3,
    title: "Insightful analytics",
    description:
      "Track progress with dashboards and reports that surface what matters without the spreadsheet gymnastics.",
  },
  {
    icon: Shield,
    title: "Enterprise-ready security",
    description:
      "SSO, audit logs, and granular permissions keep your data safe as you grow from startup to enterprise.",
  },
];

export function Features() {
  return (
    <section id="features" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to ship
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Stop juggling tools. Focus on building while we handle the rest.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="border-border/60 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <feature.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
