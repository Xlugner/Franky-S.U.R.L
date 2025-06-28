import { motion } from "framer-motion";
import { Send } from "lucide-react";

const ContactPreview = ({ navigate }: { navigate: (path: string) => void }) => (
    <div className="bg-primary-dark py-20 sm:py-28 px-4 font-inter">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-white mb-4">¿Listo para tu próximo proyecto?</h2>
            <p className="text-lg md:text-xl text-text-light leading-relaxed mb-8">
                ¡Contáctanos hoy mismo para obtener un presupuesto sin compromiso o para resolver cualquier duda! Estamos aquí para hacer tus ideas realidad.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-10"
            >
                <button 
                  onClick={() => navigate('/contacto')} 
                  className="bg-accent-gold-dark text-primary-dark font-bold py-3.5 px-10 rounded-xl hover:bg-accent-gold-DEFAULT transition-all duration-300 shadow-lg hover:shadow-accent-gold/40 transform hover:-translate-y-1 active:scale-95"
                >
                    Contactar Ahora <Send className="inline-block ml-2 w-5 h-5" />
                </button>
            </motion.div>
        </div>
    </div>
);

export default ContactPreview;