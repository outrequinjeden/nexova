import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Nexova Demos",
    default: "Nexova Demos",
  },
};

export default function DemosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
