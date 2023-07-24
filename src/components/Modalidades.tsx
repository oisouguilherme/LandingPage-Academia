import Image from "next/image";
import ImageMulher from "../assets/mulher.webp";

export function Modalidades() {
  return (
    <div className="bg-zinc-950 text-white py-32">
      <div className="text-center max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold">MODALIDADES</h2>
        <p className="text-lg py-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
          reprehenderit. Quidem animi aperiam ut eaque.
        </p>
        <div className="space-y-24">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-start text-start gap-8">
              <h3 className="text-2xl font-bold text-red-600">MUSCULAÇÃO</h3>
              <p className="text-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ratione qui et quas voluptatibus consectetur est vitae
                doloremque dolore, consequatur illo labore ea optio accusamus
                magni fuga ad magnam perspiciatis cum.
              </p>
              <a href="#" className="bg-red-600 px-8 py-2"> Saiba Mais</a>
            </div>
            <Image src={ImageMulher} alt="" />
          </div>
          <div className="grid grid-cols-2 gap-12 items-center">
            <Image src={ImageMulher} alt="" />
            <div className="flex flex-col items-start text-start gap-8">
              <h3 className="text-2xl font-bold text-red-600">BOXE</h3>
              <p className="text-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ratione qui et quas voluptatibus consectetur est vitae
                doloremque dolore, consequatur illo labore ea optio accusamus
                magni fuga ad magnam perspiciatis cum.
              </p>
              <div className="space-y-2">
                <h3 className="text-red-600 font-medium text-lg">Horário</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
              </div>
              <a href="#" className="bg-red-600 px-8 py-2"> Saiba Mais</a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
