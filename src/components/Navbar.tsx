import { useState } from "react";
import { Menu, X } from "lucide-react";
import { personalInfo } from "../data/portfolio";

const links = [
  { href: "#about", label: "Sobre mí" },
  { href: "#experience", label: "Experiencia" },
  { href: "#projects", label: "Proyectos" },
  { href: "#services", label: "Servicios" },
  { href: "#contact", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-md border-b border-line">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-accent font-mono font-bold text-lg">
            &lt;{personalInfo.name.split(" ")[0]} /&gt;
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-text-muted hover:text-accent transition-colors text-sm"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-accent text-accent rounded hover:bg-accent/10 transition-colors text-sm"
            >
              Descargar CV
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-text-muted"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-secondary border-t border-line">
          <div className="px-4 py-4 space-y-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-text-muted hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
