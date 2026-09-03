# 🚀 Guía de Deployment

## 📋 Preparación Previa

### 1. Configurar el RSVP (Google Sheets + Google Apps Script)
El formulario RSVP de esta demo se integra con **Google Sheets** mediante **Google Apps Script** (ver `google-apps-script.js` y `INSTRUCCIONES_GOOGLE_SHEETS.md`).

La versión demo trae el envío **desactivado** (`src/config/googleSheets.js`: `GOOGLE_SCRIPT_URL = ''`), así que solo simula el registro y no recibe datos reales.

Para activar el registro real:
```bash
# Abrir src/config/googleSheets.js y completar:
#   GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/<DEPLOY_ID>/exec'
```

### 2. Verificar Variables de Entorno
- No se requieren variables de entorno para el funcionamiento básico
- EmailJS es **opcional** (la demo usa Google Sheets como mecanismo de registro por defecto)

## 🌐 Deployment en Vercel (Recomendado)

### Opción 1: Deploy Automático desde GitHub
1. **Subir a GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Wedding invitation site"
   git branch -M main
   git remote add origin https://github.com/mvgn91/invitacion-virtual-demo.git
   git push -u origin main
   ```

2. **Conectar con Vercel**:
   - Ir a [vercel.com](https://vercel.com)
   - Conectar cuenta de GitHub
   - Importar proyecto
   - Configurar:
     - Framework: Vite
     - Build Command: `npm run build`
     - Output Directory: `dist`
   - Deploy automático

### Opción 2: Deploy Manual con Vercel CLI
```bash
# Instalar Vercel CLI
npm i -g vercel

# Login en Vercel
vercel login

# Deploy
vercel

# Deploy a producción
vercel --prod
```

## 📱 Deployment en GitHub Pages

### Configuración Manual
```bash
# Instalar gh-pages
npm install --save-dev gh-pages

# Agregar script al package.json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# Deploy
npm run deploy
```

### Configuración en GitHub
1. Ir a Settings > Pages
2. Source: Deploy from a branch
3. Branch: gh-pages
4. Folder: / (root)

## 🔧 Optimizaciones de Producción

### Build Optimizado
```bash
# Build para producción
npm run build

# Verificar tamaño del bundle
npx vite-bundle-analyzer dist
```

### Configuraciones Aplicadas
- ✅ Minificación con Terser
- ✅ Code splitting automático
- ✅ Chunks optimizados (vendor, framer, icons)
- ✅ Assets comprimidos
- ✅ Sourcemaps deshabilitados para producción

## 📊 Monitoreo y Analytics

### Google Analytics (Opcional)
```javascript
// Agregar en index.html antes del </head>
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Vercel Analytics
- Se activa automáticamente en Vercel
- No requiere configuración adicional

## 🛠️ Troubleshooting

### Problemas Comunes

1. **Error 404 en rutas**:
   - Verificar que `vercel.json` esté configurado
   - Comprobar rewrites en configuración

2. **Imágenes no cargan**:
   - Verificar rutas relativas
   - Comprobar que estén en `public/`

3. **Formulario RSVP no funciona**:
   - Verificar `GOOGLE_SCRIPT_URL` en `src/config/googleSheets.js`
   - Confirmar que el Google Apps Script está desplegado como Web App
   - Revisar que la hoja de cálculo sea accesible para el script

4. **Fuentes no cargan**:
   - Verificar conexión a Google Fonts
   - Comprobar preload en index.html

### Comandos de Debug
```bash
# Verificar build localmente
npm run preview

# Lint del código
npm run lint

# Verificar dependencias
npm audit
```

## 📈 Performance

### Métricas Objetivo
- **Lighthouse Score**: >90
- **First Contentful Paint**: <2s
- **Largest Contentful Paint**: <4s
- **Cumulative Layout Shift**: <0.1

### Optimizaciones Implementadas
- ✅ Lazy loading de imágenes
- ✅ Preload de fuentes críticas
- ✅ Code splitting
- ✅ Minificación de CSS/JS
- ✅ Compresión de assets

## 🔒 Seguridad

### Configuraciones Aplicadas
- ✅ Headers de seguridad en vercel.json
- ✅ CSP headers básicos
- ✅ No exposición de credenciales
- ✅ Validación de formularios

## 📱 Responsive Testing

### Dispositivos a Probar
- 📱 iPhone SE (375px)
- 📱 iPhone 12 (390px)
- 📱 iPad (768px)
- 💻 Desktop (1920px)

### Herramientas
- Chrome DevTools
- Vercel Preview URLs
- BrowserStack (opcional)

## 🎯 Checklist Pre-Deploy

- [ ] Código sin errores de lint
- [ ] Build exitoso sin warnings
- [ ] Responsive design verificado
- [ ] Formulario RSVP funcional
- [ ] Meta tags configurados
- [ ] Favicon actualizado
- [ ] URLs de producción actualizadas
- [ ] Google Sheets / Apps Script configurado (opcional)
- [ ] `GOOGLE_SCRIPT_URL` completado en `src/config/googleSheets.js` (opcional)

## 📞 Soporte

Para problemas técnicos:
1. Revisar logs de Vercel
2. Verificar configuración de build
3. Comprobar dependencias
4. Revisar este documento

---

**¡Listo para el gran día! 💍✨**
