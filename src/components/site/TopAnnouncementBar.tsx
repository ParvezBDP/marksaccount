import { Bell } from "lucide-react";

export function TopAnnouncementBar() {
  return (
    <div className="relative z-50 w-full bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2.5 sm:px-6">
        <Bell className="hidden h-3.5 w-3.5 shrink-0 text-blue-200 sm:block" aria-hidden="true" />
        <span className="text-center text-xs font-medium leading-snug tracking-wide sm:text-sm">
          The last date for filing ITR-3 and ITR-4 for Assessment Year 2026–27 is <strong className="font-semibold text-amber-300">31 August 2026</strong>
        </span>
      </div>
    </div>
  );
}
