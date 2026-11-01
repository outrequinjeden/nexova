import { Container } from "@/components/layout/Container";
import type { DemoContent } from "@/types/demo";

export function DemoFooter({ content }: { content: DemoContent }) {
  return (
    <footer className="border-t border-current/10 bg-[var(--demo-surface)] py-12 text-[var(--demo-surface-foreground)]">
      <Container className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-base font-semibold">{content.brandName}</p>
          <p className="mt-1 text-sm opacity-60">{content.footer.tagline}</p>
        </div>
        <div className="text-sm opacity-60">
          <p>{content.contact.address}</p>
          <p>{content.contact.phone}</p>
        </div>
      </Container>
      <Container className="mt-8 border-t border-current/10 pt-6 text-center text-xs opacity-50">
        {content.footer.copyright}
      </Container>
    </footer>
  );
}
