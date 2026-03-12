import { motion } from "motion/react";
import { Zap, ShieldCheck, AlertCircle, TrendingDown, Clock } from "lucide-react";
import { Section } from "../ui/Section";

const features = [
  {
    title: "Protocolo de Transição Metabólica em 14 Dias",
    desc: "Um passo a passo para impedir que seu corpo entre em “modo recuperação” quando a medicação sair. Você ajusta sinais hormonais e evita que a fome volte de forma agressiva — antes que ela sabote seu resultado.",
    icon: <Zap className="w-6 h-6 text-emerald-500" />
  },
  {
    title: "Arquitetura de Saciedade Natural",
    desc: "Aprenda a montar refeições que ativam saciedade prolongada mesmo sem GLP-1. Combinação exata de proteína, fibra e gordura estratégica para manter controle — mesmo que sua fome comece a aumentar.",
    icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />
  },
  {
    title: "Blindagem Anti-Compulsão Pós-Remédio",
    desc: "Um sistema prático para neutralizar o impulso de “compensar” tudo que ficou reprimido. Você não entra no ciclo de exagero → culpa → descontrole novamente.",
    icon: <AlertCircle className="w-6 h-6 text-emerald-500" />
  },
  {
    title: "Estratégia das 2 Refeições Estruturadas",
    desc: "Para quem se acostumou a comer pouco: como manter o emagrecimento com menos refeições, sem desnutrir e sem perder massa magra.",
    icon: <TrendingDown className="w-6 h-6 text-emerald-500" />
  },
  {
    title: "Plano de Emergência Anti-Rebote 72h",
    desc: "Ganhou 1kg na balança? Sentiu fome fora do normal? Aqui está exatamente o que fazer nas próximas 72 horas para impedir que isso vire 5kg.",
    icon: <Clock className="w-6 h-6 text-emerald-500" />
  }
];

export const Features = () => (
  <Section variant="subtle">
    <h2 className="text-3xl md:text-5xl font-black text-center mb-16 tracking-tight">
      O que você vai desbloquear dentro do <br />
      <span className="text-emerald-500">Plano R$0 Rebote</span>
    </h2>

    <div className="grid md:grid-cols-2 gap-8">
      {features.map((item, i) => (
        <motion.div 
          key={i}
          whileHover={{ y: -5 }}
          className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4"
        >
          <div className="bg-emerald-50 w-12 h-12 rounded-xl flex items-center justify-center">
            {item.icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900 leading-tight">{item.title}</h3>
          <p className="text-gray-600 leading-relaxed">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </Section>
);
