import AnimatedPage from '../../components/ui/AnimatedPage';
import { projectsData } from '../../core/data';
import ProjectCard from './ProjectCard';


const ProjectsPage = () => (
    <AnimatedPage>
        <div className="bg-secondary-dark text-text-light py-16 sm:py-24 px-4 font-inter">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">Nuestros Proyectos Recientes</h2>
                    <p className="mt-6 max-w-3xl mx-auto text-lg text-text-light leading-relaxed">
                        Una muestra de nuestro compromiso con la excelencia. Descubre la calidad y creatividad que ponemos en cada obra.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {projectsData.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </div>
    </AnimatedPage>
);

export default ProjectsPage;