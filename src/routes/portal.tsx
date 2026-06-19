import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Lock, ShieldCheck, FileText, Clock, Cloud } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CONTACT } from "@/lib/site-data";

export const Route = createFileRoute("/portal")({
  head: () => ({
    meta: [
      { title: "Client Portal — Marks Accounting & Taxation" },
      { name: "description", content: "Secure client portal for Marks Accounting & Taxation clients to access documents, filings and reports." },
      { property: "og:title", content: "Client Portal — Marks" },
      { property: "og:description", content: "Sign in to access your filings, documents and reports." },
    ],
  }),
  component: PortalPage,
});

function PortalPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <SiteLayout>
      <section className="grid min-h-[calc(100vh-5rem)] md:grid-cols-2">
        <aside className="relative hidden overflow-hidden bg-brown-deep p-12 text-background md:flex md:flex-col md:justify-between">
          <div className="pointer-events-none absolute -top-32 -left-20 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative">
            <Link to="/" className="text-xs uppercase tracking-[0.22em] text-background/60">← Back to site</Link>
            <h1 className="mt-10 font-display text-5xl leading-[1.05]">Your books, your <span className="text-accent">filings,</span> always within reach.</h1>
            <p className="mt-6 max-w-md text-background/75">The Marks Client Portal gives you a single, secure home for your financial documents and compliance status.</p>
          </div>
          <ul className="relative space-y-4 text-sm text-background/85">
            {[
              [FileText, "Download filed returns & acknowledgements"],
              [Cloud, "Upload bills, bank statements & KYC securely"],
              [Clock, "Track due dates and pending actions"],
              [ShieldCheck, "Bank-grade encryption & access controls"],
            ].map(([Icon, t]) => {
              const I = Icon as typeof FileText;
              return (
                <li key={t as string} className="flex items-center gap-3"><I className="h-4 w-4 text-accent" />{t as string}</li>
              );
            })}
          </ul>
        </aside>

        <div className="flex items-center justify-center bg-beige px-6 py-20">
          <div className="w-full max-w-md">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <Lock className="h-3 w-3" /> Secure sign-in
            </div>
            <h2 className="mt-5 font-display text-4xl text-foreground">Client login</h2>
            <p className="mt-3 text-sm text-muted-foreground">Use the credentials shared by your engagement manager. New here? <Link to="/contact" className="text-foreground underline-offset-4 hover:underline">Request access →</Link></p>

            {submitted ? (
              <div className="mt-8 rounded-2xl border border-border bg-background p-6 text-sm text-foreground">
                Thanks — if an account exists for that email, you'll receive sign-in instructions shortly. For urgent access, WhatsApp us at <a className="font-medium underline-offset-4 hover:underline" href={CONTACT.whatsapp} target="_blank" rel="noreferrer">+91 97062 73154</a>.
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="mt-8 space-y-4 rounded-2xl border border-border bg-background p-6"
              >
                <Field label="Email" type="email" name="email" placeholder="you@business.com" required />
                <Field label="Password" type="password" name="password" placeholder="••••••••" required />
                <div className="flex items-center justify-between text-xs">
                  <label className="inline-flex items-center gap-2 text-muted-foreground">
                    <input type="checkbox" className="h-3.5 w-3.5 rounded border-border" /> Remember me
                  </label>
                  <a href="#" className="text-muted-foreground hover:text-foreground">Forgot password?</a>
                </div>
                <button type="submit" className="w-full rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                  Sign in to portal
                </button>
              </form>
            )}
            <p className="mt-6 text-center text-xs text-muted-foreground">
              Protected by industry-standard encryption. By signing in you agree to our terms of engagement.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">{label}</span>
      <input
        {...rest}
        className="mt-2 w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none focus:ring-2 focus:ring-ring/30"
      />
    </label>
  );
}