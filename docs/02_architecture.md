# 02 — Arquitectura del Proyecto

> **Proyecto:** Invitación de Boda — Jorge & Noemí
> **Versión:** v1.0.0
> **Estado:** Implementado y desplegado

---

## 1. Diagrama de Arquitectura

```
┌─────────────────────────────────────────────────────────┐
│                    Vercel (CDN/Deploy)                   │
│                   boda-jorge-noemi.vercel.app            │
├─────────────────────────────────────────────────────────┤
│                     React SPA v18                        │
│                                                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌────────┐  │
│  │  Header  │  │   Hero   │  │ Countdown│  │  RSVP  │  │
│  └──────────┘  └──────────┘  └──────────┘  └────────┘  │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌────────┐  │
│  │Ceremony  │  │Dress Code│  │ Reception│  │  Gift  │  │
│  │Details   │  │          │  │          │  │Registry│  │
│  └──────────┘  └──────────┘  └──────────┘  └────────┘  │
│  ┌──────────┐  ┌──────────┐                              │
│  │  Footer  │  │ScrollTo  │                              │
│  │          │  │Top       │                              │
│  └──────────┘  └──────────┘                              │
│                                                         │
│  ┌──────────────────────────────────────────────────┐   │
│  │           Custom Hooks Layer                      │   │
│  │  useIntersectionObserver | usePreload             │   │
│  │  useScrollOptimization (throttle + debounce)      │   │
│  └──────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
         │
         ├───────────────────┬────────────────────┐
         ▼                   ▼                    ▼
  ┌──────────────┐   ┌──────────────┐   ┌──────────────────┐
  │  Google      │   │   EmailJS    │   │   Google Fonts   │
  │  Sheets API  │   │   API        │   │   CDN            │
  │  (RSVPs)     │   │(Notificacion)│   │   (Fraunces,     │
  │              │   │              │   │    Poppins,       │
  │              │   │              │   │    Allura)        │
  └──────────────┘   └──────────────┘   └──────────────────┘
```

---

## 2. Componentes

### 2.1 Componentes de UI

| Componente | Responsabilidad | Props | Lazy Loaded |
|-----------|----------------|-------|-------------|
| `Header` | Navegación fija, menú hamburguesa, scroll detection | — | No |
| `Hero` | Carrusel de imágenes, títulos animados, CTAs | — | Sí |
| `Countdown` | Temporizador en tiempo real hasta la fecha de boda | — | Sí |
| `CeremonyDetails` | Info de ceremonia, mapa, cita inspiradora | — | Sí |
| `DressCode` | Código de vestimenta, colores prohibidos | — | Sí |
| `Reception` | Info de recepción, calendario, mapa | — | Sí |
| `GiftRegistry` | Enlaces a Liverpool y Amazon | — | Sí |
| `RSVP` | Sección de confirmación de asistencia | — | Sí |
| `RSVPForm` | Formulario con validaciones, campos dinámicos | — | Sí (via RSVP) |
| `Footer` | Créditos, hashtag, enlace MVGN Labs | — | No |
| `ScrollToTop` | Botón flotante con throttling | — | No |
| `Plasma` | Efecto WebGL decorativo interactivo | color, speed, scale, opacity | Sí |
| `OptimizedImage` | Imagen lazy con placeholder y error handling | src, alt, priority | No (utility) |

### 2.2 Custom Hooks

| Hook | Propósito | Uso |
|------|-----------|-----|
| `useIntersectionObserver` | Detecta visibilidad de elementos con lazy initialization | Plasma, OptimizedImage |
| `usePreload` | Precarga recursos críticos (imágenes, CSS) | main.jsx |
| `useScrollOptimization` | Throttle + Debounce para eventos de scroll | ScrollToTop, Header |

---

## 3. Decisiones Técnicas (ADRs)

### ADR-01: React + Vite sobre Next.js

**Contexto:** Se eligió una SPA simple sin necesidad de SSR/SSG.
**Decisión:** React 18 + Vite por simplicidad, menor bundle y despliegue trivial en Vercel.
**Consecuencia:** Todo el SEO se maneja mediante meta tags estáticos en `index.html`.

### ADR-02: Tailwind CSS para estilos

