import AnimatedPage from "../../components/ui/AnimatedPage";

const AboutPage = () => (
    <AnimatedPage>
        <div className="bg-secondary-dark text-text-light py-16 sm:py-24 px-4 font-inter">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Sobre Nosotros</h2>
                <p className="text-lg md:text-xl text-text-light leading-relaxed mb-8">
                   En CONSTRUCCIONES, HERRERÍA Y DECORACIONES FRANKY S.U.R.L, combinamos la tradición artesanal con la innovación tecnológica para ofrecer soluciones de metalistería de la más alta calidad. Con años de experiencia, nuestro equipo de expertos se dedica a transformar ideas en realidades duraderas y estéticas.
                </p>
                <div className="bg-primary-dark p-8 rounded-xl shadow-xl border border-gray-700/50">
                    <h3 className="text-3xl font-bold text-accent-gold mb-4">Nuestra Misión</h3>
                    <p className="text-text-light text-base leading-relaxed">
                        Ser líderes en el diseño y fabricación de productos metálicos, superando las expectativas de nuestros clientes a través de la creatividad, la calidad y un servicio excepcional.
                    </p>
                    <h3 className="text-3xl font-bold text-accent-gold mt-8 mb-4">Nuestros Valores</h3>
                    <ul className="text-text-light text-left list-disc list-inside space-y-2">
                        <li>**Calidad:** Compromiso con la excelencia en cada detalle.</li>
                        <li>**Innovación:** Búsqueda constante de nuevas técnicas y diseños.</li>
                        <li>**Integridad:** Transparencia y honestidad en todas nuestras operaciones.</li>
                        <li>**Responsabilidad:** Dedicación al cumplimiento y sostenibilidad.</li>
                        <li>**Pasión:** Amor por el arte del metal y lo que hacemos.</li>
                    </ul>
                </div>
                <div className="mt-12">
                    <img 
                        src="https://placehold.co/1200x600/1a202c/a0aec0?text=Nuestro+Equipo+Trabajando" 
                        alt="Equipo de Franky S.U.R.L. trabajando" 
                        className="w-full h-auto rounded-xl shadow-lg border border-gray-700/50 object-cover"
                    />
                </div>
            </div>
        </div>
    </AnimatedPage>
);

export default AboutPage;