import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = ({ navigate }: { navigate: (path: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Proyectos', path: '/proyectos' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Contacto', path: '/contacto' },
  ];
  
  const handleNavigate = (path: string) => {
    navigate(path);
    setIsOpen(false);
  }

  return (
    <nav className="bg-primary-dark/90 backdrop-blur-md sticky top-0 z-50 shadow-xl shadow-black/30 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div 
            className="flex-shrink-0 cursor-pointer p-2 rounded-md" 
            onClick={() => handleNavigate('/')}
          >
            <h1 className="text-accent-gold text-3xl font-extrabold tracking-tight">
              Franky <span className="text-accent-gold">S.U.R.L.</span>
            </h1>
            <p className="text-gray-400 text-xs sm:text-sm tracking-widest uppercase">Herrería & Decoración</p>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavigate(link.path)}
                  className="text-text-light hover:text-accent-gold-light px-3 py-2 rounded-md text-base font-semibold transition-all duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-gold-DEFAULT scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </button>
              ))}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-dark focus:ring-accent-gold"
            >
              <span className="sr-only">Abrir menú</span>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavigate(link.path)}
                  className="text-text-light hover:bg-secondary-dark hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;