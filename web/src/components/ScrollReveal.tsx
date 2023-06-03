'use client'

import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

interface ScrollRevealComponentProps {
  children: React.ReactNode;
}

const ScrollRevealComponent: React.FC<ScrollRevealComponentProps> = ({ children }) => {
  useEffect(() => {
    ScrollReveal().reveal('.scroll-reveal', {
      opacity: 0,  // Começa com opacidade 0 (invisível)
      reset: true, // Reseta a animação quando o elemento sai da tela
      distance: '50px', // Distância da animação
      origin: 'bottom', // Origem da animação
      duration: 1000, // Duração da animação em milissegundos
    });
  }, []);

  return <div className="scroll-reveal">{children}</div>;
};

export default ScrollRevealComponent;
