import { motion } from 'framer-motion';
import { Gift, ExternalLink, Heart } from 'lucide-react';

const GiftRegistry = () => {
  return (
    <section id="gift-registry" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-rose-50/40 dark:bg-stone-900 relative overflow-hidden dark:border-t dark:border-rose-900/20">
      {/* Brillo sutil sólido */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-rose-100"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-fraunces font-bold text-rose-700 dark:text-rose-400 mb-6 tracking-tight">
            Mesa de Regalos
          </h2>
          <p className="text-xl sm:text-2xl text-stone-500 dark:text-stone-400 max-w-3xl mx-auto leading-relaxed font-poppins font-light">
            Tu presencia es el mejor regalo, pero si deseas obsequiarnos algo especial...
          </p>
        </motion.div>

        {/* Tarjeta Liverpool */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="card-glass rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-700 group">
            <div className="relative z-10 text-center">
              <motion.div
                className="w-16 h-16 sm:w-20 sm:h-20 bg-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner"
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <Gift className="w-8 h-8 sm:w-10 sm:h-10 text-rose-500" />
              </motion.div>

              <div className="mb-6">
                <h3 className="text-xl font-fraunces font-bold text-stone-800 dark:text-stone-100 mb-2">
                  Liverpool
                </h3>
                <p className="text-base text-stone-500 dark:text-stone-400 font-poppins mb-4">
                  Si deseas obsequiarnos algo especial
                </p>
              </div>

              <motion.button
                onClick={() => alert('🎯 Versión DEMO - Esta funcionalidad está deshabilitada. En producción, redirigiría a Liverpool.')}
                className="relative z-20 inline-flex items-center px-6 sm:px-8 py-3 bg-rose-500 hover:bg-rose-600 font-poppins font-medium text-base sm:text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group hover:scale-105 active:scale-95 text-white cursor-pointer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Gift className="w-5 h-5 sm:w-6 sm:h-6 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                <span>Ver en Liverpool</span>
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-0.5 transition-transform duration-300" />
              </motion.button>
              <p className="text-xs text-stone-400 mt-2 font-poppins italic">* Enlace deshabilitado en modo demo</p>
            </div>
          </div>
        </motion.div>

        {/* Amazon Registry */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="card-glass rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-700 group">
            <div className="relative z-10 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-champagne-100 rounded-2xl flex items-center justify-center shadow-inner">
                  <Gift className="w-8 h-8 sm:w-10 sm:h-10 text-champagne-600" />
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-fraunces font-bold text-stone-800 dark:text-stone-100 mb-2">
                  Amazon
                </h3>
                <p className="text-base text-stone-500 dark:text-stone-400 font-poppins">
                  También puedes encontrarnos en Amazon
                </p>
              </div>

              <motion.button
                onClick={() => alert('🎯 Versión DEMO - Esta funcionalidad está deshabilitada. En producción, redirigiría a Amazon.')}
                className="relative z-20 inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-champagne-600 hover:bg-champagne-700 font-poppins font-medium text-base sm:text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-105 active:scale-95 text-white cursor-pointer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Gift className="w-5 h-5 sm:w-6 sm:h-6 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                <span>Ver en Amazon</span>
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-0.5 transition-transform duration-300" />
              </motion.button>
              <p className="text-xs text-stone-400 mt-2 font-poppins italic">* Enlace deshabilitado en modo demo</p>
            </div>
          </div>
        </motion.div>

        {/* Mensaje de agradecimiento */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="relative inline-block px-10 py-8 card-glass rounded-2xl shadow-lg"
            whileHover={{ scale: 1.05, y: -4, transition: { duration: 0.4, ease: "easeOut" } }}
          >
            <div className="relative z-10">
              <motion.div
                className="flex items-center justify-center mb-4"
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center shadow-inner">
                  <Heart className="w-6 h-6 text-rose-500" />
                </div>
              </motion.div>
              
              <p className="text-lg font-poppins font-medium text-stone-700 dark:text-stone-200">
                Gracias por ser parte de nuestra historia
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GiftRegistry;
