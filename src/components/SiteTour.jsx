import React, { memo, useState, useEffect, useCallback, useRef } from 'react';
import { Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const tourSteps = [
  {
    id: 'hero',
    title: 'Hero Principal',
    tagline: 'Atrapa miradas al instante',
    pitch: 'Gradiente dinámico animado con orbes flotantes que reaccionan al mouse, tipografía impactante y un diseño crystal clear. Una entrada cinematográfica que demuestra maestría en animaciones web y diseño de experiencias inmersivas.',
    features: [
      { label: 'Degradado dinámico', icon: '🎨' },
      { label: 'Gradient orbs', icon: '🌊' },
      { label: 'Efecto parallax', icon: '🌀' },
      { label: 'Glassmorphism', icon: '🪟' },
    ],
    tech: 'Framer Motion · CSS Gradients · Mouse Tracking',
    icon: '✨',
  },
  {
    id: 'countdown',
    title: 'Cuenta Regresiva',
    tagline: 'Anticipación en tiempo real',
    pitch: 'Flip Clock animado con efecto 3D que calcula días, horas, minutos y segundos. Cada dígito gira sobre sí mismo como un reloj clásico. Precisión que impresiona y un detalle técnico que enamora a cualquier reclutador.',
    features: [
      { label: 'Flip clock 3D', icon: '⏱️' },
      { label: 'Animación realista', icon: '🔄' },
      { label: 'Cálculo en vivo', icon: '⚡' },
      { label: '100% responsive', icon: '📱' },
    ],
    tech: 'CSS 3D Transform · Framer Motion · Date API',
    icon: '⏱️',
  },
  {
    id: 'ceremony',
    title: 'Detalles de Ceremonia',
    tagline: 'Información que organiza',
    pitch: 'Datos complejos presentados con claridad absoluta: mapas interactivos embebidos, enlaces a Google Maps y Waze, y una jerarquía visual que transforma información densa en una experiencia clara y accionable.',
    features: [
      { label: 'Google Maps embed', icon: '🗺️' },
      { label: 'Links Maps + Waze', icon: '📍' },
      { label: 'Diseño informativo', icon: '📋' },
      { label: 'Crystal glass cards', icon: '🪟' },
    ],
    tech: 'iframe API · External Links · Scroll Animations',
    icon: '📍',
  },
  {
    id: 'dresscode',
    title: 'Código de Vestimenta',
    tagline: 'Comunicación que funciona',
    pitch: 'Recomendaciones y restricciones comunicadas con un diseño de dos columnas, alertas cromáticas sutiles y jerarquía visual impecable. Información importante que se entiende de un solo vistazo.',
    features: [
      { label: 'Diseño 2 columnas', icon: '📐' },
      { label: 'Alertas visuales', icon: '⚠️' },
      { label: 'Iconografía precisa', icon: '🎀' },
      { label: 'Jerarquía clara', icon: '👁️' },
    ],
    tech: 'CSS Grid/Flexbox · Alert System · Typography',
    icon: '👔',
  },
  {
    id: 'reception',
    title: 'Recepción',
    tagline: 'Utilidad con belleza',
    pitch: 'Integración total: mapa interactivo, Google Calendar, descarga iCal y diseño cohesivo. Una sección que demuestra cómo combinar herramientas externas con una experiencia de usuario elegante y funcional.',
    features: [
      { label: 'Mapa interactivo', icon: '🗺️' },
      { label: 'Google Calendar', icon: '📅' },
      { label: 'Descarga iCal', icon: '💾' },
      { label: 'Diseño cristalino', icon: '🪟' },
    ],
    tech: 'Calendar API · File Download · Responsive',
    icon: '🎉',
  },
  {
    id: 'gift-registry',
    title: 'Mesa de Regalos',
    tagline: 'E-commerce integrado',
    pitch: 'Múltiples tiendas con enlaces directos en una interfaz consistente. Demuestra integración con plataformas externas (Liverpool, Amazon) manteniendo una experiencia de usuario impecable y visualmente coherente.',
    features: [
      { label: 'Múltiples tiendas', icon: '🛍️' },
      { label: 'Enlaces externos', icon: '🔗' },
      { label: 'UX consistente', icon: '🎨' },
      { label: 'Mensaje personalizado', icon: '💝' },
    ],
    tech: 'External Links · Target \\\\\\\\_blank · Grid Layout',
    icon: '🎁',
  },
  {
    id: 'rsvp',
    title: 'Formulario RSVP',
    tagline: 'UX multi-paso profesional',
    pitch: 'Validación en tiempo real, campos dinámicos para acompañantes y feedback visual inmediato. Un formulario complejo resuelto con elegancia — demuestra manejo de estado, validaciones y componentes condicionales.',
    features: [
      { label: 'Multi-paso lógico', icon: '📝' },
      { label: 'Validación en vivo', icon: '✅' },
      { label: 'Campos dinámicos', icon: '➕' },
      { label: 'Glass design', icon: '🪟' },
    ],
    tech: 'Form State · Validation · Conditional Render',
    icon: '📝',
  },
  {
    id: 'footer',
    title: 'Footer',
    tagline: 'El cierre perfecto',
    pitch: 'Hashtag personalizado, badges de tecnologías, créditos del desarrollador y un diseño responsivo que mantiene la jerarquía visual hasta el último píxel. Un final que deja huella profesional.',
    features: [
      { label: 'Hashtag branding', icon: '🏷️' },
      { label: 'Tech badges', icon: '🛠️' },
      { label: 'Créditos sutiles', icon: '✍️' },
      { label: 'Responsive total', icon: '📱' },
    ],
    tech: 'Flexbox · SVG Icons · Typography Scale',
    icon: '💎',
  },
];

const SiteTour = () => {
  const [isActive, setIsActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isMinimized, setIsMinimized] = useState(false);
  const idleTimerRef = useRef(null);

  const startIdleTimer = useCallback(() => {
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    idleTimerRef.current = setTimeout(() => {
      setIsMinimized(true);
    }, 2000);
  }, []);

  const clearIdleTimer = useCallback(() => {
    if (idleTimerRef.current) {
      clearTimeout(idleTimerRef.current);
      idleTimerRef.current = null;
    }
  }, []);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => clearIdleTimer();
  }, [clearIdleTimer]);

  const startTour = useCallback(() => {
    setCurrentStep(0);
    setIsMinimized(false);
    setIsActive(true);
    // Start idle timer after expand
    requestAnimationFrame(() => startIdleTimer());
  }, [startIdleTimer]);

  const endTour = useCallback(() => {
    clearIdleTimer();
    setIsActive(false);
    setIsMinimized(false);
  }, [clearIdleTimer]);

  const goToStep = useCallback((index) => {
    const step = tourSteps[index];
    if (!step) return;
    setCurrentStep(index);
    setIsMinimized(false);
    const el = document.getElementById(step.id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    // Start idle timer after navigation
    requestAnimationFrame(() => startIdleTimer());
  }, [startIdleTimer]);

  const goNext = useCallback(() => {
    if (currentStep < tourSteps.length - 1) goToStep(currentStep + 1);
  }, [currentStep, goToStep]);

  const goPrev = useCallback(() => {
    if (currentStep > 0) goToStep(currentStep - 1);
  }, [currentStep, goToStep]);

  const expandTour = useCallback(() => {
    setIsMinimized(false);
    requestAnimationFrame(() => startIdleTimer());
  }, [startIdleTimer]);

  const handleCardMouseEnter = useCallback(() => {
    clearIdleTimer();
  }, [clearIdleTimer]);

  const handleCardMouseLeave = useCallback(() => {
    if (!isMinimized) {
      startIdleTimer();
    }
  }, [isMinimized, startIdleTimer]);

  // Keyboard navigation
  useEffect(() => {
    if (!isActive) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') endTour();
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goNext();
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isActive, goNext, goPrev, endTour]);

  const step = tourSteps[currentStep];
  const progress = ((currentStep + 1) / tourSteps.length) * 100;

  return (
    <>
      {/* 🚀 Botón flotante — visible cuando el tour no está activo O cuando está minimizado */}
      {(!isActive || (isActive && isMinimized)) && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={isActive ? expandTour : startTour}
          className="fixed bottom-8 left-8 z-50 px-5 py-3 bg-rose-500 text-white rounded-2xl shadow-2xl shadow-rose-300/40 hover:bg-rose-600 hover:shadow-rose-400/50 transition-all duration-300 flex items-center gap-3 group"
        >
          <Rocket className="w-5 h-5" />
          <div className="text-left">
            <p className="text-xs font-bold tracking-wider">
              {isActive ? step?.title || 'TOUR DEL SITIO' : 'TOUR DEL SITIO'}
            </p>
            <p className="text-[10px] text-rose-200/80">
              {isActive ? `Paso ${currentStep + 1} de ${tourSteps.length}` : 'Descubre cada sección'}
            </p>
          </div>
          <motion.span
            className="absolute -top-1 -right-1 w-3 h-3 bg-champagne-400 rounded-full"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </motion.button>
      )}

      {/* 🎯 Tour activo — card expandida con hover para mantener visible */}
      <AnimatePresence>
        {isActive && step && !isMinimized && (
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed bottom-0 left-0 right-0 z-[60] flex justify-center pointer-events-none"
          >
            <div
              className="w-full max-w-3xl mx-3 sm:mx-4 mb-3 sm:mb-4 pointer-events-auto"
              onMouseEnter={handleCardMouseEnter}
              onMouseLeave={handleCardMouseLeave}
            >
              <div className="relative bg-white/90 dark:bg-stone-900/90 backdrop-blur-xl rounded-2xl border border-rose-200/30 dark:border-rose-800/30 shadow-xl dark:shadow-rose-900/10 crystal-edge overflow-hidden">

                {/* Progress bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-rose-100/50">
                  <motion.div
                    className="h-full rounded-full bg-rose-400"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  />
                </div>

                <div className="p-4 sm:p-5">
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-rose-50 dark:bg-rose-500/20 border border-rose-200/30 dark:border-rose-800/30 flex items-center justify-center text-lg sm:text-xl flex-shrink-0">
                        {step.icon}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-sm sm:text-base font-bold text-stone-800 dark:text-stone-100 truncate">
                          {step.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-rose-500/80 font-medium truncate">
                          {step.tagline}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                      <span className="text-[10px] sm:text-xs text-stone-400 dark:text-stone-500 font-mono tabular-nums bg-stone-100/60 dark:bg-stone-800/60 px-2 py-0.5 rounded-md border border-stone-200/50 dark:border-stone-700/50">
                        {String(currentStep + 1).padStart(2, '0')}/{String(tourSteps.length).padStart(2, '0')}
                      </span>
                      <button
                        onClick={endTour}
                        className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-lg bg-stone-100/60 hover:bg-stone-200/60 dark:bg-stone-800/60 dark:hover:bg-stone-700/60 text-stone-400 hover:text-stone-600 dark:text-stone-500 dark:hover:text-stone-300 border border-stone-200/50 dark:border-stone-700/50 transition-all duration-200"
                        title="Cerrar tour (Esc)"
                      >
                        <span className="text-xs sm:text-sm">✕</span>
                      </button>
                    </div>
                  </div>

                  {/* Pitch */}
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-3 line-clamp-3 sm:line-clamp-none">
                    {step.pitch}
                  </p>

                  {/* Features row */}
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-3">
                    {step.features.map((f, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 bg-rose-50/60 dark:bg-rose-500/15 border border-rose-200/30 dark:border-rose-800/30 rounded-lg text-[10px] sm:text-xs text-rose-600/90 dark:text-rose-400/90 font-medium"
                      >
                        <span className="text-[10px]">{f.icon}</span>
                        {f.label}
                      </span>
                    ))}
                  </div>

                  {/* Tech + navigation */}
                  <div className="flex items-center justify-between pt-2.5 border-t border-rose-200/20 dark:border-rose-800/20">
                    <div className="hidden sm:block">
                      <span className="text-[10px] text-stone-400 dark:text-stone-500 font-mono">
                        <span className="text-rose-400/60">//</span> {step.tech}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
                      {/* Dots (mobile) */}
                      <div className="flex items-center gap-1 sm:hidden">
                        {tourSteps.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => goToStep(i)}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                              i === currentStep
                              ? 'bg-rose-400 w-3'
                              : 'bg-stone-300 hover:bg-stone-400 dark:bg-stone-600 dark:hover:bg-stone-500'
                            }`}
                          />
                        ))}
                      </div>
                      <button
                        onClick={goPrev}
                        disabled={currentStep === 0}
                        className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-stone-500 dark:text-stone-400 bg-stone-100/60 hover:bg-stone-200/60 dark:bg-stone-800/60 dark:hover:bg-stone-700/60 disabled:opacity-25 disabled:cursor-not-allowed rounded-xl border border-stone-200/50 dark:border-stone-700/50 transition-all duration-200"
                      >
                        ← Anterior
                      </button>
                      {currentStep < tourSteps.length - 1 ? (
                        <button
                          onClick={goNext}
                          className="px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-semibold text-white bg-rose-500 hover:bg-rose-600 rounded-xl shadow-lg shadow-rose-300/20 border border-rose-400/20 transition-all duration-200"
                        >
                          Siguiente →
                        </button>
                      ) : (
                        <button
                          onClick={endTour}
                          className="px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-semibold text-white bg-champagne-500 hover:bg-champagne-600 rounded-xl shadow-lg shadow-champagne-300/20 border border-champagne-400/20 transition-all duration-200"
                        >
                          ✦ Finalizar
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Keyboard hints */}
                  <div className="hidden sm:flex items-center gap-3 mt-2 text-[9px] text-stone-400 dark:text-stone-500">
                    <span>⌨ ← →</span>
                    <span>⎋ Cerrar</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default memo(SiteTour);
