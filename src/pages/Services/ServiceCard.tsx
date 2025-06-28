import { motion } from 'framer-motion';
import type { Service } from '../../core/types';


const ServiceCard = ({ service }: { service: Service }) => (
  <motion.div 
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className="bg-primary-dark rounded-xl p-8 flex flex-col text-center items-center shadow-xl border border-gray-800 hover:border-accent-gold/50 transition-all duration-300 transform hover:-translate-y-2 group"
  >
    <div className="bg-accent-gold/15 p-5 rounded-full mb-6 transition-all duration-300 group-hover:bg-accent-gold/30">
       <service.icon className="h-12 w-12 text-accent-gold group-hover:text-accent-gold-light transition-colors" />
    </div>
    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent-gold-light transition-colors">{service.title}</h3>
    <p className="text-text-light mb-6 flex-grow leading-relaxed">{service.description}</p>
    <button className="mt-auto bg-transparent border-2 border-accent-gold-dark text-accent-gold-light font-semibold py-2.5 px-7 rounded-lg hover:bg-accent-gold-dark hover:text-primary-dark transition-all duration-300 shadow-md hover:shadow-accent-gold/20 active:scale-95">
        Ver detalles
    </button>
  </motion.div>
);

export default ServiceCard;