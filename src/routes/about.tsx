import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Heart, Users, Sparkles, Clock, MapPin } from "lucide-react";

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

const TEAM = [
  { name: "Dr. Amina Rivera", role: "Pharmacist-in-Charge, PharmD", initials: "AR", bg: "#2E6F95" },
  { name: "Marcus Chen", role: "Clinical Pharmacist, PharmD", initials: "MC", bg: "#5FAE6B" },
  { name: "Priya Shah", role: "Pharmacist, PharmD, BCACP", initials: "PS", bg: "#7FC7B0" },
  { name: "Jordan Ellis", role: "Pharmacy Technician, CPhT", initials: "JE", bg: "#F4B740" },
];

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

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">Meet the pharmacists</p>
          <h2 className="mt-1 font-display text-3xl font-bold text-foreground sm:text-4xl">
            The team behind your care
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m) => (
            <div key={m.name} className="rounded-3xl border border-border/60 bg-card p-6 text-center">
              <div
                className="mx-auto grid h-24 w-24 place-items-center rounded-full font-display text-2xl font-bold text-white"
                style={{ background: `linear-gradient(135deg, ${m.bg}, ${m.bg}cc)` }}
              >
                {m.initials}
              </div>
              <h3 className="mt-4 font-display font-semibold text-foreground">{m.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{m.role}</p>
            </div>
          ))}
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
        <div className="grid gap-8 lg:grid-cols-2">
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
          <div className="overflow-hidden rounded-3xl border border-border/60 bg-card">
            <div className="p-8">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold text-foreground">Visit us</h3>
              <p className="mt-2 text-sm text-muted-foreground">Old Ashongman - Ablorh Adjei Road, Accra. GPS Address: GE-085-3190</p>
            </div>
            <iframe
              title="Google Map to New Heights Pharmacy"
              src="https://www.google.com/maps?q=Old+Ashongman+Ablorh+Adjei+Road+GE-085-3190+Accra&output=embed"
              className="h-64 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
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
