import { cn } from "@/lib/utils";

/** Nexova mark: an "N" whose diagonal is a single stroke, with a node at its apex. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={cn("size-7", className)}
      fill="none"
    >
      <path
        d="M6 26V6l20 20V6"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <circle cx="26" cy="6" r="2.6" className="fill-royal-bright" />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="font-display text-[1.65rem] leading-none tracking-tight">
        Nexova
      </span>
    </span>
  );
}
