import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/marks-logo.asset.json";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-y border-border/70 bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1760px] items-center justify-between gap-2 px-3 sm:h-20 sm:gap-4 sm:px-8 lg:h-24 lg:px-10">
        <Link to="/" className="flex min-w-0 shrink items-center gap-2 sm:gap-3">
          <img src={logoAsset.url} alt="MARKS Accounting & Taxation" className="h-9 w-9 shrink-0 rounded-md object-contain sm:h-12 sm:w-12 lg:h-14 lg:w-14" />
          <div className="min-w-0 leading-tight">
            <div className="truncate whitespace-nowrap font-display text-lg text-foreground sm:text-xl lg:text-2xl">MARKS</div>
            <div className="truncate whitespace-nowrap text-[8px] uppercase tracking-[0.1em] text-muted-foreground sm:text-[10px] sm:tracking-[0.18em]">Accounting &amp; Taxation</div>
          </div>
        </Link>
        <nav className="hidden flex-1 items-center justify-center gap-3 md:flex lg:gap-6 xl:gap-9">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="whitespace-nowrap text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="inline-flex shrink-0 whitespace-nowrap rounded-full bg-primary px-3 py-2 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:px-5 sm:py-3 sm:text-sm"
        >
          Book a consultation
        </Link>
      </div>
    </header>
  );
}