import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Marks Accounting & Taxation" },
      { name: "description", content: "GST, Income Tax, Bookkeeping, TDS, IEC, Project Reports, Internal Control and more — explore the full suite of services from Marks." },
      { property: "og:title", content: "Services — Marks Accounting & Taxation" },
      { property: "og:description", content: "A full suite of accounting, taxation and compliance services for Indian businesses." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Services"
        title={<>Everything your business needs to stay <span className="text-accent">compliant</span> and confident.</>}
        lead="Nine focused service lines covering registrations, monthly compliance, advisory and growth documentation. Pick one — or partner with us across all of them."
      />
      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="group flex flex-col gap-5 bg-background p-8 transition-colors hover:bg-beige">
                <div className="flex items-center justify-between">
                  <ServiceIcon name={s.icon} className="h-8 w-8 text-accent" />
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </div>
                <div>
                  <h2 className="font-display text-2xl text-foreground">{s.title}</h2>
                  <div className="mt-1 text-xs uppercase tracking-[0.16em] text-accent">{s.tagline}</div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
                </div>
                <span className="mt-auto text-xs font-medium uppercase tracking-[0.16em] text-foreground">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}