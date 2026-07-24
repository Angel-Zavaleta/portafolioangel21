# Portafolio — Angel Zavaleta

Portafolio personal (one-page) construido con **React 19 + Vite + TypeScript + Tailwind CSS 4**.

## Desarrollo local

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/ (producción)
npm run preview  # sirve el build de producción
```

## Antes de publicar

1. **Formulario de contacto** — crea una cuenta gratis en https://web3forms.com,
   copia tu *Access Key* y pégala en `src/components/Contact.tsx`
   (constante `WEB3FORMS_ACCESS_KEY`). El botón de WhatsApp y el email ya funcionan sin esto.
2. **CV** — el archivo `public/CV.pdf` es el que descarga el botón "Descargar CV". Reemplázalo cuando actualices tu CV.

## Despliegue gratis en Cloudflare Pages

1. Sube este proyecto a un repositorio de GitHub (ver abajo).
2. Entra a https://dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Selecciona el repositorio del portafolio.
4. Configura el build:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. **Save and Deploy.** En ~1 min queda en línea con una URL `*.pages.dev` (HTTPS gratis).
6. Cada `git push` a `main` vuelve a desplegar automáticamente.

### Dominio propio (opcional)
En el proyecto de Pages → **Custom domains** → agrega tu dominio.
Cómpralo a precio de costo en **Cloudflare Registrar** (ej. un `.dev` ~$10-12 USD/año).

## Stack

React 19 · Vite 6 · TypeScript · Tailwind CSS 4 · lucide-react · Fraunces/Inter
