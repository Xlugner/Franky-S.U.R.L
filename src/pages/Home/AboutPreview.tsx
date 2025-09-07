import { motion } from "framer-motion";
import { Users, Award, CheckCircle, Users2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AnimatedCounter } from '../../components/AnimatedCounter/AnimatedCounter';

const AboutPreview = ({ navigate }: { navigate: (path: string) => void }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      }
    }
  };

  const transitionConfig = {
    duration: 0.6,
  };

  return (
    <div 
      ref={sectionRef}
      className="relative bg-primary-dark py-20 sm:py-28 px-4 font-inter overflow-hidden"
    >
      {/* Fondo sutil con patrón */}
      <div 
        className="absolute inset-0 opacity-5 bg-repeat"
        style={{
          backgroundImage: "url(" + encodeURI("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40h-40z' fill='%23d1a44e' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E") + "",
          backgroundSize: '30px 30px'
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block text-accent-gold font-semibold mb-4 text-sm uppercase tracking-wider"
          >
            Sobre Nosotros
          </motion.span>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-extrabold text-white mb-6"
          >
            Conoce Nuestra Historia
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="w-20 h-1 bg-accent-gold mx-auto mb-8"
          />
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-text-light leading-relaxed max-w-4xl mx-auto"
          >
            En <span className="text-accent-gold font-semibold">Franky S.U.R.L.</span>, fusionamos la tradición artesanal con la innovación para crear piezas únicas y duraderas en metal. Nuestra pasión por la calidad y el diseño nos impulsa a superar las expectativas en cada proyecto.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: {
                ...transitionConfig,
                delay: 0.2
              }
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-secondary-dark/50 p-8 rounded-xl text-center backdrop-blur-sm border border-gray-700 hover:border-accent-gold/50 transition-all duration-300"
          >
            <div className="bg-accent-gold/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-accent-gold" />
            </div>
            <AnimatedCounter value={4} suffix="+" label="Años de Experiencia" />
            <p className="mt-4 text-text-light text-sm">Más de 4 años creando soluciones en metal</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: {
                ...transitionConfig,
                delay: 0.4
              }
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-secondary-dark/50 p-8 rounded-xl text-center backdrop-blur-sm border border-gray-700 hover:border-accent-gold/50 transition-all duration-300"
          >
            <div className="bg-accent-gold/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-accent-gold" />
            </div>
            <AnimatedCounter value={35} suffix="+" label="Proyectos Completados" />
            <p className="text-text-light text-sm">Satisfacción garantizada en cada trabajo</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: {
                ...transitionConfig,
                delay: 0.6
              }
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-secondary-dark/50 p-8 rounded-xl text-center backdrop-blur-sm border border-gray-700 hover:border-accent-gold/50 transition-all duration-300"
          >
            <div className="bg-accent-gold/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Users2 className="w-8 h-8 text-accent-gold" />
            </div>
            <AnimatedCounter value={100} suffix="%" label="Clientes Satisfechos" />
            <p className="text-text-light text-sm">Nuestra mejor garantía son sus recomendaciones</p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: {
              ...transitionConfig,
              delay: 0.8
            }
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-10"
        >
          <button 
            onClick={() => navigate('/nosotros')} 
            className="bg-transparent border-2 border-accent-gold-dark text-accent-gold-light font-bold py-3.5 px-10 rounded-xl hover:bg-accent-gold-dark hover:text-primary-dark transition-all duration-300 shadow-lg hover:shadow-accent-gold/40 transform hover:-translate-y-1 active:scale-95 flex items-center mx-auto group"
            aria-label="Conocer más sobre nuestra empresa"
          >
            <span>Conoce Nuestra Historia</span>
            <Users className="inline-block ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPreview;