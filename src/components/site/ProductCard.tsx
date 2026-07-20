import { Button } from "@/components/ui/button";
import { useCart, type Product } from "@/lib/cart";
import { Plus, Lock } from "lucide-react";

export function ProductCard({ p }: { p: Product }) {
  const { add } = useCart();
  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-card transition-shadow hover:shadow-lg">
      <div
        className="relative flex aspect-square items-center justify-center text-6xl"
        style={{ backgroundColor: `${p.color}1f` }}
      >
        <span className="drop-shadow-sm transition-transform duration-300 group-hover:scale-110">{p.emoji}</span>
        {p.rx && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-background/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-primary">
            <Lock className="h-3 w-3" /> Prescription required
          </span>
        )}
        {p.badge && !p.rx && (
          <span className="absolute left-3 top-3 rounded-full bg-accent px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-accent-foreground">
            {p.badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="min-h-0 flex-1">
          <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">{p.category}</p>
          <h3 className="mt-1 line-clamp-2 font-display text-sm font-semibold text-foreground">{p.name}</h3>
        </div>
        <Button
          size="sm"
          onClick={() => add(p)}
          className="w-full rounded-full bg-primary text-primary-foreground hover:bg-accent2 hover:text-accent2-foreground"
        >
          <Plus className="mr-1 h-4 w-4" />
          Add to cart
        </Button>
      </div>
    </div>
  );
}
