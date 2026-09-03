import { motion } from 'framer-motion';
import { 
  Heart, Church, Camera, Music, Navigation, Car, Sparkles
} from 'lucide-react';

const CeremonyDetails = () => {
  const ceremonyInfo = [
    {
      icon: Heart,
      title: "Fecha",
      value: "15 de Noviembre, 2026 - 6PM",
      subtitle: "Sábado",
    },
    {
      icon: Church,
      title: "Ceremonia",
      value: "Catedral de Guadalajara",
      subtitle: "Av. Fray Antonio Alcalde #10",
    },
    {
      icon: Camera,
      title: "Fotografías",
      value: "Sesión en el jardín",
      subtitle: "Después de la ceremonia",
    },
    {
      icon: Music,
      title: "Recepción",
      value: "Cena y celebración",
      subtitle: "Hasta el amanecer",
    }
  ];

  return (
    <section id="ceremony" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-4 bg-petal-100/40 relative overflow-hidden">
      {/* Ambiente cálido y suave — sólido */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0 bg-rose-100"></div>
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
            Nuestra Ceremonia
          </h2>
          
          <p className="text-xl md:text-2xl text-stone-500 max-w-4xl mx-auto leading-relaxed font-poppins font-light">
            Un momento sagrado donde dos almas se unen para siempre en el amor y la bendición divina
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, staggerChildren: 0.15 }}
          viewport={{ once: true }}
        >
          {ceremonyInfo.map((item, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -8 }}
            >
              <div className="card-glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover:shadow-xl transition-all duration-700 group-hover:border-rose-300/30 h-full">
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-rose-100 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-inner">
                    <item.icon className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-rose-500" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-fraunces font-bold text-stone-800 mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-base sm:text-lg font-poppins font-semibold text-rose-600 mb-1 sm:mb-2">{item.value}</p>
                  <p className="text-xs sm:text-sm font-poppins text-stone-400">{item.subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Sección de Ubicación */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-fraunces font-bold text-rose-700 mb-6 tracking-tight">
              Ubicación
            </h3>
            <p className="text-xl font-poppins text-stone-500 max-w-3xl mx-auto">
              Encuéntranos en el corazón de la ciudad, donde el amor se encuentra con la fe
            </p>
          </div>
          
          <div className="card-glass rounded-3xl p-8 shadow-xl">
            <div className="relative z-10">
              <div className="grid lg:grid-cols-3 gap-8 mb-8">
                <div className="lg:col-span-1 space-y-6">
                  <div className="bg-white/60 dark:bg-stone-800/60 backdrop-blur-lg rounded-2xl p-6 border border-rose-200/30 dark:border-rose-800/30 shadow-sm">
                    <h4 className="text-xl font-fraunces font-bold text-stone-800 dark:text-stone-100 mb-4 flex items-center">
                      <Church className="w-6 h-6 text-rose-400 mr-3" />
                      Dirección
                    </h4>
                    <p className="text-xl sm:text-2xl font-poppins font-semibold text-rose-600 mb-2">Catedral de Guadalajara</p>
                    <p className="text-base font-poppins text-stone-500 dark:text-stone-400">Av. Fray Antonio Alcalde #10</p>
                    <p className="text-base font-poppins text-stone-500 dark:text-stone-400">Centro Histórico, Guadalajara, Jal</p>
                  </div>
                  
                  <div className="bg-white/60 dark:bg-stone-800/60 backdrop-blur-lg rounded-2xl p-6 border border-rose-200/30 dark:border-rose-800/30 shadow-sm">
                    <h4 className="text-xl font-fraunces font-bold text-stone-800 dark:text-stone-100 mb-4 flex items-center">
                      <Car className="w-6 h-6 text-rose-400 mr-3" />
                      Estacionamiento
                    </h4>
                    <p className="text-base font-poppins text-stone-600 dark:text-stone-300 mb-2">Disponible en la zona</p>
                    <p className="text-sm font-poppins text-stone-400 dark:text-stone-500">Recomendamos llegar 15 min antes</p>
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
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.5151130510565!2d-103.34740622565055!3d20.676957499869445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b1f2b2b2b2b2%3A0x1234567890abcdef!2sCatedral%20de%20Guadalajara!5e0!3m2!1ses-419!2smx!4v1234567890"
                      width="100%" 
                      height="500" 
                      style={{border: 0}} 
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-2xl"
                    ></iframe>
                  </div>
                </div>
              </div>
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
          >                <div className="card-glass px-12 py-10 rounded-3xl shadow-xl dark:shadow-black/30">
              <div className="relative z-10">
                <blockquote className="text-2xl md:text-3xl font-fraunces text-stone-700 dark:text-stone-200 italic font-medium max-w-4xl leading-relaxed mb-6">
                  &ldquo;El amor verdadero no consiste en mirarse el uno al otro, sino en mirar juntos en la misma dirección&rdquo;
                </blockquote>
                
                <p className="text-lg font-poppins text-rose-500 font-medium">
                  - Antoine de Saint-Exupéry
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CeremonyDetails;
