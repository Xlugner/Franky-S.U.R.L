import type { Service, Project } from './types';
import { Home, Wrench, Building, Sparkles } from 'lucide-react';

export const servicesData: Service[] = [
  { category: 'Herrería', title: 'Portones y Rejas', description: 'Diseño y fabricación de portones automáticos y rejas de seguridad a medida.', icon: Home },
  { category: 'Herrería', title: 'Barandillas y Pasamanos', description: 'Creación de barandillas para escaleras y balcones con diseños únicos.', icon: Wrench },
  { category: 'Construcción', title: 'Estructuras Metálicas', description: 'Construcción de vigas, columnas y techos para naves industriales y comerciales.', icon: Building },
  { category: 'Decoración', title: 'Mobiliario de Diseño', description: 'Muebles de interior y exterior en hierro forjado: mesas, sillas, estanterías.', icon: Sparkles },
  { category: 'Herrería', title: 'Escaleras Metálicas', description: 'Fabricamos escaleras rectas, de caracol y de diseño para cualquier espacio.', icon: Wrench },
  { category: 'Construcción', title: 'Cerramientos y Pérgolas', description: 'Instalación de pérgolas bioclimáticas y cerramientos de alta calidad.', icon: Building },
  { category: 'Decoración', title: 'Esculturas y Adornos', description: 'Piezas artísticas de metal para jardines y espacios interiores.', icon: Sparkles },
  // ... resto de servicios
];

export const projectsData: Project[] = [
  { id: 1, title: "Residencia Moderna", category: "Herrería", year: 2023, imageUrl: "https://placehold.co/600x400/1a202c/a0aec0?text=Proyecto+1", description: "Portón y vallas para una residencia de lujo." },
  { id: 2, title: "Nave Industrial", category: "Construcción", year: 2022, imageUrl: "https://placehold.co/600x800/1a202c/a0aec0?text=Proyecto+2", description: "Estructura metálica completa para centro logístico." },
  { id: 3, title: "Cafetería 'El Forjado'", category: "Decoración", year: 2023, imageUrl: "https://placehold.co/600x600/1a202c/a0aec0?text=Proyecto+3", description: "Mobiliario y detalles decorativos en hierro." },
  { id: 4, title: "Puente Peatonal", category: "Construcción", year: 2021, imageUrl: "https://placehold.co/600x400/1a202c/a0aec0?text=Proyecto+4", description: "Diseño y construcción de un puente peatonal de acero." },
  { id: 5, title: "Diseño de Jardín", category: "Decoración", year: 2022, imageUrl: "https://placehold.co/600x800/1a202c/a0aec0?text=Proyecto+5", description: "Elementos decorativos y fuentes de metal para jardines." },
  { id: 6, title: "Restauración Histórica", category: "Herrería", year: 2024, imageUrl: "https://placehold.co/600x600/1a202c/a0aec0?text=Proyecto+6", description: "Replicación de herrería artística para edificio antiguo." },
];
