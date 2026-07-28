import { Briefcase } from "lucide-react";
import { experiences } from "../data/portfolio";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 sm:px-8 bg-secondary/40 border-y border-line"
    >
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="mb-12">
            <span className="font-mono text-accent text-sm tracking-widest">
              02
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-text mt-2">
              Experiencia
            </h2>
            <div className="mt-4 h-px w-14 bg-accent/70" />
          </div>
        </Reveal>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 60}>
              <div className="relative pl-8 border-l border-line">
                <div className="absolute -left-[13px] top-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center ring-4 ring-primary">
                  <Briefcase size={13} className="text-primary" />
                </div>

                <div className="mb-5">
                  <h3 className="text-lg sm:text-xl font-semibold text-text">
                    {exp.role}{" "}
                    <span className="text-accent">@ {exp.company}</span>
                  </h3>
                  {exp.companyFull && (
                    <p className="text-text-muted text-sm">{exp.companyFull}</p>
                  )}
                  <p className="text-text-muted text-xs sm:text-sm font-mono mt-1 tnum">
                    {exp.period} · {exp.location}
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {exp.projects.map((proj) => (
                    <div
                      key={proj.name}
                      className="card bg-primary/60 rounded-xl p-5 border border-line hover:border-accent/40"
                    >
                      <h4 className="text-text font-semibold mb-1.5 leading-snug">
                        {proj.name}
                      </h4>
                      <p className="text-text-muted text-sm mb-3 leading-relaxed">
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
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
