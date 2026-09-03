import { motion } from 'framer-motion';
import { Heart, Sparkles, ChevronDown, Calendar } from 'lucide-react';
import { useState, useMemo, memo, useCallback } from 'react';

/* ── Gradient Blob — orbe de color animado ── */
const GradientBlob = memo(({ color, x, y, size, delay, duration }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{
      width: size,
      height: size,
      background: `radial-gradient(circle at 30% 30%, ${color} 0%, transparent 65%)`,
      left: x,
      top: y,
      willChange: 'transform, opacity',
    }}
    animate={{
      x: [0, 80, -60, 40, 0],
      y: [0, -60, 80, -40, 0],
      scale: [1, 1.15, 0.9, 1.05, 1],
      opacity: [0.5, 0.7, 0.4, 0.6, 0.5],
    }}
    transition={{
      duration: duration || 10,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: delay || 0,
    }}
  />
));

GradientBlob.displayName = 'GradientBlob';

/* ── Hero Principal ── */
const Hero = memo(() => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  }, []);

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Partículas decorativas
  const particles = useMemo(() => Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 5,
    duration: Math.random() * 6 + 6,
    opacity: Math.random() * 0.25 + 0.08,
  })), []);

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#f5f0ec] dark:bg-stone-950"
      onMouseMove={handleMouseMove}
    >
      {/* ═══ GLASSMORPHISM BACKGROUND ═══ */}
      {/* Gradiente base visible con tonos cálidos */}
      <div
        className="absolute inset-0 dark:opacity-20 dark:mix-blend-overlay"
        style={{
          background: 'linear-gradient(160deg, #fce8ef 0%, #fdf7ed 30%, #f9f3ed 55%, #f5f0ec 75%, #fefcf8 100%)',
        }}
      />

      {/* Capa decorativa — gradiente radial animado con backgroundPosition (fluido sin snaps) */}
      <motion.div
        className="absolute inset-0 pointer-events-none dark:opacity-30"
        style={{
          background: 'radial-gradient(ellipse 80% 55% at 50% 50%, rgba(244,169,195,0.25) 0%, rgba(229,182,112,0.15) 35%, transparent 65%)',
          backgroundSize: '220% 220%',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 0%', '100% 100%', '0% 100%', '0% 0%'],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Grain texture overlay — sutil textura de papel */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07] mix-blend-soft-light"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '256px 256px',
        }}
      />

      {/* Orbes de gradiente con parallax de mouse */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      >
        <GradientBlob color="rgba(244, 169, 195, 0.15)" x="-5%" y="5%" size="65vmax" delay={0} duration={12} />
        <GradientBlob color="rgba(229, 182, 112, 0.12)" x="40%" y="-15%" size="55vmax" delay={2} duration={14} />
        <GradientBlob color="rgba(213, 163, 132, 0.1)" x="55%" y="35%" size="50vmax" delay={4} duration={11} />
        <GradientBlob color="rgba(244, 169, 195, 0.08)" x="15%" y="50%" size="45vmax" delay={6} duration={13} />
        <GradientBlob color="rgba(229, 182, 112, 0.06)" x="75%" y="55%" size="40vmax" delay={3} duration={15} />
        <GradientBlob color="rgba(244, 169, 195, 0.05)" x="30%" y="75%" size="35vmax" delay={5} duration={16} />
      </div>

      {/* Partículas decorativas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
              backgroundColor: p.id % 3 === 0
                ? 'rgba(244, 169, 195, 0.3)'
                : p.id % 3 === 1
                  ? 'rgba(229, 182, 112, 0.2)'
                  : 'rgba(255,255,255,0.3)',
            }}
            animate={{
              y: [0, -25 - Math.random() * 15, 0],
              opacity: [p.opacity, p.opacity * 2.5, p.opacity],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: p.delay,
            }}
          />
        ))}
      </div>

      {/* ═══ OVERLAY CRISTAL ═══ */}
      <div
        className="absolute inset-0 pointer-events-none dark:opacity-0"
        style={{
          background: 'linear-gradient(180deg, rgba(245,240,236,0) 0%, rgba(245,240,236,0.2) 50%, rgba(245,240,236,0.5) 80%, rgba(245,240,236,0.8) 100%)',
        }}
      />

      {/* ═══ CONTENIDO — FLUJO VERTICAL ═══ */}
      <div className="relative z-10 flex flex-col min-h-screen px-4 sm:px-8 md:px-12 lg:px-16">
        
        {/* ── ZONA SUPERIOR: NOMBRES (flex-1 para centrar verticalmente) ── */}
        <div className="flex-1 flex flex-col justify-center pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8">
          <div className="text-center max-w-5xl mx-auto w-full">
            
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/60 dark:bg-stone-800/60 backdrop-blur-xl rounded-full border border-rose-200/30 dark:border-rose-800/30 shadow-sm mx-auto mb-6 sm:mb-8 md:mb-10"
            >
              <Sparkles className="w-3.5 h-3.5 text-rose-400" />
              <span className="text-[10px] sm:text-xs font-poppins font-medium text-rose-500/80 dark:text-rose-400/80 tracking-[0.15em] uppercase">
                Invitación Digital — Demo Interactiva
              </span>
            </motion.div>

            {/* Nombres — tipografía como arte */}
            <motion.h1
              className="font-fraunces font-bold leading-[0.82] tracking-tight select-none"
              style={{ fontSize: 'clamp(3.2rem, 14vw, 10rem)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.span
                className="block text-rose-800 dark:text-rose-200"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                María Elena
              </motion.span>

              <motion.div
                className="flex items-center justify-center my-1 sm:my-2"
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.9, delay: 1.0, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <motion.span
                  className="font-fraunces italic inline-block text-champagne-500 drop-shadow-sm"
                  style={{
                    fontSize: 'clamp(2.2rem, 9vw, 4.5rem)',
                    lineHeight: 1,
                    padding: '0.05em 0.15em',
                  }}
                >
                  &amp;
                </motion.span>
              </motion.div>

              <motion.span
                className="block text-rose-800 dark:text-rose-200"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                Carlos Antonio
              </motion.span>
            </motion.h1>


          </div>
        </div>

        {/* ── ZONA INFERIOR: INVITACIÓN + CTAs ── */}
        <div className="pb-16 sm:pb-20 md:pb-24 lg:pb-28">
          <div className="max-w-4xl mx-auto w-full">
            
            {/* Glass card — mensaje de invitación */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.7 }}
            >
              <div              className="bg-white/60 dark:bg-stone-800/60 dark:backdrop-blur-xl rounded-3xl px-6 sm:px-10 md:px-12 py-6 sm:py-8 md:py-10 border border-rose-200/20 dark:border-rose-800/20 shadow-xl shadow-rose-200/10 dark:shadow-black/20">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
                  {/* Icono decorativo — solo desktop */}
                  <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-rose-50/80 border border-rose-200/30 items-center justify-center flex-shrink-0 shadow-inner">
                    <Heart className="w-7 h-7 text-rose-400" />
                  </div>
                  
                  <div className="flex-1 text-center sm:text-left">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-poppins text-stone-600 dark:text-stone-300 leading-relaxed font-light">
                      Con la bendición de Dios y la alegría de nuestras familias,{' '}
                      <span className="text-rose-600 dark:text-rose-400 font-medium">los invitamos</span> a celebrar
                      el día más especial de nuestras vidas.
                    </p>
                  </div>
                </div>
                
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-rose-200/20 dark:border-rose-800/20 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-stone-400 dark:text-stone-500">
                    <Calendar className="w-4 h-4 text-rose-400" />
                    <span className="text-sm sm:text-base font-poppins font-medium tracking-[0.05em]">
                      15 de Noviembre, 2026 — 6:00 PM
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-poppins text-rose-400/60 dark:text-rose-400/80 italic">
                    Sábado — Catedral de Guadalajara
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Botones de acción */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center items-center mt-6 sm:mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.2 }}
            >
              <motion.button
                onClick={() => scrollToSection('rsvp')}
                className="group relative px-8 sm:px-10 py-3.5 sm:py-4 bg-rose-500 text-white font-poppins font-semibold rounded-full hover:bg-rose-600 transition-all duration-300 text-sm sm:text-base uppercase tracking-wider shadow-xl shadow-rose-300/30 hover:shadow-rose-400/40 active:scale-95"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2.5">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                  Confirmar Asistencia
                </span>
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('ceremony')}
                className="group px-8 sm:px-10 py-3.5 sm:py-4 border-2 border-rose-300/50 text-rose-600 font-poppins font-semibold rounded-full hover:bg-white/60 hover:border-rose-300 transition-all duration-300 text-sm sm:text-base uppercase tracking-wider active:scale-95"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                  Ver Detalles
                </span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ═══ SCROLL INDICATOR ═══ */}
      <motion.div
        className="absolute bottom-4 sm:bottom-6 left-0 right-0 flex justify-center z-20"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.8 }}
      >
        <motion.button
          onClick={() => scrollToSection('countdown')}
          className="w-12 h-12 sm:w-14 sm:h-14 bg-white/50 backdrop-blur-sm border border-white/60 rounded-full flex items-center justify-center text-rose-400 hover:bg-white/70 hover:text-rose-500 transition-all duration-200 active:scale-95 shadow-lg"
          whileTap={{ scale: 0.95 }}
          animate={{ y: [0, 5, 0] }}
          transition={{ y: { duration: 2, repeat: Infinity, ease: 'easeInOut' } }}
        >
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.button>
      </motion.div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
