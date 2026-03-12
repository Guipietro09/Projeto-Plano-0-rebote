import { AlertCircle } from "lucide-react";
import { Section } from "../ui/Section";

export const Problem = () => (
  <Section variant="light">
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <div className="h-px flex-1 bg-gray-200"></div>
        <AlertCircle className="w-8 h-8 text-red-500" />
        <div className="h-px flex-1 bg-gray-200"></div>
      </div>
      
      <h2 className="text-3xl md:text-5xl font-black text-center mb-12 tracking-tight">
        Se o remédio acabar amanhã… <br />
        <span className="text-red-600">você está preparado(a)?</span>
      </h2>

      <div className="space-y-8 text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
        <p>
          Emagrecer com Mounjaro é poderoso. Você vê a balança descer, a roupa folgar, a autoestima respirar de novo.
        </p>
        <p className="bg-gray-50 p-6 border-l-4 border-emerald-500 italic">
          “Mas junto com o resultado nasce um medo silencioso: E quando eu parar?”
        </p>
        <p>
          Porque a verdade que ninguém fala é simples: <br />
          <strong>É fácil confiar no remédio. Difícil é confiar em si mesmo depois dele.</strong>
        </p>
        <p>
          Você investiu dinheiro. Suportou enjoo. Mudou alimentação. Sentiu menos fome. Mas o remédio reduziu o apetite — não ensinou seu corpo a manter o novo peso sozinho.
        </p>
        <p className="text-red-600 font-bold">
          Se a caneta acabar sem estratégia, o organismo pode reagir. A fome aumenta. A ansiedade reaparece. A compulsão testa seus limites.
        </p>
        <p>
          E o efeito rebote não acontece por falta de força. <strong>Acontece por falta de transição.</strong>
        </p>
        <div className="py-12 text-center">
          <h3 className="text-2xl md:text-4xl font-black mb-4">O problema nunca foi emagrecer.</h3>
          <p className="text-emerald-600 text-3xl md:text-5xl font-black uppercase tracking-tighter">O problema é sustentar.</p>
        </div>
        <p>
          O Plano R$0 Rebote existe para transformar essa fase em independência metabólica. Para que, quando a medicação sair, você continue no controle.
        </p>
        <p className="font-bold text-gray-900">
          Não é sobre depender menos do remédio. É sobre depender mais da estrutura certa.
        </p>
        <p className="text-center text-2xl font-black pt-8">
          Se acabar amanhã, você não entra em pânico. <br />
          <span className="text-emerald-500">Você executa.</span>
        </p>
      </div>
    </div>
  </Section>
);
