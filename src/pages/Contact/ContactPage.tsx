import { useState } from "react";
import emailjs from '@emailjs/browser';
import AnimatedPage from "../../components/ui/AnimatedPage";
import { Phone, Send, MapPin, Mail } from "lucide-react";

// Obtener las variables de entorno
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_47drsze';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_48dmfl3';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'cmoIvJCdONnoqUBZy';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formData,
                EMAILJS_PUBLIC_KEY
            );
            
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setStatus(''), 3000);
        } catch (error) {
            console.error('Error al enviar el correo:', error);
            setStatus('error');
        }
    };

    return (
        <AnimatedPage>
            <div className="bg-secondary-dark text-text-light py-16 sm:py-24 px-4 font-inter">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white">Contáctanos</h2>
                        <p className="mt-6 max-w-3xl mx-auto text-lg text-text-light leading-relaxed">
                            ¿Tienes un proyecto en mente o alguna pregunta? Estaremos encantados de escucharte. Rellena el formulario o contáctanos directamente.
                        </p>
                    </div>

                    <div className="bg-primary-dark p-8 md:p-12 rounded-xl shadow-xl border border-gray-700/50 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Contact Form */}
                        <div>
                            <h3 className="text-3xl font-bold text-accent-gold mb-6">Envíanos un Mensaje</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-text-light text-sm font-semibold mb-2">Nombre Completo</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-secondary-dark text-white rounded-lg border border-gray-600 focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-colors"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-text-light text-sm font-semibold mb-2">Correo Electrónico</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-secondary-dark text-white rounded-lg border border-gray-600 focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-colors"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-text-light text-sm font-semibold mb-2">Asunto</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-secondary-dark text-white rounded-lg border border-gray-600 focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-colors"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-text-light text-sm font-semibold mb-2">Tu Mensaje</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        className="w-full px-4 py-3 bg-secondary-dark text-white rounded-lg border border-gray-600 focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-colors resize-y"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-accent-gold-dark text-primary-dark font-bold py-3 rounded-lg hover:bg-accent-gold transition-all duration-300 shadow-lg hover:shadow-accent-gold/40 transform hover:-translate-y-1 active:scale-95 flex items-center justify-center"
                                    disabled={status === 'sending'}
                                >
                                    {status === 'sending' ? (
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    ) : (
                                        <>
                                            Enviar Mensaje <Send className="ml-2 h-5 w-5" />
                                        </>
                                    )}
                                </button>
                                {status === 'success' && (
                                    <p className="mt-4 text-center text-green-400 font-semibold">¡Mensaje enviado con éxito!</p>
                                )}
                                {status === 'error' && (
                                    <p className="mt-4 text-center text-red-400 font-semibold">Error al enviar el mensaje. Inténtalo de nuevo.</p>
                                )}
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-col justify-between">
                            <h3 className="text-3xl font-bold text-accent-gold mb-6">Información de Contacto</h3>
                            <div className="space-y-6 text-lg text-text-light">
                                <p className="flex items-center">
                                    <Phone className="mr-4 h-6 w-6 text-accent-gold" /> 
                                    <a href="tel:+34123456789" className="hover:text-accent-gold-light transition-colors">+34 123 456 789</a>
                                </p>
                                <p className="flex items-center">
                                    <Mail className="mr-4 h-6 w-6 text-accent-gold" /> 
                                    <a href="mailto:info@frankyherreria.com" className="hover:text-accent-gold-light transition-colors">info@frankyherreria.com</a>
                                </p>
                                <p className="flex items-start">
                                    <MapPin className="mr-4 h-6 w-6 text-accent-gold flex-shrink-0 mt-1" /> 
                                    <span>Calle Ficticia 123, <br/> 08001 Ciudad, País</span>
                                </p>
                            </div>
                            <div className="mt-8">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3167.334468603417!2d-0.4578844846931551!3d37.99229987972033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd637956b9c9f2b1%3A0x6a5d4e1f7c2b3a1a!2sPlaza%20de%20Luceros%2C%20Alicante!5e0!3m2!1ses!2ses!4v1678901234567!5m2!1ses!2ses"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen={false}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="rounded-xl shadow-lg border border-gray-700/50"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default ContactPage;