import Link from 'next/link';
import Image from 'next/image';
import ifsp from '../assets/Marca_IFSP_2015_Campinas-04_transparente.png';
import nasa from '../assets/NasaLogo.png';

export default function Parceiros() {
  return (
    <div
      className="border-t border-zinc-700 flex-col pt-24 gap-8 bg-zinc-950 flex items-center justify-center overflow-hidden"
    >
      <h1 className="uppercase font-alt font-bold text-4xl">Parceiros</h1>
      <h2 className="text-lg">
        Conheça as organizações que possibilitaram esse projeto acontecer
      </h2>

      <div className='flex gap-36 mt-16'>
        <Link href="https://portal.cmp.ifsp.edu.br/" target='_blank'>
          <Image src={ifsp} alt='' width={170}></Image>
        </Link>
        <Link href="https://www.nasa.gov/" target='_blank'>
          <Image src={nasa} alt='' width={290}></Image>
        </Link>
      </div>
    </div>
  );
}
