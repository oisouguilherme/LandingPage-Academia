import Image from "next/image";
import ImageAcademia from "../assets/sobrenos.webp";

export function SobreNos() {
  return (
    <section id="SobreNos" className="bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-32 py-32 items-center px-4">
        <div className="space-y-12 flex flex-col items-start">
          <h2 className="text-3xl sm:text-4xl font-bold">
            NÓS SOMOS <span className="text-[#a3de06]"> O <br /> MUNDO FITNESS</span>{" "}
          </h2>
          <p>
            Somos uma comunidade apaixonada por fitness, pronta para impulsionar sua jornada de transformação. Com treinos personalizados, orientação nutricional e aulas empolgantes, estamos aqui para ajudá-lo a alcançar seus objetivos de saúde e bem-estar. Junte-se a nós e comece a trilhar o caminho para uma vida mais saudável e ativa hoje mesmo.
          </p>
          <a href="#" className="border px-8 py-2 hover:bg-zinc-900 duration-300">
            Agende uma Visita
          </a>
        </div>
        <div className="h-full w-full">
          <Image src={ImageAcademia} alt="Sobre nós" className="h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
