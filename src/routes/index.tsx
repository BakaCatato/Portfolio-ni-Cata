import { createFileRoute } from "@tanstack/react-router";
import { projects, skills } from "../data/content";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Jhone — Frontend Developer & Tech Enthusiast" },
      {
        name: "description",
        content:
          "Personal portfolio of Jhone, a BSIT student focused on frontend development, PC hardware, and practical cybersecurity.",
      },
      { property: "og:title", content: "Jhone — Frontend Developer & Tech Enthusiast" },
      {
        property: "og:description",
        content:
          "Personal portfolio of Jhone, a BSIT student focused on frontend development, PC hardware, and practical cybersecurity.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-sm font-medium tracking-tight">
            <span aria-hidden>👋</span> Jhone
          </a>
          <ul className="flex items-center gap-6 text-sm text-muted-foreground">
            <li>
              <a href="#about" className="hover:text-foreground transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-foreground transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-foreground transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-3xl px-6">
        {/* Hero */}
        <section className="flex flex-col items-center pt-24 pb-20 text-center">
          <div
            className="mb-8 flex h-32 w-32 items-center justify-center rounded-full border border-border bg-muted text-4xl text-muted-foreground"
            aria-label="Profile picture placeholder"
          >
            🙂
          </div>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Hi, I'm Jhone</h1>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Frontend Developer &amp; Tech Enthusiast
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="inline-flex h-10 items-center justify-center rounded-md bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex h-10 items-center justify-center rounded-md border border-border bg-background px-5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Contact
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16">
          <h2 className="mb-6 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            About
          </h2>
          <div className="flex gap-4 rounded-md border border-border bg-muted/40 p-5">
            <div aria-hidden className="text-2xl leading-none">
              💡
            </div>
            <p className="text-sm leading-relaxed text-foreground/90">
              I'm a BSIT student focused on frontend development, with a soft spot for clean
              interfaces and thoughtful interactions. Outside the browser, I tinker with PC hardware
              diagnosis and study practical cybersecurity — endpoint security, malware defense, and
              the small habits that keep systems healthy.
            </p>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-16">
          <h2 className="mb-6 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Projects
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.title}
                className="flex flex-col rounded-md border border-border bg-card p-5 transition-colors hover:bg-muted/40"
              >
                <div className="mb-3 flex items-center gap-2">
                  <span aria-hidden className="text-lg">
                    {p.emoji}
                  </span>
                  <h3 className="text-sm font-medium">{p.title}</h3>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <ul className="mb-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded border border-border bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex gap-4 text-xs text-muted-foreground">
                  <a href={p.github} className="hover:text-foreground transition-colors">
                    <span aria-hidden>🔗</span> GitHub
                  </a>
                  <a href={p.demo} className="hover:text-foreground transition-colors">
                    <span aria-hidden>↗</span> Live Demo
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-16">
          <h2 className="mb-6 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Skills
          </h2>
          <ul className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <li
                key={s.label}
                className="inline-flex items-center gap-2 rounded-md border border-border bg-muted/50 px-3 py-1.5 text-sm text-foreground/90"
              >
                <span aria-hidden>{s.emoji}</span>
                {s.label}
              </li>
            ))}
          </ul>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16">
          <h2 className="mb-6 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Contact
          </h2>
          <div className="rounded-md border border-border p-5">
            <p className="text-sm text-foreground/90">
              <span aria-hidden>✉️</span> Reach out anytime at{" "}
              <a
                href="mailto:hello@jhone.dev"
                className="underline underline-offset-4 hover:text-foreground"
              >
                hello@jhone.dev
              </a>
              .
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/70">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Jhone</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground transition-colors">
              <span aria-hidden>💻</span> GitHub
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              <span aria-hidden>🔗</span> LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
