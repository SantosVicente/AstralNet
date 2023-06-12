import Rocket from '../assets/rocket.svg';
import Telescope from '../assets/telescope.svg';
import Galaxy from '../assets/galaxy.svg';
import Asteroid from '../assets/asteroid.svg';
import Atom from '../assets/atom.svg';
import Saturn from '../assets/saturn.svg';
import Image from 'next/image';
import Balance from 'react-wrap-balancer';
import ScrollAnimation from '../scrolls/ScrollReveal';

export default function ToFind() {
  return (
    <div className="scroll-reveal flex flex-col gap-20 items-center justify-center">
      <ScrollAnimation delay={0} duration={0.9} y={150}>
        <h1 className="font-alt font-semibold text-5xl text-zinc-200">
          O QUE VOCÊ PODE ENCONTRAR
        </h1>
      </ScrollAnimation>
      <div className="grid grid-cols-3 grid-rows-2 gap-x-52 gap-y-16 text-zinc-200 font-alt text-4xl">
        <ScrollAnimation delay={0} duration={0.7} y={50}>
          <div className="flex flex-col items-center gap-4">
            <Image src={Rocket} width={70} alt="" />
            <h2 className="text-center font-rob text-2xl w-[15vw]">
              Descubra a verdade por trás dos mitos populares sobre astronomia
              de forma simples e acessível
            </h2>
          </div>
        </ScrollAnimation>
        <ScrollAnimation delay={0.1} duration={0.7} y={50}>
          <div className="flex flex-col items-center gap-4">
            <Image src={Telescope} width={70} alt="" />
            <h2 className="text-center font-rob text-2xl w-[15vw]">
              Explore guias fáceis de entender que simplificam conceitos
              complexos da astronomia
            </h2>
          </div>
        </ScrollAnimation>
        <ScrollAnimation delay={0.2} duration={0.7} y={50}>
          <div className="flex flex-col items-center gap-4">
            <Image src={Galaxy} width={70} alt="" />
            <h2 className="text-center font-rob text-2xl w-[15vw]">
              Maravilhe-se com curiosidades fascinantes sobre o espaço sideral
              que irão surpreender e encantar
            </h2>
          </div>
        </ScrollAnimation>
        <ScrollAnimation delay={0.1} duration={0.7} y={50}>
          <div className="flex flex-col items-center gap-4">
            <Image src={Asteroid} width={70} alt="" />
            <h2 className="text-center font-rob text-2xl w-[15vw]">
              Obtenha respostas claras e simples para suas perguntas sobre o
              universo e o estudo da astronomia
            </h2>
          </div>
        </ScrollAnimation>
        <ScrollAnimation delay={0.2} duration={0.7} y={50}>
          <div className="flex flex-col items-center gap-4">
            <Image src={Atom} width={70} alt="" />
            <h2 className="text-center font-rob text-2xl w-[15vw]">
              Descubra como explorar o céu noturno e observar fenômenos
              astronômicos por conta própria
            </h2>
          </div>
        </ScrollAnimation>
        <ScrollAnimation delay={0.3} duration={0.7} y={50}>
          <div className="flex flex-col items-center gap-4">
            <Image src={Saturn} width={70} alt="" />
            <h2 className="text-center font-rob text-2xl w-[15vw] flex-wrap">
              Tenha contato com a diversidade de elementos do universo que estão
              presente em nossa volta
            </h2>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}
