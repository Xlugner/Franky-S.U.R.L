import React from 'react';

export type Service = {
  category: 'Herrería' | 'Construcción' | 'Decoración';
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

export type Project = {
  id: number;
  title: string;
  category: string;
  year: number;
  imageUrl: string;
  description: string;
};
