import { motion } from "motion/react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Section } from "../ui/Section";

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left font-bold text-gray-800 hover:text-emerald-600 transition-colors cursor-pointer"
      >
        <span className="text-lg">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      {isOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="mt-4 text-gray-600 leading-relaxed"
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
};

export const FAQ = () => (
  <Section variant="subtle">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-black text-center mb-16 tracking-tight">Perguntas Frequentes</h2>
      
      <div className="space-y-2">
        <FAQItem 
          question="Preciso estar parando agora para aplicar?" 
          answer="Não. Quanto antes preparar o corpo, menor o risco de rebote. O protocolo serve tanto para quem está no meio do tratamento quanto para quem já está na fase final."
        />
        <FAQItem 
          question="Funciona se eu já tive compulsão alimentar?" 
          answer="Sim. O plano inclui blindagem comportamental e estratégias de saciedade natural justamente para neutralizar gatilhos de compulsão pós-retirada do remédio."
        />
        <FAQItem 
          question="Vou precisar pesar comida ou contar calorias?" 
          answer="Não. A estrutura de saciedade e o cardápio estrutural eliminam a necessidade de pesagem constante ou cálculos complexos."
        />
        <FAQItem 
          question="É específico para Mounjaro?" 
          answer="Serve para qualquer GLP-1 (Mounjaro, Wegovy, Ozempic, Saxenda ou Tirzepatida), pois trabalha a resposta metabólica universal do corpo à saída dessas substâncias."
        />
        <FAQItem 
          question="E se não funcionar para mim?" 
          answer="Você tem 7 dias de garantia incondicional. Se por qualquer motivo você achar que o plano não é para você, basta pedir o reembolso e seu dinheiro volta integralmente."
        />
      </div>
    </div>
  </Section>
);
