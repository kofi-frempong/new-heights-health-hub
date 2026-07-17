import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ARTICLES, ARTICLE_CATEGORIES } from "@/lib/articles";

export const Route = createFileRoute("/health-tips")({
  head: () => ({
    meta: [
      { title: "Health Tips — New Heights Pharmacy" },
      { name: "description", content: "Practical health advice from our licensed pharmacists — nutrition, chronic care, seasonal health, and medication safety." },
      { property: "og:title", content: "Health Tips — New Heights Pharmacy" },
      { property: "og:description", content: "Practical health advice from our licensed pharmacists." },
    ],
  }),
  component: HealthTipsLayout,
});

function HealthTipsLayout() {
  const matches = useMatches();
  const isChild = matches.some((m) => m.routeId === "/health-tips/$slug");
  if (isChild) return <Outlet />;
  return <HealthTipsIndex />;
}

function HealthTipsIndex() {
  const [cat, setCat] = useState<(typeof ARTICLE_CATEGORIES)[number]>("All");
  const list = cat === "All" ? ARTICLES : ARTICLES.filter((a) => a.category === cat);

  return (
    <div>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">Health Tips</p>
          <h1 className="mt-2 font-display text-4xl font-bold text-foreground sm:text-5xl">
            Practical advice from your pharmacists
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Nutrition, chronic care, seasonal health, and medication safety — written by
            the same team that fills your prescriptions.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap gap-2">
          {ARTICLE_CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${cat === c ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:bg-secondary/70 hover:text-foreground"}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
          <div className="grid gap-6 sm:grid-cols-2">
            {list.map((a) => (
              <Link
                key={a.slug}
                to="/health-tips/$slug"
                params={{ slug: a.slug }}
                className="group flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-card transition-shadow hover:shadow-lg"
              >
                <div className={`flex aspect-[16/10] items-center justify-center bg-gradient-to-br ${a.gradient} text-7xl`}>
                  {a.icon}
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <span className="w-fit rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium text-primary">{a.category}</span>
                  <h3 className="font-display text-lg font-semibold leading-snug text-foreground group-hover:text-primary">
                    {a.title}
                  </h3>
                  <p className="line-clamp-2 flex-1 text-sm text-muted-foreground">{a.excerpt}</p>
                  <div className="flex items-center justify-between pt-1 text-xs text-muted-foreground">
                    <span>{a.date}</span>
                    <span className="inline-flex items-center gap-1 font-medium text-primary">
                      Read more <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl border border-border/60 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent p-6">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Mail className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-foreground">Get health tips in your inbox</h3>
              <p className="mt-2 text-sm text-muted-foreground">One short email a week. No spam, unsubscribe anytime.</p>
              <form
                onSubmit={(e) => { e.preventDefault(); alert("Thanks for subscribing!"); }}
                className="mt-4 space-y-2"
              >
                <Input type="email" required placeholder="you@example.com" className="h-11 rounded-xl bg-background" />
                <Button type="submit" className="w-full rounded-xl bg-primary hover:bg-primary/90">Subscribe</Button>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
