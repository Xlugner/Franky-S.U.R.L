import { motion } from 'framer-motion';
import type { Project } from '../../core/types';

const ProjectCard = ({ project }: { project: Project }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-primary-dark rounded-xl shadow-xl overflow-hidden border border-gray-700 hover:border-accent-gold/50 transition-all duration-300 transform hover:scale-[1.02] group"
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
                <h3 className="text-2xl font-bold text-white leading-tight drop-shadow-lg">{project.title}</h3>
            </div>
        </div>
        <div className="p-6">
            <div className="flex justify-between items-center mb-3 text-text-light text-sm">
                <span className="bg-accent-gold/20 text-accent-gold-light px-3 py-1 rounded-full text-xs font-semibold">{project.category}</span>
                <span>{project.year}</span>
            </div>
            <p className="text-text-light leading-relaxed mb-4 text-sm">{project.description}</p>
            <button className="w-full bg-accent-gold-dark text-primary-dark font-semibold py-2.5 rounded-lg hover:bg-accent-gold transition-all duration-300 shadow-md hover:shadow-accent-gold/30 active:scale-95">
                Ver Proyecto
            </button>
        </div>
    </motion.div>
);

export default ProjectCard;