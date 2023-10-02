import Link from 'next/link';
import Image from 'next/image';
import ifsp from '../../assets/Marca_IFSP_2015_Campinas-04_transparente.png';
import nasa from '../../assets/NasaLogo.png';
import mpc from '../../assets/MPC_logo.png';

export default function Partners() {
  return (
    <div className="border-t border-zinc-700 flex-col pt-24 pb-16 gap-8 bg-gray-950 flex items-center justify-center overflow-hidden">
      <h1 className="uppercase font-alt font-bold text-4xl">Parceiros</h1>
      <h2 className="text-lg">
        Conheça as organizações que possibilitaram esse projeto acontecer
      </h2>

      <div className="flex gap-32 mt-16 w-full justify-center items-center">
        <Link
          tabIndex={-1}
          href="https://portal.cmp.ifsp.edu.br/"
          target="_blank"
          className="ml-20"
        >
          <Image src={ifsp} alt="" width={120} className="md:w-[10rem]" />
        </Link>
        <Link
          tabIndex={-1}
          href="https://minorplanetcenter.net/"
          target="_blank"
        >
          <Image
            src={mpc}
            alt=""
            width={190}
            className=" md:w-[16rem] md:mb-11"
          />
        </Link>
        <Link tabIndex={-1} href="https://www.nasa.gov/" target="_blank">
          <Image
            src={nasa}
            alt=""
            width={190}
            className="md:w-[16rem] md:mb-11"
          />
        </Link>
      </div>
    </div>
  );
}
