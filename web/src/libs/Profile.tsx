import { getUser } from './auth';
import Image from 'next/image';
import Picture from '../assets/profile.png';

export function Profile() {
  const { name, email, image, updatedAt, createdAt, idOauth, _id, __v } =
    getUser();
  return (
    <div className="flex items-center gap-2 text-zinc-50 font-alt transition-colors">
      <Image src={Picture} width={45} className="rounded-full" alt="" />
      <div>
        <p className="w-40 text-sm font-semibold">
          Bem vindo <span className="font-bold">{name}</span>
        </p>
        <a
          href="/api/auth/logout/"
          className="text-xs hover:text-zinc-100 text-zinc-400"
        >
          Clique para Sair
        </a>
      </div>
    </div>
  );
}
