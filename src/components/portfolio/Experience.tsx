import { Section } from "./Section";

const ROLES = [
  {
    role: "Research Assistant",
    org: "BioMind AI Lab — CCNY × WVU Medicine",
    period: "May 2025 — Sep 2025",
    location: "New York, NY",
    bullets: [
      "Cut MRI annotation time by 60% by architecting modular Python preprocessing pipelines that scaled across cardiac imaging datasets.",
      "Co-developed an AI pipeline pairing CNNs with LLM-driven analysis to streamline cardiovascular MRI workflows end-to-end.",
    ],
  },
  {
    role: "Deep Learning Research Intern",
    org: "Memorial Sloan Kettering Cancer Center",
    period: "Jun 2024 — Dec 2024",
    location: "New York, NY",
    bullets: [
      "Boosted MRI image quality to SSIM 0.85 by implementing and tuning a VDSR super-resolution model.",
      "Drove experimentation, evaluation, and reproducibility for a clinical-grade MRI enhancement workflow.",
    ],
  },
  {
    role: "Software Engineering Intern",
    org: "Unadat",
    period: "Feb 2024 — Apr 2024",
    location: "New York, NY",
    bullets: [
      "Lifted backend reliability by 40% by leading RESTful API development across Agile sprints.",
      "Lifted user engagement by 25% through targeted UI refinements and front-end polish.",
      "Shipped full-stack milestone-tracking features in PHP, MySQL, and JavaScript.",
    ],
  },
  {
    role: "Data Science Fellow",
    org: "Operartis",
    period: "Aug 2023 — Dec 2023",
    location: "Remote",
    bullets: [
      "Improved transaction-matching accuracy by 25% with a Python-based financial matching engine.",
      "Authored reusable ingestion and error-handling modules that hardened the pipeline against bad data.",
    ],
  },
  {
    role: "Research Project Intern",
    org: "Advanced Science Research Center",
    period: "Jun 2023 — Aug 2023",
    location: "New York, NY",
    bullets: [
      "Cut data processing time by 30% by automating spectroscopy workflows in MATLAB.",
      "Bridged MATLAB and lab instrument APIs for reliable real-time data acquisition.",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="02 — Experience" title="Where I've shipped.">
      <ol className="relative border-l border-border/80 ml-2">
        {ROLES.map((r) => (
          <li key={r.role + r.period} className="relative pl-8 pb-12 last:pb-0 group">
            <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-background border-2 border-accent group-hover:scale-125 transition-transform" />
            <div className="rounded-xl border border-border bg-card p-6 hover:border-accent/60 transition-colors">
              <div className="flex flex-wrap justify-between gap-2 mb-2">
                <h3 className="font-semibold text-lg">
                  {r.role} <span className="text-accent">·</span>{" "}
                  <span className="text-foreground/80 font-normal">{r.org}</span>
                </h3>
                <p className="font-mono text-xs text-muted-foreground">
                  {r.period} · {r.location}
                </p>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-foreground/80 leading-relaxed">
                {r.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="text-accent mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
