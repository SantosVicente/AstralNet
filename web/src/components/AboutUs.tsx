import Link from 'next/link';
import Image from 'next/image';
import Profile from '../assets/profile.png';

export default function AboutUs() {
  return (
    <div
      id="about"
      className="border-t border-zinc-700 flex items-center justify-center h-36 overflow-hidden"
    >
      Sobre Nós
      {/*
      <div className="flex w-full items-center justify-center gap-4">
        <div>
          <Link href="">
            <p>João Vitor Rodrigues</p>
          </Link>
        </div>
        <div>
          <Link href="">
            <p>Mateus Rodrigues Martins</p>
          </Link>
        </div>
        <div>
          <Link href="" className="flex flex-col gap-2 items-center">
            <Image src={Profile} alt="" width={70} className="rounded-full" />
            <p>Vicente dos Santos</p>
          </Link>
        </div>
  </div>*/}
    </div>
  );
}
