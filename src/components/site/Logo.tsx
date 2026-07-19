import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/new-heights-logo.jpeg.asset.json";

export function Logo({ className = "h-11 w-auto", linked = true }: { className?: string; linked?: boolean }) {
  const img = (
    <img
      src={logoAsset.url}
      alt="New Heights Pharmacy"
      className={`${className} object-contain`}
    />
  );
  if (!linked) return img;
  return (
    <Link to="/" aria-label="New Heights Pharmacy — Home" className="inline-flex shrink-0 items-center">
      {img}
    </Link>
  );
}