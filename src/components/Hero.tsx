import { Github, Linkedin, ArrowDown, Mail } from "lucide-react";
import { personalInfo } from "../data/portfolio";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 sm:px-8">
      {/* Glow cálido de fondo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(245,158,11,0.10) 0%, rgba(245,158,11,0) 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-4xl py-28 sm:py-32">
        <p className="font-mono text-accent text-xs sm:text-sm tracking-widest uppercase mb-5">
          Hola, soy
        </p>

        <h1 className="font-display font-semibold text-text leading-[1.05] text-5xl sm:text-7xl mb-6">
          {personalInfo.fullName}
        </h1>

        <h2 className="text-text-muted text-xl sm:text-3xl font-light mb-8">
          <span className="text-text font-normal">{personalInfo.title}</span>
          <span className="text-accent mx-2">·</span>
          <span className="text-text font-normal">
            {personalInfo.subtitle}
          </span>
        </h2>

        <p className="text-text-muted text-base sm:text-lg max-w-2xl leading-relaxed mb-10">
          {personalInfo.summary}
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-14">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-accent text-primary font-semibold rounded-lg hover:bg-accent-hover transition-colors shadow-lg shadow-accent/20"
          >
            Ver proyectos
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-line text-text rounded-lg hover:border-accent hover:text-accent transition-colors"
          >
            <Mail size={18} />
            Contáctame
          </a>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <span className="h-px w-10 bg-line" />
          <a
            href={`mailto:${personalInfo.email}`}
            className="font-mono text-text-muted text-xs sm:text-sm hover:text-accent transition-colors"
          >
            {personalInfo.email}
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted hover:text-accent transition-colors animate-bounce"
        aria-label="Bajar"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
