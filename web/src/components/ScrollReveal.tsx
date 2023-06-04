'use client'

import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal'; //use scrollreveal para fazer parallax
//import { motion } from "framer-motion" //use frame-motion para fazer animações

interface ScrollRevealComponentProps {
  children: React.ReactNode;
}

const ScrollRevealComponent: React.FC<ScrollRevealComponentProps> = ({ children }) => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      ScrollReveal().reveal('.scroll-reveal', {
        opacity: 0,  // Começa com opacidade 0 (invisível)
        reset: true, // Reseta a animação quando o elemento sai da tela
        distance: '50px', // Distância da animação
        origin: 'bottom', // Origem da animação
        duration: 1500, // Duração da animação em milissegundos
      });
    }
  }, []);

  return <div className="scroll-reveal">{children}</div>;
};

export default ScrollRevealComponent;
