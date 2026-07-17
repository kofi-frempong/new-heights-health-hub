import { createFileRoute } from "@tanstack/react-router";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { z } from "zod";
import { Upload, ShieldCheck, FileCheck, Truck, Check, FileText, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/upload-prescription")({
  head: () => ({
    meta: [
      { title: "Upload Prescription — New Heights Pharmacy" },
      { name: "description", content: "Upload your prescription in seconds. Free local delivery or in-store pickup." },
      { property: "og:title", content: "Upload Prescription — New Heights Pharmacy" },
      { property: "og:description", content: "A HIPAA-conscious way to send your prescription to our pharmacists." },
    ],
  }),
  component: UploadRx,
});

const schema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name").max(100),
  dob: z.string().min(1, "Enter your date of birth"),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  email: z.string().trim().email("Enter a valid email").max(255),
  doctor: z.string().trim().max(120).optional().or(z.literal("")),
  fulfillment: z.enum(["pickup", "delivery"]),
});

const STEPS = [
  { icon: Upload, title: "Upload your Rx", desc: "Snap a clear photo or attach a PDF." },
  { icon: FileCheck, title: "We verify it", desc: "A licensed pharmacist reviews and confirms." },
  { icon: Truck, title: "Pickup or delivery", desc: "Choose what works for you — we'll do the rest." },
];

function UploadRx() {
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [fulfillment, setFulfillment] = useState<"pickup" | "delivery">("pickup");
  const [submitted, setSubmitted] = useState(false);

  const onFile = (e: ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] ?? null;
    if (!f) return setFile(null);
    const okType = ["image/jpeg", "image/png", "image/webp", "application/pdf"].includes(f.type);
    if (!okType) { setFileError("Please upload a JPG, PNG, WEBP, or PDF."); setFile(null); return; }
    if (f.size > 10 * 1024 * 1024) { setFileError("File must be under 10 MB."); setFile(null); return; }
    setFileError(null);
    setFile(f);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      fullName: (form.elements.namedItem("fullName") as HTMLInputElement).value,
      dob: (form.elements.namedItem("dob") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      doctor: (form.elements.namedItem("doctor") as HTMLInputElement).value,
      fulfillment,
    };
    const parsed = schema.safeParse(data);
    const errs: Record<string, string> = {};
    if (!parsed.success) {
      for (const iss of parsed.error.issues) errs[iss.path.join(".")] = iss.message;
    }
    if (!file) errs.file = "Please upload your prescription.";
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-accent/15 text-accent">
          <Check className="h-8 w-8" />
        </div>
        <h1 className="mt-6 font-display text-3xl font-bold text-foreground sm:text-4xl">Prescription received</h1>
        <p className="mt-3 text-muted-foreground">
          Thanks! A licensed pharmacist will review your prescription and reach out within
          <span className="font-medium text-foreground"> 30 minutes</span> during pharmacy hours.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button onClick={() => { setSubmitted(false); setFile(null); }} variant="outline" className="rounded-full">
            Submit another
          </Button>
          <Button asChild className="rounded-full bg-primary hover:bg-primary/90">
            <a href="/shop">Continue shopping</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-primary">
          <ShieldCheck className="h-3.5 w-3.5" /> HIPAA-conscious handling
        </span>
        <h1 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
          Upload your prescription
        </h1>
        <p className="mt-3 text-muted-foreground">
          Send us your Rx — we'll verify it, prepare it, and get it to you the way you prefer.
        </p>
      </div>

      <div className="mt-10 grid gap-3 sm:grid-cols-3">
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

      <form onSubmit={onSubmit} noValidate className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="rounded-3xl border border-border/60 bg-card p-6 sm:p-8">
          <h2 className="font-display text-xl font-semibold text-foreground">Patient information</h2>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <Field id="fullName" label="Full name" error={errors.fullName}>
              <Input id="fullName" name="fullName" placeholder="Alex Johnson" className="h-11 rounded-xl" />
            </Field>
            <Field id="dob" label="Date of birth" error={errors.dob}>
              <Input id="dob" name="dob" type="date" className="h-11 rounded-xl" />
            </Field>
            <Field id="phone" label="Phone" error={errors.phone}>
              <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" className="h-11 rounded-xl" />
            </Field>
            <Field id="email" label="Email" error={errors.email}>
              <Input id="email" name="email" type="email" placeholder="you@example.com" className="h-11 rounded-xl" />
            </Field>
            <div className="sm:col-span-2">
              <Field id="doctor" label="Doctor's name (optional)">
                <Input id="doctor" name="doctor" placeholder="Dr. Reyes" className="h-11 rounded-xl" />
              </Field>
            </div>
          </div>

          <div className="mt-6">
            <p className="mb-3 text-sm font-medium text-foreground">How would you like to receive it?</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {(["pickup", "delivery"] as const).map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setFulfillment(opt)}
                  className={`flex items-start gap-3 rounded-2xl border p-4 text-left transition-colors ${fulfillment === opt ? "border-primary bg-primary/5" : "border-border/60 hover:border-primary/60"}`}
                >
                  <div className={`mt-0.5 grid h-5 w-5 place-items-center rounded-full border-2 ${fulfillment === opt ? "border-primary bg-primary" : "border-border"}`}>
                    {fulfillment === opt && <div className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />}
                  </div>
                  <div>
                    <p className="font-semibold capitalize text-foreground">{opt === "pickup" ? "In-store pickup" : "Local delivery"}</p>
                    <p className="text-xs text-muted-foreground">
                      {opt === "pickup" ? "Ready within an hour" : "Free for orders over $35"}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <Label htmlFor="rx-file" className="mb-2 block text-sm font-medium text-foreground">Prescription file</Label>
            {file ? (
              <div className="flex items-center justify-between rounded-2xl border border-primary/30 bg-primary/5 p-4">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-foreground">{file.name}</p>
                    <p className="text-xs text-muted-foreground">{(file.size / 1024).toFixed(1)} KB</p>
                  </div>
                </div>
                <button type="button" onClick={() => setFile(null)} aria-label="Remove file" className="text-muted-foreground hover:text-destructive">
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <label
                htmlFor="rx-file"
                className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-border bg-secondary/50 px-6 py-10 text-center transition-colors hover:border-primary/50 hover:bg-secondary"
              >
                <Upload className="h-6 w-6 text-primary" />
                <p className="text-sm font-medium text-foreground">Click to upload</p>
                <p className="text-xs text-muted-foreground">JPG, PNG, or PDF (max 10 MB)</p>
              </label>
            )}
            <input id="rx-file" type="file" accept="image/*,application/pdf" onChange={onFile} className="hidden" />
            {(fileError || errors.file) && (
              <p className="mt-2 text-sm text-destructive">{fileError ?? errors.file}</p>
            )}
          </div>

          <Button type="submit" className="mt-8 h-12 w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
            Submit prescription
          </Button>
        </div>

        <aside className="rounded-3xl border border-border/60 bg-surface p-6">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <h3 className="mt-4 font-display text-lg font-semibold text-foreground">Your privacy matters</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            We handle personal health information carefully. Uploads are transmitted securely
            and reviewed only by licensed staff.
          </p>
          <a href="#" className="mt-4 inline-flex text-sm font-medium text-primary hover:underline">
            Read our privacy policy →
          </a>

          <div className="mt-6 border-t border-border/60 pt-6 text-sm text-muted-foreground">
            <p className="font-medium text-foreground">Need help?</p>
            <p className="mt-1">Call us at <a href="tel:+15551234567" className="text-primary hover:underline">(555) 123-4567</a> and a pharmacist will assist.</p>
          </div>
        </aside>
      </form>
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
