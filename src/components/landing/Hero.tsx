import { motion } from "motion/react";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { CTAButton } from "../ui/Button";
import { BrandLogo } from "../ui/BrandLogo";

export const Hero = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] text-white px-4 py-20 overflow-hidden">
    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900 via-transparent to-transparent"></div>
    
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 max-w-4xl text-center"
    >
      <BrandLogo size="md" className="mb-8 opacity-80" />
      <span className="inline-block bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
        Protocolo de Manutenção Invisível
      </span>
      <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter leading-none">
        PLANO <span className="text-emerald-500">R$0</span> REBOTE
      </h1>
      <p className="text-xl md:text-2xl font-medium text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
        Continue emagrecendo ou mantenha o peso mesmo sem comprar a próxima caneta.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm font-semibold text-gray-400 mb-12">
        <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Sem desespero financeiro</span>
        <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Sem voltar aos velhos hábitos</span>
        <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Sem efeito sanfona</span>
      </div>
      <CTAButton text="QUERO MANTER MEU RESULTADO AGORA" />
      <p className="mt-6 text-xs text-gray-500 uppercase tracking-widest font-bold">
        Apenas um protocolo de manutenção invisível — mesmo que o remédio acabe amanhã.
      </p>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
    >
      <ChevronDown className="w-6 h-6 text-gray-600 animate-bounce" />
    </motion.div>
  </section>
);
