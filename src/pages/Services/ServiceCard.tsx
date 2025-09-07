import { motion } from 'framer-motion';
import type { Service } from '../../core/types';



import { useCallback } from 'react';

const ServiceCard = ({ service }: { service: Service }) => {
  const handleSolicitar = useCallback(() => {
    const params = new URLSearchParams({ asunto: `Solicitud de servicio: ${service.title}` });
    window.location.href = `/contacto?${params.toString()}`;
  }, [service.title]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-primary-dark rounded-xl p-8 flex flex-col text-center items-center shadow-xl border border-gray-800 hover:border-accent-gold/50 transition-all duration-300 transform hover:-translate-y-2 group h-96"
    >
      <div className="bg-accent-gold/15 p-5 rounded-full mb-6 transition-all duration-300 group-hover:bg-accent-gold/30">
        <service.icon className="h-12 w-12 text-accent-gold group-hover:text-accent-gold-light transition-colors" />
      </div>
      <h3 className="text-1xl font-bold text-white mb-2 group-hover:text-accent-gold-light transition-colors">{service.title}</h3>
      <div className="overflow-y-auto flex-grow scrollbar-hide">
        <p className="text-text-light mb-4  px-1  flex-grow leading-relaxed text-balance ">{service.description}</p>
      </div>
      <div className="mb-2  flex space-x-4 justify-between justify-items-center mt-2 px-4">
        <button
          className="mt-auto  bg-transparent border-2 border-accent-gold-dark text-accent-gold-light font-semibold py-1 px-6 rounded-lg hover:bg-accent-gold-dark hover:text-primary-dark transition-all duration-300 shadow-md hover:shadow-accent-gold/20 active:scale-95"
          onClick={() => {
            const params = new URLSearchParams({ categoria: service.category });
            window.location.href = `/proyectos?${params.toString()}`;
          }}
        >
          Ver Proyecto
        </button>
        
        <button
          className="mt-auto bg-transparent border-2 border-accent-gold-dark text-accent-gold-light font-semibold py-1 px-6 rounded-lg hover:bg-accent-gold-dark hover:text-primary-dark transition-all duration-300 shadow-md hover:shadow-accent-gold/20 active:scale-95"
          onClick={handleSolicitar}
        >
          Solicitar Servicio
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;