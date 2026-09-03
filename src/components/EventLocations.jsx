import { useState, useMemo, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart, Church, MapPin, Navigation, Car, Calendar,
  Music, Sparkles, Wine
} from 'lucide-react';

/* ── Datos de ubicaciones ── */
const LOCATIONS = {
  ceremony: {
    id: 'ceremony',
    label: 'Ceremonia',
    icon: Church,
    title: 'Catedral de Guadalajara',
    address: 'Av. Fray Antonio Alcalde #10, Centro Histórico',
    city: 'Guadalajara, Jal.',
    description: 'Un momento sagrado donde dos almas se unen para siempre',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.5151130510565!2d-103.34740622565055!3d20.676957499869445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b1f2b2b2b2b2%3A0x1234567890abcdef!2sCatedral%20de%20Guadalajara!5e0!3m2!1ses-419!2smx!4v1234567890',
    details: [
      { icon: Heart, text: 'Sábado 15 de Noviembre, 2026 — 6:00 PM' },
      { icon: Car, text: 'Estacionamiento disponible en la zona' },
      { icon: Music, text: 'Recepción después de la ceremonia' },
    ],
    color: 'rose',
  },
  reception: {
    id: 'reception',
    label: 'Recepción',
    icon: Wine,
    title: 'Hotel Hilton Guadalajara',
    address: 'Av. López Mateos Sur #2077, Col. del Valle',
    city: '44500 Guadalajara, Jal.',
    description: 'Cena, música y celebración hasta el amanecer',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.6972947243285!2d-103.3927842256507!3d20.67319079956338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b1f2b2b2b2b2%3A0x1234567890abcdef!2sHotel%20Hilton%20Guadalajara!5e0!3m2!1ses-419!2smx!4v1234567890',
    details: [
      { icon: Heart, text: 'Cena y celebración después de la ceremonia' },
      { icon: Car, text: 'Estacionamiento privado disponible' },
      { icon: Music, text: 'Sábado 15 de Noviembre — Aprox. 10:00 PM' },
    ],
    color: 'champagne',
  },
};

