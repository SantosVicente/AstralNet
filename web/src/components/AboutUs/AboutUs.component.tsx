import Link from 'next/link';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="overflow-hidden bg-zinc-950 py-8 flex flex-col align-center justify-around">
      <div className="flex align-center justify-around">
        <div className="gap-1 flex flex-col text-lg justify-center">
          <h1 className="font-bold text-3xl pb-5"> Quem Somos</h1>
          <div>
            <h1 className="text-gray-400 hover:text-gray-50">
              <a
                tabIndex={-1}
                href="https://github.com/webjotah"
                target="_blank"
              >
                João Vitor
              </a>
            </h1>
          </div>
          <div>
            <h1 className="text-gray-400 hover:text-gray-50">
              <a tabIndex={-1} href="#" target="_blank">
                Matheus Rodrigues
              </a>
            </h1>
          </div>
          <div>
            <h1 className="text-gray-400 hover:text-gray-50">
              <a
                tabIndex={-1}
                href="https://github.com/SantosVicente"
                target="_blank"
              >
                Vicente Santos
              </a>
            </h1>
          </div>
        </div>

        <div className="gap-1 flex flex-col text-lg justify-center self-start">
          <h1 className="font-bold text-3xl pb-5"> Sobre o Projeto</h1>
          <div>
            <h1 className="text-gray-400 hover:text-gray-50">
              <a
                tabIndex={-1}
                href="https://github.com/SantosVicente/AstralNet"
                target="_blank"
              >
                Veja nosso projeto
              </a>
            </h1>
          </div>
        </div>
      </div>
      <h1 className="mt-8 flex justify-center">
        2023 © AstralNET | Campinas-SP BRA, Todos os direitos reservados
      </h1>
    </div>
  );
}
