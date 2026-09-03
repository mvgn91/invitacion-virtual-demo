import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Shirt, Heart, AlertTriangle, X, ChevronRight } from 'lucide-react';

const DressCode = () => {
  const prohibitedColors = [
    { name: 'Blanco / Marfil', reason: 'Exclusivo para los novios' },
    { name: 'Verde Agua / Menta', reason: 'Podría fusionarse con la decoración' },
  ];

  return (
    <section id="dresscode" className="relative py-20 px-4 bg-rose-50/40 dark:bg-stone-900 overflow-hidden dark:border-t dark:border-rose-900/20">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-rose-100"></div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-fraunces font-bold text-rose-700 dark:text-rose-400 mb-6">
            Código de Vestimenta
          </h2>
          <p className="text-lg md:text-xl text-stone-500 dark:text-stone-400 font-light italic">
            Demo — Característica demostrativa del sitio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Traje Formal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card-glass rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-rose-100 flex items-center justify-center shadow-inner">
                <Shirt className="w-7 h-7 text-rose-500" />
              </div>
              <div>
                <h3 className="text-xl font-fraunces font-bold text-stone-800 dark:text-stone-100">Caballeros</h3>
                <p className="text-sm text-rose-500 font-medium">Traje Formal</p>
              </div>
            </div>
            <ul className="space-y-3 text-stone-600">
              <li className="flex items-start gap-3">
                <ChevronRight className="w-4 h-4 text-rose-400 mt-0.5 flex-shrink-0" />
                <span>Traje oscuro o smoking (preferentemente gris, azul marino o negro)</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="w-4 h-4 text-rose-400 mt-0.5 flex-shrink-0" />
                <span>Camisa blanca o color claro</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="w-4 h-4 text-rose-400 mt-0.5 flex-shrink-0" />
                <span>Corbata o moño (tonos que combinen con la ocasión)</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="w-4 h-4 text-rose-400 mt-0.5 flex-shrink-0" />
                <span>Zapatos formales bien lustrados</span>
              </li>
            </ul>
          </motion.div>

          {/* Vestido Elegante */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-glass rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-champagne-100 flex items-center justify-center shadow-inner">
                <Heart className="w-7 h-7 text-champagne-600" />
              </div>
              <div>
                <h3 className="text-xl font-fraunces font-bold text-stone-800 dark:text-stone-100">Damas</h3>
                <p className="text-sm text-champagne-600 font-medium">Vestido Elegante / Cocktail</p>
              </div>
            </div>
            <ul className="space-y-3 text-stone-600">
              <li className="flex items-start gap-3">
                <ChevronRight className="w-4 h-4 text-champagne-500 mt-0.5 flex-shrink-0" />
                <span>Vestido largo o cocktail en tonos vibrantes o neutros</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="w-4 h-4 text-champagne-500 mt-0.5 flex-shrink-0" />
                <span>Accesorios elegantes que realcen el outfit</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="w-4 h-4 text-champagne-500 mt-0.5 flex-shrink-0" />
                <span>Zapatos de tacón o formales</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="w-4 h-4 text-champagne-500 mt-0.5 flex-shrink-0" />
                <span>Maquillaje y peinado acorde a la ocasión</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Colores Prohibidos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 bg-rose-50/60 dark:bg-stone-800/60 backdrop-blur-lg border border-rose-200/40 dark:border-rose-800/30 rounded-2xl p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-rose-500" />
            <h3 className="text-lg font-fraunces font-bold text-rose-700 dark:text-rose-400">Colores a Evitar</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {prohibitedColors.map((color, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/60 dark:bg-stone-800/60 backdrop-blur-sm rounded-xl px-4 py-3 border border-rose-200/30 dark:border-rose-800/30">
                <div className="w-8 h-8 rounded-full border-2 border-rose-200 dark:border-rose-700 flex items-center justify-center">
                  <X className="w-4 h-4 text-rose-400 dark:text-rose-300" />
                </div>
                <div>
                  <p className="font-semibold text-rose-700 dark:text-rose-300">{color.name}</p>
                  <p className="text-xs text-stone-400 dark:text-stone-500">{color.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Demo Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-stone-400 dark:text-stone-500 italic">
            * Esta es una demostración de la sección de código de vestimenta del sitio de invitación de boda.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(DressCode);
