import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/lib/cart";
import { waLink } from "@/lib/whatsapp";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { WhatsAppLogo } from "@/components/site/WhatsAppLogo";

export function CartDrawer() {
  const { items, open, setOpen, setQty, remove, clear } = useCart();

  const orderMessage =
    "Hi, I'd like to order the following from New Heights Pharmacy:\n" +
    items.map((i) => `• ${i.name} x${i.qty}`).join("\n");

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="right" className="flex w-full flex-col sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="font-display text-xl">Your Cart</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-secondary text-primary">
              <ShoppingBag className="h-7 w-7" />
            </div>
            <p className="font-medium text-foreground">Your cart is empty</p>
            <p className="text-sm text-muted-foreground">Add wellness essentials from our shop.</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="space-y-3">
                {items.map((i) => (
                  <li key={i.id} className="flex gap-3 rounded-2xl border border-border/60 bg-card p-3">
                    <div
                      className="grid h-16 w-16 shrink-0 place-items-center rounded-xl text-2xl"
                      style={{ backgroundColor: `${i.color}22` }}
                    >
                      <span>{i.emoji}</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <p className="truncate text-sm font-semibold text-foreground">{i.name}</p>
                        <button onClick={() => remove(i.id)} aria-label="Remove item" className="text-muted-foreground hover:text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-xs text-muted-foreground">{i.category}</p>
                      <div className="mt-2 flex items-center">
                        <div className="flex items-center gap-1 rounded-full border border-border bg-background">
                          <button onClick={() => setQty(i.id, i.qty - 1)} className="grid h-7 w-7 place-items-center rounded-full hover:bg-secondary" aria-label="Decrease">
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="min-w-6 text-center text-sm font-medium">{i.qty}</span>
                          <button onClick={() => setQty(i.id, i.qty + 1)} className="grid h-7 w-7 place-items-center rounded-full hover:bg-secondary" aria-label="Increase">
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-border/60 px-6 py-4">
              <p className="mb-4 text-xs text-muted-foreground">
                Send your order to our pharmacists on WhatsApp — we'll confirm availability, pricing, and arrange local delivery.
              </p>
              <a
                href={waLink(orderMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 text-base font-semibold text-white transition hover:bg-[#1fb857]"
              >
                <WhatsAppLogo className="h-5 w-5" /> Order via WhatsApp
              </a>
              <button onClick={clear} className="mt-2 w-full text-xs text-muted-foreground hover:text-destructive">
                Clear cart
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
