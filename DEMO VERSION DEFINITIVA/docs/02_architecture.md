# 02 — Arquitectura

> **Proyecto:** Invitación de Boda Digital Interactiva (Demo)
> **Versión:** v1.0.0
> **Estado:** APROBADO

---

## 1. Stack Tecnológico

| Capa | Tecnología | Versión | Justificación |
|------|-----------|---------|---------------|
| Framework | React | 18.2 | Maduro, amplio ecosistema, hooks para estado |
| Bundler | Vite | 4.4 | Build rápido, HMR instantáneo, code splitting nativo |
| Estilos | Tailwind CSS | 3.3 | Utilidades first, diseño consistente, responsive fácil |
| Animaciones | Framer Motion | 10.16 | API declarativa, animaciones fluidas, soporte gestos |
| Iconos | Lucide React | 0.542 | Iconos ligeros, tree-shakeable, diseño consistente |
| Email | EmailJS | 4.3 | Simulación demo, sin backend |
| Deploy | Vercel | — | Deploy automático, SSL, CDN global |

## 2. Arquitectura de Componentes

```
App.jsx
├── Header.jsx                  ← Nav sticky + menú mobile + theme toggle
├── Hero.jsx                    ← Sección principal con parallax
├── Countdown.jsx               ← Cuenta regresiva en tiempo real
├── EventLocations.jsx          ← Ceremonia + Recepción con tabs
│   ├── LocationPill.jsx        ← Pills de navegación
│   └── LocationPanel.jsx       ← Panel con info + mapa
├── DressCode.jsx               ← Código de vestimenta
├── GiftRegistry.jsx            ← Mesa de regalos
├── RSVP.jsx / RSVPForm.jsx     ← Formulario de confirmación
├── DemoDisclaimer.jsx          ← Banner demo flotante
├── SiteTour.jsx                ← Tour interactivo
├── Footer.jsx                  ← Footer con créditos
└── ScrollToTop.jsx             ← Botón scroll to top
```

## 3. Flujo de datos

```
[Usuario] → [Componente] → [Estado Local (useState)]
                                ↓
                         [Simulación API]
                                ↓
                         [Log a consola]
                                ↓
                         [Feedback visual]
```

No hay backend. Todos los datos son simulados en modo demo.

## 4. Decisiones de Arquitectura (ADRs)

### ADR-01: Sin backend
**Contexto:** Demo de portafolio. No requiere persistencia real.
**Decisión:** Todo el estado es local. RSVP simula envío con timeout.
**Consecuencia:** Fácil deploy, 0 costos de infraestructura.

### ADR-02: Lazy loading por componente
**Contexto:** Múltiples secciones con animaciones pesadas.
**Decisión:** Cada sección principal se carga con `React.lazy()` + `Suspense`.
**Consecuencia:** Mejora LCP, First Paint más rápido.

### ADR-03: Glassmorphism como identidad visual
**Contexto:** Diseño elegante y moderno para invitación de boda.
**Decisión:** Efectos crystal-glass con backdrop-filter y bordes semitransparentes.
**Consecuencia:** Consistencia visual en todas las secciones, soporte dark mode.

### ADR-04: Code splitting manual
**Contexto:** Dependencias grandes como framer-motion y lucide-react.
**Decisión:** Chunks separados para vendor, framer, icons en vite.config.js.
**Consecuencia:** Carga paralela de recursos, mejor rendimiento percibido.

## 5. Estructura del Proyecto

```
DEMO VERSION DEFINITIVA/
├── index.html                  ← Entry point HTML
├── vite.config.js              ← Configuración Vite
├── tailwind.config.js          ← Configuración Tailwind
├── postcss.config.js           ← Configuración PostCSS
├── vercel.json                 ← Configuración Vercel
├── package.json                ← Dependencias y scripts
├── src/
│   ├── main.jsx                ← Entry point React
│   ├── App.jsx                 ← Componente raíz con lazy loading
│   ├── index.css               ← Estilos globales + glassmorphism
│   ├── components/             ← Componentes de UI
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Countdown.jsx
│   │   ├── EventLocations.jsx
│   │   ├── CeremonyDetails.jsx
│   │   ├── Reception.jsx
│   │   ├── DressCode.jsx
│   │   ├── GiftRegistry.jsx
│   │   ├── RSVP.jsx
│   │   ├── RSVPForm.jsx
│   │   ├── DemoDisclaimer.jsx
│   │   ├── SiteTour.jsx
│   │   ├── Plasma.jsx
│   │   ├── Footer.jsx
│   │   ├── ScrollToTop.jsx
│   │   └── OptimizedImage.jsx
│   ├── config/
│   │   ├── emailjs.example.js
│   │   └── googleSheets.js
│   ├── context/
│   │   └── ThemeContext.jsx
│   └── hooks/
│       ├── useIntersectionObserver.js
│       ├── usePreload.js
│       └── useScrollOptimization.js
├── dist/                       ← Build de producción
├── docs/                       ← Documentación MVGN
└── mvgnlabs-starter-kit-main/  ← Kit MVGN
```

---

## Firma de aprobación

**Nombre:** MVGN Labs
**Fecha:** 21 Junio 2026
**Firma:** [✓]
