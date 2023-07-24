import Image from "next/image";
import ImageAcademia from "../assets/academia.webp";

export function SobreNos() {
  return (
    <div className="bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-32 py-32 items-center">
        <div className="space-y-12 flex flex-col items-start">
          <h2 className="text-4xl font-bold">
            NÓS SOMOS <span className="text-red-600">A <br /> CAVERNA</span>{" "}
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            alias itaque odio, aspernatur praesentium reprehenderit cum!
            Veritatis architecto voluptatem repellat! Vel incidunt nostrum magni
            illo nihil omnis repellat, aperiam qui.
          </p>
          <a href="#" className="border px-8 py-2">
            Agende uma Visita
          </a>
        </div>
        <div className="h-full w-full">
          <Image src={ImageAcademia} alt="Sobre nós" />
        </div>
      </div>
    </div>
  );
}
