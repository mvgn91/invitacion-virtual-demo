import { motion } from 'framer-motion';
import { useState, useEffect, useMemo, memo } from 'react';

/* ── TimeUnitCard: Una tarjeta por unidad de tiempo ── */
const TimeUnitCard = memo(({ value, label, accent = 'rose', index }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 400);
    return () => clearTimeout(timer);
  }, [value]);

  const accentBorder = accent === 'champagne' ? 'border-champagne-200/40' : 'border-rose-200/40';
  const accentText = accent === 'champagne' ? 'text-champagne-600 dark:text-champagne-400' : 'text-rose-600 dark:text-rose-400';
  const accentLabel = accent === 'champagne' ? 'bg-champagne-50/80 dark:bg-champagne-900/40 text-champagne-600 dark:text-champagne-400' : 'bg-rose-50/80 dark:bg-rose-900/40 text-rose-500 dark:text-rose-400';
  const accentLine = accent === 'champagne' ? 'bg-champagne-300/40 dark:bg-champagne-700/40' : 'bg-rose-300/40 dark:bg-rose-700/40';

  return (
    <motion.div
      className="flex flex-col items-center gap-2 sm:gap-3"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true }}
    >
      {/* Card del número — sin aspect-ratio forzado, padding uniforme */}
      <div
        className={`
          relative w-full min-w-[70px] max-w-[130px] px-3 sm:px-4 md:px-5
          py-5 sm:py-6 md:py-7 rounded-2xl sm:rounded-3xl
          bg-white/75 dark:bg-stone-800/75 backdrop-blur-xl
          border ${accentBorder}
          shadow-lg shadow-rose-200/5 dark:shadow-black/20
          flex items-center justify-center
          overflow-hidden
          transition-all duration-300
          ${animate ? 'scale-[0.96]' : 'scale-100'}
        `}
      >
        {/* Brillo superior */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />

        {/* Número — tabular-nums para ancho uniforme de dígitos */}
        <span
          className={`
            relative z-10 font-fraunces font-bold ${accentText}
            text-[clamp(2.5rem,12vw,4.8rem)]
            leading-none select-none tabular-nums
            transition-all duration-300
            ${animate ? 'opacity-50 scale-[0.85]' : 'opacity-100 scale-100'}
          `}
        >
          {String(value).padStart(2, '0')}
        </span>

        {/* Línea decorativa al fondo */}
        <div className={`absolute bottom-3 sm:bottom-4 left-[30%] right-[30%] h-[1.5px] rounded-full ${accentLine}`} />
      </div>

      {/* Label como pill */}
      <span className={`px-3 py-1 text-[10px] sm:text-xs font-poppins font-semibold uppercase tracking-[0.15em] rounded-full ${accentLabel}`}>
        {label}
      </span>
    </motion.div>
  );
});

TimeUnitCard.displayName = 'TimeUnitCard';

/* ── Countdown principal ── */
const Countdown = memo(() => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-11-15T18:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = useMemo(() => [
    { label: 'Días', value: timeLeft.days, accent: 'rose' },
    { label: 'Horas', value: timeLeft.hours, accent: 'champagne' },
    { label: 'Minutos', value: timeLeft.minutes, accent: 'rose' },
    { label: 'Segundos', value: timeLeft.seconds, accent: 'champagne' },
  ], [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds]);

  return (
    <section
      id="countdown"
      className="relative py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 overflow-hidden bg-rose-50/40 dark:bg-stone-900"
    >
      {/* Decoración de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-rose-100/40 dark:bg-rose-900/30 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-champagne-100/30 dark:bg-champagne-900/20 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Encabezado */}
        <motion.div
          className="text-center mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-fraunces font-bold text-rose-700 dark:text-rose-400 mb-4 sm:mb-6 tracking-tight">
            Cuenta Regresiva
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-stone-500 dark:text-stone-400 max-w-2xl mx-auto leading-relaxed font-light">
            La emoción crece mientras esperamos el día especial
          </p>
        </motion.div>

        {/* Grid de cards — uniforme con auto-fill */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto">
          {timeUnits.map((unit, index) => (
            <TimeUnitCard
              key={unit.label}
              value={unit.value}
              label={unit.label}
              accent={unit.accent}
              index={index}
            />
          ))}
        </div>

        {/* Mensaje final */}
        <motion.div
          className="text-center mt-10 sm:mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white/60 dark:bg-stone-800/60 backdrop-blur-lg rounded-xl sm:rounded-2xl border border-rose-200/30 dark:border-rose-800/30 shadow-sm">
            <p className="text-base sm:text-lg font-poppins text-rose-600 dark:text-rose-400 italic font-medium">
              ¡Nos vemos pronto!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

Countdown.displayName = 'Countdown';

export default Countdown;
