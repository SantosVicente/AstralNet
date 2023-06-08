import { User2 } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="flex justify-between items-center pt-6 font-bold">
      <Link href="" className="flex gap-2 ml-10 items-center">
        <p className="text-3xl font-alt">Astral NET</p>
      </Link>

      <ul className="flex gap-4 ml-20 font-alt text-zinc-400">
        <li>
          <Link href="" className="hover:text-zinc-50 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link href="" className="hover:text-zinc-50 transition-colors">
            Info
          </Link>
        </li>
        <li>
          <Link href="#about" className="hover:text-zinc-50 transition-colors">
            About Us
          </Link>
        </li>
      </ul>

      <Link
        href=""
        className="hover:text-zinc-50 flex items-center gap-2 text-zinc-400 font-alt mr-10 transition-colors"
      >
        <div className="p-2 bg-zinc-400 bg-opacity-25 rounded-full">
          <User2 size={25} />
        </div>
        <p className="w-40 text-sm font-semibold">
          <span className="underline">Crie sua conta</span> e viaje pelo cosmos!
        </p>
      </Link>
    </div>
  );
}
