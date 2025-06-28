/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Asegura que Tailwind escanee todos tus archivos de componentes
  ],
  theme: {
    extend: {
      colors: {
        // Tu paleta de colores personalizada usando nombres de Tailwind
        'primary-dark': '#1a202c', // Similar a gray-900/950
        'secondary-dark': '#2d3748', // Similar a gray-800
        'text-light': '#cbd5e0', // Similar a gray-300
        'accent-gold': { // Color ámbar/oro para acentos
          DEFAULT: '#F59E0B', // amber-500
          light: '#FCD34D', // amber-300
          dark: '#D97706',  // amber-600
        },
        'gradient-start': '#0F172A', // Gris azulado oscuro para degradados
        'gradient-middle': '#1E293B',// Un poco más claro
        'gradient-end': '#334155',  // Otro gris azulado para finales de degradado

        // Colores para el tema claro (se pueden ajustar)
        'light-bg': '#FFFFFF',
        'light-text-dark': '#2D3748',
        'light-accent-blue': '#4299E1',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Define la fuente Inter
      },
    },
  },
  plugins: [],
}