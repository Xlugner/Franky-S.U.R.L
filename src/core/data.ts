import type { Service, Project } from './types';
import {  ComputerIcon, Building, Hammer, PaintRollerIcon, BedDouble, ArmchairIcon, ShoppingBagIcon,TruckElectric,WashingMachine } from 'lucide-react';
//Camas
import BedOne from '../assets/gallery/cama 1.webp';
import BedTwo from '../assets/gallery/cama 2.webp';
import BedThree from '../assets/gallery/cama 3.webp';
import BedFour from '../assets/gallery/cama y mesita 1.webp';
import BedFive from '../assets/gallery/cama y mesita 2.webp';
//Simples de hierro
import ChairOne from '../assets/gallery/banqueta 1.webp';
import ChairTwo from '../assets/gallery/banqueta 2.webp';
import TableOne from '../assets/gallery/mesita 1.webp';
import PaloOne from '../assets/gallery/palo 1.webp';
//Zoo
import ZooOne from '../assets/Zoo/Zoo 1.png';
import ZooTwo from '../assets/Zoo/Zoo 2.png';
import ZooThree from '../assets/Zoo/Zoo 3.png';
import ZooFour from '../assets/Zoo/Zoo 4.png';



export const servicesData: Service[] = [
  { category: 'Herrería', title: 'Servicios de fundición de hierro y acero', description: 'Elaboración de camas de tipos cameras y personales o a pedido. Elaboración de mesas, sillas, banquetas, porta bolsos, estante para baños, bases para equipos, soportes de pared para tv, mesas de noche, parrillas, rejas, marqueterías, mesas de centro, cómodas, estantes, portones y puertas, equipamientos para gimnasios, camas para masaje, mesas integrales para cafeterías, estructuras para techos, porta cubiertos, bancos para parques, taquillas, etc..', icon: BedDouble },
  { category: 'Decoración', title: 'Elaborar y comercializar muebles', description: 'Diseño, construcción y comercialización de muebles de todo tipo (metálicos, madera, plásticos,etc.) a solicitud del cliente.', icon: ArmchairIcon },
  { category: 'Construcción', title: 'Construcción civil y montaje de nuevas obras', description: 'Construcción de viviendas de diferentes tipologías, almacenes, talleres, casetas, garitas, cercados perimetrales, cisternas, filtros sanitarios, naves.', icon: Hammer },
  { category: 'Decoración', title: 'Diseños gráficos.', description: 'Diseños de carteles, slogan, logotipos para empresas y personas naturales.', icon: ComputerIcon },
  { category: 'Decoración', title: 'Decoración de interior y diseño y confección de moda', description: 'Diseño de telas para confección de cortinas, sabanas, manteles y ropas: diseño de prendas de vestir para adultos y niños, diseño calzado y joyas: decoración de interiores, etc.', icon: ShoppingBagIcon },
  { category: 'Construcción', title: 'Terminación y acabado de edificios.', description: 'Pintura de edificaciones, rehabilitación de estructuras de hormigón y metálicas, sustitución y mejoramiento de pisos, sustitución de carpinterías, colocación de falso techos, enchapes de mesetas, baños y muros, elaboración y colocación de rejas de protección, colocación de cubiertas en techos.', icon: PaintRollerIcon },
  { category: 'Construcción', title: 'Esculturas y Instalaciones eléctricas', description: 'Instalaciones eléctricas integrales, colocación alumbrado público y en interior de instalaciones, instalación de paneles fotovoltaicos, elaboración e instalación de pizarras para todo tipo de equipos.', icon: TruckElectric },
  { category: 'Construcción', title: 'Instalaciones de fontanería y aire acondicionado', description: 'Rehabilitación e Instalaciones hidráulico-sanitarias en baños, montaje y desmontaje de aparatos sanitarios, reparación y sustitución de herrajes de tanques de tasas sanitarias, montaje de tanques con instalación hidráulica, instalación de aires acondicionados de todo tipo.', icon: WashingMachine },
  { category: 'Construcción', title: 'Actividades especializadas de construcción', description: 'Impermeabilización de cubiertas (mantas, rasilla, atesados, pintura), rehabilitación de piscinas, construcción de fosas mouras, sistemas de drenaje de aguas pluviales y albañales, construcción de lagunas y estanques.', icon: Building },
];

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Camas de hierro",
    description: "Camas de tipos cameras y personales hechas a pedidos y a medida",
    imageUrl: BedOne,
    gallery: [
      BedOne,
      BedTwo,
      BedThree,
      BedFour,
      BedFive
    ],
    tags: ["camas", "bastidor"],
    categories: ["Herrería", "Comercial"],
    status: "Completado",
    location: "Granma",
    year: 2025,
    details: {
      duration: "2 semanas",
      materials: ["Acero inoxidable", "Madera Caoba"]
    }
  },
  {
    id: 2,
    title: "Trabajos simples con hierro",
    description: "Elaboraciones de hierro simples como mesitas de noche,porta bolsos,etc.",
    imageUrl: ChairOne,
    gallery: [
      ChairOne,
      ChairTwo,
      PaloOne,
      TableOne
    ],
    tags: ["mesita de noche", "porta bolso", "banqueta"],
    categories: ["Herrería", "Decoración","Comercial"],
    status: "Completado",
    location: "Granma",
    year: 2025,
    details: {
      duration: "1 semana",
      materials: ["Perfiles de acero", "Chapas acanaladas"]
    }
  },
  {
    id: 3,
    title: "Parque Zoológico Cayo Coco",
    description: "Restauración y creación de nuevas áreas en el parque del zoológico de Cayo Coco.",
    imageUrl: ZooOne,
    gallery: [
      ZooOne,
      ZooTwo,
      ZooThree,
      ZooFour
    ],
    tags: ["obras públicas", "acero", "exteriores"],
    categories: ["Construcción", "Obra Pública"],
    status: "En progreso",
    location: "Matanzas",
    year: 2025,
    details: {
      duration: "4 meses",
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
      duration: "6 meses",
      materials: ["Hierro forjado", "Pátinas especiales"]
    }
  }
];
