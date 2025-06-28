import { motion } from "framer-motion";
import { Users } from "lucide-react";

const AboutPreview = ({ navigate }: { navigate: (path: string) => void }) => (
    <div className="bg-primary-dark py-20 sm:py-28 px-4 font-inter">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-white mb-4">Conoce Nuestra Historia</h2>
            <p className="text-lg md:text-xl text-text-light leading-relaxed mb-8">
                En Herrerías Franky S.U.R.L., fusionamos la tradición artesanal con la innovación para crear piezas únicas y duraderas en metal. Nuestra pasión por la calidad y el diseño nos impulsa a superar las expectativas en cada proyecto.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-10"
            >
                <button 
                  onClick={() => navigate('/nosotros')} 
                  className="bg-transparent border-2 border-accent-gold-dark text-accent-gold-light font-bold py-3.5 px-10 rounded-xl hover:bg-accent-gold-dark hover:text-primary-dark transition-all duration-300 shadow-lg hover:shadow-accent-gold/40 transform hover:-translate-y-1 active:scale-95"
                >
                    Nuestra Empresa <Users className="inline-block ml-2 w-5 h-5" />
                </button>
            </motion.div>
        </div>
    </div>
);

export default AboutPreview;