import React, { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const generatePlasmaPoints = (count, isDark) => {
  const m = isDark ? 2.5 : 1;
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 300 + 100,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * -5,
    color: i % 3 === 0
      ? `rgba(244, 169, 195, ${0.1 * m})`    // rose-300
      : i % 3 === 1
        ? `rgba(229, 182, 112, ${0.08 * m})`  // champagne-500
        : `rgba(213, 163, 132, ${0.06 * m})`,  // petal-400
  }));
};

const Plasma = () => {
  const { isDark } = useTheme();
  const points = useMemo(() => generatePlasmaPoints(8, isDark), [isDark]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {points.map((point) => (
        <motion.div
          key={point.id}
          className="absolute rounded-full"
          style={{
            width: point.size,
            height: point.size,
            background: `radial-gradient(circle, ${point.color} 0%, transparent 70%)`,
            left: `${point.x}%`,
            top: `${point.y}%`,
          }}
          animate={{
            x: [0, Math.random() * 60 - 30, Math.random() * 40 - 20, 0],
            y: [0, Math.random() * 40 - 20, Math.random() * 60 - 30, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: point.duration,
            delay: point.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default memo(Plasma);
