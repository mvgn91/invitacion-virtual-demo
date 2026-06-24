# 💍 Invitación de Boda — Jorge & Noemí

<p align="center">
  <img src="https://img.shields.io/badge/MVGN-COMPLETED-success?style=for-the-badge&labelColor=590f2f&color=c4176a" alt="MVGN State: COMPLETED" />
  <img src="https://img.shields.io/badge/v1.0.0-2025--11--15-890f2d?style=for-the-badge&labelColor=590f2f" alt="v1.0.0" />
  <img src="https://img.shields.io/badge/React_18-61DAFB?style=for-the-badge&logo=react&labelColor=590f2f" alt="React 18" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&labelColor=590f2f" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&labelColor=590f2f" alt="Tailwind CSS" />
</p>

<p align="center">
  <strong>Jorge Isaac Mata Guerrero</strong> 💍 <strong>Noemí Sarahi Hernández Arevalos</strong>
  <br />
  📅 15 de Noviembre, 2025 · 7:00 PM
</p>

---

> **MVGN System** — Proyecto gestionado con [MVGN Starter Kit v2.1](https://github.com/mvgn91/mvgnlabs-starter-kit).
> Capas del sistema en [`docs/`](./docs/) y configuración en [`.mvgn/`](./.mvgn/).

---

## 📋 Estado del Proyecto (MVGN)

| Campo | Valor |
|-------|-------|
| **Estado** | ✅ `COMPLETED` |
| **Tareas** | 22 / 22 completadas |
| **Versión** | v1.0.0 |
| **Capas MVGN** | [`session-contract`](./.mvgn/session-contract.md) · [`kernel-spec`](./.mvgn/kernel-spec.md) · [`system-rules`](./.mvgn/system-rules.md) · [`execution-engine`](./.mvgn/execution-engine.md) · [`recovery-protocol`](./.mvgn/recovery-protocol.md) · [`authority-map`](./.mvgn/authority-map.md) · [`finalization-protocol`](./.mvgn/finalization-protocol.md) |
| **Despliegue** | [boda-jorge-noemi.vercel.app](https://boda-jorge-noemi.vercel.app) |
| **Repositorio** | [github.com/mvgn91/INVITACION-DE-BODA-JORGE-MATA](https://github.com/mvgn91/INVITACION-DE-BODA-JORGE-MATA) |

---

## 📚 Documentación del Sistema

El proyecto sigue el ciclo de desarrollo del **MVGN Starter Kit**. Toda la documentación está disponible en `docs/`:

| Documento | Descripción |
|-----------|-------------|
| [`docs/00_idea.md`](./docs/00_idea.md) | Idea original del proyecto |
| [`docs/01_prd.md`](./docs/01_prd.md) | Requisitos funcionales y no funcionales (15 RFs, 12 RNFs) |
| [`docs/02_architecture.md`](./docs/02_architecture.md) | Arquitectura, componentes y decisiones técnicas (6 ADRs) |
| [`docs/03_tasks.md`](./docs/03_tasks.md) | Desglose de 22 tareas completadas |
| [`docs/04_changelog.md`](./docs/04_changelog.md) | Historial de cambios del proyecto |
| [`docs/05_lessons_learned.md`](./docs/05_lessons_learned.md) | Incidentes y lecciones aprendidas |
| [`docs/06_state_report.md`](./docs/06_state_report.md) | Reporte de estado del sistema |

---

## ✨ Características

- **🎨 Diseño Elegante**: Paleta Burgundy/Rose/Wine/Pearl con tipografía Fraunces + Poppins
- **📱 Responsive**: Mobile First (320px → 2560px) con breakpoints sm/md/lg/xl/2xl
- **🖼️ Carrusel Hero**: Auto-rotación de imágenes cada 6 segundos con transiciones suaves
- **⏱️ Countdown**: Cuenta regresiva en tiempo real hasta el gran día
- **🗺️ Mapas Interactivos**: Google Maps embebido para ceremonia y recepción
- **📅 Calendario**: Enlaces a Google Calendar e iCal para recordar la fecha
- **🎯 RSVP**: Formulario de confirmación con validaciones y almacenamiento en Google Sheets
- **👔 Código de Vestimenta**: Etiqueta obligatoria con colores prohibidos
- **🎁 Mesa de Regalos**: Enlaces a Liverpool y Amazon
- **⚡ Optimizado**: Lazy loading, code splitting, imágenes lazy, scroll throttling
- **✨ Animaciones**: Efectos con Framer Motion, partículas flotantes, WebGL Plasma
- **🌐 SEO**: Meta tags Open Graph y Twitter Cards para compartir en redes

---

## 🛠️ Stack Tecnológico

| Capa | Tecnología | Versión |
|------|-----------|---------|
| **Framework** | React | ^18.2.0 |
| **Build** | Vite | ^4.4.5 |
| **Estilos** | Tailwind CSS | ^3.3.3 |
| **Animaciones** | Framer Motion | ^10.16.4 |
| **Iconos** | Lucide React | ^0.542.0 |
| **Email** | EmailJS | ^4.3.2 |
| **Backend RSVP** | Google Sheets API | — |
| **Despliegue** | Vercel | — |

---

## 📐 Arquitectura

```
SPA React 18 → Vite Build → Vercel CDN
     │
     ├── 13 Componentes UI (lazy loading)
     ├── 3 Custom Hooks (scroll, intersection, preload)
     ├── Google Sheets (RSVP storage)
     └── EmailJS (notificaciones)
```

Detalles completos en [`docs/02_architecture.md`](./docs/02_architecture.md).

---

## 🚀 Instalación y Desarrollo

```bash
# Clonar el repositorio
git clone https://github.com/mvgn91/INVITACION-DE-BODA-JORGE-MATA.git
cd INVITACION-DE-BODA-JORGE-MATA

# Instalar dependencias
npm install

# Desarrollo (localhost:3000)
npm run dev

# Build para producción
npm run build

# Vista previa del build
npm run preview
```

---

## 📧 Configuración de EmailJS

1. Crea una cuenta en [EmailJS](https://www.emailjs.com/)
2. Configura tu servicio de correo
3. Actualiza las credenciales en `src/config/emailjs.example.js`
4. Renombra el archivo a `src/config/emailjs.js`

> **Nota:** `src/config/emailjs.js` está en `.gitignore` por seguridad.

---

## 🎨 Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| **Burgundy** | `#590f2f` | Fondos oscuros, encabezados |
| **Rose** | `#c4176a` | Acentos, botones, hover |
| **Wine** | `#890f2d` | Tonos profundos |
| **Pearl** | `#d1dadc` | Textos sobre fondos oscuros |

---

## 🏗️ MVGN System

Este proyecto utiliza el **MVGN Starter Kit v2.1**, un framework de orquestación para desarrollo asistido por IA.

| Capa | Archivo | Propósito |
|------|---------|-----------|
| **Session Contract** | [`.mvgn/session-contract.md`](./.mvgn/session-contract.md) | Comportamiento de la IA en sesión |
| **Kernel Spec** | [`.mvgn/kernel-spec.md`](./.mvgn/kernel-spec.md) | Orquestación y arbitraje |
| **Recovery Protocol** | [`.mvgn/recovery-protocol.md`](./.mvgn/recovery-protocol.md) | Resiliencia y recuperación |
| **Finalization Protocol** | [`.mvgn/finalization-protocol.md`](./.mvgn/finalization-protocol.md) | Cierre y release |
| **System Rules** | [`.mvgn/system-rules.md`](./.mvgn/system-rules.md) | Políticas y restricciones |
| **Execution Engine** | [`.mvgn/execution-engine.md`](./.mvgn/execution-engine.md) | Ejecución de tareas |
| **Authority Map** | [`.mvgn/authority-map.md`](./.mvgn/authority-map.md) | Jerarquía de autoridad |

---

## 📄 Créditos

Desarrollado por **MVGN Labs** — [mvgn.vercel.app](https://mvgn.vercel.app)

---

<p align="center">
  <strong>#BodaNoemiYJorge</strong>
  <br />
  <em>"El amor verdadero no consiste en mirarse el uno al otro, sino en mirar juntos en la misma dirección"</em>
  <br />
  — Antoine de Saint-Exupéry
</p>
