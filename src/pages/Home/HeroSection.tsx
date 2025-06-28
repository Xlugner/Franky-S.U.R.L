import { motion } from 'framer-motion';

const HeroSection = ({ navigate }: { navigate: (path: string) => void }) => (
  <div className="relative bg-primary-dark text-text-light text-center py-24 md:py-40 px-4 overflow-hidden min-h-[60vh] flex items-center justify-center font-inter">
    {/* Video Background with Overlay */}
    <div className="absolute inset-0 bg-black/60 z-10"></div>
    <video 
      autoPlay 
      loop 
      muted 
      playsInline 
      className="absolute z-0 w-auto min-w-full min-h-full max-w-none transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
    >
      <source src="https://assets.mixkit.co/videos/preview/mixkit-welder-at-work-32243-large.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    
    {/* Content */}
    <div className="relative z-20 max-w-4xl mx-auto">
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.6, 0.05, 0.01, 0.9] }} 
        className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-2xl"
      >
        Arte y Resistencia en <span className="text-accent-gold">Metal</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.6, 0.05, 0.01, 0.9] }} 
        className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed"
      >
        Soluciones personalizadas en herrería artística, estructuras metálicas robustas y decoración de diseño único.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }} 
        className="mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
      >
        <button 
          onClick={() => navigate('/proyectos')} 
          className="bg-accent-gold-dark text-primary-dark font-bold py-3 px-8 rounded-xl hover:bg-accent-gold-DEFAULT transition-all duration-300 shadow-lg hover:shadow-accent-gold/40 transform hover:-translate-y-1 active:scale-95"
        >
          Ver Proyectos
        </button>
        <button 
          onClick={() => navigate('/contacto')} 
          className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-xl hover:bg-white hover:text-primary-dark transition-all duration-300 shadow-lg hover:shadow-white/20 transform hover:-translate-y-1 active:scale-95"
        >
          Contactar
        </button>
      </motion.div>
    </div>
  </div>
);

export default HeroSection;