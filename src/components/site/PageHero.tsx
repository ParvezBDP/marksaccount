import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, lead, children }: { eyebrow: string; title: ReactNode; lead?: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-beige">
      <div className="pointer-events-none absolute -top-32 -right-20 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="text-xs uppercase tracking-[0.22em] text-accent">{eyebrow}</div>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] text-foreground md:text-6xl">
          {title}
        </h1>
        {lead && <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{lead}</p>}
        {children}
      </div>
    </section>
  );
}