import Image from 'next/image';
import Balance from 'react-wrap-balancer';
import Webb from '../assets/webb.png';
import ScrollAnimation from '../scrolls/ScrollReveal';
import ScrollAnimationX from '../scrolls/ScrollReveal2';

export default function ToRead() {
  return (
    <div className="flex items-center md:w-[85vw] md:ml-[7.5vw] justify-between mx-[10%] overflow-hidden">
      <div className="flex flex-col gap-6 w-[46rem] xl:w-full md:w-[80vw] text-justify">
        <ScrollAnimationX delay={0} duration={0.7} x={-100}>
          <h1 className="text-4xl md:mb-3 font-alt font-bold uppercase">
            Desvende o cosmos
          </h1>
        </ScrollAnimationX>
        <ScrollAnimation delay={0.1} duration={0.7} y={100}>
          <h2 className="text-xl font-thin md:text-[1rem]">
            <Balance>
              Descubra um universo de conhecimento e desvende os segredos
              cósmicos! Bem-vindo a Astral NET, um portal repleto de maravilhas
              celestiais e astronômicas. Prepare-se para embarcar em uma jornada
              fascinante pelos confins do espaço, explorando desde os planetas
              do nosso sistema solar até os mistérios do universo. Nossa missão
              é levar seu conhecimento para além das estrelas, desvendando
              conceitos complexos de forma simples e acessível. Aqui, você
              encontrará uma variedade de recursos cuidadosamente selecionados,
              desde artigos informativos até curiosidades que irão instigar sua
              imaginação. Navegue por nosso catálogo de conhecimento astronômico
              e mergulhe em um oceano de descobertas, onde mitos são desvendados
              e respostas são reveladas. Seja um explorador celeste e mergulhe
              nas maravilhas cósmicas que aguardam por você. Prepare-se para ter
              sua percepção do universo transformada!
            </Balance>
          </h2>
        </ScrollAnimation>
      </div>
      <ScrollAnimation delay={0} duration={0.7} y={100}>
        <div className='py-16 mx-8 xl:hidden xl:py-0 xl:mx-0'>
          <Image src={Webb} alt="" width={600} className='md:w-[50rem]'/>
        </div>
      </ScrollAnimation>
    </div>
  );
}
