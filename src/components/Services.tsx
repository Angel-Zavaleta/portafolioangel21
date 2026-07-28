import {
  Layout,
  Server,
  Smartphone,
  Shield,
  Database,
  Cloud,
} from "lucide-react";
import { services } from "../data/portfolio";
import Reveal from "./Reveal";

const iconMap: Record<string, React.ElementType> = {
  layout: Layout,
  server: Server,
  smartphone: Smartphone,
  shield: Shield,
  database: Database,
  cloud: Cloud,
};

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 px-6 sm:px-8 bg-secondary/40 border-y border-line"
    >
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="mb-12">
            <span className="font-mono text-accent text-sm tracking-widest">
              04
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-text mt-2">
              Servicios
            </h2>
            <div className="mt-4 h-px w-14 bg-accent/70" />
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc, i) => {
            const Icon = iconMap[svc.icon] || Layout;
            return (
              <Reveal key={svc.title} delay={i * 70} className="h-full">
                <div className="card h-full bg-primary/50 rounded-xl p-6 border border-line hover:border-accent/40">
                  <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Icon size={22} className="text-accent" />
                  </div>
                  <h3 className="text-text font-semibold text-lg mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {svc.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
