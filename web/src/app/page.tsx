import React from "react";
import ScrollRevealComponent from "../components/ScrollReveal";
import Header from "@/components/Header";
import BodyLP from "@/components/BodyLP";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Home() {
  /*
  <ScrollRevealComponent>
    <p className="scroll-reveal text-5xl font-bold">
      Bem vindo ao Astral Nexus
    </p>
  </ScrollRevealComponent>;
  */

  return (
    <div className="bg">
      <header className="h-16 w-full">
        <Header />
      </header>
      <main className="flex flex-col h-[92.5vh] w-full items-center justify-center">
        <ScrollRevealComponent>
          <div className="pl-24 relative w-screen flex flex-col gap-4">
            <h1 className="font-alt text-5xl max-w-[720px] scroll-reveal">
              A ASTRONOMIA DESVENDADA DE MANEIRA SIMPLES
            </h1>
            <p className="scroll-reveal text-md max-w-[720px] text-zinc-300 text-justify">
              Nós traduzimos o universo em palavras simples para que você possa
              explorá-lo sem dificuldade. Tornando a astronomia acessível a
              todos, porque a curiosidade sobre o espaço não conhece limites.
            </p>
            <div className="flex gap-4 items-center">
              <Link
                href=""
                className="scroll-reveal px-4 py-2 rounded-md bg-gradient-to-br from-pink-500 to-blue-500 transition-transform transform hover:scale-110"
              >
                Comece Agora
              </Link>
              <Link
                href=""
                className="scroll-reveal opacity px-6 py-2 rounded-md border border-blue-500 hover:border-pink-500"
              >
                Saiba Mais
              </Link>
            </div>
            <div className="w-[50%] absolute bottom-[-30vh] left-8 flex justify-end">
              <div className="flex flex-col items-center gap-1 opacity-60">
                <div className="flex p-2 bg-purple-500 rounded-full">
                  <ChevronDown size={25}/>
                </div>
                <div className="w-4 h-4 bg-purple-500 rounded-full" />
              </div>
            </div>
          </div>
        </ScrollRevealComponent>
      </main>
      <BodyLP />
    </div>
  );
}
