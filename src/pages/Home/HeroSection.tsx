import { motion, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";


//==============================================================================
// Componente Typewriter
//==============================================================================
// No se han realizado cambios funcionales significativos aquí, ya que la
// implementación actual es robusta para manejar el layout y la animación.
// Se mejoraron los comentarios para mayor claridad.
//==============================================================================

interface TypewriterProps {
    text: string;
    delay?: number;
    textClassName?: string;
    wrapperClassName?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({
    text,
    delay = 50,
    textClassName = "",
    wrapperClassName = ""
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => setCurrentIndex((prev) => prev + 1), delay);
            return () => clearTimeout(timeout);
        }
        const cursorInterval = setInterval(() => setShowCursor((prev) => !prev), 500);
        return () => clearInterval(cursorInterval);
    }, [currentIndex, delay, text.length]);

    return (
        <span className={`relative ${wrapperClassName}`}>
            <span className={`opacity-0 whitespace-pre-wrap ${textClassName}`} aria-hidden="true">
                {text}
            </span>
            <span className={`absolute top-0 left-0 w-full ${textClassName}`}>
                {text.slice(0, currentIndex)}
                {currentIndex >= text.length && (
                    <span className={`transition-opacity duration-200 ${showCursor ? "opacity-100" : "opacity-0"}`}>|</span>
                )}
            </span>
        </span>
    );
};

//==============================================================================
// Componentes Modulares para HeroSection
//==============================================================================
// Se ha descompuesto HeroSection en componentes más pequeños y enfocados.
//==============================================================================

//--- Componente para el Fondo (Video y Overlay) ---
const HeroBackground: React.FC = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    return (
        <>
            <div
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${isVideoLoaded ? "opacity-0" : "opacity-100"}`}
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2071&auto=format&fit=crop')",
                    filter: "blur(4px)"
                }}
            />
            <video
                autoPlay loop muted playsInline
                className="absolute w-auto min-w-full min-h-full max-w-none transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover transition-opacity duration-1000"
                style={{ opacity: isVideoLoaded ? 1 : 0 }}
                onLoadedData={() => setIsVideoLoaded(true)}
                preload="metadata"
            >
                <source src="../../assets/bg-video.mp4"  type="video/mp4" />
                Tu navegador no soporta la etiqueta de video.
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"></div>
        </>
    );
};

//--- Componente para el Contenido Principal (Texto y Botones) ---
const HeroContent: React.FC<{ isVisible: boolean; navigate: (path: string) => void }> = ({ isVisible, navigate }) => {
    // Definición de variantes de animación para reutilizar
    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number = 1) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.9,
                ease: [0.6, 0.05, 0.01, 0.9]
            }
        })
    };

    return (
        <motion.div
            className="relative z-20 max-w-4xl mx-auto w-full px-4"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
        >
            <motion.h1 variants={fadeInUp} custom={0} className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight">
                <Typewriter
                    text="Arte y Resistencia en Metal"
                    delay={60}
                    textClassName="bg-clip-text text-transparent bg-gradient-to-r from-accent-gold to-accent-gold whitespace-pre-line"
                    wrapperClassName="inline-block"
                />
            </motion.h1>

            <motion.p variants={fadeInUp} custom={1} className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed">
                Soluciones personalizadas en herrería artística, estructuras metálicas robustas y decoración de diseño único.
            </motion.p>

            <motion.div variants={fadeInUp} custom={2} className="mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                <button
                    onClick={() => navigate("/proyectos")}
                    className="bg-accent-gold-dark text-primary-dark font-bold py-3 px-8 rounded-xl hover:bg-accent-gold-DEFAULT transition-all duration-300 shadow-lg hover:shadow-accent-gold/40 transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 group"
                >
                    <span>Ver Proyectos</span>
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
                <button
                    onClick={() => navigate("/contacto")}
                    className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-xl hover:bg-white hover:text-primary-dark transition-all duration-300 shadow-lg hover:shadow-white/20 transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 group"
                >
                    <span>Contacto</span>
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
            </motion.div>
        </motion.div>
    );
};

//--- Componente para el Indicador de Scroll ---
const ScrollIndicator: React.FC = () => (
    <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
    >
        <span className="text-sm text-gray-300 mb-2">Desplázate</span>
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center p-1">
            <motion.div
                className="w-1 h-2 bg-accent-gold rounded-full"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    </motion.div>
);


//==============================================================================
// Componente Principal HeroSection (Ensamblador)
//==============================================================================
// Ahora es mucho más limpio y solo se encarga de la estructura principal
// y de la lógica de estado y scroll.
//==============================================================================

const HeroSection: React.FC<{ navigate: (path: string) => void }> = ({ navigate }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    });

    // Transformaciones para el efecto parallax del fondo
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacityBg = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div ref={sectionRef} className="relative bg-primary-dark text-text-light text-center min-h-screen flex items-center justify-center font-inter overflow-hidden">
            <motion.div className="absolute inset-0 z-0" style={{ y: yBg, opacity: opacityBg }}>
                <HeroBackground />
            </motion.div>

            <HeroContent isVisible={isVisible} navigate={navigate} />

            <ScrollIndicator />
        </div>
    );
};

export default HeroSection;