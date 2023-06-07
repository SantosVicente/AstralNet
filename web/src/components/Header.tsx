import Link from 'next/link';

export default function Header() {
  return (
    <div className="flex justify-between items-center pt-6">
      <Link href="" className="flex gap-2 ml-10 items-center">
        <p className="text-3xl font-alt">Astral NET</p>
      </Link>

      <ul className="flex gap-4 font-alt text-zinc-400 mr-[4rem]">
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
        className="hover:text-zinc-50 text-zinc-400 font-alt mr-20 transition-colors"
      >
        Login
      </Link>
    </div>
  );
}
