'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { User2 } from 'lucide-react';
import Logo from '../app/icon.png';
import Profile from '../assets/profile.png';

interface User {
  id: number;
  name: string;
}

export default function Header() {
  const [user, setUser] = useState<User | null>(null);
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

  const handleLogin = () => {
    const loggedInUser: User = {
      id: 1,
      name: 'John Doe',
    };
    setUser(loggedInUser);
  };

  const handleLogout = () => {
    setUser(null);
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
              href="#about"
              className="hover:text-zinc-50 transition-colors"
            >
              About Us
            </Link>
          </li>
        </ul>

        {user ? (
          <Link
            href=""
            className="flex items-center gap-2 text-zinc-50 font-alt transition-colors"
          >
            <Image src={Profile} width={45} className="rounded-full" alt="" />
            <div>
              <p className="w-40 text-sm font-semibold">
                Bem vindo <span className="font-bold">{user.name}</span>
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
            onClick={handleLogin}
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
