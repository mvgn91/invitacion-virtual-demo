// Configuración para Google Sheets - Versión DEMO
// No se envían datos reales

export const GOOGLE_SCRIPT_URL = '';

export const sendToGoogleSheets = async (formData) => {
  // Versión DEMO: solo simula el envío
  console.log('🎯 DEMO - Simulación de envío a Google Sheets:', formData);
  await new Promise(resolve => setTimeout(resolve, 500));
  return { success: true, data: formData, demo: true };
};
