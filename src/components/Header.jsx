import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Ceremonia / Recepción', href: '#ceremony' },
    { name: 'Código de Vestimenta', href: '#dresscode' },
    { name: 'RSVP', href: '#rsvp' },
  ];

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 md:px-8 py-4 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/70 dark:bg-stone-900/70 backdrop-blur-xl border-b border-rose-200/30 dark:border-rose-800/30 shadow-sm' 
          : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo - Iniciales Demo: M & C */}
        <motion.button
          onClick={() => scrollToSection('hero')}
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <span className={`font-fraunces font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wider ${
            isScrolled ? 'text-rose-700 dark:text-rose-400' : 'text-rose-800 dark:text-rose-300'
          }`}>
            M & C
          </span>
        </motion.button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.href.replace('#', ''))}
              className={`transition-colors duration-300 font-poppins font-medium ${
                isScrolled ? 'text-stone-600 dark:text-stone-300 hover:text-rose-500 dark:hover:text-rose-400' : 'text-rose-700/80 dark:text-rose-300/80 hover:text-rose-600 dark:hover:text-rose-400'
              }`}
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              {item.name}
            </motion.button>
          ))}
          
          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className={`p-2.5 rounded-xl transition-all duration-300 ${
              isScrolled
                ? 'text-stone-500 hover:text-amber-500 dark:text-stone-400 dark:hover:text-amber-400 bg-white/50 dark:bg-stone-800/50 hover:bg-amber-50 dark:hover:bg-stone-700/50'
                : 'text-rose-600/80 hover:text-amber-500 dark:text-rose-300/80 dark:hover:text-amber-400 bg-white/20 dark:bg-stone-900/20 hover:bg-white/40 dark:hover:bg-stone-800/40'
            }`}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
            title={isDark ? 'Modo claro' : 'Modo oscuro'}
          >
            {isDark ? <Sun className="w-4 h-4 sm:w-5 sm:h-5" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />}
          </motion.button>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <motion.button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-all duration-300 ${
              isScrolled ? 'text-stone-500 dark:text-stone-400' : 'text-rose-600/80 dark:text-rose-300/80'
            }`}
            whileTap={{ scale: 0.9 }}
            aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </motion.button>
          <motion.button
            className={`p-2 ${isScrolled ? 'text-stone-700 dark:text-stone-300' : 'text-rose-700 dark:text-rose-300'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation — cristal */}
      <motion.nav
        className={`md:hidden absolute top-full left-0 right-0 backdrop-blur-xl border-t overflow-hidden ${
          isScrolled 
            ? 'bg-white/80 dark:bg-stone-900/80 border-rose-200/30 dark:border-rose-800/30' 
            : 'bg-white/60 dark:bg-stone-900/60 border-white/20 dark:border-white/10'
        }`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0, 
          height: isMenuOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="px-6 py-4 space-y-4">
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.href.replace('#', ''))}
              className="block text-stone-600 dark:text-stone-300 hover:text-rose-500 dark:hover:text-rose-400 transition-colors duration-300 font-poppins font-medium py-2 w-full text-left"
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: isMenuOpen ? 1 : 0, 
                x: isMenuOpen ? 0 : -20 
              }}
              transition={{ 
                duration: 0.3, 
                delay: isMenuOpen ? index * 0.1 : 0 
              }}
              whileHover={{ x: 10 }}
            >
              {item.name}
            </motion.button>
          ))}
        </div>
      </motion.nav>
    </motion.header>
  );
};

export default Header;
