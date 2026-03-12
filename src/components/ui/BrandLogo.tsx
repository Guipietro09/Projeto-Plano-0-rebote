import { motion } from "motion/react";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
}

export const BrandLogo = ({ className = "", size = "md", variant = "light" }: BrandLogoProps) => {
  const sizes = {
    sm: "h-8",
    md: "h-12",
    lg: "h-20",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`flex items-center justify-center ${className}`}
    >
      <img
        src="https://drive.google.com/uc?id=1VfN1dpnoLpyjoFalzzHyocy_aEqppC9K"
        alt="Plano R$0 Rebote Logo"
        className={`${sizes[size]} w-auto object-contain ${variant === "dark" ? "brightness-0 invert" : ""}`}
        referrerPolicy="no-referrer"
      />
    </motion.div>
  );
};
