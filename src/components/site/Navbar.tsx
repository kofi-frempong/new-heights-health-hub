import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone, ShoppingCart, Upload, Plus } from "lucide-react";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/upload-prescription", label: "Upload Prescription" },
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
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
            <Plus className="h-5 w-5" />
          </span>
          <span className="hidden font-display text-lg font-bold text-foreground sm:block">
            New Heights <span className="text-primary">Pharmacy</span>
          </span>
        </Link>

        <nav className="ml-6 hidden items-center gap-1 lg:flex">
          {NAV.slice(0, 2).concat(NAV.slice(3)).map((n) => (
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
            href="tel:+15551234567"
            className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary md:inline-flex"
          >
            <Phone className="h-4 w-4 text-primary" />
            <span className="hidden lg:inline">(555) 123-4567</span>
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

          <Button asChild size="sm" className="hidden rounded-full bg-accent text-accent-foreground shadow-sm hover:bg-accent/90 md:inline-flex">
            <Link to="/upload-prescription">
              <Upload className="mr-1.5 h-4 w-4" /> Upload Rx
            </Link>
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
            <a href="tel:+15551234567" className="mt-2 flex items-center gap-2 rounded-lg bg-secondary px-3 py-2.5 text-sm font-medium text-primary">
              <Phone className="h-4 w-4" /> (555) 123-4567
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
