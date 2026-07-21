import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone, ShoppingCart } from "lucide-react";
import { WhatsAppLogo } from "@/components/site/WhatsAppLogo";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/Logo";
import { PHONE_DISPLAY, PHONE_TEL, waLink } from "@/lib/whatsapp";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/health-tips", label: "Health Tips" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { count, setOpen: setCartOpen } = useCart();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Logo className="h-11 w-auto sm:h-12" />

        <nav className="ml-6 hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground [&.active]:bg-secondary [&.active]:text-primary"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <a
            href={`tel:${PHONE_TEL}`}
            className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary md:inline-flex"
          >
            <Phone className="h-4 w-4 text-primary" />
            <span className="hidden lg:inline">{PHONE_DISPLAY}</span>
            <span className="lg:hidden">Call</span>
          </a>

          <button
            type="button"
            onClick={() => setCartOpen(true)}
            aria-label={`Cart with ${count} items`}
            className="relative grid h-10 w-10 place-items-center rounded-full text-foreground hover:bg-secondary"
          >
            <ShoppingCart className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-accent px-1 text-[10px] font-bold text-accent-foreground">
                {count}
              </span>
            )}
          </button>

          <Button
            asChild
            size="sm"
            className="hidden rounded-full text-white shadow-sm hover:opacity-90 md:inline-flex"
            style={{ backgroundColor: "#25D366" }}
          >
            <a href={waLink()} target="_blank" rel="noopener noreferrer">
              <WhatsAppLogo className="mr-1.5 h-4 w-4" /> Send Prescription via WhatsApp
            </a>
          </Button>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full text-foreground hover:bg-secondary lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary [&.active]:bg-secondary [&.active]:text-primary"
              >
                {n.label}
              </Link>
            ))}
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold text-white"
              style={{ backgroundColor: "#25D366" }}
            >
              <WhatsAppLogo className="h-4 w-4" /> Send Prescription via WhatsApp
            </a>
            <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 rounded-lg bg-secondary px-3 py-2.5 text-sm font-medium text-primary">
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
