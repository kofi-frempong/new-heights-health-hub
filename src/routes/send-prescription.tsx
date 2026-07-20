import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, ShieldCheck, Camera, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE_DISPLAY, PHONE_TEL, waLink } from "@/lib/whatsapp";

export const Route = createFileRoute("/send-prescription")({
  head: () => ({
    meta: [
      { title: "Send Prescription via WhatsApp — New Heights Pharmacy" },
      { name: "description", content: "Send your prescription to New Heights Pharmacy on WhatsApp. Free local delivery or in-store pickup." },
      { property: "og:title", content: "Send Prescription via WhatsApp — New Heights Pharmacy" },
      { property: "og:description", content: "The easiest way to get your prescription filled — chat with our pharmacists on WhatsApp." },
    ],
  }),
  component: SendRxPage,
});

const STEPS = [
  { icon: Camera, title: "Snap your prescription", desc: "Take a clear photo or save your prescription as a PDF." },
  { icon: MessageCircle, title: "Send it on WhatsApp", desc: "Tap the button below to open a chat with our pharmacists." },
  { icon: Truck, title: "Pickup or delivery", desc: "We'll verify, prepare, and get it to you the way you prefer." },
];

function SendRxPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-primary">
          <ShieldCheck className="h-3.5 w-3.5" /> Handled with care
        </span>
        <h1 className="mt-4 font-display text-4xl font-bold text-foreground sm:text-5xl">
          Send your prescription on WhatsApp
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          The fastest way to reach us. Message a photo or PDF of your prescription and a
          licensed pharmacist will confirm your order within minutes.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 text-base text-white hover:opacity-90"
            style={{ backgroundColor: "#25D366" }}
          >
            <a href={waLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" /> Open WhatsApp chat
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-6 text-base">
            <a href={`tel:${PHONE_TEL}`}>Or call {PHONE_DISPLAY}</a>
          </Button>
        </div>
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-3">
        {STEPS.map((s, i) => (
          <div key={s.title} className="rounded-3xl border border-border/60 bg-card p-6">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <span className="font-display text-sm font-semibold text-muted-foreground">Step {i + 1}</span>
            </div>
            <p className="mt-3 font-display font-semibold text-foreground">{s.title}</p>
            <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-border/60 bg-surface p-6 sm:p-8">
        <h2 className="font-display text-lg font-semibold text-foreground">What to include in your message</h2>
        <ul className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
          <li>• A clear photo or PDF of the prescription</li>
          <li>• Patient full name and date of birth</li>
          <li>• Preferred pickup or delivery address</li>
          <li>• Any allergies or notes for the pharmacist</li>
        </ul>
        <p className="mt-4 text-xs text-muted-foreground">
          Your information is reviewed only by licensed staff. For urgent medical questions,
          please call your provider or 911.
        </p>
      </div>
    </div>
  );
}