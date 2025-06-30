import AnimatedPage from '../../components/ui/AnimatedPage';
import { projectsData } from '../../core/data';
import ProjectCard from './ProjectCard';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiFilter, FiX, FiGrid, FiList } from 'react-icons/fi';

type ViewMode = 'grid' | 'list';

const ProjectsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('todos');
    const [viewMode, setViewMode] = useState<ViewMode>('grid');
    const [showFilters, setShowFilters] = useState(false);
    const [filteredProjects, setFilteredProjects] = useState(projectsData);

    // Get unique categories
    const categories = ['todos', ...new Set(projectsData.flatMap(project => project.categories))];

    // Filter projects based on search term and selected category
    useEffect(() => {
        let results = projectsData;

        // Apply search filter
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            results = results.filter(project => 
                project.title.toLowerCase().includes(term) ||
                project.description.toLowerCase().includes(term) ||
                project.tags?.some(tag => tag.toLowerCase().includes(term)) ||
                project.location?.toLowerCase().includes(term)
            );
        }

        // Apply category filter
        if (selectedCategory !== 'todos') {
            results = results.filter(project => 
                project.categories?.includes(selectedCategory)
            );
        }

        setFilteredProjects(results);
        // Save to session storage for persistence
        sessionStorage.setItem('filteredProjects', JSON.stringify(results));
    }, [searchTerm, selectedCategory]);

    // Load saved filters from session storage on component mount
    useEffect(() => {
        const savedFilters = sessionStorage.getItem('projectFilters');
        if (savedFilters) {
            const { search, category } = JSON.parse(savedFilters);
            setSearchTerm(search || '');
            setSelectedCategory(category || 'todos');
        }
    }, []);

    // Save filters to session storage when they change
    useEffect(() => {
        sessionStorage.setItem('projectFilters', JSON.stringify({
            search: searchTerm,
            category: selectedCategory
        }));
    }, [searchTerm, selectedCategory]);

    const clearFilters = () => {
        setSearchTerm('');
        setSelectedCategory('todos');
        setShowFilters(false);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <AnimatedPage>
            <div className="bg-secondary-dark text-text-light min-h-screen py-12 sm:py-16 px-4 sm:px-6 font-inter">
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <motion.div 
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Nuestros Proyectos</h1>
                        <div className="w-24 h-1 bg-accent-gold mx-auto mb-6"></div>
                        <p className="mt-6 max-w-3xl mx-auto text-lg text-text-light leading-relaxed">
                            Descubre la excelencia en cada detalle. Nuestro portafolio muestra la calidad y creatividad 
                            que definen nuestro trabajo en cada proyecto de herrería.
                        </p>
                    </motion.div>

                    {/* Search and Filter Bar */}
                    <motion.div 
                        className="mb-8 bg-primary-dark/50 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-700"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            {/* Search Input */}
                            <div className="relative flex-1 max-w-2xl">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FiSearch className="text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Buscar proyectos..."
                                    className="block w-full pl-10 pr-3 py-2.5 border border-gray-600 rounded-lg bg-primary-dark text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-gold/50 focus:border-transparent"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                {searchTerm && (
                                    <button
                                        onClick={() => setSearchTerm('')}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
                                        aria-label="Limpiar búsqueda"
                                    >
                                        <FiX />
                                    </button>
                                )}
                            </div>

                            <div className="flex items-center gap-3">
                                {/* View Toggle */}
                                <div className="hidden sm:flex items-center bg-primary-dark rounded-lg p-1 border border-gray-700">
                                    <button
                                        onClick={() => setViewMode('grid')}
                                        className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-accent-gold/20 text-accent-gold' : 'text-gray-400 hover:text-white'}`}
                                        aria-label="Grid view"
                                    >
                                        <FiGrid className="text-lg" />
                                    </button>
                                    <button
                                        onClick={() => setViewMode('list')}
                                        className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-accent-gold/20 text-accent-gold' : 'text-gray-400 hover:text-white'}`}
                                        aria-label="List view"
                                    >
                                        <FiList className="text-lg" />
                                    </button>
                                </div>

                                {/* Mobile Filter Button */}
                                <button
                                    onClick={() => setShowFilters(!showFilters)}
                                    className="sm:hidden flex items-center gap-2 px-4 py-2.5 bg-accent-gold/10 border border-accent-gold/30 text-accent-gold rounded-lg hover:bg-accent-gold/20 transition-colors"
                                >
                                    <FiFilter />
                                    <span>Filtros</span>
                                </button>

                                {/* Desktop Filter Button */}
                                <div className="hidden sm:flex items-center gap-2">
                                    <label htmlFor="filtroCategoria" className="sr-only">Filtrar por categoría</label>
                                    <select
                                        id="filtroCategoria"
                                        value={selectedCategory}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                        className="bg-primary-dark border border-gray-600 text-white text-sm rounded-lg focus:ring-accent-gold focus:border-accent-gold block w-full p-2.5 cursor-pointer"
                                    >
                                        {categories.map((category) => (
                                            <option key={category} value={category} className="capitalize">
                                                {category.charAt(0).toUpperCase() + category.slice(1)}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Filters Panel */}
                        <AnimatePresence>
                            {showFilters && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="mt-4 overflow-hidden"
                                >
                                    <div className="pt-4 border-t border-gray-700">
                                        <h3 className="text-white font-medium mb-3">Categorías</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {categories.map((category) => (
                                                <button
                                                    key={category}
                                                    onClick={() => setSelectedCategory(category)}
                                                    className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                                                        selectedCategory === category
                                                            ? 'bg-accent-gold text-primary-dark font-medium'
                                                            : 'bg-primary-dark text-text-light border border-gray-600 hover:border-accent-gold/50'
                                                    }`}
                                                >
                                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                                </button>
                                            ))}
                                        </div>
                                        {(searchTerm || selectedCategory !== 'todos') && (
                                            <button
                                                onClick={clearFilters}
                                                className="mt-4 text-sm text-accent-gold hover:underline flex items-center gap-1"
                                            >
                                                <FiX size={16} /> Limpiar filtros
                                            </button>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Results Count */}
                    <div className="flex justify-between items-center mb-6">
                        <p className="text-text-light">
                            Mostrando <span className="text-white font-medium">{filteredProjects.length}</span> 
                            {filteredProjects.length === 1 ? 'proyecto' : 'proyectos'}
                            {searchTerm && (
                                <span> para "<span className="text-accent-gold">{searchTerm}</span>"</span>
                            )}
                            {selectedCategory !== 'todos' && (
                                <span> en <span className="text-accent-gold capitalize">{selectedCategory}</span></span>
                            )}
                        </p>
                        <div className="text-sm text-text-light">
                            Ordenar por: 
                            <select 
                                className="ml-2 bg-transparent border-0 border-b border-gray-600 focus:border-accent-gold focus:ring-0 text-white"
                                aria-label="Ordenar proyectos por"
                            >
                                <option>Más recientes</option>
                                <option>Antiguos primero</option>
                                <option>Nombre (A-Z)</option>
                                <option>Nombre (Z-A)</option>
                            </select>
                        </div>
                    </div>

                    {/* Projects Grid */}
                    {filteredProjects.length > 0 ? (
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="show"
                            className={`${
                                viewMode === 'grid'
                                    ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'
                                    : 'space-y-6'
                            }`}
                        >
                            <AnimatePresence>
                                {filteredProjects.map((project) => (
                                    <motion.div
                                        key={project.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.3 }}
                                        className={viewMode === 'list' ? 'flex' : ''}
                                    >
                                        <ProjectCard 
                                            project={project} 
                                            className={viewMode === 'list' ? 'flex-1 flex flex-col sm:flex-row' : ''}
                                        />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    ) : (
                        <motion.div 
                            className="text-center py-16 bg-primary-dark/30 rounded-xl border border-dashed border-gray-700"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <h3 className="text-xl font-medium text-white mb-2">No se encontraron proyectos</h3>
                            <p className="text-text-light max-w-md mx-auto mb-6">
                                No hay proyectos que coincidan con tu búsqueda. Intenta con otros términos o categorías.
                            </p>
                            <button
                                onClick={clearFilters}
                                className="px-6 py-2.5 bg-accent-gold text-primary-dark font-medium rounded-lg hover:bg-accent-gold/90 transition-colors"
                            >
                                Limpiar filtros
                            </button>
                        </motion.div>
                    )}

                    {/* Load More Button (for pagination) */}
                    {filteredProjects.length > 0 && (
                        <div className="mt-12 text-center">
                            <button className="px-8 py-3 bg-accent-gold/10 border border-accent-gold/30 text-accent-gold rounded-lg hover:bg-accent-gold/20 transition-colors">
                                Cargar más proyectos
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </AnimatedPage>
    );
};

export default ProjectsPage;