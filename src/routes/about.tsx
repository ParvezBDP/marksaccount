import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Marks Accounting & Taxation" },
      { name: "description", content: "Learn about Marks Accounting & Taxation — a senior-led firm helping businesses with accounting, taxation and compliance from Goalpara, Assam." },
      { property: "og:title", content: "About Marks Accounting & Taxation" },
      { property: "og:description", content: "Senior-led, technology-enabled accounting and taxation services for India's growing businesses." },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: ShieldCheck, title: "Integrity first", text: "Every filing, every number is reviewed before it leaves our desk." },
  { icon: Sparkles, title: "Quiet excellence", text: "We obsess over the boring, important details so you don't have to." },
  { icon: HeartHandshake, title: "Long-term partners", text: "We grow with our clients — from first GSTIN to multi-state operations." },
  { icon: Award, title: "Senior-led work", text: "Engagements are owned by experienced practitioners, not handed off." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About"
        title={<>A modern accounting firm with <span className="text-accent">old-school</span> standards.</>}
        lead="Marks Accounting & Taxation was founded with one belief — that small and mid-sized businesses deserve the same quality of financial advice that large corporations enjoy."
      />
      <section className="bg-background py-24 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="font-display text-3xl leading-tight text-foreground md:text-4xl">Our story</h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>From our office in Goalpara, Assam, our team serves clients across India — retailers, manufacturers, traders, professionals and growing enterprises. We combine technical depth with a service standard inspired by Big-4 consulting.</p>
              <p>Every engagement is led by experienced practitioners and supported by a careful, technology-enabled workflow. We file on time, every time, and treat your numbers with the discretion they deserve.</p>
              <p>Whether you need a single GST return or a complete accounting back-office, our promise is the same: accuracy, accountability and a partner who picks up the phone.</p>
            </div>
          </div>
          <aside className="md:col-span-5">
            <div className="rounded-3xl border border-border bg-beige p-8">
              <div className="text-xs uppercase tracking-[0.22em] text-accent">By the numbers</div>
              <div className="mt-6 grid grid-cols-2 gap-6">
                {[["500+", "Returns filed"], ["100+", "Active clients"], ["9", "Service lines"], ["100%", "On-time filing"]].map(([n, l]) => (
                  <div key={l}>
                    <div className="font-display text-4xl text-foreground">{n}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
      <section className="bg-beige py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs uppercase tracking-[0.22em] text-accent">Values</div>
          <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight text-foreground md:text-5xl">What guides our work</h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-background p-8">
                <v.icon className="h-7 w-7 text-accent" />
                <h3 className="mt-5 font-display text-xl text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-brown-deep py-20 text-background">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
          <h2 className="font-display text-3xl leading-tight md:text-4xl">Ready to work with a firm that cares?</h2>
          <Link to="/contact" className="inline-flex rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-background/90">Start the conversation</Link>
        </div>
      </section>
    </SiteLayout>
  );
}