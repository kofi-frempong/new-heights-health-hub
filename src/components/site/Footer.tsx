import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Logo } from "@/components/site/Logo";
import { PHONE_DISPLAY, PHONE_TEL, waLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/70 bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <Logo className="h-14 w-auto" />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Personalized, community-first pharmacy care. In the neighborhood since 2024.
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
              <li>
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-primary">
                  <MessageCircle className="h-3.5 w-3.5" /> Send Prescription on WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">Pharmacy Hours</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4 text-primary shrink-0" /><span>Mon - Sat: 7:30am - 10pm</span></li>
              <li className="ml-6">Sunday: 2pm - 10pm</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">Get in Touch</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary shrink-0" /><span>Old Ashongman - Ablorh Adjei Road,<br />Accra. GPS Address: GE-085-3190</span></li>
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-primary shrink-0" /><a href={`tel:${PHONE_TEL}`} className="hover:text-primary">{PHONE_DISPLAY}</a></li>
              <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-primary shrink-0" /><a href="mailto:info.newheightspharma@gmail.com" className="hover:text-primary">info.newheightspharma@gmail.com</a></li>
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
