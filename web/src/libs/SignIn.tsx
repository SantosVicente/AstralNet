import { User2 } from 'lucide-react';

export function SignIn() {
  return (
    <a
      href=""
      className="hover:text-zinc-50 flex items-center gap-3 text-zinc-400 font-alt transition-colors"
    >
      <div className="p-2 bg-zinc-400 bg-opacity-25 rounded-full">
        <User2 size={25} />
      </div>
      <p className="w-40 text-sm font-semibold">
        <span className="underline">Crie sua conta</span> e viaje pelo cosmos!
      </p>
    </a>
  );
}
