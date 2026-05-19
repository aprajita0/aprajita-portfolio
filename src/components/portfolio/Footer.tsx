import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border mt-10">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Aprajita Srivastava · Designed & built with care.
        </p>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a
            href="https://github.com/aprajita0"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-accent transition-colors"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/in/aprajita-srivastava25"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-accent transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:aprajita.srivastava@cuny.edu"
            aria-label="Email"
            className="hover:text-accent transition-colors"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
