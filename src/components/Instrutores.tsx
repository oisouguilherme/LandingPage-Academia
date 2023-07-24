import Image from "next/image";
import ImageMulher from "../assets/mulher.webp";

export function Instrutores() {
  return (
    <div className="bg-zinc-950 text-white py-32 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">
          OS <span className="text-[#a3de06]">INSTRUTORES</span>
        </h2>
        <p className="text-lg py-8">
          Conheça Nossos Instrutores Especializados, Guias da Sua Jornada Fitness
        </p>
        <div className="flex items-center justify-center flex-wrap gap-4">
          <div className="w-64 relative duration-300 border border-zinc-950 hover:border-gray-100 cursor-pointer">
            <Image
              src={ImageMulher}
              alt="instrutores"
              className="h-96 object-cover"
            />
            <p className="absolute bottom-2 right-16 text-lg font-medium">
              Alessandra Alves
            </p>
          </div>
          <div className="w-64 relative duration-300 border border-zinc-950 hover:border-gray-100 cursor-pointer">
            <Image
              src={ImageMulher}
              alt="instrutores"
              className="h-96 object-cover"
            />
            <p className="absolute bottom-2 right-16 text-lg font-medium">
              Alessandra Alves
            </p>
          </div>
          <div className="w-64 relative duration-300 border border-zinc-950 hover:border-gray-100 cursor-pointer">
            <Image
              src={ImageMulher}
              alt="instrutores"
              className="h-96 object-cover"
            />
            <p className="absolute bottom-2 right-16 text-lg font-medium">
              Alessandra Alves
            </p>
          </div>
          <div className="w-64 relative duration-300 border border-zinc-950 hover:border-gray-100 cursor-pointer">
            <Image
              src={ImageMulher}
              alt="instrutores"
              className="h-96 object-cover"
            />
            <p className="absolute bottom-2 right-16 text-lg font-medium">
              Alessandra Alves
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
