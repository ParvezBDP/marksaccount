import { Book, Building2, Calculator, FileCheck, Globe, IdCard, Landmark, Monitor, Receipt, ShieldCheck } from "lucide-react";

const MAP = {
  monitor: Monitor,
  "id-card": IdCard,
  book: Book,
  "file-check": FileCheck,
  receipt: Receipt,
  calculator: Calculator,
  landmark: Landmark,
  globe: Globe,
  "shield-check": ShieldCheck,
  building: Building2,
} as const;

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = MAP[name as keyof typeof MAP] ?? Monitor;
  return <Icon className={className} />;
}