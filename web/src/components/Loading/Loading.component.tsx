'use client';

import React, { useEffect, useState } from 'react';

import { CircularProgress } from '@nextui-org/react';

interface LoadingProps {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

export default function Loading(props: LoadingProps) {
  function calcularValor(incrementos: number[], progresso: number) {
    const totalPassos = incrementos.length;
    const valorMaximo = 100;

    // Calcula o tamanho de incremento para cada passo
    const tamanhoIncremento = valorMaximo / totalPassos;

    // Calcula o valor de progresso com base nos incrementos
    for (let i = 0; i < totalPassos; i++) {
      if (progresso >= i * tamanhoIncremento) {
        progresso += incrementos[i];
      }
    }

    // Garante que o valor não ultrapasse 100
    const valor = Math.min(progresso, valorMaximo);

    return valor;
  }

  useEffect(() => {
    const incrementos = [5, 10, 15, 3];
    const interval = setInterval(() => {
      props.setValue((v) => (v >= 100 ? 100 : calcularValor(incrementos, v)));
    }, 1000);

    return () => clearInterval(interval);
  }, [props]);

  return (
    <div className="flex flex-col items-center h-screen w-screen z-[90] justify-center bg-zinc-900">
      <div>
        <CircularProgress
          aria-label="Loading..."
          classNames={{
            svg: 'w-36 h-36 drop-shadow-md',
            track: 'stroke-white/10',
            value: 'text-3xl font-semibold text-white select-none font-alt',
          }}
          value={props.value}
          color="danger"
          strokeWidth={2}
          showValueLabel={true}
        />
      </div>
      <p className="text-white text-3xl font-semibold font-alt mt-8 select-none">
        Carregando o conteúdo...
      </p>
    </div>
  );
}
