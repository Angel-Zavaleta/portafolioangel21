import { Mail, Phone, MapPin, Send } from "lucide-react";
import { personalInfo } from "../data/portfolio";
import { useState, type FormEvent } from "react";

// 1) Crea una cuenta gratis en https://web3forms.com (solo pide tu email)
// 2) Copia tu Access Key y pégala aquí abajo:
const WEB3FORMS_ACCESS_KEY = "575256cd-8128-4837-844f-b445532d9636";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 px-6 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <span className="font-mono text-accent text-sm tracking-widest">
            05
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-text mt-2">
            Contacto
          </h2>
          <div className="mt-4 h-px w-14 bg-accent/70" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-14">
          <div className="space-y-6">
            <p className="text-text-muted leading-relaxed">
              ¿Tienes un proyecto en mente o una vacante que encaje con mi
              perfil? Escríbeme y platiquemos.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-text-muted hover:text-accent transition-colors break-all"
              >
                <Mail size={20} className="text-accent shrink-0" />
                {personalInfo.email}
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-3 text-text-muted hover:text-accent transition-colors"
              >
                <Phone size={20} className="text-accent shrink-0" />
                {personalInfo.phone}
              </a>
              <div className="flex items-center gap-3 text-text-muted">
                <MapPin size={20} className="text-accent shrink-0" />
                {personalInfo.location}
              </div>
            </div>

            <a
              href={`https://wa.me/529812560780?text=${encodeURIComponent(
                "Hola Angel, vi tu portafolio y me gustaría platicar."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp directo
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="hidden"
              name="access_key"
              value={WEB3FORMS_ACCESS_KEY}
            />
            <input
              type="hidden"
              name="subject"
              value="Nuevo mensaje desde tu portafolio"
            />
            <input type="checkbox" name="botcheck" className="hidden" />

            <div>
              <label htmlFor="name" className="block text-text text-sm mb-1.5">
                Nombre
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-4 py-3 bg-secondary border border-line rounded-lg text-text focus:border-accent focus:outline-none transition-colors"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-text text-sm mb-1.5">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 bg-secondary border border-line rounded-lg text-text focus:border-accent focus:outline-none transition-colors"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-text text-sm mb-1.5"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 bg-secondary border border-line rounded-lg text-text focus:border-accent focus:outline-none transition-colors resize-none"
                placeholder="Cuéntame sobre el proyecto o la vacante..."
              />
            </div>

            {status === "ok" ? (
              <p className="text-green-400 font-mono text-sm">
                ✓ Mensaje enviado. Te contactaré pronto.
              </p>
            ) : (
              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent-hover transition-colors disabled:opacity-60"
                >
                  <Send size={18} />
                  {status === "sending" ? "Enviando..." : "Enviar mensaje"}
                </button>
                {status === "error" && (
                  <span className="text-red-400 text-sm">
                    Ocurrió un error. Intenta por WhatsApp o email.
                  </span>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
