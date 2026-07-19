import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Phone, Mail, MapPin, Clock, MessageCircle, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PHONE_DISPLAY, PHONE_TEL, waLink } from "@/lib/whatsapp";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — New Heights Pharmacy" },
      { name: "description", content: "Get in touch with New Heights Pharmacy — call, email, or send us a message." },
      { property: "og:title", content: "Contact — New Heights Pharmacy" },
      { property: "og:description", content: "Call, email, or send us a message." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
  subject: z.string().trim().min(2, "Enter a subject").max(120),
  message: z.string().trim().min(10, "Message should be at least 10 characters").max(2000),
});

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const iss of parsed.error.issues) errs[iss.path.join(".")] = iss.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  };

  return (
    <div>
      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">Contact</p>
          <h1 className="mt-2 font-display text-4xl font-bold text-foreground sm:text-5xl">
            We're here to help
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            A licensed pharmacist is available during pharmacy hours. For urgent medical
            questions, please call 911 or your provider.
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
        <div className="rounded-3xl border border-border/60 bg-card p-6 sm:p-8">
          {sent ? (
            <div className="py-12 text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent/15 text-accent">
                <Check className="h-7 w-7" />
              </div>
              <h2 className="mt-5 font-display text-2xl font-bold text-foreground">Message sent</h2>
              <p className="mt-2 text-muted-foreground">Thanks for reaching out — we'll respond within one business day.</p>
              <Button onClick={() => setSent(false)} variant="outline" className="mt-6 rounded-full">Send another</Button>
            </div>
          ) : (
            <>
              <h2 className="font-display text-xl font-semibold text-foreground">Send us a message</h2>
              <form noValidate onSubmit={onSubmit} className="mt-6 grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Name" error={errors.name}>
                  <Input id="name" name="name" placeholder="Your full name" className="h-11 rounded-xl" />
                </Field>
                <Field id="email" label="Email" error={errors.email}>
                  <Input id="email" name="email" type="email" placeholder="you@example.com" className="h-11 rounded-xl" />
                </Field>
                <Field id="phone" label="Phone (optional)" error={errors.phone}>
                  <Input id="phone" name="phone" type="tel" placeholder="+233 24 501 2395" className="h-11 rounded-xl" />
                </Field>
                <Field id="subject" label="Subject" error={errors.subject}>
                  <Input id="subject" name="subject" placeholder="Refill question, insurance..." className="h-11 rounded-xl" />
                </Field>
                <div className="sm:col-span-2">
                  <Field id="message" label="Message" error={errors.message}>
                    <Textarea id="message" name="message" rows={5} placeholder="How can we help?" className="rounded-2xl" />
                  </Field>
                </div>
                <div className="sm:col-span-2">
                  <Button type="submit" className="h-12 w-full rounded-full bg-primary text-base hover:bg-primary/90">
                    Send message
                  </Button>
                </div>
              </form>
            </>
          )}
        </div>

        <div className="space-y-4">
          <InfoCard icon={<Phone className="h-5 w-5" />} title="Call us" body={<a href={`tel:${PHONE_TEL}`} className="text-primary hover:underline">{PHONE_DISPLAY}</a>} sub="Fastest way to reach a pharmacist" />
          <InfoCard icon={<Mail className="h-5 w-5" />} title="Email" body={<a href="mailto:hello@newheightsrx.com" className="text-primary hover:underline">hello@newheightsrx.com</a>} sub="We respond within one business day" />
          <InfoCard icon={<MessageCircle className="h-5 w-5" />} title="WhatsApp" body={<a href={waLink()} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Chat with us on WhatsApp</a>} sub="Best for sending prescriptions or quick questions" />
          <InfoCard icon={<MapPin className="h-5 w-5" />} title="Visit" body="128 Summit Ave, New Heights, CA 94102" sub="Parking available in the rear" />
          <div className="overflow-hidden rounded-3xl border border-border/60 bg-card">
            <div className="flex items-center gap-3 p-5">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-primary">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="font-display font-semibold text-foreground">Hours</p>
                <p className="text-xs text-muted-foreground">Mon–Fri 8–8 · Sat 9–6 · Sun 10–4</p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border/60 bg-card">
            <iframe
              title="Map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-122.4406,37.7570,-122.3906,37.7970&layer=mapnik"
              className="h-56 w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <Label htmlFor={id} className="mb-1.5 block text-sm font-medium text-foreground">{label}</Label>
      {children}
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function InfoCard({ icon, title, body, sub }: { icon: React.ReactNode; title: string; body: React.ReactNode; sub?: string }) {
  return (
    <div className="rounded-3xl border border-border/60 bg-card p-5">
      <div className="flex items-start gap-4">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary">{icon}</div>
        <div className="min-w-0">
          <p className="font-display font-semibold text-foreground">{title}</p>
          <p className="mt-0.5 text-sm">{body}</p>
          {sub && <p className="mt-0.5 text-xs text-muted-foreground">{sub}</p>}
        </div>
      </div>
    </div>
  );
}
