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
];

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Residencia Moderna",
    description: "Portón y vallas para una residencia de lujo en zona residencial exclusiva.",
    imageUrl: "https://placehold.co/600x400/1a202c/a0aec0?text=Residencia+Moderna",
    gallery: [
      "https://placehold.co/800x600/1a202c/a0aec0?text=Residencia+1",
      "https://placehold.co/800x600/2d3748/a0aec0?text=Residencia+2",
      "https://placehold.co/800x600/4a5568/a0aec0?text=Residencia+3"
    ],
    tags: ["portones", "rejas", "residencial"],
    categories: ["Herrería", "Residencial"],
    status: "Completado",
    location: "Buenos Aires",
    year: 2023,
    details: {
      area: "25 m²",
      duration: "2 semanas",
      materials: ["Acero inoxidable", "Vidrio templado"]
    }
  },
  {
    id: 2,
    title: "Nave Industrial",
    description: "Estructura metálica completa para centro logístico en zona industrial.",
    imageUrl: "https://placehold.co/600x800/1a202c/a0aec0?text=Nave+Industrial",
    gallery: [
      "https://placehold.co/800x600/1a202c/a0aec0?text=Nave+1",
      "https://placehold.co/800x600/2d3748/a0aec0?text=Nave+2"
    ],
    tags: ["estructuras", "industrial", "galpón"],
    categories: ["Construcción", "Industrial"],
    status: "En progreso",
    location: "Córdoba",
    year: 2024,
    details: {
      area: "1500 m²",
      duration: "3 meses",
      materials: ["Perfiles de acero", "Chapas acanaladas"]
    }
  },
  {
    id: 3,
    title: "Cafetería 'El Forjado'",
    description: "Mobiliario y detalles decorativos en hierro para cafetería de autor.",
    imageUrl: "https://placehold.co/600x600/1a202c/a0aec0?text=Cafetería+El+Forjado",
    gallery: [
      "https://placehold.co/800x600/1a202c/a0aec0?text=Cafetería+1",
      "https://placehold.co/800x600/2d3748/a0aec0?text=Cafetería+2",
      "https://placehold.co/800x600/4a5568/a0aec0?text=Cafetería+3"
    ],
    tags: ["mobiliario", "decoración", "interiores"],
    categories: ["Decoración", "Comercial"],
    status: "Completado",
    location: "Mendoza",
    year: 2023,
    details: {
      area: "120 m²",
      duration: "1 mes",
      materials: ["Hierro forjado", "Madera reciclada"]
    }
  },
  {
    id: 4,
    title: "Puente Peatonal",
    description: "Diseño y construcción de un puente peatonal de acero sobre arroyo en parque público.",
    imageUrl: "https://placehold.co/600x400/1a202c/a0aec0?text=Puente+Peatonal",
    gallery: [
      "https://placehold.co/800x600/1a202c/a0aec0?text=Puente+1",
      "https://placehold.co/800x600/2d3748/a0aec0?text=Puente+2"
    ],
    tags: ["puentes", "obras públicas", "acero"],
    categories: ["Construcción", "Obra Pública"],
    status: "Completado",
    location: "Rosario",
    year: 2021,
    details: {
      area: "30 m de largo",
      duration: "2 meses",
      materials: ["Acero estructural", "Pintura epoxi"]
    }
  },
  {
    id: 5,
    title: "Diseño de Jardín",
    description: "Elementos decorativos y fuentes de metal para jardines de hotel boutique.",
    imageUrl: "https://placehold.co/600x800/1a202c/a0aec0?text=Diseño+de+Jardín",
    gallery: [
      "https://placehold.co/800x600/1a202c/a0aec0?text=Jardín+1",
      "https://placehold.co/800x600/2d3748/a0aec0?text=Jardín+2"
    ],
    tags: ["jardinería", "decoración", "exteriores"],
    categories: ["Decoración", "Exteriores"],
    status: "Planificado",
    location: "Bariloche",
    year: 2024,
    details: {
      area: "500 m²",
      duration: "3 semanas",
      materials: ["Acero corten", "Piedra"]
    }
  },
  {
    id: 6,
    title: "Restauración Histórica",
    description: "Replicación de herrería artística para fachada de edificio patrimonial.",
    imageUrl: "https://placehold.co/600x600/1a202c/a0aec0?text=Restauración+Histórica",
    gallery: [
      "https://placehold.co/800x600/1a202c/a0aec0?text=Restauración+1",
      "https://placehold.co/800x600/2d3748/a0aec0?text=Restauración+2"
    ],
    tags: ["restauración", "patrimonio", "forja"],
    categories: ["Herrería", "Restauración"],
    status: "Completado",
    location: "San Juan",
    year: 2024,
    details: {
      area: "Fachada completa",
      duration: "6 meses",
      materials: ["Hierro forjado", "Pátinas especiales"]
    }
  }
];
