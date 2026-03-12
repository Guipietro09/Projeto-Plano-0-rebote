import { CheckCircle2 } from "lucide-react";
import { Section } from "../ui/Section";

const items = [
  "Para quem já perdeu peso com Mounjaro, Wegovy ou Tirzepatida — e quer proteger esse resultado.",
  "Para quem sabe que a fase do remédio não é eterna.",
  "Para quem já viveu efeito sanfona e não aceita passar por isso de novo.",
  "Para quem tem histórico de compulsão e quer segurança antes da retirada.",
  "Para quem quer sair dessa fase independente — não dependente."
];

export const ForWhom = () => (
  <Section variant="light">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tight">Para quem é:</h2>
      
      <div className="space-y-6 text-left max-w-2xl mx-auto">
        {items.map((text, i) => (
          <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-emerald-50 transition-colors">
            <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
            <p className="text-lg font-semibold text-gray-700">{text}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);
