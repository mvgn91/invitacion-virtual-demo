# 10 — Maintenance Guide

> **Proyecto:** Invitación de Boda Digital - Demo Template / Plantilla Comercial
> **Versión:** v1.0.0
> **Generado:** por MVGN Finalization Protocol

---

## Requisitos del sistema

- Node.js >= 18.x
- npm >= 9.x (incluido con Node.js)
- Navegador moderno (Chrome, Firefox, Safari, Edge)

## Comandos principales

| Acción | Comando |
|--------|---------|
| Desarrollo | `npm run dev` |
| Build | `npm run build` |
| Preview del build | `npm run preview` |
| Lint | `npm run lint` |

## Desarrollo local

```bash
# Clonar el repositorio
git clone https://github.com/mvgn91/invitacion-virtual-demo.git

# Instalar dependencias
cd invitacion-virtual-demo
npm install

# Iniciar servidor de desarrollo (puerto 3000)
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

## Actualizar dependencias

```bash
# Verificar dependencias desactualizadas
npm outdated

# Actualizar dependencias
npm update

# Actualizar a versiones mayores (con precaución)
npm install react@latest react-dom@latest
```

## Personalización para producción real

Si se desea convertir esta demo en una invitación real:

1. **Reemplazar datos ficticios**
   - Fecha del evento en Countdown.jsx (`new Date('2026-11-15T18:00:00')`)
   - Nombres de los novios en Hero.jsx y Footer.jsx
   - Ubicaciones en EventLocations.jsx
   - Fechas de calendario en enlaces iCal/Google Calendar

2. **Configurar RSVP real**
   - Crear cuenta en EmailJS (https://www.emailjs.com/)
   - Configurar SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY
   - Opcional: Configurar Google Sheets para respaldo

3. **Reemplazar imágenes de Unsplash**
   - Hero section imágenes de fondo
   - Optimizar imágenes con srcset para responsive

4. **SEO y dominios**
   - Actualizar meta tags en index.html
   - Configurar dominio personalizado en Vercel
   - Actualizar sitemap y robots.txt

## Despliegue continuo

El proyecto está configurado para deploy automático en Vercel:

1. Conectar repositorio de GitHub a Vercel
2. Cada push a `main` despliega automáticamente
3. Preview deployments para PRs

## Enlaces útiles

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Documentación Vite:** https://vitejs.dev/
- **Documentación Tailwind:** https://tailwindcss.com/docs
- **Documentación Framer Motion:** https://www.framer.com/motion/
