import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { CONTACT, SERVICES, type Service } from "@/lib/site-data";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }): { service: Service } => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.service.title} — Marks Accounting & Taxation` },
          { name: "description", content: loaderData.service.summary },
          { property: "og:title", content: `${loaderData.service.title} — Marks` },
          { property: "og:description", content: loaderData.service.summary },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-display text-4xl text-foreground">Service not found</h1>
        <Link to="/services" className="mt-6 inline-flex text-sm font-medium text-accent">← Back to services</Link>
      </div>
    </SiteLayout>
  ),
  errorComponent: ({ reset }) => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-display text-3xl text-foreground">Something went wrong</h1>
        <button onClick={reset} className="mt-6 rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground">Try again</button>
      </div>
    </SiteLayout>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border bg-beige">
        <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> All services
          </Link>
          <div className="mt-8 flex items-start gap-6">
            <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-background shadow-[var(--shadow-card)]">
              <ServiceIcon name={service.icon} className="h-8 w-8 text-accent" />
            </div>
            <div className="min-w-0">
              <div className="text-xs uppercase tracking-[0.22em] text-accent">{service.tagline}</div>
              <h1 className="mt-3 font-display text-4xl leading-[1.05] text-foreground md:text-6xl">{service.title}</h1>
            </div>
          </div>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">{service.summary}</p>
        </div>
      </section>

      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="text-xs uppercase tracking-[0.22em] text-accent">What's included</div>
            <h2 className="mt-3 font-display text-3xl leading-tight text-foreground md:text-4xl">A clear scope, executed end-to-end.</h2>
            <ul className="mt-8 space-y-4">
              {service.details.map((d) => (
                <li key={d} className="flex gap-4 border-b border-border pb-4">
                  <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-base leading-relaxed text-foreground/90">{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="md:col-span-5">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-3xl border border-border bg-beige p-7">
                <div className="text-xs uppercase tracking-[0.18em] text-accent">Deliverables</div>
                <ul className="mt-4 space-y-3 text-sm text-foreground/90">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 text-accent" /><span>{d}</span></li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-border bg-brown-deep p-7 text-background">
                <h3 className="font-display text-xl">Get started with {service.title}</h3>
                <p className="mt-2 text-sm text-background/70">Share your requirement — we'll respond with a clear quote and timeline within one business day.</p>
                <div className="mt-5 flex flex-col gap-2">
                  <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-background/90">Request a quote <ArrowUpRight className="h-4 w-4" /></Link>
                  <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-background/30 px-5 py-2.5 text-sm font-medium hover:bg-background/10">
                    <MessageCircle className="h-4 w-4" /> WhatsApp us
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-border bg-beige py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-display text-2xl text-foreground md:text-3xl">Explore other services</h2>
            <Link to="/services" className="text-sm font-medium text-foreground underline-offset-4 hover:underline">View all →</Link>
          </div>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {others.map((s) => (
              <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="group flex flex-col gap-3 bg-background p-6 hover:bg-beige">
                <ServiceIcon name={s.icon} className="h-6 w-6 text-accent" />
                <div className="font-display text-lg text-foreground">{s.title}</div>
                <div className="text-xs text-muted-foreground">{s.tagline}</div>
                <span className="mt-auto inline-flex items-center gap-1 text-xs font-medium uppercase tracking-[0.16em] text-foreground">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}