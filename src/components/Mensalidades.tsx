import { LuCheck } from "react-icons/lu";

export function Mensalidades() {
  return (
    <div className="bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto py-32">
        <h2 className="text-4xl font-bold text-center pb-8">
          TIPOS DE <span className="text-red-600">MENSALIDADES</span>
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8">
          <div className="border p-8 w-80 h-fit flex flex-col gap-8">
            <p className="text-lg text-center font-bold text-red-600">
              MUSCULAÇÃO
            </p>
            <div className="flex gap-4 font-bold items-center justify-center">
              <p className="text-4xl ">R$70</p>
              <p>p/mês</p>
            </div>
            <div className="space-y-4">
              <p className="flex items-start gap-2">
                <LuCheck size="20px" color="red" /> Lorem ipsum dolor sit.
              </p>
              <p className="flex items-center gap-2">
                <LuCheck size="20px" color="red" /> Lorem ipsum dolor sit.
              </p>
              <p className="flex items-center gap-2">
                <LuCheck size="20px" color="red" /> Lorem ipsum dolor sit.
              </p>
              <p className="flex items-center gap-2">
                <LuCheck size="20px" color="red" /> Lorem ipsum dolor sit.
              </p>
              <p className="flex items-center gap-2">
                <LuCheck size="20px" color="red" /> Lorem ipsum dolor sit.
              </p>
            </div>
            <a href="#" className="bg-red-600 text-center py-1">Saiba Mais</a>
          </div>

          <div className="border bg-gray-100 text-black p-8 w-80 h-[480px] flex flex-col gap-8">
            <p className="text-lg text-center font-bold text-red-600">
              COMPLETO
            </p>
            <div className="flex gap-4 font-bold items-center justify-center">
              <p className="text-4xl ">R$70</p>
              <p>p/mês</p>
            </div>
            <div className="space-y-4">
              <p className="flex items-start gap-2">
                <LuCheck size="20px" color="red" /> Lorem ipsum dolor sit.
              </p>
              <p className="flex items-center gap-2">
                <LuCheck size="20px" color="red" /> Lorem ipsum dolor sit.
              </p>
              <p className="flex items-center gap-2">
                <LuCheck size="20px" color="red" /> Lorem ipsum dolor sit.
              </p>
              <p className="flex items-center gap-2">
                <LuCheck size="20px" color="red" /> Lorem ipsum dolor sit.
              </p>
              <p className="flex items-center gap-2">
                <LuCheck size="20px" color="red" /> Lorem ipsum dolor sit.
              </p>
            </div>
            <a href="#" className="bg-red-600 text-center py-1 text-white">Saiba Mais</a>
          </div>

          <div className="border p-8 w-80  h-fit flex flex-col gap-8">
            <p className="text-lg text-center font-bold text-red-600">
              BOXE
            </p>
            <div className="flex gap-4 font-bold items-center justify-center">
              <p className="text-4xl ">R$70</p>
              <p>p/mês</p>
            </div>
            <div className="space-y-4">
              <p className="flex items-start gap-2">
                <LuCheck size="20px" color="red" /> Lorem ipsum dolor sit.
              </p>
              <p className="flex items-center gap-2">
                <LuCheck size="20px" color="red" /> Lorem ipsum dolor sit.
              </p>
              <p className="flex items-center gap-2">
                <LuCheck size="20px" color="red" /> Lorem ipsum dolor sit.
              </p>
              <p className="flex items-center gap-2">
                <LuCheck size="20px" color="red" /> Lorem ipsum dolor sit.
              </p>
              <p className="flex items-center gap-2">
                <LuCheck size="20px" color="red" /> Lorem ipsum dolor sit.
              </p>
            </div>
            <a href="#" className="bg-red-600 text-center py-1">Saiba Mais</a>
          </div>
        </div>
      </div>
    </div>
  );
}
