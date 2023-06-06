import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Balance from "react-wrap-balancer";

import Header from "@/components/Header";
import ToFind from "@/components/ToFind";
import ToRead from "@/components/ToRead";
import Cards from "@/components/Cards";

import { Element } from "react-scroll";
import { Fade } from "react-awesome-reveal";

export default function Home() {
  /*
  <ScrollRevealComponent>
    <p className="scroll-reveal text-5xl font-bold">
      Bem vindo ao Astral Nexus
    </p>
  </ScrollRevealComponent>;
  */

  return (
    <div className="overflow-hidden">
      <div className="bg">
        <header className="h-16 w-full">
          <Header />
        </header>
        <main className="flex flex-col h-[92.5vh] w-full items-center justify-center">
          <div className="pl-24 w-screen h-[90vh]  flex flex-col justify-center gap-6">
            <h1 className="font-alt text-5xl title max-w-[720px] scroll-reveal">
              <Balance>A ASTRONOMIA DESVENDADA DE MANEIRA SIMPLES</Balance>
            </h1>
            <p className="scroll-reveal text-lg max-w-[670px]  title text-zinc-300 text-opacity-90 text-justify">
              Nós traduzimos o universo em palavras simples para que você possa
              explorá-lo sem dificuldade. Tornando a astronomia acessível a
              todos, porque a curiosidade sobre o espaço não conhece limites.
            </p>
            <div className="flex gap-4 items-center">
              <Link
                href=""
                className="btn scroll-reveal px-4 py-2 rounded-md bg-gradient-to-br from-pink-500 to-blue-500"
              >
                Comece Agora
              </Link>
              <Link
                href=""
                className="btn scroll-reveal opacity px-6 py-2 rounded-md border border-blue-500 hover:border-pink-500"
              >
                Saiba Mais
              </Link>
            </div>
          </div>
          <div className="w-full mt-auto h-[10%] flex items-start justify-center">
            <div className="flex flex-col items-center gap-1 opacity-60">
              <div className="flex p-2 bg-purple-500 rounded-full">
                <ChevronDown size={25} />
              </div>
              <div className="w-4 h-4 bg-purple-500 rounded-full" />
            </div>
          </div>
        </main>
      </div>
      <div className="mt-4 pt-72">
        <ToFind />
      </div>
      <div className="pt-96">
        <ToRead />
      </div>
      <div className="pt-96 mb-24">
        <Cards />
      </div>
    </div>
  );
}
