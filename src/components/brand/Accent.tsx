import { Fragment } from "react";

/** Renders `*emphasis*` segments as the brand's italic accent. */
export function Accent({ text, className }: { text: string; className?: string }) {
  return (
    <>
      {text.split("*").map((part, i) =>
        i % 2 === 1 ? (
          <em key={i} className={className ?? "italic text-royal-bright"}>
            {part}
          </em>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
