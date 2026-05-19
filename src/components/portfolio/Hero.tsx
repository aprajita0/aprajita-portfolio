import { useEffect, useRef } from "react";
import { ArrowRight, Github, Linkedin, Mail, FileText } from "lucide-react";

export function Hero() {
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY * 0.15;
        el.style.transform = `translate3d(0, ${y}px, 0)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden"
    >
      <div
        ref={gridRef}
        className="absolute inset-0 grain-bg opacity-40 pointer-events-none will-change-transform"
      />
      <div
        aria-hidden
        className="absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full blur-3xl opacity-30 animate-pulse-slow"
        style={{ background: "radial-gradient(closest-side, var(--teal), transparent)" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-40 h-[480px] w-[480px] rounded-full blur-3xl opacity-20 animate-pulse-slow"
        style={{ background: "radial-gradient(closest-side, var(--navy), transparent)", animationDelay: "1.5s" }}
      />

      <div className="relative mx-auto max-w-6xl px-6 w-full">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur px-3 py-1 text-xs text-muted-foreground mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          Open to Summer & New-Grad SWE / AI roles
        </div>

        <h1 className="relative text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] text-balance">
          <span
            aria-hidden
            className="absolute -inset-x-6 -inset-y-4 -z-10 blur-3xl opacity-40 dark:opacity-50 pointer-events-none"
            style={{ background: "radial-gradient(40% 60% at 30% 50%, var(--teal), transparent 70%)" }}
          />
          Aprajita <span className="text-accent">Srivastava</span>
        </h1>

        <p className="mt-5 text-lg sm:text-xl text-muted-foreground font-mono">
          Computer Science Student <span className="text-accent">/</span> Software Engineer{" "}
          <span className="text-accent">/</span> AI&nbsp;·&nbsp;ML
        </p>

        <p className="mt-8 max-w-2xl text-base sm:text-lg text-foreground/80 text-pretty leading-relaxed">
          I build practical software at the edge of AI and healthcare — from
          MRI deep-learning pipelines at Memorial Sloan Kettering to full-stack
          systems with REST APIs, scalable databases, and real-time multiplayer
          backends. I care about clean architecture, measurable impact, and
          shipping things that work.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium hover:border-accent hover:text-accent transition-colors"
          >
            <Mail className="h-4 w-4" /> Contact
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium hover:border-accent hover:text-accent transition-colors"
          >
            <FileText className="h-4 w-4" /> Resume
          </a>
        </div>

        <div className="mt-10 flex items-center gap-5 text-muted-foreground">
          <a
            href="https://github.com/aprajita0"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-accent transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/aprajita-srivastava25"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-accent transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:aprajita.srivastava@cuny.edu"
            aria-label="Email"
            className="hover:text-accent transition-colors"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
