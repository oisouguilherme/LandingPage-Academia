import { RiWhatsappLine, RiInstagramLine } from "react-icons/ri";


export function Footer(){
  return(
    <div className="bg-zinc-950 text-white py-4">
      <div className="max-w-6xl mx-auto flex justify-between">
        <div className="text-sm">
          <div className="flex gap-8 ">
            <a href="#">
              <RiWhatsappLine size="36px"/>
            </a>
            <a href="#">
              <RiInstagramLine size="36px"/>
            </a>
          </div>
          <p className="pt-2">Mundo Fitness © 2023</p>
          <p>Todos os direitos reservados</p>
        </div>
        <div className="flex flex-col gap-4">
          <a href="#" className="bg-red-600 w-44 text-center py-1">Entre em Contato</a>
          <a href="#" className="border w-44 text-center py-1">Agente uma visita</a>
        </div>
      </div>
    </div>
  )
}