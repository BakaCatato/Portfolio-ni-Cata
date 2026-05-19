import { createFileRoute } from "@tanstack/react-router";
import { projects, skills } from "../data/content";
import { Navbar } from "../components/layouts/Navbar";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogDescription } from "../components/ui/dialog";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Jhone Paul B. Cataluña Jr. — Frontend Developer & Tech Enthusiast" },
      {
        name: "description",
        content:
          "Personal portfolio of Jhone Paul B. Cataluña Jr., a BSIT student focused on frontend development, PC hardware, and practical cybersecurity.",
      },
      { property: "og:title", content: "Jhone Paul B. Cataluña Jr. — Frontend Developer & Tech Enthusiast" },
      {
        property: "og:description",
        content:
          "Personal portfolio of Jhone Paul B. Cataluña Jr., a BSIT student focused on frontend development, PC hardware, and practical cybersecurity.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased scroll-smooth">
      <Navbar />

      <main id="top" className="mx-auto max-w-3xl px-6 pt-16 pb-24 flex flex-col gap-12 md:gap-16">
        <section>
          <img src="/profile.jpg" alt="Jhone" className="h-20 w-20 rounded-full mb-4" />
          <h1 className="text-4xl font-extrabold mb-1">Jhone Paul B. Cataluña Jr.</h1>
          <p className="text-muted-foreground mb-4">Frontend Developer | Tech Enthusiast</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <a href="/cv.pdf" download className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-muted/30 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted">
              Resume
            </a>
            <a href="mailto:hello@jhone.dev" className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-muted/30 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted">
              Email
            </a>
            <a href="#" className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-muted/30 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted">
              LinkedIn
            </a>
            <a href="#" className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-muted/30 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted">
              GitHub
            </a>
          </div>
          <p className="text-sm leading-relaxed text-foreground/90 max-w-3xl">
            I'm a 3rd-year BSIT student focused on building clean interfaces and thoughtful frontend interactions. I also enjoy PC hardware diagnosis and practical cybersecurity.
          </p>
        </section>

        <section id="about">
          <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">About Me</h2>
          <div className="bg-muted/50 p-4 border border-border/30 rounded-md flex items-start gap-3">
            <div aria-hidden className="text-xl leading-none">
              💡
            </div>
            <p className="text-base leading-relaxed text-foreground font-normal">
              I'm a BSIT student focused on frontend development, with a soft spot for clean
              interfaces and thoughtful interactions. Outside the browser, I tinker with PC hardware
              diagnosis and study practical cybersecurity — endpoint security, malware defense, and
              the small habits that keep systems healthy.
            </p>
          </div>
        </section>

        <section id="experience">
          <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">Experience</h2>
          <div className="border-l-2 border-muted pl-4">
            <p className="text-xs text-muted-foreground">2023 - Present</p>
            <p className="font-semibold text-foreground">Bachelor of Science in Information Technology</p>
            <p className="text-sm text-muted-foreground">Quezon City University</p>
          </div>
        </section>

        <section id="stack">
          <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">Stack</h2>
          <ul className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <li
                key={s.label}
                className="inline-flex items-center gap-1.5 rounded-md bg-secondary/40 px-2 py-1 text-sm text-foreground border border-border/50 transition-colors hover:bg-secondary/60 cursor-default"
              >
                <span aria-hidden>{s.emoji}</span>
                {s.label}
              </li>
            ))}
          </ul>
        </section>

        <section id="projects">
          <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.title}
                className="flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card transition-all duration-200 hover:-translate-y-1 hover:shadow-sm"
              >
                <div className="h-36 w-full bg-muted/50 border-b border-border/50 flex items-center justify-center text-5xl">
                  {p.emoji}
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="font-bold text-lg text-foreground mb-2">{p.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground/90">
                    {p.description}
                  </p>
                  <ul className="mb-4 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-md bg-muted/60 px-2 py-0.5 text-xs font-medium text-foreground/80 border border-border/40"
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
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="certificates">
          <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">Certificates</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Dialog>
              <DialogTrigger asChild>
                <button className="flex flex-col items-start p-5 text-left border border-border/60 rounded-xl bg-card hover:-translate-y-1 hover:shadow-sm hover:bg-muted/30 transition-all duration-200">
                  <span className="text-3xl mb-3">📜</span>
                  <h3 className="font-semibold text-sm text-foreground">Network Defense</h3>
                  <p className="text-xs text-muted-foreground mt-1">Cisco Networking Academy</p>
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                  <DialogTitle>Network Defense</DialogTitle>
                  <DialogDescription>Issued by Cisco Networking Academy</DialogDescription>
                </DialogHeader>
                <div className="flex aspect-[4/3] w-full items-center justify-center rounded-md bg-muted/40 text-muted-foreground text-sm border border-border/50">
                  <span className="text-4xl">🖼️</span>
                  <span className="ml-2">Certificate Image Placeholder</span>
                </div>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <button className="flex flex-col items-start p-5 text-left border border-border/60 rounded-xl bg-card hover:-translate-y-1 hover:shadow-sm hover:bg-muted/30 transition-all duration-200">
                  <span className="text-3xl mb-3">📜</span>
                  <h3 className="font-semibold text-sm text-foreground">Endpoint Security</h3>
                  <p className="text-xs text-muted-foreground mt-1">Cisco Networking Academy</p>
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                  <DialogTitle>Endpoint Security</DialogTitle>
                  <DialogDescription>Issued by Cisco Networking Academy</DialogDescription>
                </DialogHeader>
                <div className="flex aspect-[4/3] w-full items-center justify-center rounded-md bg-muted/40 text-muted-foreground text-sm border border-border/50">
                  <span className="text-4xl">🖼️</span>
                  <span className="ml-2">Certificate Image Placeholder</span>
                </div>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <button className="flex flex-col items-start p-5 text-left border border-border/60 rounded-xl bg-card hover:-translate-y-1 hover:shadow-sm hover:bg-muted/30 transition-all duration-200">
                  <span className="text-3xl mb-3">📜</span>
                  <h3 className="font-semibold text-sm text-foreground">Cyber Threat Management</h3>
                  <p className="text-xs text-muted-foreground mt-1">Cisco Networking Academy</p>
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                  <DialogTitle>Cyber Threat Management</DialogTitle>
                  <DialogDescription>Issued by Cisco Networking Academy</DialogDescription>
                </DialogHeader>
                <div className="flex aspect-[4/3] w-full items-center justify-center rounded-md bg-muted/40 text-muted-foreground text-sm border border-border/50">
                  <span className="text-4xl">🖼️</span>
                  <span className="ml-2">Certificate Image Placeholder</span>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        <section id="contact">
          <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">Contact</h2>
          <div className="rounded-xl border border-border/50 bg-muted/20 p-6 shadow-xs">
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
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Jhone Paul B. Cataluña Jr.</p>
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
