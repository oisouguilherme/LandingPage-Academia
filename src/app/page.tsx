import { Footer } from '@/components/Footer'
import Header from '@/components/Header'
import { Instrutores } from '@/components/Instrutores'
import { Main } from '@/components/Main'
import { Mensalidades } from '@/components/Mensalidades'
import { Modalidades } from '@/components/Modalidades'
import { NossoEspaco } from '@/components/NossoEspaco'
import { SobreNos } from '@/components/SobreNos'

export default function Home() {
  return (
    <>
    <div className="bg-[url('/atleta.webp')] bg-cover">
      <Header/>
      <Main/>
    </div>
    <SobreNos/>
    <NossoEspaco/>
    <Modalidades/>
    <Instrutores/>
    <Mensalidades/>
    <Footer/>
    </>
  )
}
