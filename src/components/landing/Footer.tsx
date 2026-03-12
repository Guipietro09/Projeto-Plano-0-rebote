import { CTAButton } from "../ui/Button";
import { BrandLogo } from "../ui/BrandLogo";

export const Footer = () => (
  <section className="py-24 px-4 bg-[#0a0a0a] text-white text-center">
    <div className="max-w-4xl mx-auto">
      <BrandLogo size="md" className="mb-12 opacity-30" />
      <div className="space-y-6 text-xl md:text-2xl font-medium text-gray-300 mb-16 leading-relaxed">
        <p>O remédio pode iniciar o processo.</p>
        <p className="text-white font-bold">Mas só a estrutura mantém o resultado.</p>
        <p>Você pode sair dessa fase mais forte, <br /> ou sair vulnerável e torcendo para a balança colaborar.</p>
        <p className="text-emerald-500 text-3xl md:text-5xl font-black uppercase tracking-tighter pt-8">
          Independência não acontece por sorte. <br />
          <span className="text-white">Acontece por estratégia.</span>
        </p>
      </div>
      
      <CTAButton text="COMEÇAR MINHA TRANSFORMAÇÃO AGORA" />
      
      <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 opacity-40 text-[10px] font-bold uppercase tracking-[0.2em]">
        <span>© 2026 Plano R$0 Rebote. Todos os direitos reservados.</span>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
        </div>
      </div>
    </div>
  </section>
);
