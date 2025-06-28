import { motion } from 'framer-motion';

const LoadingSpinner = () => (
    <div className="flex justify-center items-center min-h-[calc(100vh-12rem)] bg-primary-dark text-white font-inter">
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-t-transparent border-accent-gold rounded-full"
        />
    </div>
);

export default LoadingSpinner;
