import AnimatedPage from '../../components/ui/AnimatedPage';
import HeroSection from './HeroSection';
import ServicesPreview from './ServicesPreview';
import ProjectsPreview from './ProjectsPreview';
import AboutPreview from './AboutPreview';
import ContactPreview from './ContactPreview';

const HomePage = ({ navigate }: { navigate: (path: string) => void }) => (
  <AnimatedPage>
    <HeroSection navigate={navigate} />
    <AboutPreview navigate={navigate} />
    <ServicesPreview navigate={navigate} />
    <ProjectsPreview navigate={navigate} /> 
    <ContactPreview navigate={navigate} />  
  </AnimatedPage>
);

export default HomePage;
