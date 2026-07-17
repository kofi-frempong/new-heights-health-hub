import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, Plus, MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/70 bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Plus className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-bold text-foreground">
                New Heights <span className="text-primary">Pharmacy</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Personalized, community-first pharmacy care. In the neighborhood since 2012.
            </p>
            <div className="mt-5 flex gap-2">
              {[Facebook, Instagram, Twitter].map((I, i) => (
                <a key={i} href="#" aria-label="Social link" className="grid h-9 w-9 place-items-center rounded-full bg-background text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { to: "/", l: "Home" },
                { to: "/shop", l: "Shop" },
                { to: "/upload-prescription", l: "Upload Prescription" },
                { to: "/health-tips", l: "Health Tips" },
                { to: "/about", l: "About Us" },
                { to: "/contact", l: "Contact Us" },
              ].map((x) => (
                <li key={x.to}>
                  <Link to={x.to} className="text-muted-foreground transition-colors hover:text-primary">
                    {x.l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">Pharmacy Hours</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4 text-primary shrink-0" /><span>Mon–Fri: 8am – 8pm</span></li>
              <li className="ml-6">Saturday: 9am – 6pm</li>
              <li className="ml-6">Sunday: 10am – 4pm</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">Get in Touch</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary shrink-0" /><span>128 Summit Ave,<br />New Heights, CA 94102</span></li>
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-primary shrink-0" /><a href="tel:+15551234567" className="hover:text-primary">(555) 123-4567</a></li>
              <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-primary shrink-0" /><a href="mailto:hello@newheightsrx.com" className="hover:text-primary">hello@newheightsrx.com</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} New Heights Pharmacy. All rights reserved.</p>
          <p className="max-w-xl sm:text-right">
            New Heights Pharmacy is a licensed pharmacy. Always consult your doctor before starting new medication.
          </p>
        </div>
      </div>
    </footer>
  );
}
