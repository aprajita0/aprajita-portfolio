import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  const header = useReveal<HTMLDivElement>();
  const body = useReveal<HTMLDivElement>();

  return (
    <section id={id} className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div
          ref={header.ref}
          className={`reveal mb-12 flex items-end justify-between gap-6 flex-wrap ${header.visible ? "is-visible" : ""}`}
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-3">
              {eyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
          </div>
          <div className="hidden sm:block flex-1 h-px bg-border" />
        </div>
        <div
          ref={body.ref}
          className={`reveal ${body.visible ? "is-visible" : ""}`}
          style={{ transitionDelay: "120ms" }}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
