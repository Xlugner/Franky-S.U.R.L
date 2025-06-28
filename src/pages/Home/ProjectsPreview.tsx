import { projectsData } from "../../core/data";
import { motion } from 'framer-motion';
import { FolderKanban } from "lucide-react";


const ProjectsPreview = ({ navigate }: { navigate: (path: string) => void }) => (
    <div className="bg-primary-dark py-20 sm:py-28 px-4 font-inter">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-extrabold text-center text-white mb-4">Nuestros Proyectos Destacados</h2>
            <p className="text-center text-text-light mb-16 max-w-3xl mx-auto text-lg leading-relaxed">Descubre la calidad y creatividad de nuestras obras más recientes en herrería y construcción.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {projectsData.slice(0, 3).map(project => ( // Muestra solo los primeros 3 proyectos
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="bg-secondary-dark rounded-xl shadow-xl overflow-hidden border border-gray-700 hover:border-accent-gold/50 transition-all duration-300 transform hover:scale-[1.02] group"
                    >
                        <div className="relative overflow-hidden h-60">
                            <img 
                                src={project.imageUrl} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                onError={(e) => {
                                    e.currentTarget.src = `https://placehold.co/600x400/1a202c/a0aec0?text=Image+Error`; // Placeholder on error
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                                <h3 className="text-xl font-bold text-white leading-tight drop-shadow-lg">{project.title}</h3>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-3 text-text-light text-sm">
                                <span className="bg-accent-gold/20 text-accent-gold-light px-3 py-1 rounded-full text-xs font-semibold">{project.category}</span>
                                <span>{project.year}</span>
                            </div>
                            <p className="text-text-light leading-relaxed mb-4 text-sm">{project.description}</p>
                            <button className="w-full bg-accent-gold-dark text-primary-dark font-semibold py-2 rounded-lg hover:bg-accent-gold transition-all duration-300 shadow-md hover:shadow-accent-gold/30 active:scale-95">
                                Ver Detalles
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="text-center mt-20">
                <button 
                  onClick={() => navigate('/proyectos')} 
                  className="bg-accent-gold-dark text-primary-dark font-bold py-3.5 px-10 rounded-xl hover:bg-accent-gold-DEFAULT transition-all duration-300 shadow-lg hover:shadow-accent-gold/40 transform hover:-translate-y-1 active:scale-95"
                >
                    Ver Todos los Proyectos <FolderKanban className="inline-block ml-2 w-5 h-5" />
                </button>
            </div>
        </div>
    </div>
);

export default ProjectsPreview;