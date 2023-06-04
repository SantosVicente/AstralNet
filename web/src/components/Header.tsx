import Image from "next/image";
import Logo from "../app/icon.png";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between items-center pt-2">
      <Link href="" className="flex items-center ml-12">
        <Image src={Logo} alt="" width={80} />
        <p className="text-3xl font-alt ml-[-.5rem]">Astral Nexus</p>
      </Link>

      <ul className="flex gap-3 mr-12 font-alt text-zinc-400">
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
          <Link href="" className="hover:text-zinc-50 transition-colors">
            Login
          </Link>
        </li>
        <li>
          <Link href="" className="hover:text-zinc-50 transition-colors">
            Sign Up
          </Link>
        </li>
      </ul>
    </div>
  );
}
