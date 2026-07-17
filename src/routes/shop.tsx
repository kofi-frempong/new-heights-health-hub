import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProductCard } from "@/components/site/ProductCard";
import { PRODUCTS } from "@/lib/products";
import { CATEGORIES } from "@/lib/products";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — New Heights Pharmacy" },
      { name: "description", content: "Browse vitamins, OTC medicine, first aid, and personal care essentials." },
      { property: "og:title", content: "Shop — New Heights Pharmacy" },
      { property: "og:description", content: "Vitamins, OTC medicine, first aid, and personal care essentials." },
    ],
  }),
  component: ShopPage,
});

const PAGE = 8;

function ShopPage() {
  const [q, setQ] = useState("");
  const [cats, setCats] = useState<string[]>([]);
  const [sort, setSort] = useState<"popularity" | "price-asc" | "price-desc" | "newest">("popularity");
  const [limit, setLimit] = useState(PAGE);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const toggle = (c: string) =>
    setCats((prev) => (prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]));

  const filtered = useMemo(() => {
    let list = PRODUCTS.filter((p) =>
      (cats.length === 0 || cats.includes(p.category)) &&
      (q.trim() === "" || p.name.toLowerCase().includes(q.toLowerCase())),
    );
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    else if (sort === "newest") list = [...list].sort((a, b) => (b.createdAt ?? 0) - (a.createdAt ?? 0));
    else list = [...list].sort((a, b) => (b.popularity ?? 0) - (a.popularity ?? 0));
    return list;
  }, [q, cats, sort]);

  const shown = filtered.slice(0, limit);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">Shop</h1>
        <p className="mt-2 text-muted-foreground">Everyday wellness essentials, thoughtfully curated.</p>
      </div>

      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="h-11 rounded-full border-border/60 pl-10"
          />
        </div>
        <Select value={sort} onValueChange={(v) => setSort(v as typeof sort)}>
          <SelectTrigger className="h-11 rounded-full sm:w-56">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="popularity">Most popular</SelectItem>
            <SelectItem value="price-asc">Price: low to high</SelectItem>
            <SelectItem value="price-desc">Price: high to low</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" className="h-11 rounded-full lg:hidden" onClick={() => setFiltersOpen((v) => !v)}>
          <SlidersHorizontal className="mr-1.5 h-4 w-4" /> Filters
        </Button>
      </div>

      <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
        <aside className={`${filtersOpen ? "block" : "hidden"} lg:block`}>
          <div className="sticky top-24 rounded-3xl border border-border/60 bg-card p-5">
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">Categories</h2>
            <ul className="mt-4 space-y-1">
              <li>
                <button
                  onClick={() => setCats([])}
                  className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${cats.length === 0 ? "bg-secondary font-semibold text-primary" : "text-muted-foreground hover:bg-secondary hover:text-foreground"}`}
                >
                  All products
                </button>
              </li>
              {CATEGORIES.map((c) => (
                <li key={c}>
                  <label className={`flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors ${cats.includes(c) ? "bg-secondary font-semibold text-primary" : "text-muted-foreground hover:bg-secondary hover:text-foreground"}`}>
                    <input
                      type="checkbox"
                      checked={cats.includes(c)}
                      onChange={() => toggle(c)}
                      className="h-4 w-4 rounded border-border accent-primary"
                    />
                    <span>{c}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div>
          <p className="mb-4 text-sm text-muted-foreground">
            Showing <span className="font-medium text-foreground">{shown.length}</span> of {filtered.length} products
          </p>
          {filtered.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-border bg-card p-16 text-center">
              <p className="font-display text-lg font-semibold text-foreground">No products match your search</p>
              <p className="mt-2 text-sm text-muted-foreground">Try clearing filters or a different keyword.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {shown.map((p) => <ProductCard key={p.id} p={p} />)}
            </div>
          )}
          {shown.length < filtered.length && (
            <div className="mt-10 text-center">
              <Button onClick={() => setLimit((l) => l + PAGE)} variant="outline" className="rounded-full border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground">
                Load more
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
