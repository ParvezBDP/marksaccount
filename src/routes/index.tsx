import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { CONTACT, FAQS, SERVICES, TESTIMONIALS } from "@/lib/site-data";
import logoAsset from "@/assets/marks-logo.asset.json";
import qrAsset from "@/assets/whatsapp-qr.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marks Accounting & Taxation — Trusted Financial Partners" },
      { name: "description", content: "Premium accounting, GST, income tax and compliance services for businesses across India. Based in Goalpara, Assam." },
      { property: "og:title", content: "Marks Accounting & Taxation" },
      { property: "og:description", content: "GST, Income Tax, Bookkeeping, TDS, IEC and project reports — handled end-to-end." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <Approach />
      <Testimonials />
      <QRBlock />
      <FAQ />
      <CTABlock />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <HeroInner />
  );
}

const HERO_WORDS: { text: string; accent?: boolean; breakAfter?: boolean }[] = [
  { text: "Precision" },
  { text: "in" },
  { text: "numbers.", breakAfter: true },
  { text: "Confidence", accent: true },
  { text: "in" },
  { text: "compliance." },
];

function TypewriterHeading() {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "erasing">("typing");

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (phase === "typing") {
      if (count < HERO_WORDS.length) {
        timer = setTimeout(() => setCount((c) => c + 1), 260);
      } else {
        timer = setTimeout(() => setPhase("pausing"), 0);
      }
    } else if (phase === "pausing") {
      timer = setTimeout(() => setPhase("erasing"), 2000);
    } else {
      if (count > 0) {
        timer = setTimeout(() => setCount((c) => c - 1), 140);
      } else {
        timer = setTimeout(() => setPhase("typing"), 300);
      }
    }
    return () => clearTimeout(timer);
  }, [count, phase]);

  return (
    <>
      {HERO_WORDS.slice(0, count).map((w, i) => (
        <span key={i} className={w.accent ? "text-accent" : undefined}>
          {w.text}
          {w.breakAfter ? <br /> : i < count - 1 ? " " : ""}
        </span>
      ))}
    </>
  );
}

