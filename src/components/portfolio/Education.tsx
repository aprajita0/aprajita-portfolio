import { GraduationCap } from "lucide-react";
import { Section } from "./Section";

export function Education() {
  return (
    <Section id="education" eyebrow="05 — Education" title="Academics.">
      <div className="rounded-2xl border border-border bg-card p-8 flex flex-col md:flex-row gap-6 hover:border-accent/60 transition-colors">
        <div className="h-14 w-14 rounded-xl bg-accent/15 text-accent flex items-center justify-center shrink-0">
          <GraduationCap className="h-7 w-7" />
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap justify-between gap-3 mb-2">
            <h3 className="text-xl font-semibold">City College of New York</h3>
            <p className="font-mono text-xs text-muted-foreground">
              New York, NY · Graduating June 2026
            </p>
          </div>
          <p className="text-foreground/80">
            B.S. in Computer Science · Grove School of Engineering
          </p>
          <div className="mt-5 grid sm:grid-cols-3 gap-3 text-sm">
            <Stat label="GPA" value="3.8 / 4.0" />
            <Stat label="Honors" value="Dean's List 2021–Present" />
            <Stat label="Awards" value="Grove School Scholarship" />
          </div>
        </div>
      </div>
    </Section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border p-3">
      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
      <p className="mt-1 font-medium">{value}</p>
    </div>
  );
}
