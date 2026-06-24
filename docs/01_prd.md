# 01 — Product Requirements Document (PRD)

> **Proyecto:** Invitación de Boda — Jorge & Noemí
> **Versión:** v1.0.0
> **Estado:** Entregado y desplegado

---

## 1. Resumen Ejecutivo

Aplicación web SPA (Single Page Application) para servir como invitación digital de boda. Sustituye a las invitaciones físicas tradicionales, permitiendo a los invitados consultar toda la información del evento, confirmar asistencia, y acceder a la mesa de regalos desde cualquier dispositivo.

---

## 2. Requisitos Funcionales (RF)

| ID | Descripción | Prioridad | Estado |
|----|------------|-----------|--------|
| RF-01 | Página principal con nombres de los novios, fecha y carrusel de imágenes | Alta | ✅ Completado |
| RF-02 | Header fijo con animación de scroll y navegación tipo hamburguesa en mobile | Alta | ✅ Completado |
| RF-03 | Cuenta regresiva en tiempo real hasta la fecha de la boda | Alta | ✅ Completado |
| RF-04 | Sección de ceremonia con detalles: fecha, hora, ubicación, mapa interactivo | Alta | ✅ Completado |
| RF-05 | Sección de recepción con ubicación, mapa, enlaces a Google Calendar e iCal | Alta | ✅ Completado |
| RF-06 | Sección de código de vestimenta con colores prohibidos y restricciones | Alta | ✅ Completado |
| RF-07 | Mesa de regalos con enlaces a Liverpool y Amazon | Media | ✅ Completado |
| RF-08 | Formulario RSVP para confirmación de asistencia con validaciones | Alta | ✅ Completado |
| RF-09 | Botón de scroll-to-top con animación suave | Baja | ✅ Completado |
| RF-10 | Footer con iniciales, hashtag y créditos | Baja | ✅ Completado |
| RF-11 | Lazy loading de componentes pesados con Suspense | Alta | ✅ Completado |
| RF-12 | Navegación entre secciones mediante smooth scroll | Alta | ✅ Completado |
| RF-13 | Google Sheets integration para almacenar RSVPs | Media | ✅ Configurado |
| RF-14 | EmailJS configurado para notificaciones por correo | Media | ✅ Configurado |
| RF-15 | Efecto Plasma WebGL interactivo como elemento decorativo | Baja | ✅ Completado |

## 3. Requisitos No Funcionales (RNF)

| ID | Descripción | Prioridad | Estado |
|----|------------|-----------|--------|
| RNF-01 | Diseño responsive (Mobile First: 320px → 2560px) | Alta | ✅ Completado |
| RNF-02 | Carga optimizada con lazy loading y code splitting | Alta | ✅ Completado |
| RNF-03 | Animaciones suaves con Framer Motion | Media | ✅ Completado |
| RNF-04 | Paleta de colores elegante (Burgundy, Rose, Wine, Pearl) | Alta | ✅ Completado |
| RNF-05 | Tipografía escalable con sistema de clases estandarizado | Alta | ✅ Completado |
| RNF-06 | Imágenes optimizadas con lazy loading y placeholder | Media | ✅ Completado |
| RNF-07 | Throttling de eventos scroll para rendimiento | Media | ✅ Completado |
| RNF-08 | Tema oscuro en secciones de ceremonia y mesa de regalos | Alta | ✅ Completado |
| RNF-09 | Tema claro en secciones de countdown, recepción y RSVP | Alta | ✅ Completado |
| RNF-10 | Meta tags Open Graph y Twitter Cards para compartir en redes | Media | ✅ Completado |
| RNF-11 | Caché de assets estáticos con max-age=31536000 (inmutable) | Media | ✅ Completado |
| RNF-12 | Deploy en Vercel con SPA rewrites | Alta | ✅ Completado |

---

## 4. User Stories

1. **Como invitado**, quiero ver los detalles de la boda desde mi celular
2. **Como invitado**, quiero saber cuánto falta para la boda
3. **Como invitado**, quiero confirmar mi asistencia fácilmente
4. **Como invitado**, quiero saber cómo vestirme apropiadamente
5. **Como invitado**, quiero saber dónde comprar un regalo
6. **Como invitado**, quiero agregar el evento a mi calendario
7. **Como novios**, queremos tener un registro de quiénes asistirán
8. **Como novios**, queremos una invitación digital elegante y moderna

---

## 5. Stack Tecnológico

| Capa | Tecnología | Versión |
|------|-----------|---------|
| Framework | React | ^18.2.0 |
| Build Tool | Vite | ^4.4.5 |
| CSS | Tailwind CSS | ^3.3.3 |
| Animaciones | Framer Motion | ^10.16.4 |
| Iconos | Lucide React | ^0.542.0 |
| Email | EmailJS | ^4.3.2 |
| Deploy | Vercel | — |

---

## 6. Entregables

- ✅ Sitio web desplegado en https://boda-jorge-noemi.vercel.app
- ✅ Código fuente en repositorio GitHub
- ✅ Integración con Google Sheets para RSVP
- ✅ Integración con EmailJS para notificaciones
- ✅ Documentación de configuración

---

## Historial de Cambios

| Fecha | Versión | Cambio | Autor |
|------|---------|--------|-------|
| 2026-06-24 | v1.0.0 | Documento creado | MVGN System |
