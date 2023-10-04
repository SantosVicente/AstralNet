'use client';

import { Card } from '../Card/Card.component';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { register } from 'swiper/element/bundle';
import { BlockedCard } from '../Card/BlockedCard.component';
import Image from 'next/image';
import './pane.css';
import BlackHole from '../../assets/BlackHole.svg';
import PaneImage from '../../assets/pane.jpeg';

register();
import 'swiper/css';
import 'swiper/css/navigation'; //import das setas
import 'swiper/css/pagination'; //import da paginação
import 'swiper/css/scrollbar'; //import da scrollbar
import 'swiper/css/effect-coverflow';
import Link from 'next/link';

export default function Pane() {
  const [cardIndex, setCardIndex] = useState(0);

  const panelClipPath = {
    clipPath:
      'polygon(7% 0%, 93% 0%, 100% 20%, 100% 80%, 93% 100%, 7% 100%, 0% 80%, 0% 20%)',
  };

  const panelStyle = {
    width: '90%', // Ajuste o tamanho conforme necessário
    height: '80vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Cor de fundo do painel
    border: '2px solid #fff', // Borda branca
    borderRadius: '10px', // Borda arredondada
  };

  const selectDestination = () => {
    switch (cardIndex) {
      case 0:
        window.location.href = '/immersive/black-hole';
        break;
      case 1:
        break;
      case 2:
        break;
    }
  };

  return (
    <Box className="pt-16 flex flex-col items-center h-screen w-screen justify-center z-[40] bg-blue-950 absolute top-0 left-0 select-none">
      <Box className="relative flex items-center justify-center flex-col">
        <div
          className="absolute top-[-3rem] left-[5%] w-screen h-screen z-[-10]"
          style={{ ...panelStyle, ...panelClipPath }}
        />

        <Box className="mb-11 flex gap-10 w-screen items-center justify-center">
          <Box className="border-card2 border border-zinc-600 rounded-md flex w-[25%] h-[4.5rem] transition-colors text-zinc-400 hover:text-zinc-50 bg-zinc-50 bg-opacity-5 items-center justify-center" />
          <Box className="border-card2 border border-zinc-600 rounded-md flex px-[3rem] pb-[1rem] pt-[1.5rem] transition-colors text-zinc-100 bg-zinc-50 bg-opacity-5 items-center justify-center">
            <Typography variant="h4">Escolha seu Caminho</Typography>
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
              onTransitionEnd={(swiper) => {
                setCardIndex(swiper.activeIndex);
              }}
            >
              <SwiperSlide>
                <Card
                  title="Buracos Negros"
                  description="Selecione essa opção para conhecer os 
                buracos negros e compreender os mitsérios que os cercam. 
                De acordo com você seus pais estavam indo em direção a um deles, 
                caso queira, iremos ir ao mais próximo deles daqui, quem sabe 
                encontraremos algo relacionado ao seu paradeiro"
                  icon={
                    <Image src={BlackHole} width={70} alt="" className="mt-6" />
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <BlockedCard section={'Estrelas'} />
              </SwiperSlide>
              <SwiperSlide>
                <BlockedCard section={'Sistema Solar'} />
              </SwiperSlide>
            </Swiper>
          </Box>
        </Box>
        <Box onClick={selectDestination} className="button mt-8">
          <span></span>
          <span></span>
          Selecionar Destino
        </Box>
      </Box>
    </Box>
  );
}
