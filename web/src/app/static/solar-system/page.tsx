'use client';

import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './ImageTransition.css'; // Estilo para a transição
import Image from 'next/image';
import background from '../../../assets/BlackHole.svg';
import background2 from '../../../assets/asteroid.svg';

export default function SolarSystem() {
  const [showImage, setShowImage] = useState(false);

  const toggleImage = () => {
    setShowImage(!showImage);
  };

  return (
    <div className="pt-16 flex items-center h-screen justify-center">
      <div>
        <button onClick={toggleImage}>Toggle Image</button>

        <CSSTransition
          in={showImage}
          timeout={3000} // Tempo da transição em milissegundos
          classNames="fade"
          unmountOnExit
        >
          <Image
            src={showImage ? background : background2}
            alt="Imagem"
            className="image"
            onClick={toggleImage}
          />
        </CSSTransition>
      </div>
    </div>
  );
}
