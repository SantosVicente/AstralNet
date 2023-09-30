'use client';

import { Card } from '../Card/Card.component';
import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { register } from 'swiper/element/bundle';
import { BlockedCard } from '../Card/BlockedCard.component';
import Image from 'next/image';

import BlackHole from '../../assets/BlackHole.svg';

register();
import 'swiper/css';
import 'swiper/css/navigation'; //import das setas
import 'swiper/css/pagination'; //import da paginação
import 'swiper/css/scrollbar'; //import da scrollbar
import 'swiper/css/effect-coverflow';

export default function Pane() {
  const [cardIndex, setCardIndex] = useState(0);

  return (
    <Box className="pt-16 flex flex-col items-center h-screen justify-center">
      <Box className="mb-11 flex gap-10 w-screen items-center justify-center">
        <Box className="border-card2 border border-zinc-600 rounded-md flex w-[25%] h-[4.5rem] transition-colors text-zinc-400 hover:text-zinc-50 bg-zinc-50 bg-opacity-5 items-center justify-center" />
        <Box className="border-card2 border border-zinc-600 rounded-md flex px-[1rem] pb-[1rem] pt-[1.5rem] transition-colors text-zinc-100 bg-zinc-50 bg-opacity-5 items-center justify-center">
          <Typography variant="h4">Escolha seu Próximo Destino!</Typography>
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
              <BlockedCard />
            </SwiperSlide>
            <SwiperSlide>
              <BlockedCard />
            </SwiperSlide>
          </Swiper>
        </Box>
      </Box>
      <Button
        className="text-white border border-zinc-600 mt-11 p-10 text-2xl rounded-lg font-alt hover:font-bold hover:border-zinc-200"
        variant="outlined"
      >
        Selecionar Destino
      </Button>
    </Box>
  );
}
