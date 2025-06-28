import { motion } from 'framer-motion';
import { servicesData } from '../../core/data';
import { FolderKanban } from 'lucide-react';

const ServicesPreview = ({ navigate }: { navigate: (path: string) => void }) => (
    <div className="bg-primary-dark py-20 sm:py-28 px-4 font-inter">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-extrabold text-center text-white mb-4">Nuestros Servicios Principales</h2>
            <p className="text-center text-text-light mb-16 max-w-3xl mx-auto text-lg leading-relaxed">Ofrecemos una gama completa de soluciones en metal, desde la robustez estructural hasta el detalle más fino en decoración, garantizando calidad y durabilidad.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                {servicesData.slice(0, 3).map((service, index) => (
                    <motion.div 
                        key={service.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                        className="bg-primary-dark p-8 rounded-xl text-center flex flex-col items-center shadow-xl border border-gray-700 hover:border-accent-gold/50 transition-all duration-300 transform hover:scale-105 group"
                    >
                        <div className="bg-accent-gold/15 p-5 rounded-full mb-6 transition-all duration-300 group-hover:bg-accent-gold/30">
                           <service.icon className="h-12 w-12 text-accent-gold group-hover:text-accent-gold-light transition-colors" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent-gold-light transition-colors">{service.title}</h3>
                        <p className="text-text-light mb-4 flex-grow leading-relaxed">{service.description}</p>
                        <button className="mt-auto bg-accent-gold-dark text-primary-dark font-semibold py-2.5 px-6 rounded-lg hover:bg-accent-gold transition-all duration-300 shadow-md group-hover:shadow-accent-gold/30">
                            Saber Más
                        </button>
                    </motion.div>
                ))}
            </div>
            <div className="text-center mt-20">
                <button 
                  onClick={() => navigate('/servicios')} 
                  className="bg-accent-gold-dark text-primary-dark font-bold py-3.5 px-10 rounded-xl hover:bg-accent-gold-DEFAULT transition-all duration-300 shadow-lg hover:shadow-accent-gold/40 transform hover:-translate-y-1 active:scale-95"
                >
                    Ver Todos los Servicios <FolderKanban className="inline-block ml-2 w-5 h-5" />
                </button>
            </div>
        </div>
    </div>
);
export default ServicesPreview;