/* ── Pill de navegación ── */
const LocationPill = memo(({ location, isActive, onClick }) => {
  const Icon = location.icon;
  const activeColor = location.color === 'champagne'
    ? 'bg-champagne-500 text-white shadow-champagne-200/40'
    : 'bg-rose-500 text-white shadow-rose-200/40';

  return (
    <motion.button
      onClick={onClick}
      className={`
        relative flex items-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-3 sm:py-3.5
        rounded-full font-poppins font-semibold text-sm sm:text-base
        transition-all duration-300
        ${isActive
          ? `${activeColor} shadow-lg`
          : 'bg-white/60 text-stone-500 hover:bg-white/80 hover:text-stone-700 border border-stone-200/40'
        }
      `}
      whileHover={{ scale: isActive ? 1.03 : 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${isActive ? '' : 'opacity-60'}`} />
      <span>{location.label}</span>
    </motion.button>
  );
});

LocationPill.displayName = 'LocationPill';

/* ── Panel de ubicación activa ── */
const LocationPanel = memo(({ location }) => {
  const isChampagne = location.color === 'champagne';
  const accentBorder = isChampagne ? 'border-champagne-200/40' : 'border-rose-200/40';
  const accentBtn = isChampagne ? 'bg-champagne-500 hover:bg-champagne-600' : 'bg-rose-500 hover:bg-rose-600';
  const accentBtn2 = isChampagne ? 'bg-champagne-100 text-champagne-700' : 'bg-rose-100 text-rose-700';
  const accentIcon = isChampagne ? 'text-champagne-500' : 'text-rose-500';

  return (
    <motion.div
      key={location.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="card-glass rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl">
        {/* Header de la ubicación */}
        <div className="text-center mb-6 sm:mb-8">
          <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl ${isChampagne ? 'bg-champagne-100 dark:bg-champagne-900/30' : 'bg-rose-100 dark:bg-rose-900/30'} flex items-center justify-center mx-auto mb-4 sm:mb-5 shadow-inner`}>
            <location.icon className={`w-8 h-8 sm:w-10 sm:h-10 ${accentIcon}`} />
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-fraunces font-bold text-stone-800 dark:text-stone-100 mb-2">
            {location.title}
          </h3>
          <p className="text-sm sm:text-base font-poppins text-stone-500 dark:text-stone-400">
            {location.address}
          </p>
          <p className="text-xs sm:text-sm font-poppins text-stone-400 dark:text-stone-500 mt-1">
            {location.city}
          </p>
        </div>

        {/* Grid: Info + Mapa */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Info column */}
          <div className="lg:col-span-1 space-y-4">
            {location.details.map((detail, i) => (
              <div key={i} className={`bg-white/60 dark:bg-stone-800/60 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-5 border ${accentBorder} shadow-sm`}>
                <div className="flex items-start gap-3">
                  <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${isChampagne ? 'bg-champagne-100' : 'bg-rose-100'} flex items-center justify-center flex-shrink-0`}>
                    <detail.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${accentIcon}`} />
                  </div>
                  <p className="text-sm sm:text-base font-poppins text-stone-600 dark:text-stone-300 pt-1">{detail.text}</p>
                </div>
              </div>
            ))}

            {/* Botones de navegación */}
            <div className="space-y-2.5">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className={`w-full flex items-center justify-center gap-2 ${accentBtn} text-white font-poppins font-semibold py-2.5 sm:py-3 px-4 text-sm sm:text-base rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-95 cursor-not-allowed opacity-80`}
              >
                <Navigation className="w-4 h-4" />
                Google Maps (Demo)
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className={`w-full flex items-center justify-center gap-2 ${accentBtn2} font-poppins font-semibold py-2.5 sm:py-3 px-4 text-sm sm:text-base rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-95 cursor-not-allowed opacity-80`}
              >
                <Car className="w-4 h-4" />
                Waze (Demo)
              </a>
            </div>
          </div>

          {/* Mapa */}
          <div className="lg:col-span-2 hidden sm:block">
            <div className="relative overflow-hidden rounded-2xl shadow-lg border border-white/30 h-full min-h-[300px]">
              <iframe
                src={location.mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '350px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl sm:min-h-[400px]"
                title={`Mapa - ${location.title}`}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

LocationPanel.displayName = 'LocationPanel';

/* ── Fecha del evento (constante fuera del componente) ── */
const EVENT_DATE = new Date('2026-11-15');

/* ── Componente principal ── */
const EventLocations = memo(() => {
  const [activeLocation, setActiveLocation] = useState('ceremony');
  const currentLocation = LOCATIONS[activeLocation];

  const generateICalLink = () => {
    const startDate = EVENT_DATE.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const endDate = new Date(EVENT_DATE.getTime() + 4 * 60 * 60 * 1000).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Boda Maria Carlos//ES',
      'BEGIN:VEVENT',
      'DTSTART:' + startDate,
      'DTEND:' + endDate,
      'SUMMARY:Boda de María Elena y Carlos Antonio (DEMO)',
      'DESCRIPTION:Ceremonia religiosa y recepción',
      'LOCATION:Catedral de Guadalajara & Hotel Hilton Guadalajara',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    return URL.createObjectURL(blob);
  };

  const generateGoogleCalendarLink = () => {
    const startDate = EVENT_DATE.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const endDate = new Date(EVENT_DATE.getTime() + 4 * 60 * 60 * 1000).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const details = encodeURIComponent('Boda de María Elena Rodríguez y Carlos Antonio López (DEMO)');
    const location = encodeURIComponent('Catedral de Guadalajara & Hotel Hilton Guadalajara');
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Boda de María Elena y Carlos Antonio (DEMO)&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
  };

  const icalHref = useMemo(() => generateICalLink(), []);

  return (
    <section id="ceremony" className="relative py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 overflow-hidden bg-petal-100/40 dark:bg-stone-900">
      {/* Legacy anchor para navegación antigua */}
      <div id="reception" className="absolute invisible" />
      {/* Ambiente de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-rose-100/30 dark:bg-rose-900/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-champagne-100/25 dark:bg-champagne-900/15 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Encabezado */}
        <motion.div
          className="text-center mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-fraunces font-bold text-rose-700 dark:text-rose-400 mb-4 sm:mb-6 tracking-tight">
            Ceremonia &amp; Recepción
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-stone-500 dark:text-stone-400 max-w-3xl mx-auto leading-relaxed font-light">
            Dos momentos, un mismo amor — te esperamos para celebrar juntos
          </p>
        </motion.div>

        {/* Pills de navegación */}
        <motion.div
          className="flex justify-center gap-3 sm:gap-4 mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {Object.values(LOCATIONS).map((loc) => (
            <LocationPill
              key={loc.id}
              location={loc}
              isActive={activeLocation === loc.id}
              onClick={() => setActiveLocation(loc.id)}
            />
          ))}
        </motion.div>

        {/* Panel de contenido animado */}
        <div className="mb-12 sm:mb-16">
          <AnimatePresence mode="wait">
            <LocationPanel key={activeLocation} location={currentLocation} />
          </AnimatePresence>
        </div>

        {/* Sección de Calendario — compartida */}
        <motion.div
          className="card-glass rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
              <Calendar className="w-7 h-7 sm:w-8 sm:h-8 text-rose-500" />
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-fraunces font-bold text-stone-800 dark:text-stone-100 mb-2">
              ¡No te olvides!
            </h3>
            <p className="text-sm sm:text-base font-poppins text-stone-500 dark:text-stone-400 mb-6 sm:mb-8">
              Agrega la fecha a tu calendario
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.a
                href={generateGoogleCalendarLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 bg-rose-500 hover:bg-rose-600 text-white rounded-2xl font-poppins font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 justify-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="w-4 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Google Calendar
              </motion.a>

              <motion.a
                href={icalHref}
                download="boda-maria-carlos-demo.ics"
                className="group flex items-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 bg-champagne-500 hover:bg-champagne-600 text-white rounded-2xl font-poppins font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 justify-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-4 h-5 group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                iCal
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Cita final */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="card-glass px-8 sm:px-12 py-8 sm:py-10 rounded-3xl shadow-xl inline-block max-w-3xl mx-auto">
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-fraunces text-stone-700 dark:text-stone-200 italic font-medium leading-relaxed mb-5">
              &ldquo;El amor verdadero no consiste en mirarse el uno al otro,<br />
              sino en mirar juntos en la misma dirección&rdquo;
            </blockquote>
            <p className="text-base sm:text-lg font-poppins text-rose-500 font-medium">
              — Antoine de Saint-Exupéry
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

EventLocations.displayName = 'EventLocations';

export default EventLocations;
