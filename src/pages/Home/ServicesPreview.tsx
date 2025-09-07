import { motion, useInView } from "framer-motion";
import { servicesData } from "../../core/data";
import { FolderKanban, ArrowRight } from "lucide-react";
import { useRef } from "react";


interface ServicesPreviewProps {
    navigate: (path: string) => void;
}

const ServicesPreview: React.FC<ServicesPreviewProps> = ({ navigate }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <div className="bg-primary-dark py-20 sm:py-28 px-4 font-inter relative overflow-hidden">
            {/* Fondo decorativo sutil */}
            <div
                className="absolute inset-0 opacity-5 bg-repeat"
                style={{
                    backgroundImage:
                        "url(data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40h-40z' fill='%23d1a44e' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E)",
                    backgroundSize: "30px 30px"
                }}
            />
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-extrabold text-white mb-4"
                    >
                        Nuestros Servicios Principales
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-center text-text-light mb-16 max-w-3xl mx-auto text-lg leading-relaxed"
                    >
                        Ofrecemos una gama completa de soluciones en metal, desde la robustez estructural hasta el detalle más fino en decoración, garantizando calidad y durabilidad.
                    </motion.p>
                </div>
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15,
                                delayChildren: 0.2
                            }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
                >
                    {servicesData.slice(0, 3).map((service) => (
                        <motion.div
                            key={service.title}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                show: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.6,
                                        ease: [0.16, 1, 0.3, 1]
                                    }
                                }
                            }}
                            className="group bg-gradient-to-b from-primary-dark to-secondary-dark/80 p-8 rounded-xl text-center flex flex-col items-center shadow-2xl border border-gray-700/50 hover:border-accent-gold/50 transition-all duration-500 hover:-translate-y-2 will-change-transform h-96"
                        >
                            <div className="bg-accent-gold/10 p-5 rounded-full mb-6 transition-all duration-500 group-hover:bg-accent-gold/20 group-hover:scale-110">
                                <service.icon className="h-12 w-12 text-accent-gold group-hover:text-accent-gold-light transition-colors duration-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent-gold-light transition-colors duration-300">
                                {service.title}
                            </h3>
                            <div className="overflow-y-auto flex-grow scrollbar-hide">
                            <p className="text-text-light mb-6 flex-grow leading-relaxed">
                                {service.description}
                            </p>
                            </div>
                            <button
                                onClick={() => navigate(`/servicios#${service.title.toLowerCase().replace(/\s+/g, "-")}`)}
                                className="mt-auto flex items-center gap-2 bg-accent-gold-dark/90 text-primary-dark font-semibold py-2.5 px-6 rounded-lg hover:bg-accent-gold transition-all duration-300 shadow-md group-hover:shadow-accent-gold/30"
                            >
                                Saber más
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center mt-20"
                >
                    <button
                        onClick={() => navigate("/servicios")}
                        className="group bg-accent-gold-dark text-primary-dark font-bold py-3.5 px-8 rounded-xl hover:bg-accent-gold transition-all duration-300 shadow-lg hover:shadow-accent-gold/40 transform hover:-translate-y-1 active:scale-95 inline-flex items-center"
                    >
                        Ver Todos los Servicios
                        <FolderKanban className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default ServicesPreview;