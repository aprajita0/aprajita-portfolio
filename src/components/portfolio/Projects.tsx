import { Github, ArrowUpRight, Sparkles } from "lucide-react";
import { Section } from "./Section";

type Project = {
  name: string;
  date?: string;
  blurb: string;
  highlights: string[];
  stack: string[];
  github: string;
  featured?: boolean;
};

const PROJECTS: Project[] = [
  {
    name: "MentalMed Interaction Checker",
    date: "Mar 2026 — Present",
    blurb:
      "A full-stack medication safety tool that detects drug interactions in real time using RxNorm and DrugBank APIs.",
    highlights: [
      "Real-time drug interaction analysis",
      "Backend API design & data flow modeling",
      "Healthcare-focused UX with a responsive React frontend",
    ],
    stack: ["React", "Django", "MongoDB", "RxNorm API", "DrugBank API"],
    github: "https://github.com/aprajita0/MentalMed-Interaction-Checker",
    featured: true,
  },
  {
    name: "TrustSphere E-Bidding System",
    date: "Oct 2024 — Dec 2024",
    blurb:
      "A scalable, full-stack e-bidding platform engineered for real-time auction workflows.",
    highlights: [
      "Built 30+ RESTful APIs across the bidding lifecycle",
      "Designed scalable MongoDB schemas and tuned queries",
      "Hardened reliability with Jest test suites",
    ],
    stack: ["Node.js", "MongoDB", "React", "Jest"],
    github: "https://github.com/aprajita0/E-bidding_322Project",
    featured: true,
  },
  {
    name: "MyIdolList",
    blurb:
      "A community marketplace for K-pop fans to manage photocard collections and trade with verified users.",
    highlights: [
      "Collection management and trading workflows",
      "Marketplace flows with auth and AWS-backed storage",
      "Cleanly separated full-stack architecture",
    ],
    stack: ["React", "Tailwind", "Vite", "Node.js", "MongoDB", "AWS"],
    github: "https://github.com/aprajita0/csc473project",
    featured: true,
  },
  {
    name: "Mechanix Legions — Multiplayer Robotic Soccer",
    date: "Senior Design · CSC 59867",
    blurb:
      "A real-time multiplayer robotic soccer simulation with autonomous AI agents and a custom multithreaded TCP server using the WYSIWIS paradigm.",
    highlights: [
      "Custom multithreaded TCP server (.NET TcpListener)",
      "Role-based agents — attacker, midfielder, defender, goalkeeper",
      "Autonomous behavior with NavMesh & tactical decision logic",
      "Fault-injection system for perception and action errors",
      "Live scoreboard, match timer, and physics-based goal detection",
    ],
    stack: ["Unity", "C#", ".NET", "TcpListener", "NavMesh", "Multiplayer"],
    github:
      "https://github.com/aprajita0/SD-Multiplayer-Robotic-Soccer-Game#mechanix-legions--multiplayer-robotic-soccer-simulation",
    featured: true,
  },
  {
    name: "Snake Rush",
    blurb:
      "A 2D arcade Unity game where the snake grows on coin pickups, dodges a chasing hazard, and tracks high scores.",
    highlights: [
      "Growth mechanics tied to coin collection",
      "Rare coins worth bonus points",
      "Hazard AI that pursues the player",
      "Collision-based game-over and score tracking",
    ],
    stack: ["Unity 2D", "C#", "TextMeshPro"],
    github: "https://github.com/aprajita0/Midterm-Game-Dev",
  },
];

export function Projects() {
  return (
    <Section id="projects" eyebrow="03 — Projects" title="Selected work.">
      <div className="grid md:grid-cols-2 gap-5">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.name} p={p} />
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <a
      href={p.github}
      target="_blank"
      rel="noreferrer"
      className={`group relative flex flex-col rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/10 ${
        p.featured ? "border-accent/40 hover:border-accent" : "border-border hover:border-accent/60"
      }`}
    >
      {p.featured && (
        <div className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-accent/15 text-accent px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider">
          <Sparkles className="h-3 w-3" /> Featured
        </div>
      )}

      <div className="flex items-start justify-between gap-4 mb-2">
        <h3 className="text-xl font-semibold pr-20 group-hover:text-accent transition-colors">
          {p.name}
        </h3>
      </div>
      {p.date && (
        <p className="font-mono text-xs text-muted-foreground mb-3">{p.date}</p>
      )}
      <p className="text-sm text-foreground/80 leading-relaxed mb-4 text-pretty">
        {p.blurb}
      </p>

      <ul className="space-y-1.5 text-sm text-foreground/75 mb-5">
        {p.highlights.map((h) => (
          <li key={h} className="flex gap-2">
            <span className="text-accent mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-4 border-t border-border flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {p.stack.map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] uppercase tracking-wider rounded-full border border-border px-2 py-0.5 text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
        <span className="inline-flex items-center gap-1 text-xs font-medium text-foreground/80 group-hover:text-accent transition-colors">
          <Github className="h-4 w-4" /> Code
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </a>
  );
}
