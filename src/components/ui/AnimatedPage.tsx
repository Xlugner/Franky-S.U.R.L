import React from 'react';
import { motion } from 'framer-motion';

const AnimatedPage = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className="min-h-[calc(100vh-12rem)] flex flex-col font-inter" // Ajusta esta altura para dejar espacio al navbar y footer
  >
    {children}
  </motion.div>
);

export default AnimatedPage;
