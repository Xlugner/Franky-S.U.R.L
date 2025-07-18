import { projectsData } from "../../core/data";
import { motion } from 'framer-motion';
import { FolderKanban } from "lucide-react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import type { Project } from "../../core/types";

interface ProjectsPreviewProps {
    navigate: (path: string) => void;
}

const ProjectsPreview: React.FC<ProjectsPreviewProps> = ({ navigate }) => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <div className="bg-primary-dark py-20 sm:py-28 px-4 font-inter">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-extrabold text-center text-white mb-4">Nuestros Proyectos Destacados</h2>
                <p className="text-center text-text-light mb-16 max-w-3xl mx-auto text-lg leading-relaxed">Descubre la calidad y creatividad de nuestras obras más recientes en herrería y construcción.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {projectsData.slice(0, 3).map(project => (
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
                                        e.currentTarget.src = `https://placehold.co/600x400/1a202c/a0aec0?text=Image+Error`;
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                                    <h3 className="text-xl font-bold text-white leading-tight drop-shadow-lg">{project.title}</h3>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-3 text-text-light text-sm">
                                <span className="bg-accent-gold/20 text-accent-gold-light px-3 py-1 rounded-full text-xs font-semibold">
                                    {Array.isArray(project.categories) ? project.categories.join(", ") : "Sin categoría"}
                                </span>
                                    <span>{project.year}</span>
                                </div>
                                <p className="text-text-light leading-relaxed mb-4 text-sm">{project.description}</p>
                                <button
                                    className="w-full bg-accent-gold-dark text-primary-dark font-semibold py-2 rounded-lg hover:bg-accent-gold transition-all duration-300 shadow-md hover:shadow-accent-gold/30 active:scale-95"
                                    onClick={() => setSelectedProject(project)}
                                >
                                    Ver Detalles
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="text-center mt-20">
                    <button
                        onClick={() => navigate("/proyectos")}
                        className="bg-accent-gold-dark text-primary-dark font-bold py-3.5 px-10 rounded-xl hover:bg-accent-gold-DEFAULT transition-all duration-300 shadow-lg hover:shadow-accent-gold/40 transform hover:-translate-y-1 active:scale-95"
                    >
                        Ver Todos los Proyectos <FolderKanban className="inline-block ml-2 w-5 h-5" />
                    </button>
                </div>
            </div>
            {/* Modal de detalles */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <button
                            className="absolute top-4 right-4 text-white text-3xl z-10 hover:text-accent-gold transition-colors"
                            onClick={e => {
                                e.stopPropagation();
                                setSelectedProject(null);
                            }}
                            aria-label="Cerrar"
                        >
                            <FiX />
                        </button>
                        <div className="relative w-full max-w-3xl max-h-[90vh] bg-secondary-dark rounded-xl overflow-y-auto p-8" onClick={e => e.stopPropagation()}>
                            <img
                                src={selectedProject.imageUrl}
                                alt={selectedProject.title}
                                className="w-full h-64 object-cover rounded-lg mb-6"
                                onError={e => {
                                    e.currentTarget.src = `https://placehold.co/600x400/1a202c/a0aec0?text=Image+Error`;
                                }}
                            />
                            <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
                            <p className="text-gray-300 mb-4">{selectedProject.description}</p>
                            <div className="flex flex-wrap gap-4 text-sm mb-4">
                                <span className="bg-accent-gold/20 text-accent-gold px-3 py-1 rounded-full text-xs font-semibold">
                                    {Array.isArray(selectedProject.categories) ? selectedProject.categories.join(", ") : "Sin categoría"}
                                </span>
                                <span className="text-text-light">{selectedProject.year}</span>
                            </div>
                            {selectedProject.details && (
                                <div className="mt-2 flex flex-col gap-2 text-text-light text-sm">
                                    {selectedProject.details.area && (
                                        <div>
                                            <span className="text-gray-400">Área: </span>
                                            <span>{selectedProject.details.area}</span>
                                        </div>
                                    )}
                                    {selectedProject.details.duration && (
                                        <div>
                                            <span className="text-gray-400">Duración: </span>
                                            <span>{selectedProject.details.duration}</span>
                                        </div>
                                    )}
                                    {selectedProject.details.materials && (
                                        <div>
                                            <span className="text-gray-400">Materiales: </span>
                                            <span>{selectedProject.details.materials.join(", ")}</span>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProjectsPreview;