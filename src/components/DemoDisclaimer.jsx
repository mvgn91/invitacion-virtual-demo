import React, { memo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DemoDisclaimer = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isMinimized ? (
        <motion.button
          key="minimized"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={() => setIsMinimized(false)}
          className="fixed top-4 left-4 z-50 px-4 py-2 bg-rose-500 text-white text-xs font-bold rounded-full shadow-lg hover:shadow-rose-300/40 hover:bg-rose-600 transition-all duration-300 cursor-pointer"
        >
          🎯 Demo
        </motion.button>
      ) : (
        <motion.div
          key="expanded"
          initial={{ opacity: 0, y: -80, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -80, scale: 0.95 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-stone-900/80 backdrop-blur-xl border-b border-rose-200/40 dark:border-rose-900/40 shadow-sm"
        >
          <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center text-sm font-bold shadow-inner">
                🎯
              </span>
              <div>
                <p className="text-stone-700 dark:text-stone-200 text-sm font-semibold">
                  Versión Demo — Portafolio
                </p>
                <p className="text-stone-400 dark:text-stone-500 text-xs">
                  Sitio de demostración. Los datos mostrados son ficticios.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMinimized(true)}
                className="px-3 py-1.5 text-xs text-stone-500 hover:text-stone-700 dark:text-stone-400 dark:hover:text-stone-200 bg-white/60 hover:bg-white dark:bg-white/10 dark:hover:bg-white/20 backdrop-blur-sm rounded-lg transition-all duration-200 border border-rose-200/20 dark:border-rose-800/20"
              >
                Minimizar
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="px-3 py-1.5 text-xs text-white bg-rose-400/80 hover:bg-rose-500 rounded-lg transition-all duration-200"
              >
                ✕ Cerrar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default memo(DemoDisclaimer);
