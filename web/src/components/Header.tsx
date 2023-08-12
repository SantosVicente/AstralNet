'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { apiRoute } from '@/libs/api';
import { useContext } from 'react';

import { User2 } from 'lucide-react';
import Logo from '../app/icon.png';
import asset from '../assets/profile.png';
import { AuthContext } from '@/contexts/Auth/authContext';

export default function Header() {
  const auth = useContext(AuthContext);
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);

  const api = apiRoute();

  const fetchData = async () => {
    setIsLoading(true);
    try {
      setIsLogged(await auth.signin('64b33c2257d70918a058023e'));
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
    setIsLoading(false);
  };

  const handleLogout = async () => { 
    await auth.signout();
    setIsLogged(false);
    window.location.reload();
  }

  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [headerBackground, setHeaderBackground] =
    useState<string>('transparent');

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;

      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const calculateBackground = () => {
     if (scrollPosition > 50) {
        // precisamos da % de 0 a 350, ai evitaria a gamb de deixar varios if
        //350 of 350 = 100% 
        //100 of 350 = 28.57%
        setHeaderBackground('rgba(2, 12, 20, ' +  (scrollPosition / 350) 
        + ')');
      } else if (scrollPosition <= 50) {
        setHeaderBackground('transparent');
      }
    };

    calculateBackground();
  }, [scrollPosition]);

  return (
    <div
      className="h-16 w-screen z-50 fixed headerBg flex items-center px-[2%]"
      style={{ backgroundColor: headerBackground }}
      id="header"
    >
      <div className="flex justify-between items-center font-bold w-full">
        <Link href="" className="flex gap-2 items-center">
          <Image src={Logo} alt="" width={50} />
          <p className="text-3xl font-alt">Astral NET</p>
        </Link>

        <ul className="flex gap-4  font-alt text-zinc-400">
          <li>
            <Link href="/home" className="hover:text-zinc-50 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/info" className="hover:text-zinc-50 transition-colors">
              Info
            </Link>
          </li>
          <li>
            <Link
              href="#aboutUs"
              className="hover:text-zinc-50 transition-colors"              
            >
              About Us
            </Link>
          </li>
        </ul>


        {auth.user ? (
          <Link
            href=""
            className="flex items-center gap-2 text-zinc-50 font-alt transition-colors"
          >
            <Image src={asset} width={45} className="rounded-full" alt="" />
            <div>
              <p className="w-40 text-sm font-semibold">
                Bem vindo <span className="font-bold">{auth.user?.name}</span>
              </p>
              <p
                className="text-xs hover:text-zinc-100 text-zinc-400"
                onClick={handleLogout}
              >
                Clique para Sair
              </p>
            </div>
          </Link>
        ) : (
          <Link
            href=""
            onClick={fetchData}
            className="hover:text-zinc-50 flex items-center gap-3 text-zinc-400 font-alt transition-colors"
          >
            <div className="p-2 bg-zinc-400 bg-opacity-25 rounded-full">
              <User2 size={25} />
            </div>
            <p className="w-40 text-sm font-semibold">
              <span className="underline">Crie sua conta</span> e viaje pelo
              cosmos!
              {isLoading === true ? <p className='text-sm'>Carregando...</p> : null}
            </p>

          </Link>
        )}
        
      </div>
    </div>
  );
}
