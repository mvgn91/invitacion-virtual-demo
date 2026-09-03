# 💍 Invitación de Boda Digital — Demo Template / Plantilla Comercial

<div align="center">
  <br/>
  <p>
    <strong>✨ React 18</strong> •
    <strong>⚡ Vite</strong> •
    <strong>🎨 Tailwind CSS</strong> •
    <strong>🪄 Framer Motion</strong>
  </p>
  <br/>
  <a href="https://invitaciondebodademo.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/🌐_Demo_Online-FF6B8A?style=for-the-badge" alt="Demo Online"/>
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/📦_Descargar_Plantilla-22c55e?style=for-the-badge" alt="Descargar"/>
  </a>
</div>

<br/>

---

## 📋 Descripción

**Plantilla comercial** de invitación digital de boda interactiva con diseño **glassmorphism**. 100% frontend, lista para personalizar con los datos de cada pareja. Ideal para bodas, aniversarios y eventos especiales.

Desarrollada con **React 18**, **Vite**, **Tailwind CSS** y **Framer Motion** — ofrece una experiencia visual elegante, fluida y completamente responsiva.

---

## ✨ Características

| Funcionalidad | Descripción |
|:---|---|
| 🎠 **Hero Parallax** | Animaciones interactivas con glassmorphism y partículas decorativas |
| ⏱️ **Cuenta Regresiva** | Timer en tiempo real hasta la fecha del evento |
| 📍 **Ceremonia & Recepción** | Dos ubicaciones con mapas interactivos y navegación por tabs |
| 👔 **Código de Vestimenta** | Guía visual con colores recomendados y a evitar |
| 🎁 **Mesa de Regalos** | Integración con Liverpool y Amazon |
| 📝 **RSVP** | Formulario de confirmación con validación completa |
| 🌓 **Modo Oscuro/Claro** | Toggle con persistencia en localStorage |
| 📱 **Responsive** | Diseño mobile-first optimizado para todos los dispositivos |
| 🚀 **Rendimiento** | Lazy loading, code splitting, preload de recursos críticos |
| 📅 **Calendario** | Enlaces a Google Calendar e iCal |
| 🎯 **Demo Disclaimer** | Banner flotante personalizable (ideal para mostrar a clientes) |

---

## 🚀 Stack Tecnológico

| Capa | Tecnología |
|:---|---|
| **Framework** | React 18 |
| **Bundler** | Vite 4 |
| **Estilos** | Tailwind CSS 3 |
| **Animaciones** | Framer Motion 10 |
| **Iconos** | Lucide React |
| **Deploy** | Vercel |

---

## 🛠️ Instalación

```bash
# Clonar el repositorio
git clone https://github.com/mvgn91/invitacion-virtual-demo.git

# Entrar al directorio
cd invitacion-virtual-demo

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build de producción
npm run build
```

---

## 🔧 Personalización para clientes

1. **Reemplazar datos del evento** en los componentes correspondientes:
   - `src/components/Hero.jsx` — Nombres de los novios
   - `src/components/Countdown.jsx` — Fecha del evento
   - `src/components/EventLocations.jsx` — Ubicaciones y mapas

2. **Configurar RSVP real** (opcional — la demo trae el envío desactivado):
   - Completar `GOOGLE_SCRIPT_URL` en `src/config/googleSheets.js`
   - Desplegar `google-apps-script.js` como Google Apps Script Web App (ver `INSTRUCCIONES_GOOGLE_SHEETS.md`)

3. **Reemplazar imágenes** de Unsplash con fotos reales de la pareja

4. **Actualizar SEO** en `index.html`:
   - Meta tags (título, descripción, Open Graph)
   - Favicon

---

## 📂 Estructura del Proyecto

```
├── index.html               ← Entry point HTML con SEO
├── src/
│   ├── main.jsx             ← Entry point React
│   ├── App.jsx              ← Componente raíz (lazy loading)
│   ├── components/          ← 16 componentes de UI
│   ├── config/              ← Configuración (Google Sheets / RSVP)
│   ├── context/             ← ThemeContext (modo oscuro)
│   └── hooks/               ← Custom hooks (intersection, preload, scroll)
├── docs/                    ← Documentación MVGN del proyecto
├── dist/                    ← Build de producción
└── vercel.json              ← Configuración Vercel
```

---

## 🌐 Demo en Vivo

[🔗 invitaciondebodademo.vercel.app](https://invitaciondebodademo.vercel.app)

---

## 📄 Licencia

**© 2026 MVGN Labs** — Todos los derechos reservados.  
Esta es una plantilla comercial. No está permitida su redistribución sin autorización.

---

<p align="center">
  Hecho con ❤️ por <a href="https://mvgn.vercel.app" target="_blank"><strong>MVGN Labs</strong></a>
</p>
