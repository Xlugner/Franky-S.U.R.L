import { motion } from "framer-motion";
import React from "react";

// Componente flotante de WhatsApp
const WhatsAppButton: React.FC = () => (
    <motion.a
        href="https://wa.me/+53 51089594"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-accent-gold-dark hover:bg-accent-gold-dark text-white rounded-full shadow-lg p-4 flex items-center justify-center"
        aria-label="WhatsApp"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.15 }}
    >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
            <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.624 1.938 6.594L4 29l7.594-1.938A12.94 12.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-2.162 0-4.271-.627-6.094-1.813l-.438-.281-4.5 1.156 1.156-4.5-.281-.438C5.627 19.271 5 17.162 5 15c0-6.065 4.935-11 11-11s11 4.935 11 11-4.935 11-11 11zm5.188-6.219c-.281-.141-1.656-.812-1.906-.906-.25-.094-.438-.141-.625.141-.188.281-.719.906-.875 1.094-.156.188-.312.219-.594.078-.281-.141-1.188-.438-2.25-1.344-.832-.742-1.395-1.656-1.563-1.938-.156-.281-.016-.438.125-.578.125-.125.281-.328.422-.484.141-.156.188-.266.281-.438.094-.188.047-.344-.016-.484-.062-.141-.625-1.5-.859-2.062-.227-.547-.457-.469-.625-.477-.156-.008-.344-.008-.531-.008-.188 0-.484.062-.734.297-.25.234-.969.953-.969 2.328 0 1.375.992 2.703 1.125 2.891.141.188 1.953 2.984 4.75 4.062.664.273 1.18.438 1.584.562.664.211 1.27.18 1.75.109.531-.078 1.656-.68 1.891-1.336.234-.656.234-1.219.164-1.336-.062-.125-.234-.188-.484-.328z"/>
        </svg>
    </motion.a>
);

export default WhatsAppButton;