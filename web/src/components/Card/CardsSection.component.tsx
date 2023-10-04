import ScrollAnimation from '@/scrolls/ScrollReveal';
import ScrollAnimationX from '@/scrolls/ScrollReveal2';
import { Rocket, Orbit, Satellite } from 'lucide-react';
import { Card } from './Card.component';
import Image from 'next/image';
import BlackHole from '../../assets/BlackHole.svg';

export default function CardsSection() {
  return (
    <div className="relative flex flex-col gap-16 items-center">
      <div className="flex xl:flex-col xl:gap-8 md:flex-row md:gap-0 justify-between w-[82vw] px-10">
        <ScrollAnimation delay={0.1} duration={0.3} y={150}>
          <h1 className="font-alt h1 uppercase font-bold w-[40rem]">
            Principais tópicos para você decolar conosco
          </h1>
        </ScrollAnimation>
        <ScrollAnimationX delay={0.2} duration={0.3} x={150}>
          <div className="flex flex-col gap-6 md:hidden">
            <div className="h-[0.1rem] rounded-md bg-zinc-500 w-20" />
            <p className="text-lg text-zinc-300">
              Estas são algumas de nossas sessões de leitura da
              <span className="font-bold font-alt text-zinc-50">
                {' '}
                Trilha Static
              </span>
              <br />
              que você pode visitar!
            </p>
          </div>
        </ScrollAnimationX>
      </div>

      <div className="relative w-full xl:w-[80vw]">
        <div className="xl:overflow-x-scroll overflow-hidden 2xl:gap-[2%] w-full h-[30rem] flex gap-[5%] xl:gap-0 justify-center xl:justify-start">
          <ScrollAnimation delay={0.1} duration={0.3} y={100}>
            <Card
              title="Buracos Negros"
              description="Explore o mundo intrigante dos buracos negros, entenda 
                    como eles funcionam, como se formam, e desmistifique sua 
                    percepção em relação a esses objetos tão fascinantes do 
                    universo"
              icon={
                <Image src={BlackHole} width={70} alt="" className="mt-[15%]" />
              }
              link="/static/black-hole"
            />
          </ScrollAnimation>
          <ScrollAnimation delay={0.3} duration={0.3} y={100}>
            <Card
              title="O Universo em Escala"
              description="Prepare-se para uma jornada extraordinária através das
                    vastas escalas do universo. Neste guia envolvente,
                    exploraremos as teorias de formação do universo e
                    descobriremos as maravilhas da cosmologia observacional."
              icon={<Orbit size={60} className="mt-[15%] text-zinc-50" />}
              link="/static/universe-scale"
            />
          </ScrollAnimation>
          <ScrollAnimation delay={0.4} duration={0.3} y={100}>
            <Card
              title="O Sistema Solar"
              description="Entre em uma viagem pelo sistema solar. Neste guia ,
                    apresentaremos uma introdução fascinante ao nosso sistema
                    solar, os planetas que o compõem, a exploração de Marte e as
                    futuras missões que nos aguardam na exploração do espaço."
              icon={<Satellite size={60} className="mt-[15%] text-zinc-50" />}
              link="/static/solar-system"
            />
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}
