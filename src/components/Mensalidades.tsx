import { LuCheck } from "react-icons/lu";

export function Mensalidades() {
  return (
    <section id="Mensalidades" className="bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto py-32 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center pb-8">
          TIPOS DE <span className="text-[#a3de06]">MENSALIDADES</span>
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8">
          <div className="border p-8 w-80 h-fit flex flex-col gap-8 hover:scale-105 duration-300 cursor-pointer">
            <p className="text-lg text-center font-bold text-[#a3de06]">
              MUSCULAÇÃO
            </p>
            <div className="flex gap-4 font-bold items-center justify-center">
              <p className="text-4xl ">R$90</p>
              <p>p/mês</p>
            </div>
            <div className="space-y-4">
              <p className="flex items-start gap-2">
                <LuCheck size="20px" color="#a3de06" />Acesso Livre à Área de Musculação
              </p>
              <p className="flex items-center gap-2">
                <LuCheck size="20px" color="#a3de06" />Treinos Personalizados
              </p>
              <p className="flex items-center gap-2">
                <LuCheck size="20px" color="#a3de06" /> Foco em Resultados
              </p>
              <p className="flex items-center gap-2">
                <LuCheck size="20px" color="#a3de06" />Flexibilidade de Horários
              </p>
              <p className="flex items-center gap-2">
                <LuCheck size="20px" color="#a3de06" />Ambiente Motivador
              </p>
            </div>
            <a href="#" className="bg-[#252060] hover:bg-blue-950 duration-300 text-center py-2">
              Saiba Mais
            </a>
          </div>

          <div className="border bg-[#252060] p-8 w-80 h-[520px] flex flex-col gap-8 hover:scale-105 duration-300 cursor-pointer">
            <p className="text-lg text-center font-bold text-[#a3de06]">
              COMPLETO
            </p>
            <div className="flex gap-4 font-bold items-center justify-center">
              <p className="text-4xl ">R$120</p>
              <p>p/mês</p>
            </div>
            <div className="space-y-4">
              <p className="flex items-start gap-2">
                <LuCheck size="20px" color="#a3de06" />Acesso a Todas as Modalidades
              </p>
              <p className="flex items-center gap-2">
                <LuCheck size="20px" color="#a3de06" />Abordagem Fitness Integral
              </p>
              <p className="flex items-center gap-2">
                <LuCheck size="20px" color="#a3de06" />Variedade de Treinos
              </p>
              <p className="flex items-center gap-2">
                <LuCheck size="20px" color="#a3de06" /> Resultados Amplos
              </p>
              <p className="flex items-center gap-2">
                <LuCheck size="20px" color="#a3de06" />Suporte Personalizado
              </p>
            </div>
            <a href="#" className="bg-[#a3de06] text-center py-2 text-white hover:text-black duration-300">
              Saiba Mais
            </a>
          </div>

          <div className="border p-8 w-80  h-fit flex flex-col gap-8 hover:scale-105 duration-300 cursor-pointer">
            <p className="text-lg text-center font-bold text-[#a3de06]">FUNCIONAL</p>
            <div className="flex gap-4 font-bold items-center justify-center">
              <p className="text-4xl ">R$70</p>
              <p>p/mês</p>
            </div>
            <div className="space-y-4">
              <p className="flex items-start gap-2">
                <LuCheck size="20px" color="#a3de06" /> Variedade de Treinos
              </p>
              <p className="flex items-center gap-2">
                <LuCheck size="20px" color="#a3de06" /> Aulas Dinâmicas e Divertidas
              </p>
              <p className="flex items-center gap-2">
                <LuCheck size="20px" color="#a3de06" />Queime Calorias
              </p>
              <p className="flex items-center gap-2">
                <LuCheck size="20px" color="#a3de06" /> Melhore a Flexibilidade
              </p>
              <p className="flex items-center gap-2">
                <LuCheck size="20px" color="#a3de06" /> Adaptação para Todos os Níveis
              </p>
            </div>
            <a href="#" className="bg-[#252060] hover:bg-blue-950 duration-300 text-center py-2">
              Saiba Mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
