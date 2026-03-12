import { motion } from "motion/react";

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

export const CTAButton = ({ text, className = "", onClick }: ButtonProps) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold py-4 px-8 rounded-full shadow-xl transition-all duration-300 uppercase tracking-wider text-sm md:text-base cursor-pointer ${className}`}
  >
    {text}
  </motion.button>
);
