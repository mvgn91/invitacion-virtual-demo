# 08 — Technical Summary

> **Proyecto:** Invitación de Boda Digital Interactiva (Demo)
> **Versión:** v1.0.0
> **Generado:** por MVGN Finalization Protocol

---

## Arquitectura

Aplicación React SPA (Single Page Application) con diseño de una sola página y navegación por scroll.

### Flujo de componentes

```
App.jsx (raíz con lazy loading)
├── Header              → Navegación sticky + theme toggle
├── Hero                → Landing con parallax + glassmorphism
├── Countdown           → Timer en tiempo real
├── EventLocations      → Tabs: Ceremonia / Recepción + mapas
├── DressCode           → Guía de vestimenta
├── GiftRegistry        → Mesa de regalos
├── RSVP                → Formulario de confirmación
├── DemoDisclaimer      → Banner demo flotante
├── SiteTour            → Tour interactivo
├── Footer              → Footer con créditos
└── ScrollToTop         → Botón flotante
```

### Patrones utilizados
- **Lazy Loading:** Cada sección principal se carga bajo demanda
- **Memoización:** Componentes clave envueltos en `React.memo()`
- **Custom Hooks:** useIntersectionObserver, usePreload, useScrollOptimization
- **Context API:** ThemeContext para modo oscuro/claro
- **Glassmorphism:** Sistema de clases CSS reutilizables (crystal-glass, card-glass, etc.)

## Decisiones técnicas (ADRs)

| ADR | Decisión | Contexto |
|-----|----------|---------|
| ADR-01 | Sin backend | Demo de portafolio — datos simulados localmente |
| ADR-02 | Lazy loading por componente | Múltiples secciones pesadas — mejora LCP |
| ADR-03 | Glassmorphism como identidad visual | Diseño elegante para invitación de boda |
| ADR-04 | Code splitting manual | framer-motion + lucide-react son chunks grandes |

## Dependencias principales

| Paquete | Versión | Propósito |
|---------|---------|-----------|
| react | 18.2.0 | UI Framework |
| react-dom | 18.2.0 | Renderizado DOM |
| framer-motion | 10.16.4 | Animaciones declarativas |
| lucide-react | 0.542.0 | Iconografía |
| @emailjs/browser | 4.3.2 | Simulación de envío de email |
| vite | 4.4.5 | Build tool |
| tailwindcss | 3.3.3 | Utility-first CSS |
| postcss | 8.4.27 | Procesador CSS |

## Métricas de build

| Métrica | Valor |
|---------|-------|
| Tiempo de build | ~4.6s |
| HTML inicial | 2.87 kB (0.97 kB gzip) |
| CSS total | 47.53 kB (8.48 kB gzip) |
| JS total (todos los chunks) | ~334 kB (~108 kB gzip) |
| Chunks generados | 7 (vendor, framer, icons + 4 componentes) |
