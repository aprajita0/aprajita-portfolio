import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" eyebrow="01 — About" title="Engineer at the intersection of AI and impact.">
      <div className="max-w-3xl space-y-5 text-foreground/80 leading-relaxed text-pretty text-base sm:text-lg">
        <p>
          I'm a senior at the <span className="text-foreground font-medium">City College of New York</span>,
          graduating in June 2026 with a B.S. in Computer Science and a 3.8 GPA.
          I've worked across backend systems, full-stack applications, and applied
          machine learning, with a growing interest in healthcare technology and
          software that solves meaningful problems.
        </p>
        <p>
          Along the way, I've built REST APIs in fast-paced engineering environments,
          contributed to deep learning pipelines for cardiac MRI research, and developed
          a multithreaded TCP server for a real-time multiplayer simulation. I like work
          that combines technical depth with real-world usefulness.
        </p>
        <p>
          At the core, I enjoy building software that is thoughtful, reliable, and easy to trust.
        </p>
      </div>
    </Section>
  );
}
