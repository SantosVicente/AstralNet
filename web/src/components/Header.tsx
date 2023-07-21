'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { apiRoute } from '@/libs/api';
import { useGlobalContext } from '@/contexts/context';
//import { cookies } from 'next/headers'

import { Profile } from '@/libs/Profile';
import { SignIn } from '@/libs/SignIn';

import { User2 } from 'lucide-react';
import Logo from '../app/icon.png';
import asset from '../assets/profile.png';

export default function Header() {
  //const isAuthenticated = cookies().has('token');
  const { user, setUser } = useGlobalContext();
  const [isLogged, setIsLogged] = useState<boolean>(false);

/*   useEffect(() => {
    if (userGet) {
      setUser(userGet);
      setIsLogged(true);
    }
  }, [setUser, userGet]); */

  const api = apiRoute();

  const fetchData = async () => {
    try {
      const response = await fetch(api + 'users/64b33c2257d70918a058023e');
      const data = await response.json();

      setUser(data.data);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }

    setIsLogged(true);
  };

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
      if (scrollPosition > 350) {
        setHeaderBackground('rgb(2, 12, 20)');
      } else if (scrollPosition > 250) {
        setHeaderBackground('rgba(2, 12, 20, 0.9)');
      } else if (scrollPosition > 150) {
        setHeaderBackground('rgba(2, 12, 20, 0.7)');
      } else if (scrollPosition > 50) {
        setHeaderBackground('rgba(2, 12, 20, 0.5)');
      } else if (scrollPosition <= 50) {
        setHeaderBackground('transparent');
      }
    };

    calculateBackground();
  }, [scrollPosition]);

  const handleLogout = () => {
    setIsLogged(false);
  };

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
            <Link
              href="#aboutUs"
              className="hover:text-zinc-50 transition-colors"              
            >
              About Us
            </Link>
          </li>
        </ul>

        {/*isAuthenticated ? <Profile /> : <SignIn />*/}

        {isLogged === true ? (
          <Link
            href=""
            className="flex items-center gap-2 text-zinc-50 font-alt transition-colors"
          >
            <Image src={asset} width={45} className="rounded-full" alt="" />
            <div>
              <p className="w-40 text-sm font-semibold">
                Bem vindo <span className="font-bold">{user?.name}</span>
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
            </p>
          </Link>
        )}
      </div>
    </div>
  );
}
