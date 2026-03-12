import { Section } from "../ui/Section";

const bonuses = [
  {
    num: "01",
    title: "Roteiro de Desmame Estratégico",
    desc: "Como reduzir ou espaçar a aplicação sem gerar choque metabólico. Você segue uma lógica de transição — não um corte abrupto que ativa o rebote."
  },
  {
    num: "02",
    title: "Cardápio Estrutural Anti-Rebote",
    desc: "Modelos reais de refeições organizadas para manter saciedade, preservar massa e evitar compulsão. Sem precisar calcular nada."
  },
  {
    num: "03",
    title: "Sistema de Controle de Crise Emocional",
    desc: "Um protocolo simples para os momentos de ansiedade, TPM, estresse ou gatilho emocional — quando a comida costuma virar válvula de escape."
  }
];

export const Bonuses = () => (
  <Section variant="light">
    <h2 className="text-3xl md:text-5xl font-black text-center mb-16 tracking-tight">Bônus Exclusivos</h2>
    
    <div className="grid md:grid-cols-3 gap-8">
      {bonuses.map((bonus, i) => (
        <div key={i} className="relative p-8 bg-emerald-50 rounded-3xl overflow-hidden group flex flex-col h-full border border-emerald-100/50">
          <span className="absolute -top-4 -right-4 text-8xl font-black text-emerald-100 group-hover:text-emerald-200 transition-colors">
            {bonus.num}
          </span>
          <div className="relative z-10 flex-1 flex flex-col">
            <h3 className="text-xl font-black mb-4 leading-tight">Bônus #{bonus.num}: <br />{bonus.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed flex-1">{bonus.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </Section>
);
