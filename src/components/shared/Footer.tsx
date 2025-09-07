import { Phone, Send, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'; // Asegúrate de importar Facebook, Instagram, Linkedin


const Footer = () => {
  return (
    <footer className="bg-primary-dark text-text-light py-10 font-inter shadow-inner shadow-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-2">Franky S.U.R.L.</h3>
            <p className="text-gray-400 leading-relaxed">Forjando ideas, construyendo realidades con pasión y precisión. Expertos en herrería artística, estructuras y decoración.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-2">Contacto Rápido</h3>
            <p className="flex items-center text-text-light hover:text-accent-gold transition-colors">
                <Phone className="mr-3 h-5 w-5 text-accent-gold" /> 
                <a href="tel:+34123456789">+53 51089594</a>
            </p>
            <p className="flex items-center text-text-light hover:text-accent-gold transition-colors">
                <Send className="mr-3 h-5 w-5 text-accent-gold" /> 
                <a href="mailto:info@frankyherreria.com">leyvamatamoro@gmail.com</a>
            </p>
            <p className="flex items-center text-text-light">
                <MapPin className="mr-3 h-5 w-5 text-accent-gold" /> 
                Calle Línea #178 entre 12 y Manuel del Socorro,Roberto Reyes, Bayamo-Granma
            </p>
          </div>
          <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-2">Síguenos</h3>
              <div className="flex space-x-6">
                <a href="#" className="text-text-light hover:text-accent-gold transition-colors">
                    <Facebook size={28} />
                </a>
                <a href="#" className="text-text-light hover:text-accent-gold transition-colors">
                    <Instagram size={28} />
                </a>
                <a href="#" className="text-text-light hover:text-accent-gold transition-colors">
                    <Linkedin size={28} />
                </a>
              </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Herrerías y Decoraciones Franky S.U.R.L. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
