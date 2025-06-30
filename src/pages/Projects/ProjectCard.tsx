import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect, useCallback } from "react";
import { FiX, FiChevronLeft, FiChevronRight, FiShare2, FiExternalLink } from "react-icons/fi";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import type { Project } from '../../core/types';

const ProjectCard = ({ 
    project, 
    className = '' 
}: { 
    project: Project;
    className?: string;
}) => {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isFavorite, setIsFavorite] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const galleryRef = useRef<HTMLDivElement>(null);

    const openGallery = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsGalleryOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeGallery = useCallback(() => {
        setIsGalleryOpen(false);
        document.body.style.overflow = 'auto';
    }, []);

    const nextImage = useCallback(() => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === project.gallery.length - 1 ? 0 : prevIndex + 1
        );
    }, [project.gallery.length]);

    const prevImage = useCallback(() => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? project.gallery.length - 1 : prevIndex - 1
        );
    }, [project.gallery.length]);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (isGalleryOpen) {
            if (e.key === 'Escape') closeGallery();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        }
    }, [isGalleryOpen, closeGallery, nextImage, prevImage]);

    const toggleFavorite = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsFavorite(!isFavorite);
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`bg-primary-dark rounded-xl shadow-2xl overflow-hidden border border-gray-700 hover:border-accent-gold/50 transition-all duration-300 transform hover:scale-[1.02] group relative ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Favorite Button */}
            <button 
                onClick={toggleFavorite}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-colors"
                aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
                {isFavorite ? (
                    <FaHeart className="text-red-500 text-xl" />
                ) : (
                    <FaRegHeart className="text-white text-xl" />
                )}
            </button>

            {/* Main Image */}
            <div className="relative overflow-hidden h-64 bg-gray-800">
                <motion.img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700"
                    style={{
                        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                        filter: isHovered ? 'brightness(0.9)' : 'brightness(0.8)'
                    }}
                    onError={(e) => {
                        e.currentTarget.src = `https://placehold.co/600x400/1a202c/a0aec0?text=Image+Error`;
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                    <div className="w-full">
                        <div className="flex flex-wrap gap-2 mb-2">
                            {project.tags?.slice(0, 3).map((tag, index) => (
                                <span 
                                    key={index}
                                    className="bg-accent-gold/20 text-accent-gold px-3 py-1 rounded-full text-xs font-semibold"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h3 className="text-2xl font-bold text-white leading-tight drop-shadow-lg">
                            {project.title}
                        </h3>
                        <p className="text-sm text-gray-300 mt-1">{project.location}</p>
                    </div>
                </div>
                
                {/* Hover Overlay */}
                <motion.div 
                    className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                >
                    <button 
                        onClick={openGallery}
                        className="bg-accent-gold text-primary-dark font-semibold px-6 py-2 rounded-full hover:bg-white transition-all transform hover:scale-105 flex items-center gap-2"
                    >
                        Ver Proyecto
                        <FiExternalLink className="text-lg" />
                    </button>
                </motion.div>
            </div>
            
            {/* Card Footer */}
            <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${
                            project.status === 'Completado' ? 'bg-green-500' : 
                            project.status === 'En progreso' ? 'bg-yellow-500' : 'bg-blue-500'
                        }`}></span>
                        <span className="text-sm text-text-light">{project.status}</span>
                    </div>
                    <span className="text-sm text-text-light">{project.year}</span>
                </div>
                
                <p className="text-text-light leading-relaxed mb-4 text-sm line-clamp-3">
                    {project.description}
                </p>
                
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-700">
                    <div className="flex items-center gap-2 text-sm text-text-light">
                        <span>Ver más</span>
                    </div>
                    <div className="flex gap-2
                    ">
                        <button 
                            onClick={openGallery}
                            className="p-2 text-text-light hover:text-accent-gold transition-colors"
                            aria-label="Share project"
                        >
                            <FiShare2 />
                        </button>
                    </div>
                </div>
            </div>

            {/* Gallery Modal */}
            <AnimatePresence>
                {isGalleryOpen && (
                    <motion.div 
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeGallery}
                        ref={galleryRef}
                    >
                        <button 
                            className="absolute top-4 right-4 text-white text-3xl z-10 hover:text-accent-gold transition-colors"
                            onClick={(e) => {
                                e.stopPropagation();
                                closeGallery();
                            }}
                            aria-label="Close gallery"
                        >
                            <FiX />
                        </button>
                        
                        <div className="relative w-full max-w-6xl max-h-[90vh]" onClick={e => e.stopPropagation()}>
                            {/* Main Image */}
                            <div className="relative w-full h-[70vh] mb-4 rounded-xl overflow-hidden">
                                <motion.img
                                    key={currentImageIndex}
                                    src={project.gallery?.[currentImageIndex] || project.imageUrl}
                                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                                    className="w-full h-full object-contain"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                                
                                {/* Navigation Arrows */}
                                {project.gallery?.length > 1 && (
                                    <>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                prevImage();
                                            }}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors z-10"
                                            aria-label="Previous image"
                                        >
                                            <FiChevronLeft size={24} />
                                        </button>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                nextImage();
                                            }}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors z-10"
                                            aria-label="Next image"
                                        >
                                            <FiChevronRight size={24} />
                                        </button>
                                    </>
                                )}
                                
                                {/* Image Counter */}
                                {project.gallery?.length > 1 && (
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                                        {currentImageIndex + 1} / {project.gallery.length}
                                    </div>
                                )}
                            </div>
                            
                            {/* Thumbnails */}
                            {project.gallery?.length > 1 && (
                                <div className="flex gap-2 overflow-x-auto py-2 scrollbar-hide">
                                    {project.gallery.map((img, index) => (
                                        <button
                                            key={index}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setCurrentImageIndex(index);
                                            }}
                                            className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${
                                                index === currentImageIndex 
                                                    ? 'border-accent-gold scale-105' 
                                                    : 'border-transparent hover:border-white/50'
                                            }`}
                                        >
                                            <img 
                                                src={img} 
                                                alt={`Thumbnail ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}
                            
                            {/* Project Info */}
                            <div className="mt-4 text-center text-white">
                                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-300 max-w-2xl mx-auto">{project.description}</p>
                                
                                <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
                                    {project.details?.area && (
                                        <div>
                                            <span className="text-gray-400">Área: </span>
                                            <span>{project.details.area}</span>
                                        </div>
                                    )}
                                    {project.details?.duration && (
                                        <div>
                                            <span className="text-gray-400">Duración: </span>
                                            <span>{project.details.duration}</span>
                                        </div>
                                    )}
                                    {project.details?.materials && (
                                        <div>
                                            <span className="text-gray-400">Materiales: </span>
                                            <span>{project.details.materials.join(', ')}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default ProjectCard;