'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { apiRoute } from '@/libs/api';
import { useContext } from 'react';

import { Box } from '@mui/material';
import { User2 } from 'lucide-react';
import Logo from '../../app/icon.png';
import asset from '../../assets/profile.png';
import { AuthContext } from '@/contexts/Auth/authContext';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  User,
} from '@nextui-org/react';

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
      if (scrollPosition > 50) {
        // precisamos da % de 0 a 350, ai evitaria a gamb de deixar varios if
        //350 of 350 = 100%
        //100 of 350 = 28.57%
        setHeaderBackground('rgba(2, 12, 20, ' + scrollPosition / 350 + ')');
      } else if (scrollPosition <= 50) {
        setHeaderBackground('transparent');
      }
    };

    calculateBackground();
  }, [scrollPosition]);

  return (
    <div
      className="h-16 w-screen z-[60] fixed headerBg flex items-center px-[2%]"
      style={{ backgroundColor: headerBackground }}
      id="header"
    >
      <div className="flex justify-between items-center font-bold w-full">
        <Link tabIndex={-1} href="/" className="flex gap-2 items-center">
          <Image src={Logo} alt="" width={50} />
          <p className="text-3xl font-alt">Astral NET</p>
        </Link>

        <ul className="flex gap-4  font-alt text-zinc-400">
          <li>
            <Link
              tabIndex={-1}
              href="/immersive"
              className="hover:text-zinc-50 transition-colors"
            >
              Trilha Immersive
            </Link>
          </li>
          <li>
            <Link
              tabIndex={-1}
              href="/static"
              className="hover:text-zinc-50 transition-colors"
            >
              Trilha Static
            </Link>
          </li>
        </ul>

        {auth.user ? (
          <Dropdown tabIndex={-1} placement="bottom-start">
            <DropdownTrigger>
              <div className="transition-transform flex cursor-pointer items-center gap-1 transform hover:scale-105">
                <User
                  tabIndex={-1}
                  as="button"
                  avatarProps={{
                    isBordered: false,
                    src: `${asset.src}`,
                  }}
                  description=""
                  name=""
                />
                <div>
                  <p className="w-40 text-sm font-alt font-semibold text-zinc-300">
                    Bem vindo{' '}
                    <span className="font-bold text-zinc-100">
                      {auth.user?.name}
                    </span>
                  </p>
                  <p
                    className="text-xs hover:text-zinc-100 text-zinc-400 transition-colors"
                    onClick={() => console.log(asset)}
                  >
                    Clique para Abrir o Menu
                  </p>
                </div>
              </div>
            </DropdownTrigger>
            <DropdownMenu aria-label="User Actions" variant="solid">
              <DropdownItem
                key="settings"
                className="font-alt text-zinc-800 transition-colors"
              >
                <span className="font-bold">My Settings</span>
              </DropdownItem>
              <DropdownItem
                key="preferences"
                className="font-alt text-zinc-800 transition-colors"
              >
                Preferences
              </DropdownItem>
              <DropdownItem
                key="help_and_feedback"
                className="font-alt text-zinc-800 transition-colors"
              >
                Help & Feedback
              </DropdownItem>
              <DropdownItem
                key="logout"
                color="danger"
                className="font-alt text-red-600 hover:text-zinc-800 transition-colors"
                onClick={handleLogout}
              >
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown> /*
          <Box className="select-none flex items-center gap-2 text-zinc-50 font-alt transition-colors cursor-pointer">
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
          </Box>*/
        ) : (
          <Box
            onClick={fetchData}
            className="select-none hover:text-zinc-50 flex items-center gap-3 text-zinc-400 font-alt transition-colors cursor-pointer"
          >
            <div className="p-2 bg-zinc-400 bg-opacity-25 rounded-full">
              <User2 size={25} />
            </div>
            <p className="w-40 text-sm font-semibold">
              <span className="underline">Crie sua conta</span> e viaje pelo
              cosmos!
              {isLoading === true ? (
                <p className="text-sm">Carregando...</p>
              ) : null}
            </p>
          </Box>
        )}
      </div>
    </div>
  );
}
