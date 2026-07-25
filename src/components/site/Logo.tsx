import { Link } from "@tanstack/react-router";
import logoUrl from "@/assets/new-heights-logo.png";

export function Logo({ className = "h-11 w-auto", linked = true }: { className?: string; linked?: boolean }) {
  const img = (
    <img
      src={logoUrl}
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