import Rocket from '../assets/rocket.svg';
import Telescope from '../assets/telescope.svg';
import Galaxy from '../assets/galaxy.svg';
import Asteroid from '../assets/asteroid.svg';
import Atom from '../assets/atom.svg';
import Saturn from '../assets/saturn.svg';
import Image from 'next/image';
import Balance from 'react-wrap-balancer';

export default function ToFind() {
  return (
    <div className="scroll-reveal flex flex-col gap-20 items-center justify-center">
      <h1 className="font-alt text-5xl text-zinc-200">
        O QUE VOCÊ PODE ENCONTRAR
      </h1>
      <div className="grid grid-cols-3 grid-rows-2 gap-x-52 gap-y-16 text-zinc-200 font-alt text-4xl">
        <div className="flex flex-col items-center gap-4">
          <Image src={Rocket} width={70} alt="" />
          <h2 className="text-center font-rob text-2xl w-[15vw]">
            <Balance>
              Type some information here, can be anything you want
            </Balance>
          </h2>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image src={Telescope} width={70} alt="" />
          <h2 className="text-center font-rob text-2xl w-[15vw]">
            <Balance>
              Type some information here, can be anything you want
            </Balance>
          </h2>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image src={Galaxy} width={70} alt="" />
          <h2 className="text-center font-rob text-2xl w-[15vw]">
            <Balance>
              Type some information here, can be anything you want
            </Balance>
          </h2>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image src={Asteroid} width={70} alt="" />
          <h2 className="text-center font-rob text-2xl w-[15vw]">
            <Balance>
              Type some information here, can be anything you want
            </Balance>
          </h2>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image src={Atom} width={70} alt="" />
          <h2 className="text-center font-rob text-2xl w-[15vw]">
            <Balance>
              Type some information here, can be anything you want
            </Balance>
          </h2>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image src={Saturn} width={70} alt="" />
          <h2 className="text-center font-rob text-2xl w-[15vw] flex-wrap">
            <Balance>
              Type some information here, can be anything you want
            </Balance>
          </h2>
        </div>
      </div>
    </div>
  );
}
