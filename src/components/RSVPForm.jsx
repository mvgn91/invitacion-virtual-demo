import { motion } from 'framer-motion';
import { useState } from 'react';
import { User, Users, Phone, Check, X, Send, AlertTriangle, Shirt, Plus, Heart } from 'lucide-react';

const RSVPForm = () => {
  const REGISTRO_CERRADO = false;

  const [formData, setFormData] = useState({
    nombre: '',
    acompanantes: 0,
    nombresAcompanantes: [],
    telefono: '',
    asistencia: '',
    dressCodeAccepted: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name === 'acompanantes') {
      const numAcompanantes = parseInt(value) || 0;
      setFormData(prev => {
        const newNombres = Array(numAcompanantes).fill('');
        return {
          ...prev,
          acompanantes: numAcompanantes,
          nombresAcompanantes: newNombres
        };
      });
    } else if (name.startsWith('acompanante_')) {
      const index = parseInt(name.split('_')[1]);
      setFormData(prev => ({
        ...prev,
        nombresAcompanantes: prev.nombresAcompanantes.map((nombre, i) => 
          i === index ? value : nombre
        )
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es requerido';
    if (!formData.telefono.trim()) newErrors.telefono = 'El teléfono es requerido';
    if (!formData.asistencia) newErrors.asistencia = 'Por favor confirma tu asistencia';
    if (!formData.dressCodeAccepted) newErrors.dressCodeAccepted = 'Debes aceptar el código de vestimenta para continuar';
    if (formData.nombre.length < 2) newErrors.nombre = 'El nombre debe tener al menos 2 caracteres';
    if (formData.telefono.length < 10) newErrors.telefono = 'El teléfono debe tener al menos 10 dígitos';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('🎯 DEMO - RSVP simulado:', formData);
      console.log('✅ Versión DEMO - No se enviaron datos reales');
      
      setIsSubmitted(true);
      setShowConfetti(true);
      
      setTimeout(() => setShowConfetti(false), 4000);
      
      setFormData({
        nombre: '',
        acompanantes: 0,
        nombresAcompanantes: [],
        telefono: '',
        asistencia: '',
        dressCodeAccepted: false
      });
    } catch (error) {
      console.error('Error en simulación DEMO:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2, staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  const confettiVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, staggerChildren: 0.1 } },
  };

  const confettiItemVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: -100, transition: { duration: 2, ease: "easeOut" } },
  };

  const confettiColors = ['#fb7185', '#f43f5e', '#e5b670', '#d9a156', '#b5c2a3'];

  return (
    <div className="relative">
      {showConfetti && (
        <motion.div
          className="absolute inset-0 pointer-events-none z-50"
          variants={confettiVariants}
          initial="hidden"
          animate="visible"
        >
          {[...Array(60)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: '100%',
                backgroundColor: confettiColors[Math.floor(Math.random() * confettiColors.length)],
              }}
              variants={confettiItemVariants}
              animate={{ x: (Math.random() - 0.5) * 300, rotate: 360 }}
            />
          ))}
        </motion.div>
      )}

      <motion.div
        className="relative card-glass rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl dark:shadow-rose-900/10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="relative z-10">
          {REGISTRO_CERRADO ? (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.div 
                className="w-20 h-20 mx-auto mb-8 rounded-full bg-rose-100 flex items-center justify-center shadow-inner"
                animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <AlertTriangle className="w-10 h-10 text-rose-500" />
              </motion.div>
              <h3 className="text-2xl sm:text-3xl font-fraunces font-bold text-stone-800 dark:text-stone-100 mb-4">
                ⏳ Etapa de Registro Finalizada
              </h3>
              <p className="text-lg font-poppins text-stone-500 dark:text-stone-400 mb-8 max-w-md mx-auto leading-relaxed">
                El plazo para confirmar la asistencia ha expirado.
              </p>
              <div className="inline-block px-8 py-4 bg-rose-50/80 dark:bg-rose-500/20 backdrop-blur-sm rounded-2xl border border-rose-200/40 dark:border-rose-500/30">
                <p className="text-lg font-poppins text-rose-600 dark:text-rose-400 italic font-semibold">
                  ¡Gracias por tu interés!
                </p>
              </div>
            </motion.div>
          ) : isSubmitted ? (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.div 
                className="w-20 h-20 mx-auto mb-8 rounded-full bg-rose-100 flex items-center justify-center shadow-inner"
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Check className="w-10 h-10 text-rose-500" />
              </motion.div>
              <h3 className="text-2xl sm:text-3xl font-fraunces font-bold text-stone-800 dark:text-stone-100 mb-4">
                🎉 ¡Gracias por confirmar tu asistencia!
              </h3>
              <p className="text-lg font-poppins text-stone-500 dark:text-stone-400 mb-8">
                ¡Nos vemos el 15 de Noviembre de 2026!
              </p>
              <div className="inline-block px-8 py-4 bg-rose-50/80 dark:bg-rose-500/20 backdrop-blur-sm rounded-2xl border border-rose-200/40 dark:border-rose-500/30">
                <p className="text-lg font-poppins text-rose-600 dark:text-rose-400 italic font-semibold">
                  🎯 DEMO - No se enviaron datos reales
                </p>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Banner DEMO */}
              <motion.div 
                className="bg-rose-500/90 backdrop-blur-sm rounded-2xl p-4 text-center"
                variants={itemVariants}
              >
                <p className="text-white font-poppins font-semibold text-sm sm:text-base">
                  🎯 Modo DEMO - Los datos ingresados no serán almacenados ni enviados
                </p>
              </motion.div>

              {/* Nombre Completo */}
              <motion.div variants={itemVariants}>
                <label className="flex items-center gap-4 text-lg sm:text-xl font-fraunces font-bold text-stone-800 dark:text-stone-100 mb-4">
                  <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center shadow-inner">
                    <User className="w-6 h-6 text-rose-500" />
                  </div>
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-6 py-4 bg-white/70 dark:bg-white/10 backdrop-blur-sm border-2 rounded-2xl text-stone-800 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-500 focus:outline-none focus:ring-4 focus:ring-rose-200/50 dark:focus:ring-rose-500/30 transition-all duration-300 text-lg font-poppins font-medium ${
                    errors.nombre ? 'border-rose-400 focus:border-rose-500' : 'border-rose-200/50 dark:border-rose-500/30 focus:border-rose-300'
                  }`}
                  placeholder="Tu nombre completo"
                />
                {errors.nombre && (
                  <motion.p className="text-rose-500 text-sm mt-2 font-poppins font-medium" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                    {errors.nombre}
                  </motion.p>
                )}
              </motion.div>

              {/* Número de Acompañantes */}
              <motion.div variants={itemVariants}>
                <label className="flex items-center gap-4 text-lg sm:text-xl font-fraunces font-bold text-stone-800 dark:text-stone-100 mb-4">
                  <div className="w-10 h-10 bg-champagne-100 rounded-xl flex items-center justify-center shadow-inner">
                    <Plus className="w-6 h-6 text-champagne-600" />
                  </div>
                  Número de Acompañantes
                </label>
                <input
                  type="number"
                  name="acompanantes"
                  value={formData.acompanantes}
                  onChange={handleInputChange}
                  min="0"
                  className="w-full px-6 py-4 bg-white/70 dark:bg-white/10 backdrop-blur-sm border-2 border-rose-200/50 dark:border-rose-500/30 rounded-2xl text-stone-800 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-500 focus:outline-none focus:ring-4 focus:ring-rose-200/50 dark:focus:ring-rose-500/30 focus:border-rose-300 transition-all duration-300 text-lg font-poppins font-medium"
                  placeholder="0"
                />
              </motion.div>

              {/* Nombres de Acompañantes */}
              {formData.acompanantes > 0 && (
                <motion.div variants={itemVariants} initial="hidden" animate="visible">
                  <label className="flex items-center gap-4 text-lg sm:text-xl font-fraunces font-bold text-stone-800 dark:text-stone-100 mb-4">
                    <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center shadow-inner">
                      <Users className="w-6 h-6 text-rose-500" />
                    </div>
                    Nombres de Acompañantes
                  </label>
                  <div className="space-y-4">
                    {formData.nombresAcompanantes.map((nombre, index) => (
                      <div key={index}>
                        <label className="block text-sm font-poppins font-medium text-stone-500 dark:text-stone-400 mb-2">
                          Acompañante {index + 1}
                        </label>
                        <input
                          type="text"
                          name={`acompanante_${index}`}
                          value={nombre || ''}
                          onChange={handleInputChange}
                          className="w-full px-6 py-4 bg-white/70 dark:bg-white/10 backdrop-blur-sm border-2 border-rose-200/50 dark:border-rose-500/30 rounded-2xl text-stone-800 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-500 focus:outline-none focus:ring-4 focus:ring-rose-200/50 dark:focus:ring-rose-500/30 focus:border-rose-300 transition-all duration-300 text-lg font-poppins font-medium"
                          placeholder={`Nombre completo del acompañante ${index + 1}`}
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Teléfono */}
              <motion.div variants={itemVariants}>
                <label className="flex items-center gap-4 text-lg sm:text-xl font-fraunces font-bold text-stone-800 dark:text-stone-100 mb-4">
                  <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center shadow-inner">
                    <Phone className="w-6 h-6 text-rose-500" />
                  </div>
                  Teléfono *
                </label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-6 py-4 bg-white/70 dark:bg-white/10 backdrop-blur-sm border-2 rounded-2xl text-stone-800 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-500 focus:outline-none focus:ring-4 focus:ring-rose-200/50 dark:focus:ring-rose-500/30 transition-all duration-300 text-lg font-poppins font-medium ${
                    errors.telefono ? 'border-rose-400 focus:border-rose-500' : 'border-rose-200/50 dark:border-rose-500/30 focus:border-rose-300'
                  }`}
                  placeholder="Tu número de teléfono"
                />
                {errors.telefono && (
                  <motion.p className="text-rose-500 text-sm mt-2 font-poppins font-medium" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                    {errors.telefono}
                  </motion.p>
                )}
              </motion.div>

              {/* Asistencia */}
              <motion.div variants={itemVariants}>
                <label className="flex items-center gap-4 text-lg sm:text-xl font-fraunces font-bold text-stone-800 dark:text-stone-100 mb-6">
                  <div className="w-10 h-10 bg-champagne-100 rounded-xl flex items-center justify-center shadow-inner">
                    <Check className="w-6 h-6 text-champagne-600" />
                  </div>
                  ¿Confirmas tu asistencia? *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { value: 'Sí asistiré', label: 'Sí asistiré', icon: Check },
                    { value: 'No podré asistir', label: 'No podré asistir', icon: X }
                  ].map((option) => (
                    <motion.label
                      key={option.value}
                      className={`flex items-center space-x-3 sm:space-x-4 cursor-pointer p-4 sm:p-6 rounded-2xl border-2 transition-all duration-300 group ${
                        formData.asistencia === option.value
                          ? 'bg-rose-50/80 dark:bg-rose-500/20 border-rose-300 dark:border-rose-500 shadow-md'
                          : 'bg-white/60 dark:bg-white/10 border-rose-200/30 dark:border-rose-500/20 hover:border-rose-200 hover:bg-rose-50/50 dark:hover:bg-rose-500/10'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <input
                        type="radio"
                        name="asistencia"
                        value={option.value}
                        checked={formData.asistencia === option.value}
                        onChange={handleInputChange}
                        required
                        className="w-6 h-6 text-rose-500 bg-transparent border-2 border-rose-300 focus:ring-rose-400 focus:ring-4"
                      />
                      <option.icon className={`w-6 h-6 ${formData.asistencia === option.value ? 'text-rose-500' : 'text-stone-400 dark:text-stone-500'}`} />
                      <span className={`text-base sm:text-lg font-poppins font-medium group-hover:text-rose-600 transition-colors duration-200 ${
                        formData.asistencia === option.value ? 'text-rose-700 dark:text-rose-400' : 'text-stone-600 dark:text-stone-300'
                      }`}>
                        {option.label}
                      </span>
                    </motion.label>
                  ))}
                </div>
                {errors.asistencia && (
                  <motion.p className="text-rose-500 text-sm mt-3 font-poppins font-medium" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                    {errors.asistencia}
                  </motion.p>
                )}
              </motion.div>

              {/* Código de Vestimenta */}
              <motion.div variants={itemVariants}>
                <div className="bg-rose-50/60 dark:bg-rose-500/10 backdrop-blur-sm border-2 border-rose-200/40 dark:border-rose-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <label className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 text-base sm:text-lg font-fraunces font-bold text-stone-800 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-rose-100 rounded-lg sm:rounded-xl flex items-center justify-center shadow-inner flex-shrink-0">
                      <Shirt className="w-4 h-4 sm:w-6 sm:h-6 text-rose-500" />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <span className="block mb-2 sm:mb-3">Código de Vestimenta *</span>
                      <div className="text-xs sm:text-sm font-poppins text-stone-500 dark:text-stone-400 mb-3 sm:mb-4">
                        <p className="mb-2">He leído y acepto el código de vestimenta que incluye:</p>
                        <ul className="list-disc list-inside space-y-1 text-rose-600 font-semibold">
                          <li>Vestimenta de etiqueta obligatoria</li>
                          <li>Colores prohibidos: Rojo, Blanco, Beige, Hueso, Crema</li>
                          <li>Entrada negada si no se respeta el código</li>
                        </ul>
                      </div>
                    </div>
                  </label>
                  
                  <motion.label
                    className="flex items-start sm:items-center gap-3 sm:gap-4 cursor-pointer p-3 sm:p-4 bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl border-2 border-rose-200/30 dark:border-rose-500/20 hover:border-rose-200 dark:hover:border-rose-500 hover:bg-rose-50/50 dark:hover:bg-rose-500/10 transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <input
                      type="checkbox"
                      name="dressCodeAccepted"
                      checked={formData.dressCodeAccepted}
                      onChange={handleInputChange}
                      required
                      className="w-5 h-5 sm:w-6 sm:h-6 text-rose-500 bg-transparent border-2 border-rose-300 focus:ring-rose-400 focus:ring-4 rounded mt-1 sm:mt-0 flex-shrink-0"
                    />
                    <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                      <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-rose-400 group-hover:text-rose-500 transition-colors duration-200 flex-shrink-0 mt-0.5 sm:mt-0" />
                      <span className="text-sm sm:text-base font-poppins font-semibold text-stone-600 dark:text-stone-300 group-hover:text-rose-700 dark:group-hover:text-rose-400 transition-colors duration-200 leading-relaxed">
                        Confirmo que he leído y acepto el código de vestimenta
                      </span>
                    </div>
                  </motion.label>
                  
                  {errors.dressCodeAccepted && (
                    <motion.div 
                      className="mt-3 sm:mt-4 p-3 sm:p-4 bg-rose-50/80 dark:bg-rose-500/20 backdrop-blur-sm border-2 border-rose-200/40 dark:border-rose-500/30 rounded-lg sm:rounded-xl shadow-md"
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-rose-100 rounded-lg flex items-center justify-center shadow-inner flex-shrink-0 mt-0.5 sm:mt-0">
                          <AlertTriangle className="w-3 h-3 sm:w-5 sm:h-5 text-rose-500" />
                        </div>
                        <div>
                          <p className="text-rose-700 font-poppins font-semibold text-sm sm:text-base">
                            {errors.dressCodeAccepted}
                          </p>
                          <p className="text-rose-600 font-poppins text-xs sm:text-sm mt-1">
                            Por favor, marca la casilla para continuar
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={itemVariants} className="pt-6">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 bg-rose-500 hover:bg-rose-600 text-white font-poppins font-bold text-xl rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-xl hover:shadow-rose-300/30 relative overflow-hidden group"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-3">
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Enviando confirmación...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-4 relative z-10">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center shadow-lg">
                        <Send className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-xl font-bold">Enviar Confirmación</span>
                    </div>
                  )}
                </motion.button>
              </motion.div>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default RSVPForm;
