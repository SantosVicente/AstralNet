'use client'

import React from 'react';
import ScrollRevealComponent from '../components/ScrollReveal';

const HomePage: React.FC = () => {
  return (
    <>
        <ScrollRevealComponent>
          <p className="scroll-reveal text-5xl font-bold">Bem vindo ao Astral Nexus</p>
        </ScrollRevealComponent>
    </>
  );
};

export default HomePage;
