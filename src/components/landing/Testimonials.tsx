import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "This completely changed how our team coordinates. We cut meeting time in half and shipped our biggest release on schedule.",
    author: "Alex Rivera",
    role: "Product Lead, Acme Corp",
    initials: "AR",
  },
  {
    quote:
      "The analytics alone are worth it. For the first time, we can see exactly where work gets stuck and fix it before it delays us.",
    author: "Sarah Chen",
    role: "Engineering Manager, Launchpad",
    initials: "SC",
  },
  {
    quote:
      "Beautiful, fast, and surprisingly simple. We onboarded the whole company in a single afternoon.",
    author: "Marcus Johnson",
    role: "CEO, Brightwave",
    initials: "MJ",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Loved by product teams
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            See why teams switch to a simpler way of working.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.author} className="border-border/60">
              <CardContent className="pt-6">
                <div className="flex gap-0.5 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-foreground">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary text-sm font-semibold text-primary-foreground">
                      {t.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.author}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
