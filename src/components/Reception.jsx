import { motion } from 'framer-motion';
import { Heart, MapPin, Calendar, Navigation, Car } from 'lucide-react';

const Reception = () => {
  const eventDate = new Date('2026-11-15');
  const receptionLocation = "Hotel Hilton Guadalajara, Av. López Mateos Sur #2077, Col. del Valle, 44500 Guadalajara, Jal";
  
  const generateGoogleCalendarLink = () => {
    const startDate = eventDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const endDate = new Date(eventDate.getTime() + 4 * 60 * 60 * 1000).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    
    const details = encodeURIComponent(`Boda de María Elena Rodríguez y Carlos Antonio López (DEMO)\\n\\nRecepción en: ${receptionLocation}\\n\\n*** ESTA ES UNA VERSIÓN DEMO ***`);
    const location = encodeURIComponent(receptionLocation);
    
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Boda de María Elena y Carlos Antonio (DEMO)&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
  };

  const generateICalLink = () => {
    const startDate = eventDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const endDate = new Date(eventDate.getTime() + 4 * 60 * 60 * 1000).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    
    const icalContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Wedding//Event//EN
BEGIN:VEVENT
UID:wedding-demo-${Date.now()}@example.com
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART:${startDate}
DTEND:${endDate}
SUMMARY:Boda de María Elena y Carlos Antonio (DEMO)
DESCRIPTION:Boda de María Elena Rodríguez y Carlos Antonio López (DEMO)\\n\\nRecepción en: ${receptionLocation}\\n\\n*** ESTA ES UNA VERSIÓN DEMO ***
LOCATION:${receptionLocation}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icalContent], { type: 'text/calendar;charset=utf-8' });
    return URL.createObjectURL(blob);
  };

  return (
    <section id="reception" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-4 bg-champagne-50/50 relative overflow-hidden">
      {/* Ambiente sutil sólido */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-champagne-200"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 md:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-fraunces font-bold text-rose-700 mb-6 sm:mb-8 tracking-tight">
            Recepción
          </h2>
        </motion.div>

        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <div className="w-16 h-0.5 bg-rose-300/50 mx-auto mb-6"></div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-fraunces font-bold text-stone-800 mb-4">
              Hotel Hilton Guadalajara
            </h3>
            <p className="text-lg md:text-xl font-poppins text-stone-500 max-w-3xl mx-auto leading-relaxed">
              Av. López Mateos Sur #2077, Col. del Valle, 44500 Guadalajara, Jal.
            </p>
          </div>
          
          <div className="card-glass rounded-3xl p-8 shadow-xl">
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
                <div className="lg:col-span-1 space-y-6">
                  <div className="bg-white/60 dark:bg-stone-800/60 backdrop-blur-lg rounded-2xl p-6 border border-rose-200/30 dark:border-rose-800/30 shadow-sm">
                    <h4 className="text-xl font-fraunces font-bold text-stone-800 dark:text-stone-100 mb-4 flex items-center">
                      <MapPin className="w-6 h-6 text-rose-400 mr-3" />
                      Dirección
                    </h4>
                    <p className="text-lg font-poppins font-semibold text-rose-600 mb-2">Hotel Hilton Guadalajara</p>
                    <p className="text-base font-poppins text-stone-500 dark:text-stone-400">Av. López Mateos Sur #2077, Col. del Valle</p>
                    <p className="text-sm font-poppins text-stone-400 dark:text-stone-500">44500 Guadalajara, Jal</p>
                  </div>
                  
                  <div className="bg-white/60 dark:bg-stone-800/60 backdrop-blur-lg rounded-2xl p-6 border border-champagne-300/30 dark:border-champagne-800/30 shadow-sm">
                    <h4 className="text-xl font-fraunces font-bold text-stone-800 dark:text-stone-100 mb-4 flex items-center">
                      <Heart className="w-6 h-6 text-rose-400 mr-3" />
                      ¡Los esperamos!
                    </h4>
                    <p className="text-base font-poppins text-stone-600 dark:text-stone-300 mb-2">Su presencia es nuestro mejor regalo.</p>
                  </div>

                  <div className="bg-white/60 dark:bg-stone-800/60 backdrop-blur-lg rounded-2xl p-6 border border-champagne-300/30 dark:border-champagne-800/30 shadow-sm">
                    <h4 className="text-xl font-fraunces font-bold text-stone-800 dark:text-stone-100 mb-4 flex items-center">
                      <Navigation className="w-6 h-6 text-champagne-600 mr-3" />
                      Cómo llegar
                    </h4>
                    <div className="space-y-3">
                      <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="w-full bg-rose-500 hover:bg-rose-600 text-white font-poppins font-semibold py-2 sm:py-3 px-3 sm:px-4 text-sm sm:text-base rounded-lg sm:rounded-xl transition-all duration-300 flex items-center justify-center group hover:shadow-lg hover:scale-105 active:scale-95 cursor-not-allowed opacity-80"
                      >
                        <Navigation className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        Google Maps (Demo)
                      </a>
                      <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="w-full bg-champagne-500 hover:bg-champagne-600 text-white font-poppins font-semibold py-2 sm:py-3 px-3 sm:px-4 text-sm sm:text-base rounded-lg sm:rounded-xl transition-all duration-300 flex items-center justify-center group hover:shadow-lg hover:scale-105 active:scale-95 cursor-not-allowed opacity-80"
                      >
                        <Car className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        Waze (Demo)
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-2 hidden sm:block">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg border border-white/30">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.6972947243285!2d-103.3927842256507!3d20.67319079956338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b1f2b2b2b2b2%3A0x1234567890abcdef!2sHotel%20Hilton%20Guadalajara!5e0!3m2!1ses-419!2smx!4v1234567890"
                      width="100%" 
                      height="300" 
                      style={{border: 0}} 
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-2xl sm:h-[400px] lg:h-[500px]"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mini Sección de Calendario */}
        <motion.div
          className="card-glass rounded-3xl sm:rounded-4xl p-6 sm:p-8 md:p-10 lg:p-12 mb-12 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="relative z-10 text-center">
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-rose-100 rounded-full mb-4 sm:mb-6 shadow-inner"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Calendar className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-rose-500" />
            </motion.div>

            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-fraunces font-bold text-stone-800 dark:text-stone-100 mb-2 sm:mb-3">
              ¡No te olvides!
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-stone-500 dark:text-stone-400 mb-6 sm:mb-8 font-poppins">
              Agrega la fecha a tu calendario
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center">
              <motion.a
                href={generateGoogleCalendarLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-rose-500 hover:bg-rose-600 text-white rounded-2xl font-poppins font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 group-hover:rotate-12 transition-transform duration-300" />
                <span className="hidden sm:inline">Agregar a </span>Google Calendar
              </motion.a>

              <motion.a
                href={generateICalLink()}
                download="boda-maria-carlos-demo.ics"                     className="group flex items-center px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-champagne-500 hover:bg-champagne-600 text-white rounded-2xl font-poppins font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                iCal
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Mensaje Final */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="relative inline-block group"
            whileHover={{ scale: 1.02, y: -8, transition: { duration: 0.3 } }}
          >
            <div className="card-glass px-12 py-10 rounded-3xl shadow-xl">
              <div className="relative z-10">
                <blockquote className="text-2xl md:text-3xl font-fraunces text-stone-700 dark:text-stone-200 italic font-medium max-w-4xl leading-relaxed mb-6">
                  &ldquo;Amar profundamente a alguien nos da fuerza. Sentirse amado profundamente por alguien nos da valor.&rdquo;
                </blockquote>
                
                <p className="text-lg font-poppins text-rose-500 font-medium">
                  — Lao-Tsé
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reception;
