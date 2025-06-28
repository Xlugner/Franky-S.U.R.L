import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedPage from '../../components/ui/AnimatedPage';
import ServiceCard from './ServiceCard';
import { servicesData } from '../../core/data';
import type { Service } from '../../core/types';

const ServicesPage = () => {
  const [filter, setFilter] = useState<'All' | Service['category']>('All');

  const filteredServices = filter === 'All'
    ? servicesData
    : servicesData.filter(s => s.category === filter);
  
  const categories: ('All' | Service['category'])[] = ['All', 'Herrería', 'Construcción', 'Decoración'];

  return (
    <AnimatedPage>
      <div className="bg-secondary-dark text-text-light py-16 sm:py-24 px-4 font-inter">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">Catálogo de Servicios</h2>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-text-light leading-relaxed">
              Explora nuestra vasta experiencia en metalurgia y diseño. Filtra por categoría para encontrar la solución perfecta para tus necesidades.
            </p>
          </div>

          <div className="flex flex-wrap justify-center my-10 gap-3 md:gap-4">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 text-base md:text-lg font-semibold rounded-full transition-all duration-300 shadow-md ${
                  filter === cat 
                    ? 'bg-accent-gold-dark text-primary-dark shadow-accent-gold/30 transform scale-105' 
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence>
                {filteredServices.map(service => (
                    <ServiceCard key={service.title} service={service} />
                ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default ServicesPage;