function HeroInner() {
  return (
    <section className="relative overflow-hidden bg-beige">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(var(--brown-deep) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="pointer-events-none absolute -top-40 right-0 h-[480px] w-[480px] rounded-full bg-accent/15 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:py-20 md:grid-cols-12 md:gap-14 md:py-32">
        <div className="min-w-0 md:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Where numbers meet trust
          </div>
          <h1
            className="mt-6 font-display text-[2rem] leading-[1.08] text-foreground sm:text-5xl md:text-6xl lg:text-7xl min-h-[2.4em] sm:min-h-[2.2em]"
            style={{ hyphens: "none", overflowWrap: "normal", wordBreak: "normal" }}
          >
            <TypewriterHeading />
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-7 sm:text-lg">
            Marks Accounting & Taxation is a full-service consulting firm helping entrepreneurs, SMEs and enterprises stay compliant, optimise tax and grow with clarity.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/services" className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
              Explore services <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-muted">
              Book a consultation
            </Link>
          </div>
          <div className="mt-12 grid max-w-xl grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { n: "200+", l: "Clients served" },
              { n: "100%", l: "Compliance focus" },
              { n: "10+", l: "Years in practice" },
              { n: "5.0", l: "Client rating", star: true },
            ].map((s) => (
              <div key={s.l}>
                <div className="flex items-center gap-1.5 font-display text-3xl text-foreground">
                  {s.star && <Star className="h-5 w-5 fill-current text-accent" />}
                  {s.n}
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative md:col-span-5">
          <div className="relative mx-auto aspect-square w-full max-w-xs rounded-3xl border border-border bg-background p-6 shadow-[var(--shadow-luxe)] sm:max-w-md sm:p-8">
            <img src={logoAsset.url} alt="Marks Accounting & Taxation logo" className="h-full w-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = ["GST", "Income Tax", "TDS / TCS", "ROC / MCA", "DGFT", "TRACES"];
  return (
    <section className="border-y border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-10 gap-y-4 px-6 py-6 text-xs uppercase tracking-[0.22em] text-muted-foreground">
        <span className="text-foreground/80">Compliance expertise across</span>
        {items.map((i) => <span key={i}>{i}</span>)}
      </div>
    </section>
  );
}

function ServicesGrid() {
  return (
    <section id="services" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-accent">What we do</div>
            <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight text-foreground md:text-5xl">Every service your business needs — under one roof</h2>
          </div>
          <Link to="/services" className="text-sm font-medium text-foreground underline-offset-4 hover:underline">All services →</Link>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 md:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group flex flex-col gap-4 bg-background p-8 transition-colors hover:bg-beige"
            >
              <ServiceIcon name={s.icon} className="h-7 w-7 text-accent" />
              <div>
                <h3 className="font-display text-xl text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
              </div>
              <div className="mt-auto inline-flex items-center gap-1 text-xs font-medium uppercase tracking-[0.16em] text-foreground">
                Learn more <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Approach() {
  const steps = [
    ["Discover", "We understand your business, books and pain points in a focused discovery call."],
    ["Design", "A tailored compliance & accounting roadmap with clear timelines and deliverables."],
    ["Deliver", "Execution by a dedicated team, monthly MIS and proactive advisory."],
  ];
  return (
    <section className="bg-beige py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="text-xs uppercase tracking-[0.22em] text-accent">Our approach</div>
          <h2 className="mt-3 font-display text-4xl leading-tight text-foreground md:text-5xl">How we work — no surprises, no delays</h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">We combine disciplined methodology with dedicated attention — so every client gets senior-level expertise and clear, predictable outcomes.</p>
        </div>
        <div className="md:col-span-7">
          <ol className="space-y-px overflow-hidden rounded-2xl border border-border bg-border">
            {steps.map(([t, d], i) => (
              <li key={t} className="grid grid-cols-[auto_1fr] items-start gap-6 bg-background p-8">
                <div className="font-display text-3xl text-accent">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <div className="font-display text-xl text-foreground">{t}</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="bg-background py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-accent">Clients</div>
          <div className="mt-3 flex flex-wrap items-center gap-4">
            <h2 className="max-w-3xl font-display text-4xl leading-tight text-foreground md:text-5xl">Real words from real clients</h2>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">
              <Star className="h-4 w-4 fill-current" />
              5.0 rated
            </span>
          </div>
        </div>
      </div>
      <div className="mt-14 relative overflow-hidden">
        <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]">
          {doubled.map((t, i) => (
            <figure key={`${t.name}-${i}`} className="w-[340px] md:w-[420px] flex-shrink-0 flex flex-col rounded-2xl border border-border bg-background p-7 shadow-[var(--shadow-card)]">
              <Quote className="h-6 w-6 text-accent" />
              <div className="mt-3 flex items-center gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, si) => (<Star key={si} className="h-4 w-4 fill-current" />))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">"{t.quote}"</blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="text-sm font-semibold text-foreground">{t.name}</div>
                {t.company && <div className="text-xs text-muted-foreground">{t.company}</div>}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function QRBlock() {
  return (
    <section className="bg-beige-deep py-24 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:grid-cols-1 md:grid-cols-2">
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-accent">We're one message away</div>
          <h2 className="mt-3 font-display text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">Prefer texting? So do we.</h2>
          <p className="mt-5 max-w-md text-base text-muted-foreground">Scan. Chat. Get answers — usually within the hour. We reply fast. No bots, no delays.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-medium text-white hover:opacity-90">Chat on WhatsApp</a>
            <a href={`tel:${CONTACT.phones[0].replace(/\s/g, "")}`} className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-muted">Call {CONTACT.phones[0]}</a>
            <a href={`tel:${CONTACT.phones[1].replace(/\s/g, "")}`} className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-muted">Call {CONTACT.phones[1]}</a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="rounded-3xl border border-border bg-background p-6 shadow-[var(--shadow-luxe)]">
            <img src={qrAsset.url} alt="Scan to chat on WhatsApp" className="h-52 w-52 object-contain sm:h-64 sm:w-64" />
            <div className="mt-3 text-center text-xs uppercase tracking-[0.18em] text-muted-foreground">Scan with your camera</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="text-xs uppercase tracking-[0.22em] text-accent">FAQ</div>
          <h2 className="mt-3 font-display text-4xl leading-tight text-foreground md:text-5xl">Things our clients asked before saying yes</h2>
          <p className="mt-5 text-muted-foreground">Can't find what you're looking for? <Link to="/contact" className="text-foreground underline-offset-4 hover:underline">Reach out →</Link></p>
        </div>
        <div className="md:col-span-8">
          <div className="divide-y divide-border border-y border-border">
            {FAQS.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                  <span className="font-display text-lg text-foreground">{f.q}</span>
                  <span className="mt-1 text-2xl leading-none text-accent transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 pr-12 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTABlock() {
  return (
    <section className="bg-brown-deep py-20 text-background">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center">
        <div>
          <h2 className="font-display text-3xl leading-tight md:text-4xl">Your books deserve better. Let's fix that.</h2>
          <p className="mt-3 max-w-xl text-background/70">20 minutes. We'll tell you exactly what you need.</p>
        </div>
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-background/90">
          <CheckCircle2 className="h-4 w-4" /> Schedule a consultation
        </Link>
      </div>
    </section>
  );
}
