import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-royal text-white hover:bg-royal-deep focus-visible:outline-royal-bright",
  light:
    "bg-white text-ink hover:bg-paper focus-visible:outline-white",
  outline:
    "border border-white/25 text-white hover:border-white/60 hover:bg-white/5 focus-visible:outline-white",
} as const;

export function ButtonLink({
  href,
  variant = "primary",
  arrow = true,
  className,
  children,
}: {
  href: string;
  variant?: keyof typeof variants;
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-3 px-7 text-[0.95rem] font-medium tracking-tight transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4",
        variants[variant],
        className,
      )}
    >
      {children}
      {arrow && (
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </a>
  );
}
