'use client';

import Image from 'next/image';
import Link from 'next/link';

import urlImage from '../../assets/31343C.svg';

import './static.css';
import { Button } from '@nextui-org/react';
import { ArrowRight } from 'lucide-react';

export default function Static() {
  return (
    <div className="pt-16 px-16 gap-6 flex flex-col min-h-screen w-screen">
      <h1 className="mt-12 font-alt text-zinc-300 font-bold text-3xl">
        Bem-vindo à{' '}
        <span className="border-b border-zinc-300 leading-3 ">
          Trilha Static
        </span>{' '}
        🚀
      </h1>
      <p className="font-alt text-zinc-100 font-medium text-lg max-w-4xl">
        Hey viajante! Seja bem vindo a trilha Static, onde você poderá encontrar
        nossos textos sobre os mais diversos assuntos relacionados a astronomia.
        Aqui nós divulgaremos artigos de divulgação escritos de forma pensada a
        manter a interatividade proposta na Trilha Immersive, porém, de forma
        mais direta e objetiva. Essa trilha foi feita para você que tem pressa
        para decolar.
      </p>
      <h2 className="mt-6 font-alt text-zinc-300 font-bold text-3xl">
        Artigos Disponíveis
      </h2>
      <div className="flex justify-center gap-52 mb-10">
        <div className="flex flex-col border border-zinc-500 rounded-xl bg-zinc-950 bg-opacity-70">
          <Image src={urlImage} alt="" width={350} className="rounded-image" />

          <div className="flex flex-col gap-2 max-w-[350px] p-4">
            <h2 className="font-alt text-2xl font-bold">Buracos Negros</h2>
            <p className="font-alt text-base">
              Entre no limbo misterioso dos buracos negros e desfrute de seus
              mistérios. Este artigo foi preparado para que você possa entender
              os príncipais tópicos relacionados aos buracos negros, você verá
              desde seu processo de formação até de sua morte.
            </p>
            <Button
              color="danger"
              onPress={() => (window.location.href = '/static/black-hole')}
              endContent={<ArrowRight />}
            >
              Conferir
            </Button>
          </div>
        </div>
        <div className="flex flex-col border border-zinc-500 rounded-xl bg-zinc-950 bg-opacity-70">
          <Image src={urlImage} alt="" width={350} className="rounded-image" />

          <div className="flex flex-col gap-2 max-w-[350px] p-4">
            <h2 className="font-alt text-2xl font-bold">Sistema Solar</h2>
            <p className="font-alt text-base">
              Explore os segredos do Sistema Solar! Este artigo foi elaborado
              para levá-lo em uma jornada através do nosso sistema estelar.
              Aqui, você descobrirá desde a formação dos planetas e luas até as
              incríveis características de cada corpo celeste que orbita nossa
              estrela, o Sol.
            </p>
            <Button
              color="danger"
              onPress={() => (window.location.href = '/static/solar-system')}
              endContent={<ArrowRight />}
            >
              Conferir
            </Button>
          </div>
        </div>
        <div className="flex flex-col border border-zinc-500 rounded-xl bg-zinc-950 bg-opacity-70">
          <Image src={urlImage} alt="" width={350} className="rounded-image" />

          <div className="flex flex-col gap-2 max-w-[350px] p-4">
            <h2 className="font-alt text-2xl font-bold">Universo em Escala</h2>
            <p className="font-alt text-base">
              Entre na vastidão do Universo! Este artigo foi elaborado para
              guiá-lo através do mundo macro cósmico. Você poderá desfrutar
              desde as escalas das galáxias e aglomerados de estrelas até as
              características que definem nosso vasto cosmos em toda sua
              magnitude.
            </p>
            <Button
              color="danger"
              onPress={() => (window.location.href = '/static/universe-scale')}
              endContent={<ArrowRight />}
            >
              Conferir
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
