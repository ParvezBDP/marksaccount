import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { CONTACT, SERVICES } from "@/lib/site-data";
import logoAsset from "@/assets/marks-logo.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-border bg-brown-deep text-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="" className="h-11 w-11 rounded-md object-contain" />
            <div>
              <div className="font-display text-2xl text-background">MARKS</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-background/60">Accounting & Taxation</div>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-background/70">
            A trusted partner for accounting, taxation and compliance — serving entrepreneurs and enterprises across India with precision and care.
          </p>
          <a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm text-background/80 hover:text-background">
            <Instagram className="h-4 w-4" /> @team_marks
          </a>
        </div>
        <div className="md:col-span-4">
          <div className="text-xs uppercase tracking-[0.18em] text-background/50">Services</div>
          <ul className="mt-5 grid grid-cols-1 gap-2 text-sm">
            {SERVICES.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="text-background/75 hover:text-background">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <div className="text-xs uppercase tracking-[0.18em] text-background/50">Contact</div>
          <ul className="mt-5 space-y-3 text-sm text-background/75">
            <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0" /><span>{CONTACT.phones.join(", ")}</span></li>
            <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0" /><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
            <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /><span>{CONTACT.address}</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-background/55 sm:flex-row">
          <div>© {new Date().getFullYear()} Marks Accounting & Taxation. All rights reserved.</div>
          <div>Goalpara · Assam · India</div>
        </div>
      </div>
    </footer>
  );
}