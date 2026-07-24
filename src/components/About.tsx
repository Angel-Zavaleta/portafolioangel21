import { skills } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <span className="font-mono text-accent text-sm tracking-widest">
            01
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-text mt-2">
            Sobre mí
          </h2>
          <div className="mt-4 h-px w-14 bg-accent/70" />
        </div>

        <div className="grid md:grid-cols-5 gap-10 md:gap-14">
          <div className="md:col-span-3 space-y-5 text-text-muted leading-relaxed">
            <p>
              Soy ingeniero de software egresado de la Universidad Autónoma de
              Campeche. Desde 2023 diseño, construyo y despliego aplicaciones
              full-stack y sistemas distribuidos para instituciones
              gubernamentales en el ámbito federal y estatal, y para la
              consultoría privada.
            </p>
            <p>
              Trabajo de punta a punta: modelo la base de datos, construyo el
              backend y el frontend, y lo llevo a producción con Docker y
              CI/CD. Me apasiona la{" "}
              <span className="text-text">arquitectura de software</span> —
              sistemas que escalen, se mantengan y sean seguros — con especial
              cuidado en la identidad y el control de accesos (OAuth 2.0, SSO
              con Llave MX, RBAC, JWT).
            </p>
            <p>
              Actualmente colaboro con INFOTEC de forma remota desde Querétaro
              y desarrollo soluciones tecnológicas a la medida para
              dependencias y organizaciones que necesitan software seguro y
              bien construido.
            </p>
          </div>

          <div className="md:col-span-2 space-y-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-xs font-mono text-accent mb-3 tracking-wide">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary text-text-muted text-sm rounded-md border border-line hover:border-accent/60 hover:text-text transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
