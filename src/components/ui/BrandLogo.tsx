import { motion } from "motion/react";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "light" | "dark";
}

export const BrandLogo = ({ className = "", size = "md", variant = "light" }: BrandLogoProps) => {
  const sizes = {
    sm: "h-8",
    md: "h-12",
    lg: "h-20",
    xl: "h-20 md:h-32",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`flex items-center justify-center ${className}`}
    >
      <img
        src="https://i.postimg.cc/MGLCJZ65/imagem-logo-nova.png"
        alt="Plano R$0 Rebote Logo"
        className={`${sizes[size]} w-auto object-contain brightness-0 invert`}
        referrerPolicy="no-referrer"
      />
    </motion.div>
  );
};
