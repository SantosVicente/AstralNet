'use client';

import React, { useEffect, useState } from 'react';
import { User2 } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
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
      } else if(scrollPosition <= 50){
        setHeaderBackground('transparent');
      }
    };

    calculateBackground();
  }, [scrollPosition]);

  return (
    <header
      className="h-16 w-screen z-50 fixed headerBg flex items-center"
      style={{ backgroundColor: headerBackground }}
      id="header"
    >
      <div className="flex justify-between items-center font-bold w-full">
        <Link href="" className="flex gap-2 ml-10 items-center">
          <p className="text-3xl font-alt">Astral NET</p>
        </Link>

        <ul className="flex gap-4 ml-16 font-alt text-zinc-400">
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

        <Link
          href=""
          className="hover:text-zinc-50 flex items-center gap-2 text-zinc-400 font-alt mr-10 transition-colors"
        >
          <div className="p-2 bg-zinc-400 bg-opacity-25 rounded-full">
            <User2 size={25} />
          </div>
          <p className="w-40 text-sm font-semibold">
            <span className="underline">Crie sua conta</span> e viaje pelo
            cosmos!
          </p>
        </Link>
      </div>
    </header>
  );
}
