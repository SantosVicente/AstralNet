'use client';

import { Box } from '@mui/material';

import { useEffect, useState } from 'react';
import background from '../../assets/1311860.jpeg';

import { register } from 'swiper/element/bundle';

register();
import 'swiper/css';
import 'swiper/css/navigation'; //import das setas
import 'swiper/css/pagination'; //import da paginação
import 'swiper/css/scrollbar'; //import da scrollbar
import 'swiper/css/effect-coverflow';
import { setTimeout } from 'timers';

import './imersive.css';

export default function Imersive() {
  const backgrounds = [
    { id: 1, url: { background } },
    { id: 2, url: '/path/to/background2.jpg' },
    { id: 3, url: '/path/to/background3.jpg' },
  ];

  const [mensagens, setMensagens] = useState([
    {
      id: 1,
      backgroundID: 1,
      msg: 'Olá, eu sou o seu guia nessa jornada.',
      progresso: 0,
    },
    {
      id: 2,
      backgroundID: 1,
      msg: 'Você está prestes a embarcar em uma viagem para o espaço sideral.',
      progresso: 0,
    },
    {
      id: 3,
      backgroundID: 1,
      msg: 'Sei que deve estar confuso em estar aqui, mas não se preocupe, eu vou te explicar tudo.',
      progresso: 0,
    },
    {
      id: 4,
      backgroundID: 1,
      msg: 'Você está em uma nave espacial, e aparentemente sofreu uma perda de memória.',
      progresso: 0,
    },
    {
      id: 5,
      backgroundID: 1,
      msg: 'Você não se lembra de nada, nem mesmo do seu nome.',
      progresso: 0,
    },
    {
      id: 6,
      backgroundID: 2,
      msg: 'Mas não se preocupe, eu vou te ajudar a recuperar a sua memória.',
      progresso: 0,
    },
    {
      id: 7,
      backgroundID: 2,
      msg: 'Para isso, você vai precisar passar por alguns testes.',
      progresso: 0,
    },
    {
      id: 8,
      backgroundID: 1,
      msg: 'Esses testes vão te ajudar a recuperar a sua memória.',
      progresso: 0,
    },
    {
      id: 9,
      backgroundID: 1,
      msg: 'Você está pronto para começar?',
      progresso: 0,
    },
    {
      id: 10,
      backgroundID: 1,
      msg: 'Ótimo, vamos lá!',
      progresso: 0,
    },
  ]);

  const [mensagemAtual, setMensagemAtual] = useState('');
  const [indiceMensagem, setIndiceMensagem] = useState(0);
  const [typing, setTyping] = useState(true);
  const [backgroundIndex, setBackgroundIndex] = useState(1);

  const BoxElement = document.getElementById('imersive-bg');
  useEffect(() => {
    document.body.classList.add('overflow-hidden-body');

    return () => {
      document.body.classList.remove('overflow-hidden-body');
    };
  }, []);

  useEffect(() => {
    if (mensagens[indiceMensagem].backgroundID != backgroundIndex) {
      setBackgroundIndex(mensagens[indiceMensagem].backgroundID);
    }
  }, [indiceMensagem, backgroundIndex, mensagens, BoxElement]);

  useEffect(() => {
    if (typing) {
      const currentPhrase = mensagens[indiceMensagem].msg;
      const textLength = mensagemAtual.length;

      if (textLength < currentPhrase.length) {
        const timeoutId = setTimeout(() => {
          setMensagemAtual(currentPhrase.substring(0, textLength + 1));
        }, 50); // Velocidade de digitação, você pode ajustar isso

        return () => clearTimeout(timeoutId);
      } else {
        setTyping(false);
      }
    } else {
      setMensagemAtual('');
    }
  }, [mensagemAtual, mensagens, indiceMensagem, typing]);

  const handleDivClick = () => {
    if (typing) {
      //se mensagemAtual ainda tiver digitando, exiba a frase inteira
      setMensagemAtual(mensagens[indiceMensagem].msg);
      setTyping(false);
    } else {
      // Vá para a próxima frase ou reinicie
      if (indiceMensagem < mensagens.length - 1) {
        setIndiceMensagem(indiceMensagem + 1);
        setTyping(true);
      }
    }
  };

  return (
    <>
      <Box
        className={`w-screen h-screen bg${backgroundIndex} flex items-end overflow-hidden`}
        id="imersive-bg"
      >
        <Box
          className="h-[15rem] w-full m-3 bg-opacity-80 bg-black text-white p-2 rounded-xl cursor-pointer border border-red-500"
          onClick={handleDivClick}
        >
          <p className="m-4 font-alt text-3xl select-none">
            {typing ? mensagemAtual : mensagens[indiceMensagem].msg}
          </p>
        </Box>
      </Box>
    </>
  );
}
