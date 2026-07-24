import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <span className="font-mono text-accent text-sm tracking-widest">
            03
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-text mt-2">
            Proyectos
          </h2>
          <div className="mt-4 h-px w-14 bg-accent/70" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj) => (
            <div
              key={proj.title}
              className="flex flex-col bg-secondary rounded-xl border border-line overflow-hidden hover:border-accent/40 hover:-translate-y-1 transition-all"
            >
              <div
                className="h-36 flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(245,158,11,0.14), rgba(245,158,11,0.02))",
                }}
              >
                <span className="font-display text-2xl text-accent/80">
                  {proj.title}
                </span>
              </div>

              <div className="flex flex-col flex-1 p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <h3 className="text-text font-semibold text-lg leading-tight">
                      {proj.title}
                    </h3>
                    <p className="text-accent text-sm">{proj.subtitle}</p>
                  </div>
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-accent transition-colors shrink-0"
                      aria-label="GitHub"
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>

                <p className="text-text-muted text-sm mb-4 leading-relaxed flex-1">
                  {proj.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {proj.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-accent/10 text-accent text-xs rounded font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className="rounded-xl border border-dashed border-line flex items-center justify-center min-h-[280px] hover:border-accent/40 transition-colors">
            <a
              href={projects[0]?.github ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-text-muted text-sm font-mono hover:text-accent transition-colors"
            >
              <ExternalLink size={16} />
              Más en GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
