import { Github, Linkedin, Heart } from "lucide-react";
import { personalInfo } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-8 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-text-muted text-sm">
          © {year} {personalInfo.name}. Todos los derechos reservados.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>

        <p className="text-text-muted text-xs flex items-center gap-1">
          Hecho con <Heart size={12} className="text-accent" /> — React · Vite · Tailwind
        </p>
      </div>
    </footer>
  );
}
