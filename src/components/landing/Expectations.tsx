import { ArrowRight } from "lucide-react";
import { Section } from "../ui/Section";

export const Expectations = () => (
  <Section variant="dark">
    <div className="grid md:grid-cols-2 gap-16">
      <div>
        <h2 className="text-2xl md:text-4xl font-black mb-8 tracking-tight">Reforço do que você está comprando:</h2>
        <div className="space-y-4 text-gray-400 font-medium">
          <p>Você está comprando um plano de manutenção inteligente.</p>
          <p className="flex items-center gap-2 text-white"><ArrowRight className="w-4 h-4 text-emerald-500" /> Não é dieta nova.</p>
          <p className="flex items-center gap-2 text-white"><ArrowRight className="w-4 h-4 text-emerald-500" /> Não é restrição maluca.</p>
          <p className="flex items-center gap-2 text-white"><ArrowRight className="w-4 h-4 text-emerald-500" /> Não é contagem infinita de calorias.</p>
          <p className="text-emerald-400 font-bold mt-6">É uma estratégia de sustentação metabólica pensada para o momento mais crítico: a saída.</p>
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl md:text-4xl font-black mb-8 tracking-tight">O que você pode esperar:</h2>
        <div className="space-y-8">
          {[
            {
              title: "Manter o peso nas primeiras semanas após reduzir ou parar",
              desc: "Sem sustos repentinos, sem efeito cascata."
            },
            {
              title: "Voltar a confiar no seu próprio corpo",
              desc: "Sem depender da aplicação para se sentir no controle."
            },
            {
              title: "Criar um padrão alimentar sustentável",
              desc: "Que funciona com ou sem medicação."
            }
          ].map((item, i) => (
            <div key={i} className="border-l-2 border-emerald-500 pl-6">
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Section>
);
