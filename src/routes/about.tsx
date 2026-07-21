import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Heart, Users, Sparkles, Clock } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — New Heights Pharmacy" },
      { name: "description", content: "Meet the pharmacists behind New Heights — a licensed, community-focused pharmacy serving neighborhood families since 2024." },
      { property: "og:title", content: "About — New Heights Pharmacy" },
      { property: "og:description", content: "A licensed, community-focused pharmacy serving neighborhood families." },
    ],
  }),
  component: AboutPage,
});


const WHY = [
  { icon: ShieldCheck, title: "Licensed & accredited", desc: "State-licensed with rigorous safety standards." },
  { icon: Heart, title: "Personalized care", desc: "We know your history and your goals." },
  { icon: Users, title: "Community-focused", desc: "Local families, local pharmacists." },
  { icon: Sparkles, title: "Wellness-first", desc: "Curated vitamins and everyday essentials." },
];

function AboutPage() {
  return (
    <div>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-accent">Our story</p>
            <h1 className="mt-2 font-display text-4xl font-bold text-foreground sm:text-5xl">
              A pharmacy built around people, not prescriptions.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              New Heights Pharmacy opened in 2012 with a simple idea: a neighborhood
              pharmacy should feel like healthcare, not like a checkout line. More than a
              decade later, we're still the same independently-owned team — filling refills,
              answering questions, and knowing our patients by name.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Stat n="12+" l="Years serving the community" />
            <Stat n="2,000+" l="Local families cared for" />
            <Stat n="45 min" l="Average refill time" />
            <Stat n="4.9★" l="Patient satisfaction" />
          </div>
        </div>
      </section>


      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-accent">Why choose us</p>
            <h2 className="mt-1 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Care you can count on
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((w) => (
              <div key={w.title} className="rounded-3xl border border-border/60 bg-card p-6">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <w.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl">
          <div className="rounded-3xl border border-border/60 bg-card p-8">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary">
              <Clock className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-2xl font-bold text-foreground">Pharmacy hours</h3>
            <ul className="mt-4 divide-y divide-border/60 text-sm">
              {[
                ["Mon - Sat", "7:30am - 10pm"],
                ["Sunday", "2pm - 10pm"],
              ].map(([d, h]) => (
                <li key={d} className="flex items-center justify-between py-3">
                  <span className="text-muted-foreground">{d}</span>
                  <span className="font-medium text-foreground">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div className="rounded-3xl border border-border/60 bg-card p-6">
      <p className="font-display text-3xl font-bold text-primary sm:text-4xl">{n}</p>
      <p className="mt-1 text-sm text-muted-foreground">{l}</p>
    </div>
  );
}
