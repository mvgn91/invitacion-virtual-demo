# 05 — Lecciones Aprendidas

> **Proyecto:** Invitación de Boda — Jorge & Noemí

---

## Incidentes

### I-001 — Error de compilación por importación de googleSheets

**Fecha:** Durante desarrollo
**Qué:** Error al compilar `RSVPForm.jsx` por importación incorrecta de `../config/googleSheets`
**Causa:** La función `sendToGoogleSheets` fue eliminada momentáneamente para resolver el error de compilación, y el formulario quedó en modo simulación
**Acción:** Se removió la importación problemática y se implementó envío simulado con `console.log` y timeout
**Prevención:** Verificar exportaciones antes de importar; mantener fallback funcional

### I-002 — Conflictos de color en estilos CSS

**Fecha:** Durante desarrollo
**Qué:** Uso de `color: 'white !important'` en `ScrollToTop.jsx` indica conflicto de estilos
**Causa:** La jerarquía de Tailwind no aplicaba correctamente en ciertos contextos
**Acción:** Se forzó el color con `!important` como solución temporal
**Prevención:** Revisar especificidad de Tailwind y evitar `!important` usando clases adecuadas

---

## Riesgos Activos

| Riesgo | Impacto | Mitigación |
|--------|---------|------------|
| Google Sheets CORS policy (no-cors mode) | Bajo — El envío funciona pero no se puede leer la respuesta | Usar `mode: 'no-cors'` como está configurado |
| Dependencia de EmailJS (servicio externo) | Bajo — Si EmailJS falla, el formulario sigue funcionando localmente | El formulario tiene fallback de simulación |

---

## Observaciones

- El proyecto se desarrolló como aplicación SPA sin framework de backend
- Se priorizó la experiencia mobile-first con animaciones elegantes
- La paleta de colores burgundy/rose/wine/pearl fue bien recibida por su elegancia
- Google Sheets como backend sin servidor es suficiente para este caso de uso
- El lazy loading mejoró significativamente el rendimiento percibido

---

## Historial de Cambios

| Fecha | Versión | Cambio | Autor |
|------|---------|--------|-------|
| 2026-06-24 | v1.0.0 | Documento creado | MVGN System |
