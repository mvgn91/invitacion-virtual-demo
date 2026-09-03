import { motion } from 'framer-motion';
import RSVPForm from './RSVPForm';
import { Heart } from 'lucide-react';

const RSVP = () => {
  return (
    <section id="rsvp" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-petal-50/50 dark:bg-stone-900 relative overflow-hidden dark:border-t dark:border-rose-900/20">
      {/* Ambiente sutil sólido */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-rose-100"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-fraunces font-bold text-rose-700 dark:text-rose-400 mb-6 sm:mb-8 tracking-tight">
            Confirma tu Asistencia
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-poppins text-stone-500 dark:text-stone-400 max-w-2xl mx-auto leading-relaxed">
            Por favor, confirma tu asistencia antes del 1 de noviembre. 
            Tu presencia es muy importante para nosotros.
          </p>
        </motion.div>

        <RSVPForm />
      </div>
    </section>
  );
};

export default RSVP;
