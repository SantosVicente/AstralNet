import {
  Rocket,
  Orbit,
  Satellite,
  ArrowRight,
  CornerDownRight,
} from "lucide-react";
import ScrollRevealComponent from "../components/ScrollReveal";
import Link from "next/link";

export default function Cards() {
  return (
    <ScrollRevealComponent>
      <div className="flex flex-col gap-16 items-center">
        <h1 className="font-alt text-4xl uppercase">Destaques</h1>
        <div className="w-full">
          <div className="grid grid-cols-3 gap-40 mx-40">
            <Link href="">
              <div className="border-card1 px-16 flex flex-col items-center justify-center h-[35rem] transition-colors text-zinc-400 hover:text-zinc-50 bg-zinc-50 bg-opacity-5">
                <Rocket size={60} />
                <div className="mt-4 relative">
                  <h1 className="text-2xl">Introdução à Asronomia</h1>
                  <ul>
                    <div className="flex gap-1">
                      <CornerDownRight />
                      <li className="mt-1">O que é Astronomia</li>
                    </div>
                    <div className="flex gap-1">
                      <CornerDownRight />
                      <li className="mt-1">A História da Astronomia</li>
                    </div>
                    <div className="flex gap-1">
                      <CornerDownRight />
                      <li className="mt-1">Instrumentos e Técnicas</li>
                    </div>
                    <div className="flex gap-1">
                      <CornerDownRight />
                      <li className="mt-1">
                        Conceitos Fundamentais da Astronomia
                      </li>
                    </div>
                    <div className="flex gap-1">
                      <CornerDownRight />
                      <li className="mt-1">Fenômenos e Eventos Astronômicos</li>
                    </div>
                    <div className="flex gap-1">
                      <CornerDownRight />
                      <li className="mt-1">
                        Cosmologia e o Estudo do Universo
                      </li>
                    </div>
                    <div className="flex gap-1">
                      <CornerDownRight />
                      <li className="mt-1">
                        Aplicações Práticas da Astronomia
                      </li>
                    </div>
                  </ul>
                  <div className="absolute top-[105%] right-0 flex gap-1 items-center mt-4 text-zinc-50">
                    <h3>Embarque no Expresso</h3>
                    <ArrowRight />
                  </div>
                </div>
              </div>
            </Link>

            <Link href="">
              <div className="border-card2 px-16 flex flex-col items-center justify-center h-[35rem] transition-colors text-zinc-400 hover:text-zinc-50 bg-zinc-50 bg-opacity-5">
                <Orbit size={60} />
                <div className="mt-4 relative">
                  <h1 className="text-2xl">O Universo em Escala</h1>
                  <ul>
                    <div className="flex gap-1">
                      <CornerDownRight />
                      <li className="mt-1">Estrutura do Universo</li>
                    </div>
                    <div className="flex gap-1">
                      <CornerDownRight />
                      <li className="mt-1">Cosmologia Observacional</li>
                    </div>
                    <div className="flex gap-1">
                      <CornerDownRight />
                      <li className="mt-1">Cosmologia Explicada</li>
                    </div>
                    <div className="flex gap-1">
                      <CornerDownRight />
                      <li className="mt-1">Teorias de Formação do Universo</li>
                    </div>
                    <div className="flex gap-1">
                      <CornerDownRight />
                      <li className="mt-1">James Webb e o Efeito Doppler</li>
                    </div>
                    <div className="flex gap-1">
                      <CornerDownRight />
                      <li className="mt-1">
                        Radiação Cósmica de Fundo em Micro-Ondas
                      </li>
                    </div>
                    <div className="flex gap-1">
                      <CornerDownRight />
                      <li className="mt-1">Estudos futuros e Desafios</li>
                    </div>
                  </ul>
                  <div className="absolute top-[120%] right-0 flex gap-1 items-center text-zinc-50">
                    <h3>Embarque no Expresso</h3>
                    <ArrowRight />
                  </div>
                </div>
              </div>
            </Link>

            <Link href="">
              <div className="border-card3 px-16 flex flex-col items-center justify-center h-[35rem] transition-colors text-zinc-400 hover:text-zinc-50 bg-zinc-50 bg-opacity-5">
                <Satellite size={60} />
                <div className="mt-4 relative">
                  <h1 className="text-2xl">Explorando o Sistema Solar</h1>
                  <ul>
                    <div className="flex gap-1">
                      <CornerDownRight />
                      <li className="mt-1">Introdução ao Sistema Solar</li>
                    </div>
                    <div className="flex gap-1">
                      <CornerDownRight />
                      <li className="mt-1">Planetas do Sistema Solar</li>
                    </div>
                    <div className="flex gap-1">
                      <CornerDownRight />
                      <li className="mt-1">Exploração de Marte</li>
                    </div>
                    <div className="flex gap-1">
                      <CornerDownRight />
                      <li className="mt-1">
                        Futuras missões e exploração do Sistema Solar
                      </li>
                    </div>
                  </ul>
                  <div className="absolute top-[130%] right-0 flex gap-1 items-center mt-4 text-zinc-50">
                    <h3>Embarque no Expresso</h3>
                    <ArrowRight />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </ScrollRevealComponent>
  );
}