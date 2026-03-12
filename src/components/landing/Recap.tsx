import { CheckCircle2 } from "lucide-react";
import { Section } from "../ui/Section";
import { CTAButton } from "../ui/Button";

const items = [
  "Plano R$0 Rebote",
  "Protocolo de Transição Metabólica",
  "Arquitetura de Saciedade Natural",
  "Estratégia das 2 Refeições Estruturadas",
  "Plano de Emergência 72h",
  "Roteiro de Desmame Estratégico",
  "Cardápio Estrutural Anti-Rebote",
  "Sistema de Controle de Crise Emocional"
];

export const Recap = () => (
  <Section variant="light">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-4xl font-black text-center mb-12 tracking-tight">Recapitulando tudo que você vai receber:</h2>
      
      <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100">
        <ul className="space-y-4 mb-12">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-3 font-bold text-gray-700">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              {item}
            </li>
          ))}
        </ul>
        <div className="text-center border-t border-gray-200 pt-8">
          <p className="text-2xl font-black mb-6">Tudo isso por apenas <span className="text-emerald-600">R$97</span>.</p>
          <CTAButton text="QUERO MANTER MEU RESULTADO AGORA" />
        </div>
      </div>
    </div>
  </Section>
);
