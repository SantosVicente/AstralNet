'use client'

import { Card } from "@/components/Card/Card.component";
import { Box, Button, Typography } from "@mui/material";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import background from '../../assets/1311860.jpeg'

import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination } from 'swiper/modules';

register();
import 'swiper/css'
import 'swiper/css/navigation' //import das setas
import 'swiper/css/pagination' //import da paginação
import 'swiper/css/scrollbar'  //import da scrollbar
import 'swiper/css/effect-coverflow'

export default function Imersive() {
  const [mensagens, setMensagens] = useState([
    'Olá, eu sou o seu guia nessa jornada.',
    'Você está prestes a embarcar em uma viagem para o espaço sideral.',
    'Sei que deve estar confuso em estar aqui, mas não se preocupe, eu vou te explicar tudo.',
    'Você está em uma nave espacial, e aparentemente sofreu uma perda de memória.',
    'Você não se lembra de nada, nem mesmo do seu nome.',
    'Mas não se preocupe, eu vou te ajudar a recuperar a sua memória.',
    'Para isso, você vai precisar passar por alguns testes.',
    'Esses testes vão te ajudar a recuperar a sua memória.',
    'Você está pronto para começar?',
    'Ótimo, vamos lá!',
  ]);
  const [mensagemAtual, setMensagemAtual] = useState('');
  const [indiceMensagem, setIndiceMensagem] = useState(0);

  useEffect(() => {
    const mensagemCompleta = mensagens[indiceMensagem];
    if (mensagemAtual.length < mensagemCompleta.length) {
      setTimeout(() => {
        setMensagemAtual(mensagemAtual + mensagemCompleta[mensagemAtual.length]);
      }, 50);
    }
  }, [mensagemAtual, indiceMensagem, mensagens]);


  const avancarMensagem = () => {
    const mensagemCompleta = mensagens[indiceMensagem];

    if (mensagemAtual.length < mensagemCompleta.length) {
      setMensagemAtual(mensagemCompleta);
    } else {
      if (indiceMensagem < mensagens.length - 1) {
        setIndiceMensagem(indiceMensagem + 1);
        setMensagemAtual('');
      } else {
        setMensagemAtual('Nada acontece...');

        setTimeout(() => {
          setMensagemAtual('Nada acontece... Por enquanto.');
        }, 1500);
      }
    }
  };

  return (
    <Box className="w-screen h-screen bg2 flex items-end overflow-hidden">
      <Box className="h-[15rem] w-full m-3 bg-opacity-90 bg-black text-white p-2 rounded cursor-pointer border border-red-500" onClick={avancarMensagem}>
        <p className="m-4 font-alt text-3xl">
          {mensagemAtual}
        </p>
      </Box>
    </Box>
  );
}
    {/*<Box className="pt-16 flex flex-col items-center h-screen justify-center">
      <Box className="mb-11 flex gap-10 w-screen items-center justify-center">
        <Box className="border-card2 border border-zinc-600 rounded-md flex w-[25%] h-[4.5rem] transition-colors text-zinc-400 hover:text-zinc-50 bg-zinc-50 bg-opacity-5 items-center justify-center" />
        <Box className="border-card2 border border-zinc-600 rounded-md flex px-[1rem] pb-[1rem] pt-[1.5rem] transition-colors text-zinc-100 bg-zinc-50 bg-opacity-5 items-center justify-center">
          <Typography variant="h4">Escolha seu Próximo Destino</Typography>
        </Box>
        <Box className="border-card2 border border-zinc-600 rounded-md flex w-[25%] h-[4.5rem] transition-colors text-zinc-400 hover:text-zinc-50 bg-zinc-50 bg-opacity-5 items-center justify-center" />
      </Box>
      <Box className="flex gap-10 items-center">
        <Box className="flex gap-10">
          <Swiper
            effect={'coverflow'}
            navigation={true}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
          >
            <SwiperSlide>
              <Card title="Card 1" description="Conteudo do Card 1" link="./imersive" />
            </SwiperSlide>
            <SwiperSlide>
              <Card title="Card 2" description="Conteudo do Card 2" link="./imersive" />
            </SwiperSlide>
            <SwiperSlide>
              <Card title="Card 3" description="Conteudo do Card 3" link="./imersive" />
            </SwiperSlide>
          </Swiper>
        </Box>
      </Box>
      <Button className="text-white border border-zinc-600 mt-11 p-10 text-2xl rounded-lg font-alt hover:font-bold hover:border-zinc-200" variant="outlined">Selecionar Destino</Button>
    </Box>*/}