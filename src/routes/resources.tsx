import { createFileRoute } from "@tanstack/react-router";
import { Download, FileText } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Downloads & Resources — MARKS Accounting & Taxation" },
      { name: "description", content: "Download ITR-3 forms and CBDT e-filing validation rules for Assessment Year 2026-27, free from MARKS Accounting & Taxation." },
      { property: "og:title", content: "Downloads & Resources — MARKS Accounting & Taxation" },
      { property: "og:description", content: "ITR-3 form and CBDT validation rules for AY 2026-27, ready to download." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Resources,
});

const DOWNLOADS = [
  {
    title: "ITR-3 Form — AY 2026-27",
    desc: "Official Income Tax Return Form ITR-3 for individuals and HUFs having income from business or profession.",
    meta: "PDF · 1.3 MB",
    url: "/api/public/download?file=itr3-form",
  },
  {
    title: "CBDT e-Filing ITR-3 Validation Rules V1.0 — AY 2026-27",
    desc: "Category-wise validation rules issued by CBDT for error-free e-filing of ITR-3 returns.",
    meta: "PDF · 1.1 MB",
    url: "/api/public/download?file=itr3-validation-rules",
  },
];

function Resources() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Downloads"
        title="Resources & official forms"
        lead="Latest income tax forms and CBDT guidance for Assessment Year 2026-27 — free to download, always up to date."
      />
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {DOWNLOADS.map((d) => (
              <article key={d.title} className="flex flex-col gap-4 bg-background p-8">
                <FileText className="h-7 w-7 text-accent" />
                <div>
                  <h2 className="font-display text-xl leading-snug text-foreground">{d.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
                </div>
                <div className="mt-auto flex flex-wrap items-center gap-4 pt-2">
                  <Button asChild className="rounded-full px-5 py-2.5">
                    <a href={d.url}>
                      <Download className="h-4 w-4" /> Download PDF
                    </a>
                  </Button>
                  <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{d.meta}</span>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Need help filing your ITR-3? Our team handles the entire process end-to-end — from computation to e-verification.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
