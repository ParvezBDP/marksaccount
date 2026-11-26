import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/marks-logo.asset.json";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-y border-border/70 bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1760px] items-center justify-between gap-4 px-5 sm:px-8 lg:h-24 lg:px-10">
        <Link to="/" className="flex min-w-0 shrink-0 items-center gap-3">
          <img src={logoAsset.url} alt="MARKS Accounting & Taxation" className="h-12 w-12 shrink-0 rounded-md object-contain lg:h-14 lg:w-14" />
          <div className="min-w-0 leading-tight">
            <div className="font-display text-xl text-foreground lg:text-2xl">MARKS</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Accounting &amp; Taxation</div>
          </div>
        </Link>
        <nav className="hidden flex-1 items-center justify-center gap-6 lg:flex xl:gap-9">
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
          className="hidden shrink-0 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex"
        >
          Book a consultation
        </Link>
        <button
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="site-menu"
          className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-foreground/60 bg-background text-foreground transition-colors hover:bg-muted lg:h-14 lg:w-14"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div id="site-menu" className="absolute inset-x-0 top-full border-t border-border bg-background lg:left-auto lg:right-10 lg:top-[calc(100%+0.75rem)] lg:w-72 lg:rounded-md lg:border lg:shadow-[var(--shadow-card)]">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4 lg:px-3">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                activeProps={{ className: "text-foreground bg-muted" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}