import React, { memo } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-petal-100/40 dark:bg-stone-900 text-stone-600 dark:text-stone-400 overflow-hidden border-t border-rose-200/20 dark:border-rose-900/20">
      {/* Brillo sutil sólido */}
      <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.02]">
        <div className="absolute inset-0 bg-rose-100 dark:bg-rose-900"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          {/* Hashtag */}
          <div className="mb-8">
            <span className="inline-block px-6 py-2 bg-white/60 dark:bg-white/10 backdrop-blur-sm rounded-full text-rose-500 dark:text-rose-400 font-light tracking-wider text-sm border border-rose-200/30 dark:border-rose-800/30 shadow-sm">
              #BodaMariaYCarlos
            </span>
          </div>

          {/* Nombres */}
          <h3 className="text-3xl md:text-4xl font-fraunces font-bold text-rose-700 dark:text-rose-400 mb-2">
            María Elena & Carlos Antonio
          </h3>
          <p className="text-stone-400 dark:text-stone-500 font-light text-lg mb-8">
            15 de Noviembre, 2026
          </p>

          {/* Separador */}
          <div className="w-16 h-0.5 bg-rose-300/50 mx-auto mb-8" />

          {/* Créditos */}
          <p className="text-stone-400 dark:text-stone-500 text-sm mb-6">
            Sitio demo con fines de portafolio y demostración técnica.
          </p>

          {/* Feature tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['React 18', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Responsive', 'PWA Ready'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white/50 dark:bg-white/10 backdrop-blur-sm border border-rose-200/20 dark:border-rose-800/20 rounded-full text-xs text-stone-400 dark:text-stone-500"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Línea divisoria */}
          <div className="border-t border-rose-200/20 dark:border-rose-900/20 pt-8">
            <p className="text-stone-400 dark:text-stone-500 text-xs">
              &copy; {currentYear} —{' '}
              <a
                href="https://mvgn.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-500 hover:text-rose-600 dark:text-rose-400 dark:hover:text-rose-300 transition-colors duration-300"
              >
                MVGN Labs
              </a>
              {' '}• Demo Version
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default memo(Footer);
