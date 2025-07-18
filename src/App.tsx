import React, { useState, useEffect, Suspense } from 'react';
import WhatsAppButton from './components/ui/WhatsAppButton';
import {  AnimatePresence } from 'framer-motion';

// Importaciones de componentes
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import LoadingSpinner from './components/ui/LoadingSpinner';
import ServicesPage from './pages/Services/ServicesPage';
import ProjectsPage from './pages/Projects/ProjectPage';
import AboutPage from './pages/About/AboutPage';
import ContactPage from './pages/Contact/ContactPage';
import HomePage from './pages/Home/HomePage';


export default function App() {
  const [currentPage, setCurrentPage] = useState(window.location.pathname);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };
  
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);
  
  // Lazy loading de las páginas
  // Using React.memo to prevent re-renders of lazy loaded components when only navigate prop changes
  const LazyHomePage = React.lazy(() => Promise.resolve({ default: React.memo(({ navigate }: { navigate: (path: string) => void }) => <HomePage navigate={navigate} />) }));
  const LazyServicesPage = React.lazy(() => Promise.resolve({ default: React.memo(ServicesPage) }));
  const LazyProjectsPage = React.lazy(() => Promise.resolve({ default: React.memo(ProjectsPage) }));
  const LazyAboutPage = React.lazy(() => Promise.resolve({ default: React.memo(AboutPage) }));
  const LazyContactPage = React.lazy(() => Promise.resolve({ default: React.memo(ContactPage) }));
  
  const renderPage = () => {
      switch (currentPage) {
          case '/servicios':
              return <LazyServicesPage />;
          case '/proyectos':
              return <LazyProjectsPage />;
          case '/nosotros':
              return <LazyAboutPage />;
          case '/contacto':
              return <LazyContactPage />;
          case '/':
          default:
              return <LazyHomePage navigate={navigate} />;
      }
  };

  return (
    <div className="bg-secondary-dark min-h-screen flex flex-col font-inter">
      <Navbar navigate={navigate} />
      <main className="flex-grow"> 
        <Suspense fallback={<LoadingSpinner />}>
            <AnimatePresence mode="wait">
                <div key={currentPage}>
                   {renderPage()}
                </div>
            </AnimatePresence>
          
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}