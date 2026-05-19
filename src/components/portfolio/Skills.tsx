import { Section } from "./Section";

const GROUPS: { title: string; items: string[] }[] = [
  {
    title: "Languages & Frameworks",
    items: ["Python", "C++", "JavaScript", "C#", "PHP", "Node.js", "Django", "React"],
  },
  {
    title: "Databases & Tools",
    items: ["MongoDB", "MySQL", "AWS S3", "Docker", "Git"],
  },
  {
    title: "Software Engineering",
    items: ["REST APIs", "OOP", "System Design", "Cloud", "Agile", "TDD", "CI/CD"],
  },
  {
    title: "Machine Learning",
    items: ["CNNs", "VDSR", "Scikit-learn", "TensorFlow", "Data Pipelines"],
  },
  {
    title: "Game Dev & Systems",
    items: ["Unity", "Multiplayer Networking", "TCP Server Design", "NavMesh"],
  },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="04 — Skills" title="Tools I reach for.">
      <div className="grid md:grid-cols-2 gap-5">
        {GROUPS.map((g) => (
          <div
            key={g.title}
            className="rounded-2xl border border-border bg-card p-6 hover:border-accent/60 transition-colors"
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
              {g.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="rounded-md bg-muted px-3 py-1.5 text-sm text-foreground/85 border border-transparent hover:border-accent hover:text-accent transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
