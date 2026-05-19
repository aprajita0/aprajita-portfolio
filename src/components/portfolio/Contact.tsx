import { useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Section } from "./Section";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio inquiry — ${data.get("name") || ""}`);
    const body = encodeURIComponent(
      `${data.get("message") || ""}\n\n— ${data.get("name") || ""} (${data.get("email") || ""})`
    );
    window.location.href = `mailto:aprajita.srivastava@cuny.edu?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <Section id="contact" eyebrow="06 — Contact" title="Let's build something.">
      <div className="grid md:grid-cols-5 gap-6">
        <div className="md:col-span-2 rounded-2xl border border-border bg-card p-7 flex flex-col">
          <p className="text-foreground/80 leading-relaxed mb-6 text-pretty">
            I'm actively looking for{" "}
            <span className="text-foreground font-medium">
              software engineering and AI/ML internships and new-grad roles
            </span>
            . Open to research collaborations and freelance work too — say hi.
          </p>
          <ul className="space-y-3 text-sm mt-auto">
            <ContactRow
              icon={<Mail className="h-4 w-4" />}
              label="aprajita.srivastava@cuny.edu"
              href="mailto:aprajita.srivastava@cuny.edu"
            />
            <ContactRow
              icon={<Linkedin className="h-4 w-4" />}
              label="linkedin.com/in/aprajita-srivastava25"
              href="https://linkedin.com/in/aprajita-srivastava25"
            />
            <ContactRow
              icon={<Github className="h-4 w-4" />}
              label="github.com/aprajita0"
              href="https://github.com/aprajita0"
            />
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="md:col-span-3 rounded-2xl border border-border bg-card p-7 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field name="name" label="Name" />
            <Field name="email" label="Email" type="email" />
          </div>
          <div>
            <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
              placeholder="What are you working on?"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            {sent ? "Opening your email…" : "Send message"}
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </Section>
  );
}

function Field({
  name,
  label,
  type = "text",
}: {
  name: string;
  label: string;
  type?: string;
}) {
  return (
    <div>
      <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required
        className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
      />
    </div>
  );
}

function ContactRow({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <li>
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noreferrer"
        className="flex items-center gap-3 text-foreground/80 hover:text-accent transition-colors"
      >
        <span className="h-8 w-8 rounded-md bg-muted flex items-center justify-center text-accent">
          {icon}
        </span>
        <span className="truncate">{label}</span>
      </a>
    </li>
  );
}
