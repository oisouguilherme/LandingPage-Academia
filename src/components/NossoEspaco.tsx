import Image from "next/image";
import ImageAcademia from '../assets/academia.webp'
import ImageMulher from '../assets/mulher.webp'
export function NossoEspaco(){
  return(
    <div className="bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto py-32 text-center">
        <h2 className="text-4xl font-bold">O NOSSO <span className="text-red-600">HABITAT</span></h2>
        <p className="py-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat eum perspiciatis iure vero officia illum.</p>
        <div>
          <Image src={ImageAcademia} alt="" className="w-full h-96 object-cover"/>
          <div className="grid grid-cols-2 gap-8 py-8">
            <Image src={ImageMulher} alt="" className="h-80 object-cover"/>
            <Image src={ImageMulher} alt="" className="h-80 object-cover"/>
          </div>
          <Image src={ImageAcademia} alt="" className="w-full h-96 object-cover"/>
        </div>
      </div>
    </div>
  )
}