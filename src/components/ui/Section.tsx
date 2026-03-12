import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "light" | "dark" | "subtle" | "accent";
}

export const Section = ({ children, className = "", id, variant = "light" }: SectionProps) => {
  const variants = {
    light: "bg-white text-gray-900",
    dark: "bg-[#0a0a0a] text-white",
    subtle: "bg-gray-50 text-gray-900 border-y border-gray-100",
    accent: "bg-emerald-500 text-white",
  };

  return (
    <section id={id} className={`py-24 px-4 ${variants[variant]} ${className}`}>
      <div className="max-w-5xl mx-auto">
        {children}
      </div>
    </section>
  );
};