**Contexto:** Se necesitaba un sistema de diseño consistente y rápido de prototipar.
**Decisión:** Tailwind CSS con paleta de colores personalizada (burgundy, wine, rose, pearl).
**Consecuencia:** Archivo `tailwind.config.js` con colores y animaciones custom. CSS puro adicional en `index.css`.

### ADR-03: Lazy Loading con React.lazy + Suspense

**Contexto:** Múltiples secciones pesadas con animaciones e imágenes.
**Decisión:** Code splitting con `React.lazy()` y `Suspense` para carga bajo demanda.
**Consecuencia:** Componentes críticos (Header, Hero) cargan inmediatamente; el resto carga cuando se necesitan.

### ADR-04: Google Sheets como backend de RSVP

**Contexto:** Sin necesidad de servidor propio para almacenar confirmaciones.
**Decisión:** Google Apps Script como API REST para insertar datos en Google Sheets.
**Consecuencia:** No hay base de datos que mantener. Límite de tasa de Google Sheets aplica.

### ADR-05: EmailJS para notificaciones

**Contexto:** Los novios necesitan recibir notificaciones de nuevas confirmaciones.
**Decisión:** EmailJS como servicio de email transaccional sin servidor.
**Consecuencia:** Configuración simple con Service ID, Template ID y Public Key.

### ADR-06: Vite como build tool con manualChunks

**Contexto:** Optimizar el bundle para producción.
**Decisión:** Separar vendor chunks (React, framer-motion, lucide-react) para mejor caching.
**Consecuencia:** Tres chunks principales: `vendor`, `framer`, `icons`.

---

## 4. Estructura de Archivos

```
├── index.html                    # Entry point HTML con meta tags SEO
├── package.json                  # Dependencias y scripts
├── vite.config.js                # Configuración de Vite (chunks, plugins)
├── tailwind.config.js            # Configuración de Tailwind (colores, fonts)
├── postcss.config.js             # PostCSS con Tailwind + Autoprefixer
├── vercel.json                   # Configuración de deploy en Vercel
├── .gitignore                    # Archivos ignorados
├── src/
│   ├── main.jsx                  # Entry point React con preload de recursos
│   ├── App.jsx                   # Componente raíz con lazy loading
│   ├── index.css                 # Estilos globales + Tailwind + animaciones
│   ├── components/
│   │   ├── Header.jsx            # Navegación fija
│   │   ├── Hero.jsx              # Hero con carrusel
│   │   ├── Countdown.jsx         # Cuenta regresiva
│   │   ├── CeremonyDetails.jsx   # Detalles de ceremonia
│   │   ├── DressCode.jsx         # Código de vestimenta
│   │   ├── Reception.jsx         # Recepción y calendario
│   │   ├── GiftRegistry.jsx      # Mesa de regalos
│   │   ├── RSVP.jsx              # Contenedor RSVP
│   │   ├── RSVPForm.jsx          # Formulario RSVP
│   │   ├── Footer.jsx            # Footer
│   │   ├── ScrollToTop.jsx       # Botón scroll-to-top
│   │   ├── Plasma.jsx            # Efecto WebGL
│   │   └── OptimizedImage.jsx    # Imagen lazy
│   ├── hooks/
│   │   ├── useIntersectionObserver.js
│   │   ├── usePreload.js
│   │   └── useScrollOptimization.js
│   └── config/
│       ├── emailjs.example.js    # Config EmailJS (template)
│       └── googleSheets.js       # Config Google Sheets API
├── docs/                         # Documentación MVGN
└── .mvgn/                        # Capas del sistema MVGN
```

---

## 5. Paleta de Colores

| Color | Uso | Hex |
|-------|-----|-----|
| Burgundy | Color principal, headers, fondos oscuros | #590f2f |
| Rose | Acentos, botones, hover states | #c4176a |
| Wine | Tonos profundos, fondos alternos | #890f2d |
| Pearl | Textos claros sobre fondos oscuros | #d1dadc |

---

## 6. Tipografía

| Fuente | Uso | Peso |
|--------|-----|------|
| Fraunces | Títulos (heading 1-4) | Bold (700-900) |
| Poppins | Cuerpo, navegación, botones | Regular (300-700) |
| Allura | Decorativa (cargada pero no usada activamente) | Cursiva |

---

## Historial de Cambios

| Fecha | Versión | Cambio | Autor |
|------|---------|--------|-------|
| 2026-06-24 | v1.0.0 | Documento creado | MVGN System |
