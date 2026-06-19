import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { CONTACT } from "@/lib/site-data";
import qrAsset from "@/assets/whatsapp-qr.asset.json";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Marks Accounting & Taxation" },
      { name: "description", content: "Get in touch with Marks Accounting & Taxation — call, email, WhatsApp or visit our Goalpara office." },
      { property: "og:title", content: "Contact Marks Accounting & Taxation" },
      { property: "og:description", content: "Call, email, WhatsApp or visit us in Goalpara, Assam." },
    ],
  }),
  component: ContactPage,
});

const CARDS = [
  {
    icon: Phone,
    label: "Call us",
    primary: CONTACT.phones.join(", "),
    href: `tel:${CONTACT.phones[0].replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email us",
    primary: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    primary: "Chat with us",
    href: CONTACT.whatsapp,
  },
  {
    icon: MapPin,
    label: "Visit us",
    primary: CONTACT.address,
    href: "https://maps.google.com/?q=Tilapara+Central+Bank+Goalpara+Assam",
  },
];

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title={<>Let's talk about your <span className="text-accent">books, taxes</span> and growth.</>}
        lead="Share a few details and we'll get back within one business day. For urgent matters, WhatsApp is the fastest way to reach us."
      />

      <section className="bg-background py-16">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c) => (
            <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="group flex items-start gap-4 rounded-2xl border border-border bg-background p-6 transition-colors hover:bg-beige">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-beige-deep text-accent group-hover:bg-background">
                <c.icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{c.label}</div>
                <div className="mt-1 text-sm font-medium leading-snug text-foreground">{c.primary}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-beige py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <ContactForm />
          </div>
          <aside className="md:col-span-5 space-y-6">
            <div className="rounded-3xl border border-border bg-background p-7 text-center shadow-[var(--shadow-card)]">
              <div className="text-xs uppercase tracking-[0.22em] text-accent">WhatsApp QR</div>
              <img src={qrAsset.url} alt="Scan to chat on WhatsApp" className="mx-auto mt-5 h-56 w-56 object-contain" />
              <p className="mt-4 text-sm text-muted-foreground">Scan to start a WhatsApp chat instantly.</p>
            </div>
            <div className="rounded-3xl border border-border bg-background p-7">
              <div className="text-xs uppercase tracking-[0.22em] text-accent">Follow us</div>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
                <a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent">
                  <Instagram className="h-4 w-4" /> @team_marks
                </a>
                <a href={CONTACT.facebook} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent">
                  <Facebook className="h-4 w-4" /> Marks
                </a>
                <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent">
                  <Linkedin className="h-4 w-4" /> Marks
                </a>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">For updates, tips and behind-the-scenes from the team.</p>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <div className="rounded-3xl border border-border bg-background p-8 shadow-[var(--shadow-card)] md:p-10">
      <h2 className="font-display text-3xl text-foreground">Send a message</h2>
      <p className="mt-2 text-sm text-muted-foreground">Tell us a bit about your business and what you need help with.</p>

      {sent ? (
        <div className="mt-8 rounded-2xl border border-accent/30 bg-accent/5 p-6 text-sm text-foreground">
          Thank you — your message has been recorded. A member of our team will reach out within one business day. For urgent matters, please WhatsApp <a className="font-medium underline-offset-4 hover:underline" href={CONTACT.whatsapp}>+91 97062 73154</a>.
        </div>
      ) : (
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="mt-8 grid gap-5"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name" name="name" placeholder="Your name" required />
            <Field label="Business name" name="business" placeholder="Optional" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Email" name="email" type="email" placeholder="you@business.com" required />
            <Field label="Phone" name="phone" type="tel" placeholder="+91" />
          </div>
          <label className="block">
            <span className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">Service of interest</span>
            <select name="service" className="mt-2 w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground focus:border-foreground focus:outline-none focus:ring-2 focus:ring-ring/30">
              <option>General enquiry</option>
              <option>Company Registration</option>
              <option>GST Registration & Returns</option>
              <option>Income Tax Filing</option>
              <option>Bookkeeping & Accounting</option>
              <option>TDS Compliance & Filing</option>
              <option>Project Report for Bank Loan</option>
              <option>IEC & Export Documentation</option>
              <option>Internal Control</option>
              <option>Digital Sewa</option>
              <option>TAN Application</option>
            </select>
          </label>
          <label className="block">
            <span className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">Message</span>
            <textarea
              name="message"
              rows={5}
              placeholder="How can we help?"
              className="mt-2 w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none focus:ring-2 focus:ring-ring/30"
              required
            />
          </label>
          <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 sm:w-auto">
            Send message
          </button>
        </form>
      )}
    </div>
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