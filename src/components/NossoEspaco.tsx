import Image from "next/image";
import ImageAcademia from '../assets/nosso.webp'
import ImageAcademia2 from '../assets/nosso2.webp'
import ImageAcademia3 from '../assets/nosso3.jpg'
import ImageAcademia4 from '../assets/mulher.webp'


export function NossoEspaco(){
  return(
    <section id="NossoEspaco" className="bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto py-32 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">O NOSSO <span className="text-[#a3de06]">HABITAT</span></h2>
        <p className="py-8 px-4">Conheça nosso Espaço e Ambiente Inspirador</p>
        <div className="px-4">
          <Image src={ImageAcademia} alt="" className="w-full h-96 object-cover"/>
          <div className="grid md:grid-cols-2 gap-8 py-8">
            <Image src={ImageAcademia2} alt="" className="w-full h-80 object-cover"/>
            <Image src={ImageAcademia4} alt="" className="w-full h-80 object-cover"/>
          </div>
          <Image src={ImageAcademia3} alt="" className="w-full h-96 object-cover"/>
        </div>
      </div>
    </section>
  )
}