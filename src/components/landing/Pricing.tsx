import { ShieldCheck } from "lucide-react";
import { Section } from "../ui/Section";
import { CTAButton } from "../ui/Button";

export const Pricing = () => (
  <Section variant="accent" className="text-center">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight">Faça as contas…</h2>
      <p className="text-xl md:text-2xl font-medium mb-12 opacity-90">
        Uma única caneta pode custar centenas ou milhares. <br />
        Se você recuperar peso, vai gastar novamente com:
      </p>
      
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        <span className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full font-bold border border-white/20">Consultas</span>
        <span className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full font-bold border border-white/20">Exames</span>
        <span className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full font-bold border border-white/20">Nova fase de medicação</span>
      </div>

      <p className="text-2xl font-bold mb-12">
        Facilmente entre <span className="underline">R$3.000 e R$8.000</span> em poucos meses. <br />
        E o pior: repetindo o mesmo ciclo.
      </p>

      <div className="bg-white text-gray-900 p-12 rounded-[3rem] shadow-2xl max-w-xl mx-auto">
        <p className="text-sm font-bold uppercase tracking-widest text-emerald-600 mb-4">Oferta Especial de Lançamento</p>
        <p className="text-lg font-medium mb-2">Hoje você garante o Plano R$0 Rebote por apenas</p>
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-2xl font-bold text-gray-400 line-through">R$297</span>
          <span className="text-6xl font-black text-emerald-600">R$97</span>
        </div>
        <p className="text-sm text-gray-500 mb-8">Menos do que uma fração de uma única aplicação.</p>
        <CTAButton text="QUERO MANTER MEU RESULTADO AGORA" className="w-full" />
        <div className="mt-6 flex items-center justify-center gap-4 opacity-50">
          <ShieldCheck className="w-5 h-5" />
          <span className="text-xs font-bold uppercase tracking-widest">Compra 100% Segura</span>
        </div>
      </div>
    </div>
  </Section>
);
