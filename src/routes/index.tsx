import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Truck, ShieldCheck, Zap, Check, Star, Clock, MapPin, Search } from "lucide-react";
import { WhatsAppLogo } from "@/components/site/WhatsAppLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProductCard } from "@/components/site/ProductCard";
import { PRODUCTS } from "@/lib/products";
import { ARTICLES } from "@/lib/articles";
import heroImg from "@/assets/hero-pharmacist.jpg";
import logoAsset from "@/assets/new-heights-logo.jpeg.asset.json";
import { waLink } from "@/lib/whatsapp";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const TRUST = [
  { icon: Truck, title: "Free local delivery", desc: "Same-day to nearby ZIPs" },
  { icon: ShieldCheck, title: "Licensed pharmacists", desc: "On call 7 days a week" },
  { icon: Zap, title: "Fast refills", desc: "Ready in under an hour" },
];

const STEPS = [
  { n: "01", title: "Send us your prescription on WhatsApp", desc: "Message a clear photo or PDF of your prescription — we'll take it from there." },
  { n: "02", title: "We verify & prepare", desc: "A licensed pharmacist reviews your prescription and confirms your details." },
  { n: "03", title: "Pickup or delivery", desc: "Choose in-store pickup or free local delivery to your door." },
];

function HomePage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const featured = PRODUCTS.slice(0, 8);
  const tips = ARTICLES.slice(0, 3);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      navigate({ to: "/shop", search: { q: search.trim() } });
    }
  };

  return (
    <div>
      {/* Top search bar */}
      <section className="border-b border-border/60 bg-card/50 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSearch} className="relative flex-1 max-w-xl">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search for medicines, vitamins, first aid..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-11 rounded-full border-border/60 bg-background pl-10 pr-10"
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-white hover:bg-primary/90"
            >
              Search
            </button>
          </form>
          <span className="hidden text-sm text-muted-foreground sm:inline">Fast refills, delivered.</span>
        </div>
      </section>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/60 via-background to-background" />
        <div className="absolute -top-32 -right-40 -z-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-32 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-8 lg:px-8 lg:py-24">
          <div>
            <img
              src={logoAsset.url}
              alt="New Heights Pharmacy"
              className="mb-6 h-20 w-auto object-contain sm:h-24"
            />
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-3 py-1 text-xs font-medium text-primary backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Pharmacy is open — refills in under an hour
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Your Health,<br />
              <span className="text-primary">Our Priority.</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">
              A neighborhood pharmacy that feels personal — free local delivery, licensed
              pharmacists you can actually talk to, and wellness essentials in one place.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-6 text-base text-white hover:opacity-90" style={{ backgroundColor: "#25D366" }}>
                <Link to="/shop">
                  Shop Now <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="rounded-full px-6 text-base text-white hover:opacity-90"
                style={{ backgroundColor: "#25D366" }}
              >
                <a href={waLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-1.5 h-4 w-4" /> Send Prescription via WhatsApp
                </a>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <div className="flex text-accent">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <span className="font-medium text-foreground">4.9</span>
              </div>
              <span>Trusted by 2,000+ local families</span>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-border/60 bg-card shadow-2xl">
              <img
                src={heroImg}
                alt="Friendly New Heights pharmacist ready to help"
                width={1600}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-border/60 bg-background p-4 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-accent/15 text-accent">
                  <Check className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Prescription ready in 45 min</p>
                  <p className="text-xs text-muted-foreground">On average this week</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 right-4 hidden rounded-2xl border border-border/60 bg-background p-4 shadow-xl md:block">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">HIPAA-conscious</p>
                  <p className="text-xs text-muted-foreground">Private by default</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-3 rounded-3xl border border-border/60 bg-card p-4 sm:grid-cols-3 sm:p-6">
          {TRUST.map((t) => (
            <div key={t.title} className="flex items-start gap-3 rounded-2xl p-3">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                <t.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground">{t.title}</p>
                <p className="text-xs text-muted-foreground">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-accent">Best sellers</p>
            <h2 className="mt-1 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Wellness essentials, handpicked
            </h2>
          </div>
          <Button asChild variant="ghost" className="hidden rounded-full text-primary sm:inline-flex">
            <Link to="/shop">Shop all <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {featured.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-accent">How it works</p>
            <h2 className="mt-1 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Prescription refills in three simple steps
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <div key={s.n} className="relative rounded-3xl border border-border/60 bg-card p-8">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-4xl font-bold text-accent">{s.n}</span>
                  {i < STEPS.length - 1 && <span className="hidden h-px flex-1 bg-border md:block" />}
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild size="lg" className="rounded-full px-6 text-base text-white hover:opacity-90" style={{ backgroundColor: "#25D366" }}>
              <a href={waLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-1.5 h-4 w-4" /> Send Prescription via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Health tips preview */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-accent">Health tips</p>
            <h2 className="mt-1 font-display text-3xl font-bold text-foreground sm:text-4xl">
              From our pharmacists
            </h2>
          </div>
          <Button asChild variant="ghost" className="rounded-full text-primary">
            <Link to="/health-tips">All articles <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {tips.map((a) => (
            <Link
              key={a.slug}
              to="/health-tips/$slug"
              params={{ slug: a.slug }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-card transition-shadow hover:shadow-lg"
            >
              <div className={`flex aspect-[16/10] items-center justify-center bg-gradient-to-br ${a.gradient} text-6xl`}>
                {a.icon}
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <span className="w-fit rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium text-primary">{a.category}</span>
                <h3 className="font-display text-lg font-semibold leading-snug text-foreground group-hover:text-primary">
                  {a.title}
                </h3>
                <p className="line-clamp-2 flex-1 text-sm text-muted-foreground">{a.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Read more <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Visit us */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-accent">Visit us</p>
            <h2 className="mt-1 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Come find us in Accra
            </h2>
            <p className="mt-3 text-muted-foreground">
              <MapPin className="mr-1 inline-block h-4 w-4 text-primary" />
              Old Ashongman - Ablorh Adjei Road, Accra. GPS Address: GE-085-3190
            </p>
          </div>
          <div className="mt-10 overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm">
            <iframe
              title="Google Map to New Heights Pharmacy"
              src="https://www.google.com/maps?q=Old+Ashongman+Ablorh+Adjei+Road+GE-085-3190+Accra&output=embed"
              className="h-96 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-3xl border border-border/60 bg-card px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-primary">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">Pharmacy hours</p>
                  <p className="text-sm text-muted-foreground">Mon–Sat 7:30am–10pm · Sun 2pm–10pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
