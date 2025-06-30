import React from 'react';

export type Service = {
  category: 'Herrería' | 'Construcción' | 'Decoración';
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

export type ProjectDetails = {
  area?: string;
  duration?: string;
  materials?: string[];
};

export type Project = {
  id: string | number;
  title: string;
  description: string;
  imageUrl: string;
  gallery: string[];
  tags?: string[];
  categories: string[];
  status?: 'Completado' | 'En progreso' | 'Planificado';
  location?: string;
  year?: string | number;
  details?: ProjectDetails;
};
