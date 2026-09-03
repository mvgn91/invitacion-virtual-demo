# 07 — Release Notes

> **Proyecto:** Invitación de Boda Digital - Demo Template / Plantilla Comercial
> **Versión:** v1.0.0
> **Release:** 2026-06-24
> **Generado:** por MVGN Finalization Protocol

---

## Resumen

Plantilla comercial de invitación digital de boda interactiva con diseño glassmorphism. Producto 100% frontend listo para personalizar con los datos de cada pareja. Desarrollado con React 18, Vite, Tailwind CSS y Framer Motion.

## Novedades en esta versión

### Features
- Hero animado con parallax interactivo y glassmorphism
- Cuenta regresiva en tiempo real hasta la fecha del evento
- Secciones de Ceremonia y Recepción con mapas interactivos y navegación por tabs
- Código de vestimenta con colores recomendados y a evitar
- Mesa de regalos con Liverpool y Amazon
- Formulario RSVP con validación completa
- Tour interactivo del sitio
- Demo disclaimer flotante minimizable
- Modo oscuro/claro con persistencia en localStorage
- Navegación sticky con menú mobile responsivo

### Mejoras técnicas
- Lazy loading con React.lazy() + Suspense para carga optimizada
- Code splitting granular (vendor, framer-motion, lucide-react)
- Glassmorphism system con variantes (crystal-glass, crystal-frame, card-glass)
- Diseño responsivo completo (mobile-first)
- Animaciones optimizadas con will-change
- Preload de recursos críticos
- Meta tags para SEO (Open Graph, Twitter Cards)

### Bugs conocidos
- Sin bugs conocidos en esta versión demo

## Stack técnico

| Capa | Tecnología | Versión |
|------|-----------|---------|
| Framework | React | 18.2.0 |
| Bundler | Vite | 4.4.5 |
| Estilos | Tailwind CSS | 3.3.3 |
| Animaciones | Framer Motion | 10.16.4 |
| Iconos | Lucide React | 0.542.0 |
| Hosting | Vercel | — |

## Estructura del proyecto

```
src/
├── components/     (15 componentes)
│   ├── App.jsx
│   ├── Header.jsx, Hero.jsx, Countdown.jsx
│   ├── EventLocations.jsx, CeremonyDetails.jsx
│   ├── Reception.jsx, DressCode.jsx
│   ├── GiftRegistry.jsx, RSVP.jsx, RSVPForm.jsx
│   ├── DemoDisclaimer.jsx, SiteTour.jsx
│   ├── Footer.jsx, ScrollToTop.jsx
│   └── Plasma.jsx, OptimizedImage.jsx
├── config/         (Configuración)
├── context/        (ThemeContext)
└── hooks/          (Custom hooks)
```

## Enlaces

- **Sitio en producción:** https://invitaciondebodademo.vercel.app
- **Repositorio:** https://github.com/mvgn91/invitacion-virtual-demo
- **Documentación:** docs/
