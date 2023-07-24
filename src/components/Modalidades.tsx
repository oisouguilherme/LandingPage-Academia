import Image from "next/image";
import ImageMusculacao from "../assets/musculacao.webp";
import ImageFuncional from "../assets/funcional.webp";

export function Modalidades() {
  return (
    <section id="Modalidades" className="bg-zinc-950 text-white py-32 px-4">
      <div className="text-center max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold">MODALIDADES</h2>
        <p className="text-lg py-8">
          Descubra Nossas Modalidades e Encontre a que Combina com Você!
        </p>
        <div className="space-y-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-start text-start gap-8">
              <h3 className="text-2xl font-bold text-[#a3de06]">MUSCULAÇÃO</h3>
              <p className="text-lg">
                Fortaleça seu corpo e alcance seus objetivos com nossa
                modalidade de musculação. Treine com equipamentos modernos e
                receba orientação especializada para atingir resultados
                surpreendentes. Seja iniciante ou experiente, nossos treinos
                personalizados vão impulsionar sua evolução física e mental.
                Venha sentir a empolgação da musculação!
              </p>
              <a href="#" className="bg-[#252060] hover:bg-blue-950 duration-300 text-white px-8 py-2">
                {" "}
                Saiba Mais
              </a>
            </div>
            <Image src={ImageMusculacao} alt="" />
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="h-full">
              <Image src={ImageFuncional} alt="" className="object-cover h-full" />
            </div>
            <div className="flex flex-col items-start text-start gap-8">
              <h3 className="text-2xl font-bold text-[#a3de06]">
                AULA FUNCIONAL
              </h3>
              <p className="text-lg">
                Descubra uma abordagem dinâmica para sua forma física nas nossas
                aulas funcionais. Melhore resistência, flexibilidade e força,
                praticando movimentos naturais do corpo. Com exercícios variados
                e motivadores, queime calorias e tonifique seu corpo, enquanto
                se diverte em um ambiente social e energético. Aulas funcionais
                para todos os níveis de condicionamento. Vamos juntos nessa
                jornada fitness!
              </p>
              <div className="space-y-2">
                <h3 className="text-[#a3de06] font-medium text-lg">Horário</h3>
                <p>Terças e quintas-feiras: das 19h às 20h</p>
                <p>Sábados: das 10h às 11h</p>
              </div>
              <a href="#" className="bg-[#252060] hover:bg-blue-950 duration-300 px-8 py-2 text-white">
                {" "}
                Saiba Mais
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
