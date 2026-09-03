import React, { memo, useState } from 'react';
import { motion } from 'framer-motion';

const OptimizedImage = ({ src, alt, className = '', fallback = null, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  if (hasError && fallback) {
    return fallback;
  }

  if (hasError) {
    return (
      <div className={`bg-gradient-to-br from-rose-100 to-champagne-200 flex items-center justify-center ${className}`} {...props}>
        <div className="text-center p-4">
          <span className="text-4xl block mb-2">💐</span>
          <span className="text-xs text-rose-400">Demo</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`} {...props}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-champagne-200 animate-pulse" />
      )}
      <motion.img
        src={src}
        alt={alt}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{
          opacity: isLoaded ? 1 : 0,
          scale: isLoaded ? 1 : 1.05,
        }}
        transition={{ duration: 0.5 }}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        loading="lazy"
      />
    </div>
  );
};

export default memo(OptimizedImage);
