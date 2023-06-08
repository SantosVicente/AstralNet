import ScrollAnimation from '@/scrolls/ScrollReveal';
import { Rocket, Orbit, Satellite } from 'lucide-react';
import Link from 'next/link';

export default function Cards() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <div className="flex justify-between w-[82vw]">
        <ScrollAnimation delay={0.2} duration={0.9} y={100}>
          <h1 className="font-alt h1 uppercase font-bold w-[40rem]">
            Principais tópicos para você decolar conosco
          </h1>
        </ScrollAnimation>
        <ScrollAnimation delay={0.4} duration={0.9} y={100}>
          <div className="flex flex-col gap-6">
            <div className="h-[0.1rem] rounded-md bg-zinc-600 w-20" />
            {/*Fazer este texto vir com delay e da direita para a esquerda*/}
            <p className="text-lg">
              Estas são algumas de nossas sessões de leitura que você pode
              visitar!
            </p>
          </div>
        </ScrollAnimation>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-3 gap-40 mx-40">
          <ScrollAnimation delay={0} duration={0.7} y={100}>
            <Link
              href=""
              className="border-card1 border border-zinc-600 rounded-md px-16 flex flex-col items-start justify-center h-[30rem] transition-colors text-zinc-400 hover:text-zinc-50 bg-zinc-50 bg-opacity-5"
            >
              <Rocket size={60} />
              <div className="mt-4">
                <h1 className="text-2xl">Introdução à Astronomia</h1>
                <ul className="ml-6">
                  <div className="flex gap-1">
                    <li className="mt-1">O que é Astronomia</li>
                  </div>
                  <div className="flex gap-1">
                    <li className="mt-1">A História da Astronomia</li>
                  </div>
                  <div className="flex gap-1">
                    <li className="mt-1">Instrumentos e Técnicas</li>
                  </div>
                  <div className="flex gap-1">
                    <li className="mt-1">
                      Conceitos Fundamentais da Astronomia
                    </li>
                  </div>
                  <div className="flex gap-1">
                    <li className="mt-1">Fenômenos e Eventos Astronômicos</li>
                  </div>
                  <div className="flex gap-1">
                    <li className="mt-1">Cosmologia e o Estudo do Universo</li>
                  </div>
                  <div className="flex gap-1">
                    <li className="mt-1">Aplicações Práticas da Astronomia</li>
                  </div>
                </ul>
              </div>
            </Link>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2} duration={0.7} y={100}>
            <Link href="">
              <div className="border-card2 border border-zinc-600 rounded-md px-16 flex flex-col items-start justify-center h-[30rem] transition-colors text-zinc-400 hover:text-zinc-50 bg-zinc-50 bg-opacity-5">
                <Orbit size={60} />
                <div className="mt-4">
                  <h1 className="text-2xl">O Universo em Escala</h1>
                  <ul className="ml-6">
                    <div className="flex gap-1">
                      <li className="mt-1">Estrutura do Universo</li>
                    </div>
                    <div className="flex gap-1">
                      <li className="mt-1">Cosmologia Observacional</li>
                    </div>
                    <div className="flex gap-1">
                      <li className="mt-1">Cosmologia Explicada</li>
                    </div>
                    <div className="flex gap-1">
                      <li className="mt-1">Teorias de Formação do Universo</li>
                    </div>
                    <div className="flex gap-1">
                      <li className="mt-1">James Webb e o Efeito Doppler</li>
                    </div>
                    <div className="flex gap-1">
                      <li className="mt-1">
                        Radiação Cósmica de Fundo em Micro-Ondas
                      </li>
                    </div>
                    <div className="flex gap-1">
                      <li className="mt-1">Estudos futuros e Desafios</li>
                    </div>
                  </ul>
                </div>
              </div>
            </Link>
          </ScrollAnimation>
          <ScrollAnimation delay={0.4} duration={0.7} y={100}>
            <Link href="">
              <div className="border-card3 border border-zinc-600 rounded-md px-16 flex flex-col items-start justify-center h-[30rem] transition-colors text-zinc-400 hover:text-zinc-50 bg-zinc-50 bg-opacity-5">
                <Satellite size={60} />
                <div className="mt-4">
                  <h1 className="text-2xl">Explorando o Sistema Solar</h1>
                  <ul className="ml-6">
                    <div className="flex gap-1">
                      <li className="mt-1">Introdução ao Sistema Solar</li>
                    </div>
                    <div className="flex gap-1">
                      <li className="mt-1">Planetas do Sistema Solar</li>
                    </div>
                    <div className="flex gap-1">
                      <li className="mt-1">Exploração de Marte</li>
                    </div>
                    <div className="flex gap-1">
                      <li className="mt-1">
                        Futuras missões e exploração do Sistema Solar
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            </Link>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